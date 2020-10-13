import React from 'react'
import styled from 'styled-components'

const Header = () => (
    <HeaderContainer className="full-width box-shadow height-60 absolute top left white-bg display-flex alig-items-center flex-end">
        <div className="smooth display-flex align-items-center">
            <div className="height-40 width-40 border-radius-full light-orange-bg"></div>
            <div>
                <p className="black-color size-pointnine-rem">Julie Howard</p>
                <p className="size-pointeight-rem gray-color">Admin</p>
            </div>
        </div>
    </HeaderContainer>
);

const HeaderContainer = styled.div`
    z-index: 1;
    box-sizing: border-box;
    padding-right: 10%;
    &>div {
        padding: 5px;
        border-radius: 10px;
        cursor: pointer;
    }
    &>div>div:last-of-type {
        margin-left: 10px;
    }
    &>div:hover {
        transform: scale(1.05);
    }
`;

export default Header;