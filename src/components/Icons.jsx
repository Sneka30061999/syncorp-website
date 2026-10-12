// Small line icons used in the Solutions, Why Choose, and Footer sections.
const base = { width: 40, height: 40, viewBox: "0 0 40 40", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };

const paths = {
  workflow: (<><circle cx="10" cy="10" r="4" /><circle cx="30" cy="12" r="4" /><circle cx="20" cy="31" r="4" /><path d="M14 10h12M12 14l6 13M28 16l-6 11" /></>),
  chart: (<><path d="M6 33h28" /><path d="M10 33V22M18 33V15M26 33V19M34 33V8" /><path d="M10 14l8-6 8 5 8-8" /></>),
  cloud: (<><path d="M12 30a7 7 0 0 1-1-13.9A9 9 0 0 1 28 14a6.5 6.5 0 0 1 1 16z" /><path d="M20 20v8M16 24l4-4 4 4" /></>),
  expand: (<><path d="M8 15V8h7M32 15V8h-7M8 25v7h7M32 25v7h-7" /><path d="M14 14l-4-4M26 14l4-4M14 26l-4 4M26 26l4 4" /></>),
  target: (<><circle cx="20" cy="22" r="11" /><circle cx="20" cy="22" r="5" /><path d="M20 22l9-13M25 9h4v4" /></>),
  users: (<><circle cx="15" cy="14" r="5" /><path d="M5 33c0-6 4-10 10-10s10 4 10 10" /><circle cx="29" cy="15" r="4" /><path d="M29 24c4 0 7 3 7 8" /></>),
  code: (<><path d="M14 13L6 20l8 7M26 13l8 7-8 7M23 9l-6 22" /></>),
  refresh: (<><path d="M33 17a13 13 0 0 0-23-5M7 7v6h6" /><path d="M7 23a13 13 0 0 0 23 5M33 33v-6h-6" /></>),
  bolt: (<path d="M22 5L9 23h10l-2 12 14-19H21z" />),
  shield: (<><path d="M20 5l12 4v10c0 8-5 13-12 16C13 32 8 27 8 19V9z" /><path d="M14 20l5 5 8-9" /></>),
  task: (<><rect x="7" y="7" width="26" height="26" rx="5" /><path d="M14 20l5 5 8-10" /></>),
  folder: (<path d="M5 12a3 3 0 0 1 3-3h8l3 4h13a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z" />),
  progress: (<path d="M7 33h26M11 28v-6M19 28v-12M27 28v-9" />),
  bell: (<><path d="M12 28V18a8 8 0 0 1 16 0v10l3 3H9z" /><path d="M17 34a3 3 0 0 0 6 0" /></>),
  mobile: (<><rect x="11" y="5" width="18" height="30" rx="4" /><path d="M18 30h4" /></>),
  check: (<path d="M8 20l8 8 16-16" />),
  arrow: (<path d="M6 20h26M24 12l8 8-8 8" />),
  back: (<path d="M34 20H8M16 12l-8 8 8 8" />),
  play: (<path d="M14 10l16 10-16 10z" />),
  send: (<path d="M34 6L6 18l10 4 4 10zM16 22l18-16" />),
  lock: (<><rect x="9" y="18" width="22" height="16" rx="3" /><path d="M13 18v-5a7 7 0 0 1 14 0v5M20 25v4" /></>),
  clock: (<><circle cx="20" cy="20" r="14" /><path d="M20 11v9l6 4" /></>),
  mail: (<><rect x="5" y="9" width="30" height="22" rx="3" /><path d="M6 12l14 11 14-11" /></>),
  phone: (<path d="M12 6h5l3 8-4 3a16 16 0 0 0 7 7l3-4 8 3v5a3 3 0 0 1-3 3A26 26 0 0 1 8 9a3 3 0 0 1 3-3z" />),
};

export function Icon({ name, size = 40 }) {
  return (
    <svg {...base} width={size} height={size}>
      {paths[name]}
    </svg>
  );
}

export function SocialIcons() {
  const props = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  return (
    <ul className="social" aria-label="Social media">
      <li>
        <a href="https://www.linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noreferrer">
          <svg {...props}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v7M8 7v.01M12 17v-4a2.5 2.5 0 0 1 5 0v4M12 10v7" /></svg>
        </a>
      </li>
      <li>
        <a href="https://x.com/" aria-label="X" target="_blank" rel="noreferrer">
          <svg {...props}><path d="M4 4l16 16M20 4L4 20" /></svg>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noreferrer">
          <svg {...props}><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" /></svg>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noreferrer">
          <svg {...props}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5v.01" /></svg>
        </a>
      </li>
    </ul>
  );
}
