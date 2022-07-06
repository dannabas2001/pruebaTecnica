import configureStore  from 'redux-mock-store'
import thunk from 'redux-thunk'
import { actionLogin, actionLoginAsync, ActionLogoutSync } from '../Redux/actions/actionLogin';
import { typesLogin } from '../Redux/types/types';

const middlewares = [thunk]

const mockStore = configureStore(middlewares)

const initialState={
    email:'',
    password:''
};

let store = mockStore(initialState)

describe('Pruebas Login Async', ()=>{
    beforeEach(()=>{
        store= mockStore(initialState)})
    test('Inicio de Sesión', async()=>{
        await store.dispatch(actionLoginAsync({email:'dannabas2001@gmail.com', password:'Hola1234'}))
        const actions = store.getActions()
    })
    test('Inicio sincronico', ()=>{
        const email = 'hola@hola.com'
        const password = 'Hola1234'

        const loginAction = actionLogin( email,password);
        expect (loginAction).toEqual({
            type:typesLogin.login,
            payload:{
                email,password
            }
        })
    })

    test ('Cerrar Sesión', ()=>{
        const email = 'hola@hola.com'
        const password = 'Hola1234'
        const logoutAction = ActionLogoutSync()
        expect ( logoutAction).toEqual({
            type:typesLogin.logout
        })
        
    })
})