// Archivo JavaScript para la Sección de Proyectos (proyectos.js)
const construirSeccionProyectos = () => {
    const proyectosSection = document.createElement('section');
    proyectosSection.innerHTML = `
        <h2 style="margin-bottom: 20px;">Mis Proyectos</h2>
        <ul style="list-style-type: none; padding: 0; text-align: center;">
            <li style="margin-bottom: 10px; padding: 10px; background-color: rgba(0, 128, 0, 0.5); border-radius: 4px;">
                <strong style="color: green;">Mercado Verde</strong>
                <p style="font-size: 14px; margin-top: 5px;">Mercado verde es una iniciativa que tengo junto a un gran amigo, el cual es un tipo de mercado libre pero solo de productos ecológicos.</p>
            </li>
            <li style="margin-bottom: 10px; padding: 10px; background-color: rgba(128, 0, 128, 0.5); border-radius: 4px;">
                <strong style="color: purple;">CloudT</strong>
                <p style="font-size: 14px; margin-top: 5px;">Más que un proyecto es un reto en el cual me estoy proponiendo aprender manejar la nube y todo tipo de registros que tengan base de datos.</p>
            </li>
            <li style="margin-bottom: 10px; padding: 10px; background-color: rgba(0, 0, 255, 0.5); border-radius: 4px;">
                <strong style="color: blue;">Unknown</strong>
                <p style="font-size: 14px; margin-top: 5px;">Este proyecto está enfocado en la entrega final de la materia Desarrollo Web.</p>
            </li>
        </ul>
    `;
    proyectosSection.style.padding = '40px 20px';
    proyectosSection.style.textAlign = 'center'; // Centrar el texto horizontalmente
    proyectosSection.style.fontFamily = 'Arial, sans-serif'; // Aplicar la fuente de letra
    document.body.appendChild(proyectosSection);
};
