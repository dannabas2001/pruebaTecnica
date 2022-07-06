import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Button, Modal } from 'antd';
import { ImgPoke } from '../Styles/Home';
import { deleteUser, getAuth, reauthenticateWithCredential, updateProfile } from 'firebase/auth';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Must be a valid email address')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
      tel: Yup.number()
      .min(8, 'Too Short!')
      .required('Required'),
  });
const Profile = () => {
    const [disable, setDisabled] =useState(true)
    const [isModalVisible, setIsModalVisible] = useState(true);
    const auth = getAuth()
    const user = auth.currentUser
    const navigate = useNavigate()
    const handleOk = () => {
        setIsModalVisible(false);
        navigate(-1)
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        navigate(-1)
    };
    const [datos, setDatos] = useState({}) 
 const deleteU = ()=>{

    deleteUser(user).then(() => {
        alert('Usuario Eliminado con Exito')
      }).catch((error) => {
        alert('inicia sesión de nuevo y vuelve a intentar')
      });
 }
//  const editarName=(name, email, tel)=>{
//     updateProfile(auth.currentUser,{
//         displayName:name, 
//         email:email,
//         tel:tel
//       }).then(() => {
//         // ...
//       }).catch((error) => {
//         // An error occurred
//         // ...
//       })}
//     console.log(user)
    return (
        <>
            <Modal title='Perfil' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <Formik
        initialValues={{
          name:'',
          email:'',
          tel: ''
        }
        }
        validationSchema={SignupSchema}
        onSubmit={values => {
          console.log(values.name, values.email, values.tel)
        }}>
        {({ errors, touched }) => (
          <Form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Field className='field1' type="text" placeholder={user.displayName} name="name" />
            {errors.name && touched.name ? (<div style={{ color: 'black' }}>{errors.name}</div>) : null}
            <Field className='field1' type="email" placeholder={user.email} name="email" />
            {errors.email && touched.email ? (<div style={{ color: 'black' }}>{errors.email}</div>) : null}
            <Field className='field1' type="number" placeholder={user.phoneNumber} name="tel" />
            {errors.tel && touched.tel ? (<div style={{ color: 'black' }}>{errors.tel}</div>) : null}
            <button type='submit'>Editar Usuario</button>
          </Form>)}
          
      </Formik>
      <button onClick={()=>deleteU()}>Borrar Usuario</button>
               
            </Modal>
                </>
                
)}

                export default Profile
