# README - RDO Manager App

## 🏗️ Sobre o Projeto

RDO Manager é um aplicativo multiplataforma (Web, iOS e Android) para gestão inteligente de obras, permitindo que engenheiros e arquitetos criem relatórios profissionais de forma rápida usando IA.

## 🚀 Tecnologias

- **React Native** + **Expo** - Framework multiplataforma
- **NativeWind** (Tailwind CSS) - Estilização
- **OpenAI GPT-4o** - Análise de imagens e geração de relatórios
- **OpenAI Whisper** - Transcrição de áudio
- **Firebase** - Backend (Auth, Firestore, Storage)

## 📦 Instalação

```bash
cd app
npm install
```

## 🏃‍♂️ Executar

```bash
# Web
npm run web

# Android
npm run android

# iOS (apenas no macOS)
npm run ios
```

## 📁 Estrutura do Projeto

```
/app
├── /src
│   ├── /screens       # Telas do app
│   ├── /components    # Componentes reutilizáveis
│   ├── /services      # Integrações (Firebase, OpenAI)
│   ├── /utils         # Funções utilitárias
│   ├── /hooks         # Custom hooks
│   └── /constants     # Constantes e tema
├── /assets           # Imagens, fontes
├── App.js           # Ponto de entrada
└── global.css       # Estilos Tailwind
```

## 🎨 Design

Veja o [Design Guide](../../.gemini/antigravity/brain/3f5209ac-8f6d-4191-bd65-b6fd0972747c/design_guide.md) para especificações de UI/UX.

## 📝 Status

- ✅ Projeto Expo configurado
- ✅ NativeWind instalado e configurado
- ✅ Estrutura de pastas criada
- ⏳ Desenvolvimento em andamento

---

**Desenvolvido para transformar a gestão de obras com IA** 🚀
