![](http://www.cyberjustice.ca/files/sites/102/header_2x-1.png)

# Table des matières

- [Prérequis](#prérequis)
- [Principe](#principe)
- [AnimatedComponent](#animatedcomponent)
  - [Utilisation](#utilisation)
  - [Propriétés](#propriétés)
  - [Steps](#Steps)

# Prérequis

Avant de poursuivre votre lecture, il est conseillé de :

1. Lire la documentation portant sur l'écriture des styles **SASS**.

> [\_\_root\_\_ / docs / guides / how-to--SASS.md](./how-to--SASS.md)

2. Lire la documentation portant sur l'approche **BEM**.

> [\_\_root\_\_ / docs / guides / how-to--BEM.md](./how-to--BEM.md)

3. Lire la documentation portant sur l'approche **ITCSS**.

> [\_\_root\_\_ / docs / guides / how-to--ITCSS.md](./how-to--ITCSS.md)

---

# Principe

Lorsque l'on veut animer un élément, il faut être capable de :

1. Positionner l'élément avant de l'afficher (fondu, déplacement, etc.).
2. Animer l'élément à partir de sa position initiale.
2. Animer l'élément en plusieurs séquences (**steps**).
4. Contrôler l'état de l'élément animé (**isAnimated**).

Pour simplifier le processus, nous avons développé un composant qui offre toutes les fonctionnalités citées ci-haut : **AnimatedComponent**.

---

# AnimatedComponent

Vous pouvez trouver le composant **AnimatedComponent** ici.

> \_\_root\_\_ / src / components-anim / AnimatedComponent.js

Ce composant possède aussi un fichier **SASS**.

> \_\_root\_\_ / src / scss / objects / _animated-component.scss 

**Note** : Il n'est pas permis de modifier ce composant sans le consentement du directeur technique.

---

### Utilisation

JavaScript

```js
import react, { Component } from "react";

// Components
import { AnimatedComponent as Anim } from "../../components-anim";

class Example extends Component {
  render() {
    const customDelay = 400;
    const customProps = { onClick: () => console.log("click!") };
    return (
      <Anim 
        wrapper="article" 
        className="c-example" 
        delay={customDelay}
        customProps={customProps}
      >
        <span className="c-example_content">
          Content
        </span>
      </Anim>
    );
  }
}
```

SASS

```scss
$size: 400px;
$speed: 0.3s;

.c-example {
  width: $size;
  height: $size / 2;
  
  opacity: 0;
  background-color: red;
  transition: opacity $speed ease-out;
  
  // Animation
  &.-animate {
    opacity: 1;
  }
}

.c-example_content {
  color: blue;
  transition: color $speed ease-out;
  
  // Animation (parent)
  .-animate & {
    color: yellow;
    transition-delay: $speed * 2;
  }
}
```

**Note** : Le composant **AnimatedComponent** possède aussi la classe `.-show`. Celle-ci est active lorsque la propriété _**isVisible**_ (du composant) vaut `true`.

---

### Propriétés

| Name | Default Value | Description |
|---|---|---|
| wrapper | `div` | The component's tag name |
| className | `""` | The component's class |
| isDelay | `true` | If `true`, applies a delay before the `.-animate` class is added |
| isVisible | `true` | If `true`, sets the CSS _**visibibility**_ property to `visible`
| delay | DEFAULT_VALUE | The delay before the `.-animate` class is added
| step | `0` | The component's current step in the animation sequence (see [Steps](#steps) section)
| customProps | `{}` | The component's custom properties

---

### Steps

Il est possible de créer une séquence d'animations en utilisant la propriété `step`. Regardons un exemple au niveau des styles.

```scss
.c-example {
  color: red;
  transition: color 1s ease;

  &.-animate.-0 {
    color: orange;
  }
  &.-animate.-1 {
    color: yellow;
  }
  &.-animate.-2 {
    color: green;
  }
  &.-animate.-3 {
    color: blue;
  }
  // ...
}
```
La propriété `step` doit être fournie au composant **AnimatedComponent**.

```js
render() {
  const step = this.computeAnimationStep();
  return (<AnimatedComponent step={step} />)
}
```

Utilisez une fonction nommée `computeAnimationStep` pour obtenir le `step` courant.