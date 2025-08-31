const users = [];

function addUsers(nome, idade, email) {
    let user = {
        nome: nome,
        idade: idade,
        email: email,
        ativo: true,
    };
    users.push(user);
}

function offEmail(email) {
    let usuario = users.find(u => u.email === email);
    if (usuario) {
        usuario.ativo = false;
        console.log(`${usuario.nome} foi desativado.`);
    } else {
        console.log("Usuário não encontrado.");
    }
}

function listarUsuariosAtivos() {
    return users.filter(usuario => usuario.ativo === true);
}

function buscarUsuario(email) {
    let user = users.find(u => u.email === email);
    return user || null;
}

// Testando
addUsers("João", 25, "joao@email.com");
addUsers("Maria", 30, "maria@email.com");

console.log(listarUsuariosAtivos());
offEmail("joao@email.com");
console.log(listarUsuariosAtivos());
console.log(buscarUsuario("maria@email.com"));