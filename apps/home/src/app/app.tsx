import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react';
// import NxWelcome from './nx-welcome';

export function App() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(prev => !prev);
  };

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '24px',
      backgroundColor: '#f7fafc',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <header style={{
        marginBottom: '16px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '1.875rem',
          fontWeight: '700',
          color: '#4f46e5'
        }} aria-label="Welcome to Home Page">
          Welcome to Home!
        </h1>
        <h2 style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          color: '#4a5568'
        }}>
          Powered by React
          <span 
            style={{
              display: 'inline-block',
              marginLeft: '8px',
              fontSize: '0.75rem',
              color: '#61dafb',
              backgroundColor: '#1a202c',
              padding: '2px 6px',
              borderRadius: '4px',
              verticalAlign: 'middle',
              cursor: 'default'
            }}
            title="Built with React"
          >
            React
          </span>
        </h2>
      </header>
      <nav aria-label="Breadcrumb" style={{
        marginBottom: '16px',
        fontSize: '0.875rem',
        color: '#6b7280'
      }}>
        <span style={{ fontWeight: '500' }}>Shell</span> →{' '}
        <span style={{ fontWeight: '500', color: '#4f46e5' }}>Home</span>
      </nav>
      <main>
        <p style={{
          color: '#4a5568',
          marginBottom: '16px'
        }}>
          This is a React web component seamlessly integrated into an Angular application using Module Federation.
        </p>
        <button
          onClick={toggleDetails}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '8px 16px',
            backgroundColor: '#4f46e5',
            color: '#ffffff',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#4338ca'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4f46e5'}
          onFocus={(e) => e.currentTarget.style.outline = '2px solid #6366f1'}
          onBlur={(e) => e.currentTarget.style.outline = 'none'}
          aria-expanded={showDetails}
          aria-controls="details-section"
        >
          {showDetails ? 'Hide' : 'Show'} Details
        </button>
        {showDetails && (
          <div
            id="details-section"
            style={{
              marginTop: '16px',
              padding: '16px',
              backgroundColor: '#ffffff',
              borderRadius: '6px',
              border: '1px solid #e5e7eb'
            }}
            role="region"
            aria-live="polite"
          >
            <p style={{ color: '#4a5568' }}>
              Module Federation enables dynamic loading of this React component, ensuring modularity and scalability across frameworks.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export function defineReactWebComponent() {
  class ReactWebComponent extends HTMLElement {
    private root: ReturnType<typeof createRoot> | null = null;

    connectedCallback() {
      this.root = createRoot(this);
      this.root.render(<App />);
    }

    disconnectedCallback() {
      this.root?.unmount();
      this.root = null;
    }
  }

  if (!customElements.get('home-react')) {
    customElements.define('home-react', ReactWebComponent);
  }
}

defineReactWebComponent();
export default App;