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
          image: "images/loungewear.jpg",
          description: {
            zh: "柔软自在的居家穿着，让休息、阅读与慢下来的时间更加轻松。",
            en: "Soft, easy pieces for resting, reading, and moving through slower moments.",
          },
        },
        {
          id: "socks",
          zh: "袜子",
          en: "Socks",
          image: "images/socks.jpg",
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
          image: "images/fabric-dolls/example1.jpg",
          imageFit: "contain",
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
      intro: {
        zh: "将名字、图案与心意绣进日常，也可以亲手体验一针一线的乐趣。",
        en: "Turn names, motifs, and memories into stitches—or enjoy making something by hand.",
      },
      cover: "images/floral-coaster.jpg",
      colorGuide: {
        image: "images/custom-embroidery/color-chart.jpg",
        eyebrow: {
          zh: "刺绣选色参考",
          en: "Embroidery color guide",
        },
        title: {
          zh: "选择适合你的刺绣颜色",
          en: "Choose your embroidery colors",
        },
        description: {
          zh: "可参考色号表选择希望使用的绣线颜色，并结合面料底色、图案风格和使用场景进行搭配。",
          en: "Use the color chart to choose preferred thread shades, then match them with the fabric color, motif, and intended use.",
        },
        note: {
          zh: "屏幕显示可能存在色差，最终颜色请以门店实际绣线为准。",
          en: "Screen colors may vary. Please confirm the final shade against the physical thread in store.",
        },
      },
      products: [
        {
          id: "custom-embroidery",
          zh: "刺绣定制",
          en: "Custom Embroidery",
          image: "images/custom-embroidery/logo_dingzhi.jpg",
          imageFit: "contain",
          hideDefaultGallery: true,
          description: {
            zh: "从名字、纪念日期到专属图案，以细密针脚把个人故事留在日常织物上。",
            en: "Names, dates, and personal motifs become lasting details through thoughtful stitches.",
          },
          patternCollections: [
            {
              id: "patterns-dark",
              theme: "dark",
              images: Array.from(
                { length: 16 },
                (_, index) =>
                  `images/custom-embroidery/patterns-dark/pattern-${String(index + 1).padStart(2, "0")}.jpg`,
              ),
            },
            {
              id: "patterns-light",
              theme: "light",
              images: Array.from(
                { length: 20 },
                (_, index) =>
                  `images/custom-embroidery/patterns-light/pattern-${String(index + 1).padStart(2, "0")}.jpg`,
              ),
            },
          ],
          finishedGallery: Array.from(
            { length: 7 },
            (_, index) =>
              `images/custom-embroidery/finished-examples/finished-${String(index + 1).padStart(2, "0")}.jpg`,
          ),
          video: "video/floral-embroidery.mp4",
        },
        {
          id: "diy",
          zh: "DIY",
          en: "DIY",
          image: "images/diy/rose-patterns.jpg",
          imageFit: "contain",
          galleryFit: "contain",
          description: {
            zh: "从图案选择到亲手完成，在一针一线中体验专注、创造和手作的满足感。",
            en: "Choose a motif and enjoy the focus, creativity, and satisfaction of making by hand.",
          },
          gallery: [
            "images/diy/rose-patterns.jpg",
            "images/diy/design-preview.jpg",
            "images/diy/glow-embroidery.jpg",
          ],
          video: "video/floral-embroidery.mp4",
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
      supplied: "客户实拍",
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
      supplied: "Client imagery",
      menu: {
        bedding: "Bedding",
        "home-gifts": "Home & Gifts",
        embroidery: "Custom Embroidery & DIY",
      },
    },
  };

  const showcaseCopy = {
    zh: {
      designEyebrow: "定制图案库",
      designTitle: "选择你的刺绣灵感",
      designText: "深色与浅色图案分区展示，可根据服装、家纺或礼物的底色选择更合适的风格。",
      darkTitle: "国旗与运动",
      darkHint: "黑色背景图案 · 横向滑动浏览",
      lightTitle: "卡通、字母与花卉",
      lightHint: "白色背景图案 · 瀑布流浏览",
      previous: "上一组图案",
      next: "下一组图案",
      finishedEyebrow: "实际成品",
      finishedTitle: "成品展示",
      finishedText: "以下图片为实际刺绣成品效果样例，可用于了解针脚、色彩与落位效果。",
      dollEyebrow: "更多角度",
      dollTitle: "玩偶成品细节",
      dollText: "不同造型、尺寸和使用场景的实际展示。",
    },
    en: {
      designEyebrow: "Motif library",
      designTitle: "Choose your embroidery inspiration",
      designText: "Dark and light motif groups make it easier to match clothing, home textiles, and gifts.",
      darkTitle: "Flags & Sports",
      darkHint: "Dark-background motifs · swipe horizontally",
      lightTitle: "Cartoons, Letters & Florals",
      lightHint: "Light-background motifs · masonry view",
      previous: "Previous motifs",
      next: "Next motifs",
      finishedEyebrow: "Real examples",
      finishedTitle: "Finished pieces",
      finishedText: "Real finished embroidery examples showing stitch, color, and placement effects.",
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
          <img src="images/top.jpg" alt="Maison Nuvé 刺绣床品" fetchpriority="high" />
          <div class="language-cover__shade"></div>
          <div class="language-cover__brand">
            <p>Home &amp; Living</p>
            <h1>Maison Nuvé</h1>
          </div>
        </section>
        <section class="language-choice">
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
          <button class="category-card" type="button" data-route="${lang}/${id}">
            <img src="${category.cover}" alt="" loading="${index === 0 ? "eager" : "lazy"}" />
            <span class="category-card__number">0${index + 1}</span>
            <span class="category-card__body">
              <h2>${escapeHtml(category[lang])}</h2>
              <p>${escapeHtml(t.browse)}</p>
              <span class="category-card__arrow" aria-hidden="true">→</span>
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
          <div class="catalog-hero__slides">${heroSlides}</div>
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
          <header class="section-heading">
            <div>
              <p class="eyebrow">Three Collections · 03</p>
              <h2 class="display-title">${escapeHtml(t.explore)}</h2>
            </div>
            <p class="lead">${escapeHtml(t.exploreText)}</p>
          </header>
          <div class="category-grid">${cards}</div>
          <section class="brand-statement">
            <span class="brand-statement__mark" aria-hidden="true">✣</span>
            <p>${escapeHtml(t.promise)}</p>
            <small>${escapeHtml(t.brandLine)}</small>
          </section>
        </section>
        ${footerHtml(lang)}
      </main>
    `;
  }

  function colorGuideSection(guide, lang) {
    if (!guide) return "";

    return `
      <section class="color-guide">
        <div class="color-guide__copy">
          <p class="eyebrow">${escapeHtml(guide.eyebrow[lang])}</p>
          <h2>${escapeHtml(guide.title[lang])}</h2>
          <p>${escapeHtml(guide.description[lang])}</p>
          <small>${escapeHtml(guide.note[lang])}</small>
        </div>
        <figure class="color-guide__chart">
          <img
            src="${guide.image}"
            alt="${escapeHtml(guide.title[lang])}"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </section>
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
          <header class="collection-intro">
            <p class="eyebrow">${escapeHtml(t.collection)} · Maison Nuvé</p>
            <h1 class="display-title">${escapeHtml(category[lang])}</h1>
            <p class="lead">${escapeHtml(category.intro[lang])}</p>
            <span class="collection-count">${category.products.length} ${escapeHtml(t.categories)}</span>
          </header>
          <div class="product-grid">${cards}</div>
          ${colorGuideSection(category.colorGuide, lang)}
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
    if (!product.patternCollections) return "";

    const words = showcaseCopy[lang];
    const dark = product.patternCollections.find((collection) => collection.theme === "dark");
    const light = product.patternCollections.find((collection) => collection.theme === "light");
    const darkItems = (dark?.images || [])
      .map(
        (image, index) => `
          <figure class="pattern-card pattern-card--dark">
            <img
              src="${image}"
              alt="${escapeHtml(words.darkTitle)} ${index + 1}"
              loading="lazy"
              decoding="async"
            />
            <figcaption>${String(index + 1).padStart(2, "0")}</figcaption>
          </figure>
        `,
      )
      .join("");
    const lightItems = (light?.images || [])
      .map(
        (image, index) => `
          <figure class="masonry-card masonry-card--light">
            <img
              src="${image}"
              alt="${escapeHtml(words.lightTitle)} ${index + 1}"
              loading="lazy"
              decoding="async"
            />
            <figcaption>${String(index + 1).padStart(2, "0")}</figcaption>
          </figure>
        `,
      )
      .join("");
    const finishedItems = (product.finishedGallery || [])
      .map(
        (image, index) => `
          <figure class="masonry-card masonry-card--finished">
            <img
              src="${image}"
              alt="${escapeHtml(words.finishedTitle)} ${index + 1}"
              loading="lazy"
              decoding="async"
            />
          </figure>
        `,
      )
      .join("");

    return `
      <section class="detail-section embroidery-showcase">
        <header class="detail-section__header showcase-heading">
          <div>
            <p class="eyebrow">${escapeHtml(words.designEyebrow)}</p>
            <h2>${escapeHtml(words.designTitle)}</h2>
          </div>
          <p>${escapeHtml(words.designText)}</p>
        </header>

        <section class="pattern-panel pattern-panel--dark">
          <header class="pattern-panel__header">
            <div>
              <h3>${escapeHtml(words.darkTitle)}</h3>
              <p>${escapeHtml(words.darkHint)}</p>
            </div>
            <div class="carousel-controls">
              <button
                type="button"
                data-carousel-scroll="-1"
                data-carousel-target="patterns-dark-carousel"
                aria-label="${escapeHtml(words.previous)}"
                aria-controls="patterns-dark-carousel"
              >←</button>
              <button
                type="button"
                data-carousel-scroll="1"
                data-carousel-target="patterns-dark-carousel"
                aria-label="${escapeHtml(words.next)}"
                aria-controls="patterns-dark-carousel"
              >→</button>
            </div>
          </header>
          <div class="design-carousel" id="patterns-dark-carousel">${darkItems}</div>
        </section>

        <section class="pattern-panel pattern-panel--light">
          <header class="pattern-panel__header">
            <div>
              <h3>${escapeHtml(words.lightTitle)}</h3>
              <p>${escapeHtml(words.lightHint)}</p>
            </div>
          </header>
          <div class="masonry-grid masonry-grid--patterns">${lightItems}</div>
        </section>
      </section>

      <section class="detail-section finished-showcase">
        <header class="detail-section__header showcase-heading">
          <div>
            <p class="eyebrow">${escapeHtml(words.finishedEyebrow)}</p>
            <h2>${escapeHtml(words.finishedTitle)}</h2>
          </div>
          <p>${escapeHtml(words.finishedText)}</p>
        </header>
        <div class="masonry-grid masonry-grid--finished">${finishedItems}</div>
      </section>
    `;
  }

  function productMasonryGallery(product, lang) {
    if (!product.masonryGallery) return "";

    const words = showcaseCopy[lang];
    const items = product.masonryGallery
      .map(
        (image, index) => `
          <figure class="masonry-card masonry-card--product">
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
      <section class="detail-section product-masonry-showcase">
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

  function detailScreen(route) {
    const { lang, category: categoryId, product } = route;
    const t = copy[lang];
    const category = catalog[categoryId];
    const other = alternateLanguage(lang);
    const gallery = productGallery(category, product);
    const suppliedImage = categoryId === "embroidery";
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = `${product[lang]}｜Maison Nuvé`;

    const galleryItems = gallery
      .map(
        (image, index) => `
          <figure class="gallery-item${product.galleryFit === "contain" ? " is-contain" : ""}">
            <img src="${image}" alt="${escapeHtml(product[lang])} ${index + 1}" loading="lazy" />
          </figure>
        `,
      )
      .join("");

    const gallerySection = product.hideDefaultGallery
      ? ""
      : `
        <section class="detail-section">
          <header class="detail-section__header">
            <p class="eyebrow">Gallery</p>
            <h2>${escapeHtml(t.gallery)}</h2>
          </header>
          <div class="gallery-grid${product.galleryFit === "contain" ? " is-contain" : ""}">${galleryItems}</div>
        </section>
      `;
    const patternShowcaseSection = patternShowcase(product, lang);
    const masonryGallerySection = productMasonryGallery(product, lang);

    const video = product.video
      ? `
        <section class="detail-section">
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
              <img src="${product.image}" alt="${escapeHtml(product[lang])}" fetchpriority="high" />
              ${suppliedImage ? `<span class="detail-media__badge">${escapeHtml(t.supplied)}</span>` : ""}
            </div>
            <div class="detail-copy">
              <p class="eyebrow">${escapeHtml(category[lang])}</p>
              <h1>${escapeHtml(product[lang])}</h1>
              <p class="detail-copy__secondary">${escapeHtml(product[other])}</p>
              <p class="detail-copy__description">${escapeHtml(product.description[lang])}</p>
              <div class="detail-facts" aria-label="${lang === "zh" ? "产品特点" : "Product qualities"}">
                <div class="detail-fact"><strong>01</strong><span>${escapeHtml(t.natural)}</span></div>
                <div class="detail-fact"><strong>02</strong><span>${escapeHtml(t.craft)}</span></div>
                <div class="detail-fact"><strong>03</strong><span>${escapeHtml(t.everyday)}</span></div>
              </div>
            </div>
          </section>
          <div class="content-shell detail-support">
            ${gallerySection}
            ${patternShowcaseSection}
            ${masonryGallerySection}
            ${video}
            <aside class="detail-cta">
              <strong>${escapeHtml(t.askStore)}</strong>
              <span>${escapeHtml(t.askStoreText)}</span>
            </aside>
          </div>
        </article>
        ${footerHtml(lang)}
      </main>
    `;
  }

  function render() {
    stopHeroAutoplay();
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
    initHeroCarousel();
    window.scrollTo({ top: 0, behavior: "instant" });
    const heading = app.querySelector("h1, h2");
    if (heading) heading.setAttribute("tabindex", "-1");
  }

  document.addEventListener("click", (event) => {
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

    const carouselButton = event.target.closest("[data-carousel-scroll]");
    if (carouselButton) {
      const carousel = document.getElementById(carouselButton.dataset.carouselTarget || "");
      const direction = Number(carouselButton.dataset.carouselScroll || 0);
      if (carousel && direction) {
        carousel.scrollBy({
          left: carousel.clientWidth * 0.82 * direction,
          behavior: "smooth",
        });
      }
      return;
    }

    const target = event.target.closest("[data-route]");
    if (!target) return;
    event.preventDefault();
    navigate(target.dataset.route || "");
  });

  window.addEventListener("hashchange", render);
  window.addEventListener("popstate", render);
  render();
})();
