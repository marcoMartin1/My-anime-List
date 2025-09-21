"use client";
import { useState, useEffect } from "react";

const Synopsis = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const maxLength = 150; // ✅ Increased limit for better preview

  useEffect(() => {
    // ✅ Detect screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile if width < 768px
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <div className="p-4 rounded-lg shadow-lg backdrop-blur-lg bg-white/10 border border-white/20 w-full ">
      <h1 className="text-xl font-bold text-color-primary border-b-2 mb-2">Synopsis</h1>
      <p className="text-color-primary text-justify text-sm leading-relaxed">
        {/* ✅ On desktop, always show full text. On mobile, show collapsed text */}
        {!isMobile || isExpanded ? text : `${text.slice(0, maxLength)}...`}
      </p>

      {/* ✅ Hide "Read More" button on desktop */}
      {isMobile && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-500 font-semibold hover:underline mt-2"
        >
          {isExpanded ? "Read Less ▲" : "Read More ▼"}
        </button>
      )}
    </div>
  );
};

export default Synopsis;
