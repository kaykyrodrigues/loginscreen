function Login() {
    let user = document.getElementById('iuser').value
    let pass = document.getElementById('ipass').value
    let article = document.getElementById('areaLogin')



    if (user, pass == null || user,pass.trim() === '') {
        let loginInvalido = `<h3>LOGIN</h3>
                <p>Usuário:</p>
                <input type="text" name="iuser" id="iuser" placeholder="Nome do Usuário">
                <p>Senha:</p>
                <input type="password" name="ipass" id="ipass" placeholder="Senha">
                <p id="alertarLogin">Informe um usuário ou senha válido.</p>
                <button onclick="Login()">L O G I N</button>
                <p id="esqSenha" onclick="esqueceuSenha()">Esqueceu a senha?</p>`
                

        article.innerHTML = loginInvalido;
    } else if (user, pass != null || user,pass.trim() !== '') {
        let loginValido = `<h3>LOGIN</h3>
                <p>Usuário:</p>
                <input type="text" name="iuser" id="iuser" placeholder="Nome do Usuário">
                <p>Senha:</p>
                <input type="password" name="ipass" id="ipass" placeholder="Senha">
                <button onclick="Login()">L O G I N</button>
                <p id="esqSenha" onclick="esqueceuSenha()">Esqueceu a senha?</p>`

        article.innerHTML = loginValido;
    }
};
