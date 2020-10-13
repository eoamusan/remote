import styled from 'styled-components'

const Button = styled.button`
    min-width: 150px;
    height: 45px;
    background: #624DE3;
    border: 2px solid #624DE3;
    padding: 0 25px;
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

export default Button;