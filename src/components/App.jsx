import { Component } from "react";
import { Modal } from "./Modal/Modal";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { fetchImages } from "./Api/Api";

export class App extends Component {
  state = {
    inputSearch : '',
    showModal: false,
    images: [],
    pageNr: 1,
  };

  handleSearchSubmit = async inputSearch => {
    const response = await fetchImages(inputSearch, 1);
    this.setState({ 
      inputSearch: inputSearch,
      images: response,
      pageNr: 1,
    });
    await console.log(this.state.images);
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
        <ImageGallery 
        images = {this.state.images}
        />
      </div>
    );
  };
}
