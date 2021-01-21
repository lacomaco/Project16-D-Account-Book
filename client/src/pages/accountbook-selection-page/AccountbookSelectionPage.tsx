import React, { useEffect } from 'react';
import useStore from '@src/hook/use-store/useStore';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import AccountbookCard from '@src/components/accountbook-selection-page/accountbook-card/AccountbookCard';
import AddAccountbookCard from '@src/components/accountbook-selection-page/add-accountbook-card/AddAccountbookCard';
import AccountbookDeleteByUserModal from '@src/components/common/modals/accountbook-delete-by-user/AccountbookDeleteByUserModal';
import GiveAdminModal from '@src/components/common/modals/give-admin-modal/GiveAdminModal';
import AccountbookDeleteByAdminModal from '@src/components/common/modals/accountbook-delete-by-admin/AccountbookDeleteByAdminModal';
import FormModalCreateAccountbook from '@src/components/common/modals/form-modal-accountbook/FormModalCreateAccountbook';
import ProfileDropdown from '@src/components/common/profile-dropdown/ProfileDropdown';
import HeaderNavigationRightTopWrapper from '@src/components/common/header-navigation/HeaderNavigationRightTop';
import NaverLogo from '@src/components/provider-logo/NaverLogo';
import KakaoLogo from '@src/components/provider-logo/KakaoLogo';

const ViewWrapper = styled.div`
  font-family: 'Spoqa Han Sans';
  width: 40%;
  padding-top: 5%;
  margin: 0 auto;
  margin-bottom: 40px;

  a {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const EmailWrapper = styled.div`
  margin-right: 1rem;
  font-family: 'Spoqa Han Sans';
`;

const AccountbookSelectionPage: React.FC = () => {
  const { rootStore } = useStore();
  const { accountbookStore, userStore } = rootStore;
  const {
    deleteAccountbookByAdminStore,
    deleteAccountbookByUserStore,
    giveAdminStore,
    createAccountbookFormStore,
  } = useStore().rootStore.modalStore;

  const updateAccountbooks = () => {
    accountbookStore.updateAccountbooks();
  };

  useEffect(() => {
    updateAccountbooks();
  }, []);

  return (
    <>
      <HeaderNavigationRightTopWrapper>
        <HeaderWrapper>
          {userStore.provider === 'naver' ? <NaverLogo /> : <KakaoLogo />}
          <EmailWrapper>{userStore.email}</EmailWrapper>
          <ProfileDropdown />
        </HeaderWrapper>
      </HeaderNavigationRightTopWrapper>
      {createAccountbookFormStore.show && <FormModalCreateAccountbook />}
      {giveAdminStore.show && <GiveAdminModal />}
      {deleteAccountbookByUserStore.show && <AccountbookDeleteByUserModal />}
      {deleteAccountbookByAdminStore.show && <AccountbookDeleteByAdminModal />}
      <ViewWrapper>
        {accountbookStore.accountbooks.map((accountbook) => {
          return (
            <div key={accountbook.id}>
              <AccountbookCard
                id={accountbook.id}
                title={accountbook.title}
                color={accountbook.color}
                description={accountbook.description}
                accountbookId={accountbook.accountbookId}
              />
            </div>
          );
        })}
        <AddAccountbookCard onClick={() => createAccountbookFormStore.setShow(true)} />
      </ViewWrapper>
    </>
  );
};

export default observer(AccountbookSelectionPage);
