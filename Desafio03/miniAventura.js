class MenuDePersonagem{
    constructor(nome, idade, classe){
        this.nome = nome
        this.idade = idade
        this.classe = classe
        this.ataque = ""
    }

    atacar(){
        switch(this.classe){
            case "monje":
                this.ataque = "artes marciais";
                break
            case "guerreiro":
                this.ataque = "a espada";
                break
            case "ninja":
                this.ataque = "a shuriken";
                break
            case "mago":
                this.ataque = "magia"
                break
            default:
                console.log("Classe inexistente")
        }

        console.log(`o ${this.classe} atacou usando ${this.ataque}`)
    }
}

let monje = new MenuDePersonagem("Luiz",62,"monje")
monje.atacar()

console.log(`Bem vindo a aventura heroi de nome: ${monje.nome} de classe: ${monje.classe} com idade de ${monje.idade} anos`)


/*
## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
*/