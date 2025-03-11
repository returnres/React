// Componente Button che utilizza children per il testo del pulsante
function Button({ children, onClick }) {
    return (
      <button 
        onClick={onClick}
        style={{
          backgroundColor: '#0077ff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '8px 16px',
          cursor: 'pointer'
        }}
      >
        {children}
      </button>
    );
  }

  export default Button;