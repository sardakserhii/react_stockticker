import {ADD_VALUE} from '../actions';

const initialState = {
    value: 'test'
};

const stockTicker = (state = initialState, action) => {
    switch (action.type) {
        case ADD_VALUE:
            return {
                ...state,
                value: action.value
            };
        default:
            return state;
    }
};

export default stockTicker;
