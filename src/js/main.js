/* ============================================================
   KAYLA VICTORIA BENNETT — main.js
   Shared across all pages
   ============================================================ */

// HAMBURGER
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => mobileMenu.classList.remove('open'))
  );
}

// COOKIE BANNER
const cookieBanner = document.getElementById('cookieBanner');
const COOKIE_KEY = 'kvb_cookie_consent';
function showCookieBanner() { cookieBanner && cookieBanner.classList.remove('hidden'); }
function hideCookieBanner() { cookieBanner && cookieBanner.classList.add('hidden'); }
if (cookieBanner && !localStorage.getItem(COOKIE_KEY)) { setTimeout(showCookieBanner, 1200); }
document.getElementById('cookieAccept')?.addEventListener('click', () => {
  localStorage.setItem(COOKIE_KEY, 'accepted'); hideCookieBanner();
});
document.getElementById('cookieDecline')?.addEventListener('click', () => {
  localStorage.setItem(COOKIE_KEY, 'declined'); hideCookieBanner();
});
document.getElementById('cookieSettingsBtn')?.addEventListener('click', () => {
  localStorage.removeItem(COOKIE_KEY); showCookieBanner();
});

// WEATHER — Georgetown D.C.
async function loadWeather() {
  const iconEl = document.getElementById('weatherIcon');
  const tempEl = document.getElementById('weatherTemp');
  if (!iconEl || !tempEl) return;
  try {
    const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=38.9076&longitude=-77.0723&current=temperature_2m,weather_code&temperature_unit=fahrenheit&timezone=America%2FNew_York');
    const data = await res.json();
    const temp = Math.round(data.current.temperature_2m);
    const code = data.current.weather_code;
    const icons = { 0:'☀', 1:'🌤', 2:'⛅', 3:'☁', 45:'🌫', 48:'🌫', 51:'🌦', 61:'🌧', 71:'🌨', 80:'🌦', 95:'⛈' };
    const icon = icons[code] || icons[Math.floor(code/10)*10] || '◈';
    iconEl.textContent = icon;
    tempEl.textContent = `Georgetown ${temp}°F`;
  } catch(e) {}
}
loadWeather();

// TICKER — items fijos del universo (RSS deshabilitado)
function loadTicker() {
  const track = document.getElementById('tickerTrack');
  if (!track) return;
  const items = [
    'TikTok ban — the infrastructure argument Kayla has been making for months',
    'DeepSeek and the illusion of open source',
    'AI policy debate intensifies in Washington',
    'Syntcoin $SYNT — live price on kaylavbennett.com',
    'Linine weighs in on AI regulation',
    'Georgetown, D.C. — Kayla Victoria Bennett',
    'American technological sovereignty — why it matters',
    'The Circle expands — new characters coming',
  ];
  const doubled = [...items, ...items]
    .map(text => `<span class="ticker-item">${text}</span>`)
    .join('');
  track.innerHTML = doubled;
}
loadTicker();

// SYNTCOIN — sidebar widget (post pages)
async function loadSyntcoinSidebar() {
  const priceEl = document.getElementById('sidebarSyntPrice');
  const changeEl = document.getElementById('sidebarSyntChange');
  if (!priceEl || !changeEl) return;
  try {
    const res = await fetch('https://api.dexscreener.com/latest/dex/search?q=SYNT');
    const data = await res.json();
    if (data.pairs && data.pairs.length > 0) {
      const pair = data.pairs[0];
      const price = parseFloat(pair.priceUsd);
      const change = parseFloat(pair.priceChange?.h24 || 0);
      priceEl.textContent = price < 0.01 ? `$${price.toFixed(6)}` : `$${price.toFixed(4)}`;
      const sign = change >= 0 ? '+' : '';
      changeEl.textContent = `${sign}${change.toFixed(2)}% (24h)`;
      changeEl.className = `sidebar-synt-change ${change >= 0 ? 'up' : 'down'}`;
    } else {
      priceEl.textContent = '$SYNT';
      changeEl.textContent = 'View on DexScreener';
    }
  } catch(e) {
    const p = document.getElementById('sidebarSyntPrice');
    const c = document.getElementById('sidebarSyntChange');
    if (p) p.textContent = '$SYNT';
    if (c) c.textContent = 'View on DexScreener';
  }
}
loadSyntcoinSidebar();

// SIDEBAR NEWSLETTER
const sidebarForm = document.getElementById('sidebarNewsletterForm');
if (sidebarForm) {
  sidebarForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    btn.textContent = 'Subscribed ✓';
    btn.style.background = '#2C6E49';
    this.querySelector('input').value = '';
    setTimeout(() => { btn.textContent = 'Subscribe'; btn.style.background = ''; }, 3000);
  });
}

// FADE IN OBSERVER
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
