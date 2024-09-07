// função pesquisar()
//   Descrição: Essa função é responsável por realizar uma pesquisa e exibir os resultados na página.
//   Quando chamada, ela:
//   1. Seleciona a seção HTML onde os resultados serão inseridos.
//   2. Itera sobre um array de dados (assumindo que 'dados' seja um array definido anteriormente).
//   3. Para cada dado, cria um elemento HTML para exibir o título, link e descrição.
//   4. Adiciona os elementos criados à seção de resultados.

function pesquisar(textoPesquisa){

    // // Converte o texto de pesquisa para minúsculas
    // textoPesquisa = textoPesquisa.toLowerCase();

    // Seleciona a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //se campoPesquisa não for encontrado
    if (!campoPesquisa){
        section.innerHTML = "Nenhum curso foi encontrado"
        return 
    }

    // Verifica se o campo de pesquisa está vazio após remover espaços em branco
    // Se estiver vazio, exibe uma mensagem informando que nenhum curso foi encontrado
    // e interrompe a execução da função. OPCIONAL!!
    // if (campoPesquisa.trim() === "") {
    //     section.innerHTML = "Nenhum curso foi encontrado";
    //     return;
    // }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = ""
    let titulo = "";
    let descricao = "";

    // Itera sobre cada dado na lista de dados.
    for (let dado of dados) {
        //deixa tudo em minúsculo
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()

        //se no titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
            // Cria um novo elemento HTML para cada resultado.
            resultados += `
                <div class="item-resultado">
                    <h2><a href="${dado.link}" target="_blank">${dado.titulo}</a></h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    ${dado.certificado && `<p class="certificado">${dado.certificado}</p>`}
                </div>
            `;
        }
            
    }

    
    if (!resultados) {
        resultados = "Nenhum curso foi encontrado";
    }
        
    // Atualiza o conteúdo HTML da seção de resultados com os elementos criados.
    section.innerHTML = resultados
}
