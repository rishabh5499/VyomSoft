import React, { useState, useEffect } from "react";
import JsonNode from "./JsonNode";

// const API_BASE = "http://localhost:8080/api/json";
const API_BASE = "https://api.vyomsoft.in/api/json";

function JsonViewerPage() {
  const [input, setInput] = useState("");
  const [json, setJson] = useState(null);
  const [error, setError] = useState("");

  const [isPrivate, setIsPrivate] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [shareUrl, setShareUrl] = useState("");

  const [needsAuth, setNeedsAuth] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  const [currentId, setCurrentId] = useState(null);
  const [passcodeError, setPasscodeError] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopySuccess(true);

      setTimeout(() => {
        setCopySuccess(false);
      }, 1500);
    } catch {
      setCopySuccess(false);
    }
  };  

  const isPasscodeInvalid =
    isPrivate &&
    (passcode.trim().length === 0 || passcode.trim().length < 4);

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : false;
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Load JSON from URL
  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith("/jsonViewer/")) {
      const id = path.split("/jsonViewer/")[1];
      setCurrentId(id);
      fetchData(id);
    }
  }, []);

  const fetchData = async (id, token = null) => {
    try {
      const url = token
        ? `${API_BASE}/${id}?token=${token}`
        : `${API_BASE}/${id}`;

      const res = await fetch(url);

      if (res.status === 401) {
        setNeedsAuth(true);
        return;
      }

      const data = await res.json();

      if (data?.content) {
        setInput(data.content);
        setJson(JSON.parse(data.content));
        setNeedsAuth(false);
      }
    } catch {
      console.error("Failed to load JSON");
    }
  };

  const theme = {
    background: darkMode ? "#1e1e1e" : "#f4f6f8",
    text: darkMode ? "#fff" : "#111",
    card: darkMode ? "#2d2d2d" : "#ffffff",
    border: darkMode ? "#444" : "#ddd"
  };

  const handleParse = () => {
    try {
      const parsed = JSON.parse(input);
      setJson(parsed);
      setError("");
    } catch {
      setError("Invalid JSON");
      setJson(null);
    }
  };

  const handleSave = async () => {
    try {
      JSON.parse(input);
      const res = await fetch(API_BASE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          content: input,
          privateData: isPrivate,
          token: isPrivate ? passcode : null
        })
      });

      const data = await res.json();
      const url = `${window.location.origin}/jsonViewer/${data.id}`;
      setShareUrl(url);
    } catch {
      alert("Failed to save");
    }
  };

  return (
    <div
      style={{
        background: theme.background,
        color: theme.text,
        minHeight: "100vh",
        padding: 20,
        fontFamily: "system-ui",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div style={{ width: "100%", maxWidth: 1000 }}>

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

          <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span>{darkMode ? "🌙" : "☀️"}</span>

            <div
              onClick={() => setDarkMode(!darkMode)}
              style={{
                width: 42,
                height: 22,
                background: darkMode ? "#4caf50" : "#ccc",
                borderRadius: 20,
                position: "relative",
                cursor: "pointer"
              }}
            >
              <div
                style={{
                  width: 18,
                  height: 18,
                  background: "white",
                  borderRadius: "50%",
                  position: "absolute",
                  top: 2,
                  left: darkMode ? 22 : 2,
                  transition: "0.3s"
                }}
              />
            </div>
          </label>
        </div>

        <div
          style={{
            background: theme.card,
            padding: 20,
            borderRadius: 12,
            border: `1px solid ${theme.border}`,
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            marginBottom: 20
          }}
        >
          <textarea
            rows={10}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste JSON here..."
            style={{
              width: "100%",
              boxSizing: "border-box",
              resize: "vertical",
              // maxHeight: "400px",
              background: darkMode ? "#1a1a1a" : "#fff",
              color: theme.text,
              border: `1px solid ${theme.border}`,
              borderRadius: 8,
              padding: 12,
              fontFamily: "monospace"
            }}
          />

          {/* BUTTONS */}
          <div style={{ marginTop: 12 }}>
            <button
              onClick={handleParse}
              style={{
                padding: "8px 16px",
                background: "#4caf50",
                color: "white",
                border: "none",
                borderRadius: 6,
                marginRight: 10
              }}
            >
              Parse
            </button>

            <button
              onClick={handleSave}
              disabled={isPrivate && !passcode.trim()}
              style={{
                padding: "8px 16px",
                background:
                  isPrivate && !passcode.trim() ? "#888" : "#2196f3",
                color: "white",
                border: "none",
                borderRadius: 6,
                cursor:
                  isPrivate && !passcode.trim() ? "not-allowed" : "pointer",
                opacity:
                  isPrivate && !passcode.trim() ? 0.6 : 1
              }}
            >
              Save & Share
            </button>
          </div>

          {/* PRIVATE / PUBLIC TOGGLE */}
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginTop: 12
            }}
          >
            <input
              type="checkbox"
              checked={isPrivate}
              onChange={() => {
                setIsPrivate(!isPrivate);

                // Clear passcode if switching back to public
                if (isPrivate) {
                  setPasscode("");
                }
              }}
            />
            {isPrivate ? "🔒 Private (Passcode required)" : "🔓 Public"}
          </label>

          {/* PASSCODE INPUT */}
          {isPrivate && (
            <div style={{ marginTop: 10 }}>
              <input
                type="text"
                placeholder="Enter passcode"
                value={passcode}
                onChange={(e) => {
                  const value = e.target.value;
                  setPasscode(value);

                  if (value.trim().length === 0) {
                    setPasscodeError("Passcode is required");
                  } else if (value.trim().length < 4) {
                    setPasscodeError("Passcode must be at least 4 characters");
                  } else {
                    setPasscodeError("");
                  }
                }}
                style={{
                  padding: 10,
                  width: "100%",
                  boxSizing: "border-box",
                  borderRadius: 6,
                  border: `1px solid ${passcodeError ? "red" : theme.border}`,
                  outline: "none"
                }}
              />

              {passcodeError && (
                <p
                  style={{
                    color: "#ff4d4f",
                    fontSize: 12,
                    marginTop: 6,
                    marginBottom: 0,
                    fontWeight: 500
                  }}
                >
                  {passcodeError}
                </p>
              )}
            </div>
          )}

          {shareUrl && (
            <div style={{ marginTop: 15 }}>
              <p>Share Link:</p>
              <div style={{ display: "flex", gap: 10 }}>
                <input
                  value={shareUrl}
                  readOnly
                  style={{
                    flex: 1,
                    padding: 8,
                    borderRadius: 6,
                    border: `1px solid ${theme.border}`
                  }}
                />
                <button
                  onClick={() => navigator.clipboard.writeText(shareUrl)}
                  disabled={
                    (isPrivate && !passcode.trim()) ||
                    !!passcodeError
                  }
                  style={{
                    padding: "8px 12px",
                    background: "#555",
                    color: "white",
                    border: "none",
                    borderRadius: 6
                  }}
                >
                  Copy
                </button>
              </div>
            </div>
          )}
        </div>

        {needsAuth && (
          <div style={{ marginBottom: 20 }}>
            <p>🔒 Enter passcode:</p>
            <input
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              style={{ padding: 8, marginRight: 10 }}
            />
            <button onClick={() => fetchData(currentId, accessCode)}>
              Unlock
            </button>
          </div>
        )}

        <div
          style={{
            background: theme.card,
            padding: 20,
            borderRadius: 12,
            border: `1px solid ${theme.border}`,
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
          }}
        >
          {error && <p style={{ color: "red" }}>{error}</p>}
          {!error && json && <JsonNode data={json} />}
        </div>

      </div>
    </div>
  );
}

export default JsonViewerPage;