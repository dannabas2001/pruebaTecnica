import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';
import { Boton, Imagen, Letras, Log, Parrafo, Redes, Titulo } from '../Styles/Login';
import { actionLogin, actionLoginAsync, loginGoogle } from '../Redux/actions/actionLogin';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
  .email('Must be a valid email address')
  .required('Required'),
  password: Yup.string()
    .required('Required')
    .min(6, 'Too Short!, It must have at least 6 characters')
    .max(20, 'Too Long!, It cant be more than 20 characters'),
});

const Login = () => {
  const dispatch= useDispatch()
  return (
    <Log><Imagen src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="" /><Titulo>Sign In</Titulo>
    <Formik
    initialValues={{
      email: "",
      password: "",
    }
    }
    validationSchema={SignupSchema}
    onSubmit={values => {
      console.log( values.email, values.password)
      dispatch(actionLoginAsync(values.email, values.password))
    }}>
      {({ errors, touched})=>(
      <Form  style={{display:'flex',flexDirection:'column',justifyContent: 'center'}}>
      <Field className='field' type="email" placeholder='Email' name="email" />
      {errors.email && touched.email ? (<div style={{ color: 'white' }}>{errors.email}</div>) : null}
      <Field className='field' type="password" placeholder='Password' name="password" />
      {errors.password && touched.password ? (<div style={{ color: 'white' }}>{errors.password}</div>) : null}
      <Boton type='submit'>Sign in</Boton>
      </Form>)}
    </Formik>
    <Parrafo>Forgot Password?</Parrafo>
    <Letras>Sign in with</Letras>
    <div>
    <Redes onClick={()=>dispatch(loginGoogle())}><img src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1655944454/BuffaloMobileApp/google_zr4rji.png" alt="" /></Redes>
    <Redes><img src="https://res.cloudinary.com/dcsn54xoj/image/upload/v1655944453/BuffaloMobileApp/facebook_fssqzz.png" alt="" /></Redes>
    </div>
    <Letras>Don't have an account? <Link to="/Register" style={{color:'#2BE7E8'}}> Sign Up</Link></Letras>
    </Log>
  )
}

export default Login