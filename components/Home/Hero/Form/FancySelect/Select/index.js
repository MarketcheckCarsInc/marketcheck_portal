import styled from 'styled-components'
import { rem } from 'polished'
import { mediaMax } from '%/styles/mixins'
import { em } from 'polished'
import { colors } from '%/styles'

const Selected = styled.span`
  color: ${props => props.blue ? colors.white : colors.blue};
  cursor: pointer;
  display: inline-block;
  font-size: ${em(16)};
  font-weight: bold;
  line-height: ${em(60)};
  vertical-align: middle;
  ${mediaMax.desktop`
   font-size: ${em(22)};
  `}
  ${mediaMax.laptop`
    font-size: 1.5em;
    line-height: 3.5em;
    width: 5em;
  `}
  ${mediaMax.largeTablet`
    font-size: 1.5em;
    line-height: 3.5em;
    width: 5em;
  `}
  ${mediaMax.phone`
    font-size: 1.5em;
    line-height: 3.5em;
    width: 5em;
  `}
`

const DropdownContent = styled.div`
  ${props => props.visible ? 'display: block;' : 'display: none;'}
  position: absolute;
  background-color: ${colors.white};
  min-width: 160px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 0.5em;
  border-bottom-right-radius: 0.5em;
  overflow-y: scroll;
  max-height: 305px;
  z-index: 9999999999;

  &::-webkit-scrollbar {
      height: 0.3em;
      width: 0.7em;
  }

  &::-webkit-scrollbar-track {
      width: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.blue};
    background-clip: content-box;
    border-radius: 5px;
    border: 3px solid transparent;
  }

  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
  }

  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
  ${mediaMax.desktop`
   min-width: 130px;
  `}
`

const DropdownItem = styled.a`
  color: black;
  cursor: pointer;
  padding: 12px 16px;
  text-align: left;
  text-decoration: none;
  display: block;
  font-weight: normal;
  min-width: 180px;
  ${mediaMax.desktop`
   font-size: ${em(12)};
  `}
  ${mediaMax.phone`
    font-size: 1em;
  `}

  &:hover {
    background-color: ${colors.gray};
  }
`


export {Selected, DropdownContent, DropdownItem}
