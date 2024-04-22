import styled from '@emotion/styled';
import React, { FC } from 'react';
import BasePage from './BasePage';

const Layout = styled.div`
  width: 300px;
`;

interface IProps {
  activeMenu?: string;
}

export const TestPage: FC<IProps> = (props) => {
  return (
    <BasePage activeMenu={props.activeMenu}>
      <Layout>TEST PAGE</Layout>
    </BasePage>
  );
};
