import React, {useEffect, useState} from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Dropdown from './components/Dropdown';
import Table from './components/Table';

const url = 'https://swapi.dev/api';

export default function App() {
    const [data, setData] = useState([]);
    const [people, setPeople] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const fetchPeople = async (selectedPlanet) => {
        setIsLoading(true);
        const residentsData = await Promise.all(
            selectedPlanet.residents.map(async (residentURL) => {
                const residentResponse = await fetch(residentURL);
                const residentData = await residentResponse.json();

                return residentData;
            })
        );
        setIsLoading(false);
        console.log(residentsData)
        setPeople(residentsData);
    };

    useEffect(() => {
        setIsLoading(true);
        fetch(`${url}/planets`)
        .then(response => {
            setIsLoading(false);
            if (response.status !== 200) {
                throw new Error('Bad response from server');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            setData(data.results);
        });
    }, []);

    return (
        <Container>
            <Box
                component="form"
                sx={{
                '& > :not(style)': { m: 3, width: '100ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <Dropdown label="Planet Name" values={data} setSelctedValue={(selectedPlanet) => { fetchPeople(selectedPlanet);}}/>
                {
                    isLoading ? <Box sx={{ display: 'flex' }}>
                                    <CircularProgress />
                                </Box> 
                                : people === undefined 
                                    ? <Box sx={{ display: 'flex' }}>Please select planet to display list of poele.</Box> 
                                    : <Table rows={people}/>
                }
                
            </Box>
        </Container>
    )
}
