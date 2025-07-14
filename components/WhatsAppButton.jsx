"use client";
import { useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import WhatsAppChat from "./WhatsAppChat";

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && <WhatsAppChat onClose={() => setOpen(false)} />}

      <div
        className="fixed bottom-6 right-6 z-10 bg-[#25D366] p-3 text-white cursor-pointer rounded-full transition duration-300 hover:scale-125"
        onClick={() => setOpen(true)}
      >
        <AiOutlineWhatsApp size={50} />
      </div>
    </>
  );
};

export default WhatsAppButton;
