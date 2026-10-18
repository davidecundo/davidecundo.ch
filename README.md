# davidecundo.ch

Der Quelltext meiner persönlichen Website [davidecundo.ch](https://davidecundo.ch) (noch nicht online): wer ich bin, woran ich arbeite und wie ich mit KI baue.

Ich bin kein Entwickler. Die Seite haben KI-Agenten gebaut, nach den Regeln aus meinem Repo [mit-ki-bauen](https://github.com/davidecundo/mit-ki-bauen): Sie arbeiten nur über Pull Requests, jeder PR ist klein und auf Deutsch erklärt, und nichts wird gemergt oder veröffentlicht, bevor ich es geprüft und freigegeben habe.

## Stack

- [Astro](https://astro.build) (statisch) und [Tailwind CSS](https://tailwindcss.com)
- Gehostet auf Cloudflare Pages
- Nur Deutsch, kein Blog, kein Tracking

## Lokal starten

Du brauchst Node.js 22 (siehe `.nvmrc`).

```sh
npm ci            # Pakete installieren
npm run dev       # lokal ansehen auf http://localhost:4321
npm run check     # Code prüfen
npm run build     # fertige Website in den Ordner dist/ bauen
```

## Wo was steht

- `src/config/site.ts`: Name, E-Mail und Social Links
- `src/content/home.ts`: alle Texte der Startseite
- `src/pages/`: eine Datei pro Seite
- `scripts/check-content.mjs` und `content-guards.json`: die automatische Prüfung in der CI (kein scharfes S, keine Platzhalter auf der fertigen Seite)

Texte in `[eckigen Klammern]` im Quelltext sind Platzhalter und werden auf der Seite nie angezeigt.

## Lizenz

Der Code steht unter der MIT-Lizenz (siehe `LICENSE`). Texte und Inhalte gehören mir und sind davon ausgenommen.
