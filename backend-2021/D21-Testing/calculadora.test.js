const calculadora = require('./calculadora')

describe('Testing calculadora', () => {
    it('Should return 5', () => {
        const value = calculadora(2,'+',3)
        expect(value).toBe(5)
    })
    it('Should return 11', () => {
        const value = calculadora(15,'-','4')
        expect(value).toBe(11)
    })
    it('Should return 20', () => {
        const value = calculadora('2','*',10)
        expect(value).toBe(20)
    })
    it('Should return 25', () => {
        const value = calculadora(100,'/',4)
        expect(value).toBe(25)
    })
    it('Should return NaN', () => {
        const value = calculadora(2,'+','two')
        expect(value).toBe(NaN)
    })
    it('Should return Error', () => {
        const value = calculadora("f",4,5)
        expect(value).toBe(Error)
    })
    it('Should return Error', () => {
        const value = calculadora("error")
        expect(value).toBe(Error)
    })
    it('Should return Error', () => {
        const value = calculadora(2,"=",2)
        expect(value).toBe(Error)
    })
})