import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import hikerImg from "./assets/hiker.png"; // logo se nikala hua asli hiker silhouette
import "./Preloader.css";

const BRAND = "Bin Waleed Tours";
const TAGLINE = "Explore the north like never before";
const MAX_ALTITUDE = 4200; // meters, sirf visual touch

// Trail: neeche left se summit tak (viewBox 1200 x 700)
const TRAIL =
  "M120 650 C 260 640 380 620 470 590 C 560 560 520 520 600 490 " +
  "C 680 460 640 410 720 370 C 780 340 740 290 800 250 C 830 228 815 200 822 178";

// Pahaar ki outline ko natural (jagged) banane ka helper
function ridge(pts, step = 24, amp = 7, seed = 1) {
  const out = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const [x1, y1] = pts[i];
    const [x2, y2] = pts[i + 1];
    const n = Math.max(1, Math.floor(Math.hypot(x2 - x1, y2 - y1) / step));
    out.push(`${x1},${y1}`);
    for (let k = 1; k < n; k++) {
      const t = k / n;
      const s = Math.sin((i * 31 + k * 7 + seed) * 12.9898) * 43758.5453;
      const j = (s - Math.floor(s)) * 2 - 1;
      out.push(`${(x1 + (x2 - x1) * t).toFixed(1)},${(y1 + (y2 - y1) * t + j * amp).toFixed(1)}`);
    }
  }
  const last = pts[pts.length - 1];
  out.push(`${last[0]},${last[1]}`);
  return out.join(" ");
}

const FAR = ridge(
  [[-600,700],[-600,470],[-200,430],[120,400],[240,460],[380,330],[520,440],[600,400],[700,470],
   [1000,420],[1150,360],[1300,450],[1800,420],[1800,700]], 26, 9, 3);
const MAIN = ridge([[380,700],[620,330],[820,170],[1020,360],[1250,700]], 22, 7, 5);
const MID = ridge([[640,700],[940,420],[1070,500],[1250,400],[1800,430],[1800,700]], 24, 8, 9);
const FRONT = ridge([[-600,700],[-600,500],[250,440],[420,520],[560,700]], 24, 8, 11);

const STARS = Array.from({ length: 40 }, (_, i) => ({
  x: ((i * 337) % 1500) - 150,
  y: (i * 151) % 260,
  r: 0.7 + (i % 3) * 0.5,
  d: (i % 5) * 0.6,
}));

function waitForPageLoad() {
  return new Promise((resolve) => {
    if (document.readyState === "complete") return resolve();
    window.addEventListener("load", resolve, { once: true });
  });
}

function Preloader({ onComplete }) {
  const wrapperRef = useRef(null);
  const trailRef = useRef(null);
  const hikerRef = useRef(null);
  const counterRef = useRef(null);
  const altRef = useRef(null);
  const barRef = useRef(null);

  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useLayoutEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const path = trailRef.current;
    const len = path.getTotalLength();
    let cancelled = false;

    const ctx = gsap.context(() => {
      const state = { p: 0 };
      const tl = gsap.timeline();

      // 1) Website ka naam sab se pehle (agar kuch fail ho to bhi text CSS mein visible rehta hai)
      tl.fromTo(
        ".pl-title .pl-char",
        { y: 28, opacity: 0, filter: "blur(8px)" },
        { y: 0, opacity: 1, filter: "blur(0px)", stagger: 0.045, duration: 0.8, ease: "power3.out" },
        0.1
      );
      tl.fromTo(".pl-tagline", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" }, 0.8);
      tl.fromTo(".pl-hud", { opacity: 0 }, { opacity: 1, duration: 0.6 }, 0.4);

      gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
      gsap.set(".pl-flag", { opacity: 0, y: 10 });

      const render = () => {
        const t = state.p / 100;
        const pt = path.getPointAtLength(len * t);
        hikerRef.current.setAttribute("transform", `translate(${pt.x} ${pt.y})`);
        path.style.strokeDashoffset = len * (1 - t);
        counterRef.current.textContent = String(Math.round(state.p)).padStart(3, "0");
        altRef.current.textContent = Math.round(t * MAX_ALTITUDE).toLocaleString("en-US");
        barRef.current.style.transform = `scaleX(${t})`;
      };
      render();

      // 2) Hiker chadhai: 85% tak
      tl.to(state, { p: 85, duration: 3.2, ease: "power1.inOut", onUpdate: render }, 0.5);

      // 3) Page load hone tak yahin ruko
      tl.call(() => {
        tl.pause();
        waitForPageLoad().then(() => {
          if (!cancelled) tl.play();
        });
      });

      // 4) Summit
      tl.to(state, { p: 100, duration: 0.9, ease: "power2.out", onUpdate: render });
      tl.call(() => hikerRef.current.classList.add("is-still"));
      tl.to(".pl-flag", { opacity: 1, y: 0, duration: 0.5, ease: "back.out(2)" });
      tl.to(".pl-scene", { scale: 1.1, duration: 1.1, ease: "power2.inOut" }, "<");

      // 5) Exit
      tl.to(wrapperRef.current, {
        yPercent: -100,
        duration: 0.7,
        delay: 0.4,
        ease: "power4.inOut",
        onComplete: () => {
          gsap.set(wrapperRef.current, { display: "none" });
          document.body.style.overflow = prevOverflow;
          if (onCompleteRef.current) onCompleteRef.current();
        },
      });
    }, wrapperRef);

    return () => {
      cancelled = true;
      ctx.revert();
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <div className="preloader-overlay-wrapper" ref={wrapperRef}>
      <svg className="pl-scene" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
        <defs>
          <linearGradient id="plSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#030d0c" />
            <stop offset="0.45" stopColor="#0a2b26" />
            <stop offset="0.8" stopColor="#3b4a3a" />
            <stop offset="1" stopColor="#8a6a3c" />
          </linearGradient>
          <radialGradient id="plSun" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#ffd9a0" stopOpacity="0.75" />
            <stop offset="0.45" stopColor="#e6a860" stopOpacity="0.25" />
            <stop offset="1" stopColor="#e6a860" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="plMain" gradientUnits="userSpaceOnUse" x1="0" y1="170" x2="0" y2="700">
            <stop offset="0" stopColor="#f3ead6" />
            <stop offset="0.1" stopColor="#c9cfc4" />
            <stop offset="0.3" stopColor="#6f8f86" />
            <stop offset="0.62" stopColor="#2f5c55" />
            <stop offset="1" stopColor="#0f3631" />
          </linearGradient>
          <linearGradient id="plFar" gradientUnits="userSpaceOnUse" x1="0" y1="330" x2="0" y2="700">
            <stop offset="0" stopColor="#8d8466" />
            <stop offset="1" stopColor="#274a43" />
          </linearGradient>
          <linearGradient id="plMid" gradientUnits="userSpaceOnUse" x1="0" y1="380" x2="0" y2="700">
            <stop offset="0" stopColor="#5d7468" />
            <stop offset="1" stopColor="#12382f" />
          </linearGradient>
          <linearGradient id="plFront" gradientUnits="userSpaceOnUse" x1="0" y1="440" x2="0" y2="700">
            <stop offset="0" stopColor="#0d2f2a" />
            <stop offset="1" stopColor="#041512" />
          </linearGradient>
          <filter id="plBlur" x="-30%" y="-80%" width="160%" height="260%">
            <feGaussianBlur stdDeviation="22" />
          </filter>
        </defs>

        <rect x="-700" y="-700" width="2600" height="1500" fill="url(#plSky)" />
        <circle cx="900" cy="300" r="420" fill="url(#plSun)" />

        {STARS.map((s, i) => (
          <circle key={i} className="pl-star" cx={s.x} cy={s.y} r={s.r} style={{ animationDelay: `${s.d}s` }} />
        ))}

        <polygon points={FAR} fill="url(#plFar)" opacity="0.8" />
        <polygon points={MAIN} fill="url(#plMain)" />
        <polygon points={MID} fill="url(#plMid)" />
        <polygon points={FRONT} fill="url(#plFront)" />

        {/* Peeche wali dhund */}
        <g filter="url(#plBlur)">
          <ellipse className="pl-mist pl-mist-a" cx="560" cy="470" rx="380" ry="34" />
          <ellipse className="pl-mist pl-mist-b" cx="900" cy="560" rx="420" ry="40" />
        </g>

        <path className="pl-trail-ghost" d={TRAIL} />
        <path className="pl-trail" d={TRAIL} ref={trailRef} />

        <g className="pl-flag" transform="translate(822 178)">
          <line x1="0" y1="0" x2="0" y2="-40" />
          <polygon points="0,-40 24,-33 0,-26" />
        </g>

        {/* Asli hiker (logo wala), feet trail par */}
        <g ref={hikerRef} className="pl-hiker">
          <g className="pl-walk">
            <image href={hikerImg} x="-26" y="-74" width="52" height="79" />
          </g>
        </g>

        {/* Aage wali dhund */}
        <g filter="url(#plBlur)">
          <ellipse className="pl-mist pl-mist-b" cx="300" cy="650" rx="460" ry="36" />
          <ellipse className="pl-mist pl-mist-a" cx="950" cy="690" rx="500" ry="30" />
        </g>
      </svg>

      <div className="pl-vignette" />

      <div className="pl-header">
        <div className="pl-title" role="heading" aria-level={1} aria-label={BRAND}>
          {BRAND.split("").map((c, i) => (
            <span className="pl-char" key={i} aria-hidden="true">
              {c === " " ? "\u00A0" : c}
            </span>
          ))}
        </div>
        <p className="pl-tagline">{TAGLINE}</p>
      </div>

      <div className="pl-hud pl-alt">
        <span className="pl-alt-label">Altitude</span>
        <span className="pl-alt-value">
          <span ref={altRef}>0</span> m
        </span>
      </div>

      <div className="pl-hud pl-count">
        <span className="pl-count-num" ref={counterRef}>
          000
        </span>
        <span className="pl-count-pct">%</span>
      </div>

      <div className="pl-bar">
        <div className="pl-bar-fill" ref={barRef} />
      </div>
    </div>
  );
}

export default Preloader;
