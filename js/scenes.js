/* ==========================================================
   糖果风 SVG 动画场景（5首儿歌 + 首页横幅）
   约定：定位用外层 g[transform]，动画加在内层带 class 的元素上，
   避免 CSS transform 覆盖 SVG transform 属性。
   ========================================================== */

const SUN_RAYS = `
  <g class="sun-rays" fill="#FFC53D">
    <path d="M0,-56 L8,-34 L-8,-34 Z"/>
    <path d="M0,-56 L8,-34 L-8,-34 Z" transform="rotate(60)"/>
    <path d="M0,-56 L8,-34 L-8,-34 Z" transform="rotate(120)"/>
    <path d="M0,-56 L8,-34 L-8,-34 Z" transform="rotate(180)"/>
    <path d="M0,-56 L8,-34 L-8,-34 Z" transform="rotate(240)"/>
    <path d="M0,-56 L8,-34 L-8,-34 Z" transform="rotate(300)"/>
  </g>`;

const Scenes = {

  state: {},

  svg: {

    /* ---------------- 小星星：夜空 · 月亮 · 会升起的主星 ---------------- */
    twinkle: `
<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="tw-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#3B3486"/><stop offset="1" stop-color="#1E1A4A"/>
    </linearGradient>
    <radialGradient id="tw-glow">
      <stop offset="0" stop-color="#FFEB99" stop-opacity=".9"/><stop offset="1" stop-color="#FFEB99" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="800" height="450" fill="url(#tw-sky)"/>
  <g fill="#FFFFFF">
    <circle class="tw" cx="80" cy="60" r="2.6" style="animation-delay:.2s"/>
    <circle class="tw" cx="150" cy="130" r="2" style="animation-delay:1.1s"/>
    <circle class="tw" cx="240" cy="60" r="3" style="animation-delay:.6s"/>
    <circle class="tw" cx="320" cy="110" r="2.2" style="animation-delay:1.7s"/>
    <circle class="tw" cx="520" cy="50" r="2.4" style="animation-delay:.9s"/>
    <circle class="tw" cx="560" cy="150" r="2" style="animation-delay:.3s"/>
    <circle class="tw" cx="720" cy="180" r="2.6" style="animation-delay:1.4s"/>
    <circle class="tw" cx="90" cy="220" r="2.2" style="animation-delay:2s"/>
    <circle class="tw" cx="700" cy="40" r="2" style="animation-delay:1.9s"/>
    <circle class="tw" cx="460" cy="220" r="2" style="animation-delay:.7s"/>
    <circle class="tw" cx="180" cy="290" r="2.4" style="animation-delay:1.2s"/>
    <circle class="tw" cx="640" cy="260" r="2" style="animation-delay:1.6s"/>
  </g>
  <g transform="translate(665,92)">
    <circle r="46" fill="#FFF6D6"/>
    <circle cx="-14" cy="-12" r="9" fill="#F0E2AE"/><circle cx="12" cy="14" r="6" fill="#F0E2AE"/><circle cx="20" cy="-18" r="4" fill="#F0E2AE"/>
  </g>
  <g transform="translate(390,150)">
    <circle r="82" fill="url(#tw-glow)"/>
    <g class="hero-star">
      <path class="star-shape" d="M0,-52 L13,-13 L52,0 L13,13 L0,52 L-13,13 L-52,0 L-13,-13 Z" fill="#FFD93D" stroke="#FFB800" stroke-width="4" stroke-linejoin="round"/>
      <circle r="9" fill="#FFF6D6"/>
    </g>
  </g>
  <g class="q-bubble">
    <rect x="452" y="64" width="56" height="50" rx="16" fill="#FFF9F0"/>
    <path d="M468 112 L456 134 L488 112 Z" fill="#FFF9F0"/>
    <text x="480" y="100" font-size="32" font-weight="bold" text-anchor="middle" fill="#FF9F45">?</text>
  </g>
  <g class="diamond-ring">
    <path d="M390,84 L406,134 L450,150 L406,166 L390,216 L374,166 L330,150 L374,134 Z" fill="none" stroke="#9BE8FF" stroke-width="4" stroke-linejoin="round"/>
  </g>
  <path d="M0,372 Q210,318 430,368 T800,352 L800,450 L0,450 Z" fill="#4A4290"/>
  <path d="M0,410 Q280,368 540,406 T800,398 L800,450 L0,450 Z" fill="#38316E"/>
  <g transform="translate(128,346)">
    <rect x="-28" y="0" width="56" height="36" rx="5" fill="#574FA8"/>
    <path d="M-34,2 L0,-26 L34,2 Z" fill="#6B62C2"/>
    <rect class="win" x="-8" y="10" width="16" height="15" rx="2" fill="#FFD93D"/>
  </g>
</svg>`,

    /* ---------------- 农场：谷仓 · 奶牛/鸭子随段落出场 ---------------- */
    farm: `
<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="fm-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#A8E4FF"/><stop offset="1" stop-color="#E0F7FA"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#fm-sky)"/>
  <g transform="translate(708,74)">${SUN_RAYS}
    <circle r="34" fill="#FFD93D" stroke="#FFB800" stroke-width="4"/>
  </g>
  <g transform="translate(200,84)"><g class="cloud-drift cd1" fill="#FFFFFF">
    <ellipse cx="0" cy="0" rx="44" ry="17"/><ellipse cx="30" cy="-11" rx="28" ry="14"/><ellipse cx="-28" cy="-9" rx="24" ry="12"/>
  </g></g>
  <g transform="translate(520,60)"><g class="cloud-drift cd2" fill="#FFFFFF" opacity=".9">
    <ellipse cx="0" cy="0" rx="38" ry="15"/><ellipse cx="26" cy="-10" rx="24" ry="12"/>
  </g></g>
  <path d="M0,330 Q400,288 800,326 L800,450 L0,450 Z" fill="#6BCB77"/>
  <rect y="402" width="800" height="48" fill="#57B85F"/>
  <g transform="translate(140,304)">
    <rect x="-72" y="-62" width="144" height="98" rx="8" fill="#FF6B6B"/>
    <path d="M-84,-58 L0,-112 L84,-58 Z" fill="#E85555"/>
    <rect x="-72" y="-62" width="144" height="10" fill="#FF8F8F"/>
    <rect x="-20" y="-30" width="40" height="66" rx="5" fill="#9C3A3A"/>
    <path d="M-20,-30 L20,36 M20,-30 L-20,36" stroke="#FFE3E3" stroke-width="5"/>
    <circle cx="0" cy="-76" r="14" fill="#FFF9F0"/>
    <path d="M-8,-76 L8,-76 M0,-84 L0,-68" stroke="#E85555" stroke-width="4"/>
  </g>
  <g fill="#FFF3D6" stroke="#E8D5A8" stroke-width="2">
    <rect x="252" y="330" width="11" height="48" rx="4"/>
    <rect x="296" y="330" width="11" height="48" rx="4"/>
    <rect x="340" y="330" width="11" height="48" rx="4"/>
    <rect x="384" y="330" width="11" height="48" rx="4"/>
    <rect x="428" y="330" width="11" height="48" rx="4"/>
    <rect x="252" y="338" width="187" height="9" rx="4"/>
    <rect x="252" y="360" width="187" height="9" rx="4"/>
  </g>
  <ellipse cx="648" cy="408" rx="100" ry="27" fill="#4DA8DA"/>
  <ellipse class="ripple" cx="648" cy="408" rx="66" ry="15" fill="#6FC2E8"/>
  <g class="bunting">
    <path d="M16,26 Q400,70 784,26" fill="none" stroke="#D8A85A" stroke-width="3"/>
    <path d="M64,36 l13,21 l13,-21 z" fill="#FF6B6B"/>
    <path d="M146,44 l13,21 l13,-21 z" fill="#6BCB77"/>
    <path d="M228,50 l13,21 l13,-21 z" fill="#FFD93D"/>
    <path d="M310,53 l13,21 l13,-21 z" fill="#4D96FF"/>
    <path d="M392,54 l13,21 l13,-21 z" fill="#9B72E8"/>
    <path d="M474,53 l13,21 l13,-21 z" fill="#FF6B6B"/>
    <path d="M556,50 l13,21 l13,-21 z" fill="#6BCB77"/>
    <path d="M638,44 l13,21 l13,-21 z" fill="#FFD93D"/>
    <path d="M720,36 l13,21 l13,-21 z" fill="#4D96FF"/>
  </g>
  <g class="notes" fill="#4D96FF" font-size="30" font-weight="bold">
    <text class="nt nt1" x="220" y="150">♪</text>
    <text class="nt nt2" x="556" y="128">♫</text>
    <text class="nt nt3" x="636" y="196">♪</text>
  </g>
  <g transform="translate(240,318)"><g class="pig-g">
    <ellipse rx="26" ry="17" fill="#FF9FB6"/>
    <circle cx="22" cy="-11" r="11" fill="#FF9FB6"/>
    <ellipse cx="30" cy="-8" rx="6" ry="5" fill="#E87A9A"/>
    <circle cx="17" cy="-15" r="2.2" fill="#5A3B32"/>
    <rect x="-14" y="12" width="7" height="13" rx="3" fill="#E87A9A"/>
    <rect x="6" y="12" width="7" height="13" rx="3" fill="#E87A9A"/>
    <path d="M14,-19 q5,-7 11,-3" stroke="#E87A9A" stroke-width="4" fill="none"/>
  </g></g>
  <g transform="translate(410,296)"><g class="cow-g">
    <rect x="-46" y="16" width="11" height="36" rx="4" fill="#EFE6D8"/>
    <rect x="-16" y="16" width="11" height="36" rx="4" fill="#EFE6D8"/>
    <rect x="14" y="16" width="11" height="36" rx="4" fill="#EFE6D8"/>
    <rect x="40" y="16" width="11" height="36" rx="4" fill="#EFE6D8"/>
    <ellipse cx="0" cy="-8" rx="62" ry="38" fill="#FFF9F0"/>
    <ellipse cx="-26" cy="-18" rx="17" ry="13" fill="#5A3B32"/>
    <ellipse cx="28" cy="2" rx="15" ry="11" fill="#5A3B32"/>
    <ellipse cx="8" cy="-30" rx="11" ry="8" fill="#5A3B32"/>
    <path d="M60,-18 q26,8 18,46" stroke="#FFF9F0" stroke-width="7" fill="none"/>
    <ellipse cx="79" cy="30" rx="7" ry="10" fill="#5A3B32"/>
    <g transform="translate(-80,-36)">
      <ellipse cx="-24" cy="-8" rx="11" ry="6" fill="#EFE6D8"/>
      <ellipse cx="24" cy="-8" rx="11" ry="6" fill="#EFE6D8"/>
      <circle r="24" fill="#FFF9F0"/>
      <ellipse cx="0" cy="12" rx="17" ry="12" fill="#FFB3C6"/>
      <circle cx="-6" cy="10" r="2.2" fill="#B5687F"/>
      <circle cx="6" cy="10" r="2.2" fill="#B5687F"/>
      <circle cx="-9" cy="-4" r="3" fill="#5A3B32"/>
      <circle cx="9" cy="-4" r="3" fill="#5A3B32"/>
    </g>
  </g></g>
  <g transform="translate(648,394)"><g class="duck-g">
    <ellipse cx="0" cy="0" rx="27" ry="16" fill="#FFD93D"/>
    <circle cx="21" cy="-15" r="12" fill="#FFD93D"/>
    <path d="M31,-15 l17,4 l-17,5 z" fill="#FF9F45"/>
    <circle cx="24" cy="-18" r="2.4" fill="#5A3B32"/>
    <path d="M-12,-4 q14,-12 27,0" stroke="#FFC53D" stroke-width="4" fill="none"/>
  </g></g>
  <g class="bub cow-a">
    <rect x="226" y="176" width="86" height="44" rx="14" fill="#FFF9F0"/>
    <path d="M284 218 L294 240 L306 216 Z" fill="#FFF9F0"/>
    <text x="269" y="206" text-anchor="middle" font-size="24" font-weight="bold" fill="#5A3B32">Moo!</text>
  </g>
  <g class="bub cow-b">
    <rect x="470" y="166" width="86" height="44" rx="14" fill="#FFF9F0"/>
    <path d="M500 208 L494 230 L516 208 Z" fill="#FFF9F0"/>
    <text x="513" y="196" text-anchor="middle" font-size="24" font-weight="bold" fill="#5A3B32">Moo!</text>
  </g>
  <g class="bub cow-c" font-size="22" font-weight="bold" fill="#5A3B32">
    <text class="mini-moo mm1" x="140" y="120">moo~</text>
    <text class="mini-moo mm2" x="420" y="100">moo~</text>
    <text class="mini-moo mm3" x="680" y="130">moo~</text>
  </g>
  <g class="bub duck-a">
    <rect x="548" y="288" width="100" height="44" rx="14" fill="#FFF9F0"/>
    <path d="M592 330 L598 352 L614 328 Z" fill="#FFF9F0"/>
    <text x="598" y="318" text-anchor="middle" font-size="22" font-weight="bold" fill="#4DA8DA">Quack!</text>
  </g>
  <g class="bub duck-b" font-size="20" font-weight="bold" fill="#4DA8DA">
    <text class="mini-moo qk1" x="480" y="250">quack~</text>
    <text class="mini-moo qk2" x="726" y="236">quack~</text>
  </g>
</svg>`,

    /* ---------------- 巴士：糖果小镇 · 车轮/雨刮/喇叭 ---------------- */
    bus: `
<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="bs-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#BFE7FF"/><stop offset="1" stop-color="#E8F7FF"/>
    </linearGradient>
    <pattern id="bs-win" width="36" height="46" patternUnits="userSpaceOnUse">
      <rect x="8" y="10" width="16" height="22" rx="3" fill="#FFF9F0" opacity=".9"/>
    </pattern>
  </defs>
  <rect width="800" height="450" fill="url(#bs-sky)"/>
  <g transform="translate(724,58)">${SUN_RAYS}
    <circle r="26" fill="#FFD93D" stroke="#FFB800" stroke-width="4"/>
  </g>
  <g transform="translate(150,64)"><g class="cloud-drift cd1" fill="#FFFFFF">
    <ellipse cx="0" cy="0" rx="40" ry="16"/><ellipse cx="27" cy="-10" rx="25" ry="12"/>
  </g></g>
  <g transform="translate(560,96)"><g class="cloud-drift cd2" fill="#FFFFFF" opacity=".9">
    <ellipse cx="0" cy="0" rx="34" ry="14"/><ellipse cx="23" cy="-9" rx="21" ry="11"/>
  </g></g>
  <g>
    <rect x="28" y="150" width="92" height="152" rx="8" fill="#FFB3C6"/>
    <rect x="28" y="150" width="92" height="152" rx="8" fill="url(#bs-win)"/>
    <path d="M24,150 L74,120 L124,150 Z" fill="#E87A9A"/>
    <rect x="142" y="108" width="100" height="194" rx="8" fill="#A8D8FF"/>
    <rect x="142" y="108" width="100" height="194" rx="8" fill="url(#bs-win)"/>
    <path d="M138,108 L192,74 L246,108 Z" fill="#7BB8E8"/>
    <rect x="262" y="170" width="82" height="132" rx="8" fill="#FFF3B0"/>
    <rect x="262" y="170" width="82" height="132" rx="8" fill="url(#bs-win)"/>
    <path d="M258,170 L303,142 L348,170 Z" fill="#E8D06A"/>
    <rect x="470" y="128" width="98" height="174" rx="8" fill="#A8E6CF"/>
    <rect x="470" y="128" width="98" height="174" rx="8" fill="url(#bs-win)"/>
    <path d="M466,128 L519,96 L572,128 Z" fill="#7BC9A4"/>
    <rect x="588" y="158" width="90" height="144" rx="8" fill="#D8B4FE"/>
    <rect x="588" y="158" width="90" height="144" rx="8" fill="url(#bs-win)"/>
    <path d="M584,158 L633,130 L682,158 Z" fill="#B587E8"/>
    <rect x="698" y="118" width="82" height="184" rx="8" fill="#FFCBA4"/>
    <rect x="698" y="118" width="82" height="184" rx="8" fill="url(#bs-win)"/>
    <path d="M694,118 L739,90 L784,118 Z" fill="#E8A470"/>
  </g>
  <g>
    <rect x="118" y="322" width="9" height="30" rx="3" fill="#8A5A36"/>
    <circle cx="122" cy="308" r="24" fill="#6BCB77"/>
    <rect x="238" y="330" width="9" height="26" rx="3" fill="#8A5A36"/>
    <circle cx="242" cy="316" r="21" fill="#57B85F"/>
    <rect x="562" y="326" width="9" height="28" rx="3" fill="#8A5A36"/>
    <circle cx="566" cy="312" r="22" fill="#6BCB77"/>
  </g>
  <rect y="356" width="800" height="94" fill="#5C677D"/>
  <rect y="356" width="800" height="10" fill="#7A8598"/>
  <g class="dashes" fill="#FFD93D">
    <rect x="10" y="398" width="58" height="9" rx="4"/>
    <rect x="130" y="398" width="58" height="9" rx="4"/>
    <rect x="250" y="398" width="58" height="9" rx="4"/>
    <rect x="370" y="398" width="58" height="9" rx="4"/>
    <rect x="490" y="398" width="58" height="9" rx="4"/>
    <rect x="610" y="398" width="58" height="9" rx="4"/>
    <rect x="730" y="398" width="58" height="9" rx="4"/>
  </g>
  <g transform="translate(400,290)">
    <g class="bus-body">
      <rect x="-192" y="-88" width="384" height="142" rx="22" fill="#FFC53D" stroke="#E8A418" stroke-width="5"/>
      <rect x="-192" y="-88" width="384" height="28" rx="14" fill="#FFE08A"/>
      <rect x="-192" y="6" width="384" height="13" fill="#FF9F45"/>
      <rect x="-172" y="-56" width="54" height="44" rx="9" fill="#BFE7FF" stroke="#E8A418" stroke-width="4"/>
      <rect x="-108" y="-56" width="54" height="44" rx="9" fill="#BFE7FF" stroke="#E8A418" stroke-width="4"/>
      <rect x="-44" y="-56" width="54" height="44" rx="9" fill="#BFE7FF" stroke="#E8A418" stroke-width="4"/>
      <rect class="door-l" x="22" y="-56" width="24" height="108" rx="6" fill="#9AD4F5" stroke="#E8A418" stroke-width="4"/>
      <rect class="door-r" x="48" y="-56" width="24" height="108" rx="6" fill="#9AD4F5" stroke="#E8A418" stroke-width="4"/>
      <rect x="88" y="-56" width="44" height="44" rx="9" fill="#BFE7FF" stroke="#E8A418" stroke-width="4"/>
      <g transform="translate(110,-16)">
        <g class="wiper"><rect x="-3" y="-30" width="6" height="32" rx="3" fill="#5C677D"/></g>
      </g>
      <circle cx="176" cy="28" r="9" fill="#FFF6D6" stroke="#E8A418" stroke-width="3"/>
      <g class="people">
        <circle cx="-145" cy="-28" r="11" fill="#FFCBA4"/>
        <rect x="-157" y="-20" width="24" height="12" rx="6" fill="#FF6B6B"/>
        <circle cx="-81" cy="-28" r="11" fill="#FFCBA4"/>
        <rect x="-93" y="-20" width="24" height="12" rx="6" fill="#6BCB77"/>
        <circle cx="-17" cy="-28" r="11" fill="#FFCBA4"/>
        <rect x="-29" y="-20" width="24" height="12" rx="6" fill="#4D96FF"/>
      </g>
      <g class="puffs" fill="#E8E8E8">
        <circle class="pf pf1" cx="-208" cy="40" r="10"/>
        <circle class="pf pf2" cx="-226" cy="46" r="7"/>
        <circle class="pf pf3" cx="-240" cy="50" r="5"/>
      </g>
    </g>
    <g transform="translate(-104,56)"><g class="wheel">
      <circle r="31" fill="#3A4450"/><circle r="14" fill="#D8E0E8"/>
      <rect x="-3" y="-27" width="6" height="54" rx="3" fill="#9AA6B2"/>
      <rect x="-27" y="-3" width="54" height="6" rx="3" fill="#9AA6B2"/>
    </g></g>
    <g transform="translate(112,56)"><g class="wheel">
      <circle r="31" fill="#3A4450"/><circle r="14" fill="#D8E0E8"/>
      <rect x="-3" y="-27" width="6" height="54" rx="3" fill="#9AA6B2"/>
      <rect x="-27" y="-3" width="54" height="6" rx="3" fill="#9AA6B2"/>
    </g></g>
  </g>
  <g class="bub beep1">
    <rect x="236" y="88" width="104" height="46" rx="15" fill="#FFF9F0"/>
    <path d="M316 130 L330 152 L342 128 Z" fill="#FFF9F0"/>
    <text x="288" y="120" text-anchor="middle" font-size="24" font-weight="bold" fill="#FF9F45">Beep!</text>
  </g>
  <g class="bub beep2">
    <rect x="420" y="60" width="104" height="46" rx="15" fill="#FFF9F0"/>
    <path d="M470 104 L478 126 L494 102 Z" fill="#FFF9F0"/>
    <text x="472" y="92" text-anchor="middle" font-size="24" font-weight="bold" fill="#FF9F45">Beep!</text>
  </g>
</svg>`,

    /* ---------------- 小船：溪流 · 划桨 · 梦境夜幕 ---------------- */
    boat: `
<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="bt-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#FFE9A8"/><stop offset="1" stop-color="#FFF6DC"/>
    </linearGradient>
    <linearGradient id="bt-sea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#3EC1D3"/><stop offset="1" stop-color="#2AA3B5"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#bt-sky)"/>
  <g transform="translate(636,100)">
    <circle class="sunhalo" r="58" fill="#FFD93D" opacity=".35"/>
    <circle r="44" fill="#FFD93D" stroke="#FFB800" stroke-width="4"/>
  </g>
  <path d="M0,282 Q200,232 420,278 T800,266 L800,320 L0,320 Z" fill="#B8E6C4"/>
  <path d="M758,300 q-8,-42 4,-70" stroke="#8A5A36" stroke-width="5" fill="none"/>
  <ellipse cx="764" cy="226" rx="6" ry="13" fill="#C4894A"/>
  <path d="M778,300 q-2,-36 8,-58" stroke="#8A5A36" stroke-width="5" fill="none"/>
  <ellipse cx="788" cy="238" rx="5" ry="11" fill="#C4894A"/>
  <rect y="300" width="800" height="150" fill="url(#bt-sea)"/>
  <g class="wave wv1"><path d="M-120,322 q30,-13 60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0" fill="none" stroke="#FFFFFF" stroke-width="5" opacity=".6" stroke-linecap="round"/></g>
  <g class="wave wv2"><path d="M-120,364 q30,-12 60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0" fill="none" stroke="#FFFFFF" stroke-width="4" opacity=".4" stroke-linecap="round"/></g>
  <g class="wave wv3"><path d="M-120,414 q30,-12 60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0 t60,0" fill="none" stroke="#FFFFFF" stroke-width="4" opacity=".3" stroke-linecap="round"/></g>
  <ellipse cx="110" cy="356" rx="26" ry="9" fill="#6BCB77"/>
  <ellipse cx="700" cy="424" rx="30" ry="10" fill="#57B85F"/>
  <g transform="translate(380,264)">
    <g class="boat-pos">
      <g class="boat">
        <path d="M-96,-8 C-64,38 64,38 96,-8 Z" fill="#FF6B6B"/>
        <rect x="-96" y="-14" width="192" height="10" rx="5" fill="#E85555"/>
        <rect x="-3" y="-104" width="6" height="92" fill="#8A5A36"/>
        <path d="M6,-98 L6,-34 L76,-34 Z" fill="#FFF9F0" stroke="#E8E0D0" stroke-width="3"/>
        <path d="M6,-60 L58,-60 L50,-48 L6,-48 Z" fill="#4D96FF"/>
        <path d="M0,-104 l-27,7 l27,7 z" fill="#FFD93D"/>
        <g transform="translate(-88,4)"><g class="oar oar-l">
          <rect x="-4" y="-4" width="68" height="8" rx="4" fill="#C4894A"/>
          <ellipse cx="66" cy="0" rx="12" ry="7" fill="#8A5A36"/>
        </g></g>
        <g transform="translate(88,4)"><g class="oar oar-r">
          <rect x="-64" y="-4" width="68" height="8" rx="4" fill="#C4894A"/>
          <ellipse cx="-66" cy="0" rx="12" ry="7" fill="#8A5A36"/>
        </g></g>
      </g>
    </g>
  </g>
  <g transform="translate(560,354)"><g class="fish">
    <path d="M-18,0 Q0,-15 17,0 Q0,15 -18,0 Z" fill="#FF9F45"/>
    <path d="M-18,0 l-13,-10 l0,20 z" fill="#E87820"/>
    <circle cx="8" cy="-3" r="2.4" fill="#5A3B32"/>
  </g></g>
  <g class="spk" fill="#FFF9F0">
    <path class="s1" d="M236,332 l3.5,9 l9,3.5 l-9,3.5 l-3.5,9 l-3.5,-9 l-9,-3.5 l9,-3.5 z"/>
    <path class="s2" d="M660,316 l3,8 l8,3 l-8,3 l-3,8 l-3,-8 l-8,-3 l8,-3 z"/>
    <path class="s3" d="M150,300 l3,8 l8,3 l-8,3 l-3,8 l-3,-8 l-8,-3 l8,-3 z"/>
  </g>
  <rect class="dream-sky" width="800" height="450" fill="#2E2A6B" opacity="0"/>
  <g class="dream-stars" fill="#FFFFFF" opacity="0">
    <circle class="tw" cx="110" cy="76" r="2.6" style="animation-delay:.2s"/>
    <circle class="tw" cx="250" cy="110" r="2.2" style="animation-delay:1s"/>
    <circle class="tw" cx="420" cy="70" r="3" style="animation-delay:.6s"/>
    <circle class="tw" cx="560" cy="120" r="2.4" style="animation-delay:1.5s"/>
    <circle class="tw" cx="700" cy="80" r="2.8" style="animation-delay:.9s"/>
    <circle class="tw" cx="340" cy="150" r="2" style="animation-delay:1.8s"/>
  </g>
  <g class="dream-moon" opacity="0" transform="translate(160,90)">
    <circle r="26" fill="#FFF6D6"/>
    <circle cx="-8" cy="-6" r="5" fill="#F0E2AE"/>
    <circle cx="7" cy="8" r="4" fill="#F0E2AE"/>
  </g>
</svg>`,

    /* ---------------- 黑绵羊：草甸 · 三袋羊毛 · 小男孩 ---------------- */
    sheep: `
<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="sh-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#B8F1E0"/><stop offset="1" stop-color="#EFFBF3"/>
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#sh-sky)"/>
  <g transform="translate(84,72)">${SUN_RAYS}
    <circle r="28" fill="#FFD93D" stroke="#FFB800" stroke-width="4"/>
  </g>
  <g transform="translate(240,60)"><g class="cloud-drift cd1" fill="#FFFFFF">
    <ellipse cx="0" cy="0" rx="40" ry="16"/><ellipse cx="27" cy="-10" rx="25" ry="12"/>
  </g></g>
  <g transform="translate(580,100)"><g class="cloud-drift cd2" fill="#FFFFFF" opacity=".9">
    <ellipse cx="0" cy="0" rx="34" ry="14"/><ellipse cx="23" cy="-9" rx="21" ry="11"/>
  </g></g>
  <path d="M0,300 Q260,238 520,294 T800,284 L800,450 L0,450 Z" fill="#8FD9A0"/>
  <path d="M0,360 Q300,318 600,354 T800,344 L800,450 L0,450 Z" fill="#6BCB77"/>
  <g>
    <circle cx="140" cy="404" r="5" fill="#FF8FAB"/><circle cx="146" cy="410" r="4" fill="#FFD93D"/>
    <circle cx="420" cy="416" r="5" fill="#FFFFFF"/><circle cx="426" cy="421" r="4" fill="#FFD93D"/>
    <circle cx="620" cy="430" r="5" fill="#FF8FAB"/><circle cx="626" cy="435" r="4" fill="#FFFFFF"/>
    <circle cx="80" cy="436" r="5" fill="#FFFFFF"/><circle cx="86" cy="440" r="4" fill="#FFD93D"/>
    <circle cx="520" cy="326" r="4" fill="#FFFFFF"/>
    <circle cx="300" cy="340" r="4" fill="#FF8FAB"/>
  </g>
  <path d="M310,450 Q430,380 560,354 Q680,332 780,300 L800,296 L800,450 Z" fill="#F5E6C4"/>
  <ellipse cx="470" cy="392" rx="10" ry="4" fill="#E0C9A0"/>
  <ellipse cx="580" cy="360" rx="9" ry="4" fill="#E0C9A0"/>
  <ellipse cx="660" cy="340" rx="8" ry="3.5" fill="#E0C9A0"/>
  <g transform="translate(240,296)"><g class="sheep-g">
    <rect x="-36" y="26" width="10" height="32" rx="4" fill="#4A443C"/>
    <rect x="-12" y="26" width="10" height="32" rx="4" fill="#4A443C"/>
    <rect x="10" y="26" width="10" height="32" rx="4" fill="#4A443C"/>
    <rect x="30" y="26" width="10" height="32" rx="4" fill="#4A443C"/>
    <circle cx="-22" cy="-4" r="30" fill="#FFF9F0" stroke="#EDE3D0" stroke-width="3"/>
    <circle cx="8" cy="-10" r="32" fill="#FFF9F0" stroke="#EDE3D0" stroke-width="3"/>
    <circle cx="28" cy="2" r="26" fill="#FFF9F0" stroke="#EDE3D0" stroke-width="3"/>
    <circle cx="54" cy="-6" r="10" fill="#FFF9F0" stroke="#EDE3D0" stroke-width="3"/>
    <g transform="translate(-52,-26)">
      <ellipse cx="-10" cy="-16" rx="10" ry="6" fill="#4A443C"/>
      <ellipse cx="12" cy="-16" rx="10" ry="6" fill="#4A443C"/>
      <circle r="22" fill="#4A443C"/>
      <circle cx="-8" cy="-4" r="3.6" fill="#FFFFFF"/>
      <circle cx="-7" cy="-4" r="1.8" fill="#26221E"/>
      <ellipse cx="6" cy="11" rx="10" ry="7" fill="#6B6257"/>
    </g>
  </g></g>
  <g class="bub baa-bub">
    <rect x="88" y="176" width="88" height="46" rx="15" fill="#FFF9F0"/>
    <path d="M146 218 L154 240 L170 216 Z" fill="#FFF9F0"/>
    <text x="132" y="208" text-anchor="middle" font-size="24" font-weight="bold" fill="#4A443C">Baa!</text>
  </g>
  <g transform="translate(560,330)"><g class="bag bag1">
    <circle cx="-8" cy="-38" r="9" fill="#FFF9F0"/>
    <circle cx="7" cy="-40" r="8" fill="#FFF9F0"/>
    <path d="M-26,26 L-26,-6 Q-26,-30 0,-30 Q26,-30 26,-6 L26,26 Z" fill="#E8B04B" stroke="#C4894A" stroke-width="4"/>
    <path d="M-14,-28 q14,10 28,0" stroke="#C4894A" stroke-width="4" fill="none"/>
  </g></g>
  <g transform="translate(648,318)"><g class="bag bag2">
    <circle cx="-8" cy="-38" r="9" fill="#FFF9F0"/>
    <circle cx="7" cy="-40" r="8" fill="#FFF9F0"/>
    <path d="M-26,26 L-26,-6 Q-26,-30 0,-30 Q26,-30 26,-6 L26,26 Z" fill="#E8B04B" stroke="#C4894A" stroke-width="4"/>
    <path d="M-14,-28 q14,10 28,0" stroke="#C4894A" stroke-width="4" fill="none"/>
  </g></g>
  <g transform="translate(736,306)"><g class="bag bag3">
    <circle cx="-8" cy="-38" r="9" fill="#FFF9F0"/>
    <circle cx="7" cy="-40" r="8" fill="#FFF9F0"/>
    <path d="M-26,26 L-26,-6 Q-26,-30 0,-30 Q26,-30 26,-6 L26,26 Z" fill="#E8B04B" stroke="#C4894A" stroke-width="4"/>
    <path d="M-14,-28 q14,10 28,0" stroke="#C4894A" stroke-width="4" fill="none"/>
  </g></g>
  <g class="icon hat-g"><g transform="translate(560,258)">
    <ellipse cx="0" cy="10" rx="27" ry="8" fill="#D8A85A"/>
    <path d="M-14,10 q-4,-24 14,-26 q18,2 14,26 z" fill="#C4894A"/>
  </g></g>
  <g class="icon bonnet-g"><g transform="translate(648,246)">
    <path d="M-18,8 a18,18 0 0 1 36,0 z" fill="#FFF9F0" stroke="#EDE3D0" stroke-width="3"/>
    <path d="M-18,8 h36" stroke="#FF8FAB" stroke-width="4"/>
  </g></g>
  <g transform="translate(742,238)"><g class="boy-g">
    <circle cy="-30" r="11" fill="#FFCBA4"/>
    <path d="M-11,-32 a11,11 0 0 1 22,0 z" fill="#8A5A36"/>
    <rect x="-10" y="-20" width="20" height="26" rx="8" fill="#4D96FF"/>
    <rect x="-8" y="4" width="6" height="17" rx="3" fill="#5C677D"/>
    <rect x="2" y="4" width="6" height="17" rx="3" fill="#5C677D"/>
  </g></g>
</svg>`
  },

  /* ---------------- 首页横幅：彩虹草甸 ---------------- */
  hero: `
<svg viewBox="0 0 800 330" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="hr-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#A8E4FF"/><stop offset="1" stop-color="#FFF6DC"/>
    </linearGradient>
  </defs>
  <rect width="800" height="330" fill="url(#hr-sky)"/>
  <g transform="translate(716,58)">${SUN_RAYS}
    <circle r="30" fill="#FFD93D" stroke="#FFB800" stroke-width="4"/>
  </g>
  <g transform="translate(150,64)"><g class="cloud-drift cd1" fill="#FFFFFF">
    <ellipse cx="0" cy="0" rx="42" ry="16"/><ellipse cx="28" cy="-11" rx="26" ry="13"/>
  </g></g>
  <g transform="translate(460,44)"><g class="cloud-drift cd2" fill="#FFFFFF" opacity=".9">
    <ellipse cx="0" cy="0" rx="36" ry="14"/><ellipse cx="24" cy="-9" rx="22" ry="11"/>
  </g></g>
  <g fill="none" stroke-linecap="round" opacity=".75">
    <path d="M170,330 A230,230 0 0 1 630,330" stroke="#FF6B6B" stroke-width="18"/>
    <path d="M188,330 A212,212 0 0 1 612,330" stroke="#FF9F45" stroke-width="18"/>
    <path d="M206,330 A194,194 0 0 1 594,330" stroke="#FFD93D" stroke-width="18"/>
    <path d="M224,330 A176,176 0 0 1 576,330" stroke="#6BCB77" stroke-width="18"/>
    <path d="M242,330 A158,158 0 0 1 558,330" stroke="#4D96FF" stroke-width="18"/>
  </g>
  <path d="M0,252 Q220,204 440,248 T800,236 L800,330 L0,330 Z" fill="#8FD9A0"/>
  <path d="M0,288 Q300,248 600,284 T800,276 L800,330 L0,330 Z" fill="#6BCB77"/>
  <g transform="translate(120,110)"><g class="bob b1"><path d="M0,-16 L4,-4 L16,0 L4,4 L0,16 L-4,4 L-16,0 L-4,-4 Z" fill="#FFD93D" stroke="#FFB800" stroke-width="2"/></g></g>
  <g transform="translate(680,150)"><g class="bob b2"><path d="M0,-13 L3.5,-3.5 L13,0 L3.5,3.5 L0,13 L-3.5,3.5 L-13,0 L-3.5,-3.5 Z" fill="#FF9F45" stroke="#E87820" stroke-width="2"/></g></g>
  <g transform="translate(430,66)"><g class="bob b3"><path d="M0,-11 L3,-3 L11,0 L3,3 L0,11 L-3,3 L-11,0 L-3,-3 Z" fill="#FF8FAB" stroke="#E87A9A" stroke-width="2"/></g></g>
  <g>
    <circle cx="100" cy="298" r="5" fill="#FF8FAB"/><circle cx="106" cy="303" r="4" fill="#FFD93D"/>
    <circle cx="700" cy="304" r="5" fill="#FFFFFF"/><circle cx="706" cy="309" r="4" fill="#FFD93D"/>
    <circle cx="400" cy="312" r="5" fill="#FF9F45"/><circle cx="406" cy="316" r="4" fill="#FFFFFF"/>
  </g>
</svg>`,

  /* 挂载场景到容器（保留 mini 等附加 class） */
  mount(id, el) {
    el._scene = id;
    el._sceneState = {};
    el.className = el.className.replace(/stage-[\w-]+/g, '').trim();
    el.classList.add('stage-' + id);
    el.innerHTML = this.svg[id];
  },

  mountHero(el) {
    el.innerHTML = this.hero;
  },

  /* 歌词第 i 句 → 场景动画动作（含"保持在台"状态） */
  act(id, el, i) {
    el.className = el.className.replace(/act-[\w-]+/g, '').trim();
    const st = el._sceneState || (el._sceneState = {});
    if (id === 'twinkle') {
      if (st.rise) el.classList.add('act-is-high');
      if (i === 2) st.rise = true;
      const names = ['star-pulse', 'star-ask', 'star-rise', 'star-diamond', 'star-pulse', 'star-ask'];
      el.classList.add('act-' + (names[i] || 'star-pulse'));
    } else if (id === 'farm') {
      const v = i < 5 ? 0 : 1, p = i % 5;
      if (p === 1) { if (v === 0) st.cow = true; else st.duck = true; }
      if (st.cow) el.classList.add('act-has-cow');
      if (st.duck) el.classList.add('act-has-duck');
      const names = ['song-start', v ? 'show-duck' : 'show-cow',
                     v ? 'sound-duck-a' : 'sound-cow-a',
                     v ? 'sound-duck-b' : 'sound-cow-b', 'cheer'];
      el.classList.add('act-' + names[p]);
    } else if (id === 'bus') {
      const v = Math.floor(i / 4), p = i % 4;
      if (i === 0) st.drive = true;
      if (st.drive) el.classList.add('act-driving');
      el.classList.add('act-' + (['go-wheels', 'go-wipers', 'go-horn'][v] || 'go-wheels'));
      if (p === 3) el.classList.add('act-bounce');
    } else if (id === 'boat') {
      if (i === 1) st.flow = true;
      if (st.flow) el.classList.add('act-has-flow');
      const names = ['boat-row', 'boat-flow', 'boat-merry', 'boat-dream'];
      el.classList.add('act-' + (names[i] || 'boat-row'));
    } else if (id === 'sheep') {
      if (i === 1) st.bags = true;
      if (i === 2) st.give = true;
      if (st.bags) el.classList.add('act-has-bags');
      if (st.give) el.classList.add('act-has-give');
      const names = ['sheep-baa', 'sheep-bags', 'sheep-give', 'sheep-boy'];
      el.classList.add('act-' + (names[i] || 'sheep-baa'));
    } else if (GENERIC_CFG[id]) {
      const la = GENERIC_CFG[id].lineActors;
      el.classList.add('act-g' + (la && la[i] != null ? la[i] : 0));
    }
  }
};

/* ==========================================================
   通用 emoji 场景（儿歌库扩展：18 首新歌）
   cfg: sky[渐变双色], ground[地面色], decor[day/night/sea],
        actors[[emoji, x, y, 字号]], lineActors[每句歌词点亮的角色]
   ========================================================== */
const GENERIC_CFG = {
  hello:    { sky: ['#FFE9C4', '#FFF6DC'], ground: '#8FD9A0', decor: 'day',
              actors: [['👋', 250, 205, 96], ['😊', 405, 195, 88], ['🌟', 555, 205, 84]], lineActors: [0, 0, 1, 2] },
  finger:   { sky: ['#C9E9F8', '#EAF7FF'], ground: '#A8D07E', decor: 'day',
              actors: [['👆', 265, 205, 92], ['🏠', 415, 200, 86], ['👃', 560, 205, 84]], lineActors: [0, 0, 1, 2] },
  body:     { sky: ['#D4F5E9', '#F0FBF4'], ground: '#8FD9A0', decor: 'day',
              actors: [['🧒', 265, 205, 94], ['🦵', 420, 210, 84], ['👂', 565, 200, 80]], lineActors: [0, 0, 1, 2] },
  walking:  { sky: ['#C9E9F8', '#EAF7FF'], ground: '#A8D07E', decor: 'day',
              actors: [['🚶', 265, 210, 92], ['🏃', 425, 205, 88], ['🛑', 570, 205, 78]], lineActors: [0, 1, 0, 2] },
  happy:    { sky: ['#FFE9C4', '#FFF6DC'], ground: '#8FD9A0', decor: 'day',
              actors: [['😄', 265, 200, 96], ['👏', 420, 208, 86], ['🎉', 565, 200, 84]], lineActors: [0, 0, 1, 0] },
  circle:   { sky: ['#FFDCE9', '#FFF0F6'], ground: '#A8D07E', decor: 'day',
              actors: [['👫', 270, 210, 92], ['🔵', 430, 195, 84], ['🪑', 570, 210, 78]], lineActors: [0, 0, 1, 2] },
  alphabet: { sky: ['#C9E9F8', '#EAF7FF'], ground: '#A8D07E', decor: 'day',
              actors: [['🔤', 265, 200, 88], ['🅰️', 420, 200, 84], ['🎵', 565, 200, 80]], lineActors: [0, 0, 1, 2, 0, 2] },
  clean:    { sky: ['#D4F5E9', '#F0FBF4'], ground: '#A8D07E', decor: 'day',
              actors: [['🧹', 265, 210, 90], ['🧸', 425, 205, 84], ['📚', 570, 210, 82]], lineActors: [0, 0, 2, 1] },
  bath:     { sky: ['#C9E9F8', '#EAF7FF'], ground: '#4DA8DA', decor: 'day',
              actors: [['🛁', 275, 220, 94], ['🫧', 440, 175, 80], ['🧼', 575, 220, 78]], lineActors: [0, 0, 1, 2] },
  hungry:   { sky: ['#FFE9C4', '#FFF6DC'], ground: '#8FD9A0', decor: 'day',
              actors: [['🍎', 265, 205, 90], ['🥤', 425, 210, 84], ['😋', 570, 200, 86]], lineActors: [0, 1, 2, 1] },
  pink:     { sky: ['#FFDCE9', '#FFF0F6'], ground: '#A8D07E', decor: 'day',
              actors: [['🐷', 265, 210, 94], ['🔍', 425, 200, 82], ['🌸', 570, 205, 80]], lineActors: [0, 0, 1, 2] },
  ducks:    { sky: ['#C9E9F8', '#EAF7FF'], ground: '#4DA8DA', decor: 'day',
              actors: [['🦆', 255, 215, 86], ['🦆', 400, 208, 78], ['🦆', 545, 215, 86]], lineActors: [0, 0, 1, 2] },
  bed:      { sky: ['#3B3486', '#1E1A4A'], ground: '#4A4290', decor: 'night',
              actors: [['🛏️', 280, 225, 94], ['🧸', 440, 220, 84], ['🌙', 580, 150, 78]], lineActors: [0, 1, 0, 2] },
  open:     { sky: ['#FFE9C4', '#FFF6DC'], ground: '#8FD9A0', decor: 'day',
              actors: [['🤲', 265, 205, 94], ['👐', 425, 205, 88], ['👏', 570, 205, 84]], lineActors: [0, 1, 0, 2] },
  shoes:    { sky: ['#C9E9F8', '#EAF7FF'], ground: '#A8D07E', decor: 'day',
              actors: [['👟', 265, 210, 88], ['🧥', 425, 205, 86], ['🎒', 570, 210, 84]], lineActors: [0, 1, 2, 2] },
  week:     { sky: ['#D4F5E9', '#F0FBF4'], ground: '#A8D07E', decor: 'day',
              actors: [['📅', 265, 205, 90], ['🗓️', 425, 200, 82], ['☀️', 570, 185, 80]], lineActors: [0, 0, 1, 2] },
  goaway:   { sky: ['#B8A7E8', '#E8E4FA'], ground: '#7A6FB8', decor: 'night',
              actors: [['👻', 265, 205, 86], ['💪', 425, 205, 90], ['🌈', 575, 190, 80]], lineActors: [0, 0, 1, 2] },
  shark:    { sky: ['#7EC8E8', '#CBEAF7'], ground: '#2AA3B5', decor: 'sea',
              actors: [['🦈', 285, 215, 96], ['🐟', 450, 195, 80], ['🌊', 585, 225, 84]], lineActors: [0, 0, 1, 0] }
};

function genericScene(id, cfg) {
  const gid = 'gs-' + id;
  let decor = '';
  if (cfg.decor === 'day') {
    decor =
      '<g transform="translate(708,74)">' + SUN_RAYS +
        '<circle r="30" fill="#FFD93D" stroke="#FFB800" stroke-width="4"/></g>' +
      '<g transform="translate(200,84)"><g class="cloud-drift cd1" fill="#FFFFFF">' +
        '<ellipse cx="0" cy="0" rx="40" ry="16"/><ellipse cx="27" cy="-10" rx="25" ry="12"/></g></g>' +
      '<g transform="translate(520,60)"><g class="cloud-drift cd2" fill="#FFFFFF" opacity=".9">' +
        '<ellipse cx="0" cy="0" rx="34" ry="14"/><ellipse cx="23" cy="-9" rx="21" ry="11"/></g></g>';
  } else if (cfg.decor === 'night') {
    decor =
      '<g fill="#FFFFFF">' +
        '<circle class="tw" cx="90" cy="70" r="2.6" style="animation-delay:.3s"/>' +
        '<circle class="tw" cx="250" cy="110" r="2.2" style="animation-delay:1.1s"/>' +
        '<circle class="tw" cx="430" cy="60" r="2.8" style="animation-delay:.7s"/>' +
        '<circle class="tw" cx="600" cy="120" r="2.2" style="animation-delay:1.6s"/>' +
      '</g>' +
      '<g transform="translate(680,86)"><circle r="32" fill="#FFF6D6"/><circle cx="-9" cy="-8" r="6" fill="#F0E2AE"/></g>';
  } else if (cfg.decor === 'sea') {
    decor =
      '<g fill="#FFFFFF" opacity=".55">' +
        '<circle class="tw" cx="120" cy="110" r="7" style="animation-delay:.2s"/>' +
        '<circle class="tw" cx="320" cy="70" r="5" style="animation-delay:1s"/>' +
        '<circle class="tw" cx="620" cy="100" r="6" style="animation-delay:.6s"/>' +
        '<circle class="tw" cx="500" cy="150" r="4" style="animation-delay:1.4s"/>' +
      '</g>';
  }
  const actors = cfg.actors.map((a, k) =>
    '<g transform="translate(' + a[1] + ',' + a[2] + ')"><g class="gact g' + k + '">' +
    '<text y="' + Math.round(a[3] * 0.35) + '" font-size="' + a[3] + '" text-anchor="middle">' + a[0] + '</text>' +
    '</g></g>').join('');
  return '<svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice">' +
    '<defs><linearGradient id="' + gid + '" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="' + cfg.sky[0] + '"/><stop offset="1" stop-color="' + cfg.sky[1] + '"/>' +
    '</linearGradient></defs>' +
    '<rect width="800" height="450" fill="url(#' + gid + ')"/>' + decor +
    '<path d="M0,332 Q400,296 800,328 L800,450 L0,450 Z" fill="' + cfg.ground + '"/>' +
    actors +
  '</svg>';
}

Object.keys(GENERIC_CFG).forEach(id => { Scenes.svg[id] = genericScene(id, GENERIC_CFG[id]); });
