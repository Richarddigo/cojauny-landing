// test-smtp.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtppro.zoho.eu',
    port: 465, // o 587 si usas TLS
    secure: true, // true para SSL
    auth: {
        user: 'cojauny@cojauny.com', // tu email completo
        pass: 'TU_APP_PASSWORD', // pon aquí tu SMTP_PASS real o App Password
    },
});

transporter.verify()
    .then(() => console.log('Login OK, SMTP funciona'))
    .catch(err => console.error('Error de login SMTP:', err));
