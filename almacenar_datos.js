function almacendatos(){
    let alnombre=document.getElementById('nombre').value;
    let alapellido=document.getElementById('apellido').value;
    let alpasaporte=document.getElementById('pasaporte').value;
    let alexpasaporte=document.getElementById('expasaporte').value;
    let alvisa=document.getElementById('visa').value;
    let alexvisa=document.getElementById('exvisa').value;
    let alvacuna=document.getElementById('vacuna').value;
    let alprueba=document.getElementById('prueba').value;
    let almigcol=document.getElementById('migcol').value;
    let almigusa=document.getElementById('migusa').value
    
    const person = {
        apellido: `${alapellido}`,
        nombre: `${alnombre}`,
        pasaporte: `${alpasaporte}`,
        expasaporte: `${alexpasaporte}`,
        visa: `${alvisa}`,
        exvisa: `${alexvisa}`,
        vacuna: `${alvacuna}`,
        prueba: `${alprueba}`,
        migcol: `${almigcol}`,
        migusa: `${almigusa}`,
    }
    
    window.localStorage.setItem('usuario', JSON.stringify(person));
    //document.formulario1.apellido.value=dapellido;
    //document.formulario1.reserva.value=dreserva;
}