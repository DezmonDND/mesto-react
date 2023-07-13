
import {useState} from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const closeAllPopups = () => {
    setisEditProfilePopupOpen(false)
    setisAddPlacePopupOpen(false)
    setEditAvatarPopupOpen(false)
    setImagePopupOpen(false)
  }

  function handleCardClick(card) {
    setImagePopupOpen(true)
    setSelectedCard(card)
  }

  return (
    <>
      <Header />
      <Main
        onEditAvatar={() => setEditAvatarPopupOpen(true)}
        onEditProfile={() => setisEditProfilePopupOpen(true)}
        onAddPlace={() => setisAddPlacePopupOpen(true)}
        onOpenCard={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name='edit-profile'
        title='Редактировать профиль'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input type="text" className="popup__input" id="popupName" placeholder="Имя" name="profileName" minLength="2"
              maxLength="40" required></input>
            <span className="popupName-error popup__input-error"></span>
            <input type="text" className="popup__input" id="popupDescription" placeholder="О себе" name="profileAbout"
              minLength="2" maxLength="200" required></input>
            <span className="popupDescription-error popup__input-error"></span>
          </>
        }
      />
      <PopupWithForm
        name='edit-card'
        title='Новое место'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input type="text" className="popup__input" id="newItemName" placeholder="Название" name="profileName"
              minLength="2" maxLength="30" required></input>
            <span className="newItemName-error popup__input-error"></span>
            <input type="url" className="popup__input" id="newItemLink" placeholder="Ссылка на картинку" name="profileAbout"
              required></input>
            <span className="newItemLink-error popup__input-error"></span>
          </>
        }
      />
      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input type="url" className="popup__input" id="newAvatarImage" placeholder="Ссылка на изображение"
              name="avatarLink" required></input>
            <span className="newAvatarImage-error popup__avatar-error"></span>
          </>
        }
      />
      <PopupWithForm
        name='delete-card'
        title='Вы уверены?'
        onClose={closeAllPopups}
      />
      <ImagePopup
        name='image'
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </>
  );
}

export default App;
