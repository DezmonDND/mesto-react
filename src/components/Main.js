import React from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main(props) {
    const { onEditAvatar, onEditProfile, onAddPlace, onOpenCard } = props;
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then((userData) => {
                setUserName(userData.name)
                setUserDescription(userData.about)
                setUserAvatar(userData.avatar)
            }
            )
            .catch((e) => console.log(`Error! ${e}`));
        api.getInitialCards()
            .then((cardData) => {
                setCards(cardData)
            }
            )
            .catch((e) => console.log(`Error! ${e}`));
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <button className="profile__avatar-button" onClick={onEditAvatar}>
                    <img
                        alt="Аватар"
                        className="profile__avatar"
                        src={`${userAvatar}`}
                    ></img>
                </button>
                <div className="profile__info">
                    <div className="profile__buttons">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__description">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
            </section>
            <section className="elements">
                {cards.map((card, _id) => (
                    <Card
                        key={card._id}
                        card={card}
                        onCardClick={onOpenCard}                    
                    />
                ))}
            </section>
        </main>
    );
}

export default Main;