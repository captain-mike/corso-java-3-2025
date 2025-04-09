
const input = document.getElementById('testo');
const bottone = document.getElementById('bottone');
const target = document.getElementById('target');
const targetDone = document.getElementById('target-done');


bottone.addEventListener('click',(e) => {
    e.preventDefault();//blocca l'invio del form
    console.log(this);
    console.log(e.target);
    
    const todo = document.createElement('div');
    todo.classList.add('alert','alert-warning');
    todo.innerText = input.value

    todo.addEventListener('click',()=>{
        // todo.remove(); //rimuove l'elemento
        targetDone.append(todo)//sposta l'elemento
    })

    target.append(todo);

    input.value = '';
});
