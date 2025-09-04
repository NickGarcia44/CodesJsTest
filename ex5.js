class User {
    constructor(nome, email, role) {
        this.nome = nome
        this.email = email
        this.role = role
    }
}

const novoUser = new User('Nicollas', 'n@n.com', 'Desenvolvedor Senior')
console.log(novoUser)