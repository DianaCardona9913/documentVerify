
function obtenerdatos(){
    let dapellido=document.getElementById('apellido').value;
    let dreserva=document.getElementById('reserva').value;
    
    const person = {
        apellido: `${dapellido}`,
        reserva: `${dreserva}`,
    }
    
    window.localStorage.setItem('user', JSON.stringify(person));
    //document.formulario1.apellido.value=dapellido;
    //document.formulario1.reserva.value=dreserva;
}

