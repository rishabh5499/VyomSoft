import React, { useState, useEffect } from "react";
import JsonNode from "./JsonNode";

const API_BASE = "https://api.vyomsoft.in/api/json";

function App() {
  const [input, setInput] = useState("");
  const [json, setJson] = useState(null);
  const [error, setError] = useState("");

  // Theme
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Load JSON from URL
  useEffect(() => {
    const path = window.location.pathname;

    if (path.startsWith("/json/")) {
      const id = path.split("/json/")[1];

      fetch(`${API_BASE}/${id}`)
        .then(res => res.json())
        .then(data => {
          if (data?.content) {
            setInput(data.content);
            setJson(JSON.parse(data.content));
          }
        })
        .catch(() => {
          console.error("Failed to load JSON");
        });
    }
  }, []);

  const theme = {
    background: darkMode ? "#1e1e1e" : "#ffffff",
    text: darkMode ? "white" : "#000000",
    card: darkMode ? "#2d2d2d" : "#f5f5f5",
    border: darkMode ? "#444" : "#ccc"
  };

  const handleParse = () => {
    try {
      const parsed = JSON.parse(input);
      setJson(parsed);
      setError("");
    } catch (e) {
      setError("Invalid JSON");
      setJson(null);
    }
  };

  const handleSave = async () => {
    try {
      // validate JSON before saving
      JSON.parse(input);

      const res = await fetch(API_BASE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: input
      });

      const data = await res.json();

      const shareUrl = `${window.location.origin}/json/${data.id}`;
      window.history.pushState({}, "", `/json/${data.id}`);

      await navigator.clipboard.writeText(shareUrl);

      alert("Link copied to clipboard!");
    } catch (e) {
      alert("Invalid JSON or failed to save");
    }
  };

  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
        minHeight: "100vh",
        padding: 20,
        fontFamily: "system-ui, -apple-system, sans-serif"
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>

        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20
          }}
        >
          <h2 style={{ margin: 0 }}>JSON Viewer</h2>

          {/* Toggle */}
          <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
            <span style={{ marginRight: 8 }}>
              {darkMode ? "🌙" : "☀️"}
            </span>

            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              style={{ display: "none" }}
            />

            <div
              style={{
                width: 40,
                height: 20,
                background: darkMode ? "#4caf50" : "#ccc",
                borderRadius: 20,
                position: "relative"
              }}
            >
              <div
                style={{
                  width: 16,
                  height: 16,
                  background: "white",
                  borderRadius: "50%",
                  position: "absolute",
                  top: 2,
                  left: darkMode ? 22 : 2
                }}
              />
            </div>
          </label>
        </div>

        {/* INPUT CARD */}
        <div
          style={{
            background: theme.card,
            padding: 15,
            borderRadius: 8,
            marginBottom: 20,
            border: `1px solid ${theme.border}`
          }}
        >
          <textarea
            rows={10}
            style={{
              width: "100%",
              background: "transparent",
              color: theme.text,
              border: "none",
              outline: "none",
              fontFamily: "monospace",
              fontSize: 14
            }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste JSON here..."
          />

          <div style={{ marginTop: 10 }}>
            <button
              onClick={handleParse}
              style={{
                padding: "6px 14px",
                background: "#4caf50",
                color: "white",
                border: "none",
                borderRadius: 4,
                cursor: "pointer"
              }}
            >
              Parse
            </button>

            <button
              onClick={handleSave}
              style={{
                padding: "6px 14px",
                background: "#2196f3",
                color: "white",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
                marginLeft: 10
              }}
            >
              Save & Share
            </button>
          </div>
        </div>

        {/* OUTPUT */}
        <div
          style={{
            background: theme.card,
            padding: 15,
            borderRadius: 8,
            border: `1px solid ${theme.border}`,
            minHeight: 200
          }}
        >
          {error && <p style={{ color: "red" }}>{error}</p>}
          {!error && json && <JsonNode data={json} />}
        </div>

      </div>
    </div>
  );
}

export default App;