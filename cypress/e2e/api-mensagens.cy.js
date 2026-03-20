describe('Api Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjZGVlZTE3Yy1lYjQ4LTQwM2MtODc2My00NzdlOTY4Y2Q3MzkiLCJhZG9wdGVyTmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNzc0MDI4ODM4LCJleHAiOjE3NzQyODgwMzh9.kTDvEklK824k_AMAs56xqzF8Bta1Ygy8nh1sVaet8Yk`

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/cdeee17c-eb48-403c-8763-477e968cd739',
            headers: {
                Authorization: authorization
            }
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