import React, {useEffect, useState} from 'react'

import Dropdown from './components/Dropdown';

export default function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/planets')
        .then(response => {
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
        <div>
            <Dropdown label="Planet Name" values={data} setSelctedValue={() => {}}/>
            <h1>Hello to React app</h1>
        </div>
    )
}
