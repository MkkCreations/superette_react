

const listeReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_LISTE":
            return action.payload;
        case "ADD_LISTE":
            return [...state, action.payload];
        case "DELETE_LISTE":
            return state.filter((el) => el.id !== action.payload);
        case "LAST_ID":
            return state[state.length - 1];
        case "EDIT_LISTE":
            console.log(action.payload);
            return state.map((el) =>
                el.id === action.payload.id ? el = action.payload.obj : el
            );
        default:
            return state;
    };
};

export default listeReducer;