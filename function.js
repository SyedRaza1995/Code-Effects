(function () {
    // ===== Testimonials carousel (if present in DOM) =====
    const slides = document.getElementById("tcar123-slides");
    const prev = document.getElementById("tcar123-prev");
    const next = document.getElementById("tcar123-next");
    if (slides && prev && next) {
      let index = 0;
      const slideInterval = 4000;
      let timer;

      const cardsPerView = () => window.matchMedia("(max-width:900px)").matches ? 1 : 3;
      const maxIndex = () => Math.max(0, slides.children.length - cardsPerView());

      function update() {
        const card = slides.querySelector(".tcar123-card");
        const cardWidth = card ? card.getBoundingClientRect().width : 0;
        const gap = parseFloat(getComputedStyle(slides).gap) || 0;
        slides.style.transform = `translateX(${-(index * (cardWidth + gap))}px)`;
      }
      function nextSlide() { index = index + 1 > maxIndex() ? 0 : index + 1; update(); }
      function prevSlide() { index = index - 1 < 0 ? maxIndex() : index - 1; update(); }
      function resetTimer() { clearInterval(timer); timer = setInterval(nextSlide, slideInterval); }

      prev.addEventListener("click", () => { prevSlide(); resetTimer(); });
      next.addEventListener("click", () => { nextSlide(); resetTimer(); });
      window.addEventListener("resize", () => { index = Math.min(index, maxIndex()); update(); });

      timer = setInterval(nextSlide, slideInterval);
      update();
    }

    // ===== Header: mobile nav + scroll style =====
    document.addEventListener("DOMContentLoaded", function () {
      const header = document.querySelector(".header-container");
      const nav = document.querySelector(".main-nav");
      const toggleBtn = document.querySelector(".mobile-nav-toggle");
      const triggerHeight = header.offsetHeight * 2;

      toggleBtn.addEventListener("click", function () {
        nav.classList.toggle("active");
      });

      window.addEventListener("scroll", function () {
        if (window.scrollY > triggerHeight) header.classList.add("scrolled");
        else header.classList.remove("scrolled");
      });
    });

    // ===== FAQ accordion (animated open/close) =====
    document.querySelectorAll(".faq-item").forEach((item) => {
      const summary = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");

      summary.addEventListener("click", function (e) {
        e.preventDefault();

        if (item.hasAttribute("open")) {
          answer.style.maxHeight = answer.scrollHeight + "px";
          requestAnimationFrame(() => {
            answer.style.maxHeight = "0";
            answer.style.opacity = "0";
          });
          setTimeout(() => item.removeAttribute("open"), 400);
        } else {
          item.setAttribute("open", "");
          answer.style.maxHeight = "0";
          answer.style.opacity = "0";
          requestAnimationFrame(() => {
            answer.style.maxHeight = answer.scrollHeight + "px";
            answer.style.opacity = "1";
          });
        }
      });
    });
  })();

  document.addEventListener("DOMContentLoaded", function () {
    const heroContent = document.querySelector(".hero-content");
    const heroForm = document.querySelector(".hero-form-wrapper");
    function animateHero() {
      const trigger = window.innerHeight * 0.85;
      if (heroContent.getBoundingClientRect().top < trigger) {
        heroContent.classList.add("animate");
        heroForm.classList.add("animate");
        window.removeEventListener("scroll", animateHero);
      }
    }
    window.addEventListener("scroll", animateHero);
    animateHero();
  });

  // WHAT-IS
  document.addEventListener("DOMContentLoaded", function () {
    const whatIsContent = document.querySelector(".what-is-content");
    const whatIsImage = document.querySelector(".what-is-image");
    function animateWhatIs() {
      const trigger = window.innerHeight * 0.85;
      if (whatIsContent.getBoundingClientRect().top < trigger) {
        whatIsContent.classList.add("animate");
        whatIsImage.classList.add("animate");
        window.removeEventListener("scroll", animateWhatIs);
      }
    }
    window.addEventListener("scroll", animateWhatIs);
    animateWhatIs();
  });

  // HOW-INTRO
  document.addEventListener("DOMContentLoaded", function () {
    const howHeading = document.querySelector(".how-heading");
    const howImage = document.querySelector(".how-it-works-intro-image");
    const stepItems = document.querySelectorAll(".step-item");

    function animateHowSection() {
      const trigger = window.innerHeight * 0.85;
      if (howHeading.getBoundingClientRect().top < trigger) {
        howHeading.classList.add("animate");
        howImage.classList.add("animate");
        stepItems.forEach((item, i) => {
          setTimeout(() => item.classList.add("animate"), 900 + i * 200);
        });
        window.removeEventListener("scroll", animateHowSection);
      }
    }
    window.addEventListener("scroll", animateHowSection);
    animateHowSection();
  });

  // TESTIMONIALS
  document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector("#section-testimonials");
    if (!section) return;
    const cards = document.querySelectorAll(".tcar123-card");
    function animateTestimonials() {
      const trigger = window.innerHeight * 0.85;
      if (section.getBoundingClientRect().top < trigger) {
        section.classList.add("animate");
        cards.forEach((card, i) => setTimeout(() => card.classList.add("animate"), 600 + i * 200));
        window.removeEventListener("scroll", animateTestimonials);
      }
    }
    window.addEventListener("scroll", animateTestimonials);
    animateTestimonials();
  });

  // BENEFITS
  document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector("#section-benefits");
    const cards = document.querySelectorAll(".benefit-card");
    function animateBenefits() {
      const trigger = window.innerHeight * 0.85;
      if (section.getBoundingClientRect().top < trigger) {
        section.classList.add("animate");
        cards.forEach((card, i) => setTimeout(() => card.classList.add("animate"), 600 + i * 200));
        window.removeEventListener("scroll", animateBenefits);
      }
    }
    window.addEventListener("scroll", animateBenefits);
    animateBenefits();
  });

  // STEPS
  document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector("#section-how-it-works-steps");
    const items = document.querySelectorAll("#section-how-it-works-steps .proccess-in");
    function animateSteps() {
      const trigger = window.innerHeight * 0.85;
      if (section.getBoundingClientRect().top < trigger) {
        section.classList.add("animate");
        items.forEach((item, i) => setTimeout(() => item.classList.add("animate"), 600 + i * 200));
        window.removeEventListener("scroll", animateSteps);
      }
    }
    window.addEventListener("scroll", animateSteps);
    animateSteps();
  });

  // ARTICLES
  document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector("#section-articles");
    const cards = document.querySelectorAll("#section-articles .article-card");
    function animateArticles() {
      const trigger = window.innerHeight * 0.85;
      if (section.getBoundingClientRect().top < trigger) {
        section.classList.add("animate");
        cards.forEach((card, i) => setTimeout(() => card.classList.add("animate"), 600 + i * 200));
        window.removeEventListener("scroll", animateArticles);
      }
    }
    window.addEventListener("scroll", animateArticles);
    animateArticles();
  });

  // FAQ
  document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector("#section-faq");
    const items = document.querySelectorAll("#section-faq .faq-item");
    function animateFAQ() {
      const trigger = window.innerHeight * 0.85;
      if (section.getBoundingClientRect().top < trigger) {
        section.classList.add("animate");
        items.forEach((item, i) => setTimeout(() => item.classList.add("animate"), 600 + i * 200));
        window.removeEventListener("scroll", animateFAQ);
      }
    }
    window.addEventListener("scroll", animateFAQ);
    animateFAQ();
  });

  // NEWSLETTER
  document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector("#section-newsletter");
    function animateNewsletter() {
      const trigger = window.innerHeight * 0.85;
      if (section.getBoundingClientRect().top < trigger) {
        section.classList.add("animate");
        window.removeEventListener("scroll", animateNewsletter);
      }
    }
    window.addEventListener("scroll", animateNewsletter);
    animateNewsletter();
  });


  document.addEventListener("DOMContentLoaded", function() {
    const btn = document.createElement('div');
    btn.id = 'backToTopBtn';
    btn.title = 'Back to Top';
    btn.ariaLabel = 'Scroll back to top of page';
    btn.innerHTML = `
      <svg class="progress-ring" width="60" height="60">
        <circle class="progress-ring-circle" stroke="#26a9e1" stroke-width="3" fill="transparent" r="25" cx="30" cy="30"/>
      </svg>
      <svg class="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 5V19M12 5L6 11M12 5L18 11" stroke="#26a9e1" stroke-width="2" stroke-linecap="round"/>
      </svg>
    `;
    btn.style.cssText = `
      position: fixed; bottom: 30px; right: 30px; width: 60px; height: 60px; border-radius: 50%;
      background: white; cursor: pointer; opacity: 0; visibility: hidden; transition: opacity 0.3s, visibility 0.3s, transform 0.2s;
      z-index: 999; box-shadow: 0 4px 12px rgba(0,0,0,0.15); display: flex; align-items: center; justify-content: center;
    `;
    const style = document.createElement('style');
    style.textContent = `
      #backToTopBtn .progress-ring { position: absolute; top:0; left:0; transform: rotate(-90deg); }
      #backToTopBtn .progress-ring-circle { stroke-dasharray:157; stroke-dashoffset:157; transition: stroke-dashoffset 0.3s; }
      #backToTopBtn .arrow-icon { position: relative; transition: transform 0.3s; }
      #backToTopBtn:hover .arrow-icon { transform: translateY(-3px); }
      #backToTopBtn:hover { box-shadow: 0 6px 16px rgba(0,0,0,0.2); }
    `;
    document.head.appendChild(style);
    document.body.appendChild(btn);

    const circle = btn.querySelector('.progress-ring-circle');
    let isAnimating = false;

    window.addEventListener('scroll', function() {
      const progress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      circle.style.strokeDashoffset = 157 * (1 - progress);
      if (window.scrollY > 300) { btn.style.opacity = '1'; btn.style.visibility = 'visible'; }
      else { btn.style.opacity = '0'; btn.style.visibility = 'hidden'; }
    });

    btn.addEventListener('click', function(e) {
      e.preventDefault();
      if (window.scrollY === 0 || isAnimating) return;
      isAnimating = true;
      btn.style.transform = 'scale(0.95)';

      const startY = window.scrollY;
      const duration = Math.min(800, startY * 1.5);
      const startTime = performance.now();

      const animate = function(now) {
        const elapsed = now - startTime;
        const t = Math.min(elapsed / duration, 1);
        const ease = (t2 => (--t2) * t2 * t2 + 1)(t);
        window.scrollTo(0, startY * (1 - ease));
        if (t < 1) requestAnimationFrame(animate);
        else { isAnimating = false; btn.style.transform = 'scale(1)'; circle.style.strokeDashoffset = '157'; }
      };
      requestAnimationFrame(animate);
    });
  });
  (function(){
  const PHONE_MQ = '(max-width:640px)';
  const isPhone = () => window.matchMedia(PHONE_MQ).matches;

  // Map directions by ID: -1 = left, +1 = right
  const DIR = {
    'logos-row1': -1,
    'logos-row2': +1,
    'logos-row3': -1
  };

  // px per second (tweakable)
  const BASE_SPEED = 35;

  function initSmoothCarousel(root){
    if (!root || root.__init) return;
    root.__init = true;

    const track  = root.querySelector('.logo-carousel__track');
    const slides = Array.from(track.children);
    if (slides.length === 0) return;

    const direction = DIR[root.id] ?? -1;
    let speed = BASE_SPEED * direction;

    // duplicate the slides once to ensure we always have enough content to cycle
    slides.forEach(s => track.appendChild(s.cloneNode(true)));

    // state
    let rafId = null;
    let lastTs = null;
    let offset = 0;            // current translateX in px (negative = left)
    let slideW = 0;            // slide width + gap
    let gapPx = 0;
    let dragging = false;
    let startX = 0;
    let startOffset = 0;

    function measure(){
      const first = track.querySelector('.logo-carousel__slide');
      const rect  = first.getBoundingClientRect();
      gapPx = parseFloat(getComputedStyle(track).gap || 0);
      slideW = rect.width + gapPx;
      // clamp offset to avoid drift after resizes
      if (slideW > 0) offset = offset % (-slideW);
      apply();
    }

    function apply(){
      track.style.transform = `translateX(${offset}px)`;
    }

    function tick(ts){
      if (!lastTs) lastTs = ts;
      const dt = (ts - lastTs) / 1000; // seconds
      lastTs = ts;

      // move
      offset += speed * dt;

      // recycle slides to keep it seamless
      if (direction < 0){
        // moving left: when the first slide fully left the viewport, move it to the end and bump offset
        while (offset <= -slideW){
          track.appendChild(track.firstElementChild);
          offset += slideW;
        }
      } else {
        // moving right: when we've shifted right past 0, pull last slide to front and reduce offset
        while (offset >= 0){
          track.insertBefore(track.lastElementChild, track.firstElementChild);
          offset -= slideW;
        }
      }

      apply();
      rafId = requestAnimationFrame(tick);
    }

    function start(){
      stop();
      lastTs = null;
      rafId = requestAnimationFrame(tick);
    }
    function stop(){
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
    }

    // Drag / swipe control
    function onDown(e){
      if (!isPhone()) return;
      dragging = true;
      stop();
      startX = (e.touches ? e.touches[0].clientX : e.clientX);
      // current transform offset
      const m = track.style.transform.match(/-?\d+(\.\d+)?/g);
      startOffset = m ? parseFloat(m[0]) : offset;
      track.style.transition = 'none';
    }
    function onMove(e){
      if (!dragging) return;
      const x = (e.touches ? e.touches[0].clientX : e.clientX);
      const dx = x - startX;
      offset = startOffset + dx;
      apply();
    }
    function onUp(){
      if (!dragging) return;
      dragging = false;
      // resume smooth scroll
      start();
    }

    // Events
    track.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    track.addEventListener('touchstart', onDown, {passive:true});
    track.addEventListener('touchmove', onMove, {passive:true});
    track.addEventListener('touchend', onUp);

    // Init
    measure();
    start();

    // Re-measure on resize/orientation changes
    const ro = new ResizeObserver(() => { if (isPhone()) measure(); });
    ro.observe(track);
    window.addEventListener('resize', () => { if (isPhone()) measure(); });

    // Store teardown
    root.__destroy = () => {
      stop();
      ro.disconnect();
      // (optional) cleanup clones not necessary since hidden on desktop
    };
  }

  function destroyCarousel(root){
    if (!root || !root.__init) return;
    root.__init = false;
    root.__destroy && root.__destroy();
  }

  function setup(){
    if (isPhone()){
      document.querySelectorAll('.logo-carousel').forEach(initSmoothCarousel);
    } else {
      document.querySelectorAll('.logo-carousel').forEach(destroyCarousel);
    }
  }

  // run and respond to breakpoint changes
  setup();
  window.matchMedia(PHONE_MQ).addEventListener('change', setup);
  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', setup);
  }
})();
(() => {
  const viewport = document.getElementById('tf-viewport');
  const track    = document.getElementById('tf-track');
  const prevBtn  = document.getElementById('tf-prev');
  const nextBtn  = document.getElementById('tf-next');

  let slides = [];
  let perView = 3;
  let index = 0;

  const pv = () => (innerWidth <= 640 ? 1 : innerWidth <= 1200 ? 2 : 3);

  function rebuild(){
    // remove clones
    track.querySelectorAll('.__clone').forEach(n => n.remove());

    slides = Array.from(track.children).filter(n => n.classList?.contains('tf-card'));
    perView = pv();
    track.style.setProperty('--tf-per', perView);

    // build clones for loop
    const head = slides.slice(0, perView).map(n => { const c=n.cloneNode(true); c.classList.add('__clone'); return c; });
    const tail = slides.slice(-perView).map(n => { const c=n.cloneNode(true); c.classList.add('__clone'); return c; });
    tail.forEach(n => track.insertBefore(n, track.firstChild));
    head.forEach(n => track.appendChild(n));

    index = 0;
    goTo(index, false);
  }

  function targetX(i){
    const kids   = track.children;            // includes clones + track padding
    const first  = kids[0];
    const target = kids[i + perView];
    const dx = target.offsetLeft - first.offsetLeft;
    return -Math.round(dx);                   // pixel-perfect
  }

  function goTo(i, animate=true){
    track.style.transition = animate ? 'transform .45s ease' : 'none';
    track.style.transform  = `translate3d(${targetX(i)}px,0,0)`;
  }

  const next = () => { index += 1; goTo(index, true); };
  const prev = () => { index -= 1; goTo(index, true); };

  track.addEventListener('transitionend', () => {
    const real = slides.length;
    if (index >= real){ index = 0; goTo(index, false); }
    else if (index < 0){ index = real - 1; goTo(index, false); }
  });

  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  const init = () => rebuild();
  addEventListener('resize', init, { passive:true });
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', init) : init();
})();
  const faqSectionItems = document.querySelectorAll('.faq-section-item');
 
  faqSectionItems.forEach(item => {
    item.querySelector('.faq-section-question').addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
(function () {
  const track = document.getElementById('tf-track');
  const prev  = document.getElementById('tf-prev');
  const next  = document.getElementById('tf-next');

  // breakpoints: >=1024 => 3, 640-1023 => 2, <640 => 1
  function getPerView() {
  if (window.matchMedia('(min-width:1280px)').matches) return 3; // large desktops
  if (window.matchMedia('(min-width:1024px)').matches) return 2; // tablets / small desktops
  return 1; // phones
}

let perView = getPerView();
  let totalReal;
  let index; // index within track including clones
  let step = 0;
  let isAnimating = false;

  function gapPx(){
    const g = getComputedStyle(track).getPropertyValue('gap') || '0';
    return parseFloat(g) || 0;
  }

  function setColumnWidth(){
    // grid-auto-columns: (viewport - total gaps)/perView
    const gap = gapPx();
    track.style.setProperty('--tf-col', `calc((100% - ${(perView - 1)} * ${gap}px) / ${perView})`);
  }

  function makeClones(){
    const real = Array.from(track.children).filter(n => !n.classList.contains('clone'));
    totalReal = real.length;

    track.innerHTML = '';
    real.forEach(n => track.appendChild(n));

    // clone last perView to head
    for (let i = totalReal - perView; i < totalReal; i++){
      const c = real[i].cloneNode(true);
      c.classList.add('clone');
      track.insertBefore(c, track.firstChild);
    }
    // clone first perView to tail
    for (let i = 0; i < perView; i++){
      const c = real[i].cloneNode(true);
      c.classList.add('clone');
      track.appendChild(c);
    }
  }

  function computeStep(){
    const first = track.querySelector('.tf-card');
    if (!first) return 0;
    // since grid-auto-columns are equal, step = card width + gap
    return first.getBoundingClientRect().width + gapPx();
  }

  function setX(immediate=false){
    const x = -(index * step);
    if (immediate){
      track.classList.add('no-anim');
      track.style.transform = `translate3d(${x}px,0,0)`;
      requestAnimationFrame(() => track.classList.remove('no-anim'));
    } else {
      track.style.transform = `translate3d(${x}px,0,0)`;
    }
  }

  function go(delta){
    if (isAnimating) return;
    isAnimating = true;
    index += delta;
    setX(false);
  }

  function onTransitionEnd(){
    // wrap-around for infinite loop
    const firstReal = perView;
    const lastRealEnd = totalReal + perView - 1;

    if (index > lastRealEnd){
      index = firstReal;
      setX(true);
    } else if (index < firstReal){
      index = lastRealEnd;
      setX(true);
    }
    isAnimating = false;
  }

  function recalc(){
    const newPerView = getPerView();

    // keep logical position if possible
    const logical = (typeof index === 'number')
      ? ((index - perView + totalReal) % totalReal)
      : 0;

    perView = newPerView;
    setColumnWidth();
    makeClones();
    step  = computeStep();
    index = perView + (logical || 0);
    setX(true);
  }

  prev.addEventListener('click', () => go(-1));
  next.addEventListener('click', () => go(+1));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft')  go(-1);
    if (e.key === 'ArrowRight') go(+1);
  });
  track.addEventListener('transitionend', onTransitionEnd);

  window.addEventListener('load', recalc);
  window.addEventListener('resize', () => requestAnimationFrame(recalc));
})();