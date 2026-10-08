# Ledgera landing page (placeholder name)

Vite + React + Tailwind. Pagina estatica pre-renderizada (`/`, `/privacy`, `/terms`).

- **Trocar nome, dominio e e-mail**: edite so `src/config.js`.
- **Textos legais**: `src/content/privacy.md` e `terms.md` (modelos, nao sao aconselhamento juridico).
- `npm install && npm run dev` para ver; `npm run build` gera `dist/`.
- **Cloudflare Pages**: Workers & Pages > Create > Pages > conectar este repositorio. Build command `npm run build`, output directory `dist`, sem variaveis de ambiente. Depois, Custom domains para ligar o dominio.
- (Vercel tambem serve: framework Vite, sem variaveis.)

Todo o conteudo descreve so o que existe ou esta em desenvolvimento (selos "Working today / In development / Planned"). Nao ha clientes, metricas nem equipe inventados.
