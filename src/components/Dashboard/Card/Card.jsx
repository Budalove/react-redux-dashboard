import React from 'react';
import cls from './Card.module.css';

const Card = ({ card, toggleMark, moveCardToDraft }) => {

    const { isMarked } = card;

    const classes = [
        cls.mark
    ];

    if (isMarked) {
        classes.push(cls.greenBg);
    } else classes.push(cls.redBg);

    return (
        <div className={cls.card}>
            <div className={cls.flex}>
                <p className={cls.title}>{card.title}</p>
                <p className={classes.join(' ')}></p>
            </div>
            <div className={cls.flex}>
                <button
                    onClick={() => moveCardToDraft(card.id)}
                    className={`${cls.button}`}
                >
                    draft
                </button>
                <button
                    onClick={() => toggleMark(card.id)}
                    className={`${cls.button}`}
                >
                    mark
                </button>

            </div>

        </div>
    )
}

export default Card;