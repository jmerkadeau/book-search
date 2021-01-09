import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import Book from './Book';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchedBooks: []
      //books = []
    };

    this.onChange = this.onChange.bind(this);
    this.searchBooks = this.searchBooks.bind(this);
  }

  onChange(event){
    this.setState({
      input: event.target.value
    });
  }

  searchBooks(event){
    event.preventDefault();
    var self = this;
    const title = this.state.input;
    self.setState({searchedBooks: []})
    
    var xhttp1 = new XMLHttpRequest();
    xhttp1.onreadystatechange = function(){
      if (this.readyState === 4 && this.status === 200){
        var bookList = JSON.parse(this.responseText);
        //console.log(bookList.docs);
        self.setState({searchedBooks: bookList.docs});
        console.log(self.state.searchedBooks);

      }
      else if (this.readyState === 4){
        console.log(this.responseText);
      }
    }
    xhttp1.open("GET", "http://openlibrary.org/search.json?title="+title);
    xhttp1.send();
  }

  render() {
    return(
      <div className="fullPage">
        <header>
          <h1>
            Book Search
          </h1>
        </header>
        <div>
          <SearchForm searchBooks={this.searchBooks} onChange={this.onChange} 
          input={this.value}/>
        </div>
        <div>
          

          {this.state.searchedBooks.map((searchedBooks) => 
          <Book
          title={searchedBooks.title + " "}
          authorName={searchedBooks.author_name + " "}
          publishYear={searchedBooks.publish_year}
          />
          )}

        </div>
      </div>
    );
  }
}

export default App;
