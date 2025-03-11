
function Item({ item}) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px',
        margin: '8px 0',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div>
          <h3 style={{ margin: '0 0 4px 0' }}>{item.title}</h3>
          <p style={{ margin: 0, color: '#666' }}>{item.description}</p>
        </div>
      </div>
    );
  }

  export default Item