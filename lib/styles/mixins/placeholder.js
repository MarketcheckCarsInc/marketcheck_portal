import { css } from 'styled-components'

const placeholder = (...args) => css`
  &::-webkit-input-placeholder {
    ${css(...args)}
  }

  &::-moz-placeholder {
    ${css(...args)}
  }

  &:-ms-input-placeholder {
    ${css(...args)}
  }

  &::-ms-input-placeholder {
    ${css(...args)}
  }

  &:placeholder-shown {
    ${css(...args)}
  }
`

export default placeholder
