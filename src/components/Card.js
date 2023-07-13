import React from "react";

function Card(props) {
    const { card, onCardClick } = props;

    function handleClick() {
        onCardClick(card);
    }

    return (
        <li className="element" >
            <img
                className="element__image"
                src={card.link}
                onClick={handleClick}
            ></img>
            <button className="element__trash-btn" type="button"></button>
            <div className="element__description">
                <h2 className="element__title">{card.name}</h2>
                <div className="element__likes">
                    <button className="element__like" type="button"></button>
                    <p className="element__counter">{card.likes.length}</p>
                </div>
            </div>
        </li>
    )
}

export default Card;