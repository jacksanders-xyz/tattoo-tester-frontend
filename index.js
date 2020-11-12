const baseURL = 'http://localhost:3000/'
const usersURL = `${baseURL}/users`
const loginURL = `${baseURL}/`
//
const buttonsDiv = document.querySelector('.main-section')
const signUpButton = document.querySelector('.sign-up-button')
const signOnButton = document.querySelector('.sign-on-button')
const formPin = document.querySelector('#form-space')

//


buttonsDiv.addEventListener('click', event => {

    route = event.target.textContent
    switch(route){
        case 'sign up':
            renderSignUpForm()
            break
        case 'sign on':
            renderSignOnForm()
            break

    }
})

function renderSignUpForm() {
    formPin.innerHTML = `
    <form>
        <br>
        <input name='name' placeholder='name'/><br>
        
        <input name='password' placeholder='password'/><br>
        
        <input type='submit' value='create user' />
    </form>
    `;
}



function renderSignOnForm() {
    formPin.innerHTML = `
    <form>

    <br>
        <input name='name' placeholder='username'/> <br>
        
        <input name='password' placeholder='password'/><br>
        
        
        
        <input type='submit' value='login user' />
    </form>
    `;
}