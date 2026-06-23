const Modal = ({ id, title, content }) => {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box text-content max-w-3xl !text-lg">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">
            ✕
          </button>
        </form>
        <h3 className="text-lg font-bold">{title}</h3>
        <div className="py-4">{content}</div>
      </div>
    </dialog>
  );
};

export default Modal;
