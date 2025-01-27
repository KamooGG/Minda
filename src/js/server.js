import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

// Ruta para manejar el formulario
app.post("/send-email", async (req, res) => {
    const { name, email, country, category, companyName, companyWebsite, message } = req.body;

    // Configura el transporte de Nodemailer con SMTP
    const transporter = nodemailer.createTransport({
        host: "p3plzcpnl508682.prod.phx3.secureserver.net", // Cambia esto por el host de tu servidor SMTP (como Roundcube o cualquier otro proveedor)
        port: 465, // Puede ser 587 o 465, según la configuración del servidor SMTP
        secure: true, // Si usas TLS, ponlo en false, para SSL ponlo en true
        auth: {
            user: "webpage@mindaconsulting.com", // Tu correo de usuario
            pass: "ju#EGLM=[?iP", // Tu contraseña de correo
        },
    });

    // Configura el contenido del correo
    const mailOptions = {
        from: email, // El correo que envía el mensaje
        to: "developer@mindaconsulting.com", // El correo al que se envía el mensaje
        subject: `Nuevo mensaje de ${name}`,
        html: `
      <h1>Nuevo Mensaje del Formulario</h1>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>País:</strong> ${country}</p>
      <p><strong>Categoría:</strong> ${category}</p>
      <p><strong>Empresa:</strong> ${companyName}</p>
      <p><strong>Website de la Empresa:</strong> ${companyWebsite}</p>
      <p><strong>Mensaje:</strong> ${message}</p>
    `,
    };

    // Envía el correo
    try {
        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).send("Hubo un error enviando el correo BACK" + error);
            }
            res.status(200).send("Correo enviado exitosamente" + info.response);
        });
    } catch (error) {
        console.error("Error enviando el correo:", error);
        res.status(500).send("Hubo un error enviando el correo BACK");
    }
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
