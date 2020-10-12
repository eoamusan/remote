import React from 'react'
import styled from 'styled-components'

const Header = () => (
    <HeaderContainer className="full-width box-shadow height-60 absolute top left white-bg"></HeaderContainer>
);

const HeaderContainer = styled.div`
    z-index: 1;
`;

export default Header;