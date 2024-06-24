Teste automatizado com Framework WebDriver.io


teste login 

Funcionalidade: Validações no Login

  Contexto:
    Dado eu estou na tela de login

  Esquema do Cenário: Exibe aviso informando que as credenciais são inválidas
    Quando eu tento fazer login com as credencias; email: '<Email>' e senha: '<Senha>'
    Então o app exibe mensagem informando que as credenciais são inválidas

    Exemplos:
      | Usuario      | Senha  |
      | username     | 12346 |
      

  Cenário: Exibe mensagem de succeso quando utilizado credenciais válidas
    Quando eu faço o login como o usuário 'username'
    Login efetuado com sucesso
