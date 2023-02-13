//contador de ID
let idCounter = 0 ;
const input = document.querySelector('input[type="text"]');

//Hay que detectar cuando el usuario hace clic en submit o escribe algo en el campo del input


userInput.addEventListener('submit',(event)=>{
    event.preventDefault();//añadimos el preventDefault para que no cambie de pagina
    addTask();
});
//vamos a ir añadiendo aca las listas que se crean
//Cuando el usuario de clic en el boton de +  se añadira el siguiente codigo html
let addTask = ()=>{


    idCounter++;//suma un numero al id

    let newValue = input.value;


    list.innerHTML += //con el + le decimos que se agregue otro y no se remplace//
      ` 
      <div class="task-container" id="${idCounter/* añadimos la variable para el id */}">
        <label>
           <input type="checkbox">
           ${newValue}
        </label>
        <img src="src/basura.png" class="closeBtn">
     </div>`

    input.value=''; // esto es para que despues del sumbit aparezca una cadena de texto vacia.
    updateStats();
}
//añadimos el evento 'click' a el boton checkbox
list.addEventListener('click',(event)=>{
    if(event.srcElement.nodeName == 'INPUT'){
        updateStats();
        
    }else if(event.srcElement.nodeName == 'IMG'){
       
        deleteTask(event.srcElement.parentNode.id);
        

    }
  
   
    
})
// creamos el contador de tareas 
const updateStats = ()=>{
    let elements = list.querySelectorAll('div')
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');
   
    stats.innerHTML =
    `
    <p>tareas pendistes: ${elements.length} completadas: ${checkbox.length}</p>

    `
}
//creamos la variable que eleminara la tarea
let deleteTask = (id)=>{

    let taskToDelete = document.getElementById(id)
    list.removeChild(taskToDelete);
    updateStats();

}


