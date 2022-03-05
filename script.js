const additionner = (a,b) => a + b
const soustraire = (a,b) => a - b
const multiplier = (a,b) => a * b
const diviser = (a,b) => {
    if(b == 0)
        return null
    return a / b
}
const operate = (operateur,a,b) => {
    switch (operateur) {
        case '+':
            return additionner(a,b)
            break
        case '-':
            return soustraire(a,b)
            break
        case '*':
            return multiplier(a,b)
            break
        case '/':
            return diviser(a,b)
            break
        default:
            return String(a)
    }
}
let nbr1 = "0"
let nbr2 = ""
let operateur = ""
let virgule = document.querySelector('#virgule')
let virguleClicked = false
let negatif = document.querySelector('#negatif')
let negatifClicked = false
let operations = document.querySelectorAll('.operation')
operations.forEach((operation) => {
    operation.addEventListener('click',() => {
        if(nbr2 === ""){
            operateur = operation.id
        }else{
            nbr1 = operate(operateur,Number(nbr1),Number(nbr2))
            operateur = operation.id
            nbr2 = ""
        }
        virguleClicked = false
        negatifClicked = false
        ecran.innerHTML = `${nbr1} ${operateur} ${nbr2}`
    })
})
let egale = document.querySelector('#egale')
egale.addEventListener('click',() => {
    nbr1 = operate(operateur,Number(nbr1),Number(nbr2))
    nbr2 = ""
    operateur = ""
    virguleClicked = true
    negatifClicked = true
    ecran.innerHTML = `${nbr1} ${operateur} ${nbr2}`
})
let ecran = document.querySelector('#ecran')
ecran.innerHTML = `${nbr1} ${operateur} ${nbr2}`
let effacer = document.querySelector('#effacer')
effacer.addEventListener('click', () => {
    nbr1 = "0"
    nbr2 = ""
    operateur = ""
    virguleClicked = false
    negatifClicked = false
    ecran.innerHTML = `${nbr1} ${operateur} ${nbr2}`
})
let numbers = document.querySelectorAll('.number')
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        if(operateur === ""){
            if(nbr1 === "0")
                nbr1 = number.innerHTML
            else
                nbr1 += number.innerHTML
        }
        else{
            if(nbr2 === "0")
                nbr2 = number.innerHTML
            else
                nbr2 += number.innerHTML
        }
        ecran.innerHTML = `${nbr1} ${operateur} ${nbr2}`
    })
})
virgule.addEventListener('click',() => {
    if(virguleClicked == false){
        if(operateur === "")
            nbr1 += "."
        else
            nbr2 += "."
        virguleClicked = true
        ecran.innerHTML = `${nbr1} ${operateur} ${nbr2}`
    }
})
negatif.addEventListener('click',() => {
    if(negatifClicked == false){
        if(operateur === "")
            nbr1 = `-${nbr1}`
        else
            nbr2 = `-${nbr2}`
        negatifClicked = true
        ecran.innerHTML = `${nbr1} ${operateur} ${nbr2}`
    }
})