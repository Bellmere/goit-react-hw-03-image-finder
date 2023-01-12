import { Component } from "react";
import { Modal } from "./Modal/Modal";
import { Searchbar } from "./Searchbar/Searchbar";

export class App extends Component {
  state = {
    inputSearch : '',
    showModal: false,
  };

  handleSearchSubmit = inputSearch => {
    this.setState({ inputSearch });
  };

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
    }));
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
      </div>
    );
  };
}
