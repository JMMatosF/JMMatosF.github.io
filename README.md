# GitHub Landing Page

Página pessoal estática que mostra o perfil e repositórios em destaque do GitHub.

## Como personalizar

Abre `script.js` e edita as duas variáveis no topo:

```js
const GITHUB_USERNAME = "JMMatosF";

const FEATURED_REPOS = [
    "nome-do-repo-publico",
    {
        name: "RepoPrivado",
        description: "Descrição manual",
        language: "Python",
        html_url: "https://github.com/owner/RepoPrivado",
        private: true,
    },
];
```

- **`GITHUB_USERNAME`** — o teu username do GitHub.
- **`FEATURED_REPOS`** — cada entrada pode ser:
  - **String** — nome de um repo público teu. Os dados (descrição, estrelas, linguagem) são puxados em tempo real da API do GitHub.
  - **Objeto** — entrada manual para repos privados ou de terceiros. Campos: `name`, `description`, `language`, `html_url` (obrigatórios), `stargazers_count`, `forks_count`, `private` (opcionais).

Se a lista estiver vazia, mostra os 6 repos públicos mais recentemente atualizados.

## Como publicar no GitHub Pages

1. Cria um repo no GitHub. Se queres que a página fique em `https://jmmatosf.github.io`, chama-lhe **`JMMatosF.github.io`**. Caso contrário podes usar qualquer nome (a página fica em `https://jmmatosf.github.io/<nome-repo>`).
2. Faz push destes ficheiros para o repo.
3. No GitHub: **Settings → Pages → Source: Deploy from branch → main / root**.
4. Espera 1-2 minutos e a página fica online.

## Ficheiros

- `index.html` — estrutura
- `style.css` — estilos com tema claro/escuro
- `script.js` — lógica e configuração
