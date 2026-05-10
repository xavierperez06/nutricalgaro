"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "./common/Button";

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
        },
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
    <div className="m-auto max-w-[1240px] p-4 md:p-0">
      <h1 className="p-4 text-center text-2xl font-bold">
        Escribe tu consulta
      </h1>
      <form className="m-auto max-w-[600px]" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2">
          <input
            id="fullname"
            className="focus:border-primary-color-700 border p-3 shadow-md focus:outline-hidden"
            type="text"
            placeholder="Nombre Completo"
            required
          />
          <input
            id="email"
            className="focus:border-primary-color-700 border p-3 shadow-lg focus:outline-hidden"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <input
          id="subject"
          className="focus:border-primary-color-700 my-2 w-full border p-3 shadow-lg focus:outline-hidden"
          type="text"
          placeholder="Motivo de consulta"
        />
        <textarea
          id="message"
          className="focus:border-primary-color-700 w-full border p-3 shadow-lg focus:outline-hidden"
          cols={30}
          rows={10}
          placeholder="Mensaje"
        ></textarea>
        <div>
          <Button type="submit" disabled={sendingEmail} className="mt-2 w-full">
            {sendingEmail ? "Enviando..." : "Enviar"}
          </Button>
        </div>
      </form>
      <ToastContainer autoClose={8000} />
    </div>
  );
};

export default Contact;
