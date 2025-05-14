
#Cabo Verde - Ilhas com Localização Interativa
Projeto web interativo que apresenta as 10 ilhas de Cabo Verde utilizando um slider dinâmico feito com Swiper.js. Cada slide apresenta a imagem de fundo da ilha, nome, descrição resumida e um botão de localização que leva diretamente ao Google Maps, permitindo ao usuário explorar visualmente cada ilha e conhecer sua localização geográfica.


##🚀 Funcionalidades

.Exibição interativa das 10 ilhas de Cabo Verde.
.Imagens representativas e estilizadas com CSS personalizado.
.Link direto para a localização da ilha no Google Maps.
.Interface responsiva e moderna.
.Animações suaves entre slides com Swiper.js.

🗺️ Ilhas apresentadas
.Santo Antão
.São Vicente
.São Nicolau
.Sal
.Boa Vista
.Maio
.Santiago
.Fogo
.Brava
.Santa Luzia

##💻 Tecnologias Utilizadas
.HTML5
.CSS3
.Swiper.js (Framework de slider responsivo)
.SVG Icons (ícones de localização)
.Google Maps Links

##📂 Como usar
Clone o repositório:

```bash
git clone https://github.com/seu-usuario/cabo-verde-ilhas.git
```
Acesse a pasta do projeto:

```bash
cd cabo-verde-ilhas
```

Abra o arquivo `index.html` em seu navegador favorito.

##✨ Como adicionar novas ilhas
Adicione uma nova imagem da ilha na pasta images.

Crie um novo bloco no HTML dentro de .swiper-wrapper:

```bash
<div class="swiper-slide swiper-slide--nova">
  <span>Nome da Ilha</span>
  <div>
    <h2>Descrição da ilha</h2>
    <a href="https://www.google.com/maps?q=COORDENADAS_DA_ILHA" target="_blank">
      <p>
        <svg>...</svg>
        Cabo Verde, Sotavento/Barlavento
      </p>
    </a>
  </div>
</div>
Atualize o CSS criando uma nova classe com o background correspondente:
```
css
```bash
.swiper-slide--nova {
  background-image: url(images/nova-ilha.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```

##🎨 Personalização
Edite o arquivo `style.css` para alterar cores, fontes ou estilos.

Substitua as imagens na pasta `images` por outras de sua preferência.

🙌 Agradecimentos
Este projeto foi desenvolvido com fins educacionais, visando promover o conhecimento das ilhas de Cabo Verde de maneira interativa e acessível.

