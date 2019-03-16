import { connect } from "react-redux";

// Components
import CodeEditor from "./CodeEditor";
import CodeEditorNavigationComponent from "./components/CodeEditorNavigation";

const mapStateToProps = ({ editor }) => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CodeEditor);

export const CodeEditorNavigation = connect(
  mapStateToProps,
  mapDispatchToProps
)(CodeEditorNavigationComponent);
