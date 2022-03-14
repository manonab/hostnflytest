import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { GroupContainer, Characters, ImageCharacters, TextImage, WrapImageText, WrapContainer, WrapContainerItem, WrapDisplayedItem, ItemText, WrapList } from '../../styles/Home.styles';

const Home = () => {

    const [characters, setCharacters] = useState([]);

    const [houseDisplay, setHouseDisplay] = useState(false);
    const [status, setStatus] = useState(false);
    const [species, setSpecies] = useState(false);
    const [display, setDisplay] = useState(true);

    useEffect(() => {
        const getValues = async () => {
            let responses = await axios.get('https://hp-api.herokuapp.com/api/characters')
                .then((res) => {
                    setCharacters(res.data)
                })
                .catch((err) => console.log(err))
        };
        getValues();

    }, []);

    //filter by house
    const checkHouse = (value) => {
        let result = axios.get("https://hp-api.herokuapp.com/api/characters")
            .then((res) => {
                let values = res.data;
                let filter = values.filter((item) => item.house === value)
                setCharacters(filter)
            })
            .catch((err) => console.log(err))
    };

    //filer by species
    const checkSpecies = (value) => {
        let result = axios.get("https://hp-api.herokuapp.com/api/characters")
            .then((res) => {
                let values = res.data;
                let filter = values.filter((item) => item.species === value)
                setCharacters(filter)
            })
            .catch((err) => console.log(err))
    };

    //filter values by status
    const checkStatus = (value) => {
        if (value === "hogwartsStudent") {
            let result = axios.get("https://hp-api.herokuapp.com/api/characters")
                .then((res) => {
                    let values = res.data;
                    let filter = values.filter((item) => item.hogwartsStudent === true)
                    setCharacters(filter)
                })
                .catch((err) => console.log(err))
        } else if (value === "hogwartsStaff") {
            let result = axios.get("https://hp-api.herokuapp.com/api/characters")
                .then((res) => {
                    let values = res.data;
                    let filter = values.filter((item) => item.hogwartsStaff === true)
                    setCharacters(filter)
                })
                .catch((err) => console.log(err))
        } if (value === "other") {
            let result = axios.get("https://hp-api.herokuapp.com/api/characters")
                .then((res) => {
                    let values = res.data;
                    let filter = values.filter((item) => item.hogwartsStaff === false && item.hogwartsStudent === false)
                    setCharacters(filter)
                })
                .catch((err) => console.log(err))
        }
    };
    //openStatus bar and close the other
    const openStatus = () => {
        setStatus((prev) => (!prev))
        setHouseDisplay(false)
        setSpecies(false)
    };
    //openHouse bar and close the other
    const openHouse = () => {
        setStatus(false)
        setHouseDisplay((prev) => (!prev))
        setSpecies(false)
    };
    //openSpecies bar and close the other
    const openSpecies = () => {
        setStatus(false)
        setHouseDisplay(false)
        setSpecies((prev) => (!prev))
    };

    return (
        <GroupContainer>
            {display &&
                <WrapContainer>
                    <WrapContainerItem>
                        <ItemText onClick={() =>openHouse()}>
                            House
                        </ItemText>
                        <ItemText onClick={() => openSpecies()}>
                            Species
                        </ItemText>
                        <ItemText onClick={() => openStatus()}>
                            Status
                        </ItemText>
                    </WrapContainerItem>
                </WrapContainer>
            }

            {houseDisplay &&
                <WrapDisplayedItem>
                    <WrapList onClick={() => checkHouse("Gryffindor")}>
                        Gryffindor
                    </WrapList>
                    <WrapList onClick={() => checkHouse("Slytherin")}>Slytherin</WrapList>
                    <WrapList onClick={() => checkHouse("Ravenclaw")}>Ravenclaw</WrapList>
                    <WrapList onClick={() => checkHouse("Hufflepuff")}>Hufflepuff</WrapList>
                </WrapDisplayedItem>
            }
            {species &&
                <WrapDisplayedItem>
                    <WrapList onClick={() => checkSpecies("human")}>human</WrapList>
                    <WrapList onClick={() => checkSpecies("half-giant")}>half-giant</WrapList>
                    <WrapList onClick={() => checkSpecies("werewolf")}>werewolf</WrapList>
                    <WrapList onClick={() => checkSpecies("cat")}>cat</WrapList>
                    <WrapList onClick={() => checkSpecies("goblin")}>goblin</WrapList>
                    <WrapList onClick={() => checkSpecies("poltergeist")}>poltergeist</WrapList>
                    <WrapList onClick={() => checkSpecies("ghost")}>ghost</WrapList>
                    <WrapList onClick={() => checkSpecies("three-headed dog")}>three-headed dog</WrapList>
                    <WrapList onClick={() => checkSpecies("centaur")}>centaur</WrapList>
                    <WrapList onClick={() => checkSpecies("dragon")}>dragon</WrapList>
                    <WrapList onClick={() => checkSpecies("house-elf")}>house-elf</WrapList>
                    <WrapList onClick={() => checkSpecies("hippogriff")}>hippogriff</WrapList>
                    <WrapList onClick={() => checkSpecies("giant")}>giant</WrapList>
                    <WrapList onClick={() => checkSpecies("acromantWrapDisplayedItema")}>acromantula</WrapList>
                    <WrapList onClick={() => checkSpecies("vampire")}>vampire</WrapList>
                    <WrapList onClick={() => checkSpecies("house-elf")}>house-elf</WrapList>
                    <WrapList onClick={() => checkSpecies("half-human")}>half-human</WrapList>

                </WrapDisplayedItem>
            }
            {status &&
                <WrapDisplayedItem>
                    <WrapList onClick={() => checkStatus("hogwartsStudent")}>Hogwarts Student</WrapList>
                    <WrapList onClick={() => checkStatus("hogwartsStaff")}>Hogwarts Staff</WrapList>
                    <WrapList onClick={() => checkStatus("other")}>Other</WrapList>
                </WrapDisplayedItem>
            }

            <Characters>
                {characters
                    .map((item) => (
                        <NavLink
                            to={`details/${item.name}`}
                            state={item}
                            style={{ textDecoration: "none" }}
                        >
                            <div key={item.name}>
                                {item.image ?
                                    <WrapImageText>
                                        <ImageCharacters
                                            src={item.image}
                                            alt={item.name + " image"}
                                        />
                                        <TextImage>{item.name}</TextImage>
                                    </WrapImageText>
                                    :
                                    <WrapImageText>
                                        <ImageCharacters
                                            src={"https://m.media-amazon.com/images/I/71ei7eAXdQL._AC_SX425_.jpg"}
                                            alt={item.name + " image"}
                                        />
                                        <TextImage>{item.name}</TextImage>
                                    </WrapImageText>
                                }
                            </div>
                        </NavLink>
                    ))}
            </Characters>
        </GroupContainer>
    )
}
export default Home;