import styled from 'styled-components'

const Feature = styled.div`
  text-align: left;
  padding: 0 10px;
  padding: 0 10px;
  width: 33.33334% !important;
  float: left;

  svg {
    display: block;
    width: 40px;
    height: 40px;
    margin: 0 auto 20px;
  }
`

const Name = styled.h6`
  font-size: 14px;
  line-height: 2;
`

export default ({
  name,
  icon: Icon
}) =>
  <Feature>
    {Icon && <Icon />}
    <Name>{name}</Name>
  </Feature>
