import React, { useState } from 'react';
import cls from './DraftItem.module.css';
import DraftItem from './DraftItem';

const DraftItemContainer = (props) => {

    const { 
        card, 
        removeCard, 
        editCard, 
        moveCardToDashboard } = props;
    

    const [value, setValue] = useState(card.title);
    const [prevValue, setPrevValue] = useState(card.title);
    const [isEdit, setIsEdit] = useState(false);

    const isEditModeChange = () => {
        setIsEdit(prev => !prev);
    }

    const onChangeValue = (event) => {
        setValue(event.target.value);
    }

    const onKeyPressValue = (event) => {
        if(event.key === 'Enter')
            isEditModeChange();
    }

    const onBlurHandle = (event) => {
        
        if(!event.target.value 
            || event.target.value === prevValue 
            || !event.target.value.trim()) 
        {
            isEditModeChange();
            setValue(prevValue);
            return ;
        }

        setValue(event.target.value);
        setPrevValue(event.target.value);
        isEditModeChange();
        
        const item = {
            id: card.id,
            title: value
        };

        editCard(item);
    }

    const inputElement = 
    (
        <input 
            type="text"
            value={value}
            onChange={onChangeValue}
            onBlur={onBlurHandle}
            onKeyPress={onKeyPressValue}
            autoFocus
            className={cls.input}
        />
    );

    const pElement =
    (
        <p onClick={isEditModeChange} className={cls.p}> {value} </p>
    );

    const editedField = isEdit ? inputElement : pElement;


    return (
        <DraftItem 
            editedField={editedField}
            removeCard={() => removeCard(card.id)}
            moveCardToDashboard={() => moveCardToDashboard(card.id)}  
        />
    );
}

export default DraftItemContainer;