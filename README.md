![](http://blog.inovia-conseil.fr/wp-content/uploads/2016/01/logo-react.png)

# Application React - Redux

Ce guide est là pour vous servir de référence ou vous aider à comprendre l'architecture d'un projet React ici au laboratoire de cyberjustice.

# Table des matières

- [Application React - Redux](#application-react---redux)
- [Table des matières](#table-des-matières)
- [Documentation](#documentation)
- [Installation](#installation)
- [Démarrer](#démarrer)
- [Sources](#sources)
- [Workflows](#workflows)
- [Modules](#modules)

# Documentation

Ce document vous permet de demarrer l'application. De plus, il détaille aussi l'archtecture générale de l'application.

Pour une documentation plus spécifique, veuillez vous référer au dossier suivant:

> . / docs /

Si vous ne connaissez pas React ou JavaScript, il est fortement conseillé de lire les documents détaillant toutes les technologies employées dans nos projets React. Les documents sont disponibles sur le serveur du laboratoire dans le dossier:

> DevSpace / Projets / VirtualTribunal / docs /

Bonne lecture.

# Installation

Il faut installer tous les modules **Nodejs** à l'aide de la commande suivante :

```cmd
> npm install
```

**Note 1:** Exécutez cette commande dans un terminal à la base du projet.
**Note 2:** Assurez vous d'avoir installé au préalable une version à jour de [nodejs](https://nodejs.org/en/).
**Note 3:** Pour mettre à jour _npm_, saisissez la commande `npm i npm -g` dans le terminal.

# Démarrer

Une fois les modules **Nodejs** installés, exécutez la commande suivante pour démarrer l'application :

```batch
> npm start
```

Cette commande démarre l'application dans le navigateur ( par défaut ) à l'adresse : [http://localhost:3000](http://localhost:3000).

# Sources

L'architecture générale de l'application est la suivante.

```
[.]
├── /build/                        # TODO
├── /config/                       # Configuration de l'application
├── /docs/                         # Documentation relative à l'application
├── /docs/guides/                  # Guides de bonnes pratiques
├── /node_modules/                 # Modules NodeJs
├── /src/                          # Code source de l'application
│   ├── /_helpers/                 # Methodes d'aide glabales
│   ├── /actions/                  # Actions (Redux)
│   ├── /assets/                   # Resources statiques
│   ├── /constants/                # Constantes globales à l'application
│   ├── /components/               # Composants (Redux)
│   ├── /components-anim/          # Composants dédié à l'animation.
│   ├── /components-ui/            # Composants UI.
│   ├── /localization/             # Fichiers de langues
│   ├── /modules/                  # Modules développés au laboratoire
│   ├── /reducers/                 # Reducers (Redux)
│   ├── /routes/                   # Gestion des routes de l'application
│   ├── /scss/                     # Styles SASS
│   ├── /workflows/                # Ensembles de modules (fonctionnalités)
│   ├── /config.js                 # TODO
│   ├── /configureStore.js         # Configuration du Store (Redux)
│   ├── /index.html                # Structure du document HTML
│   └── /index.js                  # Point d'entrée de l'application
├── /tools/                        # TODO
├── .babelrc                       # Configuration de babel
├── .editorconfig                  # Configuration de votre programme VS Code
├── .eslintrc                      # Configuration de eslint
├── .prettierrc                    # Configuration de prettier
├── .gitignore                     # Fichiers à ignorer par git
├── package.json                   # Liste des modules NodeJs
├── server.json                    # TODO
├── webpack.common.js              # TODO
├── webpack.dev.json               # TODO
├── webpack.prod.json              # TODO
└── README.md                      # Fichier de documentation générale
```

# Workflows

Un **Workflow** est un **Composant** de haut niveau qui regroupe un ensemble de modules.

_Note :_ Les **Workflow** sont déterminés lors de la conception de l'application. Vérifiez avec l'équipe de développement avant d'ajouter un **Workflow** à un projet en cours.

Pour plus d'information sur les **Workflows**, référez vous au fichier :

> . / docs / workflows.md

# Modules

Un **Module** est un **Composant** qui regroupe plusieurs fonctionnalités . Celui-ci gère ses propres _actions_ et ses propres _reducers_.

_Note :_ Les **Modules** sont déterminés lors de la conception de l'application. Vérifiez avec l'équipe de développement avant d'ajouter un **Module** à un projet en cours.

Pour plus d'information sur les **Modules**, référez vous au fichier :

> . / docs / modules.md
