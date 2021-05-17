import React from 'react'
import './modal.css';

const Modal = ({setShowModal}) => {

    const onClick = () => {
        setShowModal(false);
        console.log("clicked!")
    }
        return (
        <div class="modal-container" id="modalContainer">    
            <div class="modal-body" id="modalBody">
                <a class="close-button" id="closeButton" onClick={onClick}>
                    x          
                </a>
                <h1 class="title">I'm a title</h1>
                <p class="modal-paragraph">Sed vitae diam eget ante ornare molestie in vel orci. Praesent sit amet pretium orci, vel eleifend nisl. Morbi placerat dui risus, tincidunt viverra nisl cursus dictum. Donec cursus nisi id condimentum ultrices. Mauris malesuada dolor justo, eget congue quam sollicitudin in. Ut at ante malesuada, hendrerit neque vitae, porttitor odio. Duis pretium eget magna et suscipit.</p>
                <div class="button-container">
                    <button class="modal-button">Deny</button>
                    <button class="modal-button">Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;