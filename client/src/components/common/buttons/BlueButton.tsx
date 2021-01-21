import React from 'react';
import styled from 'styled-components';
import { ModalCommonButton } from '@src/types/buttonTypes';
import { BLUE, WHITE, DISABLED_GRAY } from '@src/constants/color';

const Wrapper = styled.div<{ disabled?: string }>`
  background-color: ${({ disabled }) => (disabled ? DISABLED_GRAY : BLUE)};
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  color: ${WHITE};
  cursor: pointer;
  pointer-events: ${({ disabled }) => disabled};
`;

const BlueButton: React.FC<ModalCommonButton> = ({ children, onClick, disabled }: ModalCommonButton) => {
  return (
    <Wrapper onClick={onClick} disabled={disabled}>
      {children}
    </Wrapper>
  );
};

export default BlueButton;
