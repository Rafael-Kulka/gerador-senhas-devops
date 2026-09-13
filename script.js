const resultado = document.getElementById("resultado");
const tamanho = document.getElementById("tamanho");
const maiusculas = document.getElementById("maiusculas");
const numeros = document.getElementById("numeros");
const simbolos = document.getElementById("simbolos");
const gerar = document.getElementById("gerar");
const copiar = document.getElementById("copiar");
const mensagem = document.getElementById("mensagem");

function gerarSenha() {
    const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
    const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const caracteresNumericos = "0123456789";
    const caracteresEspeciais = "!@#$%&*?";

    let caracteres = letrasMinusculas;

    if (maiusculas.checked) {
        caracteres += letrasMaiusculas;
    }

    if (numeros.checked) {
        caracteres += caracteresNumericos;
    } 

    if (simbolos.checked) {
        caracteres += caracteresEspeciais;
    }

    let senha = "";
    const quantidade = Number(tamanho.value);

    for (let i = 0; i < quantidade; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }

    resultado.value = senha;
    mensagem.textContent = "";
}

async function copiarSenha() {
    if (!resultado.value) {
        mensagem.textContent = "Gere uma senha antes de copiar.";
        return;
    }

    await navigator.clipboard.writeText(resultado.value);
    mensagem.textContent = "Senha copiada!";
}

gerar.addEventListener("click", gerarSenha);
copiar.addEventListener("click", copiarSenha);

gerarSenha();
