import Logo from './Logo'
import Wrapper from './Wrapper'
import Item from './Item'
import Link from './Link'
import links from './links'
import styled from 'styled-components'

const SpanBeta = styled.span`
  color: #fd4b2f;
`
const LinkDiv = styled.div`
  color: #fd4b2f;
`

export default () =>
  <Wrapper style={{width: "100%"}}>
    <Item  style={{width: "30%"}} logo>
        <Link href='/'><Logo /><SpanBeta>Beta</SpanBeta></Link>
    </Item>
      <LinkDiv  style={{width: "70%"}}>
    {links.map((link, index) => (
      <Item  style={{float: "right"}} key={link.name + index}>
        <Link href={link.route} target={link.target}>{link.name}</Link>
      </Item>
    ))}
      </LinkDiv>
  </Wrapper>
