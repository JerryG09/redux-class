const initialState = {
    name: ""
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_NAME":
            return {
                ...state,
                name: action.name
            };
        default:
            return state
    }
}

export default appReducer