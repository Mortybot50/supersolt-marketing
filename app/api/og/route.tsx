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
          background: "#fafaf8",
          padding: "80px 96px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          color: "#0a0a0a",
        }}
      >
        {/* Subtle accent gradient */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -100,
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at center, rgba(195,38,28,0.18), transparent 60%)",
          }}
        />
        {/* Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: -0.5,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: "#0a0a0a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            S
          </div>
          SuperSolt
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
              fontSize: 88,
              lineHeight: 1.02,
              fontWeight: 600,
              letterSpacing: -2.5,
              maxWidth: 950,
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
            }}
          >
            <span>Run every venue from one</span>
            <span
              style={{
                color: "#c3261c",
                borderBottom: "5px solid #c3261c",
                paddingBottom: 6,
              }}
            >
              screen.
            </span>
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#71706b",
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
            color: "#71706b",
            letterSpacing: 0.5,
          }}
        >
          <div>Made in Melbourne, AU</div>
          <div style={{ color: "#0a0a0a", fontWeight: 500 }}>supersolt.app</div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
