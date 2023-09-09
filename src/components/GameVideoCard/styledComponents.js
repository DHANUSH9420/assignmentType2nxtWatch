import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
  text-decoration: none;
`
export const GamingListItem = styled.li`
  background: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 280px;
    margin-right: 20px;
  }
`
export const GamingThumbnailImage = styled.img`
  width: 100vw;
  height: 300px;
  align-self: center;
  @media screen and (min-width: 768px) {
    width: 280px;
  }
`

export const GamingContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px;
`
export const GamingTittle = styled.p`
  font-family: Roboto;
  font-size: 15px;
  color: ${props => props.color};
  margin-bottom: 0px;
`
export const GamingViewAndData = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => props.color};
`
