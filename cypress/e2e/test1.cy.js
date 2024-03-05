/// <reference types="cypress"/>

describe("Pruebas de pagina1", ()=>{
    it("prueba 1", ()=>{
        cy.visit("/")
        cy.get('#login2').click()
        cy.loginForm('hola:123', 'hola1234')
        cy.get('#tbodyid > div:nth-child(2) > div > div > h4 > a').click()
    }
    )
}
)