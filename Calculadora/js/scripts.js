//Se define 2 constantes
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

   /*  console.log(buttons); */

buttons.forEach((item)=>{
    item.onclick=()=>{
        if(item.id == 'Clear'){
            display.innerText='';
            /* console.log('He borrado todo'); */
        } else if (item.id == 'Clear-last'){
            let string = display.innerText.toString();//convierte todo en el display en un string
            display.innerText = string.substr(0, string.length-1);// substr nos permite buscar dentro de una cadena de caracteres y borra el indice 0

        } else if(display.innerText != '' && item.id == 'Equal'){ 
            display.innerText = eval(display.innerText);//eval convierte el string en una operacion aritmetica  //eval nos ahorra el tener que crear una funcion para cada operacion
            
        } else if (display.innerHTML == '' && item.id == 'Equal'){ 
            display.innerText = 'Null'; 
            setTimeout(() =>(display.innerText = ''), 2000);

        }else{
            display.innerText += item.id;
        }
    }
});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
let isDark = true;

themeToggleBtn.onclick=()=>{
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark =! isDark;
}
