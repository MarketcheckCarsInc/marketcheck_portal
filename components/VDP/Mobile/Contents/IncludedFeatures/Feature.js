import styled from 'styled-components'

const Feature = styled.div`
  max-width: 50%;
  flex-basis: 50%;
  text-align: center;
  margin-bottom: 50px;
  padding: 0 10px;

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
