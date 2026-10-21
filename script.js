const pesquisa = document.getElementById("pesquisa");

pesquisa.addEventListener("input", function () {
    const termo = pesquisa.value.toLowerCase();

    const entregas = document.querySelectorAll(".entrega");

    entregas.forEach(function (entrega) {
        const texto = entrega.textContent.toLowerCase();

        if (texto.includes(termo)) {
            entrega.style.display = "flex";
        } else {
            entrega.style.display = "none";
        }
    });
});