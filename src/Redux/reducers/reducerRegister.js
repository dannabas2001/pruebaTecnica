import { typesRegister } from "../types/types";

const initialState ={}

export const reducerRegister=(state=initialState,action)=>{
    switch (action.type) {
        case typesRegister.register:
            return{
                name:action.payload.name,
                email: action.payload.email,
                tel:action.payload.tel,
                password:action.payload.password
            }
            
    
        default:
            return state;
    }

}