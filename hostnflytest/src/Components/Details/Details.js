import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom';
import { Container, ContainerDatas, ContainerDate, ContainerHouse, ContainerSpecies, ContainerTitle, GroupContainer, ImageCharacters } from '../../styles/Details.style';

const Details = () => {

    const { name } = useParams();
    let location = useLocation();

    const [person, setPerson] = useState([]);

    //get the character user if not linked through URL
    const getValues = async () => {
        let res = await axios
            .get('https://hp-api.herokuapp.com/api/characters')
            .then((response) => {
                let res = response.data;
                setPerson(res.find((item) => item.name === name))
                console.log(res)
            })
            .catch((err) => console.log(err))
    };

    useEffect(() => {
        if (location.state === null) {
            getValues()
        } else if (location.state !== null) {
            setPerson(location.state)
        }
    }, []);

    let logo = "https://www.kindpng.com/picc/m/19-198867_transparent-harry-potter-hogwarts-crest-hd-png-download.png"
    let parchemin = "https://i.pinimg.com/474x/b4/fe/24/b4fe2453c2b664a250bfde5fdc9b1805.jpg"
    return (
        <GroupContainer>
            <Container>
            <ImageCharacters
                    src={person.image ? person.image : logo}
                />
                <ContainerDatas
                style={{
                    backgroundPosition:'center',
                    backgroundSize:"contain",
                    backgroundImage:`url(${parchemin})`
                }}
                >
                    <ContainerTitle>{person.name}</ContainerTitle>
                    <ContainerDate>{person.dateOfBirth}</ContainerDate>
                    <ContainerSpecies>Species: {person.species}</ContainerSpecies>
                    <ContainerHouse>House: {person.house}</ContainerHouse>
                </ContainerDatas>
            </Container>
        </GroupContainer>
    )
}

export default Details;