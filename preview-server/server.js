const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');
const chokidar = require('chokidar');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Watch the project's Views folder. The Views folder lives under the inner
// ScreenTimeSkills directory in this workspace.
const WATCH_DIR = path.join(__dirname, '..', 'ScreenTimeSkills', 'Views');

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('client connected');
  sendAllFiles(socket);
});

function sendAllFiles(socket) {
  const files = getSwiftFiles(WATCH_DIR);
  files.forEach(f => {
    const content = fs.readFileSync(f, 'utf8');
    socket.emit('file-changed', { path: path.relative(path.join(__dirname, '..'), f).replace(/\\/g,'/'), content });
  });
}

function getSwiftFiles(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(getSwiftFiles(full));
    } else if (file.endsWith('.swift')) {
      results.push(full);
    }
  });
  return results;
}

const watcher = chokidar.watch(WATCH_DIR, { ignoreInitial: true, persistent: true, awaitWriteFinish: true });

watcher.on('change', file => {
  console.log('changed', file);
  const content = fs.readFileSync(file, 'utf8');
  io.emit('file-changed', { path: path.relative(path.join(__dirname, '..'), file).replace(/\\/g,'/'), content });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Preview server running at http://localhost:${PORT}`));
