function login() {
    // Aquí puedes agregar la lógica de autenticación del lado del cliente
    // En un entorno de producción, deberías implementar la autenticación del lado del servidor.

    // Simulando una autenticación exitosa
    displayMessage("Accedió correctamente");
    setTimeout(function () {
        window.location.href = "home.html";
    }, 2000);
}

function displayMessage(message) {
    var messageContainer = document.getElementById("messageContainer");
    messageContainer.innerHTML = message;
    messageContainer.style.display = "block";

    // Ocultar el mensaje después de 2 segundos
    setTimeout(function () {
        messageContainer.style.display = "none";
    }, 2000);
}

      // Función para llenar el formulario del modal con la información del producto
      function fillModal(product, price, quantity) {
        document.getElementById('product').value = product;
        document.getElementById('price').value = price;
        document.getElementById('quantity').value = quantity;
        updateTotal(); // Actualiza el total al cargar el modal
    }

    function updateTotal() {
        // Obtener el valor de la cantidad y el precio
        var quantity = document.getElementById("quantity").value;
        var price = document.getElementById("price").value;

        // Calcular el total
        var total = quantity * price;

        // Mostrar el total en el campo correspondiente
        document.getElementById("total").value = total.toFixed(2);
    }

    function submitForm() {
        // Obtener valores del formulario
        var username = document.getElementById("username").value;
        var address = document.getElementById("address").value;
        var product = document.getElementById("product").value;
        var quantity = document.getElementById("quantity").value;

        // Obtener el total del campo readonly
        var total = document.getElementById("total").value;

        // Construir mensaje de compra
        var message = "Cliente: " + username + "\n" +
        "Compraste " + quantity + " unidad(es) de " + product + "\n" +
        "Total a pagar: $" + total;

        // Mostrar mensaje
        alert(message);

        // Cerrar el modal
        var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
        modal.hide();
    }

    // Obtener el botón de "Comprar" y asignarle el evento de clic
    document.getElementById('exampleModal').addEventListener('show.bs.modal', function (event) {
        var button = event.relatedTarget;
        var product = button.getAttribute('data-product');
        var price = button.getAttribute('data-price');
        var quantity = button.getAttribute('data-quantity');
        fillModal(product, price, quantity);
    });