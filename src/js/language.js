// Textos en diferentes idiomas
const translations = {
    en: {
      title: "Hello, World!",
      description: "This is a simple example of a language toggle.",
    },
    es: {
      title: "¡Hola, Mundo!",
      description: "Este es un ejemplo simple de un cambio de idioma.",
    },
  };
  
  // Referencias a los elementos
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const languageToggle = document.getElementById("languageToggle");
  
  // Inicializa el idioma y aplica animaciones
  const setLanguage = (lang) => {
    // Aplica la clase 'hidden' para ocultar el texto actual
    title.classList.add("hidden");
    description.classList.add("hidden");
  
    // Cambia el texto después de la animación de salida
    setTimeout(() => {
      title.textContent = translations[lang].title;
      description.textContent = translations[lang].description;
  
      // Muestra el texto con la animación de entrada
      title.classList.remove("hidden");
      description.classList.remove("hidden");
    }, 500); // Tiempo sincronizado con la duración de la animación en CSS
  };
  
  // Detecta cambios en el toggle para alternar entre idiomas
  languageToggle.addEventListener("change", () => {
    const newLanguage = languageToggle.checked ? "es" : "en";
    setLanguage(newLanguage);
  });
  
  // Inicializa el contenido en inglés
  setLanguage("en");
  