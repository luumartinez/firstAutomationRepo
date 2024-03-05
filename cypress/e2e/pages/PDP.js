class PDP {
    elements = {
        productTitle : ()=> cy.get('#tbodyid > h2'),
        productPrice : ()=> cy.get('#tbodyid > h3'),
        productDetail : ()=> cy.get('.tab-pane'),
        btnAddToCart : ()=> cy.get('.btn-success'),
    }
}

module.exports = new PDP();