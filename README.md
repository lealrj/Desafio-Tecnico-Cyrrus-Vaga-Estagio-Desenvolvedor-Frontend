# Carteira Vacinal

Solução digital para gerenciamento e acompanhamento da carteira de vacinação infantil.

**Desafio de Estágio Cyrrus | Desenvolvedor Frontend**

[![Deploy Status](https://img.shields.io/badge/status-deployed-brightgreen?style=flat-square)](https://carteira-vacinal-infantil.web.app)
[![Angular](https://img.shields.io/badge/Angular-20.3-red?style=flat-square&logo=angular)](https://angular.io)
[![Ionic](https://img.shields.io/badge/Ionic-8.0-blue?style=flat-square&logo=ionic)](https://ionicframework.com)
[![Firebase](https://img.shields.io/badge/Firebase-Hosting-orange?style=flat-square&logo=firebase)](https://firebase.google.com)

---

## Sobre

Plataforma desenvolvida para auxiliar pais e responsáveis no acompanhamento da carteira de vacinação das crianças, oferecendo uma experiência intuitiva e segura para gerenciar a saúde infantil.

**Acesse:** [carteira-vacinal-infantil.web.app](https://carteira-vacinal-infantil.web.app)

---

## Funcionalidades

- Gerenciamento de múltiplas crianças
- Histórico completo de vacinações
- Informações detalhadas sobre vacinas obrigatórias
- Visualização de campanhas de vacinação ativas
- Indicadores de situação vacinal por criança
- Autenticação segura com Firebase
- Sincronização em tempo real de dados

---

## Tecnologias

| Camada    | Tecnologia                           |
| --------- | ------------------------------------ |
| Frontend  | Angular 20, Ionic 8                  |
| Backend   | Firebase (Firestore, Authentication) |
| Hosting   | Firebase Hosting                     |
| Linguagem | TypeScript                           |
| Estilos   | SCSS                                 |

---

## Instalação e Setup

### Requisitos

- Node.js 18+
- npm ou yarn
- Firebase CLI

### Passos

```bash
# Clonar repositório
git clone https://github.com/lealrj/Desafio-Tecnico-Cyrrus-Vaga-Estagio-Desenvolvedor-Frontend.git
cd carteira-vacinal

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env.local
# Preencher credenciais do Firebase em .env.local
```

### Desenvolvimento

```bash
npm start
```

Acesse `http://localhost:4200`

### Produção

```bash
# Build
npm run build

# Deploy
firebase deploy
```

---

## Arquitetura

```
src/
├── app/
│   ├── core/
│   │   ├── models/         Interfaces de dados
│   │   └── services/       Lógica de negócio
│   ├── pages/              Telas da aplicação
│   └── shared/             Componentes reutilizáveis
├── environments/           Configuração por ambiente
└── theme/                  Tokens de design
```

---

## Design

### Paleta de Cores

| Cor     | Código  |
| ------- | ------- |
| Verde   | #ABC270 |
| Amarelo | #FEC868 |
| Laranja | #FDA769 |
| Marrom  | #473C33 |

### Responsividade

Suporte completo para Desktop, Tablet e Mobile.

---

## Destaques da Implementação

- Firebase Firestore com sincronização real
- Deploy automático com Firebase Hosting
- Arquitetura componentizada e reutilizável
- Padrões de design e boas práticas POO
- Configuração segura de credenciais
- Indicadores visuais de status vacinal

---

## Segurança

As credenciais do Firebase são configuradas via variáveis de ambiente e nunca são versionadas no repositório.

```bash
# Use .env.local para armazenar credenciais localmente
cp .env.example .env.local
```

O arquivo `.env.local` está incluído no `.gitignore`.

---

## Observação sobre erro no console

**Durante a navegação entre páginas, o console pode exibir o seguinte aviso:**
```bash
Blocked aria-hidden on an element because its descendant retained focus.
The focus must not be hidden from assistive technology users.
Avoid using aria-hidden on a focused element or its ancestor.
Consider using the inert attribute instead…
Element with focus: <a.button-native>
Ancestor with aria-hidden: <app-minhas-criancas.ion-page ion-page-hidden>
```
Esse alerta é gerado pelo Ionic/Angular quando uma página oculta (aria-hidden="true") ainda retém foco em algum elemento interno. 
Não afeta o funcionamento da aplicação, sendo apenas uma recomendação de acessibilidade. 
Infelizmente, não consegui suprimi-lo completamente sem uma intervenção mais profunda no ciclo de vida das páginas. 
Fica registrado como ponto de melhoria futura.

---

## Desenvolvedor

GitHub: [lealrj](https://github.com/lealrj)
