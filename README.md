<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Intelligent Logistics — Logistics analytics that put your shipping data to work</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=IBM+Plex+Mono:wght@400;500&family=Geist:wght@400;500;600;700&family=Fraunces:ital,wght@0,400;0,600;1,400&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  :root {
    /* palette vars — mutated by Tweaks */
    --bg: #F7F5F0;
    --fg: #0B1220;
    --fg-dim: #4A5264;
    --line: #E4E0D7;
    --card: #FFFFFF;
    --elev: #FDFCF8;
    --accent: oklch(0.68 0.16 148);
    --accent-ink: #0B1220;
    --warn: oklch(0.78 0.15 75);
    --crit: oklch(0.62 0.18 25);
    --shadow: 0 1px 0 rgba(11,18,32,.04), 0 18px 48px -24px rgba(11,18,32,.15);

    --font-display: 'Instrument Serif', Georgia, serif;
    --font-ui: 'Inter', -apple-system, system-ui, sans-serif;
    --font-mono: 'IBM Plex Mono', ui-monospace, monospace;

    --r-sm: 6px; --r-md: 10px; --r-lg: 18px; --r-xl: 24px;

    --pad-section: 120px;
    --pad-gutter: 32px;
    --pad-card: 28px;
    --gap: 24px;

    --h-hero: clamp(54px, 8.2vw, 128px);
    --h-section: clamp(36px, 4.6vw, 68px);
    --h-card: 22px;
    --body: 17px;
    --small: 14px;
  }
  [data-density="tight"] {
    --pad-section: 84px;
    --pad-card: 20px;
    --gap: 16px;
  }
  [data-density="airy"] {
    --pad-section: 160px;
    --pad-card: 36px;
    --gap: 32px;
  }
  [data-theme="dark"] {
    --bg: #0B0E13;
    --fg: #E6EAF2;
    --fg-dim: #7C8599;
    --line: #1A1F2B;
    --card: #10141C;
    --elev: #151A24;
    --accent-ink: #0B0E13;
    --shadow: 0 1px 0 rgba(0,0,0,.4), 0 24px 60px -20px rgba(0,0,0,.7);
  }

  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; background: var(--bg); color: var(--fg); font-family: var(--font-ui); font-size: var(--body); line-height: 1.55; -webkit-font-smoothing: antialiased; transition: background .35s ease, color .35s ease; }
  body { overflow-x: hidden; }
  a { color: inherit; text-decoration: none; }
  button { font: inherit; color: inherit; background: none; border: 0; cursor: pointer; }

  .container { max-width: 1360px; margin: 0 auto; padding: 0 var(--pad-gutter); }

  /* ===== NAV ===== */
  .nav {
    position: sticky; top: 0; z-index: 50;
    backdrop-filter: blur(14px);
    background: color-mix(in oklab, var(--bg) 78%, transparent);
    border-bottom: 1px solid transparent;
    transition: border-color .3s ease, background .3s ease;
  }
  .nav.scrolled { border-color: var(--line); }
  .nav-inner { display: flex; align-items: center; justify-content: space-between; height: 68px; }
  .logo { display: flex; align-items: center; gap: 10px; font-weight: 600; letter-spacing: -0.01em; }
  .logo-mark {
    width: 28px; height: 28px;
    display: inline-flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .logo-mark img { width: 100%; height: 100%; object-fit: contain; display: block; filter: brightness(0) invert(1); opacity: .95; }
  .logo-text { font-size: 15px; letter-spacing: -0.01em; }
  .logo-text em { font-family: var(--font-display); font-style: italic; font-weight: 400; }
  .nav-links { display: flex; gap: 28px; font-size: 14px; color: var(--fg-dim); }
  .nav-links a { position: relative; transition: color .2s; }
  .nav-links a:hover { color: var(--fg); }
  .nav-links a::after {
    content: ""; position: absolute; left: 0; bottom: -4px; width: 0; height: 1px;
    background: var(--fg); transition: width .25s ease;
  }
  .nav-links a:hover::after { width: 100%; }
  .nav-cta { display: flex; gap: 10px; align-items: center; }
  .btn {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 10px 18px; border-radius: 999px; font-size: 14px; font-weight: 500;
    border: 1px solid var(--line); background: transparent; color: var(--fg);
    transition: all .2s ease;
  }
  .btn:hover { background: var(--fg); color: var(--bg); border-color: var(--fg); }
  .btn-primary {
    background: var(--fg); color: var(--bg); border-color: var(--fg);
  }
  .btn-primary:hover { background: var(--accent); color: var(--accent-ink); border-color: var(--accent); }
  .btn-accent {
    background: var(--accent); color: var(--accent-ink); border-color: var(--accent);
  }
  .btn-accent:hover { background: var(--fg); color: var(--bg); border-color: var(--fg); }
  .btn svg { width: 14px; height: 14px; }

  .mobile-toggle { display: none; width: 40px; height: 40px; border-radius: 8px; align-items: center; justify-content: center; }
  .mobile-toggle svg { width: 20px; height: 20px; }

  /* ===== HERO ===== */
  .hero { padding: 60px 0 80px; position: relative; }
  .hero-inner { display: grid; grid-template-columns: 1.1fr 1fr; gap: 64px; align-items: center; }
  [data-hero="stacked"] .hero-inner { grid-template-columns: 1fr; max-width: 1100px; margin: 0 auto; text-align: center; }
  [data-hero="stacked"] .hero-meta, [data-hero="stacked"] .hero-cta { justify-content: center; }
  [data-hero="stacked"] .hero-visual { margin-top: 40px; display: flex; flex-direction: column; gap: 96px; }
  .shot-hero-alt { transform: none !important; margin-top: 24px; }
  .hero-visual:hover .shot-hero-alt { transform: none !important; }
  [data-hero="stacked"] .shot-hero-alt { transform: none !important; }
  [data-hero="split"] .hero-inner { grid-template-columns: 1fr 1fr; }

  .eyebrow {
    display: inline-flex; align-items: center; gap: 10px;
    font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.08em;
    text-transform: uppercase; color: var(--fg-dim);
    padding: 6px 12px; border: 1px solid var(--line); border-radius: 999px;
    background: var(--card);
  }
  .eyebrow::before {
    content: ""; width: 6px; height: 6px; border-radius: 50%;
    background: var(--accent); box-shadow: 0 0 0 4px color-mix(in oklab, var(--accent) 25%, transparent);
    animation: pulse 2s ease-in-out infinite;
  }
  @keyframes pulse { 50% { box-shadow: 0 0 0 8px color-mix(in oklab, var(--accent) 0%, transparent); } }

  h1.hero-title {
    font-family: var(--font-display);
    font-size: var(--h-hero); line-height: 0.96; letter-spacing: -0.025em;
    font-weight: 400; margin: 28px 0 24px;
    text-wrap: balance;
  }
  h1.hero-title em { font-style: italic; color: color-mix(in oklab, var(--fg) 75%, var(--accent)); }
  h1.hero-title .accent-u {
    background: linear-gradient(to top, color-mix(in oklab, var(--accent) 60%, transparent) 25%, transparent 25%);
    padding: 0 2px;
  }
  .hero-lede { font-size: 19px; color: var(--fg-dim); max-width: 540px; text-wrap: pretty; margin-bottom: 36px; }
  .hero-cta { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 40px; }
  .hero-meta { display: flex; gap: 28px; align-items: center; color: var(--fg-dim); font-size: 13px; flex-wrap: wrap; }
  .hero-meta-item { display: flex; align-items: center; gap: 8px; }
  .hero-meta-item .dot { width: 4px; height: 4px; border-radius: 50%; background: var(--accent); }

  /* ===== DASHBOARD MOCK ===== */
  .hero-visual { position: relative; }
  .dash {
    background: var(--card); border: 1px solid var(--line); border-radius: var(--r-lg);
    padding: 18px; box-shadow: var(--shadow);
    transform: perspective(1800px) rotateX(2deg) rotateY(-6deg);
    transition: transform .6s cubic-bezier(.2,.7,.2,1);
  }
  .hero-visual:hover .dash { transform: perspective(1800px) rotateX(0deg) rotateY(-2deg); }
  [data-hero="stacked"] .dash { transform: none; }
  .dash-bar { display: flex; align-items: center; justify-content: space-between; padding-bottom: 12px; border-bottom: 1px solid var(--line); margin-bottom: 16px; }
  .dash-bar-tabs { display: flex; gap: 2px; background: var(--elev); border-radius: 8px; padding: 3px; font-size: 12px; font-weight: 500; }
  .dash-bar-tabs button { padding: 6px 12px; border-radius: 6px; color: var(--fg-dim); }
  .dash-bar-tabs button.on { background: var(--card); color: var(--fg); box-shadow: 0 1px 2px rgba(0,0,0,.04); }
  .dash-bar-meta { display: flex; align-items: center; gap: 10px; font-family: var(--font-mono); font-size: 11px; color: var(--fg-dim); }
  .live-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); animation: pulse 1.8s ease-in-out infinite; }

  .dash-grid { display: grid; grid-template-columns: 1.3fr 1fr; gap: 14px; }
  .dash-card { background: var(--elev); border: 1px solid var(--line); border-radius: var(--r-md); padding: 16px; }
  .dash-card h4 { margin: 0 0 4px; font-size: 12px; font-weight: 500; color: var(--fg-dim); font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.05em; }
  .dash-kpi { display: flex; align-items: baseline; gap: 8px; }
  .dash-kpi .num { font-size: 28px; font-weight: 600; letter-spacing: -0.02em; font-variant-numeric: tabular-nums; }
  .dash-kpi .delta { font-size: 12px; font-family: var(--font-mono); color: var(--accent); display: inline-flex; align-items: center; gap: 2px; }
  .dash-kpi .delta.down { color: var(--crit); }

  /* sparkline chart */
  .chart { height: 76px; margin-top: 10px; position: relative; }
  .chart svg { width: 100%; height: 100%; }
  .chart .area { fill: color-mix(in oklab, var(--accent) 18%, transparent); }
  .chart .line { fill: none; stroke: var(--accent); stroke-width: 1.8; }

  /* bars */
  .bars { display: flex; align-items: flex-end; gap: 6px; height: 90px; margin-top: 8px; }
  .bars .b {
    flex: 1; background: linear-gradient(to top, var(--fg), color-mix(in oklab, var(--fg) 60%, transparent));
    border-radius: 3px 3px 0 0; min-height: 4px; transition: height .6s cubic-bezier(.2,.7,.2,1);
    position: relative;
  }
  .bars .b.hi { background: linear-gradient(to top, var(--accent), color-mix(in oklab, var(--accent) 50%, var(--fg))); }
  .bars-x { display: flex; gap: 6px; margin-top: 6px; font-family: var(--font-mono); font-size: 9px; color: var(--fg-dim); }
  .bars-x span { flex: 1; text-align: center; }

  .dash-row { margin-top: 14px; background: var(--elev); border: 1px solid var(--line); border-radius: var(--r-md); overflow: hidden; }
  .dash-row-head { padding: 10px 14px; display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: 11px; color: var(--fg-dim); text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid var(--line); }
  .shipment { display: grid; grid-template-columns: 80px 1fr 80px 90px; padding: 10px 14px; font-size: 12px; align-items: center; border-bottom: 1px solid var(--line); font-variant-numeric: tabular-nums; }
  .shipment:last-child { border: 0; }
  .shipment .code { font-family: var(--font-mono); color: var(--fg-dim); font-size: 11px; }
  .pill { display: inline-flex; align-items: center; gap: 5px; padding: 2px 8px; border-radius: 999px; font-size: 10.5px; font-weight: 500; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.04em; }
  .pill.ok { background: color-mix(in oklab, var(--accent) 18%, transparent); color: color-mix(in oklab, var(--accent) 90%, var(--fg)); }
  .pill.warn { background: color-mix(in oklab, var(--warn) 20%, transparent); color: color-mix(in oklab, var(--warn) 85%, var(--fg)); }
  .pill.crit { background: color-mix(in oklab, var(--crit) 18%, transparent); color: color-mix(in oklab, var(--crit) 90%, var(--fg)); }

  /* ===== SCREENSHOT SLOTS ===== */
  .shot {
    position: relative; border: 1px solid var(--line); border-radius: var(--r-lg);
    background: var(--card); overflow: hidden; cursor: pointer;
    transition: border-color .25s ease, transform .5s cubic-bezier(.2,.7,.2,1);
  }
  .shot-hero {
    transform: none;
    box-shadow: var(--shadow);
  }
  .shot-hero:not(.filled) { aspect-ratio: 16/10; }
  .shot-hero.filled { aspect-ratio: auto; }
  .shot-hero.filled img { height: auto; width: 100%; display: block; }
  .shot-uc:not(.filled) { aspect-ratio: 16/9; }
  .shot-uc.filled { aspect-ratio: auto; }
  .shot-uc.filled img { height: auto; width: 100%; display: block; }
  .hero-visual:hover .shot-hero { transform: none; }
  [data-hero="stacked"] .shot-hero { transform: none; }
  .shot img { display: none; width: 100%; height: 100%; object-fit: contain; object-position: center; background: var(--elev); }
  .shot.filled img { display: block; }
  .shot.filled .shot-inner { display: none; }
  .shot-inner { position: absolute; inset: 0; display: flex; flex-direction: column; }
  .shot-frame {
    display: flex; align-items: center; gap: 12px; padding: 14px 18px;
    border-bottom: 1px solid var(--line); background: color-mix(in oklab, var(--elev) 90%, transparent);
  }
  .shot-dots { display: flex; gap: 6px; }
  .shot-dots span { width: 9px; height: 9px; border-radius: 50%; background: var(--line); }
  .shot-tab { font-family: var(--font-mono); font-size: 11px; color: var(--fg-dim); letter-spacing: 0.04em; }
  .shot-cta {
    flex: 1; display: grid; place-items: center; align-content: center; gap: 6px; text-align: center;
    color: var(--fg-dim); padding: 24px;
    background: repeating-linear-gradient(45deg, transparent 0 12px, color-mix(in oklab, var(--fg-dim) 6%, transparent) 12px 13px);
  }
  .shot-cta svg { color: var(--accent); }
  .shot-label { font-family: var(--font-ui); font-weight: 500; font-size: 15px; color: var(--fg); margin-top: 6px; }
  .shot-sub { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.05em; }
  .shot:hover { border-color: var(--accent); }
  .shot-replace {
    position: absolute; top: 10px; right: 10px; padding: 6px 10px;
    background: color-mix(in oklab, var(--card) 90%, transparent); border: 1px solid var(--line);
    border-radius: 6px; font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase;
    color: var(--fg); opacity: 0; transition: opacity .2s; display: none;
  }
  .shot.filled .shot-replace { display: block; }
  .shot.filled:hover .shot-replace { opacity: 1; }

  /* ===== USE CASE MODAL ===== */
  .modal-root { position: fixed; inset: 0; z-index: 200; display: none; }
  .modal-root.on { display: block; }
  .modal-backdrop { position: absolute; inset: 0; background: color-mix(in oklab, #000 70%, transparent); backdrop-filter: blur(6px); animation: fadeIn .25s ease; }
  @keyframes fadeIn { from { opacity: 0; } }
  .modal {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    width: min(860px, calc(100vw - 32px)); max-height: 90vh; overflow: auto;
    background: var(--bg); border: 1px solid var(--line); border-radius: 16px;
    box-shadow: 0 40px 80px -20px rgba(0,0,0,.6);
    animation: popIn .3s cubic-bezier(.2,.7,.2,1);
  }
  @keyframes popIn { from { opacity: 0; transform: translate(-50%, -48%) scale(.97); } }
  .modal-head { padding: 28px 32px 20px; border-bottom: 1px solid var(--line); display: flex; justify-content: space-between; align-items: flex-start; gap: 20px; }
  .modal-head > div:first-child { flex: 1; min-width: 0; }
  .modal-crumbs { font-family: var(--font-mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--fg-dim); margin-bottom: 12px; }
  .modal-head h3 { font-family: var(--font-display); font-size: clamp(32px, 4vw, 48px); line-height: 1.1; letter-spacing: -0.02em; font-weight: 400; margin: 0 0 14px; }
  .modal-head h3 em { font-style: italic; color: color-mix(in oklab, var(--fg) 70%, var(--accent)); }
  .modal-head .tag { color: var(--fg-dim); font-size: 16px; margin: 0; }
  .modal-close { width: 36px; height: 36px; border-radius: 8px; border: 1px solid var(--line); display: grid; place-items: center; flex-shrink: 0; color: var(--fg); background: var(--card); }
  .modal-close:hover { background: var(--fg); color: var(--bg); }
  .modal-body { padding: 28px 32px 20px; display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
  .modal-body h4 { font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--fg-dim); margin: 0 0 14px; font-weight: 500; }
  .modal-body ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
  .modal-body li { position: relative; padding-left: 18px; font-size: 15px; line-height: 1.45; text-wrap: pretty; }
  .modal-body li::before { content: ""; position: absolute; left: 0; top: 9px; width: 10px; height: 2px; background: var(--accent); }
  .modal-note { grid-column: 1 / -1; padding: 14px 16px; border-radius: 10px; background: color-mix(in oklab, var(--accent) 8%, transparent); border: 1px solid color-mix(in oklab, var(--accent) 20%, transparent); font-size: 13px; color: var(--fg-dim); }
  .modal-screenshot { margin: 8px 32px 24px; }
  .modal-foot { padding: 20px 32px 28px; border-top: 1px solid var(--line); display: flex; gap: 12px; flex-wrap: wrap; align-items: center; justify-content: space-between; }
  .modal-foot .hint { font-family: var(--font-mono); font-size: 11px; color: var(--fg-dim); text-transform: uppercase; letter-spacing: 0.05em; }
  @media (max-width: 640px) { .modal-body { grid-template-columns: 1fr; } }

  /* floating cards */
  .float {
    position: absolute; background: var(--card); border: 1px solid var(--line);
    border-radius: var(--r-md); padding: 10px 14px; box-shadow: var(--shadow);
    font-size: 13px; display: flex; align-items: center; gap: 10px;
    animation: float 6s ease-in-out infinite;
  }
  @keyframes float { 50% { transform: translateY(-6px); } }
  .float-1 { top: 10%; left: -30px; animation-delay: -2s; }
  .float-2 { bottom: 10%; right: -20px; animation-delay: -4s; }
  .float .icon { width: 28px; height: 28px; border-radius: 7px; background: color-mix(in oklab, var(--accent) 20%, transparent); display: grid; place-items: center; }
  .float .icon svg { width: 14px; height: 14px; color: color-mix(in oklab, var(--accent) 80%, var(--fg)); }
  .float .label { font-size: 11px; color: var(--fg-dim); font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.04em; }
  .float .val { font-weight: 600; font-variant-numeric: tabular-nums; }

  /* ===== LOGO WALL ===== */
  .logos { padding: 60px 0 40px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); overflow: hidden; }
  .logos-label { text-align: center; font-family: var(--font-mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--fg-dim); margin-bottom: 30px; }
  .logos-track {
    display: flex; gap: 70px; animation: scroll 40s linear infinite;
    width: max-content;
  }
  @keyframes scroll { to { transform: translateX(-50%); } }
  .logo-item { font-family: var(--font-display); font-size: 28px; font-style: italic; color: var(--fg-dim); opacity: 0.7; white-space: nowrap; font-weight: 400; letter-spacing: -0.02em; transition: all .2s; flex-shrink: 0; }
  .logos:hover .logos-track { animation-play-state: paused; }
  .logo-item:hover { opacity: 1; color: var(--fg); }

  /* ===== SECTIONS ===== */
  section { padding: var(--pad-section) 0; position: relative; }
  .section-head { max-width: 820px; margin-bottom: 64px; }
  .section-head.center { margin-left: auto; margin-right: auto; text-align: center; }
  .section-label {
    display: inline-flex; align-items: center; gap: 8px;
    font-family: var(--font-mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--fg-dim);
    margin-bottom: 18px;
  }
  .section-label::before { content: ""; width: 24px; height: 1px; background: var(--fg-dim); }
  h2 {
    font-family: var(--font-display); font-size: var(--h-section); line-height: 1; letter-spacing: -0.02em;
    font-weight: 400; margin: 0 0 20px; text-wrap: balance;
  }
  h2 em { font-style: italic; color: color-mix(in oklab, var(--fg) 70%, var(--accent)); }
  .section-lede { font-size: 19px; color: var(--fg-dim); max-width: 620px; text-wrap: pretty; }
  .section-head.center .section-lede { margin: 0 auto; }

  /* ===== ABOUT ===== */
  .about { background: var(--elev); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
  .about-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; background: var(--line); border: 1px solid var(--line); border-radius: var(--r-lg); overflow: hidden; }
  .stat { background: var(--card); padding: 32px; }
  .stat .n { font-family: var(--font-display); font-size: 58px; line-height: 1; letter-spacing: -0.02em; font-weight: 400; font-variant-numeric: tabular-nums; }
  .stat .n em { font-style: italic; color: color-mix(in oklab, var(--fg) 70%, var(--accent)); }
  .stat .n .unit { font-family: var(--font-ui); font-size: 22px; font-weight: 500; color: var(--fg-dim); margin-left: 4px; }
  .stat .lbl { font-size: 13px; color: var(--fg-dim); margin-top: 10px; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.04em; }

  /* ===== FEATURES ===== */
  .features-grid {
    display: grid; grid-template-columns: repeat(6, 1fr); gap: var(--gap);
  }
  .feature {
    border: 1px solid var(--line); border-radius: var(--r-lg); background: var(--card);
    padding: var(--pad-card); transition: all .3s ease;
    position: relative; overflow: hidden;
  }
  .feature:hover { transform: translateY(-2px); box-shadow: var(--shadow); border-color: color-mix(in oklab, var(--accent) 40%, var(--line)); }
  .feature-lg { grid-column: span 4; min-height: 360px; }
  .feature-sm { grid-column: span 2; }
  .feature-md { grid-column: span 3; }
  .feature-num { font-family: var(--font-mono); font-size: 11px; color: var(--fg-dim); letter-spacing: 0.05em; }
  .feature h3 { font-family: var(--font-display); font-weight: 400; font-size: 30px; line-height: 1.05; letter-spacing: -0.015em; margin: 16px 0 10px; }
  .feature h3 em { font-style: italic; color: color-mix(in oklab, var(--fg) 70%, var(--accent)); }
  .feature p { color: var(--fg-dim); margin: 0 0 20px; font-size: 15px; }
  .feature-viz { margin-top: 20px; }

  /* spend viz */
  .spend-viz { display: flex; flex-direction: column; gap: 8px; }
  .spend-row { display: grid; grid-template-columns: 80px 1fr 60px; align-items: center; gap: 12px; font-size: 12px; font-family: var(--font-mono); }
  .spend-row .lbl { color: var(--fg-dim); }
  .spend-bar { height: 6px; background: var(--elev); border-radius: 3px; overflow: hidden; }
  .spend-bar .fill { height: 100%; background: var(--fg); border-radius: 3px; transition: width 1s cubic-bezier(.2,.7,.2,1); }
  .spend-row.hi .spend-bar .fill { background: var(--accent); }
  .spend-row .val { text-align: right; font-variant-numeric: tabular-nums; }

  /* map viz */
  .map-viz { position: relative; height: 180px; background: var(--elev); border-radius: var(--r-md); overflow: hidden; border: 1px solid var(--line); }
  .map-dot { position: absolute; width: 8px; height: 8px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 0 0 color-mix(in oklab, var(--accent) 40%, transparent); animation: ping 2.2s ease-out infinite; }
  @keyframes ping { 0% { box-shadow: 0 0 0 0 color-mix(in oklab, var(--accent) 60%, transparent); } 100% { box-shadow: 0 0 0 16px transparent; } }

  /* ===== USE CASES ===== */
  .uc { background: var(--bg); border-top: 1px solid var(--line); }
  .uc-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border: 1px solid var(--line); border-radius: var(--r-lg); overflow: hidden; background: var(--line); }
  .uc-card {
    background: var(--card); padding: 28px 24px; min-height: 220px;
    display: flex; flex-direction: column; justify-content: space-between;
    gap: 18px; cursor: pointer; transition: background .25s ease, color .25s ease;
    position: relative;
  }
  .uc-card:hover { background: var(--fg); color: var(--bg); }
  .uc-card:hover .uc-num, .uc-card:hover .uc-desc, .uc-card:hover .uc-arrow { color: color-mix(in oklab, var(--bg) 70%, transparent); }
  .uc-card:hover .uc-arrow { color: var(--accent); }
  .uc-num { font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.05em; color: var(--fg-dim); }
  .uc-title { font-family: var(--font-display); font-weight: 400; font-size: 24px; line-height: 1.2; letter-spacing: -0.015em; margin: 6px 0 12px; }
  .uc-title em { font-style: italic; color: color-mix(in oklab, var(--fg) 70%, var(--accent)); }
  .uc-card:hover .uc-title em { color: var(--accent); }
  .uc-desc { font-size: 14px; color: var(--fg-dim); margin: 0; text-wrap: pretty; line-height: 1.45; }
  .uc-arrow { display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--fg-dim); transition: transform .25s ease; }
  .uc-card:hover .uc-arrow { transform: translateX(4px); }
  @media (max-width: 960px) { .uc-grid { grid-template-columns: 1fr 1fr; } }
  @media (max-width: 640px) { .uc-grid { grid-template-columns: 1fr; } }

  /* ===== CUSTOMER STORIES ===== */
  .cs-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: var(--gap); }
  .cs-card {
    grid-column: span 2; background: var(--card); border: 1px solid var(--line); border-radius: var(--r-lg);
    padding: 32px; display: flex; flex-direction: column; gap: 20px; min-height: 340px;
    transition: all .3s ease;
  }
  .cs-card:hover { border-color: color-mix(in oklab, var(--accent) 40%, var(--line)); transform: translateY(-2px); box-shadow: var(--shadow); }
  .cs-card.cs-lg { grid-column: span 3; }
  .cs-head { display: flex; flex-direction: column; gap: 6px; }
  .cs-co { font-family: var(--font-display); font-size: 22px; font-style: italic; letter-spacing: -0.01em; }
  .cs-tag { font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--fg-dim); }
  .cs-quote {
    font-family: var(--font-display); font-weight: 400; font-size: 22px; line-height: 1.28;
    letter-spacing: -0.005em; margin: 0; text-wrap: pretty; flex: 1;
  }
  .cs-card.cs-lg .cs-quote { font-size: 30px; line-height: 1.2; }
  .cs-foot { display: flex; flex-direction: column; gap: 16px; padding-top: 20px; border-top: 1px solid var(--line); }
  .cs-author { display: flex; align-items: center; gap: 12px; }
  .cs-author .name { font-size: 14px; font-weight: 500; }
  .cs-author .role { font-size: 12px; color: var(--fg-dim); font-family: var(--font-mono); }
  .cs-source { display: flex; align-items: center; gap: 12px; }
  .cs-source .name { font-size: 14px; font-weight: 500; letter-spacing: -0.005em; }
  .cs-source .role { font-size: 12px; color: var(--fg-dim); font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.04em; margin-top: 2px; }
  .src-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--accent); flex-shrink: 0; box-shadow: 0 0 0 4px color-mix(in oklab, var(--accent) 18%, transparent); }
  .cs-outcomes { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
  .cs-outcomes li { position: relative; padding-left: 18px; font-size: 13px; color: var(--fg-dim); }
  .cs-outcomes li::before {
    content: ""; position: absolute; left: 0; top: 7px; width: 10px; height: 2px; background: var(--accent);
  }
  @media (max-width: 960px) {
    .cs-grid { grid-template-columns: 1fr; }
    .cs-card, .cs-card.cs-lg { grid-column: span 1; min-height: 0; }
  }

  /* ===== RESOURCES ===== */
  .resources { background: var(--bg); border-top: 1px solid var(--line); }
  .res-title { text-wrap: balance; }
  .res-title em { font-style: italic; color: color-mix(in oklab, var(--fg) 70%, var(--accent)); }
  .res-grid {
    display: grid; grid-template-columns: 1.05fr 1.2fr; gap: 80px;
    margin-top: 64px; align-items: start;
  }
  .res-eyebrow {
    display: inline-block; font-family: var(--font-mono); font-size: 11px;
    text-transform: uppercase; letter-spacing: 0.08em; color: var(--fg-dim);
    padding: 6px 12px; border: 1px solid var(--line); border-radius: 999px;
    margin-bottom: 28px;
  }
  .res-h3 {
    font-family: var(--font-display); font-weight: 400;
    font-size: clamp(32px, 4.2vw, 52px); line-height: 1.1;
    letter-spacing: -0.02em; margin: 0 0 24px; text-wrap: balance;
  }
  .res-body {
    font-size: 17px; line-height: 1.55; color: var(--fg-dim);
    max-width: 46ch; text-wrap: pretty;
  }
  .res-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 32px; }
  .res-cards {
    display: grid; grid-template-columns: 1fr 1fr; gap: 16px;
  }
  .res-card {
    background: var(--card); border: 1px solid var(--line);
    padding: 28px 24px; min-height: 200px;
    display: flex; flex-direction: column; gap: 12px;
    transition: border-color .25s ease, background .25s ease;
  }
  .res-card:hover { border-color: var(--accent); background: color-mix(in oklab, var(--card) 88%, var(--accent) 12%); }
  .res-num {
    font-family: var(--font-mono); font-size: 11px;
    letter-spacing: 0.05em; color: var(--fg-dim);
  }
  .res-card h4 {
    font-family: var(--font-display); font-weight: 400;
    font-size: 22px; line-height: 1.2; letter-spacing: -0.015em;
    margin: 4px 0 0;
  }
  .res-card p {
    font-size: 14px; line-height: 1.5; color: var(--fg-dim);
    margin: 0; text-wrap: pretty;
  }
  .res-why {
    margin-top: 80px; padding: 40px 48px;
    border: 1px solid var(--line); background: var(--elev);
    display: grid; grid-template-columns: 220px 1fr; gap: 48px;
    align-items: center;
  }
  .res-why-label {
    font-family: var(--font-mono); font-size: 11px;
    text-transform: uppercase; letter-spacing: 0.08em; color: var(--fg-dim);
  }
  .res-outcomes {
    list-style: none; padding: 0; margin: 0;
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px 32px;
  }
  .res-outcomes li {
    position: relative; padding-left: 20px;
    font-size: 15px; color: var(--fg); line-height: 1.4;
  }
  .res-outcomes li::before {
    content: ""; position: absolute; left: 0; top: 9px;
    width: 10px; height: 2px; background: var(--accent);
  }
  @media (max-width: 960px) {
    .res-grid { grid-template-columns: 1fr; gap: 48px; }
    .res-cards { grid-template-columns: 1fr; }
    .res-why { grid-template-columns: 1fr; gap: 24px; padding: 32px; }
    .res-outcomes { grid-template-columns: 1fr; }
  }

  /* ===== TESTIMONIALS ===== */
  .testimonials { background: var(--elev); }
  .tm-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: var(--gap); }
  .tm-card {
    background: var(--card); border: 1px solid var(--line); border-radius: var(--r-lg);
    padding: 36px; display: flex; flex-direction: column; justify-content: space-between;
    min-height: 340px;
  }
  .tm-card .quote { font-family: var(--font-display); font-weight: 400; font-size: 22px; line-height: 1.25; letter-spacing: -0.005em; text-wrap: pretty; }
  .tm-card.big .quote { font-size: 40px; line-height: 1.15; }
  .tm-card#tmCard3 .quote { font-size: 28px; line-height: 1.2; }
  .tm-card .quote em { font-style: italic; color: color-mix(in oklab, var(--fg) 70%, var(--accent)); }
  .tm-author { display: flex; align-items: center; gap: 12px; margin-top: 28px; padding-top: 24px; border-top: 1px solid var(--line); }
  .avatar { width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, var(--accent), var(--fg)); color: var(--bg); display: grid; place-items: center; font-weight: 600; font-size: 14px; flex-shrink: 0; }
  .tm-author .name { font-size: 14px; font-weight: 500; }
  .tm-author .role { font-size: 12px; color: var(--fg-dim); font-family: var(--font-mono); }
  .tm-stat { background: var(--fg); color: var(--bg); border-radius: var(--r-lg); padding: 36px; display: flex; flex-direction: column; justify-content: space-between; min-height: 340px; }
  [data-theme="dark"] .tm-stat { background: var(--accent); color: var(--accent-ink); }
  .tm-stat .n { font-family: var(--font-display); font-size: 88px; line-height: 0.9; letter-spacing: -0.03em; font-weight: 400; }
  .tm-stat .n em { font-style: italic; }
  .tm-stat .desc { font-size: 15px; opacity: 0.75; max-width: 240px; text-wrap: pretty; }

  /* ===== CTA ===== */
  .cta-section { position: relative; }
  .cta-box {
    background: var(--fg); color: var(--bg); border-radius: var(--r-xl);
    padding: 96px 64px; display: grid; grid-template-columns: 1.2fr 1fr; gap: 60px; align-items: end;
    position: relative; overflow: hidden;
  }
  .cta-box::before {
    content: ""; position: absolute; inset: 0;
    background:
      radial-gradient(ellipse 600px 300px at 100% 100%, color-mix(in oklab, var(--accent) 35%, transparent) 0%, transparent 70%),
      radial-gradient(ellipse 400px 250px at 0% 0%, color-mix(in oklab, var(--accent) 15%, transparent) 0%, transparent 70%);
    pointer-events: none;
  }
  .cta-box > * { position: relative; z-index: 2; }
  .cta-box h2 { color: var(--bg); font-size: clamp(40px, 5vw, 76px); line-height: 0.98; letter-spacing: -0.025em; }
  .cta-box h2 em { color: color-mix(in oklab, var(--accent) 85%, var(--bg)); }
  .cta-form { display: flex; flex-direction: column; gap: 16px; }
  .field { display: flex; flex-direction: column; gap: 6px; }
  .field label { font-family: var(--font-mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.06em; opacity: 0.6; }
  .field input, .field select {
    background: color-mix(in oklab, var(--bg) 8%, transparent); border: 1px solid color-mix(in oklab, var(--bg) 20%, transparent);
    border-radius: 10px; color: var(--bg); padding: 12px 14px; font: inherit; outline: none;
    transition: border-color .2s, background .2s;
  }
  .field input::placeholder { color: color-mix(in oklab, var(--bg) 40%, transparent); }
  .field input:focus, .field select:focus { border-color: var(--accent); background: color-mix(in oklab, var(--bg) 12%, transparent); }
  .field.err input { border-color: var(--crit); }
  .field .msg { font-size: 12px; font-family: var(--font-mono); color: var(--crit); min-height: 14px; }
  .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .form-sent {
    display: flex; flex-direction: column; align-items: flex-start; gap: 12px;
    padding: 28px; border-radius: 12px;
    background: color-mix(in oklab, var(--accent) 20%, transparent);
    border: 1px solid color-mix(in oklab, var(--accent) 45%, transparent);
  }
  .form-sent h4 { margin: 0; font-family: var(--font-display); font-size: 28px; font-weight: 400; letter-spacing: -0.01em; }
  .form-sent p { margin: 0; opacity: 0.85; font-size: 14px; }

  /* ===== FOOTER ===== */
  footer { padding: 64px 0 40px; border-top: 1px solid var(--line); }
  .foot { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; }
  .foot-brand { max-width: 280px; }
  .foot-brand p { color: var(--fg-dim); font-size: 14px; margin: 16px 0; text-wrap: pretty; }
  .foot-col h5 { font-family: var(--font-mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--fg-dim); margin: 0 0 16px; font-weight: 500; }
  .foot-col ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
  .foot-col a { font-size: 14px; color: var(--fg); opacity: 0.75; transition: opacity .2s; }
  .foot-col a:hover { opacity: 1; }
  .foot-bottom { margin-top: 60px; padding-top: 24px; border-top: 1px solid var(--line); display: flex; justify-content: space-between; color: var(--fg-dim); font-size: 13px; font-family: var(--font-mono); }

  /* ===== TWEAKS PANEL ===== */
  .tweaks {
    position: fixed; bottom: 24px; right: 24px; z-index: 100;
    width: 300px; background: var(--card); border: 1px solid var(--line); border-radius: 14px;
    box-shadow: 0 24px 60px -20px rgba(0,0,0,.25);
    display: none;
    font-family: var(--font-ui);
  }
  .tweaks.on { display: block; }
  .tweaks-head { padding: 14px 16px; border-bottom: 1px solid var(--line); display: flex; justify-content: space-between; align-items: center; }
  .tweaks-head h4 { margin: 0; font-size: 14px; font-weight: 500; }
  .tweaks-head .close { width: 24px; height: 24px; border-radius: 6px; display: grid; place-items: center; color: var(--fg-dim); }
  .tweaks-head .close:hover { background: var(--elev); color: var(--fg); }
  .tweaks-body { padding: 16px; max-height: 70vh; overflow-y: auto; }
  .tweak { margin-bottom: 18px; }
  .tweak:last-child { margin-bottom: 0; }
  .tweak label { display: block; font-family: var(--font-mono); font-size: 10px; text-transform: uppercase; letter-spacing: 0.06em; color: var(--fg-dim); margin-bottom: 8px; }
  .tweak-row { display: flex; gap: 6px; flex-wrap: wrap; }
  .tweak-opt {
    flex: 1; min-width: 0; padding: 8px 10px; border-radius: 8px; border: 1px solid var(--line);
    font-size: 12px; background: var(--bg); text-align: center; color: var(--fg);
    cursor: pointer; transition: all .15s; white-space: nowrap;
  }
  .tweak-opt:hover { border-color: var(--fg); }
  .tweak-opt.on { background: var(--fg); color: var(--bg); border-color: var(--fg); }
  .swatch-row { display: flex; gap: 8px; }
  .swatch { flex: 1; aspect-ratio: 1; border-radius: 8px; border: 2px solid transparent; cursor: pointer; transition: transform .15s; position: relative; }
  .swatch.on { border-color: var(--fg); transform: scale(1.05); }
  .swatch::after { content: ""; position: absolute; inset: 3px; border-radius: 5px; }
  .swatch .dots { position: absolute; inset: 3px; border-radius: 5px; display: flex; }
  .swatch .dots span { flex: 1; }

  /* ===== RESPONSIVE ===== */
  @media (max-width: 960px) {
    :root { --pad-section: 80px; --h-hero: clamp(48px, 11vw, 72px); --h-section: clamp(32px, 6vw, 48px); }
    .nav-links, .nav-cta .btn:not(.btn-primary) { display: none; }
    .mobile-toggle { display: flex; }
    .hero-inner, [data-hero="split"] .hero-inner, [data-hero="stacked"] .hero-inner { grid-template-columns: 1fr; gap: 48px; }
    .hero-visual { margin-right: -20px; }
    .features-grid { grid-template-columns: 1fr; }
    .feature-lg, .feature-sm, .feature-md { grid-column: span 1; }
    .tm-grid { grid-template-columns: 1fr; }
    .about-grid { grid-template-columns: 1fr; gap: 48px; }
    .cta-box { grid-template-columns: 1fr; padding: 48px 28px; }
    .foot { grid-template-columns: 1fr 1fr; }
    .foot-brand { grid-column: span 2; }
    .float { display: none; }
    .dash { transform: none !important; }
    .tweaks { right: 12px; bottom: 12px; width: calc(100vw - 24px); max-width: 300px; }
  }

  .mobile-menu {
    position: fixed; inset: 0; background: var(--bg); z-index: 60; padding: 80px 32px; display: none; flex-direction: column; gap: 20px;
  }
  .mobile-menu.on { display: flex; }
  .mobile-menu a { font-family: var(--font-display); font-size: 42px; font-weight: 400; letter-spacing: -0.02em; }
  .mobile-menu .close { position: absolute; top: 20px; right: 20px; width: 44px; height: 44px; border-radius: 10px; display: grid; place-items: center; }

  /* reveal */
  .reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s ease, transform .7s cubic-bezier(.2,.7,.2,1); }
  .reveal.in { opacity: 1; transform: none; }
</style>
</head>
<body data-theme="dark" data-density="balanced" data-hero="split" data-tone="formal">

<!-- ================= NAV ================= -->
<nav class="nav" id="nav">
  <div class="container nav-inner">
    <a href="#" class="logo">
      <span class="logo-mark"><img src="assets/il-mark.png" alt="IL"></span>
      <span class="logo-text">Intelligent <em>Logistics</em></span>
    </a>
    <div class="nav-links">
      <a href="#product">Product</a>
      <a href="#use-cases">Use cases</a>
      <a href="#about">Company</a>
      <a href="#voices">Customers</a>
      <a href="#resources">Resources</a>
      <a href="#contact">Contact</a>
    </div>
    <div class="nav-cta">
      <button class="btn btn-primary" onclick="scrollToId('contact')">Book a demo <svg viewBox="0 0 20 20" fill="none"><path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button>
      <button class="mobile-toggle" onclick="toggleMobileMenu()" aria-label="Menu">
        <svg viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </button>
    </div>
  </div>
</nav>

<div class="mobile-menu" id="mobileMenu">
  <button class="close" onclick="toggleMobileMenu()"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M6 18L18 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button>
  <a href="#product" onclick="toggleMobileMenu()">Product</a>
  <a href="#use-cases" onclick="toggleMobileMenu()">Use cases</a>
  <a href="#about" onclick="toggleMobileMenu()">Company</a>
  <a href="#voices" onclick="toggleMobileMenu()">Customers</a>
  <a href="#contact" onclick="toggleMobileMenu()">Contact</a>
</div>

<!-- ================= HERO ================= -->
<header class="hero">
  <div class="container hero-inner">
    <div>
      <span class="eyebrow">Logistics analytics platform</span>
      <h1 class="hero-title" id="heroTitle"></h1>
      <p class="hero-lede" id="heroLede"></p>
      <div class="hero-cta">
        <button class="btn btn-accent" onclick="scrollToId('contact')">Schedule a demo <svg viewBox="0 0 20 20" fill="none"><path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button>
        <button class="btn" onclick="scrollToId('product')">Explore the product</button>
      </div>
      <div class="hero-meta">
        <div class="hero-meta-item"><span class="dot"></span> Trusted by hundreds of enterprises</div>
        <div class="hero-meta-item"><span class="dot"></span> No integration required</div>
      </div>
    </div>

    <div class="hero-visual">
      <div class="shot shot-hero filled" id="shotHero" onclick="pickShot('hero')">
        <img alt="IL tracking summary dashboard" data-slot="hero" src="assets/screenshot-tracking.png">
        <div class="shot-inner">
          <div class="shot-frame">
            <div class="shot-dots"><span></span><span></span><span></span></div>
            <div class="shot-tab">Tracking Overview</div>
          </div>
          <div class="shot-cta">
            <svg viewBox="0 0 24 24" fill="none" width="32" height="32"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            <div class="shot-label">Drop product screenshot</div>
            <div class="shot-sub">PNG or JPG · click to upload</div>
          </div>
        </div>
        <button class="shot-replace" onclick="event.stopPropagation(); pickShot('hero')">Replace</button>
      </div>
      <div class="shot shot-hero shot-hero-alt filled" id="shotHero2" onclick="pickShot('hero2')">
        <img alt="IL shipments detail" data-slot="hero2" src="assets/screenshot-tracking.png">
        <div class="shot-inner">
          <div class="shot-frame">
            <div class="shot-dots"><span></span><span></span><span></span></div>
            <div class="shot-tab">Shipments · Detail view</div>
          </div>
          <div class="shot-cta">
            <svg viewBox="0 0 24 24" fill="none" width="32" height="32"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            <div class="shot-label">Drop secondary screenshot</div>
            <div class="shot-sub">PNG or JPG · click to upload</div>
          </div>
        </div>
        <button class="shot-replace" onclick="event.stopPropagation(); pickShot('hero2')">Replace</button>
      </div>
    </div>
  </div>
</header>

<!-- ================= LOGOS ================= -->
<div class="logos">
  <div class="container"><div class="logos-label">Trusted by hundreds of enterprise shippers</div></div>
  <div class="logos-track" id="logosTrack"></div>
</div>

<!-- ================= ABOUT ================= -->
<section class="about" id="about">
  <div class="container">
    <div class="about-grid">
      <div class="reveal">
        <span class="section-label">About</span>
        <h2 id="aboutTitle"></h2>
        <p class="section-lede" id="aboutLede"></p>
        <div style="margin-top: 32px; display: flex; gap: 12px; flex-wrap: wrap;">
          <button class="btn" onclick="scrollToId('product')">See how it works</button>
        </div>
      </div>
      <div class="about-stats reveal">
        <div class="stat">
          <div class="n"><em>300+</em></div>
          <div class="lbl">Enterprise customers</div>
        </div>
        <div class="stat">
          <div class="n">$<em>1.2B</em></div>
          <div class="lbl">Analyzed shipping spend</div>
        </div>
        <div class="stat">
          <div class="n"><em>40+</em><span class="unit">carriers</span></div>
          <div class="lbl">Parcel · LTL · freight</div>
        </div>
        <div class="stat">
          <div class="n"><em>14</em><span class="unit">%</span></div>
          <div class="lbl">Avg. spend reduction</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ================= FEATURES ================= -->
<section id="product">
  <div class="container">
    <div class="section-head reveal">
      <span class="section-label">Product</span>
      <h2 id="featTitle"></h2>
      <p class="section-lede" id="featLede"></p>
    </div>

    <div class="features-grid">
      <!-- 1: Spend breakdown — large -->
      <div class="feature feature-lg reveal">
        <div class="feature-num">01 / Spend</div>
        <h3>Find and <em>eliminate</em> wasteful shipping charges.</h3>
        <p>Address corrections, residential surcharges, additional handling — every controllable dollar, by carrier, by account, by lane.</p>
        <div class="feature-viz">
          <div class="spend-viz">
            <div class="spend-row hi"><span class="lbl">Addr. correct</span><div class="spend-bar"><div class="fill" style="width:82%"></div></div><span class="val">$184K</span></div>
            <div class="spend-row"><span class="lbl">Residential</span><div class="spend-bar"><div class="fill" style="width:64%"></div></div><span class="val">$142K</span></div>
            <div class="spend-row"><span class="lbl">Add'l handling</span><div class="spend-bar"><div class="fill" style="width:48%"></div></div><span class="val">$108K</span></div>
            <div class="spend-row"><span class="lbl">Dim. weight</span><div class="spend-bar"><div class="fill" style="width:36%"></div></div><span class="val">$81K</span></div>
            <div class="spend-row"><span class="lbl">Fuel</span><div class="spend-bar"><div class="fill" style="width:24%"></div></div><span class="val">$54K</span></div>
          </div>
        </div>
      </div>

      <!-- 2: Real-time tracking — small (2 col) -->
      <div class="feature feature-sm reveal">
        <div class="feature-num">02 / Visibility</div>
        <h3>Real-time, everywhere.</h3>
        <p>Live shipment events across every carrier, normalized into one feed.</p>
        <div class="feature-viz">
          <div class="map-viz">
            <svg viewBox="0 0 400 180" style="position:absolute;inset:0;width:100%;height:100%;opacity:.25">
              <path d="M20,120 Q80,60 140,100 T260,80 T380,110" stroke="currentColor" stroke-width="1" fill="none" stroke-dasharray="2 3"/>
              <path d="M30,80 Q100,140 180,90 T340,60" stroke="currentColor" stroke-width="1" fill="none" stroke-dasharray="2 3"/>
            </svg>
            <span class="map-dot" style="top:30%;left:15%"></span>
            <span class="map-dot" style="top:55%;left:35%;animation-delay:.5s"></span>
            <span class="map-dot" style="top:40%;left:60%;animation-delay:1s"></span>
            <span class="map-dot" style="top:65%;left:80%;animation-delay:1.5s"></span>
            <span class="map-dot" style="top:20%;left:75%;animation-delay:.8s"></span>
          </div>
        </div>
      </div>

      <!-- 3: Automated reporting — half -->
      <div class="feature feature-md reveal">
        <div class="feature-num">03 / Reporting</div>
        <h3>Reports that <em>schedule themselves</em>.</h3>
        <p>Push normalized KPIs to inbox, SFTP, or your BI stack. No spreadsheets, no stitching, no drift.</p>
        <div class="feature-viz" style="display:flex;gap:10px;flex-wrap:wrap;">
          <span class="pill ok">Daily exceptions</span>
          <span class="pill ok">Weekly spend</span>
          <span class="pill ok">Monthly carrier scorecard</span>
          <span class="pill warn">On-time by DC</span>
          <span class="pill ok">POD retention</span>
        </div>
      </div>

      <!-- 4: Carrier-agnostic — half -->
      <div class="feature feature-md reveal">
        <div class="feature-num">04 / Carriers</div>
        <h3>Every carrier, one <em>normalized</em> view.</h3>
        <p>Parcel, LTL, and freight — UPS, FedEx, DHL, USPS, Old Dominion, and 35+ more — flow into one schema you can actually query.</p>
        <div class="feature-viz" style="display:flex;gap:8px;flex-wrap:wrap;font-family:var(--font-mono);font-size:11px;">
          <span style="padding:6px 12px;border:1px solid var(--line);border-radius:6px;">UPS</span>
          <span style="padding:6px 12px;border:1px solid var(--line);border-radius:6px;">FedEx</span>
          <span style="padding:6px 12px;border:1px solid var(--line);border-radius:6px;">DHL</span>
          <span style="padding:6px 12px;border:1px solid var(--line);border-radius:6px;">USPS</span>
          <span style="padding:6px 12px;border:1px solid var(--line);border-radius:6px;">Old Dominion</span>
          <span style="padding:6px 12px;border:1px solid var(--line);border-radius:6px;">Estes</span>
          <span style="padding:6px 12px;border:1px solid var(--line);border-radius:6px;">XPO</span>
          <span style="padding:6px 12px;border:1px solid var(--line);border-radius:6px;">R+L</span>
          <span style="padding:6px 12px;border:1px solid var(--line);border-radius:6px;color:var(--fg-dim);">+32 more</span>
        </div>
      </div>

      <!-- 5-7: three small tiles -->
      <div class="feature feature-sm reveal">
        <div class="feature-num">05 / Retention</div>
        <h3 style="font-size:22px;">Indefinite POD storage.</h3>
        <p style="font-size:14px;">Proof of delivery and tracking history, retained forever. No more 90-day carrier black holes.</p>
      </div>
      <div class="feature feature-sm reveal">
        <div class="feature-num">06 / Access</div>
        <h3 style="font-size:22px;">Unlimited seats.</h3>
        <p style="font-size:14px;">Role-based permissions for ops, finance, and leadership. One platform, one source of truth.</p>
      </div>
      <div class="feature feature-sm reveal">
        <div class="feature-num">07 / Deploy</div>
        <h3 style="font-size:22px;">Live in days, not quarters.</h3>
        <p style="font-size:14px;">Cloud-native. No on-prem. No integration sprints. We read your carrier data directly.</p>
      </div>
    </div>
  </div>
</section>

<!-- ================= USE CASES ================= -->
<section class="uc" id="use-cases">
  <div class="container">
    <div class="section-head reveal">
      <span class="section-label">Use Cases</span>
      <h2>Eight ways teams <em>put their data to work</em>.</h2>
      <p class="section-lede">From wasteful-spend monitoring to proof-of-delivery retention — the workflows our customers run on IL every day.</p>
    </div>
    <div class="uc-grid reveal">
      <div class="uc-card" onclick="openUC(1)">
        <div><div class="uc-num">01</div><h3 class="uc-title">Wasteful <em>spend</em> monitoring</h3><p class="uc-desc">Identify unnecessary charges before they become recurring costs.</p></div>
        <span class="uc-arrow">View use case →</span>
      </div>
      <div class="uc-card" onclick="openUC(2)">
        <div><div class="uc-num">02</div><h3 class="uc-title">Address <em>corrections</em></h3><p class="uc-desc">Turn address errors into actionable insights you can route back to source systems.</p></div>
        <span class="uc-arrow">View use case →</span>
      </div>
      <div class="uc-card" onclick="openUC(3)">
        <div><div class="uc-num">03</div><h3 class="uc-title">Proof of delivery <em>retention</em></h3><p class="uc-desc">Access proof of delivery when you need it — not just for 120 days.</p></div>
        <span class="uc-arrow">View use case →</span>
      </div>
      <div class="uc-card" onclick="openUC(4)">
        <div><div class="uc-num">04</div><h3 class="uc-title">Delayed package <em>monitoring</em></h3><p class="uc-desc">See problems before your customers do, across every carrier.</p></div>
        <span class="uc-arrow">View use case →</span>
      </div>
      <div class="uc-card" onclick="openUC(5)">
        <div><div class="uc-num">05</div><h3 class="uc-title">On-time <em>performance</em> reporting</h3><p class="uc-desc">Measure what your carriers actually deliver — not what they promise.</p></div>
        <span class="uc-arrow">View use case →</span>
      </div>
      <div class="uc-card" onclick="openUC(6)">
        <div><div class="uc-num">06</div><h3 class="uc-title">Exceptions <em>monitoring</em></h3><p class="uc-desc">Proactively identify and resolve shipping issues before they escalate.</p></div>
        <span class="uc-arrow">View use case →</span>
      </div>
      <div class="uc-card" onclick="openUC(7)">
        <div><div class="uc-num">07</div><h3 class="uc-title">Service level &amp; <em>mode analysis</em></h3><p class="uc-desc">Ensure you’re paying for the right service — every time.</p></div>
        <span class="uc-arrow">View use case →</span>
      </div>
      <div class="uc-card" onclick="openUC(8)">
        <div><div class="uc-num">08</div><h3 class="uc-title">Interactive <em>dashboards</em></h3><p class="uc-desc">A command center for your entire shipment network — built for every team.</p></div>
        <span class="uc-arrow">View use case →</span>
      </div>
    </div>
  </div>
</section>

<!-- ================= TESTIMONIALS ================= -->
<section class="testimonials" id="voices">
  <div class="container">
    <div class="section-head reveal">
      <span class="section-label">Customer Stories</span>
      <h2 id="tmTitle"></h2>
      <p class="section-lede">Real outcomes from real shipping teams.</p>
    </div>

    <div class="cs-grid">
      <article class="cs-card cs-lg reveal">
        <div class="cs-head"><span class="cs-co">Wholesale Retail</span><span class="cs-tag">Enterprise visibility &amp; daily analytics</span></div>
        <blockquote class="cs-quote">“I’ve been utilizing the IL platform for well over a year now… Overall, I would highly recommend this program to anyone looking into it.”</blockquote>
        <div class="cs-foot">
          <div class="cs-source">
            <div class="src-dot"></div>
            <div><div class="name">Traffic Manager</div><div class="role">Big-box wholesale retail</div></div>
          </div>
          <ul class="cs-outcomes">
            <li>Daily use across teams</li>
            <li>Faster access to actionable data</li>
            <li>High adoption, minimal training</li>
          </ul>
        </div>
      </article>

      <article class="cs-card reveal">
        <div class="cs-head"><span class="cs-co">Medical Devices</span><span class="cs-tag">Freight spend &amp; cost recovery</span></div>
        <blockquote class="cs-quote">“…centralize freight data… break down charges… perform our own audits and identify billing discrepancies… recover costs… negotiate more effectively.”</blockquote>
        <div class="cs-foot">
          <div class="cs-source">
            <div class="src-dot"></div>
            <div><div class="name">Manager, Data Governance</div><div class="role">Medical device manufacturer</div></div>
          </div>
        </div>
      </article>

      <article class="cs-card reveal">
        <div class="cs-head"><span class="cs-co">Financial Services</span><span class="cs-tag">Proactive exception management</span></div>
        <blockquote class="cs-quote">“IL has been extremely useful… proactive tracking… compile package level detailed billing data… outstanding customer service.”</blockquote>
        <div class="cs-foot">
          <div class="cs-source">
            <div class="src-dot"></div>
            <div><div class="name">Business Operations</div><div class="role">National financial services</div></div>
          </div>
        </div>
      </article>

      <article class="cs-card reveal">
        <div class="cs-head"><span class="cs-co">Restaurant Tech</span><span class="cs-tag">Rapid onboarding &amp; enablement</span></div>
        <blockquote class="cs-quote">“The Intelligent Logistics solution is incredibly powerful, and easy to use with outstanding help and support… fast onboarding.”</blockquote>
        <div class="cs-foot">
          <div class="cs-source">
            <div class="src-dot"></div>
            <div><div class="name">Supply Chain Strategy</div><div class="role">Restaurant technology platform</div></div>
          </div>
        </div>
      </article>

      <article class="cs-card reveal">
        <div class="cs-head"><span class="cs-co">Luxury Fashion</span><span class="cs-tag">Carrier performance &amp; billing</span></div>
        <blockquote class="cs-quote">“…monitoring our carrier performance… billing dashboard… The Customer Success team has been extremely reliable.”</blockquote>
        <div class="cs-foot">
          <div class="cs-source">
            <div class="src-dot"></div>
            <div><div class="name">Coordinator, Logistics</div><div class="role">Luxury fashion &amp; leather goods</div></div>
          </div>
        </div>
      </article>

      <article class="cs-card cs-lg reveal">
        <div class="cs-head"><span class="cs-co">Electrical Distribution</span><span class="cs-tag">Freight recovery &amp; POD retention</span></div>
        <blockquote class="cs-quote">“…improving our freight recovery… the ability to query old PODs has saved us countless times.”</blockquote>
        <div class="cs-foot">
          <div class="cs-source">
            <div class="src-dot"></div>
            <div><div class="name">Transportation Operations</div><div class="role">Electrical products distributor</div></div>
          </div>
          <ul class="cs-outcomes">
            <li>Improved freight recovery</li>
            <li>Faster claims resolution</li>
            <li>Reduced erroneous shipping claims</li>
          </ul>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- ================= RESOURCES ================= -->
<section class="resources" id="resources">
  <div class="container">
    <div class="section-head reveal">
      <span class="section-label">Resources</span>
      <h2 class="res-title">Expert support built into<br><em>every subscription</em>.</h2>
      <p class="section-lede">Technology is only part of the value. Every customer works with a Dedicated Customer Success Manager — a long-term partner embedded in your team.</p>
    </div>

    <div class="res-grid">
      <div class="res-lead reveal">
        <span class="res-eyebrow">Your Dedicated CSM</span>
        <h3 class="res-h3">A single point of contact.<br>A long-term partner.</h3>
        <p class="res-body">Your CSM works as an extension of your team — helping you move faster, uncover insights, and continuously improve how you manage logistics data. Most analytics platforms stop at implementation. We don't.</p>
        <div class="res-actions">
          <button class="btn btn-primary" onclick="scrollToId('contact')">Book a demo <svg viewBox="0 0 20 20" fill="none"><path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></button>
          <button class="btn" onclick="scrollToId('product')">Explore the platform</button>
        </div>
      </div>

      <div class="res-cards">
        <article class="res-card reveal">
          <div class="res-num">01</div>
          <h4>Onboarding &amp; tenant setup</h4>
          <p>Configuration, carrier onboarding, data normalization, and permissions — handled.</p>
        </article>
        <article class="res-card reveal">
          <div class="res-num">02</div>
          <h4>Training &amp; enablement</h4>
          <p>Role-based training, best practices, and ongoing enablement across your team.</p>
        </article>
        <article class="res-card reveal">
          <div class="res-num">03</div>
          <h4>Proactive support</h4>
          <p>Custom report building, troubleshooting, and surfacing underutilized features.</p>
        </article>
        <article class="res-card reveal">
          <div class="res-num">04</div>
          <h4>Ongoing optimization</h4>
          <p>New carriers and locations, KPI refinement, long-term historical analysis.</p>
        </article>
      </div>
    </div>

    <div class="res-why reveal">
      <div class="res-why-label">Why it matters</div>
      <ul class="res-outcomes">
        <li>Faster time to value</li>
        <li>Higher platform adoption across teams</li>
        <li>Reduced internal support burden</li>
        <li>Continuous insight into shipping costs &amp; performance</li>
        <li>Expert support always available</li>
      </ul>
    </div>
  </div>
</section>

<!-- ================= CTA / CONTACT ================= -->
<section class="cta-section" id="contact">
  <div class="container">
    <div class="cta-box reveal">
      <div>
        <span class="eyebrow" style="background:color-mix(in oklab, var(--bg) 10%, transparent);color:color-mix(in oklab,var(--bg) 80%, transparent);border-color:color-mix(in oklab, var(--bg) 20%, transparent);">Contact IL Sales</span>
        <h2 id="ctaTitle" style="margin-top:24px;"></h2>
        <p style="color:color-mix(in oklab, var(--bg) 70%, transparent); font-size: 18px; max-width: 440px; text-wrap: pretty; margin-top:16px;" id="ctaLede"></p>
      </div>
      <div>
        <form class="cta-form" id="contactForm" novalidate>
          <div class="form-row">
            <div class="field">
              <label for="fName">Name</label>
              <input id="fName" name="name" placeholder="Morgan Chen" required>
            </div>
            <div class="field">
              <label for="fCo">Company</label>
              <input id="fCo" name="company" placeholder="Acme Distribution" required>
            </div>
          </div>
          <div class="field">
            <label for="fEmail">Work email</label>
            <input id="fEmail" name="email" type="email" placeholder="morgan@acmedist.com" required>
            <div class="msg" id="emailMsg"></div>
          </div>
          <div class="form-row">
            <div class="field">
              <label for="fVol">Monthly shipments</label>
              <select id="fVol" name="volume">
                <option>Under 10,000</option>
                <option>10K – 100K</option>
                <option>100K – 1M</option>
                <option>1M+</option>
              </select>
            </div>
            <div class="field">
              <label for="fRole">Role</label>
              <select id="fRole" name="role">
                <option>Supply chain</option>
                <option>Finance</option>
                <option>Operations</option>
                <option>Executive</option>
              </select>
            </div>
          </div>
          <button type="submit" class="btn btn-accent" style="margin-top:4px;align-self:flex-start;">Request a demo <svg viewBox="0 0 20 20" fill="none"><path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- ================= FOOTER ================= -->
<footer>
  <div class="container">
    <div class="foot">
      <div class="foot-brand">
        <a href="#" class="logo">
          <span class="logo-mark"><img src="assets/il-mark.png" alt="IL"></span>
          <span class="logo-text">Intelligent <em>Logistics</em></span>
        </a>
        <p>Logistics analytics that put your shipping data to work.</p>
      </div>
      <div class="foot-col">
        <h5>Product</h5>
        <ul>
          <li><a href="#product">Platform</a></li>
          <li><a href="#product">Integrations</a></li>
          <li><a href="#use-cases">Use cases</a></li>
        </ul>
      </div>
      <div class="foot-col">
        <h5>Company</h5>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#voices">Customers</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      
    </div>
    <div class="foot-bottom">
      <span>© 2026 Intelligent Logistics</span>
      
    </div>
  </div>
</footer>

<!-- ================= USE CASE MODAL ================= -->
<div class="modal-root" id="ucModal" role="dialog" aria-modal="true">
  <div class="modal-backdrop" onclick="closeUC()"></div>
  <div class="modal">
    <div class="modal-head">
      <div>
        <div class="modal-crumbs">Use Cases · <span id="ucNumLabel"></span></div>
        <h3 id="ucTitle"></h3>
        <p class="tag" id="ucTag"></p>
      </div>
      <button class="modal-close" onclick="closeUC()" aria-label="Close">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M6 18L18 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>
      </button>
    </div>
    <div class="modal-screenshot">
      <div class="shot shot-uc" id="ucShot" onclick="pickShot('uc-' + currentUC)">
        <img alt="Use case screenshot" src="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg'/%3E">
        <div class="shot-inner">
          <div class="shot-frame"><div class="shot-dots"><span></span><span></span><span></span></div><div class="shot-tab" id="ucShotTab"></div></div>
          <div class="shot-cta">
            <svg viewBox="0 0 24 24" fill="none" width="28" height="28"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            <div class="shot-label">Drop IL screenshot</div>
            <div class="shot-sub">PNG or JPG · click to upload</div>
          </div>
        </div>
        <button class="shot-replace" onclick="event.stopPropagation(); pickShot('uc-' + currentUC)">Replace</button>
      </div>
    </div>
    <div class="modal-body" id="ucBody"></div>
    <div class="modal-foot">
      <span class="hint" id="ucSource"></span>
      <div style="display:flex;gap:10px;">
        <button class="btn" onclick="closeUC()">Back to use cases</button>
        <button class="btn btn-accent" onclick="closeUC(); scrollToId('contact')">Schedule a demo</button>
      </div>
    </div>
  </div>
</div>

<input type="file" id="fileInput" accept="image/*" style="display:none">

<!-- ================= TWEAKS ================= -->
<div class="tweaks" id="tweaks">
  <div class="tweaks-head">
    <h4>Tweaks</h4>
    <button class="close" onclick="hideTweaks()" aria-label="Close"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M6 18L18 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>
  </div>
  <div class="tweaks-body">
    <div class="tweak">
      <label>Palette</label>
      <div class="swatch-row" id="swPalette"></div>
    </div>
    <div class="tweak">
      <label>Font pairing</label>
      <div class="tweak-row" id="swFont"></div>
    </div>
    <div class="tweak">
      <label>Hero layout</label>
      <div class="tweak-row" id="swHero"></div>
    </div>
    <div class="tweak">
      <label>Density</label>
      <div class="tweak-row" id="swDensity"></div>
    </div>
    <div class="tweak">
      <label>Theme</label>
      <div class="tweak-row" id="swTheme"></div>
    </div>
    <div class="tweak">
      <label>Copy tone</label>
      <div class="tweak-row" id="swTone"></div>
    </div>
  </div>
</div>

<script>
/*EDITMODE-BEGIN*/const TWEAK_DEFAULTS = {
  "palette": "ilblue",
  "font": "product",
  "hero": "split",
  "density": "balanced",
  "theme": "dark",
  "tone": "formal"
}/*EDITMODE-END*/;

/* ============== COPY ============== */
const COPY = {
  formal: {
    heroTitle: 'Logistics analytics that put your shipping <em>data to work</em>.',
    heroLede: 'A cloud-based, multi-carrier analytics platform that reduces wasteful spend, automates reporting, and gives supply chain, finance, and ops teams end-to-end shipment visibility — without complex integrations.',
    aboutTitle: 'Your logistics data is <em>everywhere</em>. We bring it together.',
    aboutLede: 'Most organizations wrestle with fragmented carrier data, manual reporting, limited retention, and reactive issue management. We centralize and normalize every parcel, LTL, and freight record into one analytics platform that supply chain, finance, and ops teams actually use.',
    featTitle: 'One platform. <em>Every carrier.</em> Every answer.',
    featLede: 'Multi-carrier, normalized, real-time. Built for the teams who sign off on shipping spend and the ones who explain the variance.',
    tmTitle: 'Real outcomes from <em>real shipping teams</em>.',
    ctaTitle: 'See it with <em>your</em> carrier data.',
    ctaLede: 'Book a 30-minute walkthrough. We\'ll load your carrier data, point out the controllable spend, and let the dashboard speak for itself.',
  },
  playful: {
    heroTitle: 'Your shipping data is <em>hiding</em> <span class="accent-u">money</span>. Let\'s find it.',
    heroLede: 'Intelligent Logistics pulls every parcel, LTL, and freight record into one analytics platform — so your team stops stitching spreadsheets and starts spotting savings. No integrations. No kidding.',
    aboutTitle: 'Your carrier data is a <em>mess</em>. That\'s where we come in.',
    aboutLede: 'Every carrier sends data in its own dialect, on its own schedule, to its own inbox. We read all of it, normalize all of it, and hand it back to your team in dashboards that don\'t require a PhD in UPS-ese.',
    featTitle: 'Built for the <em>spreadsheet-weary</em>.',
    featLede: 'Multi-carrier. Normalized. Real-time. Everything you\'ve been asking your analyst to build manually — shipped.',
    tmTitle: 'Real outcomes. <em>Real shipping teams.</em>',
    ctaTitle: 'Show us your data. We\'ll show you the savings.',
    ctaLede: 'Thirty minutes, your carrier data, one very-not-boring dashboard. No slides. No salesy hand-waving. Just the money.',
  }
};

/* ============== PALETTES ============== */
const PALETTES = {
  ilblue:   { accent: 'oklch(0.78 0.15 225)', name: 'IL cyan' },
  sage:     { accent: 'oklch(0.72 0.17 155)', name: 'Signal green' },
  magenta:  { accent: 'oklch(0.68 0.22 340)', name: 'Viz magenta' },
  amber:    { accent: 'oklch(0.78 0.16 75)',  name: 'Warm amber' },
};

const FONTS = {
  product:   { display: "'Instrument Serif', Georgia, serif", ui: "'Geist', sans-serif", label: 'Product' },
  editorial: { display: "'Instrument Serif', Georgia, serif", ui: "'Inter', sans-serif", label: 'Editorial' },
  geometric: { display: "'Space Grotesk', sans-serif", ui: "'Inter', sans-serif", label: 'Geometric' },
};

/* ============== LOGO WALL ============== */
const logos = ['Costco','AT&T','T-Mobile','Nike','US Bank','Dior','Toast','Coca-Cola','John Deere','Lenovo','Samsung','Ariat','CVS','Callaway','Baxter','Signet','StockX','Duluth','Border States','Citi Trends'];
(function(){
  const t = document.getElementById('logosTrack');
  const html = logos.map(l => `<span class="logo-item">${l}</span>`).join('');
  t.innerHTML = html + html;
})();

/* ============== STATE & APPLY ============== */
let state = Object.assign({}, TWEAK_DEFAULTS);

function applyAll() {
  const body = document.body;
  // theme
  body.setAttribute('data-theme', state.theme);
  body.setAttribute('data-density', state.density);
  body.setAttribute('data-hero', state.hero);
  body.setAttribute('data-tone', state.tone);
  // palette
  document.documentElement.style.setProperty('--accent', PALETTES[state.palette].accent);
  // fonts
  document.documentElement.style.setProperty('--font-display', FONTS[state.font].display);
  document.documentElement.style.setProperty('--font-ui', FONTS[state.font].ui);
  // copy
  const c = COPY[state.tone];
  document.getElementById('heroTitle').innerHTML = c.heroTitle;
  document.getElementById('heroLede').textContent = c.heroLede;
  document.getElementById('aboutTitle').innerHTML = c.aboutTitle;
  document.getElementById('aboutLede').textContent = c.aboutLede;
  document.getElementById('featTitle').innerHTML = c.featTitle;
  document.getElementById('featLede').textContent = c.featLede;
  document.getElementById('tmTitle').innerHTML = c.tmTitle;
  document.getElementById('ctaTitle').innerHTML = c.ctaTitle;
  document.getElementById('ctaLede').textContent = c.ctaLede;

  // update tweaks UI
  updateTweakUI();
}

function updateTweakUI(){
  document.querySelectorAll('#swPalette .swatch').forEach(el => el.classList.toggle('on', el.dataset.val === state.palette));
  document.querySelectorAll('#swFont .tweak-opt').forEach(el => el.classList.toggle('on', el.dataset.val === state.font));
  document.querySelectorAll('#swHero .tweak-opt').forEach(el => el.classList.toggle('on', el.dataset.val === state.hero));
  document.querySelectorAll('#swDensity .tweak-opt').forEach(el => el.classList.toggle('on', el.dataset.val === state.density));
  document.querySelectorAll('#swTheme .tweak-opt').forEach(el => el.classList.toggle('on', el.dataset.val === state.theme));
  document.querySelectorAll('#swTone .tweak-opt').forEach(el => el.classList.toggle('on', el.dataset.val === state.tone));
}

function persist() {
  try { window.parent.postMessage({type:'__edit_mode_set_keys', edits: state}, '*'); } catch(e){}
}
function setKey(k, v) {
  state[k] = v;
  applyAll();
  persist();
}

/* ============== TWEAKS UI ============== */
function buildTweaks(){
  // palettes
  const sw = document.getElementById('swPalette');
  sw.innerHTML = Object.entries(PALETTES).map(([k,v]) =>
    `<button class="swatch" data-val="${k}" title="${v.name}" style="background:${v.accent};"></button>`
  ).join('');
  sw.querySelectorAll('.swatch').forEach(b => b.onclick = () => setKey('palette', b.dataset.val));

  const mkOpts = (id, opts, key) => {
    const el = document.getElementById(id);
    el.innerHTML = opts.map(([v, label]) => `<button class="tweak-opt" data-val="${v}">${label}</button>`).join('');
    el.querySelectorAll('.tweak-opt').forEach(b => b.onclick = () => setKey(key, b.dataset.val));
  };
  mkOpts('swFont', [['product','Product'],['editorial','Editorial'],['geometric','Geometric']], 'font');
  mkOpts('swHero', [['split','Split'],['stacked','Centered']], 'hero');
  mkOpts('swDensity', [['tight','Tight'],['balanced','Balanced'],['airy','Airy']], 'density');
  mkOpts('swTheme', [['light','Light'],['dark','Dark']], 'theme');
  mkOpts('swTone', [['formal','Formal'],['playful','Playful']], 'tone');
}

/* ============== EDIT MODE ============== */
window.addEventListener('message', (e) => {
  if (!e.data) return;
  if (e.data.type === '__activate_edit_mode') document.getElementById('tweaks').classList.add('on');
  if (e.data.type === '__deactivate_edit_mode') document.getElementById('tweaks').classList.remove('on');
});
function hideTweaks(){
  document.getElementById('tweaks').classList.remove('on');
  try { window.parent.postMessage({type:'__edit_mode_closed_by_user'}, '*'); } catch(e){}
}
// announce availability after listener is attached
try { window.parent.postMessage({type:'__edit_mode_available'}, '*'); } catch(e){}

/* ============== USE CASES DATA ============== */
const UCS = {
  1: { title: 'Wasteful <em>Spend</em> Monitoring', tag: 'Identify unnecessary charges before they become recurring costs.',
       helps: ['Monitor controllable vs. uncontrollable spend', 'Track address corrections, residential surcharges, additional handling, dim weight', 'Spot recurring charge patterns across carriers and accounts'],
       impact: ['Reduce avoidable shipping spend', 'Strengthen carrier negotiations with data', 'Improve financial predictability'],
       sourced: true },
  2: { title: 'Address <em>Corrections</em>', tag: 'Turn address errors into actionable insights.',
       helps: ['Original vs. corrected addresses', 'Root cause by error type', 'Total cost impact over time'],
       impact: ['Reduce recurring correction fees', 'Improve upstream data quality', 'Lower avoidable shipping charges'],
       sourced: true },
  3: { title: 'Proof of Delivery <em>Retention</em>', tag: 'Access proof of delivery when you need it — not just for 120 days.',
       helps: ['Instantly retrieve PODs for disputes or audits', 'Upload brokerage or supporting documents', 'Associate documents directly to shipments'],
       impact: ['Reduce claims resolution time', 'Support long-term compliance and audits', 'Eliminate manual document searches'],
       sourced: true },
  4: { title: 'Delayed Package <em>Monitoring</em>', tag: 'See problems before your customers do.',
       helps: ['Haven’t updated within 24–48 hours', 'Delayed or stuck at customs', 'Trending toward late delivery'],
       impact: ['Reduce WISMO calls', 'Improve customer experience', 'Strengthen service reliability'],
       sourced: true },
  5: { title: 'On-Time <em>Performance</em> Reporting', tag: 'Measure what your carriers actually deliver.',
       helps: ['Compare actual delivery vs. commitments', 'Identify underperforming lanes or suppliers', 'Support carrier negotiations with data'],
       impact: ['Improve carrier accountability', 'Optimize service selection', 'Support strategic sourcing decisions'],
       sourced: true },
  6: { title: 'Exceptions <em>Monitoring</em>', tag: 'Proactively identify and resolve shipping issues before they escalate.',
       helps: ['Real-time exception identification across parcel, LTL, and freight', 'Categorized exception types (delays, holds, delivery failures, missing scans, customs)', 'Exception trends by carrier, service, lane, and location', 'Drill-down to affected shipments for immediate investigation', 'Fully customizable and filterable views'],
       impact: ['Faster issue resolution', 'Improved service levels', 'Reduced downstream customer escalations'],
       sourced: true },
  7: { title: 'Service Level &amp; <em>Mode Analysis</em>', tag: 'Ensure you’re paying for the right service — every time.',
       helps: null, impact: null, sourced: false },
  8: { title: 'Interactive <em>Dashboards</em>', tag: 'A command center for your entire shipment network.',
       helps: null, impact: null, sourced: false },
};
let currentUC = null;
function openUC(n) {
  currentUC = n;
  const d = UCS[n];
  document.getElementById('ucNumLabel').textContent = String(n).padStart(2,'0');
  document.getElementById('ucTitle').innerHTML = d.title;
  document.getElementById('ucTag').textContent = d.tag;
  document.getElementById('ucShotTab').textContent = d.title.replace(/<[^>]+>/g,'');
  const body = document.getElementById('ucBody');
  if (d.sourced) {
    body.innerHTML = `
      <div><h4>What IL helps you do</h4><ul>${d.helps.map(x=>`<li>${x}</li>`).join('')}</ul></div>
      <div><h4>Business impact</h4><ul>${d.impact.map(x=>`<li>${x}</li>`).join('')}</ul></div>`;
    document.getElementById('ucSource').textContent = 'Source: intelligent-logistics';
  } else {
    body.innerHTML = `<div class="modal-note">Full use case content coming soon — we’ll walk you through it live. Schedule a demo and we’ll show you how ${d.title.replace(/<[^>]+>/g,'').toLowerCase()} works with your carrier data.</div>`;
    document.getElementById('ucSource').textContent = 'Content pending';
  }
  // restore screenshot if previously uploaded
  restoreShot('uc-' + n, document.getElementById('ucShot'));
  document.getElementById('ucModal').classList.add('on');
  document.body.style.overflow = 'hidden';
}
function closeUC(){
  document.getElementById('ucModal').classList.remove('on');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeUC(); });

/* ============== SCREENSHOT PICKER ============== */
const SHOT_STORE = {};
function getShotEl(slot) {
  if (slot === 'hero') return document.getElementById('shotHero');
  if (slot === 'hero2') return document.getElementById('shotHero2');
  if (slot.startsWith('uc-')) return document.getElementById('ucShot');
  return null;
}
function restoreShot(slot, el) {
  const data = SHOT_STORE[slot] || localStorage.getItem('il_shot_' + slot);
  if (data) {
    SHOT_STORE[slot] = data;
    const img = el.querySelector('img');
    img.src = data;
    el.classList.add('filled');
  } else {
    el.classList.remove('filled');
    const img = el.querySelector('img');
    if (img) img.src = 'data:image/svg+xml;utf8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\'/%3E';
  }
}
let pickingFor = null;
function pickShot(slot) {
  pickingFor = slot;
  document.getElementById('fileInput').click();
}
document.getElementById('fileInput').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file || !pickingFor) return;
  const reader = new FileReader();
  reader.onload = () => {
    const data = reader.result;
    SHOT_STORE[pickingFor] = data;
    try { localStorage.setItem('il_shot_' + pickingFor, data); } catch(e){}
    const el = getShotEl(pickingFor);
    if (el) {
      el.querySelector('img').src = data;
      el.classList.add('filled');
    }
  };
  reader.readAsDataURL(file);
  e.target.value = '';
});
// restore hero on load
setTimeout(() => { restoreShot('hero', document.getElementById('shotHero')); restoreShot('hero2', document.getElementById('shotHero2')); }, 0);

/* ============== UTIL ============== */
function scrollToId(id){
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' });
}
function toggleMobileMenu(){
  document.getElementById('mobileMenu').classList.toggle('on');
}

/* ============== SCROLL/REVEAL ============== */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

window.addEventListener('scroll', () => {
  document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 10);
});

/* removed: dashboard animation (hero is now a real-screenshot slot) */

/* ============== FORM ============== */
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('fEmail');
  const msg = document.getElementById('emailMsg');
  const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
  if (!ok) {
    email.closest('.field').classList.add('err');
    msg.textContent = 'Please use a valid work email.';
    return;
  }
  email.closest('.field').classList.remove('err');
  msg.textContent = '';

  // Compose a mailto: with the form data and open the user's mail client
  const name = document.getElementById('fName').value || '';
  const company = document.getElementById('fCo').value || '';
  const volume = document.getElementById('fVol').value || '';
  const role = document.getElementById('fRole').value || '';
  const subject = `Demo request — ${company || name || 'Intelligent Logistics'}`;
  const body =
    `Hi IL team,\n\nI'd like to book a demo of Intelligent Logistics.\n\n` +
    `Name: ${name}\n` +
    `Company: ${company}\n` +
    `Work email: ${email.value}\n` +
    `Monthly shipments: ${volume}\n` +
    `Role: ${role}\n\n` +
    `Thanks!`;
  const href =
    'mailto:il-demo@contax.com' +
    '?subject=' + encodeURIComponent(subject) +
    '&body=' + encodeURIComponent(body);
  // open in same tab so user lands on their mail client
  window.location.href = href;

  const form = document.getElementById('contactForm');
  form.innerHTML = `<div class="form-sent">
    <h4>Thanks — your email client should open with your demo request.</h4>
    <p>If nothing happened, send the same details directly to <a href="mailto:il-demo@contax.com" style="color:var(--accent);">il-demo@contax.com</a> and our team will reach out within a business day.</p>
  </div>`;
});

/* ============== INIT ============== */
buildTweaks();
applyAll();
</script>
</body>
</html>
