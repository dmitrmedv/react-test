import css from './Modal.module.css';

export const Modal = ({ toggleModal }) => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <button className={css.closeBtn} onClick={toggleModal}>
          close
        </button>
      </div>
    </div>
  );
};
