import styled from 'styled-components'

export const Div = styled.div`
display: flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
margin:0.5rem;
color: 	#FFD700;`

export const Perfil = styled.img`
height: 3rem;`

export const Titulo = styled.h1`
color:#FFD700;
width:100%;
text-align: center;
font-size:3rem;
margin:0;
`
export const ContTarjetas = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
grid-gap:1rem;
margin: 2rem;`

export const Pokemon = styled.div`
background-color: #0000CD;
color:#FFD700;
display: flex;
flex-direction:column;
align-items:center;
`
export const ImgPoke = styled.img`
width:80%`