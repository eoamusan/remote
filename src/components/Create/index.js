import Input from 'components/common/Input';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'styles/shared/Button';
import countries from 'variables/countries';
import AOS from 'aos';

const Create = () => {
    useEffect(() => {
        AOS.init({
            duration: 500
        })
    }, []);

    return (
        <CreateContainer className="white-bg box-shadow overflow-hidden">
            <Title data-aos="fade-down">
                <p className="black-color">Add a new employee</p>
                <p>Fill out the information of your new employee</p>
            </Title>
            <Form data-aos="fade-up">
                <Input
                    type="text"
                    data={{
                        title: "Name",
                        subtitle: "First and last names",
                        placeholder: "e.g. Jane Doe"
                    }} />
                <Input
                    type="text"
                    data={{
                        title: "Birthdate",
                        subtitle: "DD/MM/YYYY",
                        placeholder: "e.g. 17/02/1990"
                    }} />
                <Input
                    type="text"
                    data={{
                        title: "Job title",
                        subtitle: "What is their role?",
                        placeholder: "e.g. Product manager"
                    }} />
                <Input
                    type="select"
                    data={{
                        title: "Country",
                        subtitle: "Where are they based?",
                        selectData: countries,
                        placeholder: "Choose country"
                    }} />
                <Input
                    type="number"
                    data={{
                        title: "Salary",
                        subtitle: "Gross yearly salary",
                        placeholder: "e.g. 50000"
                    }} />
            </Form>
            <BasePanel className="display-flex justify-center">
                <Link to="/">
                    <Button className="inverted no-shrink border-box right-margin-20">Cancel</Button>
                </Link>
                <Button className="no-shrink border-box">Add employee</Button>
            </BasePanel>
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

const Form = styled.form`
    width: 50%;
    margin: auto;
    padding: 40px 0;
`;

export default Create;