import React from 'react';
import cls from './Sidebar.module.css';
import FormAddItem from '../FormAddItem/FormAddItem';
import Draft from '../Draft/Draft';

const Sidebar = () => {

    return (
        <div className={cls.sidebar}>
            <FormAddItem />
            <Draft />
        </div>
    );
}

export default Sidebar;