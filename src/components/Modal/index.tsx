import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { CSSTransition } from 'react-transition-group'

import { ModalContent, TopBar, TopBarButton, Backdrop } from './styled'
import { ClientOnlyPortal } from '../ClientOnlyPortal'
import { useKey } from '@tidl/hooks'
import { Icon } from '@tidl/components'

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
    touch-action: none;
  }
`

export const Modal = ({ children, isOpen, onClose, small = false }) => {
  useKey('escape', onClose)

  return (
    <ClientOnlyPortal selector="#modal">
      <CSSTransition in={isOpen} timeout={300} classNames="modal" unmountOnExit>
        <ModalContent small={small} data-testid="modal">
          <TopBar>
            <TopBarButton data-testid="modal-close-btn" onClick={onClose}>
              <Icon icon="times" size="lg" />
            </TopBarButton>
          </TopBar>
          {children}
        </ModalContent>
      </CSSTransition>

      <CSSTransition in={isOpen} timeout={300} classNames="backdrop" unmountOnExit>
        <Backdrop data-testid="modal-backdrop" small={small} onClick={onClose} />
      </CSSTransition>

      <GlobalStyle />
    </ClientOnlyPortal>
  )
}
