import React from 'react'
import Header from './Header'
import styled from 'styled-components'

const Layout = ({ children }) => (
    <>
        <Header />
        <div className="full-view-height border-box full-width light-blue-bg top-padding-60 no-select">
            <PageContainer className="full-height full-width border-box top-padding-50 bottom-padding-50">
                {children}
            </PageContainer>
        </div>
    </>
)

const PageContainer = styled.div`
    width: 80%;
    margin: auto;
`;

export default Layout;