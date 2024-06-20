var dados = [];

function montarTabela() {
    let tbody = document.querySelector('#tb-body');
    let html = '';

    for (let [index, item] of dados.entries()) {
        html += `<tr>
                    <td data-th="Nome">${item.nome}</td>
                    <td data-th="Link"><a href="${item.link}" target="_blank">${item.link}</a></td>
                    <td><button class=" container" onclick="excluirItem(${index})" style="background-color: transparent; color: lightcoral; border: none">Excluir</button></td>
                 </tr>`;
    }
    tbody.innerHTML = html;
}

function adicionarItem() {
    var vnome = document.getElementById('nome');
    var vlink = document.getElementById('link');
    
    let novoItem = {
        nome: vnome.value,
        link: vlink.value,
    };

    if (vnome.value && vlink.value) {                
        dados.push(novoItem);
        salvarDados();
        montarTabela();
        vnome.value = '';
        vlink.value = '';
    }
}

function excluirItem(index) {
    dados.splice(index, 1);
    salvarDados();
    montarTabela();
}

function salvarDados() {
    localStorage.setItem('fornecedores', JSON.stringify(dados));
}

function carregarDados() {
    let dadosSalvos = localStorage.getItem('fornecedores');
    if (dadosSalvos) {
        dados = JSON.parse(dadosSalvos);
        montarTabela();
    }
}

// Carregar os dados do localStorage ao carregar a página
window.onload = carregarDados;
