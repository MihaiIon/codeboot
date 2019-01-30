import { connect } from "react-redux";

// Impoer component
import App from "./App";

// import Actions
import * as appActions from "../../actions/app";

const mapStateToProps = ({ app }) => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
