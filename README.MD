# Introdução

O codigo anexo a esse repositorio consiste no portifolio do Desenvolvedor Pedro Fonseca,
Tem como objetivo mostrar os principais projetos e suas tecnologias.

---

## Tecnologias

As principais tecnologias envolvidas na construção:
- JavaScript
- Html
- Css

Principais frameworks:
- Node.js
- Next.js

Principais bibliotecas:
- React
- Material Desing
- React-router
- Next
- React-scroll


Principais auxiliares:
- Visual Studio Code
- Npm
- Github

Versionamento =>

```json
"dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.0",
    "@mui/icons-material": "^6.4.11",
    "@mui/material": "^6.4.11",
    "next": "15.3.1",
    "react": "^19.0.0",
    "react-dom": "^19.1.0",
    "react-scroll": "^1.9.3"
}
```

---

## Como fazer deploy

É necessário fazer download e instalação do [Node JS](https://nodejs.org/en/download) para execução do projeto.

Após isso, baixar o arquivo do projeto, acesse a pasta script e execute 
`npm ci`

Isso baixara as dependencias, com tudo instalado rode o comando
`npm run dev` 
dentro da pasta do repositorio, irá subir algumas informações, caso apareça como
```bash
Next.js 15.1.6
   - Local:        http://localhost:3000
```
Seguida de nenhuma mensagem de erro, significa que o codigo subiu corretamente, 
basta colocar o link no seu navegador e acessar a aplicação


## Documentação oficial

[Material Desing](https://mui.com/material-ui/getting-started/installation/)

[Node Js](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)

[React Router](https://reactrouter.com/home)

[Next Js](https://nextjs.org/docs/app/getting-started/installation)

[React](https://react.dev/)

[NPM](https://docs.npmjs.com/)

[Eslint](https://eslint.org/docs/latest/)

[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)




```bash
$ npx create-next-app@latest portifolio
Need to install the following packages:
create-next-app@15.1.6
Ok to proceed? (y) y

√ Would you like to use TypeScript? ... No  
√ Would you like to use ESLint? ... No 
√ Would you like to use Tailwind CSS? ... No 
√ Would you like your code inside a `src/` directory? ... No
√ Would you like to use App Router? (recommended) ... No 
√ Would you like to use Turbopack for `next dev`? ... No 
√ Would you like to customize the import alias (`@/*` by default)? ... No 
```