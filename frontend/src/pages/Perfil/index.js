import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core'
import DataProfile from './DataProfile';
//import Navbar from '../Navbar';
import api from '../../services/api'

function Profile(props) {
    const [items, setItems] = useState([])
    useEffect(() => {
        const emailUser = localStorage.getItem('email')
        const getItems = async () => {
            try {
                const response = await api.get('/resume', { headers: { email: emailUser } });
                setItems(response.data)
                console.log(response.data);
            } catch (error) {
                console.log(error);
                alert("Erro em carregar os dados")
            }
        }
        getItems()
    }, []);

    const updateState = (item) => {
        const itemIndex = items.findIndex(data => data.id === item.id)
        const newArray = [...items.slice(0, itemIndex), item, ...items.slice(itemIndex + 1)]
        setItems(newArray)
    }
    return (
        <>
            {/* <Navbar /> */}
            <Container>
                <h2 style={{ margin: 20, color: '#00BCD4' }}>Olá, {items.nome}</h2>
                            <DataProfile items={items} updateState={updateState} />
            </Container>
        </>
    )
}

export default Profile;