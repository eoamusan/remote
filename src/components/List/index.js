import React from 'react'
import styled from 'styled-components';

const List = () => (
    <>
        <div className="display-flex space-between align-items-center">
            <div className="display-flex align-items-bottom">
                <Black className="weight-500">People</Black>
                <Gray>3 employees</Gray>
            </div>
            <Button>Add employee</Button>
        </div>
        <Headings className="display-flex top-padding-60 border-box">
            <div className="width-20-percent weight-500">EMPLOYEE</div>
            <div className="width-20-percent weight-500">JOB TITLE</div>
            <div className="width-20-percent weight-500">COUNTRY</div>
            <div className="width-40-percent weight-500">SALARY</div>
        </Headings>
        <Person className="white-bg display-flex align-items-center">
            <div className="width-20-percent">
                <p className="size-one-rem weight-500 bottom-margin-5">Ann Henry</p>
                <p className="size-pointsevenfive-rem gray-color">04/12/1990</p>
            </div>
            <div className="width-20-percent gray-color">Product Manager</div>
            <div className="width-20-percent gray-color">United States</div>
            <div className="width-40-percent gray-color display-flex align-items-center space-between">
                <div>
                    60,000 USD per year
                </div>
                <Button className="inverted no-shrink border-box">Edit</Button>
            </div>
        </Person>
        <Person className="white-bg display-flex align-items-center">
            <div className="width-20-percent">
                <p className="size-one-rem weight-500 bottom-margin-5">Ann Henry</p>
                <p className="size-pointsevenfive-rem gray-color">04/12/1990</p>
            </div>
            <div className="width-20-percent gray-color">Product Manager</div>
            <div className="width-20-percent gray-color">United States</div>
            <div className="width-40-percent gray-color display-flex align-items-center space-between">
                <div>
                    60,000 USD per year
                </div>
                <Button className="inverted no-shrink border-box">Edit</Button>
            </div>
        </Person>
        <Person className="white-bg display-flex align-items-center">
            <div className="width-20-percent">
                <p className="size-one-rem weight-500 bottom-margin-5">Ann Henry</p>
                <p className="size-pointsevenfive-rem gray-color">04/12/1990</p>
            </div>
            <div className="width-20-percent gray-color">Product Manager</div>
            <div className="width-20-percent gray-color">United States</div>
            <div className="width-40-percent gray-color display-flex align-items-center space-between">
                <div>
                    60,000 USD per year
                </div>
                <Button className="inverted no-shrink border-box">Edit</Button>
            </div>
        </Person>
    </>
)

const Black = styled.span`
    color: #00234B;
    font-size: 1.5rem;
    margin-right: 10px;
`;

const Gray = styled.span`
    color: #778CA3;
    font-size: 0.8rem;
    padding-bottom: 3px;
`;

const Button = styled.button`
    background: #624DE3;
    border: 2px solid #624DE3;
    padding: 12px 25px;
    border-radius: 30px;
    outline: none;
    color: #FFF;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.16);
    &.inverted {
        border: 2px solid rgba(98, 77, 227, 0.3);
        color: #624DE3;
        background: transparent;
        min-width: 150px;
    }
`;

const Headings = styled.div`
    padding: 30px;
    padding-bottom: 20px !important;
    &>div {
        font-size: 0.75rem;
        color: #778CA3;
    }
`;

const Person = styled.div`
    padding: 30px;
    border-radius: 10px;
    margin-bottom: 10px;
    &>div {
        font-size: 0.95rem;
    }
    &>div:last-of-type>div {
        font-size: 0.95rem;
        margin-right: 20px;
    }
`;

export default List;