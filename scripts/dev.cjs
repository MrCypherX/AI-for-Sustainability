const { spawn } = require('child_process');
const path = require('path');

console.log(`
=====================================================
  🌿 Starting NourishLoop Full-Stack Environment
=====================================================
  Frontend: http://localhost:5173
  Backend:  http://localhost:5000
  API:      http://localhost:5000/api/health
=====================================================
`);

const backend = spawn('npm', ['run', 'dev'], {
  cwd: path.resolve(__dirname, '../backend'),
  stdio: 'inherit',
  shell: true
});

const frontend = spawn('npm', ['run', 'dev'], {
  cwd: path.resolve(__dirname, '../frontend'),
  stdio: 'inherit',
  shell: true
});

function cleanup() {
  console.log('\nShutting down NourishLoop servers...');
  backend.kill();
  frontend.kill();
  process.exit(0);
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
