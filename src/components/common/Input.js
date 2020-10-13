import React from 'react'
import styled, { css } from 'styled-components'

const Input = ({ name, value, onChange, type, data }) => (
    <InputContainer className="full-width bottom-margin-30">
        {type === "text" || type === "number" ?
            <FormInput className="full-width bottom-margin-5" required name={name} value={value || ""} placeholder={data.placeholder} type={type} onChange={onChange} />
            :
            <FormSelect className="full-width bottom-margin-5" required name={name} value={value || ""} onChange={onChange}>
                <option value="" disabled>{data.placeholder}</option>
                {data.selectData?.map((option, index) =>
                    <option key={index}>{option}</option>
                )}
            </FormSelect>
        }
        <div className="smooth height-1"></div>
        <Label className="title absolute top left">{data.title}</Label>
        <Label className="black-color">{data.subtitle}</Label>
    </InputContainer>
)

const InputContainer = styled.div`
    padding-top: 15px;
    &>div {
        background: #624DE3;
        margin-top: -6px;
        width: 0;
    }
`;

const FormStyles = css`
    border: none !important;
    border-bottom: 1px solid #CED5DB !important;
    outline: none !important;
    height: 35px;
    font-size: 1.1rem;
    &::placeholder {
        color: rgba(85, 95, 127, 0.9);
    }
    &:focus~div {
        width: 100%;
    }
    &:focus~label {
        color: #624DE3;
    }
`;

const FormInput = styled.input`${FormStyles}`;
const FormSelect = styled.select`
    ${FormStyles}
    &>option:disabled {
        opacity: 0.5;
    }
`;

const Label = styled.label`
    font-size: 0.8rem;
    color: rgba(0, 35, 75, 0.5);
`;

export default Input;