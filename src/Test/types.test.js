import '@testing-library/jest-dom'
import { typesLogin, typesRegister } from '../Redux/types/types'
describe('Verificar types', () => {
    test('comparar objetos', () => {
        expect(typesLogin).toEqual({
            login:'[login] login',
            logout:'[logout] logout'
        })
    })
    test('comparacion', ()=>{
        expect(typesRegister).toEqual({
            register:'[register] register'
        })
    })
})