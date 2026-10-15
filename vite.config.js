import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [
    {
      name: "development-entry",
      configureServer(server) {
        server.middlewares.use((request, _response, next) => {
          const [path, query] = (request.url || "/").split("?");
          if (path === "/" || path === "/index.html") {
            request.url = `/dev.html${query ? `?${query}` : ""}`;
          }
          next();
        });
      },
    },
  ],
  build: {
    rollupOptions: {
      input: fileURLToPath(new URL("./dev.html", import.meta.url)),
    },
  },
});
