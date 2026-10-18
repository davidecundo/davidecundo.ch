# AGENTS.md – Regeln für alle Agents in diesem Repo

Dieses Repo ist die persönliche Website von Davide Cundò. Davide ist kein Programmierer. Alles muss für ihn ohne Fachwissen nachvollziehbar sein.

## Arbeitsweise

- Arbeite nur über Pull Requests. Nie direkt auf `main` pushen.
- Ein PR = eine Sache. Lieber zwei kleine als ein grosser.
- PR-Titel in einfachem Deutsch. Ganz oben im PR-Text: Was ändert sich, warum, Risiko, so prüfen, was nach dem Merge passiert, Empfehlung. Technische Details eingeklappt in `<details>`.
- Einen PR erst als «ready» markieren, wenn die CI grün ist.
- Vor jedem PR lokal: `npm ci && npm run check && npm run build`.

## Nie ohne Davides ausdrückliches OK

- Mergen, deployen, Repos oder Branches löschen, Git-History umschreiben.
- Deploy macht ausschliesslich Davide. Agents ändern keine Hosting-Einstellungen.

## Sicherheit

- Keine Secrets, Passwörter oder Zugangsschlüssel im Repo, in PRs oder in Logs.
- `.env`-Dateien nie lesen und nie committen.

## Inhalte

- Deutsch (Schweiz): immer «ss», nie das scharfe S. Besucher werden mit «du» angesprochen.
- Code, Dateinamen und Bezeichner bleiben Englisch.
- Keine erfundenen Zahlen, Kunden, Zitate oder Behauptungen.
- Nicht freigegebene Texte bleiben als Platzhalter im Quelltext und werden nie angezeigt (`src/lib/placeholder.ts`).
