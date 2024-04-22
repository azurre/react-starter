import styled from '@emotion/styled';
import React, { FC } from 'react';
import BasePage from './BasePage';

const Layout = styled.div``;

export interface IProps {
  activeMenu?: string;
}

export const IndexPage: FC<IProps> = ({ activeMenu }) => {
  return (
    <BasePage activeMenu={activeMenu}>
      <Layout>Index Page</Layout>
    </BasePage>
  );
};
