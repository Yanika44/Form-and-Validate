const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150
        }
    },
    gender: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum: 10,
            message: "must be at least 10 digits"
        },
    },
    country: {
        presence: true
    }
}

const app = Vue.createApp({
    data() {
        return {
            firstname: null,
            lastname: null,
            gender: null,
            age: null,
            email: null,
            phone: null,
            country: null,
            country_lists: [{ country_id: 'USA', country_name: 'USA' },
            { country_id: 'Japan', country_name: 'Japan' },
            { country_id: 'Italy', country_name: 'Italy' }],
            errors: '',

            image1: './images/3.png',
            image2: './images/1.jpg',
            username: 'xzawakezx',
            page: 'https://www.instagram.com/xzawakezx/',
            text1: 'Posts ',
            text2: 'Followers ',
            text3: 'Following ',
            total1: 30,
            total2: 699,
            total3: 293,
            shown: true,
            url: 'https://v3.vuejs.org/guide/computed.html#computed-vs-watched-property',
        }
    },
    methods: {
        checkForm(e) {
            this.errors = validate({
                firstname: this.firstname,
                lastname: this.lastname,
                age: this.age,
                gender: this.gender,
                email: this.email,
                phone: this.phone,
                country: this.country
            },
                constraints)
            if (!this.errors) {
                alert("Your profile is updated successfully.");
                window.location = this.page;
            }
        }
    }
})

app.mount('#app')


