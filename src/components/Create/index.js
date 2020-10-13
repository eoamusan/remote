import Input from 'components/common/Input'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from 'styles/shared/Button'
import countries from 'variables/countries'
import AOS from 'aos'
import { useDispatch, useSelector } from 'react-redux'
import { peopleActions } from 'redux/actions'
import { checkEmpty } from 'helpers'
import { push } from 'connected-react-router'

const Create = ({ personId, person: personToEdit }) => {
    const [person, setPerson] = useState({
        name: "",
        dob: "",
        role: "",
        country: "",
        salary: null,
    });

    const dispatch = useDispatch();
    const people = useSelector(state => state.people);

    useEffect(() => {
        AOS.init({
            duration: 500
        })
    }, []);

    useEffect(() => {
        if(personToEdit) setPerson(personToEdit);
    }, [personToEdit]);

    const onChange = event => {
        const { name, value } = event.target;

        setPerson({
            ...person,
            [name]: value
        });
    }

    const onSubmit = event => {
        event.preventDefault();

        if (checkEmpty(person) === false) {
            if (personId === undefined) {
                dispatch(peopleActions.add(person));
            } else {
                dispatch(peopleActions.edit(person));
            }
        }
    }

    const cancel = () => {
        dispatch(push("/"));
    }

    return (
        <CreateContainer className="white-bg box-shadow overflow-hidden">
            <Title data-aos="fade-down">
                <p className="black-color">{`${personId !== undefined ? 'Edit an' : 'Add a new'} employee`}</p>
                <p>Fill out the information of your new employee</p>
            </Title>
            <form onSubmit={onSubmit}>
                <Form data-aos="fade-up">
                    <Input
                        type="text"
                        name="name"
                        value={person.name}
                        onChange={onChange}
                        data={{
                            title: "Name",
                            subtitle: "First and last names",
                            placeholder: "e.g. Jane Doe"
                        }} />
                    <Input
                        type="text"
                        name="dob"
                        value={person.dob}
                        onChange={onChange}
                        data={{
                            title: "Birthdate",
                            subtitle: "DD/MM/YYYY",
                            placeholder: "e.g. 17/02/1990"
                        }} />
                    <Input
                        type="text"
                        name="role"
                        value={person.role}
                        onChange={onChange}
                        data={{
                            title: "Job title",
                            subtitle: "What is their role?",
                            placeholder: "e.g. Product manager"
                        }} />
                    <Input
                        type="select"
                        name="country"
                        value={person.country}
                        onChange={onChange}
                        data={{
                            title: "Country",
                            subtitle: "Where are they based?",
                            selectData: countries,
                            placeholder: "Choose country"
                        }} />
                    <Input
                        type="number"
                        name="salary"
                        value={person.salary}
                        onChange={onChange}
                        data={{
                            title: "Salary",
                            subtitle: "Gross yearly salary",
                            placeholder: "e.g. 50000"
                        }} />
                </Form>
                <BasePanel className="display-flex justify-center">
                    <Button type="button" onClick={cancel} className="inverted no-shrink border-box right-margin-20">Cancel</Button>
                    <Button type="submit" disabled={checkEmpty(person)} className="smooth no-shrink border-box">
                        {people.creating || people.editing ?
                            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                            : "Add employee"}
                    </Button>
                </BasePanel>
            </form>
        </CreateContainer>
    )
}

const CreateContainer = styled.div`
    border-radius: 10px;
`;

const Title = styled.div`
    padding: 30px;
    border-bottom: 1px solid #EAEDF3;
    &>p:first-of-type {
        font-size: 1.1rem;
        font-weight: 500;
        margin-bottom: 10px;
    }
    &>p:last-of-type {
        font-size: 0.8rem;
        color: #525F7F;
    }
`;

const BasePanel = styled.div`
    padding: 40px;
    background: #F9FAFF;
`;

const Form = styled.div`
    width: 50%;
    margin: auto;
    padding: 40px 0;
`;

export default Create;