// In local dev, this stays empty and Vite's proxy (vite.config.js) forwards
// /api requests to http://localhost:5000. In production, set VITE_API_URL
// in your hosting provider's environment variables to your deployed
// backend's URL, e.g. https://bems-institute-api.onrender.com
export const API_BASE = import.meta.env.VITE_API_URL || ''
