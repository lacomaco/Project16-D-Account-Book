import React from 'react';
import styled from 'styled-components';
import { GRAY } from '../../../constants/color';
import SettingsSidebarHeader from './settings-sidebar-header/SettingsSidebarHeader';
import SettingsSidebarBody from './settings-sidebar-body/SettingsSidebarBody';

const SettingsSidebarWrapper = styled.div`
  width: 14em;
  height: 100vh;
  overflow: auto;
  position: fixed;
  top: 0%;
  left: 0%;
  background-color: ${GRAY};
`;

interface SettingsSidebarProps {
  currentPage: string;
}

const SettingsSidebar = ({ currentPage }: SettingsSidebarProps): JSX.Element => {
  return (
    <SettingsSidebarWrapper>
      <SettingsSidebarHeader />
      <SettingsSidebarBody currentPage={currentPage} />
    </SettingsSidebarWrapper>
  );
};

export default SettingsSidebar;
