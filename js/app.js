const { createApp } = Vue

createApp({
    data() {
        return {
            contacts: [
                {
                    name: "Elon",
                    avatar: "./img/avatar_1.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Hai portato a spasso il cane?",
                            status: "sent"
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Ricordati di stendere i panni",
                            status: "sent"
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            message: "Il nuovo CEO sarà un cane!",
                            status: "received"
                        }
                    ],
                },
                {
                    name: "Twitter",
                    avatar: "./img/avatar_2.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "20/03/2020 16:30:00",
                            message: "Ciao come stai?",
                            status: "sent"
                        },
                        {
                            date: "20/03/2020 16:30:55",
                            message: "Bene grazie! Stasera ci vediamo?",
                            status: "received"
                        },
                        {
                            date: "20/03/2020 16:35:00",
                            message: "Fallimento eminete",
                            status: "sent"
                        }
                    ],
                },
                {
                    name: "Christian",
                    avatar: "./img/avatar_3.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "28/03/2020 10:10:40",
                            message: "La Marianna va in campagna",
                            status: "received"
                        },
                        {
                            date: "28/03/2020 10:20:10",
                            message: "Sicuro di non aver sbagliato chat?",
                            status: "sent"
                        },
                        {
                            date: "28/03/2020 16:15:22",
                            message: "Stasera al Dorsia!",
                            status: "received"
                        }
                    ],
                },
                {
                    name: "Vitalik B.",
                    avatar: "./img/avatar_4.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent"
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Si, ma preferirei investire in BTC",
                            status: "received"
                        }
                    ],
                },
                {
                    name: "Jakidale",
                    avatar: "./img/avatar_5.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Ricordati di chiamare la nonna",
                            status: "sent"
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Salve!",
                            status: "received"
                        }
                    ],
                },
                {
                    name: "Margot R.",
                    avatar: "./img/avatar_6.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Ciao Claudia, hai novità?",
                            status: "sent"
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Non ancora",
                            status: "received"
                        },
                        {
                            date: "10/01/2020 15:51:00",
                            message: "dove sei!",
                            status: "sent"
                        }
                    ],
                },
                {
                    name: "Leonardo C.",
                    avatar: "./img/avatar_7.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "dove sei!",
                            status: "sent"
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "In ufficio amore",
                            status: "received"
                        }
                    ],
                },
                {
                    name: "Steve",
                    avatar: "./img/avatar_8.jpg",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Ciao, andiamo a mangiare la pizza stasera?",
                            status: "received"
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "No, l\"ho già mangiata ieri, ordiniamo sushi!",
                            status: "sent"
                        },
                        {
                            date: "10/01/2020 15:51:00",
                            message: "OK!!",
                            status: "received"
                        }
                    ],
                }
            ],
            chiave: 0,
            message: '',
        }
    },
    methods:{
        clickContact(index){
            this.chiave = index
            //console.log("indice contatto: "+index);
            //return indexx;
        },
        sendMessage() {
			const text = this.message.trim()
			console.log('messaggio:'+text)
            
		}
    }
}).mount('#app');