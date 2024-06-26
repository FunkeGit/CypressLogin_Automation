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

    it('Failed Login with invalid credentials with error message verification',()=>{

        const failed=new Login
        failed.setUsername('student')
        failed.setPassword('Password')
        failed.click();
        failed.verifyErrorMessage();

    })
})