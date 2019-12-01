import React, { Component } from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";

class Item extends Component {
  render() {
    return (
      <div id="item">
        <Image className="image" src={this.props.image} alt="" rounded />
        <div className="title">
          {this.props.title}
        </div>
      </div>
    );
  }
}

Item.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default Item;