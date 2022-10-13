import { collection, query, getDocs, onSnapshot } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import db from '../firebase'
import ImageSlider from './ImageSlider'
import Movies from './Movies'
import Viewers from './Viewers'
import { setMovies } from '../features/movie/movieSlice'

function Home() {
  const dispatch = useDispatch()
  useEffect(()=>{
    const moviesData = async()=>{
      const q = query(collection(db, "movies"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const movies = [];
        querySnapshot.forEach((doc) => {
          movies.push({ id: doc.id, ...doc.data() });
        });
      dispatch(setMovies(movies))
      });
    }
    moviesData()

  },[])

  return (
    <Container>
      <ImageSlider/>
      <Viewers/>
      <Movies />
    </Container>
  )
}

export default Home

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;
  // overflow-y: hidden;

  &:before{
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left:0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`