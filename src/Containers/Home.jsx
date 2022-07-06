import React, { useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'
import { AiOutlineBell } from 'react-icons/ai'
import { IoLogOutOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { ActionLogoutAsync } from '../Redux/actions/actionLogin'
import axios from 'axios'
import { ContTarjetas, Div, ImgPoke, Perfil, Pokemon, Titulo } from '../Styles/Home'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const [pokemones, setPokemones] = useState([])
  const cargarApi = async () => {
    var Arreglo = []
    for (let index = 1; index <= 25; index++) {
      let resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${index}`)
      var resp2 = resp.data
      Arreglo.push(resp2)
    }
    setPokemones(Arreglo)


  }
  useEffect(() => {
    cargarApi()
  }, [])

  const auth = getAuth()
  const datos = (auth.currentUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <>
      <Div><Perfil src={datos.photoURL !== null ? datos.photoURL : 'https://cdn-icons-png.flaticon.com/512/17/17004.png'} alt="" /> <p>Hi <br /> {datos.displayName} </p><IoLogOutOutline onClick={() => dispatch(ActionLogoutAsync())} style={{ color: "#2BE7E8", fontSize: "1.3rem" }} /></Div>
      <Titulo>Pokedex</Titulo>
      <ContTarjetas>{pokemones.map((element) => (
        <Pokemon key={element.order} onClick={()=>navigate(`/detalle/${element.id}`)}>
          <ImgPoke src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${element.id}.png`} alt="" />
          <p> No.{element.order} <br/>{element.name}</p>
          <div>
            {element.types.forEach((one)=> {
              <div>Type<p>{one.type.name}</p></div>         
            })}
          </div>
          </Pokemon>
      ))}
      </ContTarjetas>
    </>

  )
}

export default Home