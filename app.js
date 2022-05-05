const form = document.querySelector('.form')

const name = document.querySelector('.name')
const email = document.querySelector('.email')
const password = document.querySelector('.password')
const password2 = document.querySelector('.password2')

const nameValue = name.value.trim()
const emailValue = email.value.trim()
const passwordValue = password.value.trim()
const password2Value = password2.value.trim()
let recomendPassword2 = ''

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validetionName(name)
    validetionEmail(email)
    validetionPassword2(password2)
    validetionPassword(password)
    massege()

})

const massege = () => {

    if (validetionName(name) && validetionEmail(email) && validetionPassword2(password2) && validetionPassword(password)) {
        alert('The form was completed')
    }

}


//name input valide
const validetionName = (nameinput) => {
    let nameValue = nameinput.value.trim()
    let lengthValue = nameValue.length
    const lable = name.parentElement
    const span = lable.querySelector('span')
    if (nameValue !== '' && lengthValue >= 8) {
        nameinput.className = 'remove-error'
        span.innerHTML = 'Accepted!'
        return true
    } else {
        nameinput.className = 'error'
        span.innerHTML = 'Must be more than 8 characters'
    }
}


//email input valide
const validetionEmail = (nameinput) => {
    let nameValue = nameinput.value.trim()
    let textValue = nameValue.search('@')
    const lable = email.parentElement
    const span = lable.querySelector('span')
    if (nameValue !== '' && textValue !== -1) {
        nameinput.className = 'remove-error'
        span.innerHTML = 'Accepted!'
        return true
    } else
    if (nameValue === '') {
        nameinput.className = 'error'
        span.innerHTML = 'Email value could not be empty'
    } else
    if (textValue === -1) {
        span.innerHTML = 'Use the value (@)'
        nameinput.className = 'error'
    } else {
        nameinput.className = 'error'
        span.innerHTML = 'Enter the email correctly'
    }
}


//password input valide
const validetionPassword = (nameinput) => {
    let nameValue = nameinput.value.trim()
    let lengthValue = nameValue.length
    const regex = /[^\w\s]/g;
    let textValue = nameValue.search(regex)
    const lable = password.parentElement
    const span = lable.querySelector('span')
    if (nameValue !== '' && textValue !== -1 && lengthValue >= 8) {
        nameinput.className = 'remove-error'
        span.innerHTML = 'Accepted!'
        const password = nameValue
        recomendPassword2 = password
        return true

    } else if (nameValue === '') {
        nameinput.className = 'error'
        span.innerHTML = 'Password value could not be empty'
    } else if (lengthValue < 8) {
        nameinput.className = 'error'
        span.innerHTML = 'Must be more than 8 characters'
    } else if (textValue === -1) {
        span.innerHTML = 'Use at least one token (@ #. $%)'
        nameinput.className = 'error'
    } else {
        nameinput.className = 'error'
        span.innerHTML = 'Enter the password correctly'
    }
}


//password2 input valide
const validetionPassword2 = (nameinput) => {
    let nameValue = nameinput.value.trim()
    const lable = password2.parentElement
    const span = lable.querySelector('span')
    let lengthValue = nameValue.length
    if (nameValue === recomendPassword2 && lengthValue >= 8) {
        span.innerHTML = 'Accepted!'
        nameinput.className = 'remove-error'
        return true
    } else {
        span.innerHTML = 'Enter the password correctly'
        nameinput.className = 'error'
    }
}