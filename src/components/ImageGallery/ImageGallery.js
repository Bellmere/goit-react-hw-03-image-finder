import { Component } from "react";
import css from '../ImageGallery/ImageGallery.module.css';
import axios from 'axios';

export class ImageGallery extends Component {
    state = {
        searchValue: null,
        images: [],
        pageNr: 1,
    }

    componentDidUpdate(prevState, prevProps) {
        const prevSearch = prevProps.inputSearch;
        const currentSearch = this.props.inputSearch;
        const options = {
            headers: {
              key: '31733300-b569f31f89a42522564474d93',
            },
          };

        if (prevSearch !== currentSearch) {
            console.log(`${currentSearch}`);

            fetch(`https://pixabay.com/api/?q=${currentSearch}&page=${this.state.pageNr}&key=${options.headers.key}&image_type=photo&orientation=horizontal&per_page=12`)
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    images: data.hits.map(image => {
                        return {
                            id: image.id,
                            webformatURL: image.webformatURL,
                            largeImageURL: image.largeImageURL,
                            tags: image.tags,
            
                        }
                    }),
                    pageNr: 1
                })
            });

            
            // .then(res => {
            //     const images = res.data.hits.map(image => {
            //         return {
            //             id: image.id,
            //             webformatURL: image.webformatURL,
            //             largeImageURL: image.largeImageURL,
            //             tags: image.tags,
        
            //         };
            //     });
            //     this.setState({ images });
            // });
        }
    }

    render() {
        return (
            <ul className={css.gallery}>
            </ul>
        );
    }
}