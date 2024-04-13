const App = {
    data () {
        return {
            counter: 0,
            items:
                [
                    { id: "id1", message: "Mike" },
                    { id: "id2", message: "15 years old" },
                    { id: "id3", message: "Danny" },
                    { id: "id4", message: "25 years old" },
                ],
            activeColor: 'green',
            fontSize: 50,
            checkedName: [],
            name: '',
            selected: ''
        };
    },
    methods: {
        say (message) {
            alert(message);
        }
    }
};

Vue.createApp(App).mount('#app');