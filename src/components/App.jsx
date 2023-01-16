import React, { Component } from "react";
import { Modal } from "./Modal/Modal";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { fetchImages } from "./Api/Api";
import { Btn } from "./Button/Button";
import { Loader } from "./Loader/Loader";

export class App extends Component {
  state = {
    inputSearch : '',
    isLoading: false,
    showModal: false,
    images: [],
    pageNr: 1,
    modalImg: '',
    modalAlt: '',
  };

  async componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  };

  handleSearchSubmit = async inputSearch => {
    this.toggleLoad();
    const response = await fetchImages(inputSearch, 1);
    this.setState({ 
      inputSearch: inputSearch,
      images: response,
      pageNr: 1,
    });
    this.toggleLoad();
  };

  onClickMore = async () => {
    const {inputSearch, pageNr, images} = this.state;
    this.toggleLoad();
    const response = await fetchImages(inputSearch, pageNr + 1,)
    this.setState({
      images: [...images, ...response],
      pageNr: pageNr + 1,
    });
    this.toggleLoad();
  };

  toggleLoad = () => {
    this.setState(({isLoading}) => ({
      isLoading: !isLoading,
    }));
  };

  onModalOpen = e => {
    this.setState({
      showModal: true,
      modalImg: e.target.name,
      modalAlt: e.target.alt,
    });
  };

  onModalClose = () => {
    this.setState({
      showModal: false,
      modalImg: '',
      modalAlt: '',
    });
  };

  onKeyDown = event => {
    if (event.code === 'Escape') {
      this.onModalClose();
    }
  };

  render() {
    const {isLoading, showModal, modalImg, modalAlt, images} = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {isLoading? (
          <Loader />
        ) : (
          <React.Fragment>
              <ImageGallery 
              images = {images}
              onImageClick={this.onModalOpen}
              />
              {images.length > 0 ? (
              <Btn 
              onClick={this.onClickMore}
              />
              ) : null}
          </React.Fragment>
        )}
        {showModal ? (
          <Modal
            src={modalImg}
            alt={modalAlt}
            handleClose={this.onModalClose}
          />
        ) : null}
      </div>
    );
  };
}
