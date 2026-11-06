// Espera o documento carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões do menu fixo e todas as seções (abas)
    const botoesNavegacao = document.querySelectorAll('.nav-item');
    const abasConteudo = document.querySelectorAll('.aba-conteudo');

    botoesNavegacao.forEach(botao => {
        botao.addEventListener('click', () => {
            // 1. Remove a classe 'ativo' de todos os botões do menu
            botoesNavegacao.forEach(btn => btn.classList.remove('ativo'));
            
            // 2. Adiciona a classe 'ativo' apenas ao botão que foi clicado
            botao.classList.add('ativo');

            // 3. Pega o identificador da aba no atributo 'data-aba'
            const abaAlvo = botao.getAttribute('data-aba');
            document.body.classList.toggle('perfil-ativo', abaAlvo === 'perfil');

            // 4. Alterna as abas: esconde todas e mostra apenas a correspondente
            abasConteudo.forEach(aba => {
                if (aba.id === abaAlvo) {
                    aba.classList.add('ativa');
                } else {
                    aba.classList.remove('ativa');
                }
            });

            // 5. Rola a tela suavemente para o topo a cada troca de aba
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});