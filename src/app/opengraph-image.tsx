import { ImageResponse } from "next/og";

export const alt = "CloudOnboard — enterprise software architecture";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#07111c",
          color: "#f3f7fb",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 14,
              background: "#1f4e9b",
            }}
          />
          <div style={{ fontSize: 28, letterSpacing: 4 }}>CLOUDONBOARD</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 64, lineHeight: 1.05, maxWidth: 900 }}>
            Enterprise software architecture
          </div>
          <div style={{ fontSize: 28, color: "#9aafc6", maxWidth: 860 }}>
            Advanced cloud solutions and system integration
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
