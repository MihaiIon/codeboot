![](http://www.cyberjustice.ca/files/sites/102/header_2x-1.png)

# Table des matières

- [Prérequis](#prerequis)
- [Conteneur](#conteneur)
- [Sections](#sections)
- [Astuces](#astuces)
  - [Connect](#connect)

---

# Prérequis

Avant de poursuivre votre lecture, il est conseillé de :

1. Installer les **snippets** JavaScript.

> [\_\_root\_\_ / docs / tips / snippets.md](../tips/snippets.md)

2. Avoir lu les différentes recommandations concernant l'importation et l'exportation d'objets JavaScript.

> [\_\_root\_\_ / docs / guides / how-to--import-export.md](./how-to--import-export.md)

---

# Conteneur

Les _containers_ doivent toujours se nommer : `index.js`.

Ayant installé les **snippets**, vous pouvez générer votre premier conteneur avec le préfix suivant : `tmp_container`.

--

#### Résultat

**Fichier** : _index.js_

```js
import { connect } from "react-redux";

// Components
import Component from "./Component";

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);
```

--

**Note 1** : Utilisez le préfix `maps` pour générer `mapStateToProps`.
**Note 2** : Utilisez le préfix `mapd` pour générer `mapDispatchToProps`.

---

# Sections

Les _containers_ ne possède pas de structure particulière. Gardez vos fichiers le plus simple possible.

Assurez-vous de traiter toute l'information dans les **actions** et le **reducer**. Le _container_ ne devrait pas être chargé.

---

# Astuces

### Connect

Évitez de passer les méthodes provenant du _container_ aux sous-composants :

```js
// Components
import ModalOverlay from "./components/ModalOverlay";
import ModalBody from "./components/ModalBody";
import ModalContent from "./components/ModalContent";
import ModalCloseBtn from "./components/ModalCloseBtn";

class Modal extends Component {
  render() {
    const { closeModal } = this.props;
    return (
      <aside className="c-modal">
        <ModalOverlay onClick={() => closeModal()} />
        <ModalBody>
          <ModalContent />
          <ModalCloseBtn onClick={() => closeModal()} />
        </ModalBody>
      </aside>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.function.isRequired
};
```

À la place, vous pouvez connecter plusieurs composants dans le _container_ :

**Fichier** : _index.js_

```js
import { connect } from "react-redux";

// Components
import Modal from "./Modal";
import ModalOverlayComponent from "./components/ModalOverlay";
import ModalCloseBtnComponent from "./components/ModalCloseBtn";

// Actions
import { close as closeModal } from "../../actions/modal";

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Modal);

export const ModalOverlay = connect(
  null,
  mapDispatchToProps
)(Modal);

export const ModalCloseBtn = connect(
  null,
  mapDispatchToProps
)(ModalCloseBtnComponent);
```

**Note 1** : Utilisez le préfix `impc` pour générer l'importation d'un sous-composant.
**Note 2** : Utilisez le préfix `exc` pour générer l'exportation d'un sous-composant.

--

**Fichier** : _Modal.js_

```js
// Components
import { ModalOverlay, ModalCloseBtn } from ".";
import ModalBody from "./components/ModalBody";
import ModalContent from "./components/ModalContent";

class Modal extends Component {
  render() {
    return (
      <aside className="c-modal">
        <ModalOverlay />
        <ModalBody>
          <ModalContent />
          <ModalCloseBtn />
        </ModalBody>
      </aside>
    );
  }
}
```
