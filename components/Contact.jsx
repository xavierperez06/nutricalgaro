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
    <div className="m-auto max-w-[1240px]">
      <div className="mx-auto mb-6 max-w-[700px] px-4 text-center lg:px-0">
        <p className="text-lg leading-relaxed text-slate-600">
          Si tenés <span className="font-bold">dudas</span>, necesitás{" "}
          <span className="font-bold">asesoramiento personalizado</span> o
          querés <span className="font-bold">agendar una consulta</span>, podés
          contactarme por el medio que te resulte más cómodo.
        </p>
      </div>

      {/* Tarjetas con Íconos Flotantes */}
      <div className="mb-6 grid grid-cols-1 gap-8 px-4 pt-6 md:grid-cols-2 md:gap-6 lg:px-0">
        {/* Tarjeta Email */}
        <div className="relative rounded-3xl border border-slate-100 bg-white p-6 pt-10 text-center shadow-sm transition-shadow hover:shadow-md">
          <div className="bg-primary-color-100 text-primary-color-600 absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <span className="mb-2 block font-semibold text-slate-800">Email</span>
          <p className="text-sm text-slate-500">nutricalgaro@gmail.com</p>
        </div>

        {/* Tarjeta Teléfono */}
        <div className="relative rounded-3xl border border-slate-100 bg-white p-6 pt-10 text-center shadow-sm transition-shadow hover:shadow-md">
          <div className="bg-primary-color-100 text-primary-color-600 absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
          </div>
          <span className="mb-2 block font-semibold text-slate-800">
            Contacto
          </span>
          <p className="text-sm text-slate-500">(+54) 9 3416757952</p>
        </div>
      </div>

      {/* Formulario */}
      <div className="m-auto max-w-[700px] rounded-[2rem] bg-slate-50 p-8 md:p-10">
        <h3 className="mb-8 text-center text-xl font-medium text-slate-700">
          Formulario de contacto
        </h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <input
              id="fullname"
              className="focus:ring-primary-color-200 w-full rounded-2xl border-none bg-white p-4 text-slate-700 shadow-sm transition-all outline-none focus:ring-2"
              type="text"
              placeholder="Nombre Completo"
              required
            />
            <input
              id="email"
              className="focus:ring-primary-color-200 w-full rounded-2xl border-none bg-white p-4 text-slate-700 shadow-sm transition-all outline-none focus:ring-2"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <input
            id="subject"
            className="focus:ring-primary-color-200 w-full rounded-2xl border-none bg-white p-4 text-slate-700 shadow-sm transition-all outline-none focus:ring-2"
            type="text"
            placeholder="Motivo de consulta"
          />
          <textarea
            id="message"
            className="focus:ring-primary-color-200 w-full resize-none rounded-2xl border-none bg-white p-4 text-slate-700 shadow-sm transition-all outline-none focus:ring-2"
            rows={5}
            placeholder="Mensaje"
          ></textarea>
          <Button
            type="submit"
            disabled={sendingEmail}
            className="w-full cursor-pointer"
          >
            {sendingEmail ? "Enviando..." : "Enviar consulta"}
          </Button>
        </form>
      </div>
      <ToastContainer autoClose={8000} />
    </div>
  );
};

export default Contact;
