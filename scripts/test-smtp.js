// test-smtp.js
// ⚠️  NUNCA hagas commit de este archivo con credenciales reales
// Usa variables de entorno para las credenciales
import nodemailer from 'nodemailer';

// Lee credenciales de variables de entorno - NUNCA hardcodees passwords
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

if (!SMTP_USER || !SMTP_PASS) {
    console.error('❌ Error: Define SMTP_USER y SMTP_PASS como variables de entorno');
    console.error('   Ejemplo: $env:SMTP_USER="tu@email.com"; $env:SMTP_PASS="tu_password"; node test-smtp.js');
    process.exit(1);
}

const transporter = nodemailer.createTransport({
    host: 'smtppro.zoho.eu',
    port: 465, // o 587 si usas TLS
    secure: true, // true para SSL
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
    },
});

transporter.verify()
    .then(() => console.log('Login OK, SMTP funciona'))
    .catch(err => console.error('Error de login SMTP:', err));
