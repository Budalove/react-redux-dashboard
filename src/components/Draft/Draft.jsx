import React from 'react';
import cls from './Draft.module.css';
import { connect } from 'react-redux';

import { removeCard, editCard, moveCardToDashboard } from '../../actions/actionCreator';
import { bindActionCreators } from 'redux';

import DraftItemContainer from './DraftItem/DraftItemContainer';

const Draft = ({draftCards, removeCard, editCard, moveCardToDashboard}) => {

    const draftItemList = draftCards.map(card => {

        return (
            <DraftItemContainer 
                key={card.id}
                card={card}
                removeCard={removeCard}
                editCard={editCard}
                moveCardToDashboard={moveCardToDashboard}
            />
        );
    })
    
    
    return (
        <div className={cls.draft}>
            <div className={cls.draftList}>
                <div className={cls.label}>
                    Draft
                </div>
                {draftItemList}
            </div>
        </div>
    )
}


const mapStateToProps = ({ draftCards }) => {
    return {
        draftCards
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ removeCard, editCard, moveCardToDashboard }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Draft);