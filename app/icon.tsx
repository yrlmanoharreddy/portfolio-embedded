import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "3px solid #9fc8aa",
          background: "#0b0e0c",
          color: "#c4dfca",
          fontFamily: "monospace",
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: "-1px",
        }}
      >
        LM
      </div>
    ),
    size,
  );
}
