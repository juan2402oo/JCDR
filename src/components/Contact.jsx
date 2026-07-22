import { useState } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { contactData } from '../data/contact';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      setError('Completa todos los campos para enviar el mensaje.');
      setSuccess('');
      return;
    }

    setIsSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactData.formSubmitEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
          _subject: `Nuevo mensaje desde tu portafolio: ${subject}`,
          _captcha: 'false',
          _template: 'table'
        })
      });

      if (response.ok) {
        setSuccess('¡Mensaje enviado correctamente! Te responderé pronto.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('No se pudo enviar el mensaje.');
      }
    } catch (err) {
      setError('No se pudo enviar el mensaje en este momento. Inténtalo de nuevo más tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="section">
      <div className="container contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <p className="eyebrow">Contacto</p>
          <h2>¿Tienes una propuesta, proyecto o deseas conocer más sobre mi trabajo?</h2>
          <p>Puede comunicarte conmigo mediante este formulario o a través de mis redes.</p>
          <label>
            Nombre
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre" />
          </label>
          <label>
            Correo electrónico
            <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Tu correo" />
          </label>
          <label>
            Asunto
            <input name="subject" value={formData.subject} onChange={handleChange} placeholder="Asunto" />
          </label>
          <label>
            Mensaje
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Escribe tu mensaje" rows="5" />
          </label>
          {error && <p className="form-error">{error}</p>}
          {success && <p className="form-success">{success}</p>}
          <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
          </button>
        </form>

        <aside className="contact-card">
          <h3>{contactData.name}</h3>
          <p><strong>Carrera:</strong> {contactData.career}</p>
          <p><strong>Universidad:</strong> {contactData.university}</p>
          <p><strong>Ubicación:</strong> {contactData.location}</p>
          <p><strong>Correo Personal:</strong> <a href={`mailto:${contactData.personalEmail}`}>{contactData.personalEmail}</a></p>
          <p><strong>Correo Institucional:</strong> <a href={`mailto:${contactData.institutionalEmail}`}>{contactData.institutionalEmail}</a></p>
          <div className="contact-socials">
            <a href={contactData.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href={contactData.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href={contactData.whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href={contactData.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href={`mailto:${contactData.personalEmail}`} target="_blank" rel="noreferrer" aria-label="Correo personal"><FaEnvelope /></a>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
