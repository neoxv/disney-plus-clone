import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
        <Background>
          <img src="/images/coco.jpg" />
        </Background>

        <ImageTitle>
          <img src="/images/coco-title.png" />
        </ImageTitle>

        <Controls>
            <PlayButton>
              <img src="/images/play-icon-black.png" />
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
              <img src="/images/play-icon-white.png" />
              <span>Trailer</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
              <img src="/images/group-icon.png" />
            </GroupWatchButton>
        </Controls>
        <SubTitle>
        2005 | 13+ | 1h 17m | Family Movies
        </SubTitle>
        <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Description>

    </Container>
  )
}

export default Detail

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position:relative;
`

const Background = styled.div`
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ImageTitle = styled.div`
  margin-top: 50px;
  height: 30vh;
  min-height: 170px;
  width: 30vw;
  min-width: 200px;


  img{
    padding: 10px
    width:100%;
    height: 100%;
    object-fit: cover;
  }
`

const Controls = styled.div`
  display: flex;
  align-items: center;

`

const PlayButton = styled.button`
  border-radius: 4px;
  font-size:15px;
  display:flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  padding: 0px 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;
  text-transform: uppercase;

  &:hover{
    background: rgb(198, 198, 198);
  }

`
const TrailerButton = styled(PlayButton)`
  background: rgba(0,0,0,0.3);
  border: 1px solid rgb(249,249, 249);
  color: rgb(249,249, 249);
`
const AddButton = styled.div`
  width: 44px;
  height:44px;
  display:flex;
  align-items: center;
  justify-content:center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0,0,0,0.6);
  cursor: pointer;
  margin-right: 16px;
  span{
    font-size: 30px;
    color: white;
    padding-bottom: 5px;
  }

  
`

const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
  color: rgb(249,249,249)
`

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249,249,249);
  max-width: 760px;
`