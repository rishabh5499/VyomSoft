import React, { useState } from "react";

function JsonNode({ data }) {
  const [open, setOpen] = useState(true);

  // Check if current theme is dark based on localStorage
  const isDark = localStorage.getItem("theme") === "dark";

  const getType = (value) => {
    if (value === null) return "null";
    if (Array.isArray(value)) return "array";
    return typeof value;
  };

  const type = getType(data);

  // Modern Theme Palette
  const colors = {
    string: isDark ? "#a5d6ff" : "#0969da",   // Soft blue
    number: isDark ? "#d2a8ff" : "#8250df",   // Purple
    boolean: isDark ? "#ffab70" : "#bc4c00",  // Orange
    null: "#8b949e",                          // Gray
    key: isDark ? "#7ee787" : "#116329",      // Greenish for keys
    bracket: isDark ? "#8b949e" : "#57606a",
    guide: isDark ? "#30363d" : "#d0d7de"     // Indentation lines
  };

  // Primitive values rendering
  if (type !== "object" && type !== "array") {
    let color = colors.null;
    if (type === "string") color = colors.string;
    else if (type === "number") color = colors.number;
    else if (type === "boolean") color = colors.boolean;

    return (
      <span style={{ 
        color, 
        fontWeight: type === "string" ? "400" : "600",
        fontFamily: "'Fira Code', monospace" 
      }}>
        {JSON.stringify(data)}
      </span>
    );
  }

  const isArray = type === "array";
  const entries = isArray
    ? data.map((v, i) => [i, v])
    : Object.entries(data);

  return (
    <div style={{ 
      fontFamily: "'Fira Code', monospace", 
      fontSize: "14px",
      lineHeight: "1.6"
    }}>
      {/* Toggler and Brackets */}
      <span
        onClick={() => setOpen(!open)}
        style={{ 
          cursor: "pointer", 
          color: colors.bracket,
          userSelect: "none",
          display: "inline-block",
          width: "20px",
          textAlign: "center",
          fontSize: "10px",
          transition: "transform 0.2s",
          transform: open ? "rotate(0deg)" : "rotate(-90deg)"
        }}
      >
        ▼
      </span>
      <span style={{ color: colors.bracket, fontWeight: "600" }}>
        {isArray ? "[" : "{"}
        {!open && <span style={{ fontSize: "12px", opacity: 0.5 }}> ... </span>}
      </span>

      {/* Nested Content */}
      {open && (
        <div style={{ 
          marginLeft: "10px", 
          paddingLeft: "15px", 
          borderLeft: `1px solid ${colors.guide}` 
        }}>
          {entries.map(([key, value], index) => (
            <div key={key} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
              {!isArray && (
                <span style={{ color: colors.key, fontWeight: "500" }}>
                  "{key}"<span style={{ color: colors.bracket }}>:</span>
                </span>
              )}
              <JsonNode data={value} />
              {index < entries.length - 1 && <span style={{ color: colors.bracket }}>,</span>}
            </div>
          ))}
        </div>
      )}

      {/* Closing Brackets */}
      <span style={{ color: colors.bracket, fontWeight: "600", marginLeft: open ? "0" : "4px" }}>
        {isArray ? "]" : "}"}
      </span>
    </div>
  );
}

export default JsonNode;