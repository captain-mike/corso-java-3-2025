 export class TodoSystem{

    constructor(selector){
        this.selector = selector;
        this.target = document.getElementById(selector);
        this.todos = this.getTodos();
        this.initHTML();
        this.buildTodoList();
    }

    getTodos(){
        const data = localStorage.getItem('todo-list');

        if(!data) return [];

        return JSON.parse(data);
    }

    initHTML(){
        const input = document.createElement('input');
        const bottone = document.createElement('button');
        const listContainer = document.createElement('div');
        const doneListContainer = document.createElement('div');

        input.classList.add('form-control')
        
        bottone.classList.add('btn','btn-primary')
        bottone.innerText = 'Salva';
        bottone.addEventListener('click',()=> this.addNewTodo())

        this.input = input;
        this.bottone = bottone;
        this.listContainer = listContainer;
        this.doneListContainer = doneListContainer;

        this.target.append(this.input,this.bottone,this.listContainer,this.doneListContainer)
    }

    buildTodoList(){
        this.todos.forEach(t => {
            const todo = this.buildSingleTodo(t)
            this.listContainer.append(todo);
        })
    }

    buildSingleTodo(value){
        const newTodo = document.createElement('div');
        newTodo.classList.add('alert','alert-warning')
        newTodo.innerText = value

        return newTodo;
    }

    addNewTodo(){    
        
        const newTodo = this.buildSingleTodo(this.input.value);

        this.updateDb()

        this.listContainer.append(newTodo);

        this.input.value = '';
        
    }

    updateDb(){
        this.todos.push(this.input.value);
        localStorage.setItem(`todo-list-${this.selector}`, JSON.stringify(this.todos));
    }

}

























// const input = document.getElementById('testo');
// const bottone = document.getElementById('bottone');
// const target = document.getElementById('target');
// const targetDone = document.getElementById('target-done');


// bottone.addEventListener('click',(e) => {
//     e.preventDefault();//blocca l'invio del form
//     console.log(this);
//     console.log(e.target);
    
//     const todo = document.createElement('div');
//     todo.classList.add('alert','alert-warning');
//     todo.innerText = input.value

//     todo.addEventListener('click',()=>{
//         // todo.remove(); //rimuove l'elemento
//         targetDone.append(todo)//sposta l'elemento
//     })

//     target.append(todo);

//     input.value = '';
// });
