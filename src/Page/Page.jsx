import React, {useState} from 'react'
import Modal from '../Modal/Modal';
import './Page.css';

const Page = () => {

    const [showModal, setShowModal] = useState(true)
    console.log("showModal", showModal)

    return (
        
        <div className="page-body overlay">
            {
                showModal &&
                <Modal setShowModal={setShowModal} />
            }
        </div>

    )
}

export default Page;