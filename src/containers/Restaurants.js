import React, { Component } from 'react';

import { Pagination } from '../components/Pagination/Pagination';
import RestaurantList from '../components/RestaurantList/RestaurantList';
import { connect } from 'react-redux';
import { restaurantApiActions } from '../store/actions/restaurants';

class RestaurantsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchFilter: '',
            gridData: [],
            currentPage: 1,
            dataPerPage: 10
        };
    }

    componentDidMount() {
        this.props.setRestaurants();
    }

    paginate = pageNumber => {
        this.setState({ currentPage: pageNumber })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ gridData: nextProps.restaurants })
    }

    render() {
        const { currentPage, dataPerPage } = this.state;
        const indexOfLastPost = currentPage * dataPerPage;
        const indexOfFirstPost = indexOfLastPost - dataPerPage;
        const currentGridData = this.state.gridData.slice(indexOfFirstPost, indexOfLastPost);

        return (
            <>
                <RestaurantList restaurants={currentGridData} />
                <Pagination
                    dataPerPage={dataPerPage}
                    totaldata={this.state.gridData.length}
                    paginate={this.paginate}
                    currentPage={currentPage}
                />
            </>
        )
    };
}

export const RestaurantPage = connect(
    state => ({
        restaurants: state.restaurantReducer.restaurants
    }),
    {
        setRestaurants: restaurantApiActions.getRestaurantDetails
    }
)(RestaurantsContainer);
