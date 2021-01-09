import React, { Component } from 'react';
import './Book.css';

class Book extends Component{
    render(){
        return(
            <div onClick={this.props.getBook} id={this.props.id} className="bookDiv">
                <span className="book">
                    {this.props.title}
                    {this.props.authorName}
                    {this.props.publishYear}
                </span>
            </div>
        );
    }

}

export default Book;