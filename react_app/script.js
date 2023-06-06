
const userNameError = document.getElementById('NameError')
const userEmailError = document.getElementById('EmailError')
const userMessageError = document.getElementById('MessageError')

const userNameValidate = document.querySelector('.userNameValidate')
const userEmailValidate = document.querySelector('.userEmailValidate')
const userMessageValidate = document.querySelector('.userMessageValidate')



function validateName() {

    const userName = document.getElementById('userName').value
    userNameValidate.classList.remove("successName")
    if (userName.trim().length === 0) {
        userNameError.innerHTML = "Name Required";
        userNameValidate.classList.add("errorName")
        return false
    }
    if (!userName.match(/^[A-Za-z]*$/)) {
        userNameError.innerHTML = "Name should be Valid";
        userNameValidate.classList.add("errorName")

        return false;
    }

    userNameValidate.classList.add("successName")
    userNameValidate.classList.remove('errorName')
    userNameError.innerHTML = "";
    return true

}

function validateEmail() {
    const userEmail = document.getElementById('userEmail').value
    userEmailValidate.classList.remove("successEmail")
    if (userEmail.trim().length === 0) {
        userEmailValidate.classList.add("errorEmail")
        userEmailError.innerHTML = "email required";
        return false;
    }
    if (!userEmail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        userEmailValidate.classList.add("errorEmail")
        userEmailError.innerHTML = 'invalid email';
        return false;
    }
    userEmailValidate.classList.add('successEmail')
    userEmailValidate.classList.remove("errorEmail")
    userEmailError.innerHTML = ""
    return true;
}

function validateMessage() {
    const userMessage = document.getElementById('userMessage').value
    userMessageValidate.classList.remove('successMessage')
    if (userMessage.trim().length === 0) {
        userMessageError.innerHTML = "Message Cant be Null"
        userMessageValidate.classList.add('errorMessage')
        return false
    }
    userMessageValidate.classList.add('successMessage')
    userMessageValidate.classList.remove('errorMessage')
    userMessageError.innerHTML = ""
    return true
}

function validateForm() {
    if (!validateName() || !validateEmail() || !validateMessage()) {
        return false;
    } else {
        document.getElementById('submitButton').disabled = true
        document.getElementById("subForm").reset();
        userNameValidate.classList.remove("successName")
        userMessageValidate.classList.remove('successMessage')
        userEmailValidate.classList.remove("successEmail")
        const succesAlert = document.querySelector('.formSuccess')
        succesAlert.style.display = "block"
        setTimeout(() => {

            succesAlert.style.display = "none"
            document.getElementById('submitButton').disabled = false
        }, 3000)
    }

}



