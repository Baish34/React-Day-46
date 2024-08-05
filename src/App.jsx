import { useState } from "react";
import "./App.css";

export default function App() {
  function ToggleTheme() {
    const [theme, setTheme] = useState("Light");
    return (
      <div>
        <p>Current Theme: {theme}</p>
        <button onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}>
          Toggle Theme
        </button>
      </div>
    );
  }

  function PasswordShowHide() {
    const [visibility, setVisibility] = useState(false);
    return (
      <div>
        <p>{visibility ? "Password: myPassword123" : "Password: *********"}</p>

        <button onClick={() => setVisibility(!visibility)}>
          Show/Hide Password
        </button>
      </div>
    );
  }

  function TextExpandCollapse() {
    const [expanded, setExpanded] = useState(false);
    const text =
      "This is a longer text that is typically hidden unless expanded.";
    return (
      <div>
        <p>{expanded ? text : `${text.substring(0, 20)}...`}</p>
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? "Collapse" : "Expand"}
        </button>
      </div>
    );
  }

  function ActiveTab() {
    const [activeTab, setActiveTab] = useState("Home");
    return (
      <div>
        <button onClick={() => setActiveTab("Home")}>Home</button>
        <button onClick={() => setActiveTab("Profile")}>Profile</button>
        <button onClick={() => setActiveTab("Message")}>Messages</button>
        <p>Content of {activeTab} tab.</p>
      </div>
    );
  }

  function ChangeFontSize() {
    const [fontSize, setFontSize] = useState(14);
    return (
      <div>
        <p style={{ fontSize: `${fontSize}px` }}>Adjust my font size</p>
        <button onClick={() => setFontSize(fontSize + 1)}>Increase Size</button>
        <button onClick={() => setFontSize(fontSize - 1)}>Decrease Size</button>
      </div>
    );
  }

  return (
    <main>
      <ToggleTheme />
      <hr />
      <PasswordShowHide />
      <hr />
      <TextExpandCollapse />
      <hr />
      <ActiveTab />
      <hr />
      <ChangeFontSize />
    </main>
  );
}
