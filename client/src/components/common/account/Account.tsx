import React from 'react';
import styled from 'styled-components';
import { getTextColor } from '../../../utils/color';
import useStore from '../../../hook/use-store/useStore';

const AccountWrapper = styled.div<{ bgColor: string; textColor: string; shadow?: boolean }>`
  width: 17vw;
  height: 10vw;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ textColor }) => textColor};
  box-sizing: border-box;
  padding: 20px 20px;
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    box-shadow: ${({ shadow }) => (shadow === true ? '2px 3px 7px gray' : 0)};
  }
`;

interface AccountProps {
  text: string | undefined;
  bgColor: string;
  shadow?: boolean;
  onClick?: () => void;
}

const Account = ({ text, bgColor, shadow }: AccountProps): JSX.Element => {
  const { rootStore } = useStore();
  const updateAccountForm = rootStore.modalStore.updateAccountFormStore;

  const openUpdateAccountForm = (): void => {
    updateAccountForm.toggleShow();
  };

  const textColor = getTextColor(bgColor);
  return (
    <AccountWrapper bgColor={bgColor} textColor={textColor} shadow={shadow} onClick={openUpdateAccountForm}>
      {text}
    </AccountWrapper>
  );
};

export default Account;