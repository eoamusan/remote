import React from 'react'
import styled from 'styled-components'

const EmptyPerson = () => {
    return (
        <>
            {[...Array(4)].map((_, index) =>
                <PersonContainer key={index} className="white-bg display-flex align-items-center">
                    <div className="width-20-percent">
                        <Data className="light-blue-bg bottom-margin-10"></Data>
                        <Data className="small light-blue-bg"></Data>
                    </div>
                    <div className="width-20-percent gray-color">
                        <Data className="light-blue-bg"></Data>
                    </div>
                    <div className="width-20-percent gray-color">
                        <Data className="light-blue-bg"></Data>
                    </div>
                    <div className="width-40-percent gray-color display-flex align-items-center space-between">
                        <Data className="small-width light-blue-bg"></Data>
                        <EmptyButton className="inverted no-shrink border-box"></EmptyButton>
                    </div>
                </PersonContainer>
            )}
        </>
    )
}

const PersonContainer = styled.div`
    padding: 30px;
    border-radius: 10px;
    margin-bottom: 10px;
    &>div {
        font-size: 0.95rem;
    }
    &>div:last-of-type>div {
        font-size: 0.95rem;
    }
`;

const Data = styled.div`
    width: 80%;
    height: 20px;
    border-radius: 10px;
    &.small-width {
        width: 40%;
    }
    &.small {
        width: 60%;
        height: 15px;
    }
`;

const EmptyButton = styled.div`
    width: 150px;
    background: rgba(98, 77, 227, 0.3);
    height: 40px;
    border-radius: 30px;
`;

export default EmptyPerson;