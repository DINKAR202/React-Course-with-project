
const App = () => {
  const handleCopyPath = async () => {
    const currentPath = window.location.href; // Get the current path
    
    try {
      await navigator.clipboard.writeText(currentPath); // Copy path to clipboard
      alert('Path copied to clipboard: ' + currentPath);
    } catch (error) {
      console.error('Failed to copy path:', error);
    }
  };

  return (
    <button onClick={handleCopyPath} style={styles.button}>
      Copy Path
    </button>
  );
};

const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default App;
