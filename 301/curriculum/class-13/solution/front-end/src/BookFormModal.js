// LAB 12 - FEATURED TASKS
// Create a `BookFormModal` component that contains the form elements required to collect the user input needed for creating a new book. Reveal this modal when the "Add Book" button is clicked, and hide the modal when the modal is closed.
// When the form is submitted, use Axios to send a `POST` request to the server's `/books` endpoint, including the data from the form. The server should respond with the new book that was successfully saved, which you should pass up to the `BestBooks` component, save to state, to allow React to re-render the list of all books.

// LAB 13 - FEATURED TASKS
// Add a form in the front end to let the user edit an existing book's details. When the form is submitted, send the new data to the server, and update the page according to the response.

import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class BookFormModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.bookToBeUpdated?._id,
            title: this.props.bookToBeUpdated?.title,
            description: this.props.bookToBeUpdated?.description,
            status: this.props.bookToBeUpdated?.status,
            method: this.props.bookToBeUpdated ? 'put' : 'post',
            formTitle: this.props.bookToBeUpdated ? 'Update My Favorite Book' : 'Add Book to My Favorites'
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // refactored to include update functionality
        const book = {
            _id: this.state.id,
            title: this.state.title,
            description: this.state.description,
            status: this.state.status
        }

        if (this.state.method === 'put') {
            this.props.updateBook(book)
        } else {
            this.props.createBook(book);
        }

        this.props.handleClose();

    };

    changeTitle = (event) => this.setState({ title: event.target.value })
    changeDescription = (event) => this.setState({ description: event.target.value })
    changeStatus = (event) => this.setState({ status: event.target.value })

    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.state.formTitle}</Modal.Title>
                </Modal.Header>

                <Container className="mt-3">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="title">
                            <Form.Label>Book Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="book title here..."
                                onChange={this.changeTitle}
                                defaultValue={this.state.title}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="description">
                            <Form.Label>Book Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="book description here..."
                                onChange={this.changeDescription}
                                defaultValue={this.state.description}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="status">
                            <Form.Label>Status</Form.Label>
                            <Form.Control
                                as="select"
                                onChange={this.changeStatus}
                                defaultValue={this.state.status}
                            >
                                <option value="LIFE-CHANGING">Life Changing</option>
                                <option value="FAVORITE FIVE">Favorite Five</option>
                                <option value="RECOMMENDED TO ME">Recommended To Me</option>
                            </Form.Control>
                        </Form.Group>

                        <Button className="mb-4" variant="primary" type="submit">
                            Submit Book!
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
