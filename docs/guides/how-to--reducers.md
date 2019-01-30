![](http://www.cyberjustice.ca/files/sites/102/header_2x-1.png)

# Table des matières

- [Prérequis](#prerequis)
- [Reducer](#reducer)

---

# Prérequis

Avant de poursuivre votre lecture, il est conseillé :

1. Installer les **snippets** JavaScript.

> [\_\_root\_\_ / docs / tips / snippets.md](../tips/snippets.md)

2. Avoir lu les différentes recommandations concernant l'importation et l'exportation d'objets JavaScript.

> [\_\_root\_\_ / docs / guides / how-to--import-export.md](./how-to--import-export.md)

---

# Reducers

Les _reducers_ de l'application doivent se nommer : `{nomDuComposant}Reducer.js`.

Ayant installé les **snippets**, vous pouvez générer votre premier conteneur avec le préfix suivant : `tmp_reducer`.

--

#### Résultat

**Fichier** : _index.js_

```js
// ======================================================
// Reducers / Component
// ======================================================

// Constants
import { COMPONENT_ACTION_TYPES } from "../actions/actions";

// Initial State
const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
```

--

**Note** : La convention de nommage change pour les _reducers_ des **modules**. Pour en apprendre d'avantage, consultez la documentation suivante.

> [\_\_root\_\_ / docs / module.md](../module.md)
