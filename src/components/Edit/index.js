/* eslint-disable */

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import Create from 'components/Create';
import { peopleActions } from 'redux/actions';

const Edit = () => {
    const [person, setPerson] = useState({});

    const { personId } = useParams();
    const dispatch = useDispatch();

    const people = useSelector(state => state.people);

    useEffect(() => {
        if (!personId) {
            dispatch(push('/'))
        } else {
            if (!people.person) {
                dispatch(peopleActions.fetchSinglePerson(personId));
            }
        }
    }, [dispatch, personId]);

    useEffect(() => {
        if (people.fetchingSingle === false && people.person) {
            setPerson(people.person);
        }
    }, [people.fetchingSingle, people.person]);

    return (
        <Create
            person={person}
            personId={personId} />
    )
}

export default Edit;