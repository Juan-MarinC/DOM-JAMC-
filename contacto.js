const construirSeccionContacto = () => {
    const contactoSection = document.createElement('section');
    contactoSection.innerHTML = `
        <h2 style="margin-bottom: 20px;">Contacto</h2>
        <form style="display: flex; flex-direction: column; align-items: center; background-color: rgba(128, 0, 128, 0.5); padding: 20px; border-radius: 8px;">
            <label for="nombre" style="font-weight: bold; margin-bottom: 10px;">Nombre:</label>
            <input type="text" id="nombre" name="nombre" style="width: 50%; max-width: 300px; padding: 8px; margin-bottom: 20px; border-radius: 4px; border: 1px solid #ccc;">

            <label for="email" style="font-weight: bold; margin-bottom: 10px;">Email:</label>
            <input type="email" id="email" name="email" style="width: 50%; max-width: 300px; padding: 8px; margin-bottom: 20px; border-radius: 4px; border: 1px solid #ccc;">

            <label for="mensaje" style="font-weight: bold; margin-bottom: 10px;">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" style="width: 50%; max-width: 300px; padding: 8px; margin-bottom: 20px; border-radius: 4px; border: 1px solid #ccc;"></textarea>

            <input type="submit" value="Enviar" style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer;">
        </form>
    `;
    contactoSection.style.padding = '40px 20px';
    contactoSection.style.textAlign = 'center'; // Centrar el texto horizontalmente
    contactoSection.style.fontFamily = 'Arial, sans-serif'; // Aplicar la fuente de letra
    document.body.appendChild(contactoSection);
};
