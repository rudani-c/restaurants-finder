import './search-filter.css';

import React, { Component } from 'react';

export class SearchFilter extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event);
    }

    handleKeyDown(event) {
        if (event.key === "Enter") {
            this.props.onClickHandler(event);
        }
    }

    render() {
        return (
            <div className="search">
                <input type="text" id="txtFilter"
                    placeholder="search"
                    onChange={ this.handleChange}
                    onKeyDown={this.handleKeyDown}
                /> &nbsp;
                <button id="txtFilterSubmit" onClick={(e) => this.props.onClickHandler(e)}> Search </button>
            </div>

        )
    }
}