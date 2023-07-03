const Contact = () => {
  return (
    <div className="max-w-[1240px] m-auto p-4">
      <h1 className="text-2xl font-bold text-center p-4">
        Escribe tu consulta
      </h1>
      <form className="max-w-[600px] m-auto">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border shadow-md p-3 focus:border-[#ebbf1a] focus:outline-none"
            type="text"
            placeholder="Nombre Completo"
            required
          />
          <input
            className="border shadow-lg p-3 focus:border-[#ebbf1a] focus:outline-none"
            type="email"
            placeholder="Email"
            readOnly
          />
        </div>
        <input
          className="border shadow-lg p-3 w-full my-2 focus:border-[#ebbf1a] focus:outline-none"
          type="text"
          placeholder="Motivo de consulta"
        />
        <textarea
          className="border shadow-lg p-3 w-full focus:border-[#ebbf1a] focus:outline-none"
          cols={30}
          rows={10}
          placeholder="Mensaje"
        ></textarea>
        <button className="mt-2 text-white bg-[#ebbf1a] pt-2 pb-2 rounded-xl hover:bg-[#CDA616] ease-linear duration-300 w-full">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
