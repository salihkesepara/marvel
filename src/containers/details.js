import React, { Component } from "react";
import { Modal, Button, Image, ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Comics from "../components/comics";

class Details extends Component {
  render() {
    const character = this.props.details.data;
    const image = `${character.thumbnail.path}.${character.thumbnail.extension}`;
    const comics = this.props.comics;

    return (
      <Modal.Dialog id="details">
        <Modal.Header>
          <Modal.Title>{character.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={image} alt={character.name} width="100%" rounded />
          <p>{character.description}</p>

          <div className="comics">Comics</div>
          <ListGroup as="ul" variant="flush">
            <Comics comics={comics} />
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => this.props.history.goBack()}>Back</Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
}

Details.propTypes = {
  details: PropTypes.object,
  history: PropTypes.object,
  comics: PropTypes.object,
}

const mapStateToProps = state => ({
  details: state.details,
  comics: state.comics
})

export default connect(mapStateToProps)(Details);