import { Agendamento } from "../Models/Agendamento";

export class AgendamentoOptions{
    agendamentoInfo : Array<Agendamento> = [
        {
            title: 'Consultorio Particular',
            address: 'Guanabara Office Center - R. Visc. de Taunay, 420 - Vila Itapura, Campinas - SP - Sala 14',
            img: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
            contact: ['(19)99116-0033'],
            icon: ['phone'],
            button: ['Chame no Whats'],
            link: 'https://api.whatsapp.com/send/?phone=5519991160033'
        },

        {
            title: 'Face Doctor - Shopping D. Pedro',
            address: 'Entrada das Pedras: loja S17 Parque Dom Pedro Shopping, Av. Guilherme Campos, 500 - Jardim Santa Genebra, Campinas',
            img: 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
            contact: ['(19)3367-5141'],
            icon: ['phone'],
            button: ['Chame no Whats'],
            link: 'https://api.whatsapp.com/send/?phone=5519996543377'
        }
    ];
}