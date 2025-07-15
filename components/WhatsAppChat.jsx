"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MdSend, MdOutlineClose } from "react-icons/md";

const WhatsAppChat = ({ onClose }) => {
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
    const encodedMessage = `https://wa.me/send?phone=5493416757952&text=${encodeURIComponent(
      message
    )}`;
    window.open(encodedMessage, "_blank");
  };

  return (
    <div className="fixed bottom-5 right-6 bg-[#ece5dd] z-30 rounded-lg p-4">
      <div className="flex justify-end">
        <button onClick={() => onClose(true)}>
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
        <div className="chat-bubble">Hola ¿Tenés alguna duda?</div>
        <div className="chat-footer opacity-50">Entregado</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble bg-[#dcf8c6]">
          <input
            id="chatMessage"
            className=" focus:outline-hidden bg-[#dcf8c6] p-1"
            type="text"
            placeholder="Escribe aquí tu consulta"
            required
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-end mt-4">
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
