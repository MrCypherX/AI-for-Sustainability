// NourishLoop Main Application Entry Point
import './styles/style.css';
import { NourishApp } from './App.js';

let appInstance = null;

function bootstrap() {
  if (!appInstance) {
    appInstance = new NourishApp();
    window.__NOURISH_APP__ = appInstance;
    console.log('🌿 NourishLoop Web Application Initialized');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrap);
} else {
  bootstrap();
}
