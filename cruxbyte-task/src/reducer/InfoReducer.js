const initialState = { info: [] };

function InfoReducer(state = initialState, action) {
    // console.log(state);
    // console.log(action);

    switch (action.type) {
        case "addInfo":
            let newInfo = { info: state.info.concat(action.payload) };
            // console.log(newInfo);
            return newInfo;
        default:
            return state;
    }
}

export default InfoReducer;
