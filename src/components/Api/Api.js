import axios from 'axios';

export const fetchImages = async (inputValue, pageNr) => {
    const options = {
        headers: {
          key: '31733300-b569f31f89a42522564474d93',
        },
      };

      const url = `https://pixabay.com/api/?q=${inputValue}&page=${pageNr}&key=${options.headers.key}&image_type=photo&orientation=horizontal&per_page=12`;

      const images = axios.get(url);

      return images.data.hits.map(image => {
            return {
                id: image.id,
                webformatURL: image.webformatURL,
                largeImageURL: image.largeImageURL,
                tags: image.tags,

            }
      })
};