// import { useState, useCallback } from "react";

// const S = {
//   wrapper: { width: "100%", maxWidth: 860, margin: "32px auto", padding: "0 16px", fontFamily: "'Segoe UI', Arial, sans-serif", boxSizing: "border-box" },
//   card: { background: "#ffffff", border: "2px solid #111", boxShadow: "5px 5px 0px #111", width: "100%" },
//   header: { display: "grid", gridTemplateColumns: "1fr auto", borderBottom: "2px solid #111" },
//   headerTitle: { padding: "14px 20px", borderRight: "2px solid #111" },
//   headerH1: { fontSize: 22, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", margin: 0, color: "#111" },
//   headerSub: { fontSize: 13, fontWeight: 500, color: "#444", marginTop: 2, marginBottom: 0 },
//   headerLogo: { padding: "14px 20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" },
//   logoText: { fontSize: 22, fontWeight: 800, letterSpacing: "0.06em", color: "#111" },
//   logoSub: { fontSize: 11, color: "#666", fontStyle: "italic", marginTop: 2 },
//   sectionLabel: { background: "#111", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "5px 12px", borderTop: "2px solid #111" },
//   fieldLabel: { fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#555", display: "block", marginBottom: 4 },
//   fieldInput: { fontFamily: "monospace", fontSize: 14, fontWeight: 500, border: "none", borderBottom: "1.5px solid #bbb", outline: "none", padding: "2px 0", width: "100%", background: "transparent", color: "#111", boxSizing: "border-box" },
//   table: { width: "100%", borderCollapse: "collapse", tableLayout: "fixed" },
//   tableInput: { fontFamily: "monospace", fontSize: 13, border: "none", borderBottom: "1.5px solid #ccc", width: "100%", background: "transparent", outline: "none", padding: "2px 0", boxSizing: "border-box", color: "#111" },
//   formFooter: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderTop: "2px solid #111", background: "#fafafa" },
//   formRef: { fontSize: 11, fontFamily: "monospace", color: "#888" },
//   btnReset: { background: "transparent", color: "#555", border: "1.5px solid #bbb", padding: "10px 20px", fontFamily: "inherit", fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer", marginRight: 10 },
//   btnSubmit: { background: "#111", color: "#fff", border: "none", padding: "10px 28px", fontFamily: "inherit", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" },
//   successBanner: { background: "#d4edda", border: "1.5px solid #28a745", color: "#155724", padding: "12px 20px", fontSize: 13, fontWeight: 600, marginBottom: 16 },
// };

// // ------------------ MODEL LIST ------------------
// const MODEL_DATA = {
//   HHRA1004: { component: "HHRA1004", issuedQty: "8000", issuedMaterialInvQty: "9000", customer: "HMSI", heatNo: "H123456" },
//   HHRA1006: { component: "HHRA1006", issuedQty: "7000", issuedMaterialInvQty: "8200", customer: "HMSI", heatNo: "M556677" },
//   HHRA1008: { component: "HHRA1008" },
//   HHRA1009: { component: "HHRA1009" },
//   HHRA1010: { component: "HHRA1010" },
//   HHRA1011: { component: "HHRA1011" },
//   HSRA1004: { component: "HSRA1004" },
//   HSRA1010: { component: "HSRA1010" },
//   HSRA1012: { component: "HSRA1012" },
//   HSRA1014: { component: "HSRA1014" },
//   HSRA1036: { component: "HSRA1036" },
//   HSRA1037: { component: "HSRA1037" },
//   HSRA1032: { component: "HSRA1032" },
//   HSRA1033: { component: "HSRA1033" },
//   HSRA1019: { component: "HSRA1019" },
//   HSRA1017: { component: "HSRA1017" },
// };
// // ------------------------------------------------

// const cell = (last = false, span2 = false) => ({
//   padding: "10px 12px", borderRight: last ? "none" : "1px solid #ccc", borderBottom: "1px solid #ccc",
//   display: "flex", flexDirection: "column", boxSizing: "border-box", gridColumn: span2 ? "span 2" : undefined,
// });
// const thStyle = (last = false) => ({
//   background: "#f5f5f5", fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
//   padding: "8px 12px", textAlign: "left", borderRight: last ? "none" : "1px solid #ccc", borderBottom: "1px solid #ccc", color: "#333",
// });
// const tdStyle = (last = false) => ({
//   padding: "8px 12px", borderRight: last ? "none" : "1px solid #eee", borderBottom: "1px solid #eee",
// });
// const asmCell = (last = false) => ({
//   padding: "8px 12px", borderRight: last ? "none" : "1px solid #ccc", borderBottom: "1px solid #ccc",
//   display: "flex", flexDirection: "column", boxSizing: "border-box",
// });

// const initialState = {
//   routeCardNo: "", startDate: "", endDate: "", component: "", issuedMaterialInvNo: "",
//   issuedQty: "", issuedMaterialInvDate: "", customer: "", issuedMaterialInvQty: "", heatNo: "",
//   softMachiningOkQty: "", softMachiningRewQty: "", softMachiningRejQty: "", softMachiningDate: "", softMachiningSign: "",
//   htOkQty: "", htRewQty: "", htRejQty: "", htDate: "", htSign: "", htChargeNo: "", htChargeDate: "",
//   hardMachiningOkQty: "", hardMachiningRewQty: "", hardMachiningRejQty: "", hardMachiningDate: "", hardMachiningSign: "",
//   cleaningOkQty: "", cleaningRewQty: "", cleaningRejQty: "", cleaningDate: "", cleaningSign: "",
//   screwInvNo: "", screwInvDate: "", screwIssuedQty: "",
//   nutInvNo: "", nutInvDate: "", nutIssuedQty: "",
//   bearingInvNo: "", bearingInvDate: "", bearingIssuedQty: "",
//   bearingShaftInvNo: "", shaftInvDate: "", shaftIssuedQty: "",
//   shellBearingInvNo: "", shellBearingInvDate: "",
//   assemblyOkQty: "", assemblyRewQty: "", assemblyRejQty: "", assemblyDate: "", assemblySign: "",
//   despatchInvoiceNo: "", despatchInvDate: "",
// };

// export default function CreateRouteCard() {
//   const [form, setForm] = useState(initialState);
//   const [submitted, setSubmitted] = useState(false);
//   const [selectedModel, setSelectedModel] = useState("");
//   const [search, setSearch] = useState("");

//   // Filter models based on search input
//   const filteredModels = Object.keys(MODEL_DATA).filter((m) =>
//     m.toLowerCase().includes(search.toLowerCase())
//   );

//   const handleChange = useCallback((e) => {
//     const field = e.target.getAttribute("data-field");
//     const value = e.target.value;
//     setForm((prev) => ({ ...prev, [field]: value }));
//   }, []);

//   const handleModelSelect = (e) => {
//     const model = e.target.value;
//     setSelectedModel(model);
//     if (model && MODEL_DATA[model]) {
//       // Reset form first, then apply model data
//       setForm({ ...initialState, ...MODEL_DATA[model] });
//     } else {
//       setForm(initialState);
//     }
//     setSubmitted(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     console.log("Route Card Submitted:", form);
//     setTimeout(() => setSubmitted(false), 4000);
//   };

//   const handleReset = () => {
//     setForm(selectedModel && MODEL_DATA[selectedModel]
//       ? { ...initialState, ...MODEL_DATA[selectedModel] }
//       : initialState
//     );
//     setSubmitted(false);
//   };

//   const inp = (field, placeholder = "", type = "text") => (
//     <input
//       style={S.fieldInput}
//       type={type}
//       data-field={field}
//       value={form[field]}
//       onChange={handleChange}
//       placeholder={placeholder}
//     />
//   );

//   const tinp = (field, placeholder = "", type = "text") => (
//     <input
//       style={S.tableInput}
//       type={type}
//       data-field={field}
//       value={form[field]}
//       onChange={handleChange}
//       placeholder={placeholder}
//     />
//   );

//   const lbl = (text) => <span style={S.fieldLabel}>{text}</span>;

//   return (
//     <div style={S.wrapper}>

//       {/* -------- MODEL SELECTOR (always visible) -------- */}
//       <div style={{
//         background: "#fff",
//         border: "2px solid #111",
//         boxShadow: "5px 5px 0px #111",
//         padding: "24px 28px",
//         marginBottom: 28,
//       }}>
//         <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#555", marginBottom: 14 }}>
//           Select Model to Open Route Card
//         </div>

//         {/* Search box */}
//         <div style={{
//           display: "flex", alignItems: "center", gap: 8,
//           border: "1.5px solid #bbb", padding: "6px 12px",
//           marginBottom: 12, maxWidth: 400, background: "#fafafa"
//         }}>
//           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 30 30" fill="#999">
//             <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8"/>
//           </svg>
//           <input
//             type="text"
//             placeholder="Search model..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             style={{ border: "none", outline: "none", background: "transparent", fontSize: 14, color: "#111", width: "100%", fontFamily: "inherit" }}
//           />
//         </div>

//         {/* Dropdown */}
//         <select
//           value={selectedModel}
//           onChange={handleModelSelect}
//           style={{
//             padding: "10px 16px", border: "2px solid #111", fontSize: 14,
//             fontFamily: "inherit", fontWeight: 600, background: "#fff",
//             cursor: "pointer", minWidth: 260, outline: "none",
//           }}
//         >
//           <option value="">-- Select Model --</option>
//           {filteredModels.map((m) => (
//             <option key={m} value={m}>{m}</option>
//           ))}
//         </select>

//         {/* Hint when nothing selected */}
//         {!selectedModel && (
//           <div style={{ marginTop: 16, fontSize: 13, color: "#888", fontStyle: "italic" }}>
//             ↑ Please select a model above to load the Route Card form.
//           </div>
//         )}
//       </div>

//       {/* -------- ROUTE CARD FORM (only shown after model selected) -------- */}
//       {selectedModel && (
//         <>
//           {submitted && <div style={S.successBanner}>✓ Route Card submitted successfully.</div>}

//           <form style={S.card} onSubmit={handleSubmit}>

//             {/* HEADER */}
//             <div style={S.header}>
//               <div style={S.headerTitle}>
//                 <h1 style={S.headerH1}>Route Card</h1>
//                 <p style={S.headerSub}>Roller Rocker Arm — <strong>{selectedModel}</strong></p>
//               </div>
//               <div style={S.headerLogo}>
//                 <div style={S.logoText}>SANSERA</div>
//                 <div style={S.logoSub}>ideas@work</div>
//               </div>
//             </div>

//             {/* A — STORE USE */}
//             <div style={S.sectionLabel}>A — Store Use</div>

//             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
//               <div style={cell()}>{lbl("Route Card No.")}{inp("routeCardNo")}</div>
//               <div style={cell()}>{lbl("Start Date")}{inp("startDate","","date")}</div>
//               <div style={cell()}>{lbl("End Date")}{inp("endDate","","date")}</div>
//               <div style={cell(true)} />
//             </div>

//             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
//               <div style={cell(false,true)}>{lbl("Component")}{inp("component")}</div>
//               <div style={cell()}>{lbl("Issued Material Inv. No.")}{inp("issuedMaterialInvNo")}</div>
//               <div style={cell(true)} />
//             </div>

//             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
//               <div style={cell()}>{lbl("Issued Qty.")}{inp("issuedQty")}</div>
//               <div style={cell()} />
//               <div style={cell()}>{lbl("Issued Material Inv. Date")}{inp("issuedMaterialInvDate","","date")}</div>
//               <div style={cell(true)} />
//             </div>

//             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
//               <div style={cell()}>{lbl("Customer")}{inp("customer")}</div>
//               <div style={cell()} />
//               <div style={cell()}>{lbl("Issued Material Inv. Qty.")}{inp("issuedMaterialInvQty")}</div>
//               <div style={cell(true)} />
//             </div>

//             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
//               <div style={cell()}>{lbl("Heat No.")}{inp("heatNo")}</div>
//               <div style={cell()} /><div style={cell()} /><div style={cell(true)} />
//             </div>

//             {/* B — MACHINE SHOP USE */}
//             <div style={S.sectionLabel}>B — Machine Shop Use</div>
//             <table style={S.table}>
//               <thead><tr>
//                 <th style={{...thStyle(),width:"22%"}}>Operation</th>
//                 <th style={thStyle()}>OK Qty.</th><th style={thStyle()}>Rew. Qty.</th>
//                 <th style={thStyle()}>Rej. Qty.</th><th style={thStyle()}>Date</th>
//                 <th style={thStyle(true)}>Sign.</th>
//               </tr></thead>
//               <tbody><tr>
//                 <td style={{...tdStyle(),fontSize:13,fontWeight:600,color:"#222"}}>Soft Machining</td>
//                 <td style={tdStyle()}>{tinp("softMachiningOkQty","0")}</td>
//                 <td style={tdStyle()}>{tinp("softMachiningRewQty","0")}</td>
//                 <td style={tdStyle()}>{tinp("softMachiningRejQty","0")}</td>
//                 <td style={tdStyle()}>{tinp("softMachiningDate","","date")}</td>
//                 <td style={tdStyle(true)}>{tinp("softMachiningSign","Signature")}</td>
//               </tr></tbody>
//             </table>

//             {/* C — HT SHOP USE */}
//             <div style={S.sectionLabel}>C — HT Shop Use</div>
//             <table style={S.table}>
//               <thead><tr>
//                 <th style={{...thStyle(),width:"22%"}}>Operation</th>
//                 <th style={thStyle()}>OK Qty.</th><th style={thStyle()}>Rew. Qty.</th>
//                 <th style={thStyle()}>Rej. Qty.</th><th style={thStyle()}>Date</th>
//                 <th style={thStyle(true)}>Sign.</th>
//               </tr></thead>
//               <tbody>
//                 <tr>
//                   <td style={{...tdStyle(),fontSize:13,fontWeight:600,color:"#222"}}>Heat Treatment</td>
//                   <td style={tdStyle()}>{tinp("htOkQty","0")}</td>
//                   <td style={tdStyle()}>{tinp("htRewQty","0")}</td>
//                   <td style={tdStyle()}>{tinp("htRejQty","0")}</td>
//                   <td style={tdStyle()}>{tinp("htDate","","date")}</td>
//                   <td style={tdStyle(true)}>{tinp("htSign","Signature")}</td>
//                 </tr>
//                 <tr>
//                   <td style={tdStyle()}>
//                     {lbl("Heat Treatment Charge No.")}
//                     {tinp("htChargeNo","—")}
//                   </td>
//                   <td style={tdStyle()} colSpan={2} />
//                   <td style={tdStyle(true)} colSpan={3}>
//                     {lbl("Heat Treatment Charge Date")}
//                     {tinp("htChargeDate","","date")}
//                   </td>
//                 </tr>
//               </tbody>
//             </table>

//             {/* D — MACHINE SHOP USE */}
//             <div style={S.sectionLabel}>D — Machine Shop Use</div>
//             <table style={S.table}>
//               <thead><tr>
//                 <th style={{...thStyle(),width:"22%"}}>Operation</th>
//                 <th style={thStyle()}>OK Qty.</th><th style={thStyle()}>Rew. Qty.</th>
//                 <th style={thStyle()}>Rej. Qty.</th><th style={thStyle()}>Date</th>
//                 <th style={thStyle(true)}>Sign.</th>
//               </tr></thead>
//               <tbody>
//                 <tr>
//                   <td style={{...tdStyle(),fontSize:13,fontWeight:600,color:"#222"}}>Hard Machining</td>
//                   <td style={tdStyle()}>{tinp("hardMachiningOkQty","0")}</td>
//                   <td style={tdStyle()}>{tinp("hardMachiningRewQty","0")}</td>
//                   <td style={tdStyle()}>{tinp("hardMachiningRejQty","0")}</td>
//                   <td style={tdStyle()}>{tinp("hardMachiningDate","","date")}</td>
//                   <td style={tdStyle(true)}>{tinp("hardMachiningSign","Signature")}</td>
//                 </tr>
//                 <tr>
//                   <td style={{...tdStyle(),fontSize:13,fontWeight:600,color:"#222"}}>Cleaning</td>
//                   <td style={tdStyle()}>{tinp("cleaningOkQty","0")}</td>
//                   <td style={tdStyle()}>{tinp("cleaningRewQty","0")}</td>
//                   <td style={tdStyle()}>{tinp("cleaningRejQty","0")}</td>
//                   <td style={tdStyle()}>{tinp("cleaningDate","","date")}</td>
//                   <td style={tdStyle(true)}>{tinp("cleaningSign","Signature")}</td>
//                 </tr>
//               </tbody>
//             </table>

//             {/* E — ASSEMBLY USE */}
//             <div style={S.sectionLabel}>E — Assembly Use</div>

//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
//               <div style={asmCell()}>{lbl("Screw Inv. No.")}{inp("screwInvNo","—")}</div>
//               <div style={asmCell()}>{lbl("Screw Inv. Date")}{inp("screwInvDate","","date")}</div>
//               <div style={asmCell(true)}>{lbl("Issued Qty.")}{inp("screwIssuedQty","0")}</div>
//             </div>
//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
//               <div style={asmCell()}>{lbl("Nut Inv. No.")}{inp("nutInvNo","—")}</div>
//               <div style={asmCell()}>{lbl("Nut Inv. Date")}{inp("nutInvDate","","date")}</div>
//               <div style={asmCell(true)}>{lbl("Issued Qty.")}{inp("nutIssuedQty","0")}</div>
//             </div>
//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
//               <div style={asmCell()}>{lbl("Bearing Inv. No.")}{inp("bearingInvNo","—")}</div>
//               <div style={asmCell()}>{lbl("Bearing Inv. Date")}{inp("bearingInvDate","","date")}</div>
//               <div style={asmCell(true)}>{lbl("Issued Qty.")}{inp("bearingIssuedQty","0")}</div>
//             </div>
//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
//               <div style={asmCell()}>{lbl("Bearing Shaft Inv. No.")}{inp("bearingShaftInvNo","—")}</div>
//               <div style={asmCell()}>{lbl("Shaft Inv. Date")}{inp("shaftInvDate","","date")}</div>
//               <div style={asmCell(true)}>{lbl("Issued Qty.")}{inp("shaftIssuedQty","0")}</div>
//             </div>
//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
//               <div style={asmCell()}>{lbl("Shell Bearing Inv. No.")}{inp("shellBearingInvNo","—")}</div>
//               <div style={asmCell()}>{lbl("Shell Bearing Inv. Date")}{inp("shellBearingInvDate","","date")}</div>
//               <div style={asmCell(true)} />
//             </div>

//             {/* Assembly Operation */}
//             <table style={S.table}>
//               <thead><tr>
//                 <th style={{...thStyle(),width:"22%"}}>Operation</th>
//                 <th style={thStyle()}>OK Qty.</th><th style={thStyle()}>Rew. Qty.</th>
//                 <th style={thStyle()}>Rej. Qty.</th><th style={thStyle()}>Date</th>
//                 <th style={thStyle(true)}>Sign.</th>
//               </tr></thead>
//               <tbody><tr>
//                 <td style={{...tdStyle(),fontSize:13,fontWeight:600,color:"#222"}}>Assembly</td>
//                 <td style={tdStyle()}>{tinp("assemblyOkQty","0")}</td>
//                 <td style={tdStyle()}>{tinp("assemblyRewQty","0")}</td>
//                 <td style={tdStyle()}>{tinp("assemblyRejQty","0")}</td>
//                 <td style={tdStyle()}>{tinp("assemblyDate","","date")}</td>
//                 <td style={tdStyle(true)}>{tinp("assemblySign","Signature")}</td>
//               </tr></tbody>
//             </table>

//             {/* F — DISPATCH USE */}
//             <div style={S.sectionLabel}>F — Dispatch Use</div>
//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
//               <div style={cell()}>{lbl("Despatch Invoice No.")}{inp("despatchInvoiceNo","—")}</div>
//               <div style={cell(true)}>{lbl("Despatch Inv. Date")}{inp("despatchInvDate","","date")}</div>
//             </div>

//             {/* FOOTER */}
//             <div style={S.formFooter}>
//               <span style={S.formRef}>F760B/02</span>
//               <div>
//                 <button type="button" style={S.btnReset} onClick={handleReset}>Reset</button>
//                 <button type="submit" style={S.btnSubmit}>Submit Route Card</button>
//               </div>
//             </div>

//           </form>
//         </>
//       )}
//     </div>
//   );
// }





import { useState, useCallback, useRef } from "react";

const S = {
  wrapper: { width: "100%", maxWidth: 860, margin: "32px auto", padding: "0 16px", fontFamily: "'Segoe UI', Arial, sans-serif", boxSizing: "border-box" },
  card: { background: "#ffffff", border: "2px solid #111", boxShadow: "5px 5px 0px #111", width: "100%" },
  header: { display: "grid", gridTemplateColumns: "1fr auto", borderBottom: "2px solid #111" },
  headerTitle: { padding: "14px 20px", borderRight: "2px solid #111" },
  headerH1: { fontSize: 22, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", margin: 0, color: "#111" },
  headerSub: { fontSize: 13, fontWeight: 500, color: "#444", marginTop: 2, marginBottom: 0 },
  headerLogo: { padding: "14px 20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" },
  logoText: { fontSize: 22, fontWeight: 800, letterSpacing: "0.06em", color: "#111" },
  logoSub: { fontSize: 11, color: "#666", fontStyle: "italic", marginTop: 2 },
  sectionLabel: { background: "#111", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "5px 12px", borderTop: "2px solid #111" },
  fieldLabel: { fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#555", display: "block", marginBottom: 4 },
  fieldInput: { fontFamily: "monospace", fontSize: 14, fontWeight: 500, border: "none", borderBottom: "1.5px solid #bbb", outline: "none", padding: "2px 0", width: "100%", background: "transparent", color: "#111", boxSizing: "border-box" },
  table: { width: "100%", borderCollapse: "collapse", tableLayout: "fixed" },
  tableInput: { fontFamily: "monospace", fontSize: 13, border: "none", borderBottom: "1.5px solid #ccc", width: "100%", background: "transparent", outline: "none", padding: "2px 0", boxSizing: "border-box", color: "#111" },
  formFooter: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderTop: "2px solid #111", background: "#fafafa" },
  formRef: { fontSize: 11, fontFamily: "monospace", color: "#888" },
  btnReset: { background: "transparent", color: "#555", border: "1.5px solid #bbb", padding: "10px 20px", fontFamily: "inherit", fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer", marginRight: 10 },
  btnSubmit: { background: "#111", color: "#fff", border: "none", padding: "10px 28px", fontFamily: "inherit", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" },
  successBanner: { background: "#d4edda", border: "1.5px solid #28a745", color: "#155724", padding: "12px 20px", fontSize: 13, fontWeight: 600, marginBottom: 16 },
};

const MODEL_DATA = {
  HHRA1004: { component: "HHRA1004", issuedQty: "8000", issuedMaterialInvQty: "9000", customer: "HMSI", heatNo: "H123456" },
  HHRA1006: { component: "HHRA1006", issuedQty: "7000", issuedMaterialInvQty: "8200", customer: "HMSI", heatNo: "M556677" },
  HHRA1008: { component: "HHRA1008" },
  HHRA1009: { component: "HHRA1009" },
  HHRA1010: { component: "HHRA1010" },
  HHRA1011: { component: "HHRA1011" },
  HSRA1004: { component: "HSRA1004" },
  HSRA1010: { component: "HSRA1010" },
  HSRA1012: { component: "HSRA1012" },
  HSRA1014: { component: "HSRA1014" },
  HSRA1036: { component: "HSRA1036" },
  HSRA1037: { component: "HSRA1037" },
  HSRA1032: { component: "HSRA1032" },
  HSRA1033: { component: "HSRA1033" },
  HSRA1019: { component: "HSRA1019" },
  HSRA1017: { component: "HSRA1017" },
};

const cell = (last = false, span2 = false) => ({
  padding: "10px 12px", borderRight: last ? "none" : "1px solid #ccc", borderBottom: "1px solid #ccc",
  display: "flex", flexDirection: "column", boxSizing: "border-box", gridColumn: span2 ? "span 2" : undefined,
});
const thStyle = (last = false) => ({
  background: "#f5f5f5", fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
  padding: "8px 12px", textAlign: "left", borderRight: last ? "none" : "1px solid #ccc", borderBottom: "1px solid #ccc", color: "#333",
});
const tdStyle = (last = false) => ({
  padding: "8px 12px", borderRight: last ? "none" : "1px solid #eee", borderBottom: "1px solid #eee",
});
const asmCell = (last = false) => ({
  padding: "8px 12px", borderRight: last ? "none" : "1px solid #ccc", borderBottom: "1px solid #ccc",
  display: "flex", flexDirection: "column", boxSizing: "border-box",
});

const initialState = {
  routeCardNo: "", startDate: "", endDate: "", component: "", issuedMaterialInvNo: "",
  issuedQty: "", issuedMaterialInvDate: "", customer: "", issuedMaterialInvQty: "", heatNo: "",
  softMachiningOkQty: "", softMachiningRewQty: "", softMachiningRejQty: "", softMachiningDate: "", softMachiningSign: "",
  htOkQty: "", htRewQty: "", htRejQty: "", htDate: "", htSign: "", htChargeNo: "", htChargeDate: "",
  hardMachiningOkQty: "", hardMachiningRewQty: "", hardMachiningRejQty: "", hardMachiningDate: "", hardMachiningSign: "",
  cleaningOkQty: "", cleaningRewQty: "", cleaningRejQty: "", cleaningDate: "", cleaningSign: "",
  screwInvNo: "", screwInvDate: "", screwIssuedQty: "",
  nutInvNo: "", nutInvDate: "", nutIssuedQty: "",
  bearingInvNo: "", bearingInvDate: "", bearingIssuedQty: "",
  bearingShaftInvNo: "", shaftInvDate: "", shaftIssuedQty: "",
  shellBearingInvNo: "", shellBearingInvDate: "",
  assemblyOkQty: "", assemblyRewQty: "", assemblyRejQty: "", assemblyDate: "", assemblySign: "",
  despatchInvoiceNo: "", despatchInvDate: "",
};

export default function CreateRouteCard() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");
  const [search, setSearch] = useState("");
  const [shaking, setShaking] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const allModels = Object.keys(MODEL_DATA);
  const filteredModels = allModels.filter((m) =>
    m.toLowerCase().includes(search.toLowerCase())
  );

  const openModel = (model) => {
    setSelectedModel(model);
    setForm({ ...initialState, ...MODEL_DATA[model] });
    setSearch(model);
    setShowSuggestions(false);
    setSubmitted(false);
    setSearchError(false);
  };

  const triggerShake = () => {
    setShaking(true);
    setSearchError(true);
    setTimeout(() => setShaking(false), 500);
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearch(val);
    setSearchError(false);
    setShowSuggestions(val.length > 0);
    // Auto-open on exact match (case-insensitive)
    const exact = allModels.find((m) => m.toLowerCase() === val.toLowerCase());
    if (exact) openModel(exact);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      const exact = allModels.find((m) => m.toLowerCase() === search.toLowerCase());
      if (exact) {
        openModel(exact);
      } else if (filteredModels.length === 1) {
        openModel(filteredModels[0]);
      } else {
        triggerShake();
      }
    }
    if (e.key === "Escape") setShowSuggestions(false);
  };

  const handleModelSelect = (e) => {
    const model = e.target.value;
    if (model) openModel(model);
    else { setSelectedModel(""); setForm(initialState); setSearch(""); }
  };

  const handleChange = useCallback((e) => {
    const field = e.target.getAttribute("data-field");
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleReset = () => {
    setForm(selectedModel && MODEL_DATA[selectedModel]
      ? { ...initialState, ...MODEL_DATA[selectedModel] }
      : initialState
    );
    setSubmitted(false);
  };

  const inp = (field, placeholder = "", type = "text") => (
    <input style={S.fieldInput} type={type} data-field={field} value={form[field]} onChange={handleChange} placeholder={placeholder} />
  );
  const tinp = (field, placeholder = "", type = "text") => (
    <input style={S.tableInput} type={type} data-field={field} value={form[field]} onChange={handleChange} placeholder={placeholder} />
  );
  const lbl = (text) => <span style={S.fieldLabel}>{text}</span>;

  return (
    <div style={S.wrapper}>

      <style>{`
        @keyframes shake {
          0%,100% { transform: translateX(0); }
          15%      { transform: translateX(-8px); }
          30%      { transform: translateX(8px); }
          45%      { transform: translateX(-5px); }
          60%      { transform: translateX(5px); }
          75%      { transform: translateX(-3px); }
          90%      { transform: translateX(3px); }
        }
        .shake { animation: shake 0.45s ease; }
        .sug-item { padding: 9px 14px; font-size: 13px; font-family: monospace; font-weight: 600;
          border-bottom: 1px solid #eee; color: #111; cursor: pointer; }
        .sug-item:hover { background: #f5f5f5; }
      `}</style>

      {/* ─── SELECTOR CARD ─── */}
      <div style={{ background:"#fff", border:"2px solid #111", boxShadow:"5px 5px 0 #111", padding:"24px 28px", marginBottom:28 }}>
        <div style={{ fontSize:13, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"#555", marginBottom:16 }}>
          Select Model to Open Route Card
        </div>

        <div style={{ display:"flex", gap:16, flexWrap:"wrap", alignItems:"flex-start" }}>

          {/* Search */}
          <div style={{ position:"relative", flex:1, minWidth:220 }}>
            <div
              className={shaking ? "shake" : ""}
              style={{
                display:"flex", alignItems:"center", gap:8,
                border:`2px solid ${searchError ? "#e53e3e" : "#bbb"}`,
                padding:"8px 12px",
                background: searchError ? "#fff5f5" : "#fafafa",
                transition:"border-color 0.2s, background 0.2s",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 30 30" fill={searchError ? "#e53e3e" : "#888"}>
                <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8"/>
              </svg>
              <input
                type="text"
                placeholder="Type model name & press Enter…"
                value={search}
                onChange={handleSearchChange}
                onKeyDown={handleSearchKeyDown}
                onFocus={() => search.length > 0 && setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 160)}
                style={{
                  border:"none", outline:"none", background:"transparent",
                  fontSize:14, color: searchError ? "#e53e3e" : "#111",
                  width:"100%", fontFamily:"inherit", fontWeight:500,
                }}
              />
              {search && (
                <span
                  onMouseDown={() => { setSearch(""); setSearchError(false); setShowSuggestions(false); setSelectedModel(""); setForm(initialState); }}
                  style={{ cursor:"pointer", color:"#aaa", fontSize:16, userSelect:"none", lineHeight:1 }}
                >✕</span>
              )}
            </div>

            {/* Error hint */}
            {searchError && (
              <div style={{ fontSize:11, color:"#e53e3e", marginTop:5, fontWeight:700, letterSpacing:"0.03em" }}>
                ✕ Model not found — try HHRA or HSRA
              </div>
            )}

            {/* Suggestions */}
            {showSuggestions && filteredModels.length > 0 && (
              <div style={{
                position:"absolute", top:"calc(100% + 2px)", left:0, right:0, zIndex:200,
                border:"2px solid #111", background:"#fff",
                boxShadow:"4px 4px 0 #111", maxHeight:200, overflowY:"auto",
              }}>
                {filteredModels.map((m) => (
                  <div key={m} className="sug-item" onMouseDown={() => openModel(m)}>{m}</div>
                ))}
              </div>
            )}

            {/* No results */}
            {showSuggestions && filteredModels.length === 0 && (
              <div style={{
                position:"absolute", top:"calc(100% + 2px)", left:0, right:0, zIndex:200,
                border:"2px solid #e53e3e", background:"#fff5f5",
                padding:"10px 14px", fontSize:12, color:"#e53e3e", fontWeight:700,
              }}>
                No matching model found
              </div>
            )}
          </div>

          <div style={{ display:"flex", alignItems:"center", color:"#bbb", fontSize:12, fontWeight:700, paddingTop:10 }}>OR</div>

          {/* Dropdown */}
          <select
            value={selectedModel}
            onChange={handleModelSelect}
            style={{
              padding:"10px 16px", border:"2px solid #111", fontSize:14,
              fontFamily:"inherit", fontWeight:600, background:"#fff",
              cursor:"pointer", minWidth:220, outline:"none", height:44,
            }}
          >
            <option value="">-- Select from list --</option>
            {allModels.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>

        {/* Status */}
        {!selectedModel && (
          <div style={{ marginTop:14, fontSize:12, color:"#999", fontStyle:"italic" }}>
            Type a model name above or pick from the dropdown — the Route Card will open automatically.
          </div>
        )}
        {selectedModel && (
          <div style={{
            marginTop:14, display:"inline-flex", alignItems:"center", gap:8,
            background:"#111", color:"#fff", padding:"5px 14px",
            fontSize:12, fontWeight:700, letterSpacing:"0.08em",
          }}>
            <span style={{ width:7, height:7, borderRadius:"50%", background:"#4ade80", display:"inline-block" }} />
            LOADED: {selectedModel}
          </div>
        )}
      </div>

      {/* ─── ROUTE CARD FORM ─── */}
      {selectedModel && (
        <>
          {submitted && <div style={S.successBanner}>✓ Route Card submitted successfully.</div>}

          <form style={S.card} onSubmit={handleSubmit}>

            <div style={S.header}>
              <div style={S.headerTitle}>
                <h1 style={S.headerH1}>Route Card</h1>
                <p style={S.headerSub}>Roller Rocker Arm — <strong>{selectedModel}</strong></p>
              </div>
              <div style={S.headerLogo}>
                <div style={S.logoText}>SANSERA</div>
                <div style={S.logoSub}>ideas@work</div>
              </div>
            </div>

            {/* A */}
            <div style={S.sectionLabel}>A — Store Use</div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)" }}>
              <div style={cell()}>{lbl("Route Card No.")}{inp("routeCardNo")}</div>
              <div style={cell()}>{lbl("Start Date")}{inp("startDate","","date")}</div>
              <div style={cell()}>{lbl("End Date")}{inp("endDate","","date")}</div>
              <div style={cell(true)} />
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)" }}>
              <div style={cell(false,true)}>{lbl("Component")}{inp("component")}</div>
              <div style={cell()}>{lbl("Issued Material Inv. No.")}{inp("issuedMaterialInvNo")}</div>
              <div style={cell(true)} />
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)" }}>
              <div style={cell()}>{lbl("Issued Qty.")}{inp("issuedQty")}</div>
              <div style={cell()} />
              <div style={cell()}>{lbl("Issued Material Inv. Date")}{inp("issuedMaterialInvDate","","date")}</div>
              <div style={cell(true)} />
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)" }}>
              <div style={cell()}>{lbl("Customer")}{inp("customer")}</div>
              <div style={cell()} />
              <div style={cell()}>{lbl("Issued Material Inv. Qty.")}{inp("issuedMaterialInvQty")}</div>
              <div style={cell(true)} />
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)" }}>
              <div style={cell()}>{lbl("Heat No.")}{inp("heatNo")}</div>
              <div style={cell()} /><div style={cell()} /><div style={cell(true)} />
            </div>

            {/* B */}
            <div style={S.sectionLabel}>B — Machine Shop Use</div>
            <table style={S.table}>
              <thead><tr>
                <th style={{...thStyle(),width:"22%"}}>Operation</th>
                <th style={thStyle()}>OK Qty.</th><th style={thStyle()}>Rew. Qty.</th>
                <th style={thStyle()}>Rej. Qty.</th><th style={thStyle()}>Date</th>
                <th style={thStyle(true)}>Sign.</th>
              </tr></thead>
              <tbody><tr>
                <td style={{...tdStyle(),fontSize:13,fontWeight:600,color:"#222"}}>Soft Machining</td>
                <td style={tdStyle()}>{tinp("softMachiningOkQty","0")}</td>
                <td style={tdStyle()}>{tinp("softMachiningRewQty","0")}</td>
                <td style={tdStyle()}>{tinp("softMachiningRejQty","0")}</td>
                <td style={tdStyle()}>{tinp("softMachiningDate","","date")}</td>
                <td style={tdStyle(true)}>{tinp("softMachiningSign","Signature")}</td>
              </tr></tbody>
            </table>

            {/* C */}
            <div style={S.sectionLabel}>C — HT Shop Use</div>
            <table style={S.table}>
              <thead><tr>
                <th style={{...thStyle(),width:"22%"}}>Operation</th>
                <th style={thStyle()}>OK Qty.</th><th style={thStyle()}>Rew. Qty.</th>
                <th style={thStyle()}>Rej. Qty.</th><th style={thStyle()}>Date</th>
                <th style={thStyle(true)}>Sign.</th>
              </tr></thead>
              <tbody>
                <tr>
                  <td style={{...tdStyle(),fontSize:13,fontWeight:600,color:"#222"}}>Heat Treatment</td>
                  <td style={tdStyle()}>{tinp("htOkQty","0")}</td>
                  <td style={tdStyle()}>{tinp("htRewQty","0")}</td>
                  <td style={tdStyle()}>{tinp("htRejQty","0")}</td>
                  <td style={tdStyle()}>{tinp("htDate","","date")}</td>
                  <td style={tdStyle(true)}>{tinp("htSign","Signature")}</td>
                </tr>
                <tr>
                  <td style={tdStyle()}>{lbl("Heat Treatment Charge No.")}{tinp("htChargeNo","—")}</td>
                  <td style={tdStyle()} colSpan={2} />
                  <td style={tdStyle(true)} colSpan={3}>{lbl("Heat Treatment Charge Date")}{tinp("htChargeDate","","date")}</td>
                </tr>
              </tbody>
            </table>

            {/* D */}
            <div style={S.sectionLabel}>D — Machine Shop Use</div>
            <table style={S.table}>
              <thead><tr>
                <th style={{...thStyle(),width:"22%"}}>Operation</th>
                <th style={thStyle()}>OK Qty.</th><th style={thStyle()}>Rew. Qty.</th>
                <th style={thStyle()}>Rej. Qty.</th><th style={thStyle()}>Date</th>
                <th style={thStyle(true)}>Sign.</th>
              </tr></thead>
              <tbody>
                <tr>
                  <td style={{...tdStyle(),fontSize:13,fontWeight:600,color:"#222"}}>Hard Machining</td>
                  <td style={tdStyle()}>{tinp("hardMachiningOkQty","0")}</td>
                  <td style={tdStyle()}>{tinp("hardMachiningRewQty","0")}</td>
                  <td style={tdStyle()}>{tinp("hardMachiningRejQty","0")}</td>
                  <td style={tdStyle()}>{tinp("hardMachiningDate","","date")}</td>
                  <td style={tdStyle(true)}>{tinp("hardMachiningSign","Signature")}</td>
                </tr>
                <tr>
                  <td style={{...tdStyle(),fontSize:13,fontWeight:600,color:"#222"}}>Cleaning</td>
                  <td style={tdStyle()}>{tinp("cleaningOkQty","0")}</td>
                  <td style={tdStyle()}>{tinp("cleaningRewQty","0")}</td>
                  <td style={tdStyle()}>{tinp("cleaningRejQty","0")}</td>
                  <td style={tdStyle()}>{tinp("cleaningDate","","date")}</td>
                  <td style={tdStyle(true)}>{tinp("cleaningSign","Signature")}</td>
                </tr>
              </tbody>
            </table>

            {/* E */}
            <div style={S.sectionLabel}>E — Assembly Use</div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr" }}>
              <div style={asmCell()}>{lbl("Screw Inv. No.")}{inp("screwInvNo","—")}</div>
              <div style={asmCell()}>{lbl("Screw Inv. Date")}{inp("screwInvDate","","date")}</div>
              <div style={asmCell(true)}>{lbl("Issued Qty.")}{inp("screwIssuedQty","0")}</div>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr" }}>
              <div style={asmCell()}>{lbl("Nut Inv. No.")}{inp("nutInvNo","—")}</div>
              <div style={asmCell()}>{lbl("Nut Inv. Date")}{inp("nutInvDate","","date")}</div>
              <div style={asmCell(true)}>{lbl("Issued Qty.")}{inp("nutIssuedQty","0")}</div>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr" }}>
              <div style={asmCell()}>{lbl("Bearing Inv. No.")}{inp("bearingInvNo","—")}</div>
              <div style={asmCell()}>{lbl("Bearing Inv. Date")}{inp("bearingInvDate","","date")}</div>
              <div style={asmCell(true)}>{lbl("Issued Qty.")}{inp("bearingIssuedQty","0")}</div>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr" }}>
              <div style={asmCell()}>{lbl("Bearing Shaft Inv. No.")}{inp("bearingShaftInvNo","—")}</div>
              <div style={asmCell()}>{lbl("Shaft Inv. Date")}{inp("shaftInvDate","","date")}</div>
              <div style={asmCell(true)}>{lbl("Issued Qty.")}{inp("shaftIssuedQty","0")}</div>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr" }}>
              <div style={asmCell()}>{lbl("Shell Bearing Inv. No.")}{inp("shellBearingInvNo","—")}</div>
              <div style={asmCell()}>{lbl("Shell Bearing Inv. Date")}{inp("shellBearingInvDate","","date")}</div>
              <div style={asmCell(true)} />
            </div>
            <table style={S.table}>
              <thead><tr>
                <th style={{...thStyle(),width:"22%"}}>Operation</th>
                <th style={thStyle()}>OK Qty.</th><th style={thStyle()}>Rew. Qty.</th>
                <th style={thStyle()}>Rej. Qty.</th><th style={thStyle()}>Date</th>
                <th style={thStyle(true)}>Sign.</th>
              </tr></thead>
              <tbody><tr>
                <td style={{...tdStyle(),fontSize:13,fontWeight:600,color:"#222"}}>Assembly</td>
                <td style={tdStyle()}>{tinp("assemblyOkQty","0")}</td>
                <td style={tdStyle()}>{tinp("assemblyRewQty","0")}</td>
                <td style={tdStyle()}>{tinp("assemblyRejQty","0")}</td>
                <td style={tdStyle()}>{tinp("assemblyDate","","date")}</td>
                <td style={tdStyle(true)}>{tinp("assemblySign","Signature")}</td>
              </tr></tbody>
            </table>

            {/* F */}
            <div style={S.sectionLabel}>F — Dispatch Use</div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr" }}>
              <div style={cell()}>{lbl("Despatch Invoice No.")}{inp("despatchInvoiceNo","—")}</div>
              <div style={cell(true)}>{lbl("Despatch Inv. Date")}{inp("despatchInvDate","","date")}</div>
            </div>

            <div style={S.formFooter}>
              <span style={S.formRef}>F760B/02</span>
              <div>
                <button type="button" style={S.btnReset} onClick={handleReset}>Reset</button>
                <button type="submit" style={S.btnSubmit}>Submit Route Card</button>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
}