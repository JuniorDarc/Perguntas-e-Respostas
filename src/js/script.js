document.addEventListener("DOMContentLoaded", function() {
    // Obtenha todos os botões de resposta
    const answerButtons = document.querySelectorAll(".buttonQuest");
    const calculateButton = document.getElementById("calcular-nota");
    const resultElement = document.getElementById("total");

    let score = 0; // Inicializa o contador de pontos

    answerButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Verifica se o botão tem o ID "Acertou" e adiciona 1 ponto
            if (button.id === "Acertou") {
                score++;
                button.style.backgroundColor = "#4CAF50"; // Marca a resposta correta em verde
            } else {
                button.style.backgroundColor = "#f44336"; // Marca a resposta incorreta em vermelho
            }

            // Desabilita todos os botões da mesma pergunta após a resposta
            const parent = button.closest('.input-field');
            const siblings = parent.querySelectorAll('.buttonQuest');
            siblings.forEach(sibling => sibling.disabled = true);
        });
    });

    // Calcula e exibe a nota final
    calculateButton.addEventListener("click", function() {
        resultElement.textContent = `Sua nota é: ${score}`;
        
    });
});