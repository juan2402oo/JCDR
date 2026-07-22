import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const ChatModal = ({ project, onClose }) => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: `Hola, soy el asistente para el proyecto "${project.title}". ¿En qué te puedo ayudar sobre este sistema?` }
  ]);
  const [input, setInput] = useState('');

  const send = () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user', text: input };
    setMessages((m) => [...m, userMsg]);
    setInput('');
    // Simulate bot response
    setTimeout(() => {
      setMessages((m) => [...m, { from: 'bot', text: `Gracias por tu pregunta sobre ${project.title}. Aquí hay más detalles: (respuesta simulada).` }]);
    }, 700);
  };

  return (
    <div className="chat-modal-overlay" role="dialog" aria-modal="true">
      <div className="chat-modal">
        <div className="chat-header">
          <div>
            <strong>{project.title}</strong>
            <div className="chat-sub">Pregúntame sobre este proyecto</div>
          </div>
          <button className="chat-close" onClick={onClose} aria-label="Cerrar chat"><FaTimes /></button>
        </div>
        <div className="chat-body">
          {messages.map((m, i) => (
            <div key={i} className={`chat-msg ${m.from}`}>
              {m.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Escribe tu pregunta..." />
          <button className="btn btn-primary" onClick={send}>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;
