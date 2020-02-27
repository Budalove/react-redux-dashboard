import React, { useState } from 'react';
import cls from './FormAddItem.module.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {  addCardToDraft, addCardToDashboard } from '../../actions/actionCreator';


const FormAddItem = ({ addCardToDraft, addCardToDashboard }) => {

    const [value, setValue] = useState('');

    const tempFunc = (event) => {

        if (!value.trim())
            return;

        const name = event.target.name;

        switch (name) {
            case 'draft':
                addCardToDraft(value);
                setValue('');
                break;
            case 'dashboard':
                addCardToDashboard(value);
                setValue('');
                break;
            default:
                return;
        }
    }

    const onChangeValue = (event) => {
        setValue(event.target.value);
    }

    return (

        <div className={cls.container}>
            <input
                type="text"
                placeholder="Add item"
                value={value}
                onChange={onChangeValue}
            />
            <div className={cls.buttons}>

                <button
                    className={`${cls.button} ${cls.draft}`}
                    type="button"
                    name="draft"
                    onClick={tempFunc}
                >
                    Draft
                </button>

                <button
                    className={`${cls.button} ${cls.save}`}
                    type="button"
                    name="dashboard"
                    onClick={tempFunc}
                >
                    Save
                </button>
            </div>
        </div>
    );
}


const mapStateToProps = ({ draftCards, dashboardCards }) => {
    return {
        draftCards,
        dashboardCards
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addCardToDraft, addCardToDashboard }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormAddItem);