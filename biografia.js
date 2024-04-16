// Archivo JavaScript para la Sección de Biografía (biografia.js)
const construirSeccionBiografia = () => {
    const biografiaSection = document.createElement('section');
    biografiaSection.innerHTML = `
        <h2 style="margin-bottom: 20px;">Mi Biografía</h2>
        <img src="imagenes/yo.png" alt="Juan Andres Marin Cardenas" style="border-radius: 50%; width: 200px; height: 200px; margin-right: 20px; float=left;">
        <p style="font-size: 16px; line-height: 1.5; text-align: center;">Soy Juan Andres Marin Cardenas, un apasionado desarrollador web con experiencia en tecnologías como HTML, CSS y JavaScript. ¡Bienvenido a mi página personal!</p>
    `;
    biografiaSection.style.backgroundColor = '#f0f0f0';
    biografiaSection.style.padding = '40px 20px';
    biografiaSection.style.textAlign = 'center'; // Centrar el texto horizontalmente
    biografiaSection.style.fontFamily = 'Arial, sans-serif'; // Aplicar la fuente de letra
    document.body.appendChild(biografiaSection);
};

