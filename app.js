const { Client, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const client = new Client();
const fs = require('fs');

client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr, { small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
    listenMessage();
});

client.initialize();

const listenMessage = () => {
    client.on('message',(msg) => {
        const {from, to, body} = msg;
        const upperBody = body.toUpperCase();
        switch(upperBody){
            case '1':
                sendMessage(from, "Escoge tu proximo pais de destino como estudiante y\n"
                + "conoce sus requisitos basicos.\n"
                + "A. USA 🇺🇸\n"
                + "B. CANADA 🇨🇦\n"
                + "C. AUSTRALIA 🇦🇺")
                break;
            case '2':
                sendMessage(from, "Escoge tu próximo país de destino como turista y\n"
                + "conoce sus requisitos básicos.\n"
                + "D. USA 🇺🇸\n"
                + "E. CANADA 🇨🇦\n"
                + "F. AUSTRALIA 🇦🇺")
                break;
            case '3':
                sendMessage(from, "Deseas renovar tu VISA a los Estados Unidos. 🇺🇸\n"
                + "🔸Debes contar con que tu pasaporte tenga una vigencia superior a 6 meses.\n"
                + "🔸Si tu VISA ya venció, podrás renovarla siempre que no haya superado un periodo de 48 meses.\n"
                + "🔸Si la VISA que deseas renovar se te otorgó siendo menor de edad, tendrás que presentar entrevista consular.\n"
                + "🔸Si eres ciudadano venezolano, debes presentar entrevista consular obligatoria." )
                break;
            case '4':
                sendMessage(from, "Deseas Extender tu Estadia en USA. 🇺🇸\n"
                + "Para poder extender tu estadia en USA, lo más importante es que no hayas superado el tiempo máximo que se te permitió al ingreso.\n"
                + "Debes contar con que tu pasaporte tenga una vigencia superior a 6 meses.\n"
                + "Debes contar con fondos suficientes o un patrocinador que respalde tu solicitud para una estadia de 1 año.\n\n"
                + "Entre los beneficios que obtendrás están:\n"
                + "🔸Poder vivir legalmente dentro de los USA indefinidamente.\n"
                + "🔸Aceptar una oferta laboral en tu profesión o actividad en el futuro.\n"
                + "🔸Poder iniciar tu propio negocio.\n"
                + "🔸Y la más importante, la tranquilidad de vivir sin esconderse, entre muchas otras.")
                break;
            case 'A':
                sendMessage(from, "VISA DE ESTUDIANTE 👨🏼‍🎓\n" 
                + "USA 🇺🇸\n"
                + "Para solicitar tu VISA hacia USA necesitas:\n"
                + "🔸Foto de pasaporte vigente\n"
                + "🔸Si cuentas con visa Americana, añadir foto con sellos\n"
                + "🔸Foto en fondo blanco actualizada\n"
                + "🔸Extracto bancario de solvencia económica\n"
                + "🔸Formulario de solicitud formal de VISA de nuestra Agencia\n\n"
                + "Nosotros nos encargamos de realizarte acompañamiento durante todo el trámite,\n"
                + "agendamiento de cita, diligenciamiento de formularios, solicitud, envío, recepción,\n"
                + "seguimiento de documentos y preparación para la entrevista consular de 1Hr.\n\n"
                + "Los costos generales son los siguientes en Moneda USA Dólar:\n"
                + "✓ Inscripción al College en USA $100-$150 USD aprox.\n"
                + "✓ Pago Embajada Americana $160 USD\n"
                + "✓ Pago SEVIS $350 USD\n"
                + "✓ Trámite y Asesoría $90 USD.\n"
                + "Deseas ser contactad@ por una de nuestras asesoras? 👩🏻‍💻(Porfavor escribe Si o No)") 
                break;

            case 'B':
                sendMessage(from,"VISA DE ESTUDIANTE 👨🏼‍🎓\n"
                +"CANADA 🇨🇦\n"
                +"Para solicitar tu VISA hacia CANADA necesitas:\n"
                +"🔸Foto de pasaporte vigente. 🪪\n"
                +"🔸Si cuentas con VISA USA 🇺🇲, añadir foto con sellos\n"
                +"🔸Una foto tuya 📸 en fondo blanco actual.👤\n"
                +"🔸Extractos bancarios para demostrar solvencia económica.💰\n"
                +"🔸Formulario de solicitud formal de VISA de nuestra Agencia. 📋\n"
                +"Nosotros nos encargamos de todo.🤓 Acompañamiento durante la solicitud agendamiento de citas, diligenciamiento de formularios, solicitud, envío, recepción y seguimiento de documentos.\n"
                +"Los costos generales son los siguientes en Moneda Dólar CAD:\n"
                +"✓ Inscripción al College de CANADA $180 USD CAD. Aprox\n"
                +"✓ Pago Embajada Canada. $180 CAD\n"
                +"✓ Pago Biométricos $85 USD CAD\n"
                +"✓ Trámite y Asesoría $130 USD CAD\n"
                +"*📑Traducción De Documentos y Certificados adicionales.\n"
                +"*📚Pago anticipado de tu programa de idiomas x 6 meses\n"
                +"*🩺Seguro Medico Internacional para estudiantes Obligatorio.\n"
                + "Deseas ser contactad@ por una de nuestras asesoras? 👩🏻‍💻(Porfavor escribe Si o No)")
                break;
            case 'C':
                sendMessage(from,"VISA DE ESTUDIANTE AUSTRALIA\n"
                + "Para solicitar tu VISA hacia AUSTRALIA necesitas:\n"
                + "🔸Foto de pasaporte vigente\n"
                + "🔸Si cuentas con VISA Americana, añadir foto con sellos\n"
                + "🔸Foto en fondo blanco actualizada\n"
                + "🔸Extracto bancario de solvencia económica\n"
                + "🔸Formulario de solicitud formal de VISA de nuestra Agencia\n\n"
                + "Nosotros nos encargamos de realizarte acompañamiento durante todo el trámite,\n"
                + "agendamiento de citas, diligenciamiento de formularios, solicitud, envío, recepción y seguimiento de documentos.\n\n"
                + "Los costos generales son los siguientes en Moneda Dólar AU:\n"
                + "✓ Pago ante la embajada $650 AUD\n"
                + "✓ Pago de Inscripción College $200 AUD\n"
                + "✓ Pago Biométricos $34 USD AUD\n"
                + "✓ Trámite y Asesoría $200 USD AUD\n"
                + "*📚 Pago Anticipado de tu Programa de Idiomas x 6.\n"
                + "*🩺 Seguro Medico Internacional para Estudiantes Obligatorio.\n"
                + "Deseas ser contactad@ por una de nuestras asesoras? 👩🏻‍💻(Porfavor escribe Si o No)")
                break;
            case 'D':
                sendMessage(from,"VISA DE TURISTA USA 🇺🇸\n"
                + "Para solicitar tu VISA TURISTA A USA necesitas:\n"
                + "🔸Foto de pasaporte vigente\n"
                + "🔸Si cuentas con visa Americana, añadir foto con sellos\n"
                + "🔸Foto en fondo blanco actualizada\n"
                + "🔸Extracto bancario de solvencia económica\n"
                + "🔸Formulario de solicitud formal de VISA de nuestra Agencia\n\n"
                + "Nosotros nos encargamos de realizarte acompañamiento durante todo el trámite,\n"
                + "agendamiento de cita, diligenciamiento de formularios, solicitud, envío, recepción,\n"
                + "seguimiento de documentos y preparación para la entrevista consular de 1Hr.\n\n"
                + "Los costos generales son los siguientes en Moneda USA Dólar:\n"
                + "✓ Pago Embajada Americana $160 USD\n"
                + "✓ Trámite y Asesoría $75 USD.\n"
                + "Deseas ser contactad@ por una de nuestras asesoras? 👩🏻‍💻(Porfavor escribe Si o No)")
                break;
            case 'E':
                sendMessage(from,"VISA DE TURISTA A CANADA 🇨🇦\n"
                + "Para solicitar tu VISA A CANADA necesitas:\n"
                + "🔸Foto de pasaporte vigente\n"
                + "🔸Si cuentas con VISA Americana, añadir foto con sellos\n"
                + "🔸Foto en fondo blanco actualizada\n"
                + "🔸Extracto bancario de solvencia económica\n"
                + "🔸Formulario de solicitud formal de VISA de nuestra Agencia\n\n"
                + "Nosotros nos encargamos de realizarte acompañamiento durante todo el trámite,\n"
                + "agendamiento de citas, diligenciamiento de formularios, solicitud, envío, recepción y seguimiento de documentos.\n\n"
                + "Los costos generales son los siguientes en Moneda Dólar CAD:\n"
                + "✓ Pago Embajada Canada. $100 CAD\n"
                + "✓ Pago Biométricos $85 USD CAD\n"
                + "✓ Trámite y Asesoría $130 USD CAD\n"
                + "✓ Traducción de Documentos y Certificados..\n"
                + "Deseas ser contactad@ por una de nuestras asesoras? 👩🏻‍💻(Porfavor escribe Si o No)")
                break;
            case 'F':
                sendMessage(from,"VISA DE TURISTA A CANADA 🇨🇦\n"
                + "Para solicitar tu VISA A CANADA necesitas:\n"
                + "🔸Foto de pasaporte vigente\n"
                + "🔸Si cuentas con VISA Americana, añadir foto con sellos\n"
                + "🔸Foto en fondo blanco actualizada\n"
                + "🔸Extracto bancario de solvencia económica\n"
                + "🔸Formulario de solicitud formal de VISA de nuestra Agencia\n\n"
                + "Nosotros nos encargamos de realizarte acompañamiento durante todo el trámite,\n"
                + "agendamiento de citas, diligenciamiento de formularios, solicitud, envío, recepción y seguimiento de documentos.\n\n"
                + "Los costos generales son los siguientes en Moneda Dólar CAD:\n"
                + "✓ Pago Embajada Canada. $100 CAD\n"
                + "✓ Pago Biométricos $85 USD CAD\n"
                + "✓ Trámite y Asesoría $130 USD CAD\n"
                + "✓ Traducción de Documentos y Certificados.\n"
                + "Deseas ser contactad@ por una de nuestras asesoras? 👩🏻‍💻(Porfavor escribe Si o No)")
                break;
            case "SI":
                sendMessage(from,"Por favor déjame tu Nombre👤, Correo Electrónico📧 y Destino en un momento nos pondremos en contacto contigo.(Despues de enviarlo no es necesario seguir el flujo)")
                break;
            case "NO":
                sendMessage(from,"Esperamos que nuestra información te haya sido util.\n"
                +"Te esperamos en una próxima ocasión.")
                break;        
            default:
                sendMessage(from, "Hola !!\n"
                + "Te has contactado con Vertice Universal.\n"
                + "Tu punto de partida a multiples destinos. 🌏\n\n"
                + "Para nosotros es un placer atender tu solicitud, a continuacion escribe el numero de la opcion que deseas consultar:\n\n"
                + "1️⃣ VISA Estudiante a CANADA - USA - AUSTRALIA.\n"
                + "2️⃣ VISA Turista a CANADA - USA - AUSTRALIA.\n"
                + "3️⃣ Renovación de VISA a USA.\n"
                + "4️⃣ Extensión de Estadia en USA.\n"
                + "5️⃣ Reagendamiento Cita USA para 2023.\n"
                )
            
        }
        console.log (from, to, body);
    })
}
const sendMedia = (to, file) => {
    const mediaFile = MessageMedia.fromFilePath(`./mediaSend/${file}`);
    client.sendMessage(to, mediaFile);
}
const sendMessage = (to, message) => {
    client.sendMessage(to,message);
}