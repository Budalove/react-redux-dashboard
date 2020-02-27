import React from 'react';
import cls from './DraftItem.module.css';

const DraftItem = ({editedField, removeCard, moveCardToDashboard}) => {

    return (
        <React.Fragment>
            <div className={cls.draftItem}>
                {editedField}
                <button 
                    onClick={removeCard}
                    className={`${cls.button} ${cls.remove}`}
                >
                    Remove
                </button>

                <button 
                    onClick={moveCardToDashboard}
                    className={`${cls.button} ${cls.board}`}
                >
                    Board
                </button>
            </div>
        </React.Fragment>
    );
}

export default DraftItem;