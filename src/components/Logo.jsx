import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Logo({ onClick }) {
  const theme = useSelector((state) => state.theme.mode);
  const isLight = theme === "light";

  // Light mode: deep navy + blue on clean gradient background
  const gradStart    = isLight ? "#0d1117" : "#ffffff";
  const gradEnd      = isLight ? "#2563eb" : "#8e98ad";
  const accentStroke = isLight ? "#2563eb" : "#c9cfd9";
  const textMain     = isLight ? "#0d1117" : "#ffffff";
  const textSub      = isLight ? "#3d4a6b" : "#a9b1c2";

  return (
    <Link to="/" className="logo" aria-label="Syncorb Technologies home" onClick={onClick}>
      <svg width="40" height="40" viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={gradStart} />
            <stop offset="1" stopColor={gradEnd} />
          </linearGradient>
        </defs>
        <path
          d="M46 14c-3-5-8-8-14-8-9 0-15 5-15 12 0 15 28 8 28 24 0 7-6 12-15 12-8 0-14-3-17-9"
          fill="none"
          stroke="url(#lg)"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M40 24h14M10 40h14"
          stroke={accentStroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity=".7"
        />
      </svg>
      <span className="logo-text">
        <b style={{ color: textMain }}>Syncorb</b>
        <small style={{ color: textSub }}>TECHNOLOGIES</small>
      </span>
    </Link>
  );
}
