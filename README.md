# Password Strength Checker

A simple password strength checker built with React, TypeScript, and Vite.

## Features

- Real-time password strength meter
- Toggle password visibility
- Visual feedback for weak/strong passwords
- Responsive and modern UI

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

```sh
npm install
```

### Development

Start the development server:

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

To build for production:

```sh
npm run build
```

### Preview

To preview the production build:

```sh
npm run preview
```

## Project Structure

```
src/
  component/
    Strength.tsx      # Password strength checker component
  custom/
    useToggle.ts      # Custom hook for toggling boolean state
  App.tsx             # Main app component
  main.tsx            # Entry point
  index.css           # Global styles
```
