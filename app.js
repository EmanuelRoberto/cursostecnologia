const formulario = document.getElementById('meuFormulario');
const section = document.getElementById("resultados-pesquisa");

const campoPesquisa = document.getElementById('campo-pesquisa');
let timeout;

campoPesquisa.addEventListener('input', () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    pesquisar(campoPesquisa.value);
  }, 500);
});

function pesquisar(textoPesquisa){

    // Converte o texto de pesquisa para minúsculas
    // textoPesquisa = textoPesquisa.toLowerCase();

    // Seleciona a seção HTML onde os resultados serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    //se campoPesquisa não estiver preenchido ele não mostra resultado
    if (!campoPesquisa){
        section.innerHTML = "";
        return 
    }

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
        // resultados = "Nenhum curso foi encontrado";
        // adiciona uma tag com uma cor para a resposta "Nenhum curso foi encontrado"
        resultados = '<span style="color: #ecf844;">Nenhum curso foi encontrado.</span>';
    }
        
    // Atualiza o conteúdo HTML da seção de resultados com os elementos criados.
    section.innerHTML = resultados
}
