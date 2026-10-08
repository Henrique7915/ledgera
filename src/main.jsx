import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App, { ROUTES } from './App'
import './index.css'

const path = ROUTES[window.location.pathname.replace(/\/$/, '') || '/'] ? window.location.pathname.replace(/\/$/, '') || '/' : '/'
const root = document.getElementById('root')
const tree = <App path={path} />
// A pagina ja vem pre-renderizada no build; em `npm run dev` o #root esta vazio.
if (root.hasChildNodes()) hydrateRoot(root, tree)
else createRoot(root).render(tree)
