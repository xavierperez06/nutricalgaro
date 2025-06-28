"use client";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [sendingEmail, setSendingEmail] = useState(false);

  const notifty = (type) => {
    if (type === "success") {
      toast.success("Mensaje enviado con éxito.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (type === "error") {
      toast.error(
        "Ocurrió un error al enviar el mensaje. Por favor prueba más tarde.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSendingEmail(true);

    const data = {
      fullname: event.target.fullname.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    };

    await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => {
        notifty("success");
        console.log("Mensaje enviado con éxito.");
      })
      .catch((error) => {
        notifty("error");
        console.log(error);
      })
      .finally(() => {
        setSendingEmail(false);
        event.target.reset();
      });
  };

  return (
    <div className="max-w-[1240px] m-auto p-4 md:p-0">
      <h1 className="text-2xl font-bold text-center p-4">
        Escribe tu consulta
      </h1>
      <form className="max-w-[600px] m-auto" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
          <input
            id="fullname"
            className="border shadow-md p-3 focus:border-[#ebbf1a] focus:outline-none"
            type="text"
            placeholder="Nombre Completo"
            required
          />
          <input
            id="email"
            className="border shadow-lg p-3 focus:border-[#ebbf1a] focus:outline-none"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <input
          id="subject"
          className="border shadow-lg p-3 w-full my-2 focus:border-[#ebbf1a] focus:outline-none"
          type="text"
          placeholder="Motivo de consulta"
        />
        <textarea
          id="message"
          className="border shadow-lg p-3 w-full focus:border-[#ebbf1a] focus:outline-none "
          cols={30}
          rows={10}
          placeholder="Mensaje"
        ></textarea>
        <div>
          <button
            type="submit"
            className="mt-2 text-white bg-[#ebbf1a] pt-2 pb-2 rounded-md hover:bg-[#CDA616] ease-linear duration-300 w-full"
            disabled={sendingEmail}
          >
            {sendingEmail ? "Enviando..." : "Enviar"}
          </button>
        </div>
      </form>
      <ToastContainer autoClose={8000} />
    </div>
  );
};

export default Contact;
