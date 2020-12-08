import { GET_RESTAURANT_URL } from '../../constants/urls';
import axios from "axios";

export const SET_RESTAURANTS = 'SET_RESTAURANTS';

const setRestaurants = (data) => ({
    type: SET_RESTAURANTS,
    restaurants: data,
  });

const getRestaurants = (fetch) => {
    return {
        getRestaurantDetails() {
            return async dispatch => {
                const response = await fetch(GET_RESTAURANT_URL, { 
                    headers: { 
                        Authorization: 'Api-Key q3MNxtfep8Gt', 
                    }, 
                });
                if (response.status === 200) {
                    dispatch(setRestaurants(await response.json()));
                }
            };
        },
    };
}

export const restaurantApiActions = getRestaurants(fetch);
