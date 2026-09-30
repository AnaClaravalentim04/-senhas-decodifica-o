const frutasDecodificadas = {
    1: { nome: "Maçã", emoji: "🍎" },
    2: { nome: "Banana", emoji: "🍌" },
    3: { nome: "Morango", emoji: "🍓" },
    4: { nome: "Uva", emoji: "🍇" },
    5: { nome: "Laranja", emoji: "🍊" }
};

function decodificarSenha() {
    const input = document.getElementById("senhaInput");
    const senha = parseInt(input.value);
    const resultado = document.getElementById("resultado");

    if (isNaN(senha) || senha < 1 || senha > 5) {
        resultado.innerHTML = `
            <p style="color: #e74c3c; font-size: 1.2em; font-weight: bold;">
                ❌ Por favor, digite um número entre 1 e 5!
            </p>
        `;
        return;
    }

    const fruta = frutasDecodificadas[senha];
    resultado.innerHTML = `
        <div class="fruta-resultado">${fruta.emoji}</div>
        <div class="nome-fruta">${fruta.nome}</div>
    `;

    input.value = "";
    input.focus();
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("senhaInput").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            decodificarSenha();
        }
    });
});
