import React from 'react';
import { Button, Card } from '../src';

function App() {
  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '1200px', 
      margin: '0 auto',
      fontFamily: "'Courier New', 'Monaco', 'Menlo', monospace",
      background: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ 
          margin: 0, 
          fontSize: '2rem', 
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: '#1a1a1a'
        }}>
          Sam Components
        </h1>
        <p style={{ marginTop: '0.5rem', color: '#666' }}>
          Retro ASCII-styled component library
        </p>
      </header>
      
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>Buttons</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem', alignItems: 'center' }}>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>
          Docker Container Dashboard
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
          gap: '1.5rem' 
        }}>
          <Card
            variant="bordered"
            title="nginx-web-server"
            image={{
              src: 'https://via.placeholder.com/400x150/2d3748/ffffff?text=nginx',
              alt: 'nginx container',
              position: 'top',
            }}
            footer="Container ID: 7f8a9b2c3d4e | Created: 2 days ago"
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1rem' }}>
              <div>
                <strong>Image:</strong> nginx:alpine
              </div>
              <div>
                <strong>Status:</strong> <span style={{ color: '#22c55e' }}>● Running</span>
              </div>
              <div>
                <strong>Ports:</strong> 80:8080
              </div>
              <div>
                <strong>Restarts:</strong> 0
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Button size="sm" variant="outline">Logs</Button>
              <Button size="sm" variant="outline">Shell</Button>
              <Button size="sm" variant="outline">Stop</Button>
            </div>
          </Card>

          <Card
            variant="bordered"
            title="postgres-db"
            image={{
              src: 'https://via.placeholder.com/400x150/1e3a8a/ffffff?text=postgres',
              alt: 'postgres container',
              position: 'top',
            }}
            footer="Container ID: 9a8b7c6d5e4f | Created: 5 days ago"
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1rem' }}>
              <div>
                <strong>Image:</strong> postgres:15
              </div>
              <div>
                <strong>Status:</strong> <span style={{ color: '#22c55e' }}>● Running</span>
              </div>
              <div>
                <strong>Ports:</strong> 5432:5432
              </div>
              <div>
                <strong>Restarts:</strong> 1
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Button size="sm" variant="outline">Logs</Button>
              <Button size="sm" variant="outline">Shell</Button>
              <Button size="sm" variant="outline">Stop</Button>
            </div>
          </Card>

          <Card
            variant="bordered"
            title="redis-cache"
            image={{
              src: 'https://via.placeholder.com/400x150/dc2626/ffffff?text=redis',
              alt: 'redis container',
              position: 'top',
            }}
            footer="Container ID: 3c4d5e6f7a8b | Created: 1 day ago"
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1rem' }}>
              <div>
                <strong>Image:</strong> redis:7-alpine
              </div>
              <div>
                <strong>Status:</strong> <span style={{ color: '#ef4444' }}>● Stopped</span>
              </div>
              <div>
                <strong>Ports:</strong> 6379:6379
              </div>
              <div>
                <strong>Restarts:</strong> 0
              </div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Button size="sm" variant="outline">Logs</Button>
              <Button size="sm" variant="primary">Start</Button>
            </div>
          </Card>
        </div>
      </section>

      <section>
        <h2 style={{ textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>
          Project Descriptions
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', 
          gap: '1.5rem' 
        }}>
          <Card
            variant="elevated"
            image={{
              src: 'https://via.placeholder.com/300x200/1a202c/ffffff?text=Project+1',
              alt: 'Project screenshot',
              position: 'left',
            }}
          >
            <div>
              <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Retro Component Library</h3>
              <p style={{ marginBottom: '1rem', fontSize: '0.875rem' }}>
                A collection of JSX components with a retro ASCII aesthetic. Perfect
                for building dashboards, admin panels, and developer tools.
              </p>
              <div style={{ marginBottom: '1rem', fontSize: '0.75rem' }}>
                <strong>Tech Stack:</strong>
                <ul style={{ marginTop: '0.25rem', paddingLeft: '1.5rem' }}>
                  <li>TypeScript</li>
                  <li>React</li>
                  <li>CSS Modules</li>
                  <li>Vite</li>
                </ul>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Button size="sm">View Demo</Button>
                <Button size="sm" variant="outline">GitHub</Button>
              </div>
            </div>
          </Card>

          <Card
            variant="elevated"
            image={{
              src: 'https://via.placeholder.com/300x200/2d3748/ffffff?text=Project+2',
              alt: 'Project screenshot',
              position: 'right',
            }}
          >
            <div>
              <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Docker Dashboard</h3>
              <p style={{ marginBottom: '1rem', fontSize: '0.875rem' }}>
                A terminal-inspired interface for managing Docker containers with
                real-time status updates and container controls.
              </p>
              <div style={{ marginBottom: '1rem', fontSize: '0.75rem' }}>
                <strong>Features:</strong>
                <ul style={{ marginTop: '0.25rem', paddingLeft: '1.5rem' }}>
                  <li>Container monitoring</li>
                  <li>Log viewing</li>
                  <li>Resource usage</li>
                </ul>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Button size="sm">View Project</Button>
                <Button size="sm" variant="outline">Docs</Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default App;

