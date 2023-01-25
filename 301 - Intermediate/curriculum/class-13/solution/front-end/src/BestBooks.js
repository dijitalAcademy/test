// LAB 11 - FEATURED TASKS
// In the `BestBooks` component, make a `GET` request to your server `/books` route, in the `componentDidMount` function.
// Store the book data returned from the server in the application `state`.
// Use conditional logic to only render the books when there are more than 0 books stored in the application state.
// When the server does return some books, use a Bootstrap carousel to render all the books returned.
// When the server returns no books, then render a message that the book collection is empty.

// LAB 12 - FEATURED TASKS
// Now that your server is ready for requests, write the front-end code to send such requests. Start by creating an "Add Book" button component to your React app. When it's clicked, an application `state` property should be updated, indicating the "New Book" form should be revealed.
// Be sure your front end will handle any errors, in case something goes wrong.
// In your front-end Book component, add a "Delete" button component for every book in the list.
// When the user clicks the delete button, send a `DELETE` request to `/books/:id`, replacing `:id` with the id of that book.
// Make sure that state is updated, and the book is removed from the user's list as soon as you get a success message back from the server, and that it stays removed when you reload the page.

import React from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import bookImg from "./book.jpeg";
import ErrorAlert from "./ErrorAlert";
import Button from "react-bootstrap/Button";
import BookFormModal from "./BookFormModal";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      errorMessage: "",
      showForm: false,
      bookToBeUpdated: null
    };
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount = async () => {
    try {
      const config = {
        method: "get",
        baseURL: process.env.REACT_APP_SERVER,
        url: "/books",
      };

      const response = await axios(config);
      this.setState({
        books: response.data,
        errorMessage: "",
      });
    } catch (error) {
      console.error("Error in BestBooks componentDidMount: ", error);
      this.setState({
        // axios sends more info about the error in a response object on the error
        errorMessage: `Status Code ${error.response.status}: ${error.response.data}`,
      });
    }
  };

  createBook = async (newBook) => {
    console.log({newBook});

    try {
      const config = {
        method: "post",
        baseURL: process.env.REACT_APP_SERVER,
        url: "/books/",
        // axios sends "data" in the request.body
        data: newBook,
      };

      const bookResults = await axios(config);
      console.log('Created Book: ', bookResults.data)

      const updatedBooks = [...this.state.books, bookResults.data];
      this.setState({ books: updatedBooks });

    } catch (error) {
      console.error("Error in BestBooks createBook: ", error);
      this.setState({
        errorMessage: `Status Code ${error.response.status}: ${error.response.data}`,
      });
    }
  };

  deleteBook = async (bookToBeDeleted) => {
    try {
      const proceed = window.confirm(`Do you want to delete ${bookToBeDeleted.title}?`)

      if (proceed) {
        const config = {
          method: "delete",
          baseURL: process.env.REACT_APP_SERVER,
          url: `/books/${bookToBeDeleted._id}`,
        };

        const response = await axios(config);
        console.log('Deleted Book confirmation from the server: ', response.data)

        let newBooks = this.state.books.filter((book) => book._id !== bookToBeDeleted._id);
        this.setState({ books: newBooks });
      }

      } catch (error) {
        console.error("Error in BestBooks deleteBook: ", error);
        this.setState({
          errorMessage: `Status Code ${error.response.status}: ${error.response.data}`,
        });
      }
  };

  updateBook = async (updatedBook) => {
    console.log('Book to be updated: ', updatedBook);
    const config = {
      method: "put",
      baseURL: process.env.REACT_APP_SERVER,
      url: `/books/${updatedBook._id}`,
      data: updatedBook
    };

    const updatedBookResult = await axios(config);

    const updatedBooks = this.state.books.map(book => {
      if (book._id === updatedBookResult.data._id) {
        return updatedBookResult.data;
      } else {
        return book;
      }
    });

    this.setState({ books: updatedBooks });
  }

  closeBookFormModal = () => this.setState({ showForm: false });
  closeError = () => this.setState({ errorMessage: "" });
  selectBookToUpdate = (bookToBeUpdated) => this.setState({ bookToBeUpdated, showForm: true });
  addABook = () => this.setState({ showForm: true, bookToBeUpdated: null });

  render() {
    return (
      <>
        <h2 className="text-center">
          My Essential Lifelong Learning &amp; Formation Shelf
        </h2>

        <Button
          id="addBookButton"
          className="btn-lg"
          onClick={this.addABook}
        >
          Add a Book!
        </Button>

        {this.state.showForm && (
          <BookFormModal
            show={this.state.showForm}
            handleClose={this.closeBookFormModal}
            createBook={this.createBook}
            bookToBeUpdated={this.state.bookToBeUpdated}
            updateBook={this.updateBook}
          />
        )}

        <Container>
          {this.state.books.length ? (
            <Carousel id="carousel">
              {this.state.books.map((book) => (
                <Carousel.Item key={book._id}>
                  <Image
                    className="w-100"
                    id="carousel-image"
                    src={bookImg}
                    alt={book.title}
                  />
                  <Carousel.Caption id="carousel-text-box">
                    <h2 className="carousel-text">{book.title}</h2>
                    <p className="carousel-text">{book.description}</p>
                    <p className="carousel-text">Status: {book.status}</p>
                    <Button variant="danger" onClick={() => this.deleteBook(book)}>
                      Delete
                    </Button>
                    <Button variant="danger" onClick={() => this.selectBookToUpdate(book)}>
                      Update
                    </Button>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          ) : this.state.errorMessage.length ? (
            <ErrorAlert
              closeError={this.closeError}
              errorMessage={this.state.errorMessage}
            />
          ) : (
            // only render this if there are no books saved in the DB
            <h3 className="text-center">No Books Found :(</h3>
          )}
        </Container>
      </>
    );
  }
}

export default BestBooks;
