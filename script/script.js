function Login() {
    let user = document.getElementById('iuser').value
    let pass = document.getElementById('ipass').value

    if (user == null) {
        alert('Usúario inválido! Tente utilizar um nome de úsuario válido.')
    } else {
        alert('Tudo ok!')
    }
}