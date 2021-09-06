const calculadora = (n1, operacion, n2) => {

    let num1 = Number(n1)
    let num2 = Number(n2)

    if (operacion === "+") {
        return (num1 + num2)
    }
    if (operacion === "-") {
        return (num1 - num2)
    }
    if (operacion === "*") {
        return (num1 * num2)
    }
    if (operacion === "/") {
        return (num1 / num2)
    }
    else {
        return Error
    }
}

module.exports = calculadora
