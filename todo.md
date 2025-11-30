# 🏗️ Micro SaaS: Gestão e Relatórios de Obra

## 📋 Visão Geral do Produto (MVP)

**Objetivo:** Criar uma ferramenta multiplataforma (Web e Mobile) para engenheiros e arquitetos realizarem vistorias rápidas, documentando o progresso com fotos e áudios, utilizando IA para gerar o relatório final formatado.

**Público-alvo:** Pequenos construtores, arquitetos autônomos e engenheiros fiscais.

**Proposta de Valor:** Reduzir de 2 horas para 15 minutos o tempo de criação de um relatório profissional de obra.

---

## 📍 Status Atual do Projeto

- [x] Planejamento inicial e definição de escopo
- [ ] Setup do ambiente de desenvolvimento
- [ ] Obtenção de credenciais e APIs
- [ ] Proof of Concept (POC)
- [ ] Desenvolvimento do MVP
- [ ] Testes com usuários beta
- [ ] Lançamento inicial

**Última Atualização:** 2025-11-29

---

## 🔥 Prioridades Imediatas (Esta Semana)

1. [ ] Completar setup do ambiente de desenvolvimento
2. [ ] Criar wireframes no Figma das 3 telas principais
3. [ ] Obter OpenAI API Key e testar GPT-4o
4. [ ] Executar POC (Proof of Concept)
5. [ ] Validar viabilidade técnica com stakeholders

---

## 🚀 Setup Inicial (Fazer ANTES de começar)

### Ambiente de Desenvolvimento
- [x] Instalar Node.js (v18 ou superior)
  - Verificar: `node --version`
- [x] Instalar VS Code
  - Extensões recomendadas: ESLint, Prettier, React Native Tools
- [x] Instalar Expo CLI
  - Comando: `npm install -g expo-cli`
- [ ] Configurar Git
  - [ ] Criar repositório no GitHub
  - [ ] Configurar `.gitignore` para React Native

### Contas e Serviços
- [ ] Criar conta Firebase
  - [ ] Ativar Authentication (Google, Apple, Email)
  - [ ] Configurar Firestore Database
  - [ ] Configurar Storage para fotos/áudios
- [ ] Criar conta OpenAI
  - [ ] Obter API Key
  - [ ] Configurar billing (adicionar cartão)
  - [ ] Definir limite de gastos ($50/mês inicial)
- [ ] Criar conta Figma (plano gratuito)
- [ ] **Opcional:** Criar conta Cloudinary (otimização de imagens)

### Design e Planejamento
- [ ] Desenhar wireframes no Figma
  - [ ] Tela de Login/Cadastro
  - [ ] Dashboard de Obras
  - [ ] Tela de Nova Visita
  - [ ] Tela de Visualização/Edição de Foto
  - [ ] Tela de Relatório Gerado
- [ ] Definir paleta de cores e identidade visual
- [ ] Criar logo do produto (ou usar IA para gerar)

---

## 🛠️ Stack Tecnológica

### Frontend (Interface)
- **Framework:** React Native com Expo
  - **Justificativa:** 90% de reaproveitamento de código entre Web, iOS e Android
- **Estilização:** NativeWind (Tailwind CSS para React Native)
- **Navegação:** Expo Router

### Backend & Banco de Dados
- **BaaS:** Firebase
  - **Authentication:** Login social e email/senha
  - **Firestore:** Banco de dados NoSQL em tempo real
  - **Storage:** Armazenamento de fotos e áudios

### Inteligência Artificial
- **Análise de Imagem e Texto:** OpenAI GPT-4o (multimodal)
- **Transcrição de Áudio:** OpenAI Whisper
- **Fallback:** Google Cloud Vision API (caso necessário)

### Bibliotecas Chave
- `expo-camera` - Captura de fotos
- `expo-av` - Gravação e reprodução de áudio
- `@shopify/react-native-skia` - Desenho sobre imagens
- `expo-print` - Geração de PDF
- `react-native-svg` - Suporte a SVG para anotações
- `expo-file-system` - Manipulação de arquivos

---

## 🧪 POC - Proof of Concept (CRÍTICO)

> **Objetivo:** Validar que a IA consegue analisar fotos de obra e gerar insights relevantes.

### Teste Mínimo Viável
- [ ] Criar projeto Expo básico
  - Comando: `npx create-expo-app@latest poc-obra-ia`
- [ ] Implementar captura de foto
  - Usar `expo-camera` ou upload de galeria
- [ ] Integrar OpenAI GPT-4o
  - [ ] Instalar SDK: `npm install openai`
  - [ ] Configurar variável de ambiente com API Key
- [ ] Enviar imagem para GPT-4o com prompt específico
- [ ] Exibir resultado formatado na tela
- [ ] Medir tempo de resposta e custo

### Prompt de Teste para POC
```
Você é um engenheiro civil sênior experiente. Analise esta foto de uma obra em construção.

Forneça:
1. Tipo de construção identificado
2. Estágio atual da obra (fundação, estrutura, acabamento, etc)
3. Elementos visíveis (pilares, vigas, alvenaria, instalações)
4. Possíveis problemas ou não-conformidades
5. Recomendações técnicas

Seja objetivo e use linguagem técnica profissional.
```

### Critérios de Sucesso da POC
- ✅ IA retorna análise coerente e tecnicamente correta
- ✅ Tempo de resposta < 10 segundos
- ✅ Custo por análise < R$ 0,50
- ✅ Qualidade do texto gerado é aprovada por um engenheiro real

**Se todos os critérios forem atendidos, o produto é VIÁVEL. Prosseguir para desenvolvimento do MVP.**

---

## 📦 Fase 1: Estrutura e Autenticação ⏱️ (1-2 semanas)

### Tela de Login/Cadastro
- [ ] Implementar UI de login
  - [ ] Design responsivo (mobile-first)
  - [ ] Animações de transição
- [ ] Integrar Firebase Authentication
  - [ ] Login com Google
  - [ ] Login com Apple (obrigatório para iOS)
  - [ ] Login com Email/Senha
  - [ ] Recuperação de senha
- [ ] Implementar tela de onboarding
  - [ ] Explicar funcionalidades principais
  - [ ] Tutorial interativo (opcional)

### Gestão de Usuários (RBAC)
- [ ] Definir estrutura de dados no Firestore
  ```javascript
  // Exemplo de estrutura
  users/{userId} {
    name: string,
    email: string,
    role: 'admin' | 'engineer' | 'client',
    company: string,
    createdAt: timestamp
  }
  ```
- [ ] Implementar 3 roles:
  - [ ] **Administrador:** Cria obras, gerencia equipe, paga assinatura
  - [ ] **Engenheiro/Arquiteto:** Cria relatórios, captura mídia, edita
  - [ ] **Cliente:** Visualiza relatórios (somente leitura)
- [ ] Criar regras de segurança no Firestore
- [ ] Implementar controle de acesso baseado em role

### ✅ Critérios de Aceitação - Fase 1
- Usuário consegue fazer login com Google/Apple/Email
- Sistema identifica corretamente o role do usuário
- Diferentes roles veem interfaces diferentes
- Dados do usuário persistem no Firebase
- Logout funciona corretamente

---

## 📦 Fase 2: O Núcleo - A Vistoria ⏱️ (2-3 semanas)

### Dashboard de Obras
- [ ] Criar tela principal com lista de obras
  - [ ] Card para cada obra (nome, endereço, status)
  - [ ] Filtros (ativas, arquivadas, por status)
  - [ ] Busca por nome/endereço
- [ ] Implementar CRUD de obras
  ```javascript
  // Estrutura de dados
  projects/{projectId} {
    name: string,
    address: string,
    status: 'planning' | 'in-progress' | 'completed',
    client: reference,
    team: [userId],
    createdAt: timestamp,
    updatedAt: timestamp
  }
  ```
- [ ] Botão "Nova Obra" com formulário
  - Campos: nome, endereço, cliente, tipo de construção

### Nova Visita (Relatório Diário de Obra - RDO)
- [ ] Criar formulário de nova visita
  - [ ] Input de data (com datepicker)
  - [ ] Seletor de clima (☀️ Ensolarado, ☁️ Nublado, 🌧️ Chuva)
    - **Opcional:** Integrar API de clima automática
  - [ ] Registro de equipe presente
  - [ ] Campo de observações gerais

### Captura de Mídia
- [ ] Implementar captura de fotos
  - [ ] Botão para abrir câmera
  - [ ] Opção de upload da galeria
  - [ ] Preview da foto capturada
  - [ ] Upload para Firebase Storage
  - [ ] Compressão automática (reduzir tamanho)
- [ ] Implementar gravação de áudio
  - [ ] Botão record/stop
  - [ ] Indicador visual de gravação
  - [ ] Preview/reprodução do áudio
  - [ ] Upload para Firebase Storage
  - [ ] Limitar duração (ex: 5 minutos)

### Estrutura de Dados
```javascript
visits/{visitId} {
  projectId: reference,
  date: timestamp,
  weather: string,
  team: [string],
  photos: [{
    url: string,
    caption: string,
    annotations: object,
    uploadedAt: timestamp
  }],
  audioNotes: [{
    url: string,
    duration: number,
    transcription: string,
    uploadedAt: timestamp
  }],
  createdBy: reference,
  status: 'draft' | 'completed'
}
```

### ✅ Critérios de Aceitação - Fase 2
- Usuário consegue criar uma nova obra
- Dashboard lista todas as obras do usuário
- Usuário consegue criar uma nova visita
- Fotos são capturadas e armazenadas corretamente
- Áudios são gravados e armazenados corretamente
- Mídia é associada corretamente à visita

---

## 📦 Fase 3: Edição e Anotação (O Diferencial) ⏱️ (1-2 semanas)

### Desenho sobre Foto
- [ ] Implementar canvas de anotação
  - [ ] Abrir modal ao clicar na foto
  - [ ] Usar `@shopify/react-native-skia` ou `react-native-svg`
- [ ] Ferramentas de desenho
  - [ ] ⭕ Círculo vermelho (marcar problemas)
  - [ ] ➡️ Seta (indicar direção)
  - [ ] ✏️ Texto livre (anotações)
  - [ ] Seletor de cores
  - [ ] Controle de espessura da linha
  - [ ] Botão "Desfazer"
- [ ] Salvar anotações
  - [ ] Exportar canvas como nova imagem
  - [ ] **OU** Salvar coordenadas das anotações (JSON)

### Legendas e Descrições
- [ ] Campo de texto abaixo de cada foto
  - [ ] Placeholder: "Descreva o que está na foto..."
  - [ ] Auto-save (salvar enquanto digita)
- [ ] Organização de fotos
  - [ ] Reordenar por drag-and-drop
  - [ ] Deletar fotos
  - [ ] Galeria com thumbnails

### ✅ Critérios de Aceitação - Fase 3
- Usuário consegue desenhar sobre fotos
- Anotações são salvas corretamente
- Legendas são associadas às fotos
- Interface é intuitiva e responsiva

---

## 📦 Fase 4: A Mágica da IA ⏱️ (1 semana)

### Pipeline de Geração de Relatório

#### 1. Transcrição de Áudio
- [ ] Integrar OpenAI Whisper API
  - [ ] Enviar arquivo de áudio
  - [ ] Receber texto transcrito
  - [ ] Salvar no Firestore
- [ ] Exibir transcrição para usuário revisar
  - [ ] Permitir edição manual

#### 2. Análise com GPT-4o
- [ ] Preparar payload para IA
  ```javascript
  {
    photos: [base64_ou_urls],
    captions: [strings],
    audioTranscriptions: [strings],
    visitData: {
      date, weather, team
    }
  }
  ```
- [ ] Criar prompt otimizado
  ```
  Você é um engenheiro civil sênior criando um relatório de obra.
  
  Contexto:
  - Data da visita: {date}
  - Clima: {weather}
  - Equipe presente: {team}
  
  Mídia disponível:
  - {n} fotos com legendas
  - Notas de voz transcritas
  
  Crie um relatório executivo profissional seguindo esta estrutura:
  
  1. RESUMO EXECUTIVO
  2. PROGRESSO DA OBRA (por área)
  3. PROBLEMAS IDENTIFICADOS
  4. RECOMENDAÇÕES
  5. PRÓXIMOS PASSOS
  
  Use linguagem técnica mas acessível. Seja específico e cite evidências das fotos.
  ```
- [ ] Processar resposta da IA
  - [ ] Parsear texto formatado
  - [ ] Separar por seções
  - [ ] Salvar no Firestore

#### 3. Revisão e Edição
- [ ] Exibir relatório gerado
  - [ ] Editor de texto rico (rich text)
  - [ ] Permitir edição manual
  - [ ] Botão "Regenerar com IA" (caso insatisfeito)
- [ ] Salvar versões
  - [ ] Histórico de edições
  - [ ] Comparar versões

### ✅ Critérios de Aceitação - Fase 4
- Áudios são transcritos corretamente (>95% precisão)
- IA gera relatório coerente e profissional
- Usuário pode editar o relatório gerado
- Processo completo leva menos de 2 minutos

---

## 📦 Fase 5: Exportação e Entrega ⏱️ (1 semana)

### Gerador de PDF
- [ ] Implementar template de PDF profissional
  - [ ] Header com logo da empresa do usuário
  - [ ] Informações da obra e data
  - [ ] Seções formatadas com títulos
  - [ ] Fotos organizadas (2 por linha)
  - [ ] Footer com assinatura digital
- [ ] Usar `expo-print` e `react-native-html-to-pdf`
- [ ] Otimizar tamanho do PDF (compressão)

### Compartilhamento
- [ ] Botão "Compartilhar"
  - [ ] Gerar link público (Firebase Storage)
  - [ ] Copiar link para clipboard
  - [ ] Compartilhar via WhatsApp
  - [ ] Enviar por Email
  - [ ] Download local
- [ ] Controle de privacidade
  - [ ] Link com senha (opcional)
  - [ ] Tempo de expiração do link

### Assinatura Digital
- [ ] Permitir assinatura digital no relatório
  - [ ] Canvas para desenhar assinatura
  - [ ] Salvar como imagem
  - [ ] Incluir no PDF

### ✅ Critérios de Aceitação - Fase 5
- PDF é gerado com layout profissional
- Fotos aparecem nítidas no PDF
- Link de compartilhamento funciona
- Cliente consegue visualizar sem login

---

## 📦 Fase 6: Melhorias e Polimento ⏱️ (1-2 semanas)

### UX/UI
- [ ] Adicionar loading states em todas as ações
- [ ] Implementar offline-first (funcionar sem internet)
- [ ] Adicionar animações e micro-interações
- [ ] Melhorar responsividade (tablets, desktop)
- [ ] Dark mode (opcional)

### Performance
- [ ] Otimizar tamanho das imagens
- [ ] Lazy loading de fotos
- [ ] Cache de dados locais
- [ ] Reduzir chamadas à API

### Funcionalidades Extras
- [ ] Histórico de relatórios por obra
- [ ] Estatísticas (total de visitas, fotos, etc)
- [ ] Notificações push (lembretes de visita)
- [ ] Comparação de fotos (antes/depois)

---

## ⚠️ Riscos e Mitigações

| Risco | Impacto | Probabilidade | Mitigação |
|-------|---------|---------------|-----------|
| **Custo alto da API OpenAI** | Alto | Média | Definir limite de gastos, cachear resultados, otimizar prompts |
| **Limitações do Expo** | Médio | Baixa | Estudar documentação, ter plano B para eject |
| **Aprovação Apple Store** | Alto | Média | Seguir guidelines, deixar claro uso da IA, ter documentação |
| **Performance com muitas fotos** | Médio | Alta | Compressão agressiva, lazy loading, paginação |
| **Qualidade da transcrição de áudio** | Médio | Média | Usar Whisper (99% precisão), permitir edição manual |
| **Vazamento de dados sensíveis** | Alto | Baixa | Criptografia, regras Firestore, HTTPS, LGPD compliance |

### Plano de Contingência
- **Se custo da OpenAI > $200/mês:** Migrar para Gemini ou Claude
- **Se Expo não atender:** Fazer eject para React Native puro
- **Se Firebase ficar caro:** Migrar para Supabase (open source)

---

## 📈 Métricas de Sucesso do MVP

### Técnicas
- [ ] App funciona em iOS, Android e Web
- [ ] Tempo de carregamento < 3 segundos
- [ ] Crash rate < 1%
- [ ] 100% das funcionalidades principais implementadas

### Negócio
- [ ] 10 relatórios gerados com IA (validação real)
- [ ] Tempo médio de criação de relatório < 15 minutos
- [ ] Taxa de satisfação dos usuários beta > 80%
- [ ] Custo por relatório (API + infra) < R$ 3,00
- [ ] 3 empresas dispostas a pagar (validação de mercado)

### Financeiro (Projeções)
- **Preço sugerido:** R$ 49,90/mês (até 50 relatórios) ou R$ 149,90/mês (ilimitado)
- **Break-even:** 20 clientes pagantes
- **Margem mínima:** 70% (após custos de API e infra)

---

## 📁 Estrutura de Arquivos Sugerida

```
/expo-obra-app
├── /src
│   ├── /screens
│   │   ├── LoginScreen.jsx
│   │   ├── DashboardScreen.jsx
│   │   ├── ProjectDetailScreen.jsx
│   │   ├── NewVisitScreen.jsx
│   │   ├── PhotoEditorScreen.jsx
│   │   ├── ReportViewScreen.jsx
│   │   └── SettingsScreen.jsx
│   ├── /components
│   │   ├── PhotoCapture.jsx
│   │   ├── AudioRecorder.jsx
│   │   ├── DrawingCanvas.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── VisitCard.jsx
│   │   └── LoadingSpinner.jsx
│   ├── /services
│   │   ├── firebase.js         # Config e helpers
│   │   ├── openai.js           # Integração GPT-4o e Whisper
│   │   ├── auth.js             # Autenticação
│   │   └── storage.js          # Upload de mídia
│   ├── /utils
│   │   ├── pdfGenerator.js     # Geração de PDF
│   │   ├── imageCompressor.js  # Compressão de fotos
│   │   └── prompts.js          # Templates de prompts IA
│   ├── /hooks
│   │   ├── useAuth.js
│   │   ├── useProjects.js
│   │   └── useVisits.js
│   ├── /constants
│   │   ├── colors.js
│   │   └── config.js
│   └── App.jsx
├── /assets
│   ├── /images
│   └── /fonts
├── app.json
├── package.json
├── .env.local                  # API Keys (NÃO COMMITAR!)
└── README.md
```

---

## 🔗 Recursos e Documentação

### Documentação Oficial
- [Expo Documentation](https://docs.expo.dev/)
- [React Native](https://reactnative.dev/docs/getting-started)
- [Firebase for React Native](https://rnfirebase.io/)
- [OpenAI API Reference](https://platform.openai.com/docs/api-reference)
- [NativeWind (Tailwind RN)](https://www.nativewind.dev/)

### Tutoriais Úteis
- [Expo Camera Tutorial](https://docs.expo.dev/versions/latest/sdk/camera/)
- [Expo Audio Recording](https://docs.expo.dev/versions/latest/sdk/audio/)
- [Canvas Drawing RN](https://shopify.github.io/react-native-skia/)
- [PDF Generation Expo](https://docs.expo.dev/versions/latest/sdk/print/)

### Inspirações de Design
- [Dribbble - Construction Apps](https://dribbble.com/search/construction-app)
- [Mobbin - App Patterns](https://mobbin.com/)
- [Figma Community - Dashboard Templates](https://www.figma.com/community)

### APIs Auxiliares
- [OpenWeather API](https://openweathermap.org/api) (clima automático)
- [Google Maps API](https://developers.google.com/maps) (endereços)
- [Cloudinary](https://cloudinary.com/) (otimização de imagens)

---

## 🎯 Próximos Passos Imediatos (Fazer HOJE)

1. [ ] ✅ **Validação Visual**
   - Abrir Figma
   - Desenhar wireframe de 3 telas: Login, Dashboard, Nova Visita
   - Tempo estimado: 2 horas

2. [ ] 🛠️ **Setup do Ambiente**
   - Instalar Node.js
   - Criar projeto Expo: `npx create-expo-app@latest obra-app`
   - Inicializar Git
   - Tempo estimado: 30 minutos

3. [ ] 🧪 **POC (Proof of Concept)**
   - Criar app simples que:
     1. Tira uma foto
     2. Envia para OpenAI GPT-4o
     3. Exibe descrição gerada
   - **SE ISSO FUNCIONAR, O PRODUTO É VIÁVEL!**
   - Tempo estimado: 3-4 horas

---

## 📝 Log de Decisões Importantes

**2025-11-29:**
- Escolhido React Native + Expo para desenvolvimento multiplataforma
- Firebase como BaaS (em vez de backend custom)
- OpenAI GPT-4o como motor de IA principal
- Decisão de focar no MVP antes de adicionar features avançadas

---

## 💡 Ideias para Versões Futuras (Pós-MVP)

- [ ] Integração com AutoCAD/Revit (exportar anotações)
- [ ] AI Chatbot para consultas técnicas
- [ ] Detecção automática de problemas por IA (rachaduras, infiltrações)
- [ ] Timeline de evolução da obra (timelapse automático)
- [ ] Marketplace de templates de relatórios
- [ ] Integração com ERP/CRM de construtoras
- [ ] App para fiscalização de obras públicas (versão B2G)

---

**🚀 Lembre-se: Feito é melhor que perfeito. Foque no MVP primeiro!**