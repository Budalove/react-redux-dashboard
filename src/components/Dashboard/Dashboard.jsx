import React from 'react';
import cls from './Dashboard.module.css';
import Card from './Card/Card';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { moveCardToDraft, toggleMark } from '../../actions/actionCreator';

const Dashboard = ({dashboardCards, moveCardToDraft, toggleMark}) => {

    const cardList = dashboardCards.map(card => {

        return (
            <Card 
                key={card.id}
                card={card}
                toggleMark={toggleMark}
                moveCardToDraft={moveCardToDraft}
            />
        )
    })
    
    return (
        <div className={cls.dashboard}>
            <div className={cls.listCards}>
                {cardList}
            </div>
        </div>
    );
}

const mapStateToProps = ({ dashboardCards }) => {

    return {
        dashboardCards
    }
}

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({moveCardToDraft, toggleMark}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);