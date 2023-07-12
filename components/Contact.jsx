"use client";

const Contact = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      fullname: event.target.fullname.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    };

    const response = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((result) => {
        console.log(result);
        console.log("Message sent successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-[1240px] m-auto">
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
          className="border shadow-lg p-3 w-full focus:border-[#ebbf1a] focus:outline-none"
          cols={30}
          rows={10}
          placeholder="Mensaje"
        ></textarea>
        <button
          type="submit"
          className="mt-2 text-white bg-[#ebbf1a] pt-2 pb-2 rounded-xl hover:bg-[#CDA616] ease-linear duration-300 w-full"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
