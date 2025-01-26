// Textos en diferentes idiomas
const translations = {
    en: {
      title: "Minda Consulting",
      description: "We provide planning and organizational intervention to design, evaluate, manage and improve productive systems.",
      aboutUsTitle: "About Us",
      aboutUsP1: "At minda, our passion is to work together with our customers to find solutions to their unique problems using different planning approaches. Our work is interdisciplinary and is supported by heuristic methods to design plans of different scope.",
      aboutUsP2: "We use the best methodologies, tools and techniques that are suited to your problems and we are supported by an extensive experience in strategic and tactical planning in different industries, we are used to work with different degrees of uncertainty in our assignments.",
      aboutUsP3: "For new companies, projects and startups, we provide business modelling, investment project evaluation and elaboration of prospective and strategic plans.",
      aboutUsP4: "We also specialize in operations, project improvement and recovery under restrictive time frames, always working with your own team and resources to find the best solution.",
      methodologiesTitle: "Methodologies",
      methodologiesP1: "Business Model Canvas",
      methodologiesP2: "Lean and Agile",
      methodologiesP3: "Project Management Institute (PMI)",
      methodologiesP4: "Six Sigma",
      methodologiesP5: "Microsoft Office 365 and Microsoft Power Platform",
      methodologiesP6: "Information Technology Infrastructure Library (ITIL)",
      methodologiesP7: "Prosci Change Management",
      servicesTitle: "Our Work",
      servicesP1: "Business Modelling",
      servicesP2: "Strategic planning",
      servicesP3: "Mission and Vision Development",
      servicesP4: "Strategy Management as a Service (SMaaS)",
      servicesP5: "Investment Project Evaluation",
      servicesP6: "Project and Program Management",
      servicesP7: "Business Continuity",
      servicesP8: "Change Management",
      servicesP9: "Customer Satisfaction Evaluation",
      servicesP10: "Remote Leadership",
      contactTitle: "Contact",
      contactP1: "We are a collective team of professionals with several years of experience in companies of all sizes and also in academy. Our team has an strong engineering base but with the human and cultural skills needed to make successful organizational interventions and make change happen and stick through time.",
      contactP2: "Please contact us and describe the kind of issue you’d like to solve.",
      contactP3: "We look forward to work with you!",
    },
    es: {
      title: "Minda Consulting",
      description: "Proveemos planeación e intervención organizacional para diseñar, evaluar, gestionar y mejorar sistemas productivos.",
      aboutUsTitle: "Sobre Nosotros",
      aboutUsP1: "En Minda Consulting nuestra pasión es trabajar junto con nuestros clientes para encontrar soluciones a sus problemas únicos utilizando diferentes enfoques de planificación. Nuestro trabajo es interdisciplinario y está respaldado por métodos heurísticos para diseñar planes de diferentes alcances.",
      aboutUsP2: "Usamos las mejores metodologías, herramientas y técnicas que se ajustan a sus problemas y estamos respaldados por una amplia experiencia en planificación estratégica y táctica en diferentes industrias, estamos acostumbrados a trabajar con diferentes grados de incertidumbre en nuestras asignaciones.",
      aboutUsP3: "Para nuevas empresas, proyectos y startups, proporcionamos modelado de negocios, evaluación de proyectos de inversión y elaboración de planes prospectivos y estratégicos.",
      aboutUsP4: "También nos especializamos en la mejora de operaciones, proyectos y recuperación de operaciones y proyectos bajo plazos de tiempo restrictivos, siempre trabajando con su propio equipo y recursos para encontrar la mejor solución.",
      methodologiesTitle: "Metodologías",
      methodologiesP1: "Business Model Canvas",
      methodologiesP2: "Rápido y Ágil",
      methodologiesP3: "Project Management Institute (PMI)",
      methodologiesP4: "Six Sigma",
      methodologiesP5: "Microsoft Office 365 y Microsoft Power Platform",
      methodologiesP6: "Information Technology Infrastructure Library (ITIL)",
      methodologiesP7: "Prosci Change Management",
      servicesTitle: "Nuestro Trabajo",
      servicesP1: "Modelado de Negocios",
      servicesP2: "Planeación Estratégica",
      servicesP3: "Desarrollo de Misión y Visión",
      servicesP4: "Manejo de la Estrategia como un Servicio (SMaaS)",
      servicesP5: "Evaluación de Proyectos de Inversión",
      servicesP6: "Gestión de Proyectos y Programas",
      servicesP7: "Continuidad de Negocios",
      servicesP8: "Gestión del Cambio",
      servicesP9: "Evaluación de Satisfacción del Cliente",
      servicesP10: "Liderazgo Remoto",
      contactTitle: "Contacto",
      contactP1: "Somos un equipo colectivo de profesionales con varios años de experiencia en empresas de todos los tamaños y también en la academia. Nuestro equipo tiene una sólida base de ingeniería pero con las habilidades humanas y culturales necesarias para hacer intervenciones organizacionales exitosas y hacer que el cambio suceda y se mantenga a lo largo del tiempo.",
      contactP2: "Por favor contáctenos y describa el tipo de problema que le gustaría resolver.",
      contactP3: "¡Esperamos trabajar con usted!",
    },
  };
  
  // Referencias a los elementos
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const aboutUsTitle = document.getElementById("aboutUsTitle");
  const aboutUsP1 = document.getElementById("aboutUsP1");
  const aboutUsP2 = document.getElementById("aboutUsP2");
  const aboutUsP3 = document.getElementById("aboutUsP3");
  const aboutUsP4 = document.getElementById("aboutUsP4");
  const methodologiesTitle = document.getElementById("methodologiesTitle");
  const methodologiesP1 = document.getElementById("methodologiesP1");
  const methodologiesP2 = document.getElementById("methodologiesP2");
  const methodologiesP3 = document.getElementById("methodologiesP3");
  const methodologiesP4 = document.getElementById("methodologiesP4");
  const methodologiesP5 = document.getElementById("methodologiesP5");
  const methodologiesP6 = document.getElementById("methodologiesP6");
  const methodologiesP7 = document.getElementById("methodologiesP7");
  const servicesTitle = document.getElementById("servicesTitle");
  const servicesP1 = document.getElementById("servicesP1");
  const servicesP2 = document.getElementById("servicesP2");
  const servicesP3 = document.getElementById("servicesP3");
  const servicesP4 = document.getElementById("servicesP4");
  const servicesP5 = document.getElementById("servicesP5");
  const servicesP6 = document.getElementById("servicesP6");
  const servicesP7 = document.getElementById("servicesP7");
  const servicesP8 = document.getElementById("servicesP8");
  const servicesP9 = document.getElementById("servicesP9");
  const servicesP10 = document.getElementById("servicesP10");
  const contactTitle = document.getElementById("contactTitle");
  const contactP1 = document.getElementById("contactP1");
  const contactP2 = document.getElementById("contactP2");
  const contactP3 = document.getElementById("contactP3");
  const languageToggle = document.getElementById("languageToggle");
  
  // Inicializa el idioma y aplica animaciones
  const setLanguage = (lang) => {
    // Aplica la clase 'hidden' para ocultar el texto actual
    title.classList.add("hidden");
    description.classList.add("hidden");
    aboutUsTitle.classList.add("hidden");
    aboutUsP1.classList.add("hidden");
    aboutUsP2.classList.add("hidden");
    aboutUsP3.classList.add("hidden");
    aboutUsP4.classList.add("hidden");
    methodologiesTitle.classList.add("hidden");
    methodologiesP1.classList.add("hidden");
    methodologiesP2.classList.add("hidden");
    methodologiesP3.classList.add("hidden");
    methodologiesP4.classList.add("hidden");
    methodologiesP5.classList.add("hidden");
    methodologiesP6.classList.add("hidden");
    methodologiesP7.classList.add("hidden");
    servicesTitle.classList.add("hidden");
    servicesP1.classList.add("hidden");
    servicesP2.classList.add("hidden");
    servicesP3.classList.add("hidden");
    servicesP4.classList.add("hidden");
    servicesP5.classList.add("hidden");
    servicesP6.classList.add("hidden");
    servicesP7.classList.add("hidden");
    servicesP8.classList.add("hidden");
    servicesP9.classList.add("hidden");
    servicesP10.classList.add("hidden");
    contactTitle.classList.add("hidden");
    contactP1.classList.add("hidden");
    contactP2.classList.add("hidden");
    contactP3.classList.add("hidden");
  
    // Cambia el texto después de la animación de salida
    setTimeout(() => {
      title.textContent = translations[lang].title;
      description.textContent = translations[lang].description;
      aboutUsTitle.textContent = translations[lang].aboutUsTitle;
      aboutUsP1.textContent = translations[lang].aboutUsP1;
      aboutUsP2.textContent = translations[lang].aboutUsP2;
      aboutUsP3.textContent = translations[lang].aboutUsP3;
      aboutUsP4.textContent = translations[lang].aboutUsP4;
      methodologiesTitle.textContent = translations[lang].methodologiesTitle;
      methodologiesP1.textContent = translations[lang].methodologiesP1;
      methodologiesP2.textContent = translations[lang].methodologiesP2;
      methodologiesP3.textContent = translations[lang].methodologiesP3;
      methodologiesP4.textContent = translations[lang].methodologiesP4;
      methodologiesP5.textContent = translations[lang].methodologiesP5;
      methodologiesP6.textContent = translations[lang].methodologiesP6;
      methodologiesP7.textContent = translations[lang].methodologiesP7;
      servicesTitle.textContent = translations[lang].servicesTitle;
      servicesP1.textContent = translations[lang].servicesP1;
      servicesP2.textContent = translations[lang].servicesP2;
      servicesP3.textContent = translations[lang].servicesP3;
      servicesP4.textContent = translations[lang].servicesP4;
      servicesP5.textContent = translations[lang].servicesP5;
      servicesP6.textContent = translations[lang].servicesP6;
      servicesP7.textContent = translations[lang].servicesP7;
      servicesP8.textContent = translations[lang].servicesP8;
      servicesP9.textContent = translations[lang].servicesP9;
      servicesP10.textContent = translations[lang].servicesP10;
      contactTitle.textContent = translations[lang].contactTitle;
      contactP1.textContent = translations[lang].contactP1;
      contactP2.textContent = translations[lang].contactP2;
      contactP3.textContent = translations[lang].contactP3;
  
      // Muestra el texto con la animación de entrada
      title.classList.remove("hidden");
      description.classList.remove("hidden");
      aboutUsTitle.classList.remove("hidden");
      aboutUsP1.classList.remove("hidden");
      aboutUsP2.classList.remove("hidden");
      aboutUsP3.classList.remove("hidden");
      aboutUsP4.classList.remove("hidden");
      methodologiesTitle.classList.remove("hidden");
      methodologiesP1.classList.remove("hidden");
      methodologiesP2.classList.remove("hidden");
      methodologiesP3.classList.remove("hidden");
      methodologiesP4.classList.remove("hidden");
      methodologiesP5.classList.remove("hidden");
      methodologiesP6.classList.remove("hidden");
      methodologiesP7.classList.remove("hidden");
      servicesTitle.classList.remove("hidden");
      servicesP1.classList.remove("hidden");
      servicesP2.classList.remove("hidden");
      servicesP3.classList.remove("hidden");
      servicesP4.classList.remove("hidden");
      servicesP5.classList.remove("hidden");
      servicesP6.classList.remove("hidden");
      servicesP7.classList.remove("hidden");
      servicesP8.classList.remove("hidden");
      servicesP9.classList.remove("hidden");
      servicesP10.classList.remove("hidden");
      contactTitle.classList.remove("hidden");
      contactP1.classList.remove("hidden");
      contactP2.classList.remove("hidden");
      contactP3.classList.remove("hidden");
    }, 500); // Tiempo sincronizado con la duración de la animación en CSS
  };
  
  // Detecta cambios en el toggle para alternar entre idiomas
  languageToggle.addEventListener("change", () => {
    const newLanguage = languageToggle.checked ? "es" : "en";
    setLanguage(newLanguage);
  });
  
  // Inicializa el contenido en inglés
  setLanguage("en");
  