import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { getColor } from '../../utils/colors'

export const CardGlobal = styled.div`
  width: 100%;
  border-radius: 15px;
  padding: 15px 20px;
  height: 150px;
  cursor: pointer;
  box-shadow: 0 5px 10px 2px rgba(0, 0, 0, .2);
`
export const CardLink = styled(Link)`
  text-decoration: none;
`

export const Card = styled(CardGlobal)`
  color: var(--ligth);
  background-color: ${props => `#${getColor(props.color)}`};
  position: relative;
  z-index: 1;

  &:hover{
    &::after {
      content: "";
      position: absolute;
      border-radius: 15px;
      z-index: 2;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, .2)
    }
    & span{
      display: block !important;
    }
  }
`

export const Title = styled.h3`
  position: relative;
  font-size: 1.1em;
  font-weight: 600;
  z-index: 3;
`

export const ContainerStar = styled.span`
  position: absolute;
  bottom: 10px;
  right: 20px;
  z-index: 3;
  font-size: 1.5em;

  ${props => props.fav && css`{
    color: #f8da2d;
  }`}
  ${props => !props.fav && css`{
    display: none;
  }`}
`
