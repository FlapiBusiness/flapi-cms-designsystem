# Set version latest LTS
FROM node:22.11.0

WORKDIR /app

# Copier uniquement package.json et package-lock.json d'abord pour optimiser le cache Docker
COPY package*.json ./

# Installer les dépendances du projet Nuxt 'src'
RUN npm install -g npm@latest && npm install

# Copier tout le contenu du contexte de build
COPY . .

# Préparer le projet Nuxt 'src' (module nuxt)
RUN npm run module:dev:prepare

WORKDIR /app/src-app

# Installer les dépendances spécifiques au projet Nuxt 'src-app' (projet nuxt comme test)
RUN npm install
