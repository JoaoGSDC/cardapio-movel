import styled from 'styled-components';

export const Side = styled.div`
    background-color: #202020;
    color: #ffffff;
    height: 100%;
    width: 100px;
    top: 0;
    position: fixed;
`

export const Icon = styled.div`
    font-size: 30px;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 6px;

    &:hover {
        cursor: pointer;
    }
`

export const OptionsContainer = styled.div`
    padding: 25px 0 25px 0px;
    border-top: 1px solid #222222;
    border-bottom: 1px solid #222222;
    text-align: center;

    &:hover {
        color: #ffa500;
        background-color: #222222;
    }
`

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 12px;
    align-items: center;
    
    svg {
        font-size: 22px;
        margin-bottom: 5px;
    }

    div {
        display: flex;
        flex-direction: column;
    }
`