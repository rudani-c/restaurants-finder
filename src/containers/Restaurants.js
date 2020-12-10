import React, { Component } from 'react';

import { Pagination } from '../components/Pagination/Pagination';
import RestaurantList from '../components/RestaurantList/RestaurantList';
import { SearchFilter } from '../components/SearchFilter/SearchFilter';
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

    onChange = (e) => {
        const data = e.target.value;
        this.setState({ searchFilter: data });
        if (data === "" || data === undefined) {
            this.setState({ gridData: this.props.restaurants })
        }
    }

    onClickHandler = () => {
        if (this.state.searchFilter) {
            const data = this.state.gridData.filter(row => row.name.toLowerCase().indexOf(this.state.searchFilter.toLowerCase()) > -1 ||
                row.city.toLowerCase().indexOf(this.state.searchFilter.toLowerCase()) > -1 ||
                row.genre.toLowerCase().indexOf(this.state.searchFilter.toLowerCase()) > -1)
            if (data.length > 0) {
                this.setState({ gridData: data })
            } else {
                this.setState({ gridData: [] })
            }
        }
    }

    render() {
        const { currentPage, dataPerPage } = this.state;
        const indexOfLastPost = currentPage * dataPerPage;
        const indexOfFirstPost = indexOfLastPost - dataPerPage;
        const currentGridData = this.state.gridData.slice(indexOfFirstPost, indexOfLastPost);

        return (
            <>
                <SearchFilter onChange={(e) => { this.onChange(e) }} onClickHandler={this.onClickHandler} />
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
