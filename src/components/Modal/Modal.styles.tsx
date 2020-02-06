import styled, { css } from 'styled-components'
import { device } from '@ltid/styles'

const topTriangle = css`
  &::after {
    content: '';
    position: absolute;
    left: 45%;
    top: -25px;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 25px solid white;
  }
`

const defaultAnimation = css`
  &.modal-enter {
    transform: translateY(100%);
  }
  &.modal-enter-active {
    transform: translateY(0);
    transition: transform 300ms;
  }
  &.modal-exit {
    transform: translateY(0);
  }
  &.modal-exit-active {
    transform: translateY(100%);
    transition: transform 300ms;
  }
`

const desktopAnimation = css`
  &.modal-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  &.modal-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 120ms, transform 120ms;
  }
  &.modal-exit {
    opacity: 1;
  }
  &.modal-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 120ms, transform 120ms;
  }
`

const desktopOverrides = css<{ small: boolean }>`
  @media ${device.desktop} {
    width: ${props => (props.small ? '400px' : '600px')};
    height: ${props => (props.small ? '400px' : '600px')};

    box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
    bottom: 0;
    left: ${props => (props.small ? 'calc(50% - (400px/2))' : 'calc(50% - (600px/2))')};
    top: ${props => (props.small ? 'calc(50% - (300px/2))' : 'calc(50% - (600px/2))')};
    position: absolute;
    border-radius: 0.75rem;

    ${desktopAnimation}
    ${props => props.small && topTriangle}
  }
`

export const ModalContent = styled.div<{ small: boolean }>`
  background-color: white;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  position: fixed;
  z-index: 100;
  top: ${props => (props.small ? '50%' : '5%')};
  right: 0;
  bottom: 0;
  left: 0;
  padding: 3em 1em 1em 1em;
  transform-origin: 'top center';
  box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);

  ${defaultAnimation}
`

export const Backdrop = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;

  &.backdrop-enter {
    opacity: 0;
  }
  &.backdrop-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }
  &.backdrop-exit {
    opacity: 1;
  }
  &.backdrop-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
`

export const TopBar = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
`

export const TopBarButton = styled.button`
  padding: 0.75rem;
  border: none;
  background: none;
  cursor: pointer;
`
