import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

import { pullRight, h1 } from './layout.css';

const Layout = ({ children }) => {
  return (
    <Container>
      <Link to="/">
        <Header as="h1" className={h1}>
          Sample React Web Application
        </Header>
      </Link>
      {children}
      <Divider />
      <p className={pullRight}>
        BY <Icon name="heart" color="red" /> Sabarish Dhanarajan
      </p>
    </Container>
  );
};

export default Layout;
