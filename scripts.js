const toDoList = {
    data () {
        return {
            tasks: [],
            newTask: {
                done: false
            }
        }
    },
    methods: {
        addTask: function () {
            if (this.newTask.text) {
                this.tasks.push(this.newTask);
                this.newTask = {
                    done: false
                };
                localStorage.setItem("tasks", JSON.stringify(this.tasks));
            }
            else
            {
                alert('Você precisa escrever sua tarefa!')
            }
        }
    },
    created() {
        this.tasks = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : this.tasks;
    },
    updated() {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
};

Vue.createApp(toDoList).mount('#app'); 