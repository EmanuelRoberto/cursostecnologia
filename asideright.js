const sections = document.getElementById("links-ultimodia");
console.log(sections)

// Itera sobre cada elemento (dado) dentro do array 'novidades'
for (let dado of ultimodia) {
    // Cria um novo elemento HTML <div>
    const div = document.createElement('div');
    // Adiciona a classe 'linhasnovidades' ao novo elemento <div>
    div.classList.add('ultimodia-linhas');
    // Cria um novo elemento HTML <a> (link)
    const link = document.createElement('a');

    link.classList.add('ultimodia-linhasa');

    // Adiciona uma cor no html da tag <a>
    link.style.color = '#ecf844';

    // Define o atributo 'href' do link para o valor de 'dado.linke'
    link.href = dado.links;
    // Define o atributo 'target' do link para "_blank", abrindo links em uma nova aba
    link.target = "_blank";
    // Define o texto do link para o valor de 'dado.tituloe'
    link.textContent = dado.titulos;

    // Adiciona o elemento <a> como filho do elemento <div>
    div.appendChild(link);
    // Adiciona o elemento <div> como filho do elemento 'sectione' (provavelmente um elemento <section>)
    sections.appendChild(div);
}