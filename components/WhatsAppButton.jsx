"use client";

import { useState, useEffect } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import WhatsAppChat from "./WhatsAppChat";

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [showHint, setShowHint] = useState(true);

  // NEW: State to control the typing indicator
  const [isTyping, setIsTyping] = useState(true);

  // NEW: Effect to switch from typing to text after 2.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(false);
    }, 2500); // 2500ms = 2.5 seconds. Adjust as needed.

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, 500);
  };

  return (
    <>
      {open && <WhatsAppChat onClose={handleClose} isClosing={closing} />}

      <div className="fixed right-6 bottom-6 z-10 flex flex-col items-end">
        {/* Custom Tooltip Bubble */}
        {showHint && (
          <div className="mb-3 flex flex-col items-end">
            <button
              className="mr-1 mb-1 cursor-pointer text-white/80 transition-colors hover:text-white"
              aria-label="Close"
              onClick={() => setShowHint(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative flex min-h-[48px] min-w-[80px] items-center justify-center rounded-2xl bg-white px-5 py-3 font-medium text-gray-800 shadow-xl">
              {isTyping ? (
                <div className="flex items-center justify-center space-x-1.5 px-2">
                  {/* Inline animation delays create the "wave" sequence */}
                  <div
                    className="animate-typing-dot h-2 w-2 rounded-full bg-gray-400"
                    style={{ animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="animate-typing-dot h-2 w-2 rounded-full bg-gray-400"
                    style={{ animationDelay: "200ms" }}
                  ></div>
                  <div
                    className="animate-typing-dot h-2 w-2 rounded-full bg-gray-400"
                    style={{ animationDelay: "400ms" }}
                  ></div>
                </div>
              ) : (
                "¿Conversamos? 😄"
              )}

              {/* Downward pointing tail */}
              <div className="absolute right-6 -bottom-[8px] h-0 w-0 border-t-[8px] border-r-[8px] border-l-[8px] border-t-white border-r-transparent border-l-transparent"></div>
            </div>
          </div>
        )}

        {/* Button Container */}
        <div className="relative mt-1">
          {/* Ripple Background */}
          <div className="animate-ping-slow absolute inset-0 rounded-full bg-[#25D366] opacity-30"></div>

          {/* Main Button */}
          <div className="indicator relative z-10">
            <span className="badge indicator-item animate-occasional-jump z-11 h-6 w-6 translate-x-1 -translate-y-1 rounded-full border-0 bg-red-500 text-white">
              1
            </span>
            <div
              className="cursor-pointer rounded-full bg-[#25D366] p-3 text-white shadow-lg transition-transform duration-300 hover:scale-125"
              onClick={() => {
                setOpen(true);
                setShowHint(false);
              }}
            >
              <AiOutlineWhatsApp size={50} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppButton;
