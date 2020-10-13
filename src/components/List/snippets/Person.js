import { push } from 'connected-react-router';
import { currency } from 'helpers';
import React from 'react'
import { useDispatch } from 'react-redux';
import { peopleActions } from 'redux/actions';
import styled from 'styled-components'
import Button from 'styles/shared/Button';

const Person = ({ person }) => {
    const dispatch = useDispatch();

    const edit = () => {
        dispatch(peopleActions.setPersonToEdit(person));
        dispatch(push(`/edit-person/${person.id}`));
    }

    return (
        <PersonContainer className="white-bg display-flex align-items-center">
            <div className="width-20-percent">
                <p className="size-one-rem weight-500 bottom-margin-5">{person.name}</p>
                <p className="size-pointsevenfive-rem gray-color">{person.dob}</p>
            </div>
            <div className="width-20-percent gray-color">{person.role}</div>
            <div className="width-20-percent gray-color">{person.country}</div>
            <div className="width-40-percent gray-color display-flex align-items-center space-between">
                <div>
                    {person.salary ? currency(person.salary) : 0} USD per year
                </div>
                <Button onClick={edit} className="inverted no-shrink border-box">Edit</Button>
            </div>
        </PersonContainer>
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
        margin-right: 20px;
    }
`;

export default Person;