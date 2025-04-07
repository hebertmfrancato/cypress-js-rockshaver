import preCadastroPage from '../support/pages/pre-cadastro.page'
import homePage from '../support/pages/home.page'

describe('Pré-Cadastro', () => {
  it('Realizar o pré-cadastro do cliente', () => {
    homePage.go()
    homePage.header.goToPreCadastro()
    preCadastroPage.fillForm('Hebert Francato', 'hebertfrancato@teste.com')
    preCadastroPage.submit()
    homePage.header.verifyPreCadastro('Hebert', 'hebertfrancato@teste.com')
  })

  it('Campos obrigatórios', () => {
    homePage.go()
    homePage.header.goToPreCadastro()
    // preCadastroPage.fillForm('Hebert Francato', 'hebertfrancato@teste.com')
    preCadastroPage.submit()
    preCadastroPage.alertMessage('Nome Completo', 'O campo nome é obrigatório.')
    preCadastroPage.alertMessage('E-mail', 'O campo e-mail é obrigatório.')
  });

  it('Não deve fazer o pré-cadastro apenas com o primeiro nome', () => {
    homePage.go()
    homePage.header.goToPreCadastro()
    preCadastroPage.fillForm('Hebert', 'hebertfrancato@teste.com')
    preCadastroPage.submit()
    preCadastroPage.alertMessage('Nome Completo', 'Informe seu nome completo.')
  });

  it('Não deve fazer o pré-cadastro com o e-mail incorreto', () => {
    homePage.go()
    homePage.header.goToPreCadastro()
    preCadastroPage.fillForm('Hebert Francato', 'www.teste.com.br')
    preCadastroPage.submit()
    preCadastroPage.alertMessage('E-mail', 'O e-mail inserido é inválido.')
  });
})