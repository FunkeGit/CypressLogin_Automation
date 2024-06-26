import Login from "../PageObject/LoginPage.js"

describe('Login Functionality', ()=>{

    beforeEach('Launch URL', ()=>{
      cy.visit('/');//Navigate to the base URl. Base URL configured in cypress.config.js
    })

    it('Successful Login with valid username and password', ()=>{
        const success=new Login;
        success.setUsername('student')
        success.setPassword('Password123')
        success.click();
        success.verifyLogin();
        
    })

    it('Failed Login with valid username and valid password',()=>{

        const failedPassword=new Login
        failedPassword.setUsername('student')
        failedPassword.setPassword('Password')
        failedPassword.click();
        failedPassword.verifyInvalidPasswordErrorMessage();

    })

    it('Failed Login with invalid username and valid password',()=>{

        const failedUsername=new Login
        failedUsername.setUsername('employee')
        failedUsername.setPassword('Password123')
        failedUsername.click();
        failedUsername. verifyInvalidUsernamErrorMessage();
    })

    it('Failed Login with empty username input field and empty password field',()=>{

        const emptyInputField=new Login
        emptyInputField.setUsername('')
        emptyInputField.setPassword('')
        emptyInputField.click();
        emptyInputField.verifyErrorMessageEmptyField();
    })


})