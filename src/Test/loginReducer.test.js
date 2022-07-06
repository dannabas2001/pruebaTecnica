import '@testing-library/jest-dom'
import { reducerLogin } from '../Redux/reducers/reducerLogin';
import { typesLogin } from '../Redux/types/types';

describe('Pruebas en LoginReducer',()=>{
    test('Realiza el login' , ()=>{
        const initState = {};
        const action = {
        type: typesLogin.login,
        payload: {
            email:'dannabas@gmail.com',
            password:'DannaBastidas'
        }};
        const state = reducerLogin(initState, action)
        expect (state).toEqual({
            email:'dannabas@gmail.com',
            password:'DannaBastidas'
        })
})
test ('Cerrar sesión',()=>{
    const initState ={
        email:'dannabas@gmail.com',
        password:'DannaBastidas'
    }
    const action = {
        type: typesLogin.logout
    }
    const state = reducerLogin(initState, action);
    expect (state).toEqual({})
})

test ('Default state', () => {
    const initState ={
        email:'dannabas@gmail.com',
        password:'DannaBastidas'
    }
    const action ={
        type: typesLogin.nuevo
    }
    const state = reducerLogin(initState, action)
    expect(state).toEqual(initState)
})

})
