import React, { Component } from 'react';

export default class RestaurantList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1> Restaurants </h1>
                { this.props.restaurants && <table className="restaurant-table" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Phone</th>
                            <th>Genres</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.restaurants && this.props.restaurants.map((rest, index) => (
                            <tr key={index} >
                                <td>{rest.name}</td>
                                <td>{rest.city}</td>
                                <td>{rest.state}</td>
                                <td>{rest.telephone}</td>
                                <td>{rest.genre}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>}
            </div>
        )
    };
}


