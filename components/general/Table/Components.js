import styled from 'styled-components'

export const Table = styled.div`
  & + & {
    margin-top: 35px;
  }
`

export const TRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  padding: 10px 20px;
  background-color: #fff;

  &:nth-child(odd) {
    background-color: #f7f8f8;
  }
`

export const THeader = styled(TRow)`
  background-color: #f0f0f1;
`

export const TCol = styled.div`
  padding: 0 10px;
  flex-basis: 20%;
`

export const Text = styled.p`
  color: #81858a;
  font-size: 14px;
  line-height: 2;
`

export const Title = styled.h5`
  color: #000;
  font-size: 10px;
  line-height: 12px;
  text-transform: uppercase;
  font-weight: 500;
`
