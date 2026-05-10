"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MdSend, MdOutlineClose } from "react-icons/md";

const WhatsAppChat = ({ onClose, isClosing }) => {
  const [message, setMessage] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setCurrentTime(formattedTime);
  }, []);

  const sendWhatsAppMessage = () => {
    const encodedMessage = `https://wa.me/5493416757952?text=${encodeURIComponent(
      message,
    )}`;
    window.open(encodedMessage, "_blank");
  };

  return (
    <div
      className={`fixed right-6 bottom-5 z-30 rounded-lg bg-[#ece5dd] p-4 ${
        isClosing
          ? "animate-jump-out animate-ease-in-out animate-normal animate-fill-both"
          : "animate-jump-in animate-ease-out animate-normal animate-fill-both"
      }`}
    >
      <div className="flex justify-end">
        <button className="cursor-pointer" onClick={() => onClose(true)}>
          <MdOutlineClose />
        </button>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10">
            <Image
              className="rounded-full"
              src="/assets/images/AboutMe.jpg"
              alt=""
              width={300}
              height={300}
            />
          </div>
        </div>
        <div className="chat-header">
          M.B Calgaro
          <time className="text-xs opacity-50">{currentTime}</time>
        </div>
        <div className="chat-bubble">Hola👋🏻 ¿Tenés alguna duda?</div>
        <div className="chat-footer opacity-50">Entregado</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble bg-[#dcf8c6]">
          <input
            id="chatMessage"
            className="bg-[#dcf8c6] p-1 focus:outline-hidden"
            type="text"
            placeholder="Escribe aquí tu consulta"
            required
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          className={`btn btn-soft btn-success ${
            message ? "" : "btn-disabled"
          } `}
          onClick={() => sendWhatsAppMessage()}
        >
          Enviar <MdSend size={20} />
        </button>
      </div>
    </div>
  );
};

export default WhatsAppChat;
