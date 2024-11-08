// import { createClient } from 'pexels';

import { query } from "express"

// const client = createClient('');
// const query = 'Nature';

// client.photos.search({ query, per_page: 1 }).then(photos => {...photos});


const API_KEY = ''

const gallery = document.querySelector('.gallery')
const searchInput = document.querySelector('.search-input')
const form = document.querySelector('.search-form')

const ImageSearch = (search: any) => {
    fetch("https://api.pexels.com/v1/search?query=dogs&per_page=2", 
    {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: API_KEY,
        },
    })
        .then(res => res.json())
        .then(data => displayPhotos(data))
}

// ImageSearch("dog")

export const displayPhotos = (query: any) => {
    let allPhotos = query.photos
    // console.log(allPhotos, 'dog')

    return allPhotos
}
export default ImageSearch;
