import React from 'react';
import cls from './Header.module.css';
import { connect } from 'react-redux';

const Header = () => {

    return (
        <header className={cls.header}>
            <div className={cls.flex}>
                <div className={cls.label}>React app</div>

                <div className={cls.counter}>3</div>
            </div>


        </header>
    );
}

export default Header;