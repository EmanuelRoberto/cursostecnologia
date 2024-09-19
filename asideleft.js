const sectione = document.getElementById("links-novidades");
console.log(sectione)

// // for (let dado of novidades) {
// //     sectione.innerHTML = `
// //     <div>
// //         <a href="${dado.linke}" target="_blank" class="linhasnovidades">${dado.tituloe}</a>
// //     </div>
// // `;

// // }

// // for (let dado of novidades) {
// //     const div = document.createElement('div');
// //     div.classList.add('linhasnovidades');
// //     const link = document.createElement('a');

// //     link.href = dado.linke;
// //     link.target = "_blank";
// //     link.textContent = dado.tituloe;

// //     div.appendChild(link);
// //     sectione.appendChild(div);
// // }

// Itera sobre cada elemento (dado) dentro do array 'novidades'
for (let dado of novidades) {
    // Cria um novo elemento HTML <div>
    const div = document.createElement('div');
    // Adiciona a classe 'linhasnovidades' ao novo elemento <div>
    div.classList.add('novidades-linhas');
    // Cria um novo elemento HTML <a> (link)
    const link = document.createElement('a');

    link.classList.add('novidades-linhasa');

    // Adiciona uma cor no html da tag <a>
    link.style.color = '#ecf844';

    // Define o atributo 'href' do link para o valor de 'dado.linke'
    link.href = dado.linke;
    // Define o atributo 'target' do link para "_blank", abrindo links em uma nova aba
    link.target = "_blank";
    // Define o texto do link para o valor de 'dado.tituloe'
    link.textContent = dado.tituloe;

    // Adiciona o elemento <a> como filho do elemento <div>
    div.appendChild(link);
    // Adiciona o elemento <div> como filho do elemento 'sectione' (provavelmente um elemento <section>)
    sectione.appendChild(div);
}