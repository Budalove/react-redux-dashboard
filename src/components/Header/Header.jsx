import React from 'react';
import cls from './Header.module.css';
import { connect } from 'react-redux';

const Header = ({countOfMarks}) => {

    return (
        <header className={cls.header}>
            <div className={cls.flex}>
                <div className={cls.label}>React app</div>

                <div className={cls.counter}>{countOfMarks}</div>
            </div>


        </header>
    );
}

const mapStateToProps = ({dashboardCards}) => ({
    countOfMarks: dashboardCards.filter(i => i.isMarked).length
});

export default connect(mapStateToProps, null)(Header);