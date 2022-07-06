import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { facebook, google } from "../Firebase/firebaseConfig"
import { typesLogin } from "../types/types"


export const actionLogin =(email,password)=>{
    return{
        type: typesLogin.login,
        payload: {email,password}
    }
}
export const actionLoginAsync=(email, password)=>{
    return(dispatch)=>{
        console.log(email, password, 'acción')
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
        .then((user)=>{
            dispatch(actionLogin(email,password))
            console.log('Usuario encontrado')
        })
        .catch(error=>{
            alert('Usuario o contraseña incorrectos')
            console.log(error, 'Usuario No Autorizado')
        })
    }
}
export const loginGoogle =()=>{
    return(dispatch)=>{
        const auth =getAuth()
        signInWithPopup(auth,google)
        .then(({user})=>{
            console.log(user,"Usuario Autorizado")
        })
        .catch(error=>{
            console.warn(error,"Usuario NO Autorizado")
        })
    }}

    export const loginFacebook=()=>{
        return(dispatch)=>{
            const auth =getAuth()
            signInWithPopup(auth,facebook)
            .then(({user})=>{
                console.log(user,"Usuario Autorizado")
            })
            .catch(error=>{
                console.warn(error,"Usuario NO Autorizado")
                alert('Intente de nuevo con un correo diferente')
            })
        }
    }
    
    export const ActionLogoutAsync=()=>{
        return(dispatch)=>{
            const auth = getAuth()
            signOut(auth)
            .then(({user})=>{
                dispatch(ActionLogoutSync())
                console.log('Logged out')
            })
            .catch((error)=>{console.warn(error,'')});
        }
    }
    
    export const ActionLogoutSync =()=>{
        return{
            type: typesLogin.logout
        }
    }
    