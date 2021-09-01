document.getElementById("agregar").onclick = function (){agregar()};
document.getElementById("eliminar").onclick= function (){eliminar()};

var listaTareas=[];
var idLista=[];
var a=0;
var b='';
var c='';
var d='';


function agregar()
{
   
   var tareas= document.getElementById("introTarea").value;
    if(tareas===""){alert ("No se Escribio Ninguna Tarea");}

    else{
        listaTareas.push(tareas);
        /*for (var i=0; i<=listaTareas.length-1; i++)
            {
                a=i;
                console.log(listaTareas.length-1);
             
            
            }*/
            var a=listaTareas.length-1;

                    b="checkbox"+a;
                    c="label"+a;
                    d="salto"+a;
                    
                    
                    
                    //Creacion de checkbox validacion(vald).
                    const vald = document.createElement("input");
                    vald.type = "checkbox"; vald.value = ""; 
                    vald.id=(b); vald.style="width:20px;height:20px";
                   
                    //Creacion de label tareas.
                    var nomTarea = document.createElement("label");
                    nomTarea.id=(c);
                    nomTarea.textContent=(listaTareas[a]);
                    //creacion de salto de linea.
                    const salto=document.createElement("br");
                    salto.id=(d);

                    //idLista.push(c);
                    idLista.push(b, c, d);
                    /*console.log("ID checkbox: "+b+" ID label: "+c+" ID salto: "+d);
                    console.log(idLista);*/
                    document.getElementById('pantalla').appendChild(vald); 
                    document.getElementById('pantalla').appendChild(nomTarea);
                    document.getElementById('pantalla').appendChild(salto);
                    //limpiar capo de entrada
                    document.getElementById("introTarea").value="";
                    
    }
        };

function eliminar ()
{
   
    for ( var i=0; i<=idLista.length-1; i++) 
            
        {   //console.log(idLista.length);
            //var elimCheck = (idLista[i]);
            var marcado = document.getElementById(idLista[i]);

            if (marcado.checked)
             {
                var divPantalla = document.getElementById('pantalla');
                var checkbox1 = document.getElementById(idLista[i]);
                var label1 = document.getElementById(idLista[i+1]);
                var salto1 = document.getElementById(idLista[i+2]);

                //eliminiacion de checkbox, label, saltos.
                divPantalla.removeChild(checkbox1);
                divPantalla.removeChild(label1);
                divPantalla.removeChild(salto1);
                //eliminar en array y retroceder para validar checkbox.
                idLista.splice(i, 3);
                i-=1;
            }
    
        
        } 
            
    
    
}
