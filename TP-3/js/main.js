const form = document.getElementById('Form');
const sumbit = document.getElementById('btnSubmit');
const total = document.getElementById('total');
const btnBorrar = document.getElementById('btnBorrar');
const forms = document.querySelectorAll('form');
/* const descuentoEstudiante= document.getElementById('descuentoEstudiante');
const descuentoTrainee= document.getElementById('descuentoEstudiante');
const descuentoJunior= document.getElementById('descuentoEstudiante');

 descuentoEstudiante.addEventListener('click',(e)=>{
       e.preventDefault();
        Categoria.value='Estudiante';
        
    });
    descuentoTrainee.addEventListener('click',(e)=>{
        e.preventDefault();
         Categoria.value='Trainee';
         
     });
     descuentoJunior.addEventListener('click',(e)=>{
        e.preventDefault();
         Categoria.value='Junior';
         
     }); */
form.addEventListener('submit',function(e){
    e.preventDefault();
});

const precioTicket = 200;

/* CAPTURA DATOS DEL FORM */
 const datosForm = {
    nombre:'',
    apellido:'',
    email:'',
    cantidad:parseInt(''),
    categoria:'',
}

    let Nombre = document.getElementById('formNombre');
    let apellido = document.getElementById('formApellido');
    let correo = document.getElementById('formEmail');
    let Cantidad = document.getElementById('formCantidad');
    let Categoria=  document.getElementById('formCategoria');
    Nombre.addEventListener('input',function(e){
        datosForm.nombre =  e.target.value;
    
    });
    apellido.addEventListener('input',function(e){
        datosForm.apellido =  e.target.value;
    
    });
    correo.addEventListener('input',function(e){
        datosForm.email =  e.target.value;
    
    });
    Cantidad.addEventListener("input",function(e){
        datosForm.cantidad =  parseInt(e.target.value);
        
    });
    Categoria.addEventListener("sumbit",function(e){
        datosForm.categoria =  parseInt(e.target.value);
        console.log(Categoria);
      

    });
 
  /*   const junior = Number(precioTicket) * parseInt(Cantidad);  */
  /* EVENTO SUMBIT */
    sumbit.addEventListener('click',(e)=>{
        e.preventDefault();
        console.log(precioTicket);
        const total = document.getElementById('total');
        let Cantidad = document.getElementById('formCantidad');
        let Categoria=  document.getElementById('formCategoria');
        let  cantidadDat = {
            cantidad:'',
            categoria:'',
        }
    
        Cantidad.addEventListener("submit",function(e){
            cantidadDat.cantidad =  parseInt(e.target.value);
            console.log(Cantidad);
            Cantidad=(Cantidad.value);
   
        });

        Categoria.addEventListener("sumbit",function(e){
            cantidadDat.categoria =  parseInt(e.target.value);
            console.log(Categoria);
          

        });
        /* EL CODIGO A CONTINUACION PERMITE REALIZAR LA OPERACION JUNTO CON EL DESCUENTO */
         const cantidadValue=(precioTicket*Cantidad.value);
         const descuento15 = (precioTicket*Cantidad.value*15/100);
         const descuento50 = (precioTicket*Cantidad.value*50/100);
         const descuento80 = (precioTicket*Cantidad.value*80/100);

         if(Cantidad=(Cantidad.value), Categoria.value=='') 
        {/* ME COSTO PENSAR EN CONVERTIR CANTIDAD EN CANTIDAD.VALOR AUNQUE TOQUETIE DE TODO PUDE :'D */
            total.innerHTML=('Total a   pagar: $ ' + cantidadValue);/* NO SABIA COMO LLEGAR A ESE RESULTADO SLDDFGDFGKJFGSDLJGFDÑ */
        }   
          else if (Categoria.value=='junior'||Categoria.value=='Junior')
        {     
            total.innerHTML=('Total a   pagar: $ ' + (-descuento15+cantidadValue));
       
       }
          else if (Categoria.value=='trainee'||Categoria.value=='Trainee')
       {     
           total.innerHTML=('Total a   pagar: $ ' + (-descuento50+cantidadValue));
        }
        
         else if (Categoria.value=='estudiante' ||Categoria.value=='Estudiante' )
        {       
            total.innerHTML=('Total a   pagar: $ ' + (-descuento80+cantidadValue));
       }
       else{
        total.innerHTML=('Total a   pagar: $ ' + cantidadValue);
       }
      
       
    });
   btnBorrar.addEventListener('click',(e)=>{
        e.preventDefault();
        form.reset();
        total.innerHTML=(' ');

   });
/* console.log(form) */


/* STEVENS */                                               /* STEVENS */                                       /* STEVENS */                              /* STEVENS */       