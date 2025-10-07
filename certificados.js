// Configuração dos certificados
const certificados = {
    // POWER BI - DASHBOARD (módulo 1)
    'pbi-dashboard': {
        titulo: 'Power BI - Construindo meu primeiro dashboard',
        pt: 'assets/PBI/PT/Julia Maria Da Silva - Curso Power BI Desktop_ construindo meu primeiro dashboard - Alura.pdf',
        en: 'assets/PBI/EN/Julia Maria Da Silva - Course Power BI Desktop_ building my first dashboard - Alura - EN.pdf',
        es: 'assets/PBI/ES/Curso_PowerBI_desktop_creacion_de_mi_primer_panel_Julia_Maria_da_Silva.pdf'
    },
    // POWER BI - TRATAMENTO DE DADOS (módulo 2)
    'pbi-tratamento-dados': {
        titulo: 'Power BI - Tratamento de Dados no Power Query',
        pt: 'assets/PBI/PT/Julia Maria Da Silva - Curso Power BI Desktop_ tratamento de dados no Power Query - Alura.pdf',
        en: 'assets/PBI/EN/Julia Maria Da Silva - Course Power BI Desktop_ data processing in Power Query - Alura - EEN.pdf',
        es: 'assets/PBI/ES/Curso_PowerBI_desktop_procesamiento_de_daros_en_power_query_Julia_Maria_da_Silva.pdf'
    },
    // POWER BI - OPERAÇÕES MATEMÁTICAS (módulo 3)
    'pbi-matematicas-filtros': {
        titulo: 'Power BI - Operações Matemáticas e Filtros',
        pt: 'assets/PBI/PT/Julia Maria Da Silva - Curso Funções com Excel_ operações matemáticas e filtros - Alura - PT.pdf',
        en: 'assets/PBI/EN/Julia Maria Da Silva - Course Mathematical Operations and Filters - Alura - EN.pdf',
        es: 'assets/PBI/ES/Curso_Funciones_con_Excel_operaciones matemáticas y filtros_Julia_Maria_da_Silva.pdf'
    },
    // POWER BI - VISUALIZAÇÃO (módulo 4)
    'pbi-visualizacao-dados': {
        titulo: 'Power BI - Visualizando Dados',
        pt: 'assets/PBI/PT/Julia Maria Da Silva - Curso Dashboard com Power BI_ visualizando dados - Alura.pdf',
        en: 'assets/PBI/EN/Julia Maria Da Silva - Course Dashboard with Power BI_ visualizing data - Alura - EN.pdf',
        es: 'assets/PBI/ES/Curso_Panel con Power BI_visualización de datos_Julia_Maria_da_Silva.pdf'
    },
    // OUTROS CERTIFICADOS
    'pbi-fundamentos': {
        titulo: 'Power BI - Fundamentos',
        pt: 'assets/PBI/PT/Julia Maria Da Silva - Curso Fundamentos do Power BI - Alura.pdf',
        en: 'assets/PBI/EN/Julia Maria Da Silva - Course Fundamentals in Power BI - Data Visualization - Alura.pdf',
        es: 'assets/PBI/ES/Julia Maria Da Silva - Curso Fundamentos de Power BI - Alura ES.pdf'
    },
     // FORMAÇÃO DAX NO POWER BI - Módulo 1
    'pbi-dax-iteracoes': {
        titulo: 'DAX no Power BI - Contexto e Iterações',
        pt: 'assets/PBI/DAX/PT/Julia Maria da Silva_Curso_Power BI_DAX contextos e iteração.pdf',
        en: 'assets/PBI/DAX/EN/Julia Maria da Silva_Course_Power BI_DAX contexts and iteration.pdf',
        es: 'assets/PBI/DAX/ES/Curso_Power BI_contextos e iteración de DAX_Julia_Maria_da_Silva.pdf'
    },
    
    // DAX NO POWER BI - Módulo 2  
    'pbi-dax-negocios': {
        titulo: 'DAX no Power BI - Aplicando aos Negócios',
        pt: 'assets/PBI/DAX/PT/Julia Maria da Silva_Curso_Power BI_aplicando DAX ao negócio.pdf',
        en: 'assets/PBI/DAX/EN/Julia Maria da Silva_Course_Power BI_applying DAX to the business.pdf',
        es: 'assets/PBI/DAX/ES/Curso_Power BI_aplicando DAX al negocio_Julia_Maria_da_Silva.pdf'
    },
    
    // DAX NO POWER BI - Módulo 3
    'pbi-dax-aprofundando': {
        titulo: 'DAX no Power BI - Aprofundando na Linguagem',
        pt: 'assets/PBI/DAX/PT/Julia Maria da Silva_Curso_Power BI_aprofundando na linguagem DAX.pdf',
        en: 'assets/PBI/DAX/EN/Julia Maria da Silva_Course_Power BI_delving deeper into the DAX language.pdf',
        es: 'assets/PBI/DAX/ES/Curso_Power BI_profundizando en el lenguaje DAX_Julia_Maria_da_Silva.pdf'
    },
    // HTML/CSS - Módulo 1
    'html-css-ambiente': {
        titulo: 'HTML/CSS - Ambientes de Desenvolvimentp, Estrutura de Arquivos e Tags',
        pt: 'assets/HTML-CSS/PT/Julia Maria da Silva_curso_html e css ambientes de desenvolvimentp, estrutura de arquivos e tags.pdf',
        en: 'assets/HTML-CSS/EN/Julia Maria da Silva_course_html and css development environments, file structure and tags.pdf',
        es: 'assets/HTML-CSS/ES/Curso_HTML y CSS_entornos de desarrollo, estructura de archivos y etiquetas_Julia_Maria_da_Silva.pdf'
    },
    // HTML/CSS - Módulo 2  
    'html-css-classes': {
        titulo: 'HTML e CSS - Classes, Posicionamento e Flexbox',
        pt: 'assets/HTML-CSS/PT/Julia Maria da Silva_Curso_HTML e CSS_classes posicionamentos e flexbox.pdf',
        en: 'assets/HTML-CSS/EN/Julia Maria da Silva_Course_HTML and CSS_classes positioning and flexbox.pdf',
        es: 'assets/HTML-CSS/ES/Curso_HTML y CSS_Clases, posicionamiento y Flexbox_Julia_Maria_da_Silva.pdf'
    },

    // HTML/CSS - Módulo 3
    'html-css-header-footer': {
        titulo: 'HTML e CSS - Cabeçalho, Footer e Variáveis CSS',
        pt: 'assets/HTML-CSS/PT/Julia Maria da Silva_Curso_cabecalho footer e variaveis CSS.pdf',
        en: 'assets/HTML-CSS/EN/Julia Maria da Silva_Curso_HTML and CSS_header footer and css variables.pdf',
        es: 'assets/HTML-CSS/ES/Curso_HTML y CSS_encabezado, pie de página y variables CSS_Julia_Maria_da_Silva.pdf'
    },

    // HTML/CSS - Módulo 4
    'html-css-responsividade': {
        titulo: 'HTML e CSS - Responsividade e Publicação',
        pt: 'assets/HTML-CSS/PT/Julia Maria da Silva_Curso_HMTL e CSS_trabalhando com responsividade e publicacao de projetos.pdf',
        en: 'assets/HTML-CSS/EN/Julia Maria da Silva_Course_HTML and CSS_working with responsiveness and publishing projects.pdf',
        es: 'assets/HTML-CSS/ES/Curso_HTML y CSS_trabajar con proyectos de capacidad de respuesta y publicación_Julia_Maria_da_Silva.pdf'
    },

    // HTML/CSS - Módulo 5
    'html-css-mobile-first': {
        titulo: 'HTML e CSS - Mobile First',
        pt: 'assets/HTML-CSS/PT/Julia Maria da Silva_Curso_HTML e CSS_responsividade com mobile-first.pdf',
        en: 'assets/HTML-CSS/EN/Julia Maria da Silva_Course_HTML and CSS_mobile-first responsiveness.pdf',
        es: 'assets/HTML-CSS/ES/Curso_HTML y CSS_capacidad de respuesta con móvil primero_Julia_Maria_da_Silva.pdf'
    },

    // HTML/CSS - Módulo 6
    'html-css-pratica': {
        titulo: 'HTML e CSS - Praticando',
        pt: 'assets/HTML-CSS/PT/Julia Maria Da Silva_Curso_HTML_CSS_praticando htmlcss.pdf',
        en: 'assets/HTML-CSS/EN/Julia Maria da Silva_Course_HTML and CSS_practicing htmlcss.pdf',
        es: 'assets/HTML-CSS/ES/Curso_HTML y CSS_practicar HTML-CSS_Julia_Maria_da_Silva.pdf'
    },
    // FORMAÇÃO INICIANTE EM PROGRAMAÇÃO - Módulo 1
    'iniciante-primeiros-passos': {
        titulo: 'Iniciante em Programação - Primeiros Passos',
        pt: 'assets/Linguagem de Programação/PT/Julia Maria da Silva_Curso_Começando em Programação_carreira e primeiros passos.pdf',
        en: 'assets/Linguagem de Programação/EN/Julia Maria da Silva_Course_Starting in Programming_career and first steps.pdf',
        es: 'assets/Linguagem de Programação/ES/Curso_Comenzando en Programación_carrera y primeros pasos_Julia_Maria_da_Silva.pdf'
    },
    
    // INICIANTE PROGRAMAÇÃO - Módulo 2  
    'iniciante-git-github': {
        titulo: 'Git e GitHub - Compartilhando e Colaborando',
        pt: 'assets/Linguagem de Programação/pt/Julia Maria da Silva_Curso_Git e GitHub_compartilhando e colaborando em projetos.pdf',
        en: 'assets/Linguagem de Programação/EN/Julia Maria da Silva_Course_Git and GitHub_sharing and collaborating on projects.pdf',
        es: 'assets/Linguagem de Programação/ES/Curso_Git y GitHub_compartir y colaborar en proyectos_Julia_Maria_da_Silva.pdf'
    },
    
    // INICIANTE PROGRAMAÇÃO - Módulo 3
    'iniciante-logica-funcoes-listas': {
        titulo: 'Lógica de Programação - Funções e Listas',
        pt: 'assets/Linguagem de Programação/PT/Julia Maria da Silva_Curso_Lógica de programação_explore funções e listas.pdf',
        en: 'assets/Linguagem de Programação/EN/Julia Maria da Silva_Course_Programming logic_explore functions and lists.pdf',
        es: 'assets/Linguagem de Programação/ES/Curso_Lógica de programación_explora funciones y listas_Julia_Maria_da_Silva.pdf'
    },
    
    // INICIANTE PROGRAMAÇÃO - Módulo 4
    'iniciante-logica-javascript': {
        titulo: 'Lógica de Programação - JavaScript',
        pt: 'assets/Linguagem de Programação/PT/Julia Maria da Silva_Curso_Lógica de programação_mergulhe em programação com JavaScript.pdf',
        en: 'assets/Linguagem de Programação/EN/Julia Maria da Silva_Course_Programming logic_dive into programming with JavaScript.pdf',
        es: 'assets/Linguagem de Programação/ES/Curso_Lógica de programación_adéntrate en la programación con JavaScript_Julia_Maria_da_Silva.pdf'
    },
    
    // INICIANTE PROGRAMAÇÃO - Módulo 5
    'iniciante-logica-desafios': {
        titulo: 'Lógica de Programação - Praticando com Desafios',
        pt: 'assets/Linguagem de Programação/PT/Julia Maria da Silva_Curso_Lógica de programação_praticando com desafios.pdf',
        en: 'assets/Linguagem de Programação/EN/Julia Maria da Silva_Course_Programming logic_practicing with challenges.pdf',
        es: 'assets/Linguagem de Programação/ES/Curso_Lógica de programación_practicando con desafíos_Julia_Maria_da_Silva.pdf'
    },

    // FORMAÇÃO WORDPRESS - Módulo 1
    'wordpress-primeiro-blog': {
        titulo: 'WordPress - Criando Seu Primeiro Blog',
        pt: 'assets/Wordpress/PT/Julia Maria da Silva_Curso_wordpress_passo a passo para criar seu primeiro blog.pdf',
        en: 'assets/Wordpress/EN/Julia Maria da Silva_Course_wordpress_step by step to create your first blog.pdf',
        es: 'assets/Wordpress/ES/Curso_WordPress_paso a paso para crear tu primer blog_Julia_Maria_da_Silva.pdf'
    },
    
    // WORDPRESS - Módulo 2  
    'wordpress-elementor-figma': {
        titulo: 'WordPress - Sites com Elementor e Figma',
        pt: 'assets/Wordpress/PT/Julia Maria da Silva - Curso_wordpress_crie sites com elementor e figma.pdf',
        en: 'assets/Wordpress/EN/Julia Maria da Silva_course_wordpress_create websites with elementor and figma.pdf',
        es: 'assets/Wordpress/ES/Curso_WordPress_Crea sitios web con Elementor y Figma_Julia_Maria_Silva.pdf'
    },
    
    // WORDPRESS - Módulo 3
    'wordpress-responsividade-plugins': {
        titulo: 'WordPress - Responsividade e Plugins',
        pt: 'assets/Wordpress/PT/Julia Maria da Silva_Curso_integrando responsividade, efeitos visuais e explorando plugins.pdf',
        en: 'assets/Wordpress/EN/Julia Maria da Silva_Course_integrating responsiveness, visual effects and exploring plugins.pdf',
        es: 'assets/Wordpress/ES/Curso_Wordpress_integración de capacidad de respuesta, efectos visuales y exploración de complementos_Julia_Maria_da_Silva.pdf'
    }

};

// Função para carregar certificado
function carregarCertificado() {
    const urlParams = new URLSearchParams(window.location.search);
    const certificadoId = urlParams.get('id');

    console.log('🔍 Certificado ID:', certificadoId);

    if (certificados[certificadoId]) {
        const certificado = certificados[certificadoId];
        document.getElementById('certificadoTitulo').textContent = certificado.titulo;

        // Carrega versão em português por padrão
        mudarIdioma('pt');
    } else {
        document.getElementById('certificadoTitulo').textContent = 'Certificado não encontrado';
        console.error('❌ Certificado não encontrado para ID:', certificadoId);
    }
}

// Função para trocar idioma
function mudarIdioma(idioma) {
    const urlParams = new URLSearchParams(window.location.search);
    const certificadoId = urlParams.get('id');
    const certificado = certificados[certificadoId];

    console.log('🌐 Mudando para idioma:', idioma, 'Certificado:', certificadoId);

    if (certificado && certificado[idioma]) {
        const iframe = document.getElementById('certificadoFrame');
        console.log('📄 Carregando PDF:', certificado[idioma]);
        iframe.src = certificado[idioma];

        // Atualiza botões ativos
        document.querySelectorAll('.btn-idioma').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.idioma === idioma) {
                btn.classList.add('active');
            }
        });
    } else {
        console.error('❌ PDF não encontrado para:', certificadoId, 'idioma:', idioma);
        // Mensagem amigável
        const iframe = document.getElementById('certificadoFrame');
        iframe.srcdoc = `
            <html>
                <body style="display: flex; justify-content: center; align-items: center; height: 100vh; background: #f0f0f0; color: #333; font-family: Arial;">
                    <div style="text-align: center;">
                        <h2>Versão em ${idioma.toUpperCase()} não disponível</h2>
                        <p>Este certificado ainda não possui versão no idioma selecionado.</p>
                    </div>
                </body>
            </html>
        `;
    }
}

// Inicializar eventos
function inicializarEventos() {
    document.querySelectorAll('.btn-idioma').forEach(btn => {
        btn.addEventListener('click', () => {
            mudarIdioma(btn.dataset.idioma);
        });
    });
}

// Inicializar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', function () {
    console.log('🚀 DOM Carregado - Iniciando certificado.js');

    carregarCertificado();
    inicializarEventos();

    // Particles.js - carregar separadamente
    if (typeof particlesJS !== 'undefined') {
        particlesJS.load('particles-js', 'particles.json', function () {
            console.log('✨ Particles.js configurado!');
        });
    }
});

// Garantir que particles carregue mesmo se houver erro no JS anterior
window.addEventListener('load', function () {
    if (typeof particlesJS !== 'undefined' && !document.querySelector('#particles-js canvas')) {
        particlesJS.load('particles-js', 'particles.json');
    }
});

// === CONFIGURAÇÃO DOS CURRÍCULOS ===
const curriculos = {
    'pt': 'assets/Currículo - JULIA MARIA DA SILVA (5).pdf',
    'en': 'assets/CV - JULIA MARIA DA SILVA - EN.pdf'
};

// Função para trocar idioma do currículo
function mudarIdiomaCurriculo(idioma) {
    if (curriculos[idioma]) {
        const iframe = document.getElementById('curriculoFrame');
        iframe.src = curriculos[idioma];
        
        // Atualiza botões ativos
        document.querySelectorAll('.btn-idioma').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.idioma === idioma) {
                btn.classList.add('active');
            }
        });
    } else {
        console.error('Currículo não encontrado para idioma:', idioma);
    }
}

// Inicializar eventos do currículo
function inicializarCurriculo() {
    document.querySelectorAll('.btn-idioma').forEach(btn => {
        btn.addEventListener('click', () => {
            mudarIdiomaCurriculo(btn.dataset.idioma);
        });
    });
}


