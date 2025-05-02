const login = document.querySelector('.login')
const email = document.querySelector('.email')
const password = document.querySelector('.password')
const btn = document.querySelector('.btn')

console.log(login, email, password, btn);



const formData = {
    login: login.input,
    email: email.input, 
    password: password.input,
}
btn.addEventListener('click', (e) => {
    if (login.value !== '' && email.value !== '' && password.value !== '') {
        const formData = {
            login: login.value,
            email: email.value,
            password: password.value,
        }
        console.log(formData);
        window.location.href = "page.html"
        alert('Вы зареганы')
    }
    
    else {
        const formData = {
            login: login.value,
            email: email.value,
            password: password.value,
        }
        alert('Вы не зареганы');
    }
})

const nameLogin = document.querySelector('.nameLogin')
const passwordLogin = document.querySelector('.passwordLogin')
const btnLogin = document.querySelector('.btnLogin')

const formLogin = {
    login: nameLogin.input,
    password: passwordLogin.input,
}

btnLogin.addEventListener('click', () => {
    if (nameLogin.value === login && passwordLogin.value === password) {
        const formLogin = {
            login: nameLogin.input,
            password: passwordLogin.input,
        }
        console.log(formLogin);
        alert('Добро пожаловать ' + nameLogin + '!');
    }
    else {
        const formLogin = {
            login: nameLogin.input,
            password: passwordLogin.input,
        }
        alert('неправильный логин или пароль');
    }
})