import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// Ensure process is available (for environments where it's not global)
import process from 'process';
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const DISCORD_INVITE = process.env.DISCORD_INVITE;

// Redirecionamento seguro
app.get('/api/discord-invite', (req, res) => {
  if (DISCORD_INVITE) {
    res.redirect(DISCORD_INVITE);
  } else {
    res.status(404).send('Convite não disponível.');
  }
});

// Servir o frontend (Vite build)
app.use(express.static(path.join(__dirname, 'dist')));
app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});