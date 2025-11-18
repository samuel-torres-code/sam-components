import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from './Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'elevated'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'This is a basic card with retro ASCII-style borders.',
    title: 'Card Title',
  },
};

export const WithContent: Story = {
  args: {
    title: 'Project Description',
    children: (
      <div>
        <p>
          This is a card component with a retro aesthetic. It features ASCII-style
          borders and a clean, modern layout that works great for dashboards and
          project descriptions.
        </p>
        <p style={{ marginTop: '0.5rem' }}>
          The design combines the nostalgic feel of old terminal interfaces with
          contemporary usability.
        </p>
      </div>
    ),
  },
};

export const WithImageTop: Story = {
  args: {
    title: 'Docker Container',
    image: {
      src: 'https://via.placeholder.com/400x200/4a5568/ffffff?text=Docker+Container',
      alt: 'Docker container',
      position: 'top',
    },
    children: (
      <div>
        <p><strong>Status:</strong> Running</p>
        <p><strong>Image:</strong> nginx:latest</p>
        <p><strong>Port:</strong> 8080:80</p>
        <p><strong>Uptime:</strong> 2d 14h 32m</p>
      </div>
    ),
    footer: 'Container ID: abc123def456',
  },
};

export const WithImageLeft: Story = {
  args: {
    title: 'Project Card',
    image: {
      src: 'https://via.placeholder.com/200x200/2d3748/ffffff?text=Project',
      alt: 'Project thumbnail',
      position: 'left',
    },
    children: (
      <div>
        <h4 style={{ marginTop: 0 }}>My Awesome Project</h4>
        <p>
          A description of the project goes here. This layout is perfect for
          showcasing projects with thumbnails or screenshots.
        </p>
        <div style={{ marginTop: '1rem' }}>
          <Button size="sm">View Project</Button>
        </div>
      </div>
    ),
  },
};

export const WithImageRight: Story = {
  args: {
    title: 'Dashboard Item',
    image: {
      src: 'https://via.placeholder.com/200x200/4a5568/ffffff?text=Service',
      alt: 'Service icon',
      position: 'right',
    },
    children: (
      <div>
        <h4 style={{ marginTop: 0 }}>Web Service</h4>
        <p>
          Service status and information displayed here. The image on the right
          provides visual context.
        </p>
        <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
          <li>CPU: 45%</li>
          <li>Memory: 2.1GB / 4GB</li>
          <li>Network: 1.2 MB/s</li>
        </ul>
      </div>
    ),
  },
};

export const DockerContainerCard: Story = {
  args: {
    variant: 'bordered',
    title: 'nginx-web-server',
    image: {
      src: 'https://via.placeholder.com/400x150/2d3748/ffffff?text=nginx',
      alt: 'nginx container',
      position: 'top',
    },
    children: (
      <div>
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
        <div style={{ marginTop: '1rem' }}>
          <Button size="sm" variant="outline" style={{ marginRight: '0.5rem' }}>
            Logs
          </Button>
          <Button size="sm" variant="outline">
            Shell
          </Button>
        </div>
      </div>
    ),
    footer: 'Container ID: 7f8a9b2c3d4e | Created: 2 days ago',
  },
};

export const ProjectDescriptionCard: Story = {
  args: {
    variant: 'elevated',
    image: {
      src: 'https://via.placeholder.com/300x200/1a202c/ffffff?text=Project+Screenshot',
      alt: 'Project screenshot',
      position: 'left',
    },
    children: (
      <div>
        <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Retro Component Library</h3>
        <p style={{ marginBottom: '1rem' }}>
          A collection of JSX components with a retro ASCII aesthetic. Perfect
          for building dashboards, admin panels, and developer tools.
        </p>
        <div style={{ marginBottom: '1rem' }}>
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
    ),
  },
};

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    title: 'Bordered Card',
    children: 'This card uses a double border style for extra emphasis.',
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    title: 'Elevated Card',
    children: 'This card has a shadow effect for depth.',
  },
};

