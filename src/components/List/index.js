import EmptyPerson from 'components/common/empty-states/EmptyPerson';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { peopleActions } from 'redux/actions';
import styled from 'styled-components';
import Button from 'styles/shared/Button';
import Person from './snippets/Person';
import AOS from 'aos';

const List = () => {
    const dispatch = useDispatch();

    const people = useSelector(state => state.people);

    useEffect(() => {
        dispatch(peopleActions.fetch());
        AOS.init({
            duration: 500
        });
    }, [dispatch]);

    return (
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
            <div data-aos="fade-up">
                {
                    people?.people === undefined ?
                        <EmptyPerson />
                        :
                        people.people.map((person, index) =>
                            <Person
                                key={index}
                                person={person} />
                        )
                }
            </div>
        </>
    )
}

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