import styled from '@emotion/styled';
import React, { FC, ReactNode } from 'react';

const Layout = styled.div`
  height: calc(100% - 40px);
  @media (min-width: 700px) {
    padding: 0 10px;
  }

  > .head {
    @media (min-width: 700px) {
      padding: 5px 0;
    }
  }
`;
const Footer = styled.div`
  text-align: right;
  padding: 0 100px;
  height: 40px;
  line-height: 40px;
  background: #00000010;

  @media (max-width: 700px) {
    display: none;
  }
`;

interface IProps {
  children?: ReactNode | ReactNode[];
  activeMenu?: string;
}

const BasePage: FC<IProps> = ({ children }) => {
  return (
    <>
      <Layout>
        <div className='head'>
          <div className='logo' />
          <div>TOP MENU</div>
        </div>
        {children}
      </Layout>
      <Footer>© 2022 Aleksandr Milenin</Footer>
    </>
  );
};
export default BasePage;
