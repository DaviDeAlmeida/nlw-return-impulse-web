<h1 align="center">💬 Feedget · Web</h1>

<p align="center">
  Widget de feedback plug-and-play: o usuário reporta <strong>bugs</strong>, <strong>ideias</strong> ou <strong>sugestões</strong><br/>
  e anexa uma <strong>captura de tela da página</strong> com um clique.
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img alt="Vercel" src="https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</p>

<p align="center">
  <a href="https://feedget-davidealmeida.vercel.app"><strong>🔗 Ver demo ao vivo</strong></a>
</p>

<p align="center">
  <a href="#-sobre">Sobre</a> •
  <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-como-rodar">Como rodar</a> •
  <a href="#-estrutura">Estrutura</a> •
  <a href="#-deploy">Deploy</a>
</p>

<!--
  Dica: grave um GIF curto do widget em uso (ex.: com ScreenToGif ou LICEcap),
  salve em .github/preview.gif e descomente a linha abaixo.
<p align="center"><img src=".github/preview.gif" alt="Demonstração do Feedget" width="720" /></p>
-->

---

## 📌 Sobre

Este repositório é o **front-end** do Feedget, um componente de feedback flutuante que pode ser embutido em qualquer aplicação web. A API (Node.js + Prisma) está em
👉 **[nlw-return-impulse-server](https://github.com/DaviDeAlmeida/nlw-return-impulse-server)**.

Projeto desenvolvido durante o **NLW Return (trilha Impulse)** da Rocketseat.

## ✨ Funcionalidades

- **Fluxo em etapas:** tipo de feedback → descrição → confirmação de envio
- **Captura de tela** da página atual com [html2canvas](https://html2canvas.hertzen.com/), com preview e opção de remover
- **Acessibilidade:** popover com [Headless UI](https://headlessui.com/), com foco gerenciado e fechamento por `Esc`
- **Responsivo:** ocupa a largura da tela no mobile e vira um card flutuante no desktop
- **Estados de interface:** loading durante captura e envio, botão desabilitado sem comentário, mensagem de erro se a API falhar
- **API pré-aquecida:** a página chama `/health` ao carregar, escondendo o *cold start* do plano gratuito
- **Dark UI** com design tokens próprios no Tailwind (`brand-300`, `brand-500`)

## 🚀 Tecnologias

| Camada | Tecnologia |
| --- | --- |
| UI | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| Build / Dev server | [Vite](https://vitejs.dev/) |
| Estilização | [Tailwind CSS](https://tailwindcss.com/) + [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms) |
| Componentes acessíveis | [Headless UI](https://headlessui.com/) |
| Ícones | [Phosphor Icons](https://phosphoricons.com/) |
| Screenshot | [html2canvas](https://html2canvas.hertzen.com/) |
| HTTP | [Axios](https://axios-http.com/) |
| Deploy | [Vercel](https://vercel.com/) |

## 💻 Como rodar

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- A [API do Feedget](https://github.com/DaviDeAlmeida/nlw-return-impulse-server) rodando localmente (para enviar feedbacks)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/DaviDeAlmeida/nlw-return-impulse-web.git
cd nlw-return-impulse-web

# 2. Instale as dependências
npm install

# 3. Configure a URL da API
cp .env.example .env.local

# 4. Rode em modo desenvolvimento
npm run dev
```

Acesse **http://localhost:3000** e clique no botão roxo de feedback no canto inferior direito.

### Variáveis de ambiente

| Variável | Descrição | Padrão |
| --- | --- | --- |
| `VITE_API_URL` | URL base da API | `http://localhost:3333` |

### Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento com HMR |
| `npm run build` | Checagem de tipos (`tsc`) + build de produção em `dist/` |
| `npm run preview` | Serve o build de produção localmente |

## 🗂 Estrutura

```
src/
├── components/
│   ├── Widget.tsx                  # Botão flutuante + Popover
│   ├── CloseButton.tsx
│   ├── Loading.tsx
│   └── WidgetForm/
│       ├── index.tsx               # Máquina de estados do fluxo
│       ├── ScreenshotButton.tsx    # Captura com html2canvas
│       └── Steps/
│           ├── FeedbackTypeStep.tsx
│           ├── FeedbackContentStep.tsx
│           └── FeedbackSuccesStep.tsx
├── lib/
│   └── api.ts                      # Instância do Axios
├── assets/                         # Ilustrações SVG
└── main.tsx
```

O fluxo do widget é controlado por estado em `WidgetForm/index.tsx`: cada etapa é um componente isolado que se comunica com o pai por *callbacks* (`onFeedbackTypeChanged`, `onFeedbackSent`, `onFeedbackRestartRequested`), o que mantém os componentes pequenos e fáceis de testar.

## ☁️ Deploy

O front-end está publicado na **Vercel**: **[feedget-davidealmeida.vercel.app](https://feedget-davidealmeida.vercel.app)**

Para publicar o seu:

1. Importe o repositório na [Vercel](https://vercel.com/new) (o preset **Vite** é detectado automaticamente)
2. Defina a variável `VITE_API_URL` com a URL pública da API
3. Deploy ✅

## 🗺 Próximos passos

- [ ] Testes de componentes com Vitest + Testing Library
- [ ] Empacotar o widget como biblioteca embutível (`<script>` ou pacote npm)
- [ ] Atualizar para Vite 5 e React 19

---

<p align="center">
  Feito por <a href="https://github.com/DaviDeAlmeida"><strong>Davi Cardoso</strong></a>
</p>
