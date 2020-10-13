import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'styles/shared/Button';
import Person from './snippets/Person';

const List = () => (
    <>
        <div className="display-flex space-between align-items-center">
            <div className="display-flex align-items-bottom">
                <Black className="weight-500">People</Black>
                <Gray>3 employees</Gray>
            </div>
            <Link to="/add-person">
                <Button>Add employee</Button>
            </Link>
        </div>
        <Headings className="display-flex top-padding-60 border-box">
            <div className="width-20-percent weight-500">EMPLOYEE</div>
            <div className="width-20-percent weight-500">JOB TITLE</div>
            <div className="width-20-percent weight-500">COUNTRY</div>
            <div className="width-40-percent weight-500">SALARY</div>
        </Headings>
        <Person
            person={{
                name: "Ann Henry",
                dob: "04/12/1990",
                role: "Product Manager",
                country: "United States",
                salary: "60,000"
            }} />
        <Person
            person={{
                name: "Ann Henry",
                dob: "04/12/1990",
                role: "Product Manager",
                country: "United States",
                salary: "60,000"
            }} />
        <Person
            person={{
                name: "Ann Henry",
                dob: "04/12/1990",
                role: "Product Manager",
                country: "United States",
                salary: "60,000"
            }} />
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

const Headings = styled.div`
    padding: 30px;
    padding-bottom: 20px !important;
    &>div {
        font-size: 0.75rem;
        color: #778CA3;
    }
`;

export default List;