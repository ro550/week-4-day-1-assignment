# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Overview

A small starter repository for building React applications with Vite. This project is intended for learning and assignments: it gives a minimal, working development setup (dev server, hot module replacement, and build scripts) so you can focus on building React components and learning best practices.

## Technologies Used

- JavaScript (React)
- Vite (dev server & build tool)
- ESLint (basic linting rules)
- CSS for styling
- HTML (single-page entry)

Currently, two official plugins are available for React in Vite:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## Features

- Fast development server with Hot Module Replacement (HMR)
- Minimal, easy-to-understand project structure suitable for exercises and small apps
- ESLint configuration to catch common issues early
- Build scripts for creating production bundles with Vite

## Getting Started

Prerequisites:

- Node.js (recommended LTS)
- npm or yarn

Install dependencies:

```bash
npm install
# or
# yarn install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run the linter (if configured):

```bash
npm run lint
```

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite#templates) for a TypeScript + ESLint setup.
