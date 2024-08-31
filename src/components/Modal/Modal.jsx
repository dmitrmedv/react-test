import { Component } from 'react';
import ReactDOM from 'react-dom';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  closeModal = e => {
    if (e.code === 'Escape' || e.target === e.currentTarget) {
      this.props.toggleModal();
    }
  };

  render() {
    return ReactDOM.createPortal(
      <div className={css.overlay} onClick={this.closeModal}>
        <div className={css.modal}>
          <button
            type="button"
            className={css.closeBtn}
            onClick={this.props.toggleModal}
          >
            x
          </button>
          {this.props.children}
        </div>
      </div>,
      document.querySelector('#root-modal')
    );
  }
}
