const iconPaths = {
  house: '<path d="m3 10 9-7 9 7v11h-7v-7h-4v7H3Z"/><path d="M17 4V2h3v5"/>',
  sparkles:
    '<path d="m12 3 2.3 6.7L21 12l-6.7 2.3L12 21l-2.3-6.7L3 12l6.7-2.3Z"/><path d="m20 2 .6 1.4L22 4l-1.4.6L20 6l-.6-1.4L18 4l1.4-.6Z"/>',
  presentation:
    '<rect x="3" y="4" width="18" height="12" rx="1"/><path d="M12 16v5m-4 0 4-3 4 3M2 4h20m-12 4 5 2-5 3Z"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
  "arrow-up-right": '<path d="M6 18 18 6M6 6h12v12"/>',
  play: '<path d="m9 5 11 7-11 7Z"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m16 8-3 5-5 3 3-5Z"/>',
  layers: '<path d="m12 3 10 5-10 5L2 8Zm-10 9 10 5 10-5M2 16l10 5 10-5"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  ruler: '<path d="m3 16 13-13 5 5L8 21Zm9-9 2 2m-5 1 2 2m-5 1 2 2"/>',
  heart:
    '<path d="M20.5 5.5a5.4 5.4 0 0 0-8.5 1 5.4 5.4 0 0 0-8.5-1C-1 10 6 16 12 21c6-5 13-11 8.5-15.5Z"/>',
  leaf: '<path d="M20 3C9 2 2 7 4 15c3 9 17 5 16-12Z"/><path d="M4 21 15 9M9 16l-1-5m5 2 5 1"/>',
  "corner-down-left": '<path d="M20 4v9a3 3 0 0 1-3 3H4m4-4-4 4 4 4"/>',
  navigation: '<path d="m12 2 9 19-9-6-9 6Z"/>',
  sliders:
    '<path d="M4 5h4m6 0h6M4 12h10m6 0h0M4 19h2m6 0h8"/><circle cx="11" cy="5" r="3"/><circle cx="17" cy="12" r="3"/><circle cx="9" cy="19" r="3"/>',
  users:
    '<circle cx="9" cy="7" r="4"/><path d="M2 21v-3a7 7 0 0 1 14 0v3m0-18a4 4 0 0 1 0 8m6 10v-3a7 7 0 0 0-4-6"/>',
  "arrow-up": '<path d="M12 21V3M5 10l7-7 7 7"/>',
  "arrow-left": '<path d="M21 12H3m7-7-7 7 7 7"/>',
  "arrow-right": '<path d="M3 12h18m-7-7 7 7-7 7"/>',
  x: '<path d="m6 6 12 12M6 18 18 6"/>',
  expand: '<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',
  palette:
    '<path d="M12 3a9 9 0 1 0 0 18h2a2 2 0 0 0 1-4c-2-1 0-3 3-3h1a3 3 0 0 0 2-3 9 9 0 0 0-9-8Z"/><circle cx="7" cy="10" r=".6"/><circle cx="10" cy="6.5" r=".6"/><circle cx="15" cy="7" r=".6"/>',
  lightbulb: '<path d="M9 18h6m-5 3h4M8 14a6 6 0 1 1 8 0l-1 2H9Z"/>',
  layout:
    '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 10h18m-11 0v11"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
};
const icon = (name) =>
  `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name] || iconPaths.sparkles}</svg>`;
function hydrateIcons(root = document) {
  root.querySelectorAll("[data-icon]").forEach((node) => {
    node.innerHTML = icon(node.dataset.icon);
  });
}

const rooms = [
  {
    id: "living",
    name: "Гостиная",
    area: 40,
    floor: 1,
    furniture: "sofa",
    art: "living",
    intro:
      "Сердце нашего дома. Здесь мы собираемся всей семьёй, смотрим фильмы, играем в настольные игры и просто делимся новостями за день.",
    tags: ["Панорамные окна", "Мягкий диван", "Семейные вечера"],
    layout:
      "Большой угловой диван обращён к невысокому стеллажу с телевизором. В центре лежит мягкий ковёр и стоит круглый журнальный столик без острых углов. У окна — кресло для чтения, а в открытом шкафу хранятся книги и настольные игры. Раздвижная стеклянная дверь ведёт прямо на террасу.",
    atmosphere:
      "Тёплый дуб, льняные ткани, песочные и шалфейные оттенки. Днём комнату наполняет свет из панорамных окон. Вечером включаются торшер и мягкая подсветка полок; плотные шторы помогают устроить домашний киносеанс.",
    practical:
      "Мебель не перекрывает проход на террасу. Моющиеся чехлы на диване легко снять, а розетки у столика позволяют заряжать устройства без проводов через всю комнату. Отопление регулируется отдельно от остальных помещений.",
    dream:
      "Однажды мы соберёмся здесь всей семьёй, разложим большую настольную игру и совсем забудем про телефоны.",
  },
  {
    id: "kitchen",
    name: "Кухня-столовая",
    area: 28,
    floor: 1,
    furniture: "island",
    art: "kitchen",
    intro:
      "Место, где пахнет свежей выпечкой и начинается хорошее утро. Готовить, завтракать и разговаривать здесь одинаково приятно.",
    tags: ["Остров для готовки", "Стол на шестерых", "Выход в сад"],
    layout:
      "Вдоль стены расположены холодильник, мойка и плита, между ними — свободные рабочие поверхности. Посередине стоит остров с ящиками и двумя высокими стульями. У окна — обеденный стол на шесть человек, который можно раздвинуть, когда приходят гости.",
    atmosphere:
      "Матовые молочные фасады сочетаются с деревянными полками и светлой столешницей. Над столом висят тёплые подвесные светильники, а рабочая зона освещается отдельной лентой под шкафами. На подоконнике растут базилик и мята.",
    practical:
      "Между островом и шкафами оставлен широкий проход. Вытяжка убирает запахи, посудомоечная машина экономит время, а контейнеры под мойкой помогают сортировать отходы. Ножи и бытовая химия хранятся в закрытых секциях.",
    dream:
      "По выходным мы будем вместе печь пиццу: каждый придумает свою начинку, а потом все сядут за один большой стол.",
  },
  {
    id: "hallway",
    name: "Прихожая",
    area: 14,
    floor: 1,
    furniture: "closet",
    art: "hallway",
    intro:
      "Первое «привет» нашего дома. Светлая, свободная прихожая, где удобно снять обувь, оставить вещи и сразу почувствовать себя дома.",
    tags: ["Вход без ступенек", "Встроенный шкаф", "Удобная скамья"],
    layout:
      "У входа стоит скамья с отделением для обуви, рядом — крючки на разной высоте. Вдоль стены расположен встроенный шкаф для верхней одежды. Большое зеркало помогает собраться перед выходом, а небольшой столик хранит ключи. Лестница ведёт на второй этаж.",
    atmosphere:
      "Светлые стены, дубовая лестница и спокойные серо-бежевые детали создают ощущение порядка. Свет у входа включается по датчику движения, ступени подсвечиваются мягким светом снизу. Перила удобно держать и взрослым, и детям.",
    practical:
      "На полу — прочный нескользкий керамогранит, которому не страшны мокрые ботинки. Вход спроектирован без порога и ступенек, чтобы было удобно заносить велосипед, коляску или сумки. Проход к комнатам остаётся свободным.",
    dream:
      "Заходить домой после долгой прогулки, ставить рюкзак на скамью и слышать из кухни: «Мы как раз завариваем чай!»",
  },
  {
    id: "office",
    name: "Кабинет",
    area: 18,
    floor: 1,
    furniture: "desk",
    art: "creative",
    intro:
      "Спокойная комната для работы, учёбы и больших идей. Здесь легко сосредоточиться, а все нужные вещи всегда под рукой.",
    tags: ["Стол у окна", "Домашняя библиотека", "Тихая зона"],
    layout:
      "Широкий письменный стол стоит боком к окну: свет падает на рабочую поверхность, а не в глаза. Рядом — регулируемое кресло и стеллаж с книгами. На стене висит доска для планов и рисунков. Раскладной диван позволяет использовать кабинет как спальню на первом этаже.",
    atmosphere:
      "Пыльно-синие стены, дерево и несколько живых растений помогают отвлечься от суеты. Настольная лампа освещает тетради, потолочный свет равномерно освещает комнату. Плотная дверь и ковёр приглушают звуки.",
    practical:
      "Экран расположен на уровне глаз, высоту кресла можно менять. Кабели спрятаны в короб под столом, розетки доступны без удлинителей. Диван и свободный проход делают комнату удобной для гостя, которому трудно подниматься по лестнице.",
    dream:
      "В этом кабинете я хочу однажды придумать проект, который сделает чью-то жизнь немного удобнее.",
  },
  {
    id: "bathroom",
    name: "Гостевая ванная",
    area: 12,
    floor: 1,
    furniture: "bath",
    art: "bath",
    intro:
      "Небольшое пространство для ежедневного комфорта. Ванная рядом с общими комнатами удобна для гостей и всей семьи.",
    tags: ["Душ без порога", "Тёплый пол", "Экономия воды"],
    layout:
      "В комнате расположены просторная душевая за стеклянной перегородкой, подвесной унитаз и раковина с тумбой. Над раковиной — зеркало с подсветкой, сбоку — шкафчик для полотенец и хозяйственных принадлежностей.",
    atmosphere:
      "Матовая плитка под светлый камень и деревянная тумба делают ванную тёплой и спокойной. В потолке предусмотрен общий свет, у зеркала — отдельный. Небольшое матовое окно пропускает дневной свет и сохраняет приватность.",
    practical:
      "Душ выполнен без высокого бортика, на полу — нескользкая плитка. Вентиляция удаляет влажный воздух, датчик протечки перекрывает воду при аварии. Смесители с аэраторами помогают тратить меньше воды.",
    dream:
      "Мне нравится мысль, что даже маленькая комната может быть красивой и по-настоящему удобной для каждого.",
  },
  {
    id: "terrace",
    name: "Терраса",
    area: 20,
    floor: 1,
    furniture: "sofa",
    art: "terrace",
    intro:
      "Продолжение гостиной под открытым небом. Здесь можно завтракать летом, слушать птиц и разглядывать звёзды после заката.",
    tags: ["Вид на сад", "Мягкие кресла", "Вечера под звёздами"],
    layout:
      "У стены дома стоит небольшой стол для завтраков, дальше — два глубоких уличных кресла и низкий столик. В ящике под скамьёй лежат пледы. По краю растут лаванда и декоративные травы, а дорожка ведёт к саду с яблонями и небольшой грядке.",
    atmosphere:
      "Настил из террасной доски, плетёная мебель и мягкие подушки создают ощущение летней гостиной. Низкие светильники вдоль дорожки не слепят глаза. Гирлянда под навесом добавляет уюта, но её можно выключить, чтобы видеть звёзды.",
    practical:
      "Часть террасы защищена навесом от дождя и яркого солнца. Доски имеют нескользкую поверхность, уличная мебель не боится влаги. Свет направлен вниз, чтобы не мешать соседям и ночным животным. Дождевая вода с навеса поступает в ёмкость для полива.",
    dream:
      "Завернуться в плед, смотреть на созвездия и пытаться представить, сколько интересного ещё впереди.",
  },
  {
    id: "bedroom",
    name: "Спальня родителей",
    area: 24,
    floor: 2,
    furniture: "bed",
    art: "reading",
    intro:
      "Тихое место для отдыха после насыщенного дня. Здесь нет лишних вещей — только спокойствие, мягкий свет и любимые книги.",
    tags: ["Большая кровать", "Уголок для чтения", "Тихое утро"],
    layout:
      "В центре комнаты стоит двуспальная кровать с мягким изголовьем и двумя тумбами. У окна — удобное кресло с торшером и небольшим столиком для книги. Невысокий комод хранит повседневные вещи, а основная одежда находится в отдельной гардеробной.",
    atmosphere:
      "Оливковые и бежевые оттенки, натуральный лён и светлое дерево помогают расслабиться. Лёгкие шторы рассеивают дневной свет, а плотные закрывают его на время сна. У каждой стороны кровати есть отдельный светильник для чтения.",
    practical:
      "В комнате предусмотрены приток свежего воздуха и отдельная регулировка температуры. Телевизора здесь нет: это пространство для отдыха. Кровать доступна с обеих сторон, проходы не заняты мебелью.",
    dream:
      "Пусть у родителей всегда будет место, где можно выспаться, отдохнуть и встретить утро без спешки.",
  },
  {
    id: "my-room",
    name: "Моя комната",
    area: 28,
    floor: 2,
    furniture: "desk",
    art: "creative",
    intro:
      "Моя маленькая вселенная: учёба, увлечения и мечты в одной комнате. Здесь достаточно свободы, чтобы пробовать новое и оставаться собой.",
    tags: ["Место для проектов", "Зона отдыха", "Всё для увлечений"],
    layout:
      "Комната разделена на три зоны: кровать у спокойной стены, большой стол у окна и свободное место для творчества. На открытых полках стоят модели и книги, в закрытых ящиках лежат материалы для проектов. На пробковой доске — фотографии, идеи и планы.",
    atmosphere:
      "Светлые стены сочетаются с синими и лиловыми акцентами. За столом — яркая нейтральная лампа для уроков, у кровати — тёплый ночник. Небольшой проектор звёздного неба включается вечером и напоминает, что мечтам нет границ.",
    practical:
      "Высоту стола и кресла можно регулировать по мере роста. Для экрана и книг предусмотрено правильное расстояние, провода закреплены под столом. Полка с материалами находится под рукой, а свободный пол легко освободить для новых занятий.",
    dream:
      "Именно за этим столом я мог бы сделать свой первый сайт. Например, сайт про дом мечты — круг замкнулся!",
  },
  {
    id: "guest",
    name: "Гостевая комната",
    area: 22,
    floor: 2,
    furniture: "bed",
    art: "bedroom",
    intro:
      "Комната для тех, кому мы всегда рады. Хочется, чтобы друзья и близкие чувствовали себя здесь не в гостях, а почти как дома.",
    tags: ["Уютная кровать", "Место для вещей", "Всегда рады гостям"],
    layout:
      "У стены стоит удобная двуспальная кровать, которую дополняют две прикроватные полки. Рядом — небольшой шкаф с пустыми вешалками для гостей, столик и кресло. Для чемодана предусмотрена отдельная скамья, чтобы он не занимал проход.",
    atmosphere:
      "Спокойные терракотовые детали и молочные стены создают тёплый интерьер. На кровати лежит мягкий плед, у окна висят плотные шторы. Чистое постельное бельё и пара книг на полке делают комнату готовой к приезду близких.",
    practical:
      "Розетки для зарядки находятся у кровати, рядом с выключателем основного света. В шкафу лежат дополнительные подушки и одеяло. Гостям не нужно проходить через личные спальни, чтобы попасть в ванную.",
    dream:
      "Чтобы после долгого вечера никто не торопился домой: «Оставайтесь, ваша комната уже готова».",
  },
  {
    id: "upstairs-bath",
    name: "Семейная ванная",
    area: 14,
    floor: 2,
    furniture: "bath",
    art: "bath",
    intro:
      "Место для спокойного начала и завершения дня. Здесь можно быстро собраться утром или понежиться в тёплой ванне вечером.",
    tags: ["Ванна у окна", "Две раковины", "Удобное хранение"],
    layout:
      "Возле матового окна расположена ванна. Вдоль другой стены — широкая тумба с двумя раковинами, чтобы утром никому не приходилось ждать. Душевая зона отделена стеклом, высокий шкаф хранит полотенца и средства ухода.",
    atmosphere:
      "Мягкие оттенки камня, дерево и немного зелени напоминают маленький домашний спа. Утром используется яркий общий свет, вечером — приглушённая подсветка за зеркалами и под тумбой.",
    practical:
      "Электрические розетки защищены от влаги и расположены в безопасных зонах. Пол не скользит, вентиляция включается по влажности. Термостат смесителя помогает поддерживать выбранную температуру воды, а датчик протечки следит за безопасностью.",
    dream:
      "После прохладной прогулки погрузиться в тёплую воду и слушать, как дождь тихо стучит по окну.",
  },
  {
    id: "wardrobe",
    name: "Гардеробная и холл",
    area: 20,
    floor: 2,
    furniture: "closet",
    art: "hallway",
    intro:
      "Продуманное пространство между комнатами. Общий холл и гардеробная помогают поддерживать порядок и оставлять в спальнях больше воздуха.",
    tags: ["Порядок в вещах", "Свободные проходы", "Сезонное хранение"],
    layout:
      "От лестницы открывается короткий холл с входами в комнаты. В отдельной гардеробной стоят стеллажи, секции с перекладинами и комод. На верхних полках лежат сезонные вещи и чемоданы, внизу — корзины для белья и обуви. В полный рост можно посмотреться в зеркало.",
    atmosphere:
      "Светлые фасады и деревянные ручки продолжают стиль дома. Подсветка внутри шкафов помогает находить вещи, потолочный свет освещает проход. Закрытые секции защищают одежду от пыли, а открытые подходят для повседневных вещей.",
    practical:
      "У каждой вещи есть место, поэтому спальни не загромождены большими шкафами. Между секциями оставлен удобный проход; вентиляция не даёт воздуху застаиваться. Лестничный проём ограждён надёжными перилами, ночью включается дежурный свет.",
    dream:
      "Тратить по утрам меньше времени на поиски вещей и больше — на завтрак с семьёй.",
  },
];

// Original SVG interior illustrations. Unique IDs keep gradients independent in dialogs and slides.
let sceneNumber = 0;
function sceneSvg(type) {
  const n = `scene${++sceneNumber}`;
  const terrace = type === "terrace";
  const kitchen = type === "kitchen";
  const bath = type === "bath";
  const bedroom = type === "bedroom";
  const creative = type === "creative";
  const reading = type === "reading";
  const hallway = type === "hallway";
  const accent = creative
    ? "#7d7fa2"
    : kitchen
      ? "#99917c"
      : bath
        ? "#a39c96"
        : "#aa8c79";
  const trees = Array.from(
    { length: 11 },
    (_, i) =>
      `<path d="m${24 + i * 47} 158 16-48 16 48-9-6 8 28h-29l8-28Z" fill="${i % 2 ? "#212d3f" : "#293548"}" opacity=".8"/>`,
  ).join("");
  const window = `<rect x="24" y="19" width="231" height="179" fill="url(#${n}sky)"/><circle cx="193" cy="49" r="10" fill="#dbd1dd" opacity=".55"/>${trees}<path d="M24 112h231M100 19v179m78-179v179" stroke="#3a3440" stroke-width="5"/><rect x="24" y="19" width="231" height="179" fill="none" stroke="#24222d" stroke-width="8"/>`;
  const plant = `<path d="M482 246q-3-70 13-102m-13 59q-36-14-37-40 34 1 38 27m5-14q-6-34 15-40 14 26-15 40m-7 44q-33-2-36-20 27-11 36 12m6-13q20-29 35-20-3 28-35 28" fill="#617268" stroke="#46584d" stroke-width="2"/><path d="m463 238 37 0-6 43h-24Z" fill="#a38f7c"/><path d="M465 242h33" stroke="#c5aa91" stroke-width="2"/>`;
  const sofa = `<ellipse cx="286" cy="285" rx="188" ry="23" fill="#141219" opacity=".25"/><path d="m112 186 218-9 25 64-227 15Z" fill="#958579"/><rect x="112" y="166" width="232" height="64" rx="12" fill="#b3a393"/><rect x="101" y="196" width="249" height="48" rx="8" fill="#bcac9b"/><rect x="94" y="184" width="25" height="62" rx="8" fill="#a08d80"/><rect x="331" y="181" width="25" height="63" rx="8" fill="#aa9788"/><path d="M122 228h207M224 178v48" stroke="#8b7b70" opacity=".6"/><rect x="128" y="173" width="45" height="37" rx="7" fill="#707967" transform="rotate(-8 128 173)"/><rect x="277" y="172" width="43" height="36" rx="7" fill="#bcb3aa" transform="rotate(10 277 172)"/><path d="M111 245v14m227-16v14" stroke="#413642" stroke-width="5"/><ellipse cx="293" cy="280" rx="68" ry="20" fill="#574746"/><path d="M244 280v30m98-30v30" stroke="#3f333b" stroke-width="5"/><ellipse cx="293" cy="274" rx="70" ry="19" fill="#b89978"/><rect x="280" y="261" width="28" height="8" rx="2" fill="#b8ac9e" transform="rotate(5 280 261)"/><ellipse cx="321" cy="265" rx="7" ry="3" fill="#e0d4c4"/><path d="M315 265v-10h12v10" fill="#d7c5b2"/>`;
  const chair = `<ellipse cx="292" cy="294" rx="115" ry="18" fill="#c6b6a2" opacity=".22"/><path d="m250 183-12 58m83-58 19 61m-88-5-11 58m78-58 13 58" stroke="#67503c" stroke-width="7"/><rect x="240" y="148" width="88" height="79" rx="25" fill="#899080" transform="rotate(-7 240 148)"/><path d="M226 211q40-18 112-9l-7 39h-91Z" fill="#a2a38e"/><path d="M224 195v40m117-45v43" stroke="#aaaf95" stroke-width="13" stroke-linecap="round"/><rect x="253" y="171" width="46" height="33" rx="6" fill="#bfad9d" transform="rotate(-8 253 171)"/><path d="m292 215 31 10-16 43-32-10Z" fill="#cac1ab"/><path d="m291 224 27 9m-31 2 27 9m-31 2 27 9" stroke="#a89b83" opacity=".5"/><ellipse cx="376" cy="249" rx="39" ry="11" fill="#ac8b66"/><path d="m350 252-7 42m57-42 7 42m-32-40v42" stroke="#66533f" stroke-width="4"/><rect x="360" y="238" width="32" height="7" fill="#d5bdaa" transform="rotate(8 360 238)"/>`;
  const desk = `<path d="M118 202h270v14H118Z" fill="#bd9b7b"/><path d="M131 215v81m242-81v81" stroke="#554453" stroke-width="7"/><path d="M137 217h65v62h-65Z" fill="#9b7c66"/><path d="M140 237h58m-58 21h58" stroke="#755d53"/><rect x="223" y="129" width="93" height="63" rx="4" fill="#282331"/><rect x="228" y="134" width="83" height="52" rx="1" fill="#6e728e"/><path d="m233 171 17-17 15 12 20-22 20 12v25h-72Z" fill="#9a9ab0"/><path d="M268 192v8m-17 0h34" stroke="#39323f" stroke-width="4"/><path d="M167 198v-39l28-23m-11 10 20-14" stroke="#4f474c" stroke-width="3"/><path d="m190 133 18-10 11 19Z" fill="#d7bb8e"/><circle cx="202" cy="145" r="16" fill="#e7cb95" opacity=".08"/><rect x="337" y="175" width="19" height="28" fill="#b88d7c"/><path d="M341 178v-21m7 21v-26m5 26v-18" stroke="#8c95a0" stroke-width="3"/><path d="M239 242v44m48-44v44" stroke="#34303e" stroke-width="5"/><rect x="226" y="214" width="74" height="43" rx="14" fill="#797a90"/><rect x="223" y="245" width="81" height="15" rx="7" fill="#9190a1"/><path d="M264 261v38m-25 0h50" stroke="#393541" stroke-width="5"/>`;
  const bed = `<path d="m137 231 229-5 49 63-251 12Z" fill="#5f4b46"/><rect x="134" y="123" width="245" height="112" rx="16" fill="#a08d83"/><path d="m144 184 221 0 35 91-248 9Z" fill="#c6b7a7"/><path d="m144 187 222 0 12 28-231 0Z" fill="#e2d5c5"/><rect x="160" y="157" width="87" height="40" rx="8" fill="#ddd0bd"/><rect x="259" y="157" width="87" height="40" rx="8" fill="#d3c6b7"/><path d="m149 232 237-8 14 51-248 9Z" fill="#807968"/><path d="m166 234 5 48m19-49 5 47m19-49 5 48m19-49 5 47m19-49 5 48m19-49 5 47" stroke="#a6a08c" opacity=".3"/><path d="M166 297v12m234-15v11" stroke="#493b3b" stroke-width="5"/><path d="M80 204h43v42H80Z" fill="#9f7d62"/><ellipse cx="100" cy="178" rx="16" ry="6" fill="#cab28c"/><path d="m87 156-4 23h34l-6-23Z" fill="#dbc6a1"/><path d="M100 181v20" stroke="#a99273" stroke-width="3"/>`;
  const island = `<path d="M100 99h334v82H100Z" fill="#b7b0a0"/><path d="M100 91h334v11H100Z" fill="#d4c7b6"/><path d="M160 101v78m70-78v78m70-78v78m70-78v78" stroke="#8b857b"/><rect x="100" y="35" width="79" height="44" fill="#8f8c7e"/><rect x="187" y="35" width="80" height="44" fill="#8f8c7e"/><rect x="275" y="35" width="79" height="44" fill="#8f8c7e"/><path d="M260 91v-17q0-13 12-13v10" stroke="#c8b898" stroke-width="3" fill="none"/><path d="m135 197 258-7 26 24-276 9Z" fill="#ded1bd"/><path d="m143 221 276-7-1 59-266 10Z" fill="#9e8b70"/><path d="m283 221 0 55m-55-53 0 55m-55-53 0 55" stroke="#756650"/><path d="M178 260v47m47-49v47m78-49v48m47-50v48" stroke="#5e4d3e" stroke-width="5"/><ellipse cx="201" cy="255" rx="29" ry="9" fill="#706a5b"/><ellipse cx="327" cy="253" rx="29" ry="9" fill="#706a5b"/><ellipse cx="272" cy="206" rx="24" ry="7" fill="#786e54"/><circle cx="265" cy="198" r="7" fill="#b7a26e"/><circle cx="277" cy="199" r="7" fill="#a18266"/><path d="M204 0v35m150-35v35" stroke="#4c4244" stroke-width="2"/><path d="m184 34 20-19 20 19Zm150 0 20-19 20 19Z" fill="#c5ad86"/>`;
  const bathtub = `<path d="M134 198q17 83 86 83h100q72 0 84-83Z" fill="#bfb9ac"/><ellipse cx="269" cy="198" rx="135" ry="37" fill="#e0d9cb"/><ellipse cx="269" cy="199" rx="112" ry="25" fill="#8e9c9a"/><path d="M380 190v-52q0-17-17-17h-12v12" stroke="#c4b59a" stroke-width="6" fill="none"/><path d="M160 252q78 27 211-1" stroke="#e1d6c2" opacity=".35" fill="none"/><path d="M215 280v9m112-9v9" stroke="#777366" stroke-width="6"/><path d="M434 137h97v94h-97Z" fill="#937e65"/><ellipse cx="481" cy="136" rx="50" ry="13" fill="#d8cebd"/><rect x="444" y="34" width="72" height="80" rx="30" fill="#9da5a8" stroke="#c5b696" stroke-width="4"/>`;
  const closets = `<rect x="281" y="36" width="176" height="214" rx="3" fill="#958575"/><path d="M339 37v211m59-211v211" stroke="#6b5b54" stroke-width="2"/><path d="M329 132v20m20-20v20m39-20v20m20-20v20" stroke="#c9b49a" stroke-width="3"/><path d="m112 234 120-4 16 15-123 7Z" fill="#b49b80"/><path d="m122 252 1 34m114-40 0 33" stroke="#5a4a44" stroke-width="6"/><rect x="89" y="49" width="108" height="150" rx="50" fill="#8c939b" stroke="#bbaa91" stroke-width="5"/>`;
  const furniture = terrace
    ? chair
    : kitchen
      ? island
      : bath
        ? bathtub
        : bedroom
          ? bed
          : creative
            ? desk
            : reading
              ? chair
              : hallway
                ? closets
                : sofa;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 330" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Авторская иллюстрация интерьера"><defs><linearGradient id="${n}wall" x2="1" y2="1"><stop stop-color="#77647b"/><stop offset="1" stop-color="#403344"/></linearGradient><linearGradient id="${n}floor" x2="0.4" y2="1"><stop stop-color="#786452"/><stop offset="1" stop-color="#453840"/></linearGradient><linearGradient id="${n}sky" x2="0" y2="1"><stop stop-color="#454158"/><stop offset="1" stop-color="#b28c9e"/></linearGradient><linearGradient id="${n}shade"><stop stop-color="#151121" stop-opacity=".08"/><stop offset="1" stop-color="#151121" stop-opacity=".38"/></linearGradient><radialGradient id="${n}light"><stop stop-color="#f4cc93" stop-opacity=".22"/><stop offset="1" stop-color="#f4cc93" stop-opacity="0"/></radialGradient></defs><rect width="600" height="330" fill="url(#${n}wall)"/>${terrace ? `<rect width="600" height="235" fill="url(#${n}sky)"/><circle cx="417" cy="52" r="12" fill="#d8d1db" opacity=".7"/>${trees}<path d="M0 205h600m-600 12h600M20 205v50m80-50v50m80-50v50m80-50v50m80-50v50m80-50v50m80-50v50m80-50v50" stroke="#403b47" stroke-width="4"/><path d="M0 38q300 85 600 0" stroke="#302b3b" stroke-width="2" fill="none"/>${Array.from({ length: 10 }, (_, i) => `<circle cx="${20 + i * 62}" cy="${45 + Math.sin((i / 9) * Math.PI) * 55}" r="3" fill="#f1d7a7"/><circle cx="${20 + i * 62}" cy="${45 + Math.sin((i / 9) * Math.PI) * 55}" r="10" fill="#f1d7a7" opacity=".07"/>`).join("")}` : `${window}<path d="M486 0h114v270l-114-35Z" fill="#3b3040"/><path d="M10 12h255" stroke="#b6a0b5" stroke-width="2" opacity=".3"/>${!kitchen && !hallway && !bath ? `<rect x="309" y="41" width="73" height="58" fill="#58485a" stroke="#b49b83" stroke-width="3"/><path d="m315 89 23-28 17 16 21-25v42h-61Z" fill="${accent}"/><circle cx="329" cy="57" r="8" fill="#d3b392"/>` : ""}`}<path d="M0 234h486l114 36v60H0Z" fill="url(#${n}floor)"/><path d="m0 272 510-30M0 310l565-52m-360-24-66 96m162-96 5 96m82-96 66 96m11-96 132 96" stroke="#352b35" stroke-width="1" opacity=".23"/>${reading || terrace ? `<ellipse cx="323" cy="279" rx="148" ry="33" fill="#bdac8f" opacity=".13"/>` : ""}${furniture}${plant}${!kitchen && !terrace ? `<path d="M421 243V91" stroke="#9c8369" stroke-width="3"/><path d="m402 88-7 36h53l-10-36Z" fill="#cab28d"/><ellipse cx="421" cy="124" rx="27" ry="4" fill="#e6cca4"/><ellipse cx="421" cy="244" rx="18" ry="5" fill="#80705e"/><circle cx="421" cy="123" r="65" fill="url(#${n}light)"/>` : ""}<rect width="600" height="330" fill="url(#${n}shade)"/><rect width="600" height="330" fill="#211629" opacity=".1"/></svg>`;
}

let selectedFloor = 1;
let selectedRoomId = "living";
const rememberedRooms = { 1: "living", 2: "my-room" };
const floorPlan = document.querySelector("#floor-plan");
const preview = document.querySelector("#room-preview");
const roomDialog = document.querySelector("#room-dialog");
const presentationDialog = document.querySelector("#presentation-dialog");
const presentationWatermark = document.createElement("span");
presentationWatermark.className = "presentation-watermark";
presentationWatermark.textContent = "паша карась";
presentationDialog.append(presentationWatermark);

function renderPlan() {
  floorPlan.className = `floor-plan${selectedFloor === 2 ? " floor-two" : ""}`;
  floorPlan.innerHTML = rooms
    .filter((r) => r.floor === selectedFloor)
    .map(
      (r) =>
        `<button class="plan-room ${r.id}${r.id === selectedRoomId ? " selected" : ""}" data-select-room="${r.id}" aria-pressed="${r.id === selectedRoomId}" aria-label="${r.name}, ${r.area} м². Показать краткое описание"><span class="furniture" aria-hidden="true"><i class="furniture-${r.furniture}"></i>${r.furniture === "sofa" ? '<i class="furniture-table"></i>' : ""}</span><span class="plan-room-name">${r.id === "wardrobe" ? "Гардеробная<br>и холл" : r.id === "upstairs-bath" ? "Семейная<br>ванная" : r.id === "bathroom" ? "Ванная" : r.name}</span><span class="plan-room-area">${r.area} м²</span></button>`,
    )
    .join("");
}
function renderPreview() {
  const r = rooms.find((r) => r.id === selectedRoomId);
  preview.innerHTML = `<div class="room-preview-art">${sceneSvg(r.art)}<span class="room-floor-label">${r.floor === 1 ? "ПЕРВЫЙ" : "ВТОРОЙ"} ЭТАЖ</span></div><div class="room-preview-body"><div class="room-title-row"><h3>${r.name}</h3><span class="room-area">${r.area} м²</span></div><p>${r.intro}</p><div class="room-feature-tags">${r.tags.map((t) => `<span>${t}</span>`).join("")}</div><button class="text-button" data-open-room="${r.id}" aria-label="Подробнее о комнате: ${r.name}">Заглянуть в комнату${icon("arrow-up-right")}</button></div>`;
}
function selectRoom(id) {
  const room = rooms.find((r) => r.id === id);
  if (!room) return;
  selectedRoomId = id;
  rememberedRooms[room.floor] = id;
  floorPlan.querySelectorAll("[data-select-room]").forEach((button) => {
    const selected = button.dataset.selectRoom === id;
    button.classList.toggle("selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  renderPreview();
}
function selectFloor(floor, focus = false) {
  selectedFloor = floor;
  selectedRoomId = rememberedRooms[floor];
  document.querySelectorAll(".floor-tab").forEach((tab) => {
    const active = Number(tab.dataset.floor) === floor;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
    if (active && focus) tab.focus();
  });
  document
    .querySelector("#floor-panel")
    .setAttribute("aria-labelledby", `floor-tab-${floor}`);
  renderPlan();
  renderPreview();
}
document.querySelectorAll(".floor-tab").forEach((tab) => {
  tab.addEventListener("click", () => selectFloor(Number(tab.dataset.floor)));
  tab.addEventListener("keydown", (event) => {
    if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      selectFloor(
        event.key === "Home"
          ? 1
          : event.key === "End"
            ? 2
            : selectedFloor === 1
              ? 2
              : 1,
        true,
      );
    }
  });
});

function syncDialogLock() {
  document.body.classList.toggle(
    "dialog-open",
    Boolean(document.querySelector("dialog[open]")),
  );
}
function openRoom(id) {
  const r = rooms.find((r) => r.id === id);
  if (!r) return;
  const index = rooms.indexOf(r);
  const next = rooms[(index + 1) % rooms.length];
  document.querySelector("#room-dialog-content").innerHTML =
    `<div class="room-dialog-art">${sceneSvg(r.art)}</div><div class="room-dialog-body"><p class="room-dialog-floor">${r.floor === 1 ? "ПЕРВЫЙ" : "ВТОРОЙ"} ЭТАЖ · ПРОСТРАНСТВО ${String(index + 1).padStart(2, "0")} / 11</p><div class="room-dialog-heading"><h2 id="room-dialog-title">${r.name}</h2><span class="room-area">${r.area} м²</span></div><p class="room-dialog-intro">${r.intro}</p><div class="room-story-grid"><section><h3>${icon("layout")}Что внутри</h3><p>${r.layout}</p></section><section><h3>${icon("palette")}Цвет, материалы и свет</h3><p>${r.atmosphere}</p></section><section style="grid-column:1 / -1"><h3>${icon("lightbulb")}Продумано для жизни</h3><p>${r.practical}</p></section></div><p class="room-dream-note"><strong>МАЛЕНЬКАЯ МЕЧТА ОБ ЭТОЙ КОМНАТЕ</strong>${r.dream}</p><div class="room-dialog-bottom"><button class="button button-outline" data-show-on-plan="${r.id}">${icon("grid")}На плане дома</button><button class="button button-primary" data-open-room="${next.id}">Следующая комната${icon("arrow-right")}</button></div></div>`;
  roomDialog.scrollTop = 0;
  if (!roomDialog.open) roomDialog.showModal();
  else roomDialog.querySelector(".dialog-close").focus({ preventScroll: true });
  syncDialogLock();
}

document.addEventListener("click", (event) => {
  const planRoom = event.target.closest("[data-select-room]");
  if (planRoom) selectRoom(planRoom.dataset.selectRoom);
  const roomLink = event.target.closest("[data-open-room]");
  if (roomLink) openRoom(roomLink.dataset.openRoom);
  const close = event.target.closest("[data-close-dialog]");
  if (close) document.getElementById(close.dataset.closeDialog).close();
  const showPlan = event.target.closest("[data-show-on-plan]");
  if (showPlan) {
    const r = rooms.find((r) => r.id === showPlan.dataset.showOnPlan);
    rememberedRooms[r.floor] = r.id;
    selectFloor(r.floor);
    roomDialog.close();
    document
      .querySelector("#explore")
      .scrollIntoView({ behavior: "smooth", block: "start" });
    requestAnimationFrame(() =>
      floorPlan
        .querySelector(`[data-select-room="${r.id}"]`)
        .focus({ preventScroll: true }),
    );
  }
});
for (const dialog of [roomDialog, presentationDialog]) {
  dialog.addEventListener("close", syncDialogLock);
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      dialog.close();
  });
}

const slides = [
  { type: "intro" },
  ...rooms.map((room) => ({ type: "room", room })),
  { type: "outro" },
];
let slideIndex = 0;
function renderSlide() {
  const slide = slides[slideIndex];
  let visual, eyebrow, title, text, list;
  if (slide.type === "intro") {
    visual =
      `<img src="${document.querySelector("#hero-image").src}" alt="Мой дом мечты среди сосен" width="1536" height="1024">`;
    eyebrow = "ШКОЛЬНЫЙ ПРОЕКТ · ПАША КАРАСЬ";
    title = 'Мой дом <span class="serif-accent">мечты.</span>';
    text =
      "Светлый двухэтажный дом рядом с лесом. Место для семьи, творчества и тихих вечеров под звёздами.";
    list = [
      "240 м² общей площади, включая террасу",
      "11 продуманных пространств на двух этажах",
      "Натуральные материалы, свет и забота о природе",
    ];
  } else if (slide.type === "outro") {
    visual = sceneSvg("terrace");
    eyebrow = "МЕЧТАТЬ — ЗНАЧИТ ДЕЛАТЬ ПЕРВЫЙ ШАГ";
    title = 'Спасибо, что <span class="serif-accent">заглянули!</span>';
    text =
      "Для меня дом мечты — это не только архитектура. Это близкие люди, любимые занятия и ощущение, что ты на своём месте.";
    list = [
      "Энергия солнца и бережное отношение к воде",
      "Умные датчики и комфорт для всей семьи",
      "А каким был бы ваш дом мечты?",
    ];
  } else {
    const r = slide.room;
    visual = sceneSvg(r.art);
    eyebrow = `${r.floor === 1 ? "ПЕРВЫЙ" : "ВТОРОЙ"} ЭТАЖ · ${r.area} М²`;
    title = r.name;
    text = r.intro;
    list = r.tags;
  }
  document.querySelector("#slide-content").innerHTML =
    `<article class="presentation-slide"><div class="slide-visual">${visual}</div><div class="slide-copy"><span class="eyebrow">${eyebrow}</span><h2 id="slide-title">${title}</h2><p>${text}</p><ul>${list.map((item) => `<li>${item}</li>`).join("")}</ul></div></article>`;
  document.querySelector("#slide-counter").textContent =
    `${String(slideIndex + 1).padStart(2, "0")} / ${slides.length}`;
  document.querySelector("#slide-progress").innerHTML = slides
    .map(
      (_, i) =>
        `<span class="${i <= slideIndex ? "done" : ""}" aria-hidden="true"></span>`,
    )
    .join("");
  document
    .querySelector("#slide-progress")
    .setAttribute("aria-label", `Слайд ${slideIndex + 1} из ${slides.length}`);
  document.querySelector("#previous-slide").disabled = slideIndex === 0;
  document.querySelector("#next-slide").innerHTML =
    `${slideIndex === slides.length - 1 ? "Сначала" : "Далее"}${icon(slideIndex === slides.length - 1 ? "play" : "arrow-right")}`;
  document.querySelector("#slide-content").scrollTop = 0;
}
function changeSlide(direction) {
  slideIndex =
    direction === 1 && slideIndex === slides.length - 1
      ? 0
      : Math.max(0, Math.min(slides.length - 1, slideIndex + direction));
  renderSlide();
}
document.querySelectorAll(".presentation-trigger").forEach((button) =>
  button.addEventListener("click", () => {
    if (roomDialog.open) roomDialog.close();
    slideIndex = 0;
    renderSlide();
    presentationDialog.showModal();
    syncDialogLock();
  }),
);
document
  .querySelector("#previous-slide")
  .addEventListener("click", () => changeSlide(-1));
document
  .querySelector("#next-slide")
  .addEventListener("click", () => changeSlide(1));
presentationDialog.addEventListener("keydown", (event) => {
  if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
    event.preventDefault();
    if (event.key === "Home") {
      slideIndex = 0;
      renderSlide();
    } else if (event.key === "End") {
      slideIndex = slides.length - 1;
      renderSlide();
    } else changeSlide(event.key === "ArrowRight" ? 1 : -1);
  }
});
const fullscreenButton = document.querySelector("#fullscreen-button");
if (!document.fullscreenEnabled) fullscreenButton.hidden = true;
fullscreenButton.addEventListener("click", async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  } catch {
    fullscreenButton.title = "Полноэкранный режим недоступен в этом браузере";
  }
});
document.addEventListener("fullscreenchange", () => {
  presentationDialog.classList.toggle(
    "is-fullscreen",
    Boolean(document.fullscreenElement) && presentationDialog.open,
  );
  fullscreenButton.setAttribute(
    "aria-label",
    document.fullscreenElement
      ? "Выйти из полноэкранного режима"
      : "Развернуть на весь экран",
  );
});
presentationDialog.addEventListener("close", () => {
  if (document.fullscreenElement === document.documentElement)
    document.exitFullscreen().catch(() => {});
});

// Detailed star particles use only CSS animation; JavaScript supplies their positions and parallax.
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const motionButton = document.querySelector("#motion-toggle");
let motionPaused = motionQuery.matches;
let seed = 2026;
function random() {
  seed = (seed * 16807) % 2147483647;
  return (seed - 1) / 2147483646;
}
const layers = [...document.querySelectorAll(".star-layer")];
layers.forEach((layer, index) => {
  const count = [65, 39, 21][index];
  const stars = document.createDocumentFragment();
  for (let i = 0; i < count; i++) {
    const star = document.createElement("span");
    const size = (index === 2 ? 1.5 : 0.6) + random() * (index + 0.9);
    star.className = `star${size > 3.1 ? " big" : ""}`;
    star.style.cssText = `left:${random() * 100}%;top:${random() * 100}%;--size:${size.toFixed(2)}px;--opacity:${(0.15 + random() * 0.45).toFixed(2)};--duration:${(3 + random() * 6).toFixed(2)}s;--delay:${(-random() * 10).toFixed(2)}s;--z:${index * 24}px;--glow:${size * 4}px;--star-color:${["#d1c4eb", "#a6b5db", "#e7d4b7"][Math.floor(random() * 3)]}`;
    stars.append(star);
  }
  layer.append(stars);
});
function updateMotion() {
  document.body.classList.toggle("motion-paused", motionPaused);
  motionButton.setAttribute("aria-pressed", String(motionPaused));
  motionButton.setAttribute(
    "aria-label",
    `${motionPaused ? "Включить" : "Приостановить"} анимацию звёзд`,
  );
}
motionButton.addEventListener("click", () => {
  motionPaused = !motionPaused;
  updateMotion();
});
motionQuery.addEventListener("change", (event) => {
  motionPaused = event.matches;
  updateMotion();
});
let pointerFrame = 0;
window.addEventListener(
  "pointermove",
  (event) => {
    if (
      motionPaused ||
      motionQuery.matches ||
      event.pointerType !== "mouse" ||
      pointerFrame
    )
      return;
    const x = (event.clientX / window.innerWidth - 0.5) * 18;
    const y = (event.clientY / window.innerHeight - 0.5) * 12;
    pointerFrame = requestAnimationFrame(() => {
      layers.forEach((layer) => {
        const depth = Number(layer.dataset.depth);
        layer.style.transform = `translate3d(${x * depth}px,${y * depth}px,${depth * 9}px)`;
      });
      pointerFrame = 0;
    });
  },
  { passive: true },
);

const menuButton = document.querySelector("#menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
function closeMenu() {
  mobileMenu.hidden = true;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Открыть меню");
}
menuButton.addEventListener("click", () => {
  const open = mobileMenu.hidden;
  mobileMenu.hidden = !open;
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", `${open ? "Закрыть" : "Открыть"} меню`);
});
mobileMenu
  .querySelectorAll("a")
  .forEach((a) => a.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !mobileMenu.hidden) {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener("click", (event) => {
  if (
    !mobileMenu.hidden &&
    !mobileMenu.contains(event.target) &&
    !menuButton.contains(event.target)
  )
    closeMenu();
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      document
        .querySelectorAll(".desktop-nav a")
        .forEach((link) =>
          link.classList.toggle("current", link.hash === `#${entry.target.id}`),
        );
    });
  },
  { rootMargin: "-15% 0px -55% 0px", threshold: 0 },
);
document
  .querySelectorAll("#idea, #explore, #details, #values")
  .forEach((section) => sectionObserver.observe(section));

hydrateIcons();
renderPlan();
renderPreview();
updateMotion();
document.querySelector("#reading-art").innerHTML = sceneSvg("reading");
document.querySelector("#terrace-art").innerHTML = sceneSvg("terrace");
document.querySelector("#creative-art").innerHTML = sceneSvg("creative");
