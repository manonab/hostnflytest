import styled from 'styled-components';

export const GroupContainer = styled.div`
`;

export const Characters = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;
`;

export const ImageCharacters = styled.img`
    width:330px;
    height: 430px;
    margin:5px;
    opacity: 1;
    border-radius: 10px;
    &:hover{
    cursor:pointer}
`;

export const TextImage = styled.h2`
    position: relative;
    top: -1.3em;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    background-color: #740001;
    padding-top: 30px;
    height: 60px;
    font-family: HARRYP__;
    font-weight: 100;
    width: 97%;
    margin-left: auto;
    margin-right: auto;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
    color: white;
`;
export const TextWrap = styled.div``;

export const WrapImageText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const ItemText = styled.h3`
    color:#fff;
    text-transform: uppercase;
    font-weight: 400;
    font-family: HARRYP__;
    &:hover{
    cursor:pointer}
    
`;
export const WrapContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 0;
    background-color: #740001;
    padding: 15px;
`;
export const WrapContainerItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 70%;
`;
export const WrapDisplayedItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 2em;
    font-weight: 400;
    &:hover{
    cursor:pointer}
`;

export const WrapList = styled.div`
    padding: 10px;
    background-color: #caa409;
    text-transform: capitalize;
    border-radius: 10px;
    color: #fff;
`;