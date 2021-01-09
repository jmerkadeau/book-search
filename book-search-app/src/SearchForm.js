import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
    render() {
        return(
            <div>
                <form onSubmit={this.props.searchBooks} >
                    <input value={this.props.input} onChange={this.props.onChange} type="text" id="inputText" placeholder="Search for a book..." />
                    <input type="submit" id="toSubmit" value="Search" />

                </form>
            </div>
        );
    }
}

export default SearchForm;