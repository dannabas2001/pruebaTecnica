import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';
import { Boton, Imagen, Letras, Log, Parrafo, Redes, Titulo } from '../Styles/Login';
import { actionRegisterSync } from '../Redux/actions/actionRegister';

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

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <Log><Imagen src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="" /><Titulo>Sign Up</Titulo>
      <Formik
        initialValues={{
          name: "",
          email: "",
          tel: "",
          password: "",
        }
        }
        validationSchema={SignupSchema}
        onSubmit={values => {
          console.log(values.name, values.email, values.password, values.tel)
          dispatch(actionRegisterSync(values.name, values.email, values.password, values.tel))
          navigate("/home")
        }}>
        {({ errors, touched }) => (
          <Form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Field className='field' type="text" placeholder='Name' name="name" />
            {errors.name && touched.name ? (<div style={{ color: 'white' }}>{errors.name}</div>) : null}
            <Field className='field' type="email" placeholder='Email' name="email" />
            {errors.email && touched.email ? (<div style={{ color: 'white' }}>{errors.email}</div>) : null}
            <Field className='field' type="password" placeholder='Password' name="password" />
            {errors.password && touched.password ? (<div style={{ color: 'white' }}>{errors.password}</div>) : null}
            <Field className='field' type="number" placeholder='Phone Number' name="tel" />
            {errors.tel && touched.tel ? (<div style={{ color: 'white' }}>{errors.tel}</div>) : null}
            <Boton type='submit'>Sign Up</Boton>
          </Form>)}
      </Formik>
      <Parrafo>Forgot Password?</Parrafo>
      <Letras>Sign in with</Letras>
      <div>
        <Redes><img src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1655944454/BuffaloMobileApp/google_zr4rji.png" alt="" /></Redes>
        <Redes><img src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1655944453/BuffaloMobileApp/facebook_fssqzz.png" alt="" /></Redes>
      </div>
      <Letras>Already have an Account? <Link to="/" style={{ color: '#2BE7E8' }}> Log In</Link></Letras>
    </Log>
  )
}

export default Register