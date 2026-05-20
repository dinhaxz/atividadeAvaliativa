const apiTenis = [
{
    nome: "Nike Air Force",
    marca: "Nike",
    preco: "R$ 599,90",
    modelo: "Air Force 1",
    cores:["Branco", "preto"],
    tamanhos: [38,39,40,41,42],
    promocao: true,
    imagem: "https://cdn.awsli.com.br/2500x2500/1925/1925256/produto/356050244/whatsapp-image-2025-06-04-at-20-55-10-zklc0jezow.jpeg"
},
{
   nome: "Adidas Ultraboost",
    marca: "Adidas",
    preco: "R$ 799,90",
    modelo: "Ultraboost",
    cores:["Azul", "preto"],
    tamanhos: [38,39,40,41,42],
    promocao: false,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgMk37_U4HMC7-Oxzd-o6mVxbp-PGmxm04lw&s" 
},
{
    nome: "Puma RS-X",
    marca: "Puma",
    preco: "R$ 499,90",
    modelo: "RS-X",
    cores:["cinza", "vermelho"],
    tamanhos: [38,39,40,41,42],
    promocao: true,
    imagem: "https://artwalk.vtexassets.com/arquivos/ids/436443/39430-2-003-1.jpg?v=638277210260500000" 
},
{
    nome: "vans Old Skool",
    marca: "vans",
    preco: "R$ 349.90",
    modelo: "Old Skool",
    cores:["preto", "branco"],
    tamanhos: [38,39,40,41,42],
    promocao: false,
    imagem: "https://acdn-us.mitiendanube.com/stores/001/115/376/products/vans-old-skool-2-f4893f5c0b6d04363017122415083177-1024-1024.webp" 
}
];

const produtosDiv = document.getElementById("produtos");

apiTenis.forEach(sapato => {

  produtosDiv.innerHTML += `

    <div class="card">

      <img src="${sapato.imagem}" alt="${sapato.nome}">

      <div class="info">

        <h2>${sapato.nome}</h2>

        <p class="marca">
          Marca: ${sapato.marca}
        </p>

        <p>
          <strong>Modelo:</strong> ${sapato.modelo}
        </p>

        <p class="preco">
          ${sapato.preco}
        </p>

        <p class="cores">
          <strong>Cores:</strong>
          ${sapato.cores.join(", ")}
        </p>

        <p class="tamanhos">
          <strong>Tamanhos:</strong>
          ${sapato.tamanhos.join(", ")}
        </p>

        ${sapato.promocao
          ? '<span class="promo">PROMOÇÃO</span>'
          : ''
        }

      </div>

    </div>

  `;

});
 


