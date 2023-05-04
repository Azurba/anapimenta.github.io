import { Agendamento } from "../Models/Agendamento";
import { Depoimento } from "../Models/Depoimento";

export class Depoimentos{
    depoimentosArray : Array<Depoimento> = [
        {
            // name: 'Anônimo',
            // age: null,
            // city: null,
            // rate: 3,
            // comment: 'akfjsadl;kfjsa;dlkfjas;lkdfjas;ldkfjas;lkdfjas;lkdfjas;ld',
            // date: '27/04/2022'
            name: 'Maria Bernardete',
            age: 56,
            city: "Campinas",
            rate: 5,
            comment: ' "Fui atendida por uma profissional séria, transparente e competente. Continue assim. Precisamos de mais profissionais como a Dra. Ana Cláudia." ',
            date: '04/05/2023'
        },

        {
            name: 'Heloisa',
            age: 61,
            city: "Campinas",
            rate: 5,
            comment: '"Sempre muito responsável, dedicada, prestativa e competente"',
            date: '04/05/2023'
        },

        {
            name: 'Luis Fausto',
            age: 60,
            city: "Campinas",
            rate: 5,
            comment: '"Dra. Ana, sempre atenciosa e competente."',
            date: '04/05/2023'
        }

    ];
}