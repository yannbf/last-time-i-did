import styled, { keyframes, css } from 'styled-components'
import { IAppTheme } from '@tidl/styles'

const popIn = keyframes`
0% {
  transform: scale(0);
}
45% {
  transform: scale(0);
}
90% {
  transform: scale(1.15);
}
100% {
  transform: scale(1);
}
`

const popOut = keyframes`
0% {
  transform: scale(1);
}
15% {
  transform: scale(0);
}
100% {
  transform: scale(0);
}
`

export const StyledFloatingButton = styled.button<{ isShowing: boolean }>`
  cursor: pointer;
  user-select: none;
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  border-radius: 50%;
  color: white;
  background: ${({ theme }: { theme: IAppTheme }) => theme.button.primary};
  width: 4rem;
  height: 4rem;
  border: none;
  box-shadow: 0px 9px 12px 3px rgba(2, 8, 20, 0.1);
  text-align: center;
  position: fixed;
  animation: ${props =>
    props.isShowing
      ? css`
          ${popIn} 0.5s ease-in
        `
      : css`
          ${popOut} 0.5s ease-in forwards
        `};
`
