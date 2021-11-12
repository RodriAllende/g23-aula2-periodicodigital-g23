const fechaNacimiento = document.getElementById("fechaNacimiento");
const edad = document.getElementById("edad");

const calcularEdad = (fechaNacimiento) => {
    const fechaActual = new Date();
    const anoActual = parseInt(fechaActual.getFullYear());
    const mesActual = parseInt(fechaActual.getMonth()) + 1;
    const diaActual = parseInt(fechaActual.getDate());


    const anoNacimiento = parseInt(String(fechaNacimiento).substring(0, 4));
    const mesNacimiento = parseInt(String(fechaNacimiento).substring(5, 7));
    const diaNacimiento = parseInt(String(fechaNacimiento).substring(8, 10));

    let edad = anoActual - anoNacimiento;
    if (mesActual < mesNacimiento) {
        edad--;
    } else if (mesActual === mesNacimiento) {
        if (diaActual < diaNacimiento) {
            edad--;
        }
    }
    return edad;
};

window.addEventListener('load', function () {

    fechaNacimiento.addEventListener('change', function () {
        if (this.value) {
            edad.innerText = `Tienes ${calcularEdad(this.value)} años de edad`;
        }
    });

});


    function mOver(obj)
    {
    obj.innerHTML="<center><h5>¿Querés recibí en tu correo las últimas publicaciones, comentar y disfrutar de la mejor información escolar?</h5></center>"
    }
    
    function mOut(obj)
    {
    obj.innerHTML="<h4>¡Completá con tus datos y dale click al botón enviar!</h4>"
    }
    
    
    function pregunta() {
        if (confirm('¿Estas seguro de enviar este formulario?')) {
            document.tuformulario.submit()
        }
    }
