let form = document.querySelector('form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            let cardTitulo    = document.getElementById('titulo').value;
            let cardDescricao   = document.getElementById('descricao').value;
            let cardImagem     = document.getElementById('urlImagem').value;

            let conteudo = document.getElementById('conteudo');
            let divItem = document.createElement('div');
            divItem.innerHTML = `<div class="card" id="item">
                                <img src="${cardImagem}" class="imagem" alt="">
                                <h2>${cardTitulo.toUpperCase()}</h2>
                                <p class="cardDescricao">${cardDescricao}</p>
                                </div>`
            conteudo.appendChild(divItem);
        });