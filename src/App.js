import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Loader from './components/Loader';
import Images from './components/Images';
import axios from 'axios';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component'



const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }
`;

const Wrapper = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = () => {
    const endpoints = 'https://api.unsplash.com';
    const key = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

    axios
      .get(`${endpoints}/photos/random?client_id=${key}&count=12`)
      .then(res => setImages([...images, ...res.data]))
      .catch(err => console.log(err))
  }

  return (
    <>
      <Header />
      <GlobalStyle />
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <Wrapper>
          {images.map(image => (
            <>
              <Images url={image.urls.thumb} key={image.id} />
            </>
          ))}
        </Wrapper>
      </InfiniteScroll>
    </>
  );
}

export default App;
