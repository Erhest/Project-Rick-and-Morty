import React, { useEffect, useState } from 'react'
import CardLocation from '../../components/CardLocation'

const Location = () => {
    const url = 'https://rickandmortyapi.com/api'
    const [location, setLocation] = useState([])

    useEffect(() => {
        const http = async () => {
            try{
                const response = await fetch(`${url}/location`)
                const data = await response.json()
                
                setLocation(data.results)
            }catch(error){
                console.log('Error: ' + error.message)
            }
        }        
        http()
    }, [])

    return (
        <div className='card'>
            {
                location.map((item) => (
                    <CardLocation key={item.id} location={item} />
                ))
            }    
        </div>
    )
}

export default Location