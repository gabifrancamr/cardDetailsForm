document.querySelector(".confirm").addEventListener("click", confirmData)

document.querySelector(".back").addEventListener("click", backPage)

const cardNumber = document.querySelector('.cardNumber')
const nameCard = document.querySelector('.name')
const dateCard = document.querySelector('.date')
const cvcCard = document.querySelector('.lineGrey')

function confirmData() {
    const nameInput = document.getElementById("name").value 
    const numberInput = document.getElementById("number").value 
    const month = document.getElementById("month").value 
    const year = document.getElementById("year").value
    const cvc = document.getElementById('cvc').value

    const error = document.querySelector(".error")

    if(nameInput == '' || numberInput == '' || month == '' || year == '' || cvc == '' || error) {
        document.getElementById("errorForm").classList.remove('hidden')
        document.getElementById("errorForm").classList.add('showError')
    } else {
        cardNumber.innerHTML = numberInput
        nameCard.innerHTML = nameInput
        dateCard.innerHTML = month + "/" + (year % 100)
        cvcCard.innerHTML = cvc

        document.getElementById("formCard").id = 'hidden'
        document.querySelector(".secondForm").id = 'noHidden'

    }

}

function backPage() {
    document.querySelector(".secondForm").id = 'hidden'
    document.getElementById("hidden").id = 'formCard'

    cardNumber.innerHTML = "0000 0000 0000 0000"
    nameCard.innerHTML = "NAME USER"
    dateCard.innerHTML = "00/00"
    cvcCard.innerHTML = "000"

    document.getElementById("name").value = ""
    document.getElementById("number").value = ""
    document.getElementById("month").value = ""
    document.getElementById("year").value = ""
    document.getElementById("cvc").value = ""

    document.getElementById("errorForm").classList.add('hidden')
    document.getElementById("errorForm").classList.remove('showError')
}

function formatCreditCardNumber(input) {
    const creditCardNumber = input.value.replace(/\s/g, '');
    let formattedCreditCardNumber = [];
    for (var i = 0; i < creditCardNumber.length; i += 4) {
        formattedCreditCardNumber.push(creditCardNumber.substr(i, 4));
    }
    input.value = formattedCreditCardNumber.join(' ');
}

function checkInput(input) {
    let inputValue = input.value 

    if(inputValue === document.getElementById("month").value) {
        if(inputValue < 1 || inputValue > 12 ) {
            input.classList.add('error')
            document.getElementById('errorMonth').classList.remove('hidden')
            document.getElementById('errorMonth').classList.add('showError')
        } else {
            input.classList.remove('error')
            document.getElementById('errorMonth').classList.add('hidden')
            document.getElementById('errorMonth').classList.remove('showError')
        }
    } else if (inputValue === document.getElementById("year").value) {
        
        const date = new Date()
        if(inputValue < (date.getFullYear()) || inputValue > (date.getFullYear() + 10)) {
            input.classList.add('error')
            document.getElementById('errorYear').classList.remove('hidden')
            document.getElementById('errorYear').classList.add('showError')
        } else {
            input.classList.remove('error')
            document.getElementById('errorYear').classList.add('hidden')
            document.getElementById('errorYear').classList.remove('showError')
        }   
        
    } else if (inputValue === document.getElementById('number').value) {

        const onlyNumbers = /^[0-9\s]+$/
        
        if(inputValue.length < 19  || onlyNumbers.test(inputValue) === false ) {
            input.classList.add('error')
            document.getElementById('numberError').classList.remove('hidden')
            document.getElementById('numberError').classList.add('showError')
        } else {
            input.classList.remove('error')
            document.getElementById('numberError').classList.add('hidden')
            document.getElementById('numberError').classList.remove('showError')
        }
    } else if (inputValue === document.getElementById('cvc').value) {
        const onlyNumbers = /^[0-9]+$/
        if(inputValue.length < 3 || onlyNumbers.test(inputValue) === false) {
            input.classList.add('error')
            document.getElementById('errorCvc').classList.remove('hidden')
            document.getElementById('errorCvc').classList.add('showError')
        } else {
            input.classList.remove('error')
            document.getElementById('errorCvc').classList.add('hidden')
            document.getElementById('errorCvc').classList.remove('showError')
        }
    }
}