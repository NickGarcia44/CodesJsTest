class User {
    constructor(nome, email, role) {
        this.nome = nome
        this.email = email
        this.role = role
    }
}

const newUser = new User('Nicollas', 'n@n.com', 'Developer Senior')
console.log(newUser)