function Login() {
    let user = document.getElementById('iuser').value
    let pass = document.getElementById('ipass').value
    let article = document.getElementById('areaLogin')
    let botaoLogin = document.getElementById('btnLogin')


    if (user == null || user.trim() === '') {
        let userInvalido = `<h3>LOGIN</h3>
                <p>Usuário:</p>
                <input type="text" name="iuser" id="iuser" placeholder="Nome do Usuário">
                <p id="alertarUser">O Nome do Usuário não pode ser vazio!</p>
                <p>Senha:</p>
                <input type="password" name="ipass" id="ipass" placeholder="Senha">
                <button onclick="Login()">L O G I N</button>
                <p id="esqSenha" onclick="esqueceuSenha()">Esqueceu a senha?</p>`

        article.innerHTML = userInvalido;
    } else {
        console.log('User válido')
        let userValido = `<h3>LOGIN</h3>
                <p>Usuário:</p>
                <input type="text" name="iuser" id="iuser" placeholder="Nome do Usuário">
                <p>Senha:</p>
                <input type="password" name="ipass" id="ipass" placeholder="Senha">
                <button onclick="Login()">L O G I N</button>
                <p id="esqSenha" onclick="esqueceuSenha()">Esqueceu a senha?</p>`

        article.innerHTML = userValido;
    }
};

