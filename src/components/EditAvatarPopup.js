import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
    const { isOpen, onClose, onUpdateAvatar } = props;
    const avatarRef = useRef('');

    function handleSubmit(e) {
        e.preventDefault();

        console.log(avatarRef.current.value)
        onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    return (
        <PopupWithForm
            name='avatar'
            title='Обновить аватар'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            children={
                <>
                    <input
                        ref={avatarRef}
                        type="url"
                        className="popup__input"
                        id="newAvatarImage"
                        placeholder="Ссылка на изображение"
                        name="avatarLink"
                        required
                    ></input>
                    <span className="newAvatarImage-error popup__avatar-error"></span>
                </>
            }
        />
    )
}

export default EditAvatarPopup;