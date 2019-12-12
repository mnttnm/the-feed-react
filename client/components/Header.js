import React, { PureComponent } from "react";
import styled from  'styled-components';
import Navigation from '../components/Navigation';

function PlainHeader({className}) {
  return (
      <div className={className}>
        <SiteTitle>
          <a href="/">The Feed</a>
        </SiteTitle>
        <Navigation/>
      </div>
  );
}

const Header = styled(PlainHeader)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    border-bottom: 5px solid #DBE0D3;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #B5905E;
`

const SiteTitle = styled.header`
  > a {
    text-transform: uppercase;
    text-decoration: none;
    color: #dbe0d3;
    font-size: 2em;
    padding: 20px;
    font-family: 'Roboto'
  }
`;

export default Header;
