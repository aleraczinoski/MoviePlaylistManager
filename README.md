# 🎬 Gerenciador de Playlist de Filmes

Uma aplicação web interativa para pesquisar filmes e criar uma lista de interesses (watchlist) personalizada. Projeto desenvolvido como parte do curso de Full-Stack Developer da Hashtag Treinamentos.

## 🚀 Funcionalidades

* **Busca Inteligente:** Pesquise filmes pelo título e filtre pelo ano de lançamento consumindo os dados da OMDb API (Open Movie Database API).
* **Detalhes em Modal:** Visualize informações completas antes de adicionar à lista (pôster, sinopse, elenco e gênero).
* **Gerenciamento da Lista:** Adicione e remova filmes da sua lista pessoal com facilidade.
* **Prevenção de Duplicatas:** O sistema valida e impede que o mesmo filme seja adicionado mais de uma vez na sua lista.
* **Persistência de Dados (LocalStorage):** A sua lista de filmes fica salva no armazenamento local do navegador, garantindo que os dados não sejam perdidos ao recarregar a página.
* **Notificações Visuais:** Alertas dinâmicos de erro ou sucesso na tela utilizando a biblioteca Notie.js.

## 🛠️ Tecnologias Utilizadas

* **Front-end:** HTML5, CSS3, JavaScript (Vanilla ES6+)
* **Integração:** [OMDb API](https://www.omdbapi.com/) (RESTful API)
* **Bibliotecas/Ícones:** [Bootstrap Icons](https://icons.getbootstrap.com/), [Notie.js](https://jaredreich.com/notie/)

## 💻 Como rodar o projeto localmente

Como o projeto consome uma API externa de filmes, você precisará de uma chave de acesso (API Key) para que as buscas funcionem corretamente.

1. Clone este repositório no seu terminal:
   ```bash
   git clone https://github.com/aleraczinoski/MoviePlaylistManager
   ```

2. Acesse o site da [OMDb API](https://www.omdbapi.com/apikey.aspx) e gere uma API Key gratuita.

3. Na raiz do projeto, crie um arquivo chamado `key.js`.

4. Dentro do arquivo `key.js`, adicione a sua chave exatamente com esta estrutura:
   ```javascript
   const key = "SUA_API_KEY_AQUI";
   ```

5. Abra o arquivo `index.html` no seu navegador e comece a testar!

## 👨‍💻 Autor

**Alexandre Raczinoski**
* [LinkedIn](https://www.linkedin.com/in/alexandreraczinoski/)
