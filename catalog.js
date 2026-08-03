(() => {
  "use strict";

  const app = document.querySelector("#app");

  const catalog = {
    bedding: {
      zh: "床品",
      en: "Bedding",
      intro: {
        zh: "从轻盈夏被到温暖蚕丝被，探索适合不同季节与睡眠习惯的舒适床品。",
        en: "From airy summer layers to silk duvet inserts, discover comfort for every season.",
      },
      cover: "images/duvet-cover.jpg",
      products: [
        {
          id: "duvet-cover-sets",
          zh: "被套四件套",
          en: "Duvet Cover Sets",
          image: "images/duvet-cover.jpg",
          description: {
            zh: "以柔和色彩与自然触感营造安静卧室氛围，适合日常换洗与四季搭配。",
            en: "Soft color and natural texture create a calm bedroom made for everyday comfort.",
          },
        },
        {
          id: "quilted-bedspread-sets",
          zh: "床盖三件套",
          en: "Quilted Bedspread Sets",
          image: "images/bedspread.jpg",
          description: {
            zh: "层次丰富的绗缝质感，让床面更完整，也为卧室增添柔和的装饰细节。",
            en: "Layered quilted texture brings a composed finish and subtle detail to the room.",
          },
        },
        {
          id: "lightweight-quilts",
          zh: "薄被",
          en: "Lightweight Quilts",
          image: "images/lightweight-quilt.jpg",
          description: {
            zh: "轻盈、易于叠搭，适合换季、空调房和喜欢轻柔包裹感的睡眠场景。",
            en: "An easy, breathable layer for changing seasons, cool rooms, and lighter sleep.",
          },
        },
        {
          id: "comforters",
          zh: "普通被子",
          en: "Comforters",
          image: "images/comforter.jpg",
          description: {
            zh: "为日常睡眠准备的舒适被芯，强调均衡包裹感与温暖、放松的居家体验。",
            en: "Everyday warmth with a balanced, comforting feel designed for restful nights.",
          },
        },
        {
          id: "silk-duvet-inserts",
          zh: "蚕丝被",
          en: "Silk Duvet Inserts",
          image: "images/silk-duvet.jpg",
          description: {
            zh: "轻柔贴合的高级睡眠选择，呈现细腻、安静且不过分厚重的舒适感。",
            en: "A refined sleep layer with a light, gentle drape and quietly luxurious comfort.",
          },
        },
        {
          id: "pillows",
          zh: "枕头",
          en: "Pillows",
          image: "images/pillows.jpg",
          description: {
            zh: "从支撑到触感，为不同睡姿寻找更适合的枕感，让睡眠更完整。",
            en: "Support and softness come together to complement different ways of sleeping.",
          },
        },
        {
          id: "cooling-bed-mats",
          zh: "凉席",
          en: "Cooling Bed Mats",
          image: "images/cooling-mat.jpg",
          description: {
            zh: "适合温暖季节的清爽床面搭配，以轻巧触感保持睡眠空间干净舒适。",
            en: "A fresh, light surface for warmer seasons and a clean, comfortable sleep setting.",
          },
        },
      ],
    },
    "home-gifts": {
      zh: "家居生活",
      en: "Home & Gifts",
      intro: {
        zh: "温柔实用的日常织物与家居小物，为生活与礼赠增添恰到好处的温度。",
        en: "Thoughtful textiles and small comforts for everyday living and considered gifting.",
      },
      cover: "images/bath-towels.jpg",
      products: [
        {
          id: "bath-towels",
          zh: "浴巾",
          en: "Bath Towels",
          image: "images/bath-towels.jpg",
          description: {
            zh: "以蓬松触感包裹沐浴后的放松时刻，让每日清洁也成为舒适仪式。",
            en: "A generous, soft layer that turns the everyday bath into a quiet ritual.",
          },
        },
        {
          id: "hand-towels",
          zh: "小毛巾",
          en: "Hand Towels",
          image: "images/hand-towels.jpg",
          description: {
            zh: "轻巧实用的日常毛巾，适合洗漱、客用与随手收纳。",
            en: "A compact everyday essential for washing, guests, and simple storage.",
          },
        },
        {
          id: "loungewear",
          zh: "家居服",
          en: "Loungewear",
          image: "images/loungewear/main.jpg",
          fullWidthGallery: true,
          galleryTitle: {
            zh: "家居服展示",
            en: "Loungewear Gallery",
          },
          gallery: [
            "images/loungewear/main.jpg",
            "images/loungewear/gallery-01.jpg",
            "images/loungewear/gallery-02.jpg",
            "images/loungewear/gallery-03.jpg",
            "images/loungewear/gallery-04.jpg",
          ],
          description: {
            zh: "柔软自在的居家穿着，让休息、阅读与慢下来的时间更加轻松。",
            en: "Soft, easy pieces for resting, reading, and moving through slower moments.",
          },
        },
        {
          id: "socks",
          zh: "袜子",
          en: "Socks",
          image: "images/socks/main.jpg",
          fullWidthGallery: true,
          price: {
            zh: "$25/盒（五双）",
            en: "$25 / box (5 pairs)",
          },
          galleryTitle: {
            zh: "袜子产品展示",
            en: "Socks Gallery",
          },
          gallery: [
            "images/socks/main.jpg",
            "images/socks/gallery-01.jpg",
            "images/socks/gallery-02.jpg",
          ],
          description: {
            zh: "贴近日常的小小舒适，从触感、颜色到穿着体验都更轻松自然。",
            en: "A small everyday comfort with easy texture, color, and wearability.",
          },
        },
        {
          id: "aprons",
          zh: "围裙",
          en: "Aprons",
          image: "images/apron.jpg",
          description: {
            zh: "实用与装饰兼具的布艺围裙，让烹饪、烘焙与手作时间更有仪式感。",
            en: "Practical textile layers that bring character to cooking, baking, and making.",
          },
        },
        {
          id: "fabric-dolls",
          zh: "布艺玩偶",
          en: "Fabric Dolls",
          image: "images/fabric-dolls/main.jpg",
          introImage: "images/fabric-dolls/example1.jpg",
          introImageTitle: {
            zh: "布艺玩偶产品介绍",
            en: "Fabric Dolls Introduction",
          },
          hideDefaultGallery: true,
          masonryGallery: Array.from(
            { length: 5 },
            (_, index) => `images/fabric-dolls/${index + 1}.jpg`,
          ),
          description: {
            zh: "凉感豆豆面料与柔软填充结合，既是可以拥抱的布艺玩偶，也能作为午睡抱枕与家居陪伴。",
            en: "Cooling textured fabric and soft filling create a huggable doll that also works as a nap pillow and everyday companion.",
          },
        },
        {
          id: "candles",
          zh: "蜡烛",
          en: "Candles",
          image: "images/candles.jpg",
          description: {
            zh: "以柔和光线和香气改变空间气氛，为独处、阅读与夜晚带来温暖。",
            en: "Gentle light and fragrance bring warmth to quiet evenings and slower rooms.",
          },
        },
      ],
    },
    embroidery: {
      zh: "刺绣定制 & DIY",
      en: "Custom Embroidery & DIY",
      hideCollectionCount: true,
      cover: "images/diy/diy.jpg",
      products: [
        {
          id: "custom-embroidery",
          zh: "刺绣定制",
          en: "Custom Embroidery",
          image: "images/custom-embroidery/finished-examples/finished-05.jpg",
          hideDefaultGallery: true,
          description: {
            zh: "从 Logo 样版到真实成品，以细密针脚把品牌、名字与专属图案留在日常织物上。",
            en: "From logo samples to finished pieces, thoughtful stitches bring brands, names, and personal motifs to life.",
          },
          showcaseSections: [
            {
              id: "sample-designs",
              eyebrow: { zh: "定制第一步", en: "The first step" },
              title: { zh: "样版图", en: "Sample Designs" },
              description: {
                zh: "Logo 原图与样衣刺绣效果对照，帮助确认比例、色彩与最终落位。",
                en: "Compare the original logo with its embroidered garment sample to confirm scale, color, and placement.",
              },
              style: "samples",
              fit: "contain",
              images: [
                "images/custom-embroidery/sample-designs/logo.jpg",
                "images/custom-embroidery/sample-designs/logo-sample.jpg",
              ],
            },
            {
              id: "patterns-dark",
              eyebrow: { zh: "图案参考", en: "Motif reference" },
              title: { zh: "", en: "" },
              description: {
                zh: "",
                en: "",
              },
              style: "patterns-dark",
              fit: "contain",
              images: Array.from({ length: 16 }, (_, index) => index + 1)
                .filter((number) => number !== 8)
                .map(
                  (number) =>
                    `images/custom-embroidery/patterns-dark/pattern-${String(number).padStart(2, "0")}.jpg`,
                ),
              captions: [
                { zh: "世界旗帜与地区徽章", en: "World Flags & Regional Emblems" },
                { zh: "球类与运动徽章", en: "Ball Sports & Athletic Emblems" },
                { zh: "高尔夫、橄榄球与球类运动", en: "Golf, Football & Ball Sports" },
                { zh: "运动器材与户外项目", en: "Sports Equipment & Outdoor Activities" },
                { zh: "彩色团队运动与竞技", en: "Colorful Team Sports & Games" },
                { zh: "网球、高尔夫与保龄球", en: "Tennis, Golf & Bowling" },
                { zh: "体操与运动人物剪影", en: "Gymnastics & Athletic Silhouettes" },
                { zh: "美国州旗与州徽", en: "U.S. State Flags & Emblems" },
                { zh: "州花与地标徽章", en: "State Flowers & Landmark Emblems" },
                { zh: "地区轮廓与省州徽章", en: "Regional Outlines & Provincial Emblems" },
                { zh: "多项运动人物剪影", en: "Multi-Sport Athlete Silhouettes" },
                { zh: "足球、橄榄球与保龄球", en: "Soccer, Football & Bowling" },
                { zh: "州花与加拿大枫叶", en: "State Flowers & Canadian Maple Leaves" },
                { zh: "休闲、格斗与水上运动", en: "Recreation, Combat & Water Sports" },
                { zh: "运动文字与俱乐部徽章", en: "Sports Lettering & Club Emblems" },
              ],
            },
            {
              id: "pattern-animal-portraits",
              eyebrow: { zh: "独立图案参考", en: "Featured motif reference" },
              title: { zh: "动物与宠物肖像", en: "Animal & Pet Portraits" },
              style: "pattern-feature",
              fit: "contain",
              images: ["images/custom-embroidery/patterns-dark/pattern-08.jpg"],
              captions: [{ zh: "动物与宠物肖像", en: "Animal & Pet Portraits" }],
            },
            {
              id: "patterns-light",
              eyebrow: { zh: "图案参考", en: "Motif reference" },
              title: { zh: "卡通、字母与花卉", en: "Cartoons, Letters & Florals" },
              style: "patterns-light",
              fit: "contain",
              images: Array.from(
                { length: 20 },
                (_, index) =>
                  `images/custom-embroidery/patterns-light/pattern-${String(index + 1).padStart(2, "0")}.jpg`,
              ),
              captions: [
                { zh: "蓝色花卉与复古花框", en: "Blue Florals & Vintage Frames" },
                { zh: "儿童数字与童趣动物", en: "Children's Numbers & Playful Animals" },
                { zh: "花叶装饰英文字母", en: "Botanical Script Alphabet" },
                { zh: "海洋动物与水手主题", en: "Nautical Animals & Sailor Motifs" },
                { zh: "童话动物与梦幻角色", en: "Storybook Animals & Fantasy Characters" },
                { zh: "粉色花束与蝴蝶", en: "Pink Bouquets & Butterflies" },
                { zh: "花卉字母刺绣样例", en: "Floral Monogram Embroidery Samples" },
                { zh: "狐狸、独角兽与童趣图案", en: "Foxes, Unicorns & Playful Motifs" },
                { zh: "玫瑰花卉字母组合", en: "Rose Floral Monograms" },
                { zh: "海洋动物与卡通角色", en: "Ocean Animals & Cartoon Characters" },
                { zh: "锦鲤与吉祥金鱼", en: "Koi & Auspicious Goldfish" },
                { zh: "兔子与水手动物组合", en: "Bunnies & Sailor Animal Sets" },
                { zh: "蝴蝶、皇冠与童话动物", en: "Butterflies, Crowns & Fairytale Animals" },
                { zh: "薰衣草花环字母", en: "Lavender Wreath Monogram" },
                { zh: "玫瑰装饰花体字母", en: "Rose-Decorated Script Alphabet" },
                { zh: "蓝色花体字母组合", en: "Blue Script Monograms" },
                { zh: "卡通动物姓名贴与徽章", en: "Cartoon Animal Name Tags & Badges" },
                { zh: "花卉 Smile 文字", en: "Floral Smile Lettering" },
                { zh: "童趣动物、彩虹与云朵", en: "Playful Animals, Rainbows & Clouds" },
                { zh: "蓝色蝴蝶结图案", en: "Blue Bow Motifs" },
              ],
            },
            {
              id: "finished-showcase",
              eyebrow: { zh: "实际效果", en: "Real results" },
              title: { zh: "刺绣成品展示", en: "Finished Embroidery" },
              description: {
                zh: "真实刺绣成品样例，呈现不同图案、针脚密度与织物上的完成效果。",
                en: "Real finished pieces showing different motifs, stitch densities, and results across fabrics.",
              },
              style: "finished",
              images: Array.from(
                { length: 6 },
                (_, index) =>
                  `images/custom-embroidery/finished-showcase/finished-${String(index + 1).padStart(2, "0")}.jpg`,
              ),
            },
          ],
        },
        {
          id: "diy",
          zh: "DIY",
          en: "DIY",
          image: "images/diy/diy.jpg",
          imageFit: "contain",
          hideDefaultGallery: true,
          showcaseSections: [
            {
              id: "diy-finished-showcase",
              eyebrow: { zh: "实际作品", en: "Real projects" },
              title: { zh: "成品展示", en: "Finished Pieces" },
              description: {
                zh: "DIY 成品与制作效果展示。",
                en: "Finished DIY projects and making results.",
              },
              style: "diy-finished",
              images: Array.from(
                { length: 11 },
                (_, index) =>
                  `images/diy/finished-showcase/finished-${String(index + 1).padStart(2, "0")}.jpg`,
              ),
            },
          ],
        },
      ],
    },
  };

  const catalogHeroSlides = [
    {
      image: "images/fabric-dolls/1.jpg",
      position: "center",
    },
    {
      image: "images/custom-embroidery/logo_dingzhi.jpg",
      position: "center",
      fit: "contain",
    },
    {
      image: "images/fabric-dolls/2.jpg",
      position: "center",
    },
    {
      image: "images/custom-embroidery/finished-examples/finished-05.jpg",
      position: "center",
    },
    {
      image: "images/bedspread.jpg",
      position: "center",
    },
  ];

  let heroTimer = null;
  let revealObserver = null;
  let parallaxNodes = [];
  let parallaxFrame = null;
  let lightboxLastTrigger = null;
  let lightboxScrollY = 0;
  const lightboxPointers = new Map();
  let lightboxPinchStart = null;
  let lightboxPanStart = null;

  const copy = {
    zh: {
      catalog: "产品目录",
      homeLiving: "家居生活馆",
      explore: "探索我们的系列",
      exploreText: "天然面料、细腻触感与温柔色彩，让日常生活更舒适自在。",
      browse: "浏览系列",
      collection: "产品系列",
      categories: "个分类",
      back: "返回",
      switch: "EN",
      natural: "自然触感",
      craft: "细腻工艺",
      everyday: "日常之选",
      gallery: "细节与氛围",
      video: "制作视频",
      askStore: "喜欢这一系列？",
      askStoreText: "欢迎向 Maison Nuvé 门店了解当季款式、尺寸与定制方式",
      promise: "让家成为最舒适的地方",
      brandLine: "天然面料 · 品质生活",
      imagePreview: "图片预览",
      closePreview: "关闭图片",
      menu: {
        bedding: "床品",
        "home-gifts": "家居生活",
        embroidery: "刺绣定制 & DIY",
      },
    },
    en: {
      catalog: "Product Catalog",
      homeLiving: "Home & Living",
      explore: "Explore our collections",
      exploreText: "Natural fabrics, considered textures, and gentle color for a softer everyday life.",
      browse: "Browse collection",
      collection: "Collection",
      categories: "categories",
      back: "Back",
      switch: "中",
      natural: "Natural feel",
      craft: "Fine craft",
      everyday: "Everyday use",
      gallery: "Details & mood",
      video: "Making video",
      askStore: "Love this collection?",
      askStoreText: "Visit Maison Nuvé to discover current styles, sizing, and customization options",
      promise: "Making Home the Most Comfortable Place",
      brandLine: "Natural Fabrics · Quality Living",
      imagePreview: "Image preview",
      closePreview: "Close image",
      menu: {
        bedding: "Bedding",
        "home-gifts": "Home & Gifts",
        embroidery: "Custom Embroidery & DIY",
      },
    },
  };

  const showcaseCopy = {
    zh: {
      dollEyebrow: "更多角度",
      dollTitle: "玩偶成品细节",
      dollText: "不同造型、尺寸和使用场景的实际展示。",
    },
    en: {
      dollEyebrow: "More views",
      dollTitle: "Finished doll details",
      dollText: "Real views of different shapes, sizes, and everyday uses.",
    },
  };

  const categoryOrder = ["bedding", "home-gifts", "embroidery"];

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function parseRoute() {
    const parts = window.location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    const lang = parts[0] === "zh" || parts[0] === "en" ? parts[0] : null;
    const category = catalog[parts[1]] ? parts[1] : null;
    const product = category
      ? catalog[category].products.find((item) => item.id === parts[2]) || null
      : null;
    return { lang, category, product };
  }

  function navigate(path) {
    if (!path) {
      window.history.pushState(null, "", `${window.location.pathname}${window.location.search}`);
      render();
      return;
    }
    window.location.hash = `/${path}`;
  }

  function stopHeroAutoplay() {
    if (heroTimer) {
      window.clearInterval(heroTimer);
      heroTimer = null;
    }
  }

  function setHeroSlide(carousel, requestedIndex) {
    const slides = Array.from(carousel.querySelectorAll(".catalog-hero__slide"));
    const dots = Array.from(carousel.querySelectorAll("[data-hero-slide]"));
    if (!slides.length) return;

    const index = (requestedIndex + slides.length) % slides.length;
    carousel.dataset.activeIndex = String(index);
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === index;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });
    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === index;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-pressed", String(active));
    });

    const counter = carousel.querySelector("[data-hero-current]");
    if (counter) counter.textContent = String(index + 1).padStart(2, "0");
  }

  function startHeroAutoplay(carousel) {
    stopHeroAutoplay();
    if (!carousel || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (carousel.matches(":hover, :focus-within")) return;

    heroTimer = window.setInterval(() => {
      if (!document.documentElement.contains(carousel)) {
        stopHeroAutoplay();
        return;
      }
      setHeroSlide(carousel, Number(carousel.dataset.activeIndex || 0) + 1);
    }, 3000);
  }

  function initHeroCarousel() {
    const carousel = app.querySelector("[data-hero-carousel]");
    if (!carousel) return;

    startHeroAutoplay(carousel);
    carousel.addEventListener("mouseenter", stopHeroAutoplay);
    carousel.addEventListener("mouseleave", () => startHeroAutoplay(carousel));
    carousel.addEventListener("focusin", stopHeroAutoplay);
    carousel.addEventListener("focusout", () => startHeroAutoplay(carousel));
  }

  function cleanupPageMotion() {
    revealObserver?.disconnect();
    revealObserver = null;
    parallaxNodes.forEach((node) => node.style.removeProperty("--parallax-y"));
    parallaxNodes = [];
    if (parallaxFrame) window.cancelAnimationFrame(parallaxFrame);
    parallaxFrame = null;
  }

  function updateParallax() {
    parallaxFrame = null;
    if (!parallaxNodes.length) return;

    const viewportCenter = window.innerHeight / 2;
    parallaxNodes.forEach((node) => {
      const rect = node.getBoundingClientRect();
      if (rect.bottom < -120 || rect.top > window.innerHeight + 120) return;
      const speed = Number(node.dataset.parallaxSpeed || 0.04);
      const offset = Math.max(-38, Math.min(38, (rect.top + rect.height / 2 - viewportCenter) * speed));
      node.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
    });
  }

  function queueParallax() {
    if (parallaxFrame || !parallaxNodes.length) return;
    parallaxFrame = window.requestAnimationFrame(updateParallax);
  }

  function initPageMotion() {
    cleanupPageMotion();
    document.documentElement.classList.add("motion-ready");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealNodes = [...app.querySelectorAll("[data-reveal]")];

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealNodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver?.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -7% 0px", threshold: 0.08 },
    );
    revealNodes.forEach((node) => revealObserver.observe(node));

    parallaxNodes = [...app.querySelectorAll("[data-parallax]")];
    updateParallax();
  }

  function alternateLanguage(lang) {
    return lang === "zh" ? "en" : "zh";
  }

  function routeFor(route, langOverride) {
    const lang = langOverride || route.lang;
    return [lang, route.category, route.product?.id].filter(Boolean).join("/");
  }

  function headerHtml(route, backPath) {
    const { lang, category } = route;
    const t = copy[lang];
    const other = alternateLanguage(lang);
    const desktopButtons = categoryOrder
      .map(
        (id) => `
          <button
            type="button"
            class="${category === id ? "is-active" : ""}"
            data-route="${lang}/${id}"
          >${escapeHtml(t.menu[id])}</button>
        `,
      )
      .join("");

    return `
      <header class="site-header">
        <button
          class="icon-button icon-button--back"
          type="button"
          data-route="${escapeHtml(backPath)}"
          aria-label="${escapeHtml(t.back)}"
        >‹</button>
        <button class="site-header__brand" type="button" data-route="${lang}">Maison Nuvé</button>
        <nav class="desktop-nav" aria-label="${lang === "zh" ? "产品分类" : "Product categories"}">
          ${desktopButtons}
        </nav>
        <button
          class="icon-button icon-button--lang"
          type="button"
          data-route="${escapeHtml(routeFor(route, other))}"
          aria-label="${lang === "zh" ? "Switch to English" : "切换至中文"}"
        >${t.switch}</button>
      </header>
    `;
  }

  function footerHtml(lang) {
    const t = copy[lang];
    return `
      <footer class="site-footer">
        <strong>Maison Nuvé</strong>
        <span>${escapeHtml(t.brandLine)}</span>
      </footer>
    `;
  }

  function languageScreen() {
    document.documentElement.lang = "zh-CN";
    document.title = "Maison Nuvé｜家居生活馆电子产品目录";
    return `
      <main class="language-screen" id="main-content">
        <section class="language-cover" aria-label="Maison Nuvé">
          <img src="images/top.jpg" alt="Maison Nuvé 刺绣床品" fetchpriority="high" data-parallax data-parallax-speed="0.04" />
          <div class="language-cover__shade"></div>
          <div class="language-cover__brand">
            <p>Home &amp; Living</p>
            <h1>Maison Nuvé</h1>
          </div>
        </section>
        <section class="language-choice" data-reveal>
          <p class="eyebrow">Bilingual Digital Catalog · 双语电子产品目录</p>
          <h2>请选择语言浏览产品目录</h2>
          <p class="language-choice__en">Please select a language to browse our product catalog</p>
          <div class="language-actions">
            <button class="primary-button" type="button" data-route="zh">
              <span>中文产品目录</span><span aria-hidden="true">→</span>
            </button>
            <button class="outline-button" type="button" data-route="en">
              <span>English Product Catalog</span><span aria-hidden="true">→</span>
            </button>
          </div>
          <div class="language-signature">
            <strong>Maison Nuvé 家居生活馆</strong>
            <p>天然面料 · 品质生活<br />让家成为最舒适的地方</p>
            <p>Natural Fabrics · Quality Living<br />Making Home the Most Comfortable Place</p>
            <address class="language-signature__address">5118 Peck Rd, El Monte, CA 91732</address>
          </div>
        </section>
      </main>
    `;
  }

  function catalogHome(route) {
    const { lang } = route;
    const t = copy[lang];
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = `Maison Nuvé｜${t.catalog}`;

    const cards = categoryOrder
      .map((id, index) => {
        const category = catalog[id];
        return `
          <button
            class="category-card"
            type="button"
            data-route="${lang}/${id}"
            data-reveal
            style="--reveal-delay: ${index * 70}ms"
          >
            <span class="category-card__media">
              <img src="${category.cover}" alt="" loading="${index === 0 ? "eager" : "lazy"}" />
              <span class="category-card__number">0${index + 1}</span>
            </span>
            <span class="category-card__body">
              <h2>${escapeHtml(category[lang])}</h2>
              <p>${escapeHtml(category[alternateLanguage(lang)])}</p>
              <span class="category-card__arrow" aria-hidden="true">↗</span>
            </span>
          </button>
        `;
      })
      .join("");

    const heroSlides = catalogHeroSlides
      .map(
        (slide, index) => `
          <div
            class="catalog-hero__slide${index === 0 ? " is-active" : ""}${slide.fit === "contain" ? " is-contain" : ""}"
            style="--hero-position: ${slide.position}"
            aria-hidden="${index === 0 ? "false" : "true"}"
          >
            <img
              src="${slide.image}"
              alt=""
              loading="${index === 0 ? "eager" : "lazy"}"
              ${index === 0 ? 'fetchpriority="high"' : ""}
            />
          </div>
        `,
      )
      .join("");
    const heroDots = catalogHeroSlides
      .map(
        (_, index) => `
          <button
            type="button"
            class="${index === 0 ? "is-active" : ""}"
            data-hero-slide="${index}"
            aria-label="${lang === "zh" ? `查看第 ${index + 1} 张图片` : `View image ${index + 1}`}"
            aria-pressed="${index === 0 ? "true" : "false"}"
          ></button>
        `,
      )
      .join("");

    return `
      <main class="screen" id="main-content">
        ${headerHtml(route, "")}
        <section
          class="catalog-hero"
          data-hero-carousel
          data-active-index="0"
          aria-roledescription="carousel"
          aria-label="${lang === "zh" ? "产品目录精选图片" : "Featured catalog images"}"
        >
          <div class="catalog-hero__slides" data-parallax data-parallax-speed="0.065">${heroSlides}</div>
          <div class="catalog-hero__copy">
            <p>${escapeHtml(t.homeLiving)}</p>
            <h1>${escapeHtml(t.catalog)}</h1>
          </div>
          <div class="catalog-hero__controls">
            <button
              type="button"
              class="catalog-hero__arrow"
              data-hero-direction="-1"
              aria-label="${lang === "zh" ? "上一张图片" : "Previous image"}"
            >←</button>
            <div class="catalog-hero__dots" aria-label="${lang === "zh" ? "选择轮播图片" : "Select carousel image"}">
              ${heroDots}
            </div>
            <span class="catalog-hero__counter" aria-hidden="true">
              <span data-hero-current>01</span> / ${String(catalogHeroSlides.length).padStart(2, "0")}
            </span>
            <button
              type="button"
              class="catalog-hero__arrow"
              data-hero-direction="1"
              aria-label="${lang === "zh" ? "下一张图片" : "Next image"}"
            >→</button>
          </div>
        </section>
        <section class="content-shell">
          <header class="section-heading" data-reveal>
            <div>
              <p class="eyebrow">Three Collections · 03</p>
              <h2 class="display-title">${escapeHtml(t.explore)}</h2>
            </div>
            <p class="lead">${escapeHtml(t.exploreText)}</p>
          </header>
          <div class="category-grid">${cards}</div>
          <section class="brand-statement" data-reveal>
            <span class="brand-statement__mark" aria-hidden="true">✣</span>
            <p>${escapeHtml(t.promise)}</p>
            <small>${escapeHtml(t.brandLine)}</small>
          </section>
        </section>
        ${footerHtml(lang)}
      </main>
    `;
  }

  function collectionScreen(route) {
    const { lang, category: categoryId } = route;
    const t = copy[lang];
    const category = catalog[categoryId];
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = `${category[lang]}｜Maison Nuvé`;

    const cards = category.products
      .map(
        (product, index) => `
          <button
            class="product-card"
            type="button"
            data-route="${lang}/${categoryId}/${product.id}"
            data-reveal
            style="--reveal-delay: ${Math.min(index * 55, 280)}ms"
          >
            <span class="product-card__image${product.imageFit === "contain" ? " is-contain" : ""}">
              <img
                src="${product.image}"
                alt="${escapeHtml(product[lang])}"
                loading="${index < 2 ? "eager" : "lazy"}"
              />
              <span class="product-card__index">${String(index + 1).padStart(2, "0")}</span>
            </span>
            <span class="product-card__copy">
              <span>
                <h2>${escapeHtml(product[lang])}</h2>
                <p>${escapeHtml(product[alternateLanguage(lang)])}</p>
                ${product.price ? `<strong class="product-card__price">${escapeHtml(product.price[lang])}</strong>` : ""}
              </span>
              <span class="product-card__arrow" aria-hidden="true">→</span>
            </span>
          </button>
        `,
      )
      .join("");

    return `
      <main class="screen" id="main-content">
        ${headerHtml(route, lang)}
        <section class="content-shell">
          <header class="collection-intro" data-reveal>
            <p class="eyebrow">${escapeHtml(t.collection)} · Maison Nuvé</p>
            <h1 class="display-title">${escapeHtml(category[lang])}</h1>
            ${category.intro?.[lang] ? `<p class="lead">${escapeHtml(category.intro[lang])}</p>` : ""}
            ${category.hideCollectionCount ? "" : `<span class="collection-count">${category.products.length} ${escapeHtml(t.categories)}</span>`}
          </header>
          <div class="product-grid${category.products.length <= 4 ? " product-grid--compact" : ""}">${cards}</div>
        </section>
        ${footerHtml(lang)}
      </main>
    `;
  }

  function productGallery(category, product) {
    if (product.gallery) return product.gallery;
    return [
      product.image,
      ...category.products.filter((item) => item.id !== product.id).slice(0, 2).map((item) => item.image),
    ];
  }

  function patternShowcase(product, lang) {
    if (!product.showcaseSections) return "";

    return product.showcaseSections
      .map((section, sectionIndex) => {
        const sectionTitle = section.title?.[lang] || "";
        const sectionEyebrow = section.eyebrow?.[lang] || "";
        const sectionLabel = sectionTitle || sectionEyebrow || copy[lang].imagePreview;
        const items = section.images
          .map((image, imageIndex) => {
            const caption = section.captions?.[imageIndex]?.[lang] || "";
            const imageTitle = caption || `${sectionLabel} ${imageIndex + 1}`;
            return `
              <figure
                class="embroidery-card${section.fit === "contain" ? " is-contain" : ""}${caption ? " has-caption" : ""}"
                data-reveal
                style="--reveal-delay: ${Math.min(imageIndex * 55, 275)}ms"
              >
                <button
                  class="embroidery-card__button"
                  type="button"
                  data-lightbox-image="${image}"
                  data-lightbox-title="${escapeHtml(imageTitle)}"
                  aria-label="${escapeHtml(copy[lang].imagePreview)}：${escapeHtml(imageTitle)}"
                >
                  <img
                    src="${image}"
                    alt="${escapeHtml(imageTitle)}"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
                <figcaption>${caption ? escapeHtml(caption) : String(imageIndex + 1).padStart(2, "0")}</figcaption>
              </figure>
            `;
          })
          .join("");

        return `
          <section
            class="detail-section embroidery-section embroidery-section--${section.style}"
            ${sectionTitle ? `aria-labelledby="${section.id}-title"` : `aria-label="${escapeHtml(sectionLabel)}"`}
            data-reveal
            style="--reveal-delay: ${sectionIndex * 80}ms"
          >
            <header class="detail-section__header showcase-heading">
              <div>
                ${sectionEyebrow ? `<p class="eyebrow">${escapeHtml(sectionEyebrow)}</p>` : ""}
                ${sectionTitle ? `<h2 id="${section.id}-title">${escapeHtml(sectionTitle)}</h2>` : ""}
              </div>
              ${section.description?.[lang] ? `<p>${escapeHtml(section.description[lang])}</p>` : ""}
            </header>
            <div class="embroidery-grid embroidery-grid--${section.style}">${items}</div>
          </section>
        `;
      })
      .join("");
  }

  function imageLightbox(lang) {
    const t = copy[lang];
    return `
      <div class="image-lightbox" data-lightbox hidden>
        <button class="image-lightbox__backdrop" type="button" data-lightbox-close tabindex="-1" aria-label="${escapeHtml(t.closePreview)}"></button>
        <section class="image-lightbox__panel" role="dialog" aria-modal="true" aria-label="${escapeHtml(t.imagePreview)}">
          <button class="image-lightbox__close" type="button" data-lightbox-close aria-label="${escapeHtml(t.closePreview)}">×</button>
          <div class="image-lightbox__viewport" data-lightbox-viewport>
            <div class="image-lightbox__stage" data-lightbox-stage>
              <img data-lightbox-img src="" alt="" draggable="false" />
            </div>
          </div>
        </section>
      </div>
    `;
  }

  function setLightboxScale(lightbox, requestedScale, preserveCenter = true) {
    if (!lightbox || lightbox.hidden) return;
    const viewport = lightbox.querySelector("[data-lightbox-viewport]");
    const stage = lightbox.querySelector("[data-lightbox-stage]");
    if (!viewport || !stage) return;

    const currentScale = Number(lightbox.dataset.scale || 1);
    const nextScale = Math.max(1, Math.min(4, Math.round(requestedScale * 100) / 100));
    if (currentScale === nextScale) return;

    const oldWidth = Math.max(stage.scrollWidth, viewport.clientWidth);
    const oldHeight = Math.max(stage.scrollHeight, viewport.clientHeight);
    const centerX = (viewport.scrollLeft + viewport.clientWidth / 2) / oldWidth;
    const centerY = (viewport.scrollTop + viewport.clientHeight / 2) / oldHeight;

    lightbox.dataset.scale = String(nextScale);
    stage.style.setProperty("--lightbox-size", `${nextScale * 100}%`);

    if (preserveCenter) {
      window.requestAnimationFrame(() => {
        viewport.scrollTo({
          left: centerX * stage.scrollWidth - viewport.clientWidth / 2,
          top: centerY * stage.scrollHeight - viewport.clientHeight / 2,
          behavior: "instant",
        });
      });
    }
  }

  function resetLightbox(lightbox) {
    if (!lightbox) return;
    const viewport = lightbox.querySelector("[data-lightbox-viewport]");
    const stage = lightbox.querySelector("[data-lightbox-stage]");
    lightbox.dataset.scale = "1";
    stage?.style.setProperty("--lightbox-size", "100%");
    viewport?.scrollTo({ left: 0, top: 0, behavior: "instant" });
    lightboxPointers.clear();
    lightboxPinchStart = null;
    lightboxPanStart = null;
  }

  function lockPageForLightbox() {
    lightboxScrollY = window.scrollY || document.documentElement.scrollTop || 0;
    document.documentElement.classList.add("has-lightbox");
    document.body.classList.add("has-lightbox");
  }

  function unlockPageAfterLightbox() {
    if (!document.body.classList.contains("has-lightbox")) return;
    document.documentElement.classList.remove("has-lightbox");
    document.body.classList.remove("has-lightbox");
    if (Math.abs(window.scrollY - lightboxScrollY) > 1) {
      window.scrollTo({ top: lightboxScrollY, left: 0, behavior: "instant" });
    }
  }

  function openImageLightbox(trigger) {
    const lightbox = app.querySelector("[data-lightbox]");
    if (!lightbox) return;
    const image = lightbox.querySelector("[data-lightbox-img]");
    const imageTitle = trigger.dataset.lightboxTitle || "";

    lightboxLastTrigger = trigger;
    if (image) {
      image.src = trigger.dataset.lightboxImage || "";
      image.alt = imageTitle;
    }
    lightbox.hidden = false;
    lockPageForLightbox();
    resetLightbox(lightbox);
    window.requestAnimationFrame(() => lightbox.querySelector(".image-lightbox__close")?.focus({ preventScroll: true }));
  }

  function closeImageLightbox(restoreFocus = true) {
    const lightbox = app.querySelector("[data-lightbox]");
    if (!lightbox || lightbox.hidden) return;
    lightbox.hidden = true;
    unlockPageAfterLightbox();
    resetLightbox(lightbox);
    if (restoreFocus) lightboxLastTrigger?.focus({ preventScroll: true });
    lightboxLastTrigger = null;
  }

  function productMasonryGallery(product, lang) {
    if (!product.masonryGallery) return "";

    const words = showcaseCopy[lang];
    const items = product.masonryGallery
      .map(
        (image, index) => `
          <figure class="masonry-card masonry-card--product" data-reveal style="--reveal-delay: ${Math.min(index * 55, 220)}ms">
            <img
              src="${image}"
              alt="${escapeHtml(product[lang])} ${index + 1}"
              loading="lazy"
              decoding="async"
            />
          </figure>
        `,
      )
      .join("");

    return `
      <section class="detail-section product-masonry-showcase" data-reveal>
        <header class="detail-section__header showcase-heading">
          <div>
            <p class="eyebrow">${escapeHtml(words.dollEyebrow)}</p>
            <h2>${escapeHtml(words.dollTitle)}</h2>
          </div>
          <p>${escapeHtml(words.dollText)}</p>
        </header>
        <div class="masonry-grid masonry-grid--product">${items}</div>
      </section>
    `;
  }

  function productIntroVisual(product, lang) {
    if (!product.introImage) return "";
    const title = product.introImageTitle?.[lang] || product[lang];
    return `
      <section class="product-intro-visual" data-reveal aria-label="${escapeHtml(title)}">
        <button
          class="product-intro-visual__button"
          type="button"
          data-lightbox-image="${product.introImage}"
          data-lightbox-title="${escapeHtml(title)}"
          aria-label="${escapeHtml(copy[lang].imagePreview)}：${escapeHtml(title)}"
        >
          <img
            src="${product.introImage}"
            alt="${escapeHtml(title)}"
            loading="eager"
            decoding="async"
          />
        </button>
      </section>
    `;
  }

  function detailScreen(route) {
    const { lang, category: categoryId, product } = route;
    const t = copy[lang];
    const category = catalog[categoryId];
    const other = alternateLanguage(lang);
    const gallery = productGallery(category, product);
    const galleryTitle = product.galleryTitle?.[lang] || t.gallery;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = `${product[lang]}｜Maison Nuvé`;

    const galleryItems = gallery
      .map(
        (image, index) => `
          <figure class="gallery-item${product.galleryFit === "contain" ? " is-contain" : ""}">
            <button
              class="gallery-item__button"
              type="button"
              data-lightbox-image="${image}"
              data-lightbox-title="${escapeHtml(product[lang])} ${index + 1}"
              aria-label="${escapeHtml(t.imagePreview)}：${escapeHtml(product[lang])} ${index + 1}"
            >
              <img src="${image}" alt="${escapeHtml(product[lang])} ${index + 1}" loading="lazy" />
            </button>
          </figure>
        `,
      )
      .join("");

    const gallerySection = product.hideDefaultGallery
      ? ""
      : `
        <section class="detail-section${product.fullWidthGallery ? " detail-section--edge-gallery" : ""}" data-reveal>
          <header class="detail-section__header">
            <p class="eyebrow">Gallery</p>
            <h2>${escapeHtml(galleryTitle)}</h2>
          </header>
          <div class="gallery-grid${product.galleryFit === "contain" ? " is-contain" : ""}${gallery.length === 1 ? " gallery-grid--single" : ""}${product.fullWidthGallery ? " gallery-grid--edge" : ""}">${galleryItems}</div>
        </section>
      `;
    const patternShowcaseSection = patternShowcase(product, lang);
    const masonryGallerySection = productMasonryGallery(product, lang);
    const introVisual = productIntroVisual(product, lang);

    const video = product.video
      ? `
        <section class="detail-section" data-reveal>
          <header class="detail-section__header">
            <p class="eyebrow">In the making</p>
            <h2>${escapeHtml(t.video)}</h2>
          </header>
          <div class="video-frame">
            <video
              src="${product.video}"
              poster="images/embroidery-process.jpg"
              controls
              playsinline
              preload="metadata"
              aria-label="${escapeHtml(t.video)}"
            ></video>
          </div>
        </section>
      `
      : "";

    return `
      <main class="screen" id="main-content">
          ${headerHtml(route, `${lang}/${categoryId}`)}
          <article>
            <section class="detail-layout">
            <div class="detail-media${product.imageFit === "contain" ? " is-contain" : ""}">
              <img src="${product.image}" alt="${escapeHtml(product[lang])}" fetchpriority="high" data-parallax data-parallax-speed="0.035" />
            </div>
            <div class="detail-copy" data-reveal>
              <p class="eyebrow">${escapeHtml(category[lang])}</p>
              <h1>${escapeHtml(product[lang])}</h1>
              <p class="detail-copy__secondary">${escapeHtml(product[other])}</p>
              ${product.price ? `<p class="detail-copy__price">${escapeHtml(product.price[lang])}</p>` : ""}
              ${product.description?.[lang] ? `<p class="detail-copy__description">${escapeHtml(product.description[lang])}</p>` : ""}
              <div class="detail-facts" aria-label="${lang === "zh" ? "产品特点" : "Product qualities"}">
                <div class="detail-fact"><strong>01</strong><span>${escapeHtml(t.natural)}</span></div>
                <div class="detail-fact"><strong>02</strong><span>${escapeHtml(t.craft)}</span></div>
                <div class="detail-fact"><strong>03</strong><span>${escapeHtml(t.everyday)}</span></div>
              </div>
            </div>
          </section>
          ${introVisual}
          ${product.fullWidthGallery ? gallerySection : ""}
          <div class="content-shell detail-support">
            ${product.fullWidthGallery ? "" : gallerySection}
            ${patternShowcaseSection}
            ${masonryGallerySection}
            ${video}
            <aside class="detail-cta" data-reveal>
              <strong>${escapeHtml(t.askStore)}</strong>
              <span>${escapeHtml(t.askStoreText)}</span>
            </aside>
          </div>
        </article>
        ${footerHtml(lang)}
        ${imageLightbox(lang)}
      </main>
    `;
  }

  function render() {
    stopHeroAutoplay();
    cleanupPageMotion();
    unlockPageAfterLightbox();
    lightboxPointers.clear();
    lightboxLastTrigger = null;
    const route = parseRoute();
    let markup;

    if (!route.lang) {
      markup = languageScreen();
    } else if (!route.category) {
      markup = catalogHome(route);
    } else if (!route.product) {
      markup = collectionScreen(route);
    } else {
      markup = detailScreen(route);
    }

    app.innerHTML = markup;
    window.scrollTo({ top: 0, behavior: "instant" });
    initHeroCarousel();
    initPageMotion();
    const heading = app.querySelector("h1, h2");
    if (heading) heading.setAttribute("tabindex", "-1");
  }

  document.addEventListener("click", (event) => {
    const lightboxTrigger = event.target.closest("[data-lightbox-image]");
    if (lightboxTrigger) {
      event.preventDefault();
      openImageLightbox(lightboxTrigger);
      return;
    }

    if (event.target.closest("[data-lightbox-close]")) {
      closeImageLightbox();
      return;
    }

    const heroControl = event.target.closest("[data-hero-direction], [data-hero-slide]");
    if (heroControl) {
      const carousel = heroControl.closest("[data-hero-carousel]");
      if (carousel) {
        const current = Number(carousel.dataset.activeIndex || 0);
        const requested = heroControl.hasAttribute("data-hero-slide")
          ? Number(heroControl.dataset.heroSlide)
          : current + Number(heroControl.dataset.heroDirection || 0);
        setHeroSlide(carousel, requested);
        startHeroAutoplay(carousel);
      }
      return;
    }

    const target = event.target.closest("[data-route]");
    if (!target) return;
    event.preventDefault();
    navigate(target.dataset.route || "");
  });

  document.addEventListener(
    "wheel",
    (event) => {
      const viewport = event.target.closest("[data-lightbox-viewport]");
      const lightbox = viewport?.closest("[data-lightbox]");
      if (!lightbox || lightbox.hidden) return;
      event.preventDefault();
      const direction = event.deltaY < 0 ? 0.25 : -0.25;
      setLightboxScale(lightbox, Number(lightbox.dataset.scale || 1) + direction);
    },
    { passive: false },
  );

  document.addEventListener("dblclick", (event) => {
    const viewport = event.target.closest("[data-lightbox-viewport]");
    const lightbox = viewport?.closest("[data-lightbox]");
    if (!lightbox || lightbox.hidden) return;
    setLightboxScale(lightbox, Number(lightbox.dataset.scale || 1) > 1 ? 1 : 2);
  });

  document.addEventListener("pointerdown", (event) => {
    const viewport = event.target.closest("[data-lightbox-viewport]");
    const lightbox = viewport?.closest("[data-lightbox]");
    if (!lightbox || lightbox.hidden || (event.pointerType === "mouse" && event.button !== 0)) return;
    viewport.setPointerCapture?.(event.pointerId);
    lightboxPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (lightboxPointers.size === 1) {
      lightboxPanStart = {
        x: event.clientX,
        y: event.clientY,
        left: viewport.scrollLeft,
        top: viewport.scrollTop,
      };
    } else if (lightboxPointers.size === 2) {
      const [first, second] = [...lightboxPointers.values()];
      lightboxPinchStart = {
        distance: Math.hypot(second.x - first.x, second.y - first.y),
        scale: Number(lightbox.dataset.scale || 1),
      };
    }
  });

  document.addEventListener("pointermove", (event) => {
    if (!lightboxPointers.has(event.pointerId)) return;
    const viewport = event.target.closest("[data-lightbox-viewport]") || app.querySelector("[data-lightbox-viewport]");
    const lightbox = viewport?.closest("[data-lightbox]");
    if (!viewport || !lightbox || lightbox.hidden) return;
    event.preventDefault();
    lightboxPointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (lightboxPointers.size === 2 && lightboxPinchStart) {
      const [first, second] = [...lightboxPointers.values()];
      const distance = Math.hypot(second.x - first.x, second.y - first.y);
      setLightboxScale(lightbox, lightboxPinchStart.scale * (distance / lightboxPinchStart.distance), false);
    } else if (lightboxPointers.size === 1 && lightboxPanStart && Number(lightbox.dataset.scale || 1) > 1) {
      viewport.scrollLeft = lightboxPanStart.left - (event.clientX - lightboxPanStart.x);
      viewport.scrollTop = lightboxPanStart.top - (event.clientY - lightboxPanStart.y);
    }
  });

  function endLightboxPointer(event) {
    if (!lightboxPointers.has(event.pointerId)) return;
    lightboxPointers.delete(event.pointerId);
    lightboxPinchStart = null;
    const viewport = app.querySelector("[data-lightbox-viewport]");
    if (lightboxPointers.size === 1 && viewport) {
      const remaining = [...lightboxPointers.values()][0];
      lightboxPanStart = {
        x: remaining.x,
        y: remaining.y,
        left: viewport.scrollLeft,
        top: viewport.scrollTop,
      };
    } else {
      lightboxPanStart = null;
    }
  }

  document.addEventListener("pointerup", endLightboxPointer);
  document.addEventListener("pointercancel", endLightboxPointer);

  document.addEventListener("keydown", (event) => {
    const lightbox = app.querySelector("[data-lightbox]");
    if (!lightbox || lightbox.hidden) return;
    if (event.key === "Escape") closeImageLightbox();
    if (event.key === "+" || event.key === "=") {
      event.preventDefault();
      setLightboxScale(lightbox, Number(lightbox.dataset.scale || 1) + 0.25);
    }
    if (event.key === "-") {
      event.preventDefault();
      setLightboxScale(lightbox, Number(lightbox.dataset.scale || 1) - 0.25);
    }
    if (event.key === "0") {
      event.preventDefault();
      resetLightbox(lightbox);
    }
  });

  window.addEventListener("hashchange", render);
  window.addEventListener("popstate", render);
  window.addEventListener("scroll", queueParallax, { passive: true });
  window.addEventListener("resize", queueParallax, { passive: true });
  render();
})();
