import React, { Component } from 'react';

import { states } from '../../constants/constants';

export default class RestaurantList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            stateFilter: '',
            genreFilter: '',
            txtFiter: '',
            txtFilterActive: false,
            nameSort: -1
        };
    }

    filterAndSort(){
        let filteredRestaurants = [...this.props.restaurants];

        if(this.state.stateFilter.trim()){
            filteredRestaurants = filteredRestaurants.filter( rest => {
                return rest.state.toUpperCase().includes(this.state.stateFilter.trim().toUpperCase());
            });            
        }

        if(this.state.genreFilter.trim()){
            filteredRestaurants = filteredRestaurants.filter( rest => {
                return rest.genre.toUpperCase().includes(this.state.genreFilter.trim().toUpperCase());
            });
        }

        if(this.state.txtFilterActive){
            filteredRestaurants = filteredRestaurants.filter( rest => {
                return (
                    rest.name.toUpperCase().includes(this.state.txtFiter.trim().toUpperCase())
                    || rest.state.toUpperCase().includes(this.state.txtFiter.trim().toUpperCase())
                    || rest.genre.toUpperCase().includes(this.state.txtFiter.trim().toUpperCase())
                );
            });
            this.setState({txtFilterActive: false});
        }

        filteredRestaurants.sort(this.sortByName(this.state.nameSort));

        return filteredRestaurants;
    }

    sortByName(order){
        return (ra,rb) => {
            let nameA = ra.name.toUpperCase();
            let nameB = rb.name.toUpperCase();

            if(nameA < nameB)
                return 1*order
            if(nameA > nameB)
                return -1*order
            return 0
        }
    }

    render() {
        return (
            <div>
                <table className="restaurant-table" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>City</th>
                            <th>
                                State &nbsp;
                                <select name="state" id="stateFilter" value={this.state.stateFilter} onChange={e=>this.setState({stateFilter: e.target.value})}>
                                    <option value="">--</option>
                                    {states && states.map((state, index) => (
                                        <option key={index} value={state}>{state}</option>
                                    ))}
                                </select>
                            </th>
                            <th>Phone</th>
                            <th>
                                Genres &nbsp;
                                <input type="text" id="genreFilter" value={this.state.genreFilter} onChange={e=>this.setState({genreFilter: e.target.value})} placeholder="filter genre" />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.restaurants && this.filterAndSort().map((restaurant, index) => (
                            <tr key={index} >
                                <td>{restaurant.name}</td>
                                <td>{restaurant.city}</td>
                                <td>{restaurant.state}</td>
                                <td>{restaurant.telephone}</td>
                                <td>{restaurant.genre}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    };
}


