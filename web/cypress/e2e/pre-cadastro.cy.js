import preCadastroPage from '../support/pages/pre-cadastro.page'
import PreCadastroPage from '../support/pages/pre-cadastro.page'

describe('Pré-Cadastro', () => {
  
  it('Realizar o pré-cadastro do cliente', () => {
    PreCadastroPage.go()
    PreCadastroPage.fillForm('Hebert Francato', 'hebertfrancato@teste.com')
    PreCadastroPage.submit()
    PreCadastroPage.verifyPreCadastro('Hebert', 'hebertfrancato@teste.com')
  })

  it('Campos obrigatórios', () => {
    PreCadastroPage.go()
    // PreCadastroPage.fillForm('Hebert Francato', 'hebertfrancato@teste.com')
    PreCadastroPage.submit()
    PreCadastroPage.alertMessage('Nome Completo', 'O campo nome é obrigatório.')
    PreCadastroPage.alertMessage('E-mail', 'O campo e-mail é obrigatório.')
  });

  it('Não deve fazer o pré-cadastro apenas com o primeiro nome', () => {
    PreCadastroPage.go()
    PreCadastroPage.fillForm('Hebert', 'hebertfrancato@teste.com')
    PreCadastroPage.submit()
    preCadastroPage.alertMessage('Nome Completo', 'Informe seu nome completo.')
  });

  it('Não deve fazer o pré-cadastro com o e-mail incorreto', () => {
    PreCadastroPage.go()
    PreCadastroPage.fillForm('Hebert Francato', 'www.teste.com.br')
    PreCadastroPage.submit()
    PreCadastroPage.alertMessage('E-mail', 'O e-mail inserido é inválido.')
  });
})