import { getAuth } from 'firebase/auth';
import { actionRegister, actionRegisterSync } from '../Redux/actions/actionRegister';
import { typesRegister } from '../Redux/types/types';


const initialState={
    name:'',
    email:'',
    tel:'',
    password:'',
    
};


describe('Pruebas Register', ()=>{

    test('Registro sincronico', ()=>{
        const name='Danna'
        const email='hola@hola.com'
        const tel='123456'
        const password='Hola12345' 
        const RegisterAction = actionRegister( name,email,password,tel);
        expect (RegisterAction).toEqual({
            type:typesRegister.register,
            payload:{
                name,email,password, tel
            }
        })
        
    })
})