import { Depoimento } from "../Models/Depoimento";

export class Depoimentos{
    depoimentosArray : Array<Depoimento> = [
        
        {
            name: 'Maria Julia Oliveira',
            age: null,
            city: null,
            rate: 5,
            comment: 'Não tem como não elogiar. Dentista que ama o que faz, recomendo mil vezes 🤍',
            date: '20/09/2023',
            img: ''
        },
        {
            name: 'Salette Marillac',
            age: null,
            city: null,
            rate: 5,
            comment: '',
            date: '18/09/2023',
            img: ''
        },
        {
            name: 'Fracisco Carraro',
            age: null,
            city: null,
            rate: 5,
            comment: 'Muito bom',
            date: '05/09/2023',
            img: ''
        },
        {
            name: 'Fábio Mantuani Recco',
            age: null,
            city: null,
            rate: 5,
            comment: ' "Excelente, sem dúvidas a melhor dentista que já estive. Tirou em 1 consulta minha fobia por dentista. Super recomendo Dra Ana Claudia voçe é dimais... obrigado por tudo." ',
            date: '12/05/2023',
            img: './assets/img/fabioRecco.JPG'
        },
        {
            name: 'Almendra Farfan',
            age: null,
            city: null,
            rate: 5,
            comment: ' "Dra Ana e uma profissional muito atenciosa e resolveu o problema no meu dente que ha anos ninguem conseguia resolver!" ',
            date: '12/05/2023',
            img: './assets/img/almendra.JPG'
        },
        {
            name: 'Ana Freitas',
            age: null,
            city: null,
            rate: 5,
            comment: ' "Única.  Ela é excepcional.... feliz e super  atenciosa... uma linda!!!!" ',
            date: '12/05/2023',
            img: ''
        },
        {
            name: 'Clodi Ferino',
            age: null,
            city: 'Campinas',
            rate: 5,
            comment: ' "Profissional maravilhosa." ',
            date: '12/05/2023',
            img: ''
        },
        {
            name: 'Carlos Jonas',
            age: null,
            city: null,
            rate: 5,
            comment: ' "Atendimento excelente e super profissional! Muito experiente" ',
            date: '12/05/2023',
            img: ''
        },
        {
            name: 'Irani Ferreira ',
            age: 59,
            city: "Campinas",
            rate: 5,
            comment: ' "Sempre muito bem atendida" ',
            date: '05/05/2023',
            img: ''
        },
        
        {
            // name: 'Anônimo',
            name: 'Maria Bernardete',
            age: 56,
            city: "Campinas",
            rate: 5,
            comment: ' "Fui atendida por uma profissional séria, transparente e competente. Continue assim. Precisamos de mais profissionais como a Dra. Ana Cláudia." ',
            date: '04/05/2023',
            img: ''
        },

        {
            name: 'Heloisa',
            age: 61,
            city: "Campinas",
            rate: 5,
            comment: '"Sempre muito responsável, dedicada, prestativa e competente"',
            date: '04/05/2023',
            img: ''
        },

        {
            name: 'Luis Fausto',
            age: 60,
            city: "Campinas",
            rate: 5,
            comment: '"Dra. Ana, sempre atenciosa e competente."',
            date: '04/05/2023',
            img: ''
        },

        {
            name: 'Francisco Carraro',
            age: 65,
            city: "Campinas",
            rate: 5,
            comment: '"Ótimo"',
            date: '04/05/2023',
            img: ''
        },

        {
            name: 'Oscar',
            age: 68,
            city: "Campinas",
            rate: 5,
            comment: '"Solucionou problemas que há anos não eram resolvidos."',
            date: '04/05/2023',
            img: ''
        },

        {
            name: 'Rita Carvalho',
            age: 66,
            city: "Campinas",
            rate: 5,
            comment: '"Excelente profissional"',
            date: '04/05/2023',
            img: ''
        },

        {
            name: 'Salette',
            age: 59,
            city: "Campinas",
            rate: 5,
            comment: '"Dra Ana é uma professional muito competente, muito educada, gentil e com muito bom senso. Fui muito bem atendida, sem reclamações. Irei outras vezes e ja indiquei para outras amigas."',
            date: '04/05/2023',
            img: ''
        },
    ];
}

/*
- I have an angular app when one of the sections will display clients rating about the product. I will display 12 rating at a time. I want that every 10 seconds, 12 new ratings substitute the currents one, without using a carousel. All the ratings are inside of an array and I am using a *ngFor to dynamically display all of them. What are your suggestion on how to do that?

- This way, every 10 seconds, the currentIndex variable is incremented by 12, causing the ngFor loop to display a new set of 12 ratings from the array. When the end of the array is reached, the currentIndex is reset to 0 using the modulo operator, causing the loop to start over from the beginning of the array.

*/