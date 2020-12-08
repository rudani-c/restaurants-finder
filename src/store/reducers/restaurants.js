import { SET_RESTAURANTS } from '../actions/restaurants'

const initialState = {
    restaurants: null
};

const restaurantReducer = (state = initialState, action) => {
    switch(action.type) {  
        case SET_RESTAURANTS:
            return{
                ...state,
                restaurants: action.restaurants
            }

        default:
            return state
    }
};

export default restaurantReducer;