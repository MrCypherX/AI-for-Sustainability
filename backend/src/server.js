import app from './app.js';
import { config } from './config/config.js';

const PORT = config.port;

const server = app.listen(PORT, () => {
  console.log(`
=====================================================
  🌿 NourishLoop Full-Stack Backend Service
=====================================================
  Status:  Running
  Port:    ${PORT}
  URL:     http://localhost:${PORT}
  API:     http://localhost:${PORT}/api/health
  Roles:   Donor | NGO | Volunteer | Admin
=====================================================
  `);
});

export default server;
