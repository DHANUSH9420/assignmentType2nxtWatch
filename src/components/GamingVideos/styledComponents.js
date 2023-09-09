import styled from 'styled-components'

export const GamingContainer = styled.div`
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 25px;
  }
`
export const GamingVideosTitle = styled.div`
  display: flex;
  align-items: center;
`
export const GamingTitleIconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  margin-left: 20px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  justify-items: center;
`
export const GamingText = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  color: ${props => props.color};
`
export const GamingVideoList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`
