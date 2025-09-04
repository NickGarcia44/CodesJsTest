class User {
    constructor(nome, email, role) {
        this.nome = nome
        this.email = email
        this.role = role
    }
}

const user = new User('Nicollas', 'n@n.com', 'Desenvolvedor Senior')
console.log(user)