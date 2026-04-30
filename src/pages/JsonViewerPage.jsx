import React, { useState, useEffect } from "react";
import JsonNode from "./JsonNode";

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
  const [showPasscode, setShowPasscode] = useState(false);
  const [authError, setAuthError] = useState("");

  const APP_NAME = "VyomJSON";

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : false;
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    document.title = `${APP_NAME} | Secure JSON Viewer`;
  }, []);

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
      const url = token ? `${API_BASE}/${id}?token=${token}` : `${API_BASE}/${id}`;
      const res = await fetch(url);
  
      if (res.status === 401) {
        setNeedsAuth(true);
        if (token) setAuthError("Invalid passcode. Please try again.");
        return;
      }
  
      const data = await res.json();
  
      if (data?.content) {
        setInput(data.content);
        setJson(JSON.parse(data.content));
        setNeedsAuth(false);
        setAuthError(""); // Clear error on success
      }
    } catch {
      console.error("Failed to load JSON");
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch {
      setCopySuccess(false);
    }
  };

  const theme = {
    background: darkMode ? "#0f172a" : "#f8fafc",
    text: darkMode ? "#f1f5f9" : "#1e293b",
    card: darkMode ? "#1e293b" : "#ffffff",
    border: darkMode ? "#334155" : "#e2e8f0",
    accent: "#3b82f6",
    success: "#22c55e",
    error: "#ef4444"
  };

  const handleParse = () => {
    try {
      const parsed = JSON.parse(input);
      setJson(parsed);
      setError("");
    } catch {
      setError("Invalid JSON format. Please check your syntax.");
      setJson(null);
    }
  };

  const handleSave = async () => {
    try {
      JSON.parse(input);
      const res = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: input,
          privateData: isPrivate,
          token: isPrivate ? passcode : null
        })
      });
      const data = await res.json();
      setShareUrl(`${window.location.origin}/jsonViewer/${data.id}`);
    } catch {
      alert("Please enter valid JSON before saving.");
    }
  };

  const buttonStyle = (bg) => ({
    padding: "10px 20px",
    background: bg,
    color: "white",
    border: "none",
    borderRadius: 8,
    cursor: "pointer",
    fontWeight: "600",
    transition: "all 0.2s",
    display: "flex",
    alignItems: "center",
    gap: "8px"
  });

  return (
    <div style={{
      background: theme.background,
      color: theme.text,
      minHeight: "100vh",
      padding: "40px 20px",
      fontFamily: "'Inter', system-ui, sans-serif",
      transition: "background 0.3s ease"
    }}>
      <div style={{ width: "100%", maxWidth: 900, margin: "0 auto" }}>
        
        {/* HEADER */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
        <div>
          <h1 style={{ margin: 0, fontSize: "24px", fontWeight: "800", letterSpacing: "-0.5px" }}>
            {darkMode ? "💠" : "🔷"} {APP_NAME.slice(0, 4)}<span style={{ color: theme.accent }}>{APP_NAME.slice(4)}</span>
          </h1>
          <p style={{ margin: "4px 0 0", opacity: 0.6, fontSize: "14px" }}>Visualize and share your data securely.</p>
        </div>

          <button 
            onClick={() => setDarkMode(!darkMode)}
            style={{
              background: theme.card,
              border: `1px solid ${theme.border}`,
              padding: "8px 12px",
              borderRadius: "12px",
              cursor: "pointer",
              fontSize: "18px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)"
            }}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* INPUT SECTION */}
        <div style={{
          background: theme.card,
          padding: "24px",
          borderRadius: "16px",
          border: `1px solid ${theme.border}`,
          boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
          marginBottom: "24px"
        }}>
          <textarea
            rows={12}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='{ "type": "awesome", "status": "ready" }'
            style={{
              width: "100%",
              boxSizing: "border-box",
              resize: "vertical",
              background: darkMode ? "#0f172a" : "#fcfcfc",
              color: theme.text,
              border: `2px solid ${theme.border}`,
              borderRadius: "12px",
              padding: "16px",
              fontFamily: "'Fira Code', monospace",
              fontSize: "14px",
              outline: "none",
              transition: "border-color 0.2s"
            }}
            onFocus={(e) => e.target.style.borderColor = theme.accent}
            onBlur={(e) => e.target.style.borderColor = theme.border}
          />

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px", flexWrap: "wrap", gap: "15px" }}>
            <div style={{ display: "flex", gap: "12px" }}>
              <button onClick={handleParse} style={buttonStyle(theme.success)}>
                Parse JSON
              </button>
              <button 
                onClick={handleSave} 
                disabled={isPrivate && !passcode.trim()}
                style={{
                  ...buttonStyle(theme.accent),
                  opacity: (isPrivate && !passcode.trim()) ? 0.5 : 1
                }}
              >
                Save & Share
              </button>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "14px", fontWeight: "500" }}>
                <input
                  type="checkbox"
                  checked={isPrivate}
                  onChange={() => {
                    setIsPrivate(!isPrivate);
                    if (isPrivate) setPasscode("");
                  }}
                  style={{ width: "18px", height: "18px", cursor: "pointer" }}
                />
                {isPrivate ? "🔒 Private" : "🔓 Public"}
              </label>

              {isPrivate && (
                <div style={{ marginTop: 10, position: "relative" }}>
                  <input
                    type={showPasscode ? "text" : "password"}
                    placeholder="Enter passcode (min 4 chars)"
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
                      padding: "12px 45px 12px 12px", // Extra right padding for the icon
                      width: "100%",
                      boxSizing: "border-box",
                      borderRadius: "8px",
                      border: `1px solid ${passcodeError ? theme.error : theme.border}`,
                      background: theme.background,
                      color: theme.text,
                      fontSize: "14px",
                      outline: "none",
                      transition: "border-color 0.2s"
                    }}
                  />
                  
                  {/* EYE ICON TOGGLE */}
                  <button
                    type="button"
                    onClick={() => setShowPasscode(!showPasscode)}
                    style={{
                      position: "absolute",
                      right: "12px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "16px",
                      padding: "5px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0.6,
                      color: theme.text
                    }}
                  >
                    {showPasscode ? "👁️" : "🙈"}
                  </button>

                  {passcodeError && (
                    <p style={{
                        color: theme.error,
                        fontSize: "12px",
                        marginTop: "6px",
                        fontWeight: "500"
                      }}>
                      {passcodeError}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {shareUrl && (
            <div style={{ 
              marginTop: "20px", 
              padding: "16px", 
              background: darkMode ? "rgba(59, 130, 246, 0.1)" : "#eff6ff", 
              borderRadius: "12px",
              border: `1px dashed ${theme.accent}`
            }}>
              <p style={{ margin: "0 0 8px 0", fontSize: "12px", fontWeight: "700", color: theme.accent, textTransform: "uppercase" }}>Your Shareable Link</p>
              <div style={{ display: "flex", gap: "10px" }}>
                <input
                  value={shareUrl}
                  readOnly
                  style={{
                    flex: 1,
                    padding: "10px",
                    borderRadius: "8px",
                    border: `1px solid ${theme.border}`,
                    background: theme.card,
                    color: theme.text,
                    fontSize: "13px"
                  }}
                />
                <button
                  onClick={handleCopy}
                  style={{
                    ...buttonStyle(copySuccess ? theme.success : "#64748b"),
                    padding: "0 15px",
                    fontSize: "13px"
                  }}
                >
                  {copySuccess ? "✓ Copied" : "Copy"}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* AUTH FOR PRIVATE VIEW */}
        {needsAuth && (
          <div style={{ 
            textAlign: "center", 
            padding: "40px", 
            background: theme.card, 
            borderRadius: "16px", 
            marginBottom: "24px",
            border: `2px solid ${authError ? theme.error : theme.accent}`,
            transition: "all 0.3s ease"
          }}>
            <h3 style={{ margin: "0 0 16px 0" }}>🔒 This JSON is Protected</h3>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexDirection: "column", alignItems: "center" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <input
                  type="password"
                  placeholder="Enter passcode"
                  value={accessCode}
                  onChange={(e) => {
                    setAccessCode(e.target.value);
                    if (authError) setAuthError(""); // Clear error while typing
                  }}
                  style={{ 
                    padding: "10px", 
                    borderRadius: "8px", 
                    border: `1px solid ${authError ? theme.error : theme.border}`,
                    outline: "none",
                    background: theme.background,
                    color: theme.text
                  }}
                />
                <button 
                  onClick={() => fetchData(currentId, accessCode)} 
                  style={buttonStyle(theme.accent)}
                >
                  Unlock Data
                </button>
              </div>
              
              {/* WRONG CODE MESSAGE */}
              {authError && (
                <p style={{ 
                  color: theme.error, 
                  fontSize: "14px", 
                  marginTop: "12px", 
                  fontWeight: "600",
                  animation: "shake 0.2s ease-in-out 0s 2" // Optional: add a CSS shake
                }}>
                  {authError}
                </p>
              )}
            </div>
          </div>
        )}

        {/* VIEWER SECTION */}
        <div style={{
          background: theme.card,
          padding: "24px",
          borderRadius: "16px",
          border: `1px solid ${theme.border}`,
          boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          minHeight: "200px"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px", alignItems: "center" }}>
             <span style={{ fontSize: "12px", fontWeight: "700", opacity: 0.5, textTransform: "uppercase" }}>JSON Output</span>
             {json && <span style={{ fontSize: "11px", background: theme.background, padding: "4px 8px", borderRadius: "4px" }}>Valid Object</span>}
          </div>
          
          {error && <div style={{ color: theme.error, padding: "20px", textAlign: "center", fontWeight: "500" }}>{error}</div>}
          {!error && json && <JsonNode data={json} />}
          {!error && !json && (
            <div style={{ opacity: 0.3, textAlign: "center", padding: "60px 0" }}>
              <p>No data to visualize. Paste and parse JSON to begin.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default JsonViewerPage;