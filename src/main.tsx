
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Make sure the root element exists
const rootElement = document.getElementById("root");
if (!rootElement) {
  // Create one if it doesn't exist (helps with certain embedding scenarios)
  const newRoot = document.createElement("div");
  newRoot.id = "root";
  document.body.appendChild(newRoot);
  createRoot(newRoot).render(<App />);
} else {
  createRoot(rootElement).render(<App />);
}
