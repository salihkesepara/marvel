import React, { Component } from "react";
import PropTypes from "prop-types";
import { ListGroup, Spinner } from "react-bootstrap";
import Item from "./item";
import { status } from '../constants';
import InfiniteScroll from "react-infinite-scroll-component";

class CharacterList extends Component {
  listGroup() {
    return this.props.characters.data.map(character => {
      return (
        <ListGroup.Item
          as="li"
          key={character.id}
          className="list-group-item"
          onClick={() => this.props.onItemClick(character)}
        >
          <Item
            image={character.image}
            title={character.name}
          />
        </ListGroup.Item>
      );
    })
  }

  infiniteScroll() {
    return (
      <div>
        <InfiniteScroll
          dataLength={this.props.characters.data.length}
          next={this.props.onFetchData}
          hasMore={true}
          loader={this.spinner()}
        >
          {this.listGroup()}
        </InfiniteScroll>
      </div >
    )
  }

  spinner() {
    return (
      <div className="spinner">
        <Spinner animation="grow" role="status" />
      </div>
    )
  }

  handleList() {
    const characterFailure = (
      <p>{this.props.characters.message}</p>
    )

    switch (this.props.characters.status) {
      case status.SUCCESS:
        return this.props.characters.data.length !== 0 ? this.infiniteScroll() : null;
      case status.FAILURE:
        return characterFailure;

      default:
        return this.props.characters.data.length !== 0 ? this.infiniteScroll() : null;
    }
  }

  render() {
    return (
      <div id="character-list">
        {this.handleList()}
        {this.props.characters.status === status.PENDING & this.props.characters.data.length === 0
          ? this.spinner()
          : null
        }
      </div>
    )
  }
}

CharacterList.propTypes = {
  characters: PropTypes.object,
  onItemClick: PropTypes.func,
  onFetchData: PropTypes.func,
}

export default CharacterList;