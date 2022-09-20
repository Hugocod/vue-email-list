const app = new Vue({
    el: "#root",
    data: {
        listOfEmail: [],
    },
    methods: {
        generateEmail: function () {
            ////////////////////////////////////////////////////////////////////////////////////////////////////// start function

            for (let index = 0; index < 10; index++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((res) => {
                    const result = res.data.response;
                    this.listOfEmail.push(result); // inserisco in array la mail
                });
            }

            /* una volta terminato il ciclo ritorno l'array */
            return this.listOfEmail;

            ////////////////////////////////////////////////////////////////////////////////////////////////////// end function
        },
    },

    mounted() {
        this.generateEmail();
    },
});
