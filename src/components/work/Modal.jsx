import "./modal.css";

export default function Modal(props) {
  const modalState = props.toggle;
  return (
    <div className="modal__container">
      <div className="modal__content">
        modal content
        <i class="bx bx-x modal__close"></i>
      </div>
    </div>
  );
}
