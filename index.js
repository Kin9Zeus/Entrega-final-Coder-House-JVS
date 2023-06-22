let verdad = true;

while (verdad){
    alert("Tenemos 3 motos para financiar: MT07 Yamaha, Duke 890R y Ducati Monster... seleccione cual moto desea financiar");

    let moto = prompt("Ingrese la moto que desea financiar usando las palabras MT07, 890R o Monster");

    let MotoPrice = 0;

    function CaseFunc(){
        alert(`Tu nueva ${moto} tiene un valor de ${MotoPrice} de pesos colombianos`);
        alert(`Puedes financiar tu ${moto} desde 6 hasta 24 cuotas, selecciona el numero de cuotas que desea usar`);
        let cuotas = prompt("Digite 6, 12, 18 o 24 según las cuotas que desee");
        let MotoInter = ((MotoPrice + ((5/100)*MotoPrice))/cuotas);
        switch (cuotas){
            case "6":
                alert(`Tu ${moto} a ${cuotas} cuotas se explica de la siguiente manera`);
                alert(`6 cuotas cada una de ${MotoInter} pesos mensuales para tu ${moto}`);
                alert(`Una tasa de interés del 5% sobre el valor total de tu ${moto}`); 
                AccCuot = prompt("Si acepta este plan presione Y o de lo contrario presione N");
                if (AccCuot == "Y" || AccCuot == "y"){
                    alert("Bienvenido a la familia, un asesor le contactará para seguir el proceso de compra!");
                }else if (AccCuot == "N" || AccCuot == "n"){
                    alert("Volviendo para que puedas seleeccionar moto y cuotas de nuevo");
                }
                break;
            case "12":
                alert(`Tu ${moto} a ${cuotas} cuotas se explica de la siguiente manera`);
                alert(`${cuotas} cuotas cada una de ${MotoInter} pesos mensuales para tu ${moto}`);
                alert(`Una tasa de interés del 5% sobre el valor total de tu ${moto}`); //` ${MotoInter}`
                AccCuot = prompt("Si acepta este plan presione Y o de lo contrario presione N");
                if (AccCuot == "Y" || AccCuot == "y"){
                    alert("Bienvenido a la familia, un asesor le contactará para seguir el proceso de compra!");
                }else if (AccCuot == "N" || AccCuot == "n"){
                    alert("Volviendo para que puedas seleeccionar moto y cuotas de nuevo");
                }
                break;
            case "18":
                alert(`Tu ${moto} a ${cuotas} cuotas se explica de la siguiente manera`);
                alert(`${cuotas} cuotas cada una de ${MotoInter} pesos mensuales para tu ${moto}`);
                alert(`Una tasa de interés del 5% sobre el valor total de tu ${moto}`);
                AccCuot = prompt("Si acepta este plan presione Y o de lo contrario presione N");
                if (AccCuot == "Y" || AccCuot == "y"){
                    alert("Bienvenido a la familia, un asesor le contactará para seguir el proceso de compra!");
                }else if (AccCuot == "N" || AccCuot == "n"){
                    alert("Volviendo para que puedas seleeccionar moto y cuotas de nuevo");
                }
                break;
            case "24":
                alert(`Tu ${moto} a ${cuotas} cuotas se explica de la siguiente manera`);
                alert(`${cuotas} cuotas cada una de ${MotoInter} pesos mensuales para tu ${moto}`);
                alert(`Una tasa de interés del 5% sobre el valor total de tu ${moto}`); 
                AccCuot = prompt("Si acepta este plan presione Y o de lo contrario presione N");
                if (AccCuot == "Y" || AccCuot == "y"){
                    alert("Bienvenido a la familia, un asesor le contactará para seguir el proceso de compra!");
                }else if (AccCuot == "N" || AccCuot == "n"){
                    alert("Volviendo para que puedas seleeccionar moto y cuotas de nuevo");
                }
                break;
            default:
                alert("Se ingresó un número de cuotas inválido, refresque la página para intentarlo otra vez");

        }
    }

    class Carac{
        constructor(cilindraje, peso, potencia, torque, marca){
            this.cilindraje = cilindraje;
            this.peso = peso;
            this.potencia = potencia;
            this.torque = torque;
            this.marca = marca.toUpperCase();
        }
    }

    switch(moto){
        case "MT07":
            MotoPrice = 52000000;
            CaseFunc();

            console.log("Caracteristicas principales de tu MT07")
            let carac1 = new Carac("689 cc", "184Kg", "72.4 Hp a 8750 rpm", "67.0 Nm a 6500 rpm", "Yamaha");
            for(const propiedad in carac1){
                console.table(propiedad, carac1[propiedad])
            }

            var datosMT = ["Altura al asiento: 805mm", "Tipo de motor: 4 tiempos DOHC, 4 válvulas, refrigerado por líquido", "Motor: bicilíndrico de 4 tiempos", "Frenos: discos delanteros dobles de 298 mm", "Tipo de transmisión: Transmisión constante de 6 velocidades"];

            var mensajeMT = "Los datos técnicos secundarios de la Yamaha MT-07 son:\n";
            for (var i = 0; i < datosMT.length; i++) {
            mensajeMT += "- " + datosMT[i] + "\n";
            }
            alert(mensajeMT);

            break;
        case "890R":
            MotoPrice = 71990000;
            CaseFunc();

            console.log("Caracteristicas principales de tu 890R")
            let carac2 = new Carac("890 cc", "166Kg", "119.4 HP a 9250 RPM", "99 NM a 7750 RPM", "KTM");
            for(const propiedad in carac2){
                console.table(propiedad, carac2[propiedad])
            }

            var datosR = ["Altura al asiento: 834mm", "Tipo de motor: 4 tiempos, bicilindrico en linea", "Frenos: discos delanteros dobles de 320mm", "Tipo de transmisión: Transmisión mecanica de 6 velocidades"];

            var mensajeR = "Los datos técnicos secundarios de la KTM Duke 890R son:\n";
            for (var i = 0; i < datosR.length; i++) {
            mensajeR += "- " + datosR[i] + "\n";
            }
            alert(mensajeR);

            break;
        case "Monster":
            MotoPrice = 75000000;
            CaseFunc();

            console.log("Caracteristicas principales de tu Ducati Monster")
            let carac3 = new Carac("937 cc", "166Kg", "111 CV a 9.250 rpm", "93 Nm a 6.500 rpm", "Ducati");
            for(const propiedad in carac3){
                console.table(propiedad, carac3[propiedad])
            }

            var datosDucati = ["Altura al asiento: 820mm", "Tipo de motor: 4 tiempos, bicilindrico en linea", "Frenos: discos delanteros dobles de 320mm", "Tipo de transmisión: Transmisión mecanica de 6 velocidades con Quick Shifter"];

            var mensajeDucati = "Los datos técnicos secundarios de la Ducati Monster son:\n";
            for (var i = 0; i < datosDucati.length; i++) {
            mensajeDucati += "- " + datosDucati[i] + "\n";
            }
            alert(mensajeDucati);
            
            break;
        default:
            alert("Se ingresó un modelo fuera de las opciones dadas, refresque la página para intentarlo de nuevo")
    }

    if (AccCuot == "Y" || AccCuot == "y"){
        alert("Ingresa tus ddatos de cliente para nuestra base de datos");
        function validar() {
            var nombre = document.getElementById("nombre").value;
            var edad = document.getElementById("edad").value;
            var id = document.getElementById("id").value;
            var correo = document.getElementById("correo").value;
      
            if (nombre == "" || edad == "" || id == "" || correo == "") {
              alert("Por favor, llene todos los campos.");
              return false;
            }
      
            if (edad < 18) {
              alert("Debe ser mayor de 18 años para enviar el formulario.");
              return false;
            }
      
            if (id.length > 15) {
              alert("El ID no puede tener más de 15 caracteres.");
              return false;
            }
      
            if (/\s/.test(correo)) {
              alert("El correo electrónico no puede contener espacios en blanco.");
              return false;
            }
      
            alert(`Nombre: ${nombre}\nEdad: ${edad}\nID: ${id}\nCorreo electrónico: ${correo}`);
            return true;
          }

        verdad = false;
    }
}

