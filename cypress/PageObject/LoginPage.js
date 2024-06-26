class Login
{
    
    setUsername(username)
    {
        cy.get('#username').type(username);

    }

    setPassword(password)
    {
        cy.get('#password').type(password);

    }

    click(submit)
    {
        cy.get('.btn').click();

    }

    verifyLogin()
    {
        cy.get('.post-title').should('have.text', 'Logged In Successfully');

    }

    verifyInvalidPasswordErrorMessage()
    {
        cy.get('div[id="error"]').should('be.visible')
        .and('have.text','Your password is invalid!');
    }

    verifyInvalidUsernamErrorMessage()
    {
        cy.get('div[id="error"]').should('be.visible')
        .and('have.text','Your username is invalid!');
    }

    

}

export default Login;