import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'

const Characters = () => {
    const url = 'https://rickandmortyapi.com/api'
    const [character, setCharacter] = useState([])
    const [previous, setPrevious] = useState('')
    const [next, setNext] = useState('')

    useEffect(() => {
        const http = async () => {
            try{
                const response = await fetch(`${url}/character`)
                const data = await response.json()
                console.log(data)
                setCharacter(data.results)
                setNext(data.next)
                setPrevious(data.previous)
            }catch(error){
                console.log('Error: ' + error.message)
            }
        }
        http()
        }, [])

    const button = (type) => {
        type === 0
            ?
            http(previous)
            :
            http(next)     
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
                    previous && <button onClick={() => button(0)}>⬅️</button>
                }
                {
                    !previous && <button disabled>⬅️</button>
                }
                {
                    next && <button onClick={() => button(1)}>➡️</button>
                }
                {
                    !next && <button disabled>➡️</button>
                }
            </section>
        </main>
    )
            }

export default Characters