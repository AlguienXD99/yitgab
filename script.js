function search() {
    const query = document.getElementById("search").value;
    const result = document.getElementById("result");

    if (query) {
        result.textContent = `Buscando: ${query}... ¡En Roquinia nada es imposible!`;
    } else {
        result.textContent = "Por favor ingresa algo para buscar.";
    }
}
