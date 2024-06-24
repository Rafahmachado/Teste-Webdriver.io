
describe('Login', () => {
    // Exemplo de código corrigido
it('Realizar login válido', async () => {
    // Navegue para a página de login
    await browser.url('https://ifvestdeploy-7422.onrender.com/login');

    // Preencha o campo de usuário
    const usuarioInput = await $('[name="usuario"]');
    await usuarioInput.setValue('Professor');

    // Preencha o campo de senha
    const senhaInput = await $('[name="senha"]');
    await senhaInput.setValue('testando01');

    // Clique no botão de login
    const btnLogin = await $('#btn-login');
    await btnLogin.waitForDisplayed({ timeout: 20000 });
    await btnLogin.click();
    // Verifique se o login foi bem-sucedido (use uma função de assert ou expect aqui)
    // ...
   });
});

         
