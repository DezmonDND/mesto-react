import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    const { isOpen, onClose, onAddPlace } = props;
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleLinkChange(e) {
        setLink(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();

        onAddPlace({
            name,
            link
        })
    }

    return (
        <PopupWithForm
            name='edit-card'
            title='Новое место'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            children={
                <>
                    <input
                        onChange={handleNameChange}
                        type="text"
                        className="popup__input"
                        id="newItemName"
                        placeholder="Название"
                        name="profileName"
                        minLength="2"
                        maxLength="30"
                        required
                    ></input>
                    <span className="newItemName-error popup__input-error"></span>
                    <input
                        onChange={handleLinkChange}
                        type="url"
                        className="popup__input"
                        id="newItemLink" placeholder="Ссылка на картинку"
                        name="profileAbout"
                        required
                    ></input>
                    <span className="newItemLink-error popup__input-error"></span>
                </>
            }
        />
    )
}

export default AddPlacePopup;