import "./modal.scss";
import Close from "../times-solid.svg";
import { createPortal } from "react-dom";

const Modal = ({ show, close, title, children }) => {
  return createPortal(
    <>
      <div
        className={`modalContainer ${show ? "show" : ""} `}
        onClick={() => close()}
      >
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <header className="modal_header">
            <h2 className="modal_header-title">{title}</h2>
            <button className="close" onClick={() => close()}>
              <img src={Close} alt="close" />
            </button>
          </header>
          <main className="modal_content">{children}</main>
          <footer className="modal_footer">
            <button className="modal-close" onClick={() => close()}>
              Cancel
            </button>
            <button className="submit">Submit</button>
          </footer>
        </div>
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
