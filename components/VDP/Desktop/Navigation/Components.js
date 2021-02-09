import styled from 'styled-components'
import { colors } from '%/styles'

export const Navigation = styled.nav`
  position: fixed;
  height: 60px;
  top: 66px;
  left: 0;
  width: 100%;
  padding: 14px 0;
  z-index: 3;
  background: ${colors.white};
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2);
`

export const NavLink = styled.a`
  display: block;
  font-size: 12px;
  line-height: 14.4px;
  text-transform: uppercase;
  color: #6d7984;
`

export const Cta = styled.a`
  font-size: 13px;
  line-height: 15.6px;
  color: #fff;
  background: ${colors.green};
  text-align: center;
  padding: 8px 12px;
  display: inline-block;
  border-radius: 4px;
`
