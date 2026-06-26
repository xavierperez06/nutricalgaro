const Modal = ({ id, title, content }) => {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box text-content flex max-h-[90vh] max-w-3xl flex-col p-0 !text-lg">
        <div className="bg-base-100 border-base-200 sticky top-0 z-20 flex items-start justify-between border-b px-6 pt-6 pb-4">
          <h3 className="text-pr text-main-color pr-4 text-2xl font-bold">
            {title}
          </h3>

          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost"
              aria-label="Cerrar modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </form>
        </div>

        <div className="overflow-y-auto px-6 py-4">{content}</div>
      </div>
    </dialog>
  );
};

export default Modal;
