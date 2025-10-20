/* 
INSTALLAZIONE E PREPARAZIONE AMBIENTE TYPESCRIPT
Prerequisito: Node.js e npm installati sulla macchina

1. Verificare versione di Node e npm
node -v
npm -v

2. Installare TypeScript globalmente (opzionale)
npm install -g typescript

3. Inizializzare progetto Node (se non creato)
npm init -y

4. Installare TypeScript nel progetto (dev dependency)
npm install --save-dev typescript

5. Creare il file di configurazione tsconfig.json automatico
npx tsc --init

6. Configurare tsconfig.json secondo necessità (esempio minimo)
cat <<EOF > tsconfig.json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist"
  },
  "include": ["src"]
}
EOF

7. Struttura cartelle: creare cartella src/ per codice TS

8. Compilare codice TypeScript in JavaScript
npx tsc

9. Eseguire codice compilato con node (esempio)
node dist/index.js

IDE consigliato: Visual Studio Code con estensione TypeScript

Nota:
- Per progetti frontend si integrano build tools con TypeScript (ex: Webpack, Vite, esbuild).
- Per progetti React si usa spesso create-react-app con template typescript.
- Per debugging e linting si usano anche ESLint e Prettier configurati con TypeScript.
*/
