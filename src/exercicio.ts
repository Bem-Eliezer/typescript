const calculaArea1 = (base: number, altura: number): number => base * altura;

class Pessoa1 {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    dizOla(): string {
        return `Olá ${this.nome}`;
    }
}