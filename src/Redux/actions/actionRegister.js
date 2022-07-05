import { typesRegister } from "../types/types"
import { getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'

export const actionRegisterSync = (name,email, password,tel,)=>{
    return (dispatch)=>{
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
        .then(async({user})=>{
            await updateProfile(auth.currentUser, {displayName:name})            
            await updateProfile(auth.currentUser, {phoneNumber:tel})
            dispatch(actionRegister(name,email,password,tel))
            console.log(user,'Usuario Agregado')
        })
        .catch(err=>{
            console.warn(err, 'Usuario No registrado')
        })

    }
}
export const actionRegister =(name,email,password, tel)=>{
    return{
        type:typesRegister.register,
        payload:{name, email, tel, password}
    }
} 