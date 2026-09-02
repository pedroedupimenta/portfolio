# Portfólio Profissional — Pedro Eduardo Pimenta

## 📌 Sobre o Projeto
Este projeto consiste no desenvolvimento de um website de portfólio profissional para apresentar minha trajetória acadêmica e profissional, habilidades, projetos, experiências e formas de contato.

O site foi desenvolvido com foco em **design responsivo, acessibilidade, organização das informações e identidade visual relacionada à tecnologia**.

## 🎯 Objetivos
* Apresentar minha formação e objetivos profissionais;
* Exibir projetos acadêmicos e pessoais;
* Apresentar experiências e atividades;
* Disponibilizar formas de contato;
* Desenvolver uma presença profissional na web.

## 🛠️ Tecnologias Utilizadas
* HTML5
* CSS3 (sem frameworks — estilização própria)
* JavaScript (vanilla, sem bibliotecas)
* Git e GitHub
* Figma (protótipos e wireframes)

> O formulário de contato funciona no lado do cliente: ao ser enviado, ele abre o aplicativo de e-mail padrão do usuário (`mailto:`) já com a mensagem preenchida. Não há backend nem envio automático de e-mail nesta etapa — ver seção [Próximos passos](#-próximos-passos).

## 📂 Estrutura do Projeto
```text
portfolio-profissional/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   └── projetos/
├── docs/
│   └── wireframes/
│       └── wireframe-desktop.png
└── README.md
```

## 🖥️ Estrutura do Site
O portfólio foi desenvolvido como uma página única (single page), com navegação por âncoras entre as seções:
* **Início:** apresentação principal;
* **Sobre Mim:** formação, interesses e objetivos, com alternância de idioma Português/Inglês;
* **Projetos:** linha do tempo com projetos e tecnologias utilizadas, do mais antigo ao mais recente;
* **Experiências:** experiências profissionais, acadêmicas e projetos;
* **Contato:** ícones de redes sociais (e-mail, WhatsApp, LinkedIn, GitHub) e formulário de contato.

## 🎨 Protótipo
O wireframe de média fidelidade foi desenvolvido no Figma e está disponível em [`docs/wireframes/wireframe-desktop.png`](docs/wireframes/wireframe-desktop.png).

### Protótipo Desktop
![Wireframe desktop](docs/wireframes/wireframe-desktop.png)

### Protótipo Mobile
> Wireframe mobile ainda não desenvolvido — pendente para a próxima entrega.

## 📱 Responsividade
O site foi construído com layout responsivo (CSS Grid/Flexbox e media queries), adaptando-se a desktop, tablet e smartphone, incluindo um menu de navegação simplificado para telas menores.

## 🚀 Execução Local
1. Clone este repositório:
```bash
git clone https://github.com/pedroedupimenta/portfolio.git
```
2. Entre na pasta:
```bash
cd portfolio-profissional
```
3. Abra o arquivo `index.html` em um navegador ou utilize uma extensão como **Live Server** no Visual Studio Code.

Não há dependências para instalar — o projeto não usa Node.js nem gerenciador de pacotes nesta etapa.

## ☁️ Hospedagem
A versão final do projeto será publicada gratuitamente em uma plataforma de hospedagem em nuvem (GitHub Pages, Vercel ou similar), por se tratar de um site estático.

**Link do site:**
A definir.

## 🔜 Próximos Passos
* Substituir os projetos de exemplo pelos projetos reais (imagens/GIFs, descrições e links de repositório);
* Adicionar wireframe mobile;
* Avaliar a implementação de um backend simples (Node.js + Express + Nodemailer, ou um serviço como Formspree/EmailJS) para envio de e-mail direto pelo formulário, sem depender do cliente de e-mail do usuário;
* Deploy em nuvem e atualização do link do site publicado.

## 👨‍💻 Autor
**Pedro Eduardo Pimenta**
Estudante de Engenharia de Software.
* Telefone: +55 31 99908-9599
* E-mail: pedroedupimenta@gmail.com
