/*
Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni task sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del task
- done, un booleano (true/false) che indica se il task è stato fatto oppure no
Create almeno un task con done: true

MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni task.
Se la proprietà done è uguale a true, visualizzare il testo del task sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il task viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo task, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il task alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà done del task corrispondente (se done era uguale a false, impostare true e viceversa)
*/

console.log('Vue OK', Vue);

const app = Vue.createApp({
    data() {
        return {
            newTask: '',
            tasks: [
                'Aggiornare Pc',
                'Installare il sistema',
                'Aggiornamenti software',
                'Aggiungere le app'
            ],
        }
    },
    methods: {
        addTask() {
            if (this.newTask) {
                this.tasks.push(this.newTask);
                this.newTask = '';
            }
        },

        deleteTask(index) {
            this.tasks.splice(index, 1);
            // this.tasks = this.tasks.filter((task, i) => i !== index);
        },
        clearInput() {
            this.newTask = '';
        }
    }
})

app.mount('#root');





