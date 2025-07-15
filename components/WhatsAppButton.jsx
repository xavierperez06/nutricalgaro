"use client";
import { useState } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import WhatsAppChat from "./WhatsAppChat";

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);

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

      <div
        className="fixed right-6 bottom-6 z-10 cursor-pointer rounded-full bg-[#25D366] p-3 text-white transition duration-300 hover:scale-125"
        onClick={() => setOpen(true)}
      >
        <AiOutlineWhatsApp size={50} />
      </div>
    </>
  );
};

export default WhatsAppButton;
