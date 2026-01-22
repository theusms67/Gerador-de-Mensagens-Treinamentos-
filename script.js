/* ============================================
   GERADOR DE MENSAGENS – INOVA
   Lógica JavaScript
   ============================================ */

// ============================================
// TEMPLATES DE MENSAGENS
// ============================================

const mensagensTemplates = {
    atendimento: {
        formal: `Prezado(a) {cliente},

Agradecemos o contato com a {empresa}. 

Meu nome é {atendente} e estarei à sua disposição para auxiliá-lo com a melhor solução para sua necessidade em relação ao serviço de {servico}.

Estou à sua disposição para esclarecer dúvidas e apresentar nossas melhores opções.

Atenciosamente,
{atendente}
{empresa}`,
        
        semi: `Olá {cliente},

Tudo bem? Obrigado por entrar em contato com a {empresa}!

Meu nome é {atendente} e vou ajudar você com o seu pedido sobre {servico}.

Vamos encontrar a melhor solução para suas necessidades. Estou aqui para te ajudar!

Abraços,
{atendente}
{empresa}`,
        
        informal: `Oi {cliente}! 👋

Valeu pelo contato com a {empresa}! Sou o(a) {atendente}.

Vou te ajudar com tudo sobre {servico}. Confia!

Até já,
{atendente}`
    },

    orcamento: {
        formal: `Prezado(a) {cliente},

Conforme solicitado, segue em anexo o orçamento para o serviço de {servico}.

Valor: R$ {valor}
Prazo estimado: {prazo} dias

Ficamos à disposição para esclarecimentos e aguardamos seu retorno.

Atenciosamente,
{atendente}
{empresa}`,
        
        semi: `Oi {cliente},

Segue o orçamento do seu projeto de {servico}:

💰 Valor: R$ {valor}
📅 Prazo: {prazo} dias

Qualquer dúvida, é só chamar! Estamos aqui para ajudar.

Abraços,
{atendente}
{empresa}`,
        
        informal: `E aí {cliente}? 📌

Aqui está o orçamento para {servico}:

💰 R$ {valor}
📅 {prazo} dias

Bora começar?

{atendente}`
    },

    acompanhamento: {
        formal: `Prezado(a) {cliente},

Esperamos que esteja tudo bem!

Apenas para informá-lo de que o serviço de {servico} está em andamento conforme planejado e progredindo dentro do prazo estimado.

Em breve, estaremos enviando as próximas atualizações.

Atenciosamente,
{atendente}
{empresa}`,
        
        semi: `Oi {cliente},

Como vai? Só passando para te manter atualizado(a)!

O trabalho com {servico} está andando muito bem e no cronograma certo. Logo você tem novidades!

Qualquer coisa, me chama! 

{atendente}
{empresa}`,
        
        informal: `E aí {cliente}? 🔍

Tudo correndo bem por aqui! 

O serviço de {servico} tá saindo do forno. Logo pronto para você! 

Fica ligado(a)! 💪

{atendente}`
    },

    concluido: {
        formal: `Prezado(a) {cliente},

Temos o prazer de informar que o serviço de {servico} foi finalizado com sucesso!

Solicitamos que realize uma verificação e nos comunique qualquer feedback.

Agradecemos a oportunidade de trabalharmos juntos e ficamos à disposição para futuros projetos.

Atenciosamente,
{atendente}
{empresa}`,
        
        semi: `Oi {cliente},

Bora comemorar? 🎉

Seu projeto de {servico} está pronto e impecável! Esperamos que tenha ficado exatamente como você imaginou.

Dá uma olhada e nos diz o que achou! Qualquer ajuste, é rapidinho.

Muito obrigado,
{atendente}
{empresa}`,
        
        informal: `Ei {cliente}! ✅

Tá pronto! Seu {servico} ficou massa demais!

Vem conferir se tá tudo certo. Adoraríamos sua opinião!

Valeu,
{atendente}`
    },

    cobranca: {
        formal: `Prezado(a) {cliente},

Esperamos que esteja bem!

Gostaríamos de lembrar que o pagamento referente ao serviço de {servico} no valor de R$ {valor}, venceu em nossa contabilidade.

Ficaríamos gratos se pudesse regularizar esta situação no seu melhor momento.

Atenciosamente,
{atendente}
{empresa}`,
        
        semi: `Oi {cliente},

Tudo bem?

Só passando para avisar que o boleto do {servico} (R$ {valor}) tá vencido.

Quando você conseguir, faz a transferência para a gente? Fica tranquilo, sem pressa! 😊

Obrigado!
{atendente}
{empresa}`,
        
        informal: `E aí {cliente}? 💰

Ó o boleto do {servico} aí, hein! (R$ {valor})

Faz um PIX ou transferência quando souber, tá bom? Sem pressa!

Obrigado,
{atendente}`
    },

    'fora-horario': {
        formal: `Prezado(a) {cliente},

Obrigados pelo seu contato! 

No momento, encontramo-nos fora do horário de funcionamento. Em breve, um dos nossos profissionais entrará em contato para atendê-lo adequadamente.

Pedimos desculpas pela demora e agradecemos a compreensão.

Atenciosamente,
{empresa}`,
        
        semi: `Oi {cliente},

Obrigado por entrar em contato! 🌙

Estamos fora do horário agora, mas assim que voltarmos, a gente retorna!

Valeu pela compreensão,
{empresa}`,
        
        informal: `E aí {cliente}? 🌙

Valeu pela mensagem! Estamos dormindo agora, mas amanhã a gente volta com tudo!

Abraços,
{empresa}`
    }
};

// ============================================
// ELEMENTOS DO DOM
// ============================================

const elementos = {
    empresa: document.getElementById('empresa'),
    atendente: document.getElementById('atendente'),
    cliente: document.getElementById('cliente'),
    servico: document.getElementById('servico'),
    valor: document.getElementById('valor'),
    prazo: document.getElementById('prazo'),
    tipoMensagem: document.getElementById('tipoMensagem'),
    mensagem: document.getElementById('mensagem'),
    charCount: document.getElementById('charCount'),
    copiarBtn: document.getElementById('copiarBtn'),
    limparBtn: document.getElementById('limparBtn'),
    toast: document.getElementById('toast'),
    emojis: document.getElementById('emojis'),
    formalidade: document.querySelectorAll('input[name="formalidade"]'),
    messageCard: document.querySelector('.message-card'),
    logoImg: document.getElementById('logoImg'),
    logoUpload: document.getElementById('logoUpload'),
    limparLogoBtn: document.getElementById('limparLogoBtn'),
    logoUrl: document.getElementById('logoUrl')
};

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Gerador de Mensagens – Inova carregado');
    
    // Carregar dados salvos do localStorage
    carregarDadosSalvos();
    
    // Configurar event listeners
    configurarEventListeners();
    
    // Gerar mensagem inicial
    gerarMensagem();
});

// ============================================
// CARREGAR DADOS DO LOCALSTORAGE
// ============================================

function carregarDadosSalvos() {
    const empresaSalva = localStorage.getItem('empresa_inova');
    const atendenteSalvo = localStorage.getItem('atendente_inova');
    const formalidadeSalva = localStorage.getItem('formalidade_inova');
    const emojisSalvos = localStorage.getItem('emojis_inova');
    const logoSalva = localStorage.getItem('logo_inova');
    const logoUrlSalva = localStorage.getItem('logoUrl_inova');
    
    if (empresaSalva) {
        elementos.empresa.value = empresaSalva;
    }
    
    if (atendenteSalvo) {
        elementos.atendente.value = atendenteSalvo;
    }
    
    if (formalidadeSalva) {
        const radioFormalidade = document.querySelector(`input[name="formalidade"][value="${formalidadeSalva}"]`);
        if (radioFormalidade) {
            radioFormalidade.checked = true;
        }
    }
    
    if (emojisSalvos !== null) {
        elementos.emojis.checked = JSON.parse(emojisSalvos);
    }

    // Carregar logo
    if (logoSalva) {
        elementos.logoImg.src = logoSalva;
        elementos.logoImg.style.display = 'block';
    }

    if (logoUrlSalva) {
        elementos.logoUrl.value = logoUrlSalva;
    }
}

// ============================================
// SALVAR DADOS NO LOCALSTORAGE
// ============================================

function salvarDados() {
    localStorage.setItem('empresa_inova', elementos.empresa.value);
    localStorage.setItem('atendente_inova', elementos.atendente.value);
    
    const formalidadeSelecionada = document.querySelector('input[name="formalidade"]:checked').value;
    localStorage.setItem('formalidade_inova', formalidadeSelecionada);
    
    localStorage.setItem('emojis_inova', elementos.emojis.checked);

    if (elementos.logoUrl.value) {
        localStorage.setItem('logoUrl_inova', elementos.logoUrl.value);
    }
}

// ============================================
// CONFIGURAR EVENT LISTENERS
// ============================================

function configurarEventListeners() {
    // Eventos de input para regenerar mensagem
    [elementos.cliente, elementos.servico, elementos.valor, elementos.prazo, elementos.empresa, elementos.atendente, elementos.tipoMensagem, elementos.emojis].forEach(elemento => {
        if (elemento) {
            elemento.addEventListener('change', function() {
                salvarDados();
                gerarMensagem();
                atualizarContadorCaracteres();
            });
            
            elemento.addEventListener('input', function() {
                gerarMensagem();
                atualizarContadorCaracteres();
            });
        }
    });
    
    // Eventos de formalidade
    elementos.formalidade.forEach(radio => {
        radio.addEventListener('change', function() {
            salvarDados();
            gerarMensagem();
            atualizarContadorCaracteres();
        });
    });
    
    // Evento do botão copiar
    elementos.copiarBtn.addEventListener('click', copiarMensagem);
    
    // Evento do botão limpar
    elementos.limparBtn.addEventListener('click', limparCampos);

    // Evento de upload de logo
    elementos.logoUpload.addEventListener('change', handleLogoUpload);

    // Evento de URL da logo
    elementos.logoUrl.addEventListener('change', function() {
        if (this.value) {
            elementos.logoImg.src = this.value;
            localStorage.setItem('logoUrl_inova', this.value);
            localStorage.removeItem('logo_inova');
            salvarDados();
        }
    });

    // Evento do botão limpar logo
    elementos.limparLogoBtn.addEventListener('click', limparLogo);
}

// ============================================
// GERAR MENSAGEM
// ============================================

function gerarMensagem() {
    const tipo = elementos.tipoMensagem.value;
    
    // Se não houver tipo selecionado, limpar mensagem
    if (!tipo) {
        elementos.mensagem.value = '';
        atualizarContadorCaracteres();
        return;
    }
    
    // Validar campos obrigatórios
    if (!elementos.cliente.value.trim() || !elementos.servico.value.trim()) {
        elementos.mensagem.value = 'Por favor, preencha o nome do cliente e o serviço para gerar a mensagem.';
        atualizarContadorCaracteres();
        return;
    }
    
    // Obter template
    const formalidade = document.querySelector('input[name="formalidade"]:checked').value;
    let template = mensagensTemplates[tipo]?.[formalidade];
    
    if (!template) {
        elementos.mensagem.value = 'Tipo de mensagem não encontrado.';
        atualizarContadorCaracteres();
        return;
    }
    
    // Substituir placeholders
    let mensagemFinal = template
        .replace(/{cliente}/g, elementos.cliente.value.trim())
        .replace(/{empresa}/g, elementos.empresa.value.trim())
        .replace(/{atendente}/g, elementos.atendente.value.trim())
        .replace(/{servico}/g, elementos.servico.value.trim())
        .replace(/{valor}/g, elementos.valor.value.trim() || 'A consultar')
        .replace(/{prazo}/g, elementos.prazo.value.trim() || 'A consultar');
    
    // Remover linhas com placeholders não preenchidos (opcional)
    mensagemFinal = mensagemFinal.split('\n').filter(linha => {
        return !linha.includes('{') && !linha.includes('}');
    }).join('\n');
    
    // Limpar espaços em branco excessivos
    mensagemFinal = mensagemFinal.replace(/\n\n\n+/g, '\n\n').trim();
    
    elementos.mensagem.value = mensagemFinal;
    atualizarContadorCaracteres();
}

// ============================================
// ATUALIZAR CONTADOR DE CARACTERES
// ============================================

function atualizarContadorCaracteres() {
    const quantidade = elementos.mensagem.value.length;
    elementos.charCount.textContent = quantidade.toLocaleString('pt-BR');
    
    // Mudar cor se a mensagem ficar muito longa
    if (quantidade > 1000) {
        elementos.charCount.style.color = '#f59e0b'; // Laranja
    } else if (quantidade > 500) {
        elementos.charCount.style.color = '#0066cc'; // Azul
    } else {
        elementos.charCount.style.color = '#666666'; // Cinza
    }
}

// ============================================
// COPIAR MENSAGEM
// ============================================

function copiarMensagem() {
    const mensagem = elementos.mensagem.value.trim();
    
    if (!mensagem) {
        mostrarToast('Nenhuma mensagem para copiar', 'warning');
        return;
    }
    
    // Usar API Clipboard (moderno)
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(mensagem)
            .then(() => {
                mostrarToast('✅ Mensagem copiada com sucesso!', 'success');
                animarCopia();
            })
            .catch(() => {
                copiarAlternativo(mensagem);
            });
    } else {
        // Fallback para navegadores antigos
        copiarAlternativo(mensagem);
    }
}

// ============================================
// FUNÇÃO ALTERNATIVA DE CÓPIA
// ============================================

function copiarAlternativo(texto) {
    const textarea = document.createElement('textarea');
    textarea.value = texto;
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
        mostrarToast('✅ Mensagem copiada com sucesso!', 'success');
        animarCopia();
    } catch (err) {
        mostrarToast('❌ Erro ao copiar mensagem', 'error');
    }
    
    document.body.removeChild(textarea);
}

// ============================================
// ANIMAR CÓPIA
// ============================================

function animarCopia() {
    elementos.messageCard.classList.add('copied');
    setTimeout(() => {
        elementos.messageCard.classList.remove('copied');
    }, 500);
}

// ============================================
// MOSTRAR TOAST
// ============================================

function mostrarToast(mensagem, tipo = 'success') {
    elementos.toast.textContent = mensagem;
    elementos.toast.className = `toast ${tipo} active`;
    
    // Remover após 3 segundos
    setTimeout(() => {
        elementos.toast.classList.remove('active');
    }, 3000);
}

// ============================================
// LIMPAR CAMPOS
// ============================================

function limparCampos() {
    // Confirmar limpeza
    const confirmacao = confirm('Deseja limpar todos os campos?\n\nOs dados da empresa e atendente serão mantidos.');
    
    if (!confirmacao) {
        return;
    }
    
    // Limpar campos do cliente
    elementos.cliente.value = '';
    elementos.servico.value = '';
    elementos.valor.value = '';
    elementos.prazo.value = '';
    elementos.tipoMensagem.value = '';
    
    // Limpar mensagem
    elementos.mensagem.value = '';
    elementos.charCount.textContent = '0';
    
    // Mostrar feedback
    mostrarToast('🗑️ Campos limpos com sucesso!', 'success');
    
    // Focar no campo de cliente
    elementos.cliente.focus();
}

// ============================================
// FUNÇÃO PARA FORÇAR REGENERAÇÃO
// ============================================

window.regenerarMensagem = function() {
    gerarMensagem();
    mostrarToast('Mensagem regenerada!', 'success');
};

// ============================================
// FUNÇÃO PARA LIMPAR LOCALSTORAGE
// ============================================

window.limparLocalStorage = function() {
    if (confirm('Deseja limpar todos os dados salvos?')) {
        localStorage.removeItem('empresa_inova');
        localStorage.removeItem('atendente_inova');
        localStorage.removeItem('formalidade_inova');
        localStorage.removeItem('emojis_inova');
        localStorage.removeItem('logo_inova');
        localStorage.removeItem('logoUrl_inova');
        location.reload();
    }
};

// ============================================
// MANIPULAR UPLOAD DE LOGO
// ============================================

function handleLogoUpload(e) {
    const file = e.target.files[0];
    
    if (!file) {
        return;
    }
    
    // Validar tipo de arquivo
    if (!file.type.startsWith('image/')) {
        mostrarToast('❌ Por favor, selecione uma imagem válida', 'error');
        return;
    }
    
    // Validar tamanho (máx 5MB)
    if (file.size > 5 * 1024 * 1024) {
        mostrarToast('❌ Arquivo muito grande (máximo 5MB)', 'error');
        return;
    }
    
    const reader = new FileReader();
    
    reader.onload = function(event) {
        const base64 = event.target.result;
        elementos.logoImg.src = base64;
        elementos.logoUrl.value = '';
        localStorage.setItem('logo_inova', base64);
        localStorage.removeItem('logoUrl_inova');
        mostrarToast('✅ Logo carregada com sucesso!', 'success');
    };
    
    reader.onerror = function() {
        mostrarToast('❌ Erro ao carregar a imagem', 'error');
    };
    
    reader.readAsDataURL(file);
}

// ============================================
// LIMPAR LOGO
// ============================================

function limparLogo() {
    elementos.logoImg.src = '';
    elementos.logoUrl.value = '';
    elementos.logoUpload.value = '';
    localStorage.removeItem('logo_inova');
    localStorage.removeItem('logoUrl_inova');
    mostrarToast('🗑️ Logo removida com sucesso!', 'success');
}

console.log('Sistema Gerador de Mensagens – Inova pronto para uso!');
