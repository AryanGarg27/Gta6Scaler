const HEADLINES = [
  'GTA 6 PRE-ORDERS OPEN JUNE 25, 2026  —  ROCKSTAR OFFICIAL',
  'RELEASE DATE: NOVEMBER 19, 2026  —  PS5 & XBOX SERIES X/S ONLY',
  'EXPECTED STANDARD PRICE: $79.99  —  CONFIRMED JUNE 25',
  'PROTAGONISTS: LUCIA CAMINOS & JASON DUVAL',
  'SETTING: LEONIDA  —  VICE CITY RETURNS',
  'NO PC VERSION AT LAUNCH  —  FOLLOW @GTA6SCALER FOR UPDATES',
  'BUDGET: $1 BILLION+  —  MOST EXPENSIVE GAME EVER MADE',
];

export default function NewsTicker() {
  const text = HEADLINES.join('     ///     ');

  return (
    <div
      className="bg-gta-pink text-white overflow-hidden py-1.5 relative z-50"
      aria-label="GTA 6 news ticker"
    >
      <div className="flex items-center gap-0">
        {/* Static label */}
        <span className="shrink-0 bg-black text-gta-pink font-russo text-[11px] px-3 py-0.5 tracking-widest z-10">
          BREAKING
        </span>

        {/* Scrolling text */}
        <div className="overflow-hidden flex-1">
          <span className="ticker-inner text-[11px] font-medium tracking-wide px-4">
            {text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{text}
          </span>
        </div>
      </div>
    </div>
  );
}
