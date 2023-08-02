const { Client, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const completedUsersFile = 'completed-users.txt';
const client = new Client();
const fs = require('fs');
let completedUsers = {};

client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr, { small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
    listenMessage();
});

client.initialize();

if (fs.existsSync(completedUsersFile)) {
    const data = fs.readFileSync(completedUsersFile, 'utf8');
    completedUsers = JSON.parse(data);
}

        
const listenMessage = () => {
    client.on('message', (msg) => {
        const { from, body } = msg;
        
        if (completedUsers[from]) {
            console.log('User already completed interaction.');
            return; // Si el usuario ya completó la interacción, no respondemos a sus mensajes.
        }
        
        const upperBody = body.toUpperCase();
        switch (upperBody) {
            case '1':
                sendMessage(from, "Escoge tu proximo pais de destino como estudiante y conoce sus requisitos basicos\n"
                + "A. USA 🇺🇸\n"
                + "B. CANADA 🇨🇦\n"
                + "C. AUSTRALIA 🇦🇺")
                break;
            case '2':
                sendMessage(from, "Escoge tu próximo país de destino como turista y conoce sus requisitos básicos.\n"
                + "D. USA 🇺🇸\n"
                + "E. CANADA 🇨🇦\n"
                + "F. AUSTRALIA 🇦🇺")
                break;
            case '3':
                sendMessage(from, "*Si deseas renovar tu VISA a los Estados Unidos.* 🇺🇸\n" +
                "🔸Debes contar con un pasaporte que tenga una vigencia superior a 6 meses. 🪪\n" +
                "🔸Si tu VISA ya venció, podrás renovarla siempre que no haya superado un periodo de 48 meses.🗓️\n" +
                "🔸Si la VISA que deseas renovar se te otorgó siendo menor de edad.🚼, tendrás que presentar entrevista consular.\n" +
                "🔸Si eres ciudadano venezolano 🇻🇪, debes presentar entrevista consular obligatoria.\n" +
                "🔸Completar formulario de solicitud formal de RENOVACION VISA USA de nuestra Agencia.\n\n" +
                "Los costos generales son los siguientes en Moneda USD:\n" +
                "✓ Pago Embajada Americana $185 USD\n" +
                "✓ Trámite y Asesoría $75 USD.\n\n" +
                "Deseas ser contactad@ por una de nuestras asesoras? 👩🏻‍💻\n" +
                "(Por favor escribe Si o No)" )
                break;
            case '4':
                sendMessage(from, "*Deseas Extender tu Estadía en *🇺🇸\n" +
                "🔸Para poder extender tu estadía en USA, lo más importante es que no hayas superado el tiempo máximo que se te permitió al ingreso.\n" +
                "🔸Debes contar con un pasaporte que tenga una vigencia superior a 6 meses.\n" +
                "🔸Debes contar con fondos suficientes o un patrocinador que respalde tu solicitud para una estadía de 1 año.\n" +
                "\nEntre los beneficios que obtendrás están:\n" +
                "🔸Poder vivir legalmente dentro de los USA indefinidamente.👌🏽\n" +
                "🔸Aceptar una oferta laboral 📃 en tu profesión o actividad en el futuro.\n" +
                "🔸Poder iniciar tu propio negocio.\n" +
                "🔸Aplicar a otras VISAS ejemplo VISA EB3👷🏻 o VISA F1 ESTUDIANTE 👨🏼‍🎓.\n" +
                "🔸Y la más importante, la tranquilidad de vivir sin esconderse, entre muchas otras.\n" +
                "\nLos costos generales son los siguientes en Moneda USD:\n" +
                "✓ Inscripción F1 $200 USD👨🏼‍🎓\n" +
                "✓ SEVIS $350 USD para F1👨🏼‍🎓.\n" +
                "✓ BIOMETRICOS $85 USD\n" +
                "✓ i-539 FORM USCIS $370 USD\n" +
                "✓ HONORARIOS TRAMITE Y ASESORIA $700 USD\n" +
                "\n🔸Todas las solicitudes de Extensión de Estadía y Cambio de Estatus son diferentes y particulares a cada caso en específico.\n" +
                "🔸Los valores son una referencia y pueden variar.\n\n" +
                "Deseas ser contactad@ por una de nuestras asesoras? 👩🏻‍💻\n" +
                "(Por favor escribe Si o No)" )
                break;
            case '5':
                sendMessage(from,  "Deseas REAGENDAR🤩 TU VISA A USA 🇺🇸\n" +
                "🔸Esta solicitud tiene un costo de 300 COP.\n" +
                "🔸Solamente es reagendable solicitudes individuales👤.\n" +
                "🔸Aplica para solicitantes nuevos o que estén en 2025.\n" +
                "\n☘ Si deseas reagendar y obtener más información contacta a nuestras representantes.\n\n" +
                "Deseas ser contactad@ por una de nuestras asesoras? 👩🏻‍💻\n" +
                "(Por favor escribe Si o No)")
                break;
            case 'A':
                sendMessage(from, "VISA DE ESTUDIANTE 👨🏼‍🎓\n" +
                "USA 🇺🇸\n" +
                "Para solicitar tu VISA hacia USA necesitas:\n" +
                "🔸Foto de pasaporte vigente. 🪪\n" +
                "🔸Si cuentas con VISA USA 🇺🇲, añadir foto con sellos\n" +
                "🔸Una foto tuya 📸 en fondo blanco actual.👤\n" +
                "🔸Extractos bancarios para demostrar solvencia económica.💰\n" +
                "🔸Formulario de solicitud formal de VISA de nuestra Agencia.\n\n" +
                "*_Nosotros nos encargamos de todo._*🤓\n\n" + 
                "Acompañamiento durante la solicitud, agendamiento de citas, diligenciamiento de formularios, solicitud i-20, envío, recepción, seguimiento de documentos y preparación para la entrevista consular de 1Hr.\n\n" +
                "Los costos generales son los siguientes en Moneda USD:\n" +
                "✓ Inscripción al College en USA $100-$200 USD aprox.\n" +
                "✓ Pago Embajada Americana $185 USD\n" +
                "✓ Pago SEVIS $350 USD\n" +
                "✓ Trámite y Asesoría $90 USD.\n" +
                "*📑Traducción De Documentos y Certificados adicionales. (Solo si se requiere)\n" +
                "*🩺Seguro Medico Internacional para estudiantes (Sugerido)\n\n" +
                "Deseas ser contactad@ por una de nuestras asesoras? 👩🏻‍💻\n" +
                "(Por favor escribe Si o No)" ) 
                break;

            case 'B':
                sendMessage(from,"VISA DE ESTUDIANTE 👨🏼‍🎓\n" +
                "CANADA 🇨🇦\n" +
                "Para solicitar tu VISA hacia CANADA necesitas:\n" +
                "🔸Foto de pasaporte vigente. 🪪\n" +
                "🔸Si cuentas con VISA USA 🇺🇲, añadir foto con sellos\n" +
                "🔸Una foto tuya 📸 en fondo blanco actual.👤\n" +
                "🔸Extractos bancarios para demostrar solvencia económica.💰\n" +
                "🔸Formulario de solicitud formal de VISA de nuestra Agencia.\n\n" +
                "*_Nosotros nos encargamos de todo._*🤓\n\n" +
                "Acompañamiento durante la solicitud agendamiento de citas, diligenciamiento de formularios, solicitud LOA, envío, recepción, seguimiento de documentos, carta de intención y su preparación.\n\n" +
                "Los costos generales son los siguientes en Moneda CAD:\n" +
                "✓ Inscripción al College de CANADA $180 USD CAD. Aprox\n" +
                "✓ Pago Embajada Canada. $180 CAD\n" +
                "✓ Pago Biométricos $85  CAD\n" +
                "✓ Trámite y Asesoría $130  CAD\n" +
                "*📑Traducción De Documentos y Certificados adicionales.\n" +
                "*📚Pago anticipado de tu programa de idiomas x 6 meses\n" +
                "*🩺Seguro Medico Internacional para estudiantes Obligatorio.\n\n" +
                "Deseas ser contactad@ por una de nuestras asesoras? 👩🏻‍💻\n" +
                "(Por favor escribe Si o No)")
                break;
            case 'C':
                sendMessage(from, "VISA DE ESTUDIANTE👨🏼‍🎓\n" +
                "AUSTRALIA🇦🇺\n" +
                "Para solicitar tu VISA hacia AUSTRALIA necesitas:\n" +
                "🔸Foto de pasaporte vigente. 🪪\n" +
                "🔸Si cuentas con VISA USA 🇺🇲, añadir foto con sellos\n" +
                "🔸Una foto tuya 📸 en fondo blanco actual.👤\n" +
                "🔸Extractos bancarios para demostrar solvencia económica.💰\n" +
                "🔸Formulario de solicitud formal de VISA de nuestra Agencia.\n\n" +
                "*_Nosotros nos encargamos de todo._*🤓\n\n" + 
                "Acompañamiento durante la solicitud, agendamiento de citas, diligenciamiento de formularios, solicitud CEO, envío, recepción, seguimiento de documentos, carta de intención y preparación de GTE.\n\n" +
                "Los costos generales son los siguientes en Moneda AUD:\n" +
                "✓ Pago ante la embajada $650 AUD\n" +
                "✓ Pago de Inscripción College $200 AUD Aprox.\n" +
                "✓ Pago Biométricos $60 AUD\n" +
                "✓ Trámite y Asesoría $200 USD AUD\n" +
                "✓ Exámenes medicos $480.000 COP\n" +
                "*📚 Pago Anticipado de tu Programa de Idiomas x 6.\n" +
                "*🩺 Seguro Medico Internacional para Estudiantes Obligatorio.\n\n" +
                "Deseas ser contactad@ por una de nuestras asesoras? 👩🏻‍💻\n" +
                "(Por favor escribe Si o No)")
                break;
            case 'D':
                sendMessage(from,"VISA DE TURISTA😎\n" +
                "USA 🇺🇸\n" +
                "Para solicitar tu VISA TURISTA A USA necesitas:\n" +
                "🔸Foto de pasaporte vigente. 🪪\n" +
                "🔸Si cuentas con VISA USA 🇺🇲, añadir foto con sellos.\n" +
                "🔸Una foto tuya 📸 en fondo blanco actual.👤\n" +
                "🔸Extractos bancarios para demostrar solvencia económica.💰\n" +
                "🔸Formulario de solicitud formal de VISA de nuestra Agencia.\n\n" +
                "*_Nosotros nos encargamos de todo._*🤓\n\n" +
                "Acompañamiento durante la solicitud, agendamiento de citas, diligenciamiento de formularios, solicitud VISA B1/B2, envío, recepción, seguimiento de documentos y preparación para la entrevista consular de 1Hr.\n\n" +
                "Los costos generales son los siguientes en Moneda USD:\n" +
                "✓ Pago Embajada Americana $185 USD\n" +
                "✓ Trámite y Asesoría $75 USD.\n\n" +
                "Deseas ser contactad@ por una de nuestras asesoras? 👩🏻‍💻\n" +
                "(Por favor escribe Si o No)")
                break;
            case 'E':
                sendMessage(from, "VISA DE TURISTA😎\n" +
                "CANADA 🇨🇦\n" +
                "Para solicitar tu VISA A CANADA necesitas:\n" +
                "🔸Foto de pasaporte vigente. 🪪\n" +
                "🔸Si cuentas con VISA USA 🇺🇲, añadir foto con sellos.\n" +
                "🔸Una foto tuya 📸 en fondo blanco actual.👤\n" +
                "🔸Extractos bancarios para demostrar solvencia económica.💰\n" +
                "🔸Formulario de solicitud formal de VISA de nuestra Agencia.\n\n" +
                "*_Nosotros nos encargamos de todo._*🤓\n\n" +
                "Acompañamiento durante la solicitud, agendamiento de citas, diligenciamiento de formularios, solicitud VISA VISITANTE TEMPORAL, envío, recepción, seguimiento de documentos y preparación de cartas de invitación e intención.\n\n" +
                "Los costos generales son los siguientes en Moneda CAD:\n" +
                "✓ Pago Embajada Canada $100 CAD\n" +
                "✓ Pago Biométricos $85  CAD\n" +
                "✓ Trámite y Asesoría $130 USD\n" +
                "✓ Traducción de Documentos y Certificados.\n\n" +
                "Deseas ser contactad@ por una de nuestras asesoras? 👩🏻‍💻\n" +
                "(Por favor escribe Si o No)")
                break;
            case 'F':
                sendMessage(from,"VISA DE TURISTA😎\n" +
                "AUSTRALIA🇦🇺 🇦\n" +
                "Para solicitar tu VISA A AUSTRALIA necesitas:\n" +
                "🔸Foto de pasaporte vigente. 🪪\n" +
                "🔸Si cuentas con VISA USA 🇺🇲, añadir foto con sellos.\n" +
                "🔸Una foto tuya 📸 en fondo blanco actual.👤\n" +
                "🔸Extractos bancarios para demostrar solvencia económica.💰\n" +
                "🔸Formulario de solicitud formal de VISA de nuestra Agencia.\n\n" +
                "*_Nosotros nos encargamos de todo._*🤓\n\n" +
                "Acompañamiento durante la solicitud, agendamiento de citas, diligenciamiento de formularios, solicitud VISA TURISTA, envío, recepción, seguimiento de documentos y preparación de cartas de invitación e intención.\n\n" +
                "Los costos generales son los siguientes en Moneda AUD:\n" +
                "✓ Pago Consular $190 AUD\n" +
                "✓ Pago Biométricos $60 AUD\n" +
                "✓ Trámite y Asesoría $140 USD\n" +
                "✓ Exámenes medicos $480.000 COP\n" +
                "✓ Traducción de Documentos y Certificados.\n\n" +
                "Deseas ser contactad@ por una de nuestras asesoras? 👩🏻‍💻\n" +
                "(Por favor escribe Si o No)")
                break;
            case 'SI':
                sendMessage(from,"Para nosotros es un placer atenderte, por favor déjanos la siguiente información para poder ayudarte con tu solicitud de VISA:\n" +
                "Nombre👤:\n" +
                "Correo Electrónico📧:\n" +
                "Destino que te interesa y tipo de visa🌏:\n\n" +
                "Pronto uno de nuestros asesores se pondrá en contacto contigo para brindarte toda la asesoría y acompañamiento necesario en el proceso.\n\n" +
                "Gracias por elegir Vertice Universal.🌐 ¡Esperamos poder ayudarte a cumplir tus planes de viaje y estadía en el extranjero!")
                completedUsers[from] = true; 
                fs.writeFileSync(completedUsersFile, JSON.stringify(completedUsers, null, 2), 'utf8');
                break;
            case 'NO':
                sendMessage(from,"Gracias por contactar con Vertice Universal. 🌐\n" +
                "Nos especializamos en brindar servicios de asesoría y acompañamiento para obtener distintos tipos de VISAS a varios destinos internacionales.\n" +
                "Si en el momento no te encuentras interesado en ninguna de las opciones anteriores, no te preocupes, estamos aquí para ayudarte en futuras oportunidades.\n" +
                "Si en el futuro cambias de opinión o tienes cualquier consulta, no dudes en contactarnos.\n\n" +
                "Recuerda que estamos disponibles para atender tus inquietudes y asistirte en cada paso del proceso.\n" +
                "Deseamos que tengas una excelente experiencia en tus planes de viaje y estadía en el extranjero.\n\n" +
                "Si en el futuro deseas recibir más información o asesoría personalizada, por favor, no dudes en contactar a nuestras representantes.\n")
                break; 
            default:
                sendMessage(from, "Hola !!\n" +
                "Te has contactado con Vertice Universal.\n" +
                "Tu punto de partida a multiples destinos. 🌏\n\n" +
                "Para nosotros es un placer atender tu solicitud, a continuación escribe el numero de la opción que deseas consultar:\n\n" +
                "1️⃣ VISA ESTUDIANTE 👨🏻‍🎓\n" +
                " 🇨🇦CANADA 🇺🇸USA 🇦🇺AUSTRALIA\n\n" +
                "2️⃣ VISA TURISTA 😎\n" +
                " 🇨🇦CANADA 🇺🇸USA 🇦🇺AUSTRALIA\n\n" +
                "3️⃣ RENOVACION🪪 VISA A USA🇺🇸\n\n" +
                "4️⃣ EXTENSION ESTADIA EN USA🇺🇸\n\n" +
                "5️⃣ REAGENDAR CITA USA 2024🇺🇸")
                
            break;        
        }
        console.log(from, body);
    });
};
const sendSticker = (to, sticker) => {
    const stickerData = MessageMedia.fromFilePath(`./mediaSend/${sticker}`, { sticker: true });
    client.sendMessage(to, stickerData);
}
const sendMedia = (to, file) => {
    const mediaFile = MessageMedia.fromFilePath(`./mediaSend/${file}`);
    client.sendMessage(to, mediaFile);
}
const sendMessage = (to, message) => {
    client.sendMessage(to,message);
}