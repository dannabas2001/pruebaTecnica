import '@testing-library/jest-dom'
import { reducerRegister } from '../Redux/reducers/reducerRegister'
import { typesLogin, typesRegister } from '../Redux/types/types'

describe('pruebas Register Reducer',()=>{
    test('Se registran los datos',()=>{
         const initialState={}
         const action ={
            type : typesRegister.register,
            payload: {
                name: 'Danna Bastidas',
                email: 'dannabas2001@gmail.com',
                tel: '3219196747',
                password:'Hola1234'}
            };
            const state = reducerRegister(initialState, action)
            expect (state).toEqual({
                name: 'Danna Bastidas',
                email: 'dannabas2001@gmail.com',
                tel: '3219196747',
                password:'Hola1234'
            })
         })
    })
