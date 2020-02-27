

const initialState = {
    draftCards: [{id:1, title: 'draft1'}, {id:2, title: 'draft2'}],
    dashboardCards: [{id:3, title: 'dash1', isMarked: false}, {id:4, title: 'dash2', isMarked: false}]
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_CARD_TO_DASHBOARD':
            return {
                ...state,
                dashboardCards: [
                    ...state.dashboardCards,
                    action.payload
                ]
            }
        case 'ADD_CARD_TO_DRAFT':
            return {
                ...state,
                draftCards: [
                    ...state.draftCards,
                    action.payload
                ]
            }

        case 'REMOVE_CARD_FROM_DRAFT':
            {
                const id = action.payload;
                const newCards = state.draftCards.filter(card => card.id !== id);
                return {
                    ...state,
                    draftCards: newCards
                }
            }

        case 'MOVE_CARD_TO_DASHBOARD':
            {
                const id = action.payload;
                const card = state.draftCards.find(card => card.id === id);
                if(!card) return ;
                const newDraft = state.draftCards.filter(card => card.id !== id);
                const newDashboard = [...state.dashboardCards, { ...card, isMarked: false }];
                return {
                    ...state,
                    draftCards: newDraft,
                    dashboardCards: newDashboard
                }
            }


        case 'MOVE_CARD_TO_DRAFT':
            {
                const id = action.payload;
                const card = state.dashboardCards.find(card => card.id === id);
                if(!card) return ;
                const newDashboard = state.dashboardCards.filter(card => card.id !== id);
                const newDraft = [...state.draftCards, {id: card.id, title: card.title}];
                return {
                    ...state,
                    draftCards: newDraft,
                    dashboardCards: newDashboard
                }
            }

        case 'EDIT_CARD':
            {   
                const {id, title} = action.payload;
                const card = state.draftCards.find(card => card.id === id);
                if(!card) {
                    console.log('Error');
                    return ;
                }
                const idx = state.draftCards.findIndex(card => card.id === id);
                if(!card) return ;
                const newDraft = [
                    ...state.draftCards.slice(0, idx),
                    {...card, title},
                    ...state.draftCards.slice(idx + 1)
                ];
                return {
                    ...state,
                    draftCards: newDraft
                }
            }

        case 'TOGGLE_MARK':
            {
                const id = action.payload;
                // const card = state.dashboardCards.find(card => card.id === id);

                const newDashboard = state.dashboardCards.map(card => {
                    const newCard = {...card};
                    if(newCard.id === id) newCard.isMarked = !newCard.isMarked;

                    return newCard;
                });

                return {
                    ...state,
                    dashboardCards: newDashboard
                };
            }

        default:
            return state;
    }
}

export default reducer;