
    let listContainer = document.getElementById('listContainer');
    let containerPrecio = document.getElementById('precio');
    let containerPrecioIva = document.getElementById('precioIva');

    let auxProducto = 0;
    let auxCantidad = 0;
    let auxPrecio = 0;

function agregar() {
        let valueProducto = document.getElementById('valueProducto').value;
        let valueCantidad = parseInt(document.getElementById('valueCantidad').value);
        let valuePrecio = parseInt(document.getElementById('valuePrecio').value);
        auxPrecio = auxPrecio + valuePrecio;
        auxCantidad = auxCantidad + valueCantidad;
        // Validar los inputs
        if (isNaN(valueCantidad && valuePrecio)) {
            console.log('is NaN');
            alert('Debe completar todos los campos')
        } else {
                console.log('Cantidad de productos: '+ auxCantidad);
                containerPrecio.innerHTML = `<h3>TOTAL A PAGAR: $${auxPrecio}</h3>`;
                
                if (valueProducto !== 0) {
                    auxProducto = auxProducto + 1;
                }
                
                // Crear tabla
                var body = document.getElementsByTagName("body") [0];
                var tabla = document.createElement("table");
                var tblBody = document.createElement("tbody");
                
                for (var i = 0; i < auxProducto; i++) {
                    var hilera = document.createElement("tr");
                }
                
                for (let j = 0; j < 1; j++) {
                    var celda0 = document.createElement("td");
                    var celda = document.createElement("td");
                    var celda2 = document.createElement("td");
                    var celda3 = document.createElement("td");
                    // var textoCelda0 = document.createTextNode(`${[i]})`);
                    var textoCelda = document.createTextNode(`${[i]}) Producto: ${valueProducto}`);
                    var textoCelda2 = document.createTextNode(`Cantidad: ${valueCantidad}`);
                    var textoCelda3 = document.createTextNode(`El precio es: $`+valuePrecio);
                    // celda0.appendChild(textoCelda0);
                    celda.appendChild(textoCelda);
                    celda2.appendChild(textoCelda2);
                    celda3.appendChild(textoCelda3);
                    // hilera.appendChild(celda0);
                    hilera.appendChild(celda);
                    hilera.appendChild(celda2);
                    hilera.appendChild(celda3);
                }

                tblBody.appendChild(hilera);                
                tabla.appendChild(tblBody);
                body.appendChild(tabla)
                
                // Para limpiar los inputs
                document.getElementById('valueProducto').value = '';
                document.getElementById('valueCantidad').value = '';
                document.getElementById('valuePrecio').value = '';
                
            }
            }
            
            function iva() {
                if (auxPrecio !== 0 && auxPrecio !== NaN) {
                    let calculoIva = parseInt(auxPrecio * 0.3);
                    let totalIva = calculoIva + auxPrecio;
                containerPrecioIva.innerHTML = `<h3>TOTAL A PAGAR CON IVA: $${totalIva}</h3>`;
                }
        }
        function bolsas() {
            // Aprox 4 productos por bolsa
            if (auxCantidad <= 4) {
                listContainer.innerHTML = `Se recomienda llevar aprox 1 bolsa`;
            } else if(auxCantidad <= 8) {
                listContainer.innerHTML = `Se recomienda llevar aprox 2 bolsas`;
            } else if(auxCantidad <= 16) {
                listContainer.innerHTML = `Se recomienda llevar aprox 4 bolsas`;
            } else if (auxCantidad > 16) {
                listContainer.innerHTML = `Se recomienda llevar más de 5 bolsas`;
            }
        }
        