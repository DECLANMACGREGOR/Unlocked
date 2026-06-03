const socket = io();
let files = {};
let activePath = null;
const fileListEl = document.getElementById('file-list');
const codeEl = document.getElementById('code');
const previewEl = document.getElementById('preview');
const filePathEl = document.getElementById('file-path');

socket.on('connect', () => console.log('connected'));

socket.on('file-changed', ({ path, content }) => {
  files[path] = content;
  renderFileList();
  if (!activePath) { setActive(path); }
  if (path === activePath) updateView(path);
});

function renderFileList() {
  fileListEl.innerHTML = '';
  Object.keys(files).sort().forEach(p => {
    const d = document.createElement('div');
    d.className = 'file-item' + (p===activePath ? ' active' : '');
    // show only filename for compactness
    const short = p.split('/').pop();
    d.textContent = short;
    d.title = p;
    d.onclick = () => setActive(p);
    fileListEl.appendChild(d);
  });
}

function setActive(p) {
  activePath = p;
  renderFileList();
  updateView(p);
}

function updateView(p) {
  const code = files[p] || '';
  filePathEl.textContent = p;
  codeEl.textContent = code;
  renderPreviewFromSwift(code);
}

// Very small heuristic SwiftUI -> HTML renderer for basic controls
function renderPreviewFromSwift(src) {
  let html = '';
  const bodyMatch = src.match(/var\s+body:\s+some\s+View\s*{([\s\S]*)}/);
  const useSrc = bodyMatch ? bodyMatch[1] : src;

  // Convert Text("...") into a large heading if first Text, otherwise paragraph
  let i = 0;
  html = useSrc.replace(/Text\s*\(\s*"([\s\S]*?)"\s*\)/g, (m,t)=>{
    i++;
    if (i===1) return `<div style="font-size:44px;font-weight:800">${escapeHtml(t)}</div>`;
    return `<div style="font-size:14px;color:rgba(255,255,255,0.85)">${escapeHtml(t)}</div>`;
  });

  // Images -> emojis
  html = html.replace(/Image\s*\(\s*systemName:\s*"(.*?)"\s*\)/g, (m,t)=>`<div style="font-size:28px">${emojiForSystemName(t)}</div>`);

  // VStack/HStack -> div
  html = html.replace(/VStack\s*\{([\s\S]*?)\}/g, (m,t)=>`<div class=\"vstack\">${t}</div>`);
  html = html.replace(/HStack\s*\{([\s\S]*?)\}/g, (m,t)=>`<div class=\"hstack\">${t}</div>`);

  // Remove simple modifiers
  html = html.replace(/\.[a-zA-Z_][a-zA-Z0-9_]*\([^)]*\)/g, '');

  previewEl.innerHTML = html;
}

function escapeHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br>');
}

function emojiForSystemName(name) {
  if (/clock|time/.test(name)) return '⏰';
  if (/book|book.fill/.test(name)) return '📚';
  if (/person|person.fill/.test(name)) return '👤';
  if (/star/.test(name)) return '⭐️';
  if (/guitar/.test(name)) return '🎸';
  return '🧩';
}
