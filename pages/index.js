import Head from 'next/head'
import styled from 'styled-components'


export const CardWhite = styled.div`
background-color: #fff;
  position: absolute;
  top: 15%;
  left: 35%;
  width: 22em;
  height: 30em;
  padding-left: 1.5em;
  padding-top: 1em;
  padding-right: 1.5em;
  box-shadow: 3px 3px 3px 4px #cdf;

  h1{position: absolute;
  margin-top: 10em;
  margin-left: 1.5em;
  margin-right: 1.5em;
  color: #2e374b;
  font-size: 1.6em;
  font-weight: 600;}

  p{
    position: absolute;
  margin-top: 15em;
  color: #b6b9c2;
  font-size: 1.4em;
  margin-left: 1.8em;
  margin-right: 2em;
  text-indent: 1em;
  }

`;

export const CardBlue = styled.div`
background-color: #2c7dfa;
  box-shadow: 5px 5px 3px #2c7ada;
  position: absolute;
  display: flex;
  height: 15em;
  width: 22em;
 
  img{
  width: 11em;
  height: 11em;
  margin-left: 5.6em;
  margin-top: 2em;
}
`;

export default function Home() {
  return (
    <div>
      
       
          <CardWhite>     
            <CardBlue><img src="qrcode.svg" alt="code"/></CardBlue>   
            <h1>Improve your front-end skills by bulding projects</h1>
            <p>Scan the QR code to visit Frontend Mentor and Take your conding skills to the next level</p>
          </CardWhite>
          
    </div>
  )
}
