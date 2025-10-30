let numeroSecreto;
let jogoAtivo = false;

const botaoIniciar = document.getElementById("startGame");
const botaoTentar = document.getElementById("tryBtn");
const campoChute = document.getElementById("guess");
const mensagem = document.getElementById("result");

botaoIniciar.onclick = () => {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    jogoAtivo = true;

    campoChute.disabled = false;
    botaoTentar.disabled = false;
    mensagem.textContent = "Jogo iniciado! Tente adivinhar.";
    campoChute.focus();
};

botaoTentar.onclick = () => {
    if (!jogoAtivo) return;

    const chute = Number(campoChute.value);

    if (chute === numeroSecreto) {
        mensagem.textContent = "✅ Parabéns! Você acertou!";
        jogoAtivo = false;
        campoChute.disabled = true;
        botaoTentar.disabled = true;
    } else if (chute > numeroSecreto) {
        mensagem.textContent = "🔻 Muito alto!";
    } else {
        mensagem.textContent = "🔺 Muito baixo!";
    }

    campoChute.value = "";
    campoChute.focus();
};

campoChute.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !botaoTentar.disabled) {
        botaoTentar.click();
    }
});

