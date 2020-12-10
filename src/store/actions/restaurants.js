import { GET_RESTAURANT_URL } from '../../constants/urls';

export const SET_RESTAURANTS = 'SET_RESTAURANTS';

const setRestaurants = (data) => ({
    type: SET_RESTAURANTS,
    restaurants: data,
  });

const getHeaders = () => ({
    Authorization: 'Api-Key q3MNxtfep8Gt',
    "Content-Type" : "application/json",
});

const fetchRestaurants = (fetch) => {
    return {
        getRestaurantDetails() {
            return async dispatch => {
                const response = await fetch(GET_RESTAURANT_URL, { 
                    headers: getHeaders(), 
                });
                if (response.status === 200) {
                    dispatch(setRestaurants(await response.json()));
                }
            };
        },
    };
}

export const restaurantApiActions = fetchRestaurants(fetch);
