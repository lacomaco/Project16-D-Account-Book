import React from 'react';
import HeaderNavigation from '../../components/common/header-navigation/HeaderNavigation';
import HeaderNavigationRightTopWrapper from '../../components/common/header-navigation/HeaderNavigationRightTop';
import Sidebar from '../../components/common/sidebar/Sidebar';
import { smallAccountbookItems } from '../../__dummy-data__/components/smallAccountbookItem/dummyData';
import PieGraphPage from './PieGraphPage';
import styled from 'styled-components';

const StatisticsPage: React.FC = () => {
  return (
    <>
      <Sidebar smallAccountbooks={smallAccountbookItems} />
      <HeaderNavigationRightTopWrapper>
        <HeaderNavigation currentPage={'statistics'} />
      </HeaderNavigationRightTopWrapper>
    </>
  );
};

export default StatisticsPage;