const products = [
    {
        name: "Teclado Mecânico Gamer K552w-2 Pt-red Kumara Redragon Lunar White Português Abnt2",
        description: "Idioma: Português Brasil.<br> Layout: QWERTY.<br> Ergonômico e adequado para vários usos.<br> É resistente a salpicos.<br> Função anti-ghosting integrada.<br> Tipo de teclado: mecânico.<br> Tecla cilíndrica.<br> Com conector: USB 2.0.<br> Medidas: 12.4cm de altura.<br> 35cm de largura e 3.8cm de profundidade.",
        image:"https://cdn.discordapp.com/attachments/1374412810259529869/1399740273789112340/image.png?ex=688a1937&is=6888c7b7&hm=81630b3be2e78a1612f188bd052d327536932a25187d8537446371cb17b38aad",
        link: "https://mercadolivre.com/sec/2nYo5uq"
    },
    
];

const productList = document.getElementById('product-list');

products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'product-card';

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="content">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <a href="${product.link}" target="_blank">Comprar Agora</a>
    </div>
  `;
  productList.appendChild(card);
});