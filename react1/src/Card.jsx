function Card({ title, children }) {
    return (
      <div style={{ 
        border: '1px solid #ccc', 
        borderRadius: '8px',
        padding: '16px',
        margin: '16px',
        maxWidth: '400px'
      }}>
        <h2 style={{ marginTop: 0, marginBottom: '16px' }}>{title}</h2>
        <div className="card-content">
          {children}
        </div>
      </div>
    );
  }

  export default Card