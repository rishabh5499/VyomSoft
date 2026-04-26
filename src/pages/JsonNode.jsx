import React, { useState } from "react";

function JsonNode({ data }) {
  const [open, setOpen] = useState(true);

  const getType = (value) => {
    if (value === null) return "null";
    if (Array.isArray(value)) return "array";
    return typeof value;
  };

  const type = getType(data);

  // Primitive values
  if (type !== "object" && type !== "array") {
    let color = "white";

    if (type === "string") color = "#4caf50";
    else if (type === "number") color = "#2196f3";
    else if (type === "boolean") color = "#ff9800";
    else if (type === "null") color = "#9e9e9e";

    return <span style={{ color }}>{JSON.stringify(data)}</span>;
  }

  const isArray = type === "array";
  const entries = isArray
    ? data.map((v, i) => [i, v])
    : Object.entries(data);

  return (
    <div style={{ marginLeft: 20 }}>
      <span
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer", color: "#ccc" }}
      >
        {open ? "▼" : "▶"}
      </span>{" "}
      <span style={{ color: "#aaa" }}>
        {isArray ? "[" : "{"}
      </span>

      {open && (
        <div style={{ marginLeft: 15 }}>
          {entries.map(([key, value]) => (
            <div key={key}>
              {!isArray && (
                <span style={{ color: "#f06292" }}>
                  "{key}"
                </span>
              )}
              {!isArray && <span>: </span>}
              <JsonNode data={value} />
            </div>
          ))}
        </div>
      )}

      <span style={{ color: "#aaa" }}>
        {isArray ? "]" : "}"}
      </span>
    </div>
  );
}

export default JsonNode;
// import React, { useState } from "react";

// function JsonNode({ data }) {
//   const [open, setOpen] = useState(true);

//   const getType = (value) => {
//     if (value === null) return "null";
//     if (Array.isArray(value)) return "array";
//     return typeof value;
//   };

//   const type = getType(data);

//   // Primitive values
//   if (type !== "object" && type !== "array") {
//     let color = "white";

//     if (type === "string") color = "#4caf50";
//     else if (type === "number") color = "#2196f3";
//     else if (type === "boolean") color = "#ff9800";
//     else if (type === "null") color = "#9e9e9e";

//     return <span style={{ color }}>{JSON.stringify(data)}</span>;
//   }

//   const isArray = type === "array";
//   const entries = isArray
//     ? data.map((v, i) => [i, v])
//     : Object.entries(data);

//   return (
//     <div style={{ marginLeft: 20 }}>
//       <span
//         onClick={() => setOpen(!open)}
//         style={{ cursor: "pointer", color: "#ccc" }}
//       >
//         {open ? "▼" : "▶"}
//       </span>{" "}
//       <span style={{ color: "#aaa" }}>
//         {isArray ? "[" : "{"}
//       </span>

//       {open && (
//         <div style={{ marginLeft: 15 }}>
//           {entries.map(([key, value]) => (
//             <div key={key}>
//               {!isArray && (
//                 <span style={{ color: "#f06292" }}>
//                   "{key}"
//                 </span>
//               )}
//               {!isArray && <span>: </span>}
//               <JsonNode data={value} />
//             </div>
//           ))}
//         </div>
//       )}

//       <span style={{ color: "#aaa" }}>
//         {isArray ? "]" : "}"}
//       </span>
//     </div>
//   );
// }

// export default JsonNode;