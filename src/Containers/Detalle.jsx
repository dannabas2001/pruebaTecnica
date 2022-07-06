import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Button, Modal } from 'antd';
import { ImgPoke } from '../Styles/Home';

const Detalle = () => {
    const [isModalVisible, setIsModalVisible] = useState(true);
    const navigate = useNavigate()
    const handleOk = () => {
        setIsModalVisible(false);
        navigate(-1)
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        navigate(-1)
    };
    const { id } = useParams()
    const [datos, setDatos] = useState({})
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const CargarDatos = async (url) => {
        var resp = await axios.get(url)
        resp = resp.data
        setDatos(resp)

    }
    useEffect(() => {
        CargarDatos(url)
    
      return () => {
        
      }
    }, [])
    
 

    console.log(datos)
    return (
        <>
            <Modal title={datos.name} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <ImgPoke src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${datos.id}.png`} alt="" />
                <h2>{datos==''?'Cargando':(datos.name)}</h2>
                <p>Height:{datos==''?'Cargando':(datos.height)}</p>
                <p>Weight: {datos==''?'Cargando':(datos.weight)}</p>
                <p>Experiencia:{datos==''?'Cargando': (datos.base_experience)}</p>
            </Modal>
                </>
                
)}

                export default Detalle
