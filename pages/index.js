import Head from 'next/head'
import styled from 'styled-components'
import axios from 'axios'
import {useState} from 'react'

export const CardWhite = styled.div`
background-color: #fff;

  width: 300px;

 padding: 30px 30px;
  
 box-shadow: 0px 0px 5px 2px #00040845;

  h1{
  color: #2e374b;
  font-size: 1.6em;
  font-weight: 600;
  margin: 10px 0px 0px 5px;
  font-family: Arial, Helvetica, sans-serif;
}

  p{
   margin: 0px;
 text-align: left;
 font-family: Arial, Helvetica, sans-serif;
  color: #b6b9c2;
  font-size: 1.4em;
  margin: 10px 0px 0px 5px;
  }

`;

export const CardBlue = styled.div`
background-color: #2c7dfa;
  box-shadow: 5px 5px 3px #2c7ada;
  display: flex;
  height: 15em;
  width: 100%;
  align-items: center;
  justify-content: center;
  

  img{
    width: 100%;
    height: 100%;
 
}
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

`

export default function Home() {
  const [pokemonData, setPokemonData] = useState([])

  const getDataPokemon = async () => {
    const data = await axios.get('https://pokeapi.co/api/v2/pokemon')

    setPokemonData(data.data.results)
  }

  return (
    <Container>
          <CardWhite>     
            <CardBlue><img src="qrcode.svg" alt="code"/></CardBlue>   
            <h1>Improve your front-end skills by bulding projects</h1>
            <p>Scan the QR code to visit Frontend Mentor and Take your conding skills to the next level</p>
          </CardWhite>

          {pokemonData.length === 0 ? null : <>
          {pokemonData.map(value => (
            <div style={{background: 'blue'}} >
          {value.name}
            </div>
          ))}
          </>}
          <button onClick={()=> getDataPokemon()}>adasdasdsad</button>

    </Container>
  )
}