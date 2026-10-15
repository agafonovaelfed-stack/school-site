import { after, before, test } from "node:test";
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { setTimeout as delay } from "node:timers/promises";
import { chromium } from "playwright";

const origin = "http://127.0.0.1:4187";
let server;
let browser;
let serverLog = "";

before(async () => {
  server = spawn(
    process.execPath,
    [
      "node_modules/vite/bin/vite.js",
      "preview",
      "--host",
      "127.0.0.1",
      "--port",
      "4187",
      "--strictPort",
    ],
    { stdio: ["ignore", "pipe", "pipe"] },
  );
  server.stdout.on("data", (chunk) => {
    serverLog += chunk.toString();
  });
  server.stderr.on("data", (chunk) => {
    serverLog += chunk.toString();
  });
  let ready = false;
  for (let attempt = 0; attempt < 100; attempt++) {
    if (server.exitCode !== null)
      throw new Error(`Preview server stopped: ${serverLog}`);
    try {
      const response = await fetch(origin);
      if (response.ok) {
        ready = true;
        break;
      }
    } catch {}
    await delay(100);
  }
  assert.ok(ready, `Preview server did not start: ${serverLog}`);
  const executablePath =
    process.env.CHROMIUM_PATH ||
    (existsSync("/usr/bin/chromium") ? "/usr/bin/chromium" : undefined);
  browser = await chromium.launch({ executablePath, args: ["--no-sandbox"] });
});

after(async () => {
  if (browser) await browser.close();
  if (server && server.exitCode === null) {
    const stopped = new Promise((resolve) => server.once("exit", resolve));
    server.kill("SIGTERM");
    await stopped;
  }
});

async function openPage(
  viewport = { width: 1440, height: 1000 },
  options = {},
) {
  const page = await browser.newPage({ viewport, ...options });
  await page.goto(origin, { waitUntil: "networkidle" });
  return page;
}

test("the production site loads local assets, the star field, and project content", async () => {
  const page = await browser.newPage();
  const errors = [];
  const failures = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("response", (response) => {
    if (response.status() >= 400) failures.push(response.url());
  });
  await page.goto(origin, { waitUntil: "networkidle" });
  assert.match(await page.title(), /Мой дом мечты/);
  assert.match(await page.locator("h1").innerText(), /Мой дом\s+мечты/);
  assert.equal(await page.locator(".star").count(), 125);
  assert.equal(
    await page
      .locator("#hero-image")
      .evaluate((image) => image.complete && image.naturalWidth > 0),
    true,
  );
  assert.match(
    await page.locator(".side-watermark").innerText(),
    /паша карась/i,
  );
  assert.equal(
    await page.evaluate(() => document.fonts.check("500 16px Manrope")),
    true,
  );
  assert.deepEqual(errors, []);
  assert.deepEqual(failures, []);
  await page.close();
});

test("both floors expose all eleven rooms and complete stories, with coherent areas", async () => {
  const page = await openPage();
  let roomCount = 0;
  let totalArea = 0;
  for (const [floor, expectedCount, expectedArea] of [
    [1, 6, 132],
    [2, 5, 108],
  ]) {
    await page.locator(`[data-floor="${floor}"]`).click();
    const ids = await page
      .locator("[data-select-room]")
      .evaluateAll((buttons) =>
        buttons.map((button) => button.dataset.selectRoom),
      );
    assert.equal(ids.length, expectedCount);
    let floorArea = 0;
    for (const id of ids) {
      await page.locator(`[data-select-room="${id}"]`).click();
      assert.equal(
        await page
          .locator(`[data-select-room="${id}"]`)
          .getAttribute("aria-pressed"),
        "true",
      );
      const roomTitle = await page.locator(".room-preview h3").innerText();
      floorArea += Number(
        (await page.locator(".room-preview .room-area").innerText()).match(
          /\d+/,
        )[0],
      );
      await page.locator(`.room-preview [data-open-room="${id}"]`).click();
      assert.equal(
        await page.locator("#room-dialog-title").innerText(),
        roomTitle,
      );
      assert.equal(
        await page.locator("#room-dialog .room-story-grid section").count(),
        3,
      );
      const descriptions = await page
        .locator("#room-dialog .room-story-grid p")
        .allTextContents();
      for (const description of descriptions)
        assert.ok(description.length > 150);
      assert.ok(
        (await page.locator(".room-dream-note").innerText()).length > 80,
      );
      await page.locator('[data-close-dialog="room-dialog"]').click();
      roomCount++;
    }
    assert.equal(floorArea, expectedArea);
    totalArea += floorArea;
  }
  assert.equal(roomCount, 11);
  assert.equal(totalArea, 240);
  await page.close();
});

test("room navigation returns to the matching floor, and tabs support the keyboard", async () => {
  const page = await openPage();
  await page.locator(".detail-creative").click();
  assert.equal(
    await page.locator("#room-dialog-title").innerText(),
    "Моя комната",
  );
  await page.locator('[data-show-on-plan="my-room"]').click();
  assert.equal(
    await page.locator("#floor-tab-2").getAttribute("aria-selected"),
    "true",
  );
  assert.equal(
    await page
      .locator('[data-select-room="my-room"]')
      .getAttribute("aria-pressed"),
    "true",
  );
  await page.locator("#floor-tab-2").focus();
  await page.keyboard.press("ArrowLeft");
  assert.equal(
    await page.locator("#floor-tab-1").getAttribute("aria-selected"),
    "true",
  );
  await page.keyboard.press("ArrowRight");
  assert.equal(
    await page.locator("#floor-tab-2").getAttribute("aria-selected"),
    "true",
  );
  assert.equal(
    await page.locator(".room-preview h3").innerText(),
    "Моя комната",
  );
  await page.locator(".room-preview [data-open-room]").click();
  await page
    .locator("#room-dialog .room-dialog-bottom [data-open-room]")
    .click();
  assert.equal(
    await page.locator("#room-dialog-title").innerText(),
    "Гостевая комната",
  );
  await page.keyboard.press("Escape");
  assert.equal(
    await page.locator("#room-dialog").evaluate((dialog) => dialog.open),
    false,
  );
  assert.equal(
    await page
      .locator("body")
      .evaluate((body) => body.classList.contains("dialog-open")),
    false,
  );
  await page.close();
});

test("the presentation runs all thirteen slides and supports keyboard, restart, and closing", async () => {
  const page = await openPage({ width: 1920, height: 1080 });
  await page.locator(".site-header .presentation-trigger").click();
  await page.locator("#fullscreen-button").click();
  await page.waitForFunction(
    () => document.fullscreenElement === document.documentElement,
  );
  const fullscreenSize = await page
    .locator("#presentation-dialog")
    .boundingBox();
  assert.equal(fullscreenSize.width, 1920);
  assert.equal(fullscreenSize.height, 1080);
  await page.locator("#fullscreen-button").click();
  await page.waitForFunction(() => !document.fullscreenElement);
  assert.equal(await page.locator("#previous-slide").isDisabled(), true);
  for (let index = 1; index <= 13; index++) {
    assert.equal(
      await page.locator("#slide-counter").innerText(),
      `${String(index).padStart(2, "0")} / 13`,
    );
    assert.ok((await page.locator("#slide-title").innerText()).length > 5);
    assert.equal(await page.locator(".slide-copy li").count(), 3);
    if (index < 13) await page.keyboard.press("ArrowRight");
  }
  assert.match(await page.locator("#slide-title").innerText(), /Спасибо/);
  await page.locator("#next-slide").click();
  assert.equal(await page.locator("#slide-counter").innerText(), "01 / 13");
  await page.keyboard.press("End");
  assert.equal(await page.locator("#slide-counter").innerText(), "13 / 13");
  await page.keyboard.press("Home");
  assert.equal(await page.locator("#slide-counter").innerText(), "01 / 13");
  await page.keyboard.press("Escape");
  assert.equal(
    await page
      .locator("#presentation-dialog")
      .evaluate((dialog) => dialog.open),
    false,
  );
  assert.equal(
    await page
      .locator("body")
      .evaluate((body) => body.classList.contains("dialog-open")),
    false,
  );
  await page.close();
});

test("layouts fit phone, computer, and board widths; touch navigation and dialogs work", async () => {
  const page = await openPage(undefined, { hasTouch: true });
  for (const width of [320, 390, 768, 1024, 1440, 1920, 2560]) {
    await page.setViewportSize({ width, height: width < 640 ? 844 : 1080 });
    await page.waitForTimeout(50);
    const scrollWidth = await page.evaluate(
      () => document.documentElement.scrollWidth,
    );
    assert.ok(
      scrollWidth <= width,
      `Horizontal overflow at ${width}px: ${scrollWidth}px`,
    );
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.locator("#menu-toggle").tap();
  assert.equal(
    await page.locator("#menu-toggle").getAttribute("aria-expanded"),
    "true",
  );
  await page.locator('#mobile-menu a[href="#explore"]').click();
  assert.equal(await page.locator("#mobile-menu").isHidden(), true);
  await page.locator(".site-header .presentation-trigger").click();
  const fits = await page.locator(".presentation-dialog").evaluate((dialog) => {
    const rect = dialog.getBoundingClientRect();
    return (
      rect.left >= 0 &&
      rect.right <= window.innerWidth &&
      rect.bottom <= window.innerHeight
    );
  });
  assert.ok(fits);
  await page.locator("#next-slide").click();
  assert.equal(await page.locator("#slide-title").innerText(), "Гостиная");
  await page.locator('[data-close-dialog="presentation-dialog"]').click();
  await page.close();
});

test("star animation has a working pause control and respects reduced motion", async () => {
  const page = await openPage();
  const button = page.locator("#motion-toggle");
  await button.click();
  assert.equal(await button.getAttribute("aria-pressed"), "true");
  assert.equal(
    await page
      .locator(".star")
      .first()
      .evaluate((star) => getComputedStyle(star).animationPlayState),
    "paused",
  );
  await button.click();
  assert.equal(await button.getAttribute("aria-pressed"), "false");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.waitForFunction(
    () =>
      document.querySelector("#motion-toggle").getAttribute("aria-pressed") ===
      "true",
  );
  assert.equal(
    await page
      .locator(".star")
      .first()
      .evaluate((star) => getComputedStyle(star).animationDuration),
    "1e-05s",
  );
  await page.close();
});
