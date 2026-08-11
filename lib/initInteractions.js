// Client-side interactions ported from the original static page's inline <script>.
// Runs once after the markup from lib/content.js is mounted in the DOM.
// Idempotent (clears/re-fills generated grids) so it is safe under React
// StrictMode, which invokes effects twice in development.
export default function initInteractions() {
  var ng = document.getElementById('nationsGrid');
  if (ng) {
    ng.innerHTML = '';
    for (var i = 0; i < 50; i++) {
      var d = document.createElement('span');
      d.className = 'n';
      ng.appendChild(d);
    }
  }

  var nationsTimers = [];
  var nio = null;
  if (ng) {
    nio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var dots = ng.querySelectorAll('.n');
          dots.forEach(function (dot, idx) {
            nationsTimers.push(setTimeout(function () { dot.classList.add('lit'); }, idx * 45));
          });
          nio.disconnect();
        }
      });
    }, { threshold: 0.3 });
    nio.observe(ng);
  }

  var board = [
    { i: "NA", n: "Prof. Nehme Azoury", r: "Dean &amp; Deputy President, USEK &middot; Presiding", d: "Editor-in-Chief of the Arab Economic and Business Journal and General Secretary of the Arab Society of Business Faculties (BEPS).", photo: "/images/board/nehme-azoury.jpg" },
    { i: "DJ", n: "Dr. Dima Jamali", r: "Dean, LAU School of Business", d: "A globally ranked authority on Corporate Social Responsibility, placed among the top 2% of sustainability scientists worldwide.", photo: "/images/board/dima-jamali.jpg" },
    { i: "TS", n: "Dr. Tahani Saker", r: "CEO, Palma Hospitality Group", d: "Qatari entrepreneur and philanthropist, and founder of the humanitarian nonprofit Humanity Work." },
    { i: "ZB", n: "Ziad Baroud", r: "Fmr. Minister of Interior, Lebanon", d: "Managing Partner at HBDT Law Firm, Beirut, and former Lebanese Minister of Interior &amp; Municipalities (2008&ndash;2011)." },
    { i: "KS", n: "Kamal Shehadeh", r: "Minister of Technology &amp; AI, Lebanon", d: "Architect of Lebanon's LEAP national AI strategy; former telecom regulator and e&amp; (Etisalat) executive, with a Harvard BA and Columbia PhD." },
    { i: "GJ", n: "Dr. George Jabbour", r: "Professor of Finance, GWU", d: "Vice Dean for Executive Education at the George Washington University School of Business and a leading authority on derivatives and financial engineering." },
    { i: "FB", n: "Dr. Frank Bournois", r: "Vice-President &amp; Dean, CEIBS", d: "Dean of the China Europe International Business School and former Dean of ESCP Business School &mdash; among France's foremost management scholars.", photo: "/images/board/frank-bournois.jpg" },
    { i: "KA", n: "Dr. Karim Al Seghir", r: "Chancellor, Ajman University", d: "Economist and former Dean of the American University in Cairo's School of Business; advisory board member of Harvard Business Review Arabia.", photo: "/images/board/karim-al-seghir.jpg" },
    { i: "SK", n: "Dr. Sharif Kamel", r: "Dean, AUC School of Business", d: "Board member of the Central Bank of Egypt and a globally recognised AACSB Influential Leader in business education." },
    { i: "TG", n: "Thami Ghorfi", r: "President, ESCA École de Management", d: "Founder of the pan-African business school in Casablanca; sits on Morocco's Higher Council for Education and the AACSB and GBSN advisory boards.", photo: "/images/board/thami-ghorfi.jpg" },
    { i: "RM", n: "Dr. Rita El Meouchy", r: "Founder &amp; CEO, El Meouchy Education", d: "An education and leadership specialist with 25+ years' experience, creator of the &lsquo;EDU My Way&rsquo; platform and &lsquo;Shiny Career&rsquo; program.", photo: "/images/board/rita-el-meouchy.jpg" },
    { i: "LG", n: "Luis Gallardo", r: "Founder &amp; President, World Happiness Foundation", d: "Creator of the World Happiness Fest, TED speaker, 2022 Gusi Peace Prize laureate, and the mind behind &lsquo;Happytalism.&rsquo;" },
    { i: "CB", n: "Carine Bouery", r: "President, World Happiness Foundation UAE", d: "A Certified Chief Happiness &amp; Wellbeing Officer and employee-experience strategist, and founder of the consultancy Synchro Comms." },
    { i: "FK", n: "Fadi El Khatib", r: "FIBA Hall of Fame &middot; &lsquo;The Lebanese Tiger&rsquo;", d: "Lebanon's all-time leading scorer across three FIBA World Championships, now Founder &amp; CEO of Champs Sports and Fitness Club, Dubai.", photo: "/images/board/fadi-el-khatib.jpg" },
    { i: "RF", n: "Rony Fahed", r: "Lebanese National-Team Basketball Star", d: "A veteran guard who represented Lebanon at three FIBA World Championships.", photo: "/images/board/rony-fahed.jpg" },
    { i: "HA", n: "Gen. Haroun Abdel Kader", r: "Public Security Commissioner, Roubaix", d: "Founder &amp; President of &lsquo;Les Chemins de la Réussite,&rsquo; championing republican meritocracy and equal opportunity with EDHEC Business School.", photo: "/images/board/haroun-abdel-kader.jpg" },
    { i: "OJ", n: "Ola Joumblatt", r: "Lawyer &amp; Civic Advocate", d: "A Lebanese lawyer engaged in civic and social causes." }
  ];
  var bg = document.getElementById('boardGrid');
  if (bg) {
    bg.innerHTML = '';
    board.forEach(function (p) {
      var el = document.createElement('div');
      el.className = 'person reveal';
      var portraitInner = p.photo ? '<img src="' + p.photo + '" alt="' + p.n + '" loading="lazy" />' : '<span class="mono">' + p.i + '</span>';
      el.innerHTML = '<div class="portrait">' + portraitInner + '</div><div class="pn">' + p.n + '</div><div class="pt">' + p.r + '</div><div class="pr" style="margin-top:10px">' + p.d + '</div>';
      bg.appendChild(el);
    });
  }

  var voices = [
    { o: "Patron of GEMS World Dialogue", n: "H.E. Philippe Ziade", t: "Special Envoy for the State of Nevada" },
    { o: "LAU School of Business", n: "Prof. Dima Jamali", t: "Dean" },
    { o: "Beverly Hills Chamber of Commerce", n: "Todd Johnson", t: "President & CEO" },
    { o: "Conference & Visitors Bureau", n: "Julie Wagner", t: "CEO, Beverly Hills" },
    { o: "City of Beverly Hills", n: "Keith Sterling", t: "Deputy City Manager" },
    { o: "Humanity Work", n: "Dr. Tahani Saker", t: "Founder; SDG Advocate" },
    { o: "Bendheim Enterprises", n: "John Bendheim", t: "Principal" },
    { o: "International Cuccio Brands", n: "Tony Cuccio", t: "President & CEO" },
    { o: "eniGma Magazine", n: "Yasmine Shihata", t: "Founder & CEO" }
  ];
  var vg = document.getElementById('voicesGrid');
  if (vg) {
    vg.innerHTML = '';
    voices.forEach(function (v) {
      var el = document.createElement('div');
      el.className = 'card reveal';
      var avatar = v.photo ? '<div class="voice-avatar"><img src="' + v.photo + '" alt="' + v.n + '" loading="lazy" /></div>' : '';
      el.innerHTML = avatar + '<div class="pt" style="color:var(--gold);font-size:10px;letter-spacing:.16em;text-transform:uppercase">' + v.o + '</div><h3 style="margin-top:8px;font-size:16px">' + v.n + '</h3><p>' + v.t + '</p>';
      vg.appendChild(el);
    });
  }

  var io = new IntersectionObserver(function (en) { en.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }); }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
  function observeAll() { document.querySelectorAll('.reveal:not(.in)').forEach(function (el) { io.observe(el); }); }
  observeAll();
  var observeAllTimer = setTimeout(observeAll, 60);

  var counted = false, band = document.querySelector('.statband');
  var cio = new IntersectionObserver(function (en) {
    en.forEach(function (e) {
      if (e.isIntersecting && !counted) {
        counted = true;
        document.querySelectorAll('[data-count]').forEach(function (el) {
          var target = parseInt(el.getAttribute('data-count'), 10), dur = 1400, t0 = null;
          function tick(ts) {
            if (!t0) t0 = ts;
            var p = Math.min((ts - t0) / dur, 1);
            var val = Math.floor(target * (0.5 - Math.cos(p * Math.PI) / 2));
            el.textContent = val;
            if (p < 1) requestAnimationFrame(tick); else el.textContent = target;
          }
          requestAnimationFrame(tick);
        });
      }
    });
  }, { threshold: 0.4 });
  if (band) cio.observe(band);

  var form = document.getElementById('gemsForm');
  function gemsSubmitHandler(ev) {
    ev.preventDefault();
    var name = form.querySelector('[name=name]'), email = form.querySelector('[name=email]');
    if (!name.value.trim()) { name.focus(); return; }
    if (!email.value.trim() || email.value.indexOf('@') < 0) { email.focus(); return; }
    document.getElementById('formSuccess').style.display = 'block';
    form.querySelector('button[type=submit]').textContent = 'Submitted ✓';
  }
  if (form) { form.addEventListener('submit', gemsSubmitHandler); }

  // ---- Share an Idea ----
  var ideaText = document.getElementById('ideaText');
  var rot = null;
  var ideaFocusHandler = null;
  if (ideaText) {
    var seeds = [
      "What if a nation adopted one Goal as its own — and proved it in a year?",
      "A technology that could carry the Goals further, faster, across borders…",
      "A partnership between two unlikely worlds that the mission needs…",
      "The panel the world hasn't convened yet — but should…",
      "A project for a Goal still waiting for its champion…"
    ];
    var si = 0, base = ideaText.getAttribute('placeholder');
    rot = setInterval(function () {
      if (document.activeElement === ideaText || ideaText.value) { ideaText.setAttribute('placeholder', base); return; }
      ideaText.setAttribute('placeholder', seeds[si % seeds.length]); si++;
    }, 3200);
    ideaFocusHandler = function () { ideaText.setAttribute('placeholder', base); };
    ideaText.addEventListener('focus', ideaFocusHandler);
  }
  var iform = document.getElementById('ideaForm');
  function ideaSubmitHandler(ev) {
    ev.preventDefault();
    var n = iform.querySelector('[name=iname]'), e = iform.querySelector('[name=iemail]'), t = iform.querySelector('[name=idea]');
    if (!n.value.trim()) { n.focus(); return; }
    if (!e.value.trim() || e.value.indexOf('@') < 0) { e.focus(); return; }
    if (!t.value.trim()) { t.focus(); return; }
    document.getElementById('ideaSuccess').style.display = 'block';
    iform.querySelector('button[type=submit]').textContent = 'Idea Shared ✓';
  }
  if (iform) { iform.addEventListener('submit', ideaSubmitHandler); }

  return function cleanup() {
    if (nio) nio.disconnect();
    nationsTimers.forEach(clearTimeout);
    clearTimeout(observeAllTimer);
    io.disconnect();
    cio.disconnect();
    if (form) form.removeEventListener('submit', gemsSubmitHandler);
    if (rot) clearInterval(rot);
    if (ideaText && ideaFocusHandler) ideaText.removeEventListener('focus', ideaFocusHandler);
    if (iform) iform.removeEventListener('submit', ideaSubmitHandler);
  };
}
