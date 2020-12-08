import styled from 'styled-components';

export const SelectAddContainer = styled.div`
    display: inline-flex;
    position: relative;
    min-width: 200px;
    flex-direction: column;
    vertical-align: top;
    margin-right: 25px;
    margin-top: 5px;
    margin-left: 5px;
    color: #ffffff;

    input {
        margin: 10px;
        width: 120px;
    }

    button {
        width: 45px;
        margin-left: 5px;
    }
`

export const Select = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    height: 50px;
    background: #3d3d3d;
    align-items: center;
    padding: 2px 10px;
    width: 100%;
`

export const Triangle = styled.div`
    width: 0; 
    height: 0; 
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 7px solid #949396;
`

export const Options = styled.div`
    display: flex;
    background: #181818;
    position: absolute;
    width: calc(100% + 20px);
    z-index: 10;
    margin-top: 57px;
    flex-direction: column;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`

export const OptionContainer = styled.div`
    overflow: auto;
    max-height: 175px;
`

export const Option = styled.div`
    display: flex;
    padding: 15px;
    border-top: 1px solid #121212;
    justify-content: space-between;

    svg {
        cursor: pointer;
    }

    &:hover{
        color: #ffa500;
        background-color: #252525;
        cursor: pointer;
    }
`