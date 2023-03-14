import React, { useEffect, useState } from 'react'
import CardLocation from '../../components/CardLocation'

const Location = () => {
    const url = 'https://rickandmortyapi.com/api'
    const [location, setLocation] = useState([])
    const [prev, setPrev] = useState('')
    const [next, setNext] = useState('')

    useEffect(() => {
        httpRequest(`${url}/location`)
        }, [])

    const button = (type) => {
        type === 0
            ?
            httpRequest(prev)
            :
            httpRequest(next)     
    }
    
    const httpRequest = async (url) => {
        try{
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            setLocation(data.results)
            setNext(data.info.next)
            setPrev(data.info.prev)
        }catch(error){
            console.log('Error: ' + error.message)
        }
    }

    return (
        <div className='pages-div'>
            <div className='card'>
                {
                    location.map((item) => (
                        <CardLocation key={item.id} location={item} />
                    ))
                }    
            </div>
            <section className='page-buttons'>
                {
                    prev && <button onClick={() => button(0)}>PREVIOUS</button>
                }
                {
                    !prev && <button disabled>PREVIOUS</button>
                }
                {
                    next && <button onClick={() => button(1)}>NEXT</button>
                }
                {
                    !next && <button disabled>NEXT</button>
                }
            </section>
        </div>
    )
}

export default Location