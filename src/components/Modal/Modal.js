import { Component } from "react";
import { createPortal } from "react-dom";
import css from '../Modal/Modal.module.css';

const modalEl = document.querySelector('#modal-root');

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', handleKeyDown);
    };

    componentDidUpdate() {
        window.removeEventListener('keydown', handleKeyDown);
    };

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }

    handleBackDropClick = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    };

    render() {
        return createPortal(
            <div className={css.modal__backdrop} onClick={this.handleBackDropClick}>
                <div className={css.modal__content}>{this.props.children}</div>
            </div>,
            modalEl
        );
    };
}