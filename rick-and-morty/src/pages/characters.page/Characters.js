import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'

const Characters = () => {
    const url = 'https://rickandmortyapi.com/api'
    const [character, setCharacter] = useState([])
    const [prev, setPrev] = useState('')
    const [next, setNext] = useState('')

    useEffect(() => {
        httpRequest(`${url}/character`)
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
            setCharacter(data.results)
            setNext(data.info.next)
            setPrev(data.info.prev)
        }catch(error){
            console.log('Error: ' + error.message)
        }
    }

    return (
        <main>
            <div className='card-character'>
                {
                    character.map((item) => (
                        <Card key={item.id} character={item} />
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
        </main>
    )
}

export default Characters