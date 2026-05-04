import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "SuperSolt — Run every venue from one screen.";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#F5F0E8",
          padding: "80px 96px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          color: "#1A1815",
        }}
      >
        {/* Coral wash */}
        <div
          style={{
            position: "absolute",
            top: -240,
            right: -160,
            width: 760,
            height: 760,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at center, rgba(217,84,59,0.22), transparent 62%)",
          }}
        />
        {/* Amber fragment */}
        <div
          style={{
            position: "absolute",
            bottom: -180,
            left: -120,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at center, rgba(232,160,74,0.18), transparent 65%)",
          }}
        />

        {/* Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 28,
            fontWeight: 500,
            letterSpacing: -0.5,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: "#1A1815",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#F5F0E8",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            ✓
          </div>
          supersolt
        </div>

        {/* Headline */}
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 28,
          }}
        >
          <div
            style={{
              fontSize: 92,
              lineHeight: 1.02,
              fontWeight: 500,
              letterSpacing: -3,
              maxWidth: 980,
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              textTransform: "lowercase",
            }}
          >
            <span>Run every venue from one</span>
            <span
              style={{
                color: "#D9543B",
                borderBottom: "6px solid #D9543B",
                paddingBottom: 6,
              }}
            >
              screen.
            </span>
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#5C5A55",
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Operations software for Australian hospitality. Single venues,
            multi-venue groups, and franchisees.
          </div>
        </div>

        {/* Footer line */}
        <div
          style={{
            marginTop: 48,
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#5C5A55",
            letterSpacing: 0.5,
            textTransform: "uppercase",
          }}
        >
          <div>Made in Melbourne, AU</div>
          <div style={{ color: "#1A1815", fontWeight: 500 }}>supersolt.app</div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
