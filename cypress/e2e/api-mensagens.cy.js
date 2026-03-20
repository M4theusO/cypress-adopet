describe('Api Adopet', () => {

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/cdeee17c-eb48-403c-8763-477e968cd739',
            headers: cypress.env()
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).is.not.empty
            expect(response.body).to.have.property('msg')
        })
    })

    it('John Doe', () => {
        cy.request({
            method: 'GET' ,
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/cdeee17c-eb48-403c-8763-477e968cd739',
            headers: { authorization }
            
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('perfil')
            expect(res.body.perfil.nome).to.be.equal('John Doe')                     
        })
    })
})