import React, { Component } from "react";
import { Modal, ListGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getCharacters, getComics } from "../data/repository";
import CharacterList from "../components/character-list";
import * as details from '../redux/actions/details';

class Home extends Component {
  componentDidMount() {
    if (this.props.characters.data.length === 0) {
      const offset = 0;
      this.props.getCharactersActions(offset);
    }
  }

  render() {
    return (
      <Modal.Dialog id="home">
        <Modal.Body>
          <ListGroup as="ul">
            <ListGroup.Item as="li" active>
              Marvel Characters
            </ListGroup.Item>
            <CharacterList
              characters={this.props.characters}
              onItemClick={selectedCharacter => {
                this.props.history.push("/details");
                this.props.getComicsActions(selectedCharacter.id);
                this.props.detailsActions.saveDetails(selectedCharacter);
              }}
              onFetchData={() => {
                const offset = this.props.characters.data.length;
                this.props.getCharactersActions(offset)
              }}
            />
          </ListGroup>
        </Modal.Body>
      </Modal.Dialog>
    );
  }
}

Home.propTypes = {
  characters: PropTypes.object.isRequired,
  getCharactersActions: PropTypes.func,
  getComicsActions: PropTypes.func,
  detailsActions: PropTypes.object,
  history: PropTypes.object,
};

const mapStateToProps = state => ({
  characters: state.characters,
})

const mapDispatchToProps = dispatch => {
  return {
    getCharactersActions: bindActionCreators(getCharacters, dispatch),
    getComicsActions: bindActionCreators(getComics, dispatch),
    detailsActions: bindActionCreators(details, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)