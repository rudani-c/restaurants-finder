import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import restaurantReducer from './reducers/restaurants';
import thunk from 'redux-thunk';

//import logger from 'redux-logger';

export const configureStore = () => {
    return createStore(
        combineReducers({ restaurantReducer }),
        compose(applyMiddleware(thunk))
    );
};
