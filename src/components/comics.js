import React, { Component } from "react";
import PropTypes from "prop-types";
import { ListGroup, Spinner } from "react-bootstrap";
import { status } from "../constants";

class Comics extends Component {
  handleComics() {
    const comicList = (
      <div>
        {
          this.props.comics.data.map(item => {
            return (
              <ListGroup.Item as="li" key={item.id}>
                {item.title}
              </ListGroup.Item>
            )
          })
        }
      </div>
    )

    const comicFailure = (
      <p>{this.props.comics.message}</p>
    )

    const spinner = (
      <div className="spinner">
        <Spinner animation="grow" role="status" />
      </div>
    )

    switch (this.props.comics.status) {
      case status.SUCCESS:
        return this.props.comics.data.length !== 0 ? comicList : null;
      case status.FAILURE:
        return comicFailure;
      case status.PENDING:
        return spinner;

      default:
        return null;
    }
  }

  render() {
    return this.handleComics();
  }
}

Comics.propTypes = {
  comics: PropTypes.object,
}

export default Comics;