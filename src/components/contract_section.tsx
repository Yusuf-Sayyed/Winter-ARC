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

  // const today = new Date();
  // const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

  const handleDownload = async () => {
    if (!certificateRef.current) return;
    const canvas = await html2canvas(certificateRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
    });
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "winter-arc-certificate.png";
    link.click();
    setShowShare(true);
  };

  const handleShare = () => {
    const text = encodeURIComponent(
      `I just signed my contract for the ❄️ Winter Arc ❄️!\n\n#WinterArc`
    );
    const url = encodeURIComponent(
      "https://x.com/i/communities/1942548949589430344"
    );
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
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
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            {/* CONTRACT OF PARTICIPATION */}
            <p
              className="absolute font-montserrat font-semibold text-white"
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
              className="absolute font-['Clash_Display'] font-semibold"
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
                color: "linear-gradient(90deg, #FFFFFF 0%, #88FFFF 22.12%, #FFFFFF 66.83%, #88FFFF 100%)",
                textShadow: "0px 0px 10px rgba(136, 255, 255, 0.5)",
              }}
            >
              $WINTER
            </h2>

            {/* ARC - html2canvas compatible version */}
            <h3
              className="absolute font-['Clash_Display'] font-medium"
              style={{
                left: "50%",
                top: "32%",
                transform: "translateX(-50%)",
                fontSize: "clamp(20px, 5vw, 32px)",
                textAlign: "center",
                letterSpacing: "clamp(0.1em, 2vw, 0.37em)",
                color: "linear-gradient(90deg, #FFFFFF 0%, #88FFFF 22.12%, #FFFFFF 66.83%, #88FFFF 100%)",
                textShadow: "0px 0px 10px rgba(136, 255, 255, 0.5)",
              }}
            >
              ARC
            </h3>


            {/* This contract affirms that */}
            <p
              className="absolute font-montserrat font-medium text-white"
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
              className="absolute bg-black/40 flex items-center justify-center font-bold text-white"
              style={{
                left: "50%",
                top: "46%",
                transform: "translateX(-50%)",
                textShadow: "0px 0px 5.8px #000000",
                width: "80%",
                maxWidth: "341px",
                height: "clamp(40px, 8vw, 60px)",
                minHeight: "40px",
                padding: "8px 16px",
                fontSize: "clamp(16px, 3.5vw, 30px)",
                borderRadius: "4px",
              }}
            >
              {username}
            </div>


            {/* has signed... */}
            <p
              className="absolute font-montserrat font-medium text-white"
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
              className="absolute font-montserrat font-medium text-neutral-400"
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
              className="absolute border-t border-white"
              style={{
                left: "50%",
                top: "74%",
                transform: "translateX(-50%)",
                width: "80%",
              }}
            />

            {/* Signature */}
            <p
              className="absolute font-rockybilly uppercase text-neutral-400"
              style={{
                left: "50%",
                top: "80%",
                transform: "translateX(-50%)",
                textShadow: "0px 0px 5.8px #000000",
                width: "80%",
                fontSize: "clamp(10px, 2vw, 14px)",
              }}
            >
              {username}
              <br />
              Signature
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
