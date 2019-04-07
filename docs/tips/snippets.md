![](http://www.cyberjustice.ca/files/sites/102/header_2x-1.png)

# Table des matières

- [Description](#description)
- [Installation](#installation)
- [Javascript](#javascript)
  - [Base](#base)
  - [React](#react)
  - [Redux](#redux)
  - [Templates](#templates)
- [SASS](#sass)

# Description

Un _snippet_ est une portion réutilisable de code source ou de texte. Ceux-ci permettent de travailler plus efficacement en écrivant moins de code (à la main).

**Visual Studio Code** permet la création et l'usage de _snippets_. Il faut les installer à partir de l'onglet **Extensions** ou les créer soi-même.

Nous suggérons fortement l'usage des _snippets_ crées ici au laboratoire, car cela permet :

1. De coder plus vite.
2. D'apprendre les bonnes pratiques **React** exercées au laboratoire.
3. De générer les squelettes de plusieurs fichiers **JavaScript** et **SASS** (_templates_).

# Installation

Les _snippets_ sont disponibles automatiquement lorsque vous ouvrez **Visual Studio Code** à la racine du projet.

Les _snippets_ se situent dans le dossier suivant :

> \_\_root\_\_ / .vscode /

Pour en savoir d'avantage, une description de chaque _snippet_ est disponible ci-bas.

# Javascript

## Base

**name** : _Base :: Code Separateur_
**prefix** : `sep`
**body**:

```js
// ------------------------------------------------------
```

---

**name** : _Base :: Code Separateur 2_
**prefix** : `sep2`
**body**:

```js
// ====================================================
```

---

**name** : _Base :: Console Log_
**prefix** : `cl`
**body**:

```js
console.log($1);
$0;
```

---

**name** : _Base :: Import_
**prefix** : `impf`
**body**:

```js
import { $2 } from "${1}";
$0;
```

---

**name** : _Base :: Import Component to Connect it_
**prefix** : `impc`
**body**:

```js
import ${1:Name}Component from "./components/${1:Name}";
$0;
```

---

**name** : _Base :: Import Default_
**prefix** : `impd`
**body**:

```js
import ${2:Component} from "$1";
$0;
```

---

**name** : _Base :: Export_
**prefix** : `ex`
**body**:

```js
export const ${1:name} = $0;
```

---

**name** : _Base :: Export Default_
**prefix** : `exd`
**body**:

```js
export default $0;
```

---

**name** : _Base :: Export Default As_
**prefix** : `exda`
**body**:

```js
export { default as ${2:Component} } from "$1";
$0;
```

---

**name** : _Base :: Export Connected Component_
**prefix** : `exc`
**body**:

```js
export const ${1:Name} = connect(
  mapStateToProps,
  mapDispatchToProps
)(${1:Name}Component);
$0;
```

---

**name** : _Base :: Class Constructor_
**prefix** : `con`
**body**:

```js
constructor(props) {
  super(props);
  $0
}
```

---

**name** : _Base :: Arrow Function_
**prefix** : `fn`
**body**:

```js
$1 => $0;
```

---

**name** : _Base :: Arrow Function (with body)_
**prefix** : `fnb`
**body**:

```js
$1 => {
  $0;
};
```

---

**name** : _Base :: Arrow Function (returns objet)_
**prefix** : `fno`
**body**:

```js
$1 => ({ $2 });
$0;
```

---

**name** : _Base :: Arrow Function (dispatch)_
**prefix** : `fnd`
**body**:

```js
($1) => dispatch({${2:action}($3));$0
```

---

**name** : _Base :: For Loop_
**prefix** : `forloop`
**body**:

```js
for (let ${1:i} = ${2:0}; $1 < ${3:length}; $1 += 1) {
  const ${4:element} = ${5:array}[$1];
}
```

---

## React

**name** : _React :: Component Props_
**prefix** : `props`
**body**:

```js
this.props.$0;
```

---

**name** : _React :: Component State_
**prefix** : `state`
**body**:

```js
this.state.$0;
```

---

**name** : _React :: Destructure From Props_
**prefix** : `dfp`
**body**:

```js
const { $1 } = this.props;
$0;
```

---

**name** : _React :: Destructure From State_
**prefix** : `dfs`
**body**:

```js
const { $2 } = this.state;
$0;
```

---

**name** : _React :: Destructure From Object_
**prefix** : `dfo`
**body**:

```js
const { $2 } = $1;
$0;
```

---

**name** : _React :: Component Proptypes_
**prefix** : `cpt`
**body**:

```js
${1:${TM_FILENAME_BASE}}.propTypes = { $0 };
```

---

**name** : _React :: Component Default Props_
**prefix** : `cdp`
**body**:

```js
${1:${TM_FILENAME_BASE}}.defaultProps = { $0 };
```

---

**name** : _React :: Component Did Mount_
**prefix** : `cdm`
**body**:

```js
componentDidMount() {
  $0
}
```

---

**name** : _React :: Should Component Update_
**prefix** : `scu`
**body**:

```js
shouldComponentUpdate() {
  $0
}
```

---

**name** : _React :: Component Did Update_
**prefix** : `cdup`
**body**:

```js
componentDidUpdate() {
  $0
}
```

---

**name** : _React :: Component Will Unmount_
**prefix** : `cwun`
**body**:

```js
componentWillUnmount() {
  $0
}
```

---

## Redux

**name** : _Redux :: Dispatch_
**prefix** : `dispatch`
**body**:

```js
dispatch(${1:action}($0));
```

---

**name** : _Redux :: Map State to Props_
**prefix** : `maps`
**body**:

```js
const mapStateToProps = ({ $1 }) => ({ $0 });
```

---

**name** : _Redux :: Map Dispatch to Props_
**prefix** : `mapd`
**body**:

```js
const mapDispatchToProps = ({ $1 }) => ({ $0 });
```

---

**name** : _React :: Get Component Modifiers_
**prefix** : `cgm`
**body**:

```js
getComponentModifiers() {
  const { $2 } = this.${1:props};
  let modifiers = ${0:""};
  return modifiers;
}
```

---

## Templates

**name** : _Template :: React Component_
**prefix** : `t_component`
**body**:

```js
import React, { Component } from "react";
import PropTypes from "prop-types";

class ${1:${TM_FILENAME_BASE}} extends Component {
  render() {
    return (
      <${4:div} className="${3:c}-$2">
        $0
      </${4:div}>
    );
  }
}

${1:${TM_FILENAME_BASE}}.propTypes = {};

export default ${1:${TM_FILENAME_BASE}};
```

---

**name** : _Template :: Redux Container_
**prefix** : `t_container`
**body**:

```js
import { connect } from "react-redux";

// Components
import ${1:Component} from "./${1:Component}";

const mapStateToProps = ({ $2 }) => ({$3});

const mapDispatchToProps = dispatch => ({$0});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(${1:Component});
```

---

**name** : _Template :: Redux Action_
**prefix** : `t_action`
**body**:

```js
// ====================================================
// Actions / ${TM_FILENAME_BASE/([a-z])/${1:/upcase}/}
// ====================================================

// Constants
import { ${TM_FILENAME_BASE/(.*)/${1:/upcase}/}_ACTION_TYPES } from "./actions";

// Actions
// ====================================================

export const ${3:action} = () => ({$0});
```

---

**name** : _Template :: Redux Action (Module)_
**prefix** : `t_action_module`
**body**:

```js
// ====================================================
// Modules / ${TM_DIRECTORY/(?:.*)modules\\W([a-zA-Z]*)(?:.*)/$1/} / Core / Actions
// ====================================================

// Constants
export const ACTION_TYPES = {
  $1
};

// Actions
// ====================================================

export const ${3:action} = () => ({$0});
```

---

**name** : _Template :: Redux Reducer_
**prefix** : `t_reducer`
**body**:

```js
// ====================================================
// Reducers / ${TM_FILENAME_BASE/([a-z]*)(?:.*)/${1:/capitalize}/}
// ====================================================

// Constants"
import { ${TM_FILENAME_BASE/([a-z]*).*/${1:/upcase}/}_ACTION_TYPES } from "../actions/actions";

// Initial State
const initialState = {$0};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
```

---

**name** : _Template :: Redux Reducer (Module)_
**prefix** : `t_reducer_module`
**body**:

```js
// ====================================================
// Modules / ${TM_DIRECTORY/(?:.*)modules\\W([a-zA-Z]*)(?:.*)/$1/} / Core / Reducer
// ====================================================

// Constants"
import { ACTION_TYPES } from "./actions";

// Initial State
const initialState = { $0 };

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
```

# SASS

**name** : _Base :: Code Separator_
**prefix** : `sep`
**body**:

```js
// ====================================================
```

---

**name** : _Base :: Formated Variable_
**prefix** : `var`
**body**:

```js
$${1:${TM_FILENAME_BASE/_(.*)/$1/}}--${2:prop-name}: $0;
```

---

**name** : _Darken Color_
**prefix** : `darken`
**body**:

```js
darken($${1:var-name}, ${0:10}%);
```

---

**name** : _Lighten Color_
**prefix** : `ligthen`
**body**:

```js
lighten($${1:var-name}, ${0:10}%);
```

---

**name** : _Template :: SASS File_
**prefix** : `t_sass`
**body**:

```js
// ====================================================================================
// ${TM_DIRECTORY/.*scss\\W([a-z]*)/${1:/capitalize}/} / ${TM_FILENAME_BASE/_(.*)/${1:/capitalize}/}
// ====================================================================================

.${2:c}-${TM_FILENAME_BASE/_(.*)/$1/} {$0}
```

---
