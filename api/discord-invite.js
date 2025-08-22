// If running in an environment where 'process' is not defined, import it:
import process from 'process';

export default function handler(req, res) {
  const invite = process.env.DISCORD_INVITE;
  if (invite) {
    res.writeHead(302, { Location: invite });
    res.end();
  } else {
    res.statusCode = 404;
    res.end('Convite não disponível.');
  }
}