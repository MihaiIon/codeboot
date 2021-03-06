import React from "react";

// Components
import ConsoleInput from "./components/ConsoleInput";
import ClearButton from "./components/ConsoleClearButton";

// Contexts
import { AppContext } from "../App";

function Console() {
  return (
    <AppContext.Consumer>
      {({ consoleHistory, consoleOutput }) => (
        <section className="c-console">
          <div className="c-console_body">
            <ConsoleInput history={consoleHistory} />
          </div>
          <aside className="c-console_aside">
            <h1 className="c-console_title">Console</h1>
            <footer className="c-console_aside_footer">
              <ClearButton clear={() => null} />
            </footer>
          </aside>
        </section>
      )}
    </AppContext.Consumer>
  );
}

export default Console;
