// LAB 12 - FEATURED TASKS
// Create a `BookFormModal` component that contains the form elements required to collect the user input needed for creating a new book. Reveal this modal when the "Add Book" button is clicked, and hide the modal when the modal is closed.
// When the form is submitted, use Axios to send a `POST` request to the server's `/books` endpoint, including the data from the form. The server should respond with the new book that was successfully saved, which you should pass up to the `BestBooks` component, save to state, to allow React to re-render the list of all books.

import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class BookFormModal extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      title: event.target.name.value,
      description: event.target.description.value,
      status: event.target.status.value,
    };
    console.log("New Book: ", newBook);
    this.props.createBook(newBook);
    this.props.handleClose();
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add A New Book To Favorites</Modal.Title>
        </Modal.Header>

        <Container className="mt-3">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Book Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="book title here..."
              />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Book Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="book description here..."
              />
            </Form.Group>

            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
              >
                <option value="LIFE-CHANGING">Life Changing</option>
                <option value="FAVORITE FIVE">Favorite Five</option>
                <option value="RECOMMENDED TO ME">Reccomended To Me</option>
              </Form.Control>
            </Form.Group>

            <Button className="mb-4" variant="primary" type="submit">
              Add New Book!
            </Button>
          </Form>
        </Container>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close Form
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default BookFormModal;
