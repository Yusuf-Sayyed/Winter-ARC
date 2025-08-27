"use client";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { SnowAnimation } from "../components/snow_animation";
import { Download, Share2 } from "lucide-react";
import { Button } from "../components/ui/button";
import contractImage from "../assets/contract.png";

export function WinterArcCertificate() {
  const certificateRef = useRef<HTMLDivElement>(null);
  const [username, setUsername] = useState("YourName");
  const [showShare, setShowShare] = useState(false);

  const today = new Date();
  const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

const handleDownload = async () => {
  if (!certificateRef.current) return;

  const originalCanvas = await html2canvas(certificateRef.current, {
    scale: window.devicePixelRatio * 2, // much sharper
    useCORS: true,
    backgroundColor: null,
    removeContainer: true,
  });

  // ---- Smart Crop (all sides, stricter alpha cutoff) ----
  const smartCrop = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return canvas;

    const w = canvas.width;
    const h = canvas.height;
    const imageData = ctx.getImageData(0, 0, w, h).data;

    let minX = w, minY = h, maxX = 0, maxY = 0;

    const threshold = 50; // stricter cutoff for semi-transparent pixels

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const alpha = imageData[(y * w + x) * 4 + 3];
        if (alpha > threshold) {
          if (x < minX) minX = x;
          if (y < minY) minY = y;
          if (x > maxX) maxX = x;
          if (y > maxY) maxY = y;
        }
      }
    }

    const croppedWidth = maxX - minX + 1;
    const croppedHeight = maxY - minY + 1;

    const croppedCanvas = document.createElement("canvas");
    croppedCanvas.width = croppedWidth;
    croppedCanvas.height = croppedHeight;

    croppedCanvas
      .getContext("2d")!
      .drawImage(canvas, minX, minY, croppedWidth, croppedHeight, 0, 0, croppedWidth, croppedHeight);

    return croppedCanvas;
  };

  // Apply smart crop
  const finalCanvas = smartCrop(originalCanvas);

  // Download cropped image
  const link = document.createElement("a");
  link.href = finalCanvas.toDataURL("image/png", 1.0);
  link.download = "winter-arc-certificate.png";
  link.click();

  setShowShare(true);
};


  const handleShare = () => {
    window.open(
      "https://x.com/i/communities/1942548949589430344",
      "_blank"
    );
  };

  return (
    <section className="relative z-10 py-20">
      {/* Snow animation overlay (optional) */}
      <div className="absolute inset-0 pointer-events-none">
        <SnowAnimation />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-orbitron font-black text-2xl sm:text-4xl md:text-5xl mb-8 bg-gradient-to-b from-neutral-400 to-neutral-500/60 bg-clip-text text-transparent">
          Generate Winter Arc Contract
        </h2>

        {/* Certificate */}
        <div className="w-full max-w-[650px] aspect-[650/850] relative mx-auto mb-8">
          <div
            ref={certificateRef}
            className="absolute inset-0 text-center w-full h-full"
            style={{
              backgroundImage: `url(${contractImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            {/* CONTRACT OF PARTICIPATION */}
            <p
              className="contract-title absolute font-montserrat font-semibold text-white"
              style={{
                left: "50%",
                top: "7%",
                transform: "translateX(-50%)",
                textShadow: "0px 0px 5.8px #000000",
                letterSpacing: "0.01em",
                width: "90%",
                maxWidth: "387px",
                fontSize: "clamp(14px, 3.5vw, 24px)",
              }}
            >
              CONTRACT OF PARTICIPATION
            </p>

            {/* $WINTER - html2canvas compatible version */}
            <h2
              className="winter-title absolute font-semibold"
              style={{
                left: "50%",
                top: "18%",
                transform: "translateX(-50%)",
                width: "90%",
                maxWidth: "340px",
                height: "clamp(40px, 10vw, 89px)",
                fontSize: "clamp(32px, 8vw, 72px)",
                lineHeight: "clamp(40px, 10vw, 89px)",
                textAlign: "center",
                fontFamily: "'Clash Display', sans-serif",
                color: "#40E0D0",
              }}
            >
              $WINTER
            </h2>

            {/* ARC - html2canvas compatible version */}
            <h3
              className="arc-title absolute font-medium"
              style={{
                left: "50%",
                top: "29%",
                transform: "translateX(-50%)",
                fontSize: "clamp(20px, 5vw, 32px)",
                textAlign: "center",
                letterSpacing: "clamp(0.1em, 2vw, 0.37em)",
                fontFamily: "'Clash Display', sans-serif",
                color: "#40E0D0",
              }}
            >
              ARC
            </h3>


            {/* This contract affirms that */}
            <p
              className="contract-text absolute font-montserrat font-medium text-white"
              style={{
                left: "50%",
                top: "40%",
                transform: "translateX(-50%)",
                textShadow: "0px 0px 5.8px #000000",
                width: "90%",
                maxWidth: "494px",
                fontSize: "clamp(14px, 3vw, 24px)",
              }}
            >
              This contract affirms that
            </p>

            {/* Name box */}
            <div
              className="name-box absolute flex items-center justify-center font-bold"
              style={{
                left: "50%",
                top: "46%",
                transform: "translateX(-50%)",
                width: "80%",
                maxWidth: "341px",
                height: "clamp(40px, 8vw, 60px)",
                minHeight: "40px",
                padding: "8px 16px",
                fontSize: "clamp(16px, 3.5vw, 36px)",
                borderRadius: "4px",
                fontFamily: "'Clash Display', sans-serif",
                color: "#40E0D0",
              }}
            >
              {username}
            </div>


            {/* has signed... */}
            <p
              className="signed-text absolute font-montserrat font-medium text-white"
              style={{
                left: "50%",
                top: "55%",
                transform: "translateX(-50%)",
                textShadow: "0px 0px 5.8px #000000",
                width: "90%",
                maxWidth: "494px",
                fontSize: "clamp(14px, 3vw, 24px)",
              }}
            >
              has signed to partake in the Winter Arc.
            </p>

            {/* Date range */}
            <p
              className="date-range absolute font-montserrat font-medium text-neutral-400"
              style={{
                left: "50%",
                top: "63%",
                transform: "translateX(-50%)",
                textShadow: "0px 0px 5.8px #000000",
                fontSize: "clamp(12px, 2.5vw, 20px)",
              }}
            >
              October 2025 - January 2026
            </p>

            {/* Signature line */}
            <div
              className="signature-line absolute border-t border-white"
              style={{
                left: "50%",
                top: "78%",
                transform: "translateX(-50%)",
                width: "80%",
              }}
            >
              {/* Signature on the line */}
              <div
                className="signature-text absolute font-dancing-script font-vibes"
                style={{
                  left: "50%",
                  top: "-64px",
                  transform: "translateX(-50%)",
                  fontSize: "clamp(18px, 4vw, 42px)",
                  color: "#40E0D0",
                  fontWeight: "400",
                  fontStyle: "normal",
                }}
              >
                {username}
              </div>

            </div>

            {/* Generated date */}
            <p
              className="generated-date absolute font-montserrat font-medium text-neutral-400"
              style={{
                left: "50%",
                top: "85%",
                transform: "translateX(-50%)",
                textShadow: "0px 0px 5.8px #000000",
                fontSize: "clamp(10px, 2vw, 16px)",
              }}
            >
              GENERATED ON {formattedDate}
            </p>

          </div>
        </div>
        {/* Input + Buttons */}
        <div className="w-full max-w-md flex flex-col sm:flex-row items-center gap-3 mx-auto">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your desired name"
            maxLength={16}
            className="flex-1 px-4 py-2 rounded bg-neutral-900 border border-neutral-700 text-neutral-200 w-full focus:outline-none focus:ring-2 focus:ring-neutral-600"
          />
          <Button
            onClick={handleDownload}
            className="w-full sm:w-auto bg-neutral-800 hover:bg-neutral-700 text-white"
          >
            <Download className="mr-2 h-4 w-4" /> Download
          </Button>
        </div>

        {/* Share on X (appears after download) */}
        {showShare && (
          <div className="mt-4">
            <Button
              onClick={handleShare}
              className="bg-sky-600 hover:bg-sky-700 text-white"
            >
              <Share2 className="mr-2 h-4 w-4" /> Share on X
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
