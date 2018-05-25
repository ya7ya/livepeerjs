import styled from 'styled-components'

const Content = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  max-width: 100%;
  margin: 32px auto 120px auto;
  padding: 0 16px;
  height: ${({ height }) => (typeof height === 'undefined' ? 'auto' : height)};
  width: ${({ width }) => (typeof width === 'undefined' ? '100%' : width)};
  background: ${({ background }) => background || 'none'};
  &.modal-enter {
    opacity: 0;
    z-index: 1;
  }
  &.modal-enter.modal-enter-active {
    opacity: 1;
    transition: opacity 250ms ease-in;
  }
`

export default Content
