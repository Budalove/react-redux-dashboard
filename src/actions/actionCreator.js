
const addCardToDashboard = (title) => {

    return {
        type: 'ADD_CARD_TO_DASHBOARD',
        payload: {
            id: Date.now(),
            title,
            isMarked: false
        }
    }
}
const addCardToDraft = (title) => {

    return {
        type: 'ADD_CARD_TO_DRAFT',
        payload: {
            id: Date.now(),
            title
        }
    }
}
const removeCard = (id) => {

    return {
        type: 'REMOVE_CARD_FROM_DRAFT',
        payload: id
    }
}
const moveCardToDraft = (id) => {

    return {
        type: 'MOVE_CARD_TO_DRAFT',
        payload: id
    };
}
const moveCardToDashboard = (id) => {

    return {
        type: 'MOVE_CARD_TO_DASHBOARD',
        payload: id
    }
}
const editCard = (card) => {

    return {
        type: 'EDIT_CARD',
        payload: card
    }
}
const toggleMark = (id) => {
    return {
        type: 'TOGGLE_MARK',
        payload: id
    }
}


export {
    addCardToDashboard,
    addCardToDraft,
    removeCard,
    moveCardToDraft,
    moveCardToDashboard,
    editCard,
    toggleMark
}