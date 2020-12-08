import React, { Component } from 'react';

import RestaurantList from '../components/RestaurantList/RestaurantList';
import { connect } from 'react-redux';
import { restaurantApiActions } from '../store/actions/restaurants';

class RestaurantsContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setRestaurants();
    }

    render() {
        return (
            <RestaurantList />
        )
    };
}

export default RestaurantPage = connect(
    state => ({
        restaurants: state.restaurantReducer.restaurants
    }),
    {
        setRestaurants: restaurantApiActions.getRestaurantDetails
    }
)(RestaurantsContainer);
