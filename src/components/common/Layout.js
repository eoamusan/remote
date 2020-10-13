import React from 'react'
import Header from './Header'
import styled from 'styled-components'

const Layout = ({ children }) => (
    <>
        <Header />
        <div className="full-view-height border-box full-width light-blue-bg top-padding-60 no-select">
            <PageContainer className="full-height full-width border-box top-padding-50 bottom-padding-50 overflow-auto-y">
                {children}
            </PageContainer>
        </div>
    </>
)

const PageContainer = styled.div`
    padding: 50px 10%;
    margin: auto;
`;

export default Layout;