# 📋 Gerador de Mensagens – Inova

## 🎯 Visão Geral

Um sistema web profissional que gera mensagens automáticas para atendimento ao cliente, WhatsApp e contatos comerciais. Desenvolvido apenas com HTML, CSS e JavaScript puro, sem dependências externas.

---

## 🚀 Como Iniciar

### Requisitos
- Um navegador web moderno (Chrome, Firefox, Safari, Edge)
- Nenhuma instalação ou dependência necessária

### Abrir o Sistema
1. Navegue até a pasta do projeto
2. Clique duas vezes no arquivo `index.html`
3. O sistema abrirá automaticamente no seu navegador padrão

**Alternativa:** Abra o navegador, vá em Arquivo → Abrir e selecione `index.html`

---

## 📖 Como Usar

### Passo 1: Configurar Empresa e Atendente
1. **Nome da Empresa**: Preenchido com "Inova" por padrão. Você pode alterar se necessário.
2. **Nome do Atendente**: Digite seu nome ou o nome de quem está usando o sistema.
3. **Nível de Formalidade**: Escolha entre:
   - **Formal**: Mensagens profissionais e corporativas
   - **Semi-formal**: Mensagens com tom amigável mas profissional
   - **Informal**: Mensagens mais descontraídas e pessoais
4. **Incluir Emojis**: Marque se deseja adicionar emojis profissionais (👋📌✅)

> 💡 **Dica**: Os dados da empresa e atendente são salvos automaticamente no seu navegador!

### Passo 2: Selecionar o Tipo de Mensagem
Clique no campo **Tipo de Mensagem** e escolha uma das opções:

| Tipo | Descrição | Uso |
|------|-----------|-----|
| 👋 Atendimento inicial | Apresentação e abertura de diálogo | Primeiro contato com cliente |
| 📌 Orçamento | Apresentação de preço e prazo | Envio de proposta |
| 🔍 Acompanhamento | Status do serviço em andamento | Durante a execução |
| ✅ Serviço concluído | Notificação de conclusão | Fim do trabalho |
| 💰 Cobrança educada | Lembrete de pagamento | Cobrar débitos pendentes |
| 🌙 Resposta fora do horário | Resposta automática | Mensagens fora do expediente |

### Passo 3: Preencher os Dados do Cliente
Dependendo do tipo de mensagem, preencha os campos necessários:

- **Nome do Cliente** ⭐ (obrigatório)
- **Serviço** ⭐ (obrigatório)
- **Valor**: Apenas para orçamentos e cobranças
- **Prazo**: Apenas para orçamentos e acompanhamentos

> ⚠️ **Importante**: Os campos com asterisco (*) são obrigatórios.

### Passo 4: Verificar a Mensagem Gerada
A mensagem aparece automaticamente na **Área de Mensagem Gerada**:
- 📝 Texto pronto para usar
- 📊 Contador de caracteres

### Passo 5: Copiar a Mensagem
1. Clique no botão **📋 Copiar para Área de Transferência**
2. Você verá uma notificação confirmando a cópia ✅
3. Cole a mensagem onde precisar (WhatsApp, email, etc.)

### Passo 6: Limpar Campos (Opcional)
Clique no botão **🗑️ Limpar Campos** para:
- Apagar dados do cliente
- Apagar serviço, valor e prazo
- Apagar seleção de tipo de mensagem
- **Manter** dados da empresa e atendente

---

## ⚙️ Funcionalidades Principais

### ✨ Geração Automática
- A mensagem é gerada em tempo real conforme você digita
- Não precisa clicar em nenhum botão "Gerar"

### 💾 Salvamento Automático
- **Empresa**, **Atendente**, **Formalidade** e **Emojis** são salvos no LocalStorage
- Quando você voltar ao sistema, encontrará esses dados já preenchidos

### 📊 Contador de Caracteres
- Mostra quantos caracteres tem a mensagem
- Cores:
  - 🟢 Verde: até 500 caracteres
  - 🔵 Azul: 500-1000 caracteres
  - 🟠 Laranja: acima de 1000 caracteres

### 🎨 Três Níveis de Formalidade
Cada tipo de mensagem possui 3 versões:
- **Formal**: "Prezado(a)", "Atenciosamente", tom corporativo
- **Semi-formal**: "Oi", "Abraços", tom amigável
- **Informal**: "E aí", "Valeu", tom descontraído

### 🎯 Emojis Profissionais
Quando ativado, adiciona emojis relevantes às mensagens:
- 👋 Saudações
- 📌 Informações importantes
- ✅ Confirmações
- 💰 Valores
- 📅 Prazos
- 🎉 Celebrações

---

## 📋 Exemplos de Uso

### Cenário 1: Primeiro Contato com Cliente
1. Selecionar: **Tipo de Mensagem** = "Atendimento inicial"
2. Preencher: **Nome do Cliente** = "Maria Silva"
3. Preencher: **Serviço** = "Consultoria de Marketing"
4. Formalidade: Escolha a desejada
5. Clicar: **Copiar para Área de Transferência**
6. Colar no WhatsApp ou Email

### Cenário 2: Enviar Orçamento
1. Selecionar: **Tipo de Mensagem** = "Orçamento"
2. Preencher: **Nome do Cliente** = "João Pereira"
3. Preencher: **Serviço** = "Criação de Site"
4. Preencher: **Valor** = "2500,00"
5. Preencher: **Prazo** = "15"
6. Clicar: **Copiar para Área de Transferência**

### Cenário 3: Lembrete de Pagamento
1. Selecionar: **Tipo de Mensagem** = "Cobrança educada"
2. Preencher: **Nome do Cliente** = "Empresa XYZ"
3. Preencher: **Serviço** = "Consultoria"
4. Preencher: **Valor** = "1000,00"
5. Ajustar formalidade conforme relacionamento
6. Clicar: **Copiar para Área de Transferência**

---

## 🎨 Personalização

### Mudar o Tom da Mensagem
- Selecione **Formalidade** diferente = Mensagem muda instantaneamente

### Adicionar/Remover Emojis
- Marque ou desmarque **Incluir emojis profissionais**
- A mensagem se atualiza imediatamente

### Editar a Mensagem Copiada
- A mensagem é *apenas leitura* na tela
- Você pode editá-la após copiar no destino (WhatsApp, email, etc.)

---

## 📱 Recursos Avançados

### LocalStorage (Dados Salvos)
O sistema salva automaticamente:
- ✅ Nome da Empresa
- ✅ Nome do Atendente
- ✅ Nível de Formalidade selecionado
- ✅ Preferência de Emojis

Para **limpar tudo**, abra o console do navegador (F12) e execute:
```javascript
limparLocalStorage()
```

### Console de Desenvolvimento
Pressione **F12** e acesse a aba **Console** para:
- Regenerar mensagem manualmente: `regenerarMensagem()`
- Limpar localStorage: `limparLocalStorage()`

---

## 🛠️ Estrutura Técnica

### Arquivos
```
GERADOR DE MENSAGENS PROFISSIONAIS/
├── index.html      (Estrutura HTML)
├── style.css       (Estilos profissionais)
└── script.js       (Lógica JavaScript)
```

### Tecnologias
- ✅ HTML5 semântico
- ✅ CSS3 responsivo com Grid e Flexbox
- ✅ JavaScript ES6+ puro (sem frameworks)
- ✅ Clipboard API para cópia
- ✅ LocalStorage para persistência

### Recursos Utilizados
- Gradientes e sombras CSS modernas
- Animações suaves e transições
- Interface responsiva (mobile, tablet, desktop)
- Acessibilidade (labels, alt text, contraste)

---

## 📱 Responsividade

O sistema funciona perfeitamente em:
- 📱 **Celulares** (pequenos, médios, grandes)
- 📱 **Tablets** (vertical e horizontal)
- 💻 **Desktops** (qualquer resolução)

Tente redimensionar a janela do navegador para ver o layout se adaptar!

---

## 🐛 Solução de Problemas

### Problema: Cópia não funciona
**Solução**: 
- Verifique se tem um navegador moderno
- Tente recarregar a página (Ctrl+R ou Cmd+R)
- Teste em outro navegador

### Problema: Dados não aparecem após fechar
**Solução**:
- O sistema salva no LocalStorage
- Se limpou o histórico/cache, os dados são perdidos
- Não é erro, é comportamento normal

### Problema: Mensagem não aparece
**Solução**:
- Preencha os campos **obrigatórios** (Cliente e Serviço)
- Selecione um **Tipo de Mensagem**
- Verifique se há JavaScript habilitado no navegador

### Problema: Layout desorganizado
**Solução**:
- Pressione Ctrl+Shift+Delete e limpe cache
- Tente outro navegador
- Atualize a página

---

## 💡 Dicas Profissionais

### 📝 Boas Práticas
1. **Sempre revise** a mensagem antes de enviar
2. **Customize** conforme necessário após copiar
3. **Teste** em um contato próximo antes de usar com clientes
4. **Mantenha** dados da empresa sempre corretos

### ⏱️ Ganho de Tempo
- Economize minutos gerando mensagens prontas
- Reduza erros de digitação
- Mantenha consistência nos textos
- Reutilize templates padronizados

### 🎯 Estratégia de Comunicação
- **Formal** = Primeiros contatos, grandes clientes
- **Semi-formal** = Clientes recorrentes, relação estabelecida
- **Informal** = Clientes próximos, ambiente descontraído

---

## 📞 Suporte

### Não consegue usar?
1. Verifique se o navegador está atualizado
2. Limpe o cache (Ctrl+Shift+Delete)
3. Tente reabrir o arquivo
4. Teste em outro navegador

### Sugestões de Melhorias?
Este é um sistema em v1.0. Futuras versões podem incluir:
- ✨ Mais tipos de mensagens
- ✨ Temas personalizados
- ✨ Histórico de mensagens
- ✨ Importação de dados

---

## 📄 Informações do Projeto

**Nome**: Gerador de Mensagens – Inova  
**Versão**: 1.0  
**Tipo**: Aplicação Web  
**Linguagem**: HTML5, CSS3, JavaScript ES6+  
**Licença**: Uso livre  
**Data**: Janeiro de 2026

---

## 🎉 Comece Agora!

Abra `index.html` e comece a gerar mensagens profissionais em segundos.

**Boa sorte! 🚀**
