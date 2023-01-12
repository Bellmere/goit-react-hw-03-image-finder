import { Component } from "react";
import axios from 'axios';
import css from '../ImageGallery/ImageGallery.module.css';

export class ImageGallery extends Component {
    state = {
        searchValue: null,
        images: [],
        headers: {
            key: '31733300-b569f31f89a42522564474d93',
          },
    }

    componentDidUpdate(prevState, prevProps) {
        const prevSearch = prevProps.inputSearch;
        const currentSearch = this.props.inputSearch;

        if (prevSearch !== currentSearch) {
            axios.get(`https://pixabay.com/api/?q=${currentSearch}&page=1&key=${this.state.headers.key}&image_type=photo&orientation=horizontal&per_page=12&page=1`)
            .then(res => {
                const images = res.data;
                this.setState({ images });
            });
            console.log(this.state.images);
        }
    }

    render() {
        return (
            <ul className={css.gallery}>
            </ul>
        );
    }
}