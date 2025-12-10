// Language translations (expand as needed)
const translations = {
    en: {
        nav_home: "Home",
        nav_research: "Research",
        nav_data: "Data & Visualizations",
        nav_insights: "Insights",
        nav_about: "About",
        nav_contact: "Contact",
        hero_title: "Murilho-Nogueira Institute for Applied Economics",
        hero_motto: "Advancing Economic Insights Through Rigorous Research and Data-Driven Analysis",
        pillar_research: "Research",
        pillar_data: "Data",
        pillar_insights: "Insights",
        featured_title: "Featured Paper of the Month",
        cta_research: "View Research",
        cta_contact: "Contact",
        research_title: "Research",
        data_title: "Data & Visualizations",
        insights_title: "Insights",
        about_title: "About",
        about_mission: "Our mission is to provide cutting-edge economic analysis...",
        contact_title: "Contact",
        form_name: "Name",
        form_email: "Email",
        form_message: "Message"
    },
    pt: {
        nav_home: "Início",
        nav_research: "Pesquisa",
        nav_data: "Dados e Visualizações",
        nav_insights: "Insights",
        nav_about: "Sobre",
        nav_contact: "Contato",
        hero_title: "Instituto Murilho-Nogueira de Economia Aplicada",
        hero_motto: "Avançando Insights Econômicos Através de Pesquisa Rigorosa e Análise Orientada por Dados",
        pillar_research: "Pesquisa",
        pillar_data: "Dados",
        pillar_insights: "Insights",
        featured_title: "Papel em Destaque do Mês",
        cta_research: "Ver Pesquisa",
        cta_contact: "Contato",
        research_title: "Pesquisa",
        data_title: "Dados e Visualizações",
        insights_title: "Insights",
        about_title: "Sobre",
        about_mission: "Nossa missão é fornecer análise econômica de ponta...",
        contact_title: "Contato",
        form_name: "Nome",
        form_email: "Email",
        form_message: "Mensagem"
    },
    es: {
        nav_home: "Inicio",
        nav_research: "Investigación",
        nav_data: "Datos y Visualizaciones",
        nav_insights: "Insights",
        nav_about: "Acerca de",
        nav_contact: "Contacto",
        hero_title: "Instituto Murilho-Nogueira de Economía Aplicada",
        hero_motto: "Avanzando Insights Económicos a Través de Investigación Rigurosa y Análisis Basado en Datos",
        pillar_research: "Investigación",
        pillar_data: "Datos",
        pillar_insights: "Insights",
        featured_title: "Papel Destacado del Mes",
        cta_research: "Ver Investigación",
        cta_contact: "Contacto",
        research_title: "Investigación",
        data_title: "Datos y Visualizaciones",
        insights_title: "Insights",
        about_title: "Acerca de",
        about_mission: "Nuestra misión es proporcionar análisis económico de vanguardia...",
        contact_title: "Contacto",
        form_name: "Nombre",
        form_email: "Email",
        form_message: "Mensaje"
    }
};

// Language switching
document.getElementById('language-selector').addEventListener('change', (e) => {
    const lang = e.target.value;
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        el.textContent = translations[lang][key] || el.textContent;
    });
});

// Dark mode toggle
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Navigation and section switching
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href').substring(1);
        document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
        document.getElementById(target).classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

document.querySelectorAll('.pillar, .card').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Sample Charts (using Chart.js)
const ctx1 = document.getElementById
