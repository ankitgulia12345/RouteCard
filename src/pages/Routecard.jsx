// // // import { useState, useCallback, useRef } from "react";

// // // // ✅ STEP 1: Paste your Google Apps Script Web App URL here
// // // const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxi5kdQJzO4wCRwVGEW6sI1cHiIOHfZ14zfzeN19DkOyWoktlVhKuZNZeu7O7jT33L5/exec";

// // // // ─────────────────────────────────────────────
// // // //  STYLES
// // // // ─────────────────────────────────────────────
// // // const S = {
// // //   wrapper: { width: "100%", maxWidth: 900, margin: "32px auto", padding: "0 16px", fontFamily: "'Segoe UI', Arial, sans-serif", boxSizing: "border-box" },
// // //   card: { background: "#ffffff", border: "2px solid #111", boxShadow: "5px 5px 0px #111", width: "100%" },
// // //   header: { display: "grid", gridTemplateColumns: "1fr auto", borderBottom: "2px solid #111" },
// // //   headerTitle: { padding: "14px 20px", borderRight: "2px solid #111" },
// // //   headerH1: { fontSize: 22, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", margin: 0, color: "#111" },
// // //   headerSub: { fontSize: 13, fontWeight: 500, color: "#444", marginTop: 2, marginBottom: 0 },
// // //   headerLogo: { padding: "14px 20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" },
// // //   logoText: { fontSize: 22, fontWeight: 800, letterSpacing: "0.06em", color: "#111" },
// // //   logoSub: { fontSize: 11, color: "#666", fontStyle: "italic", marginTop: 2 },
// // //   sectionLabel: { background: "#111", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "5px 12px" },
// // //   fieldLabel: { fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#555", display: "block", marginBottom: 4 },
// // //   fieldInput: { fontFamily: "monospace", fontSize: 14, fontWeight: 500, border: "none", borderBottom: "1.5px solid #bbb", outline: "none", padding: "2px 0", width: "100%", background: "transparent", color: "#111", boxSizing: "border-box" },
// // //   table: { width: "100%", borderCollapse: "collapse", tableLayout: "fixed" },
// // //   tableInput: { fontFamily: "monospace", fontSize: 13, border: "none", borderBottom: "1.5px solid #ccc", width: "100%", background: "transparent", outline: "none", padding: "2px 0", boxSizing: "border-box", color: "#111" },
// // //   formFooter: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderTop: "2px solid #111", background: "#fafafa" },
// // //   formRef: { fontSize: 11, fontFamily: "monospace", color: "#888" },
// // //   btnReset: { background: "transparent", color: "#555", border: "1.5px solid #bbb", padding: "10px 20px", fontFamily: "inherit", fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer", marginRight: 10 },
// // //   btnSubmit: { background: "#111", color: "#fff", border: "none", padding: "10px 28px", fontFamily: "inherit", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" },
// // //   btnView: { background: "#1a56db", color: "#fff", border: "none", padding: "10px 24px", fontFamily: "inherit", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer" },
// // //   successBanner: { background: "#d4edda", border: "1.5px solid #28a745", color: "#155724", padding: "12px 20px", fontSize: 13, fontWeight: 600, marginBottom: 16 },
// // //   errorBanner: { background: "#f8d7da", border: "1.5px solid #dc3545", color: "#721c24", padding: "12px 20px", fontSize: 13, fontWeight: 600, marginBottom: 16 },
// // //   loadingBanner: { background: "#fff3cd", border: "1.5px solid #ffc107", color: "#856404", padding: "12px 20px", fontSize: 13, fontWeight: 600, marginBottom: 16 },
// // // };

// // // // ─────────────────────────────────────────────
// // // //  MODEL DATA
// // // // ─────────────────────────────────────────────
// // // const MODEL_DATA = {
// // //   HHRA1004: { component: "HHRA1004", issuedQty: "8000", issuedMaterialInvQty: "9000", customer: "HMSI", heatNo: "H123456" },
// // //   HHRA1006: { component: "HHRA1006", issuedQty: "7000", issuedMaterialInvQty: "8200", customer: "HMSI", heatNo: "M556677" },
// // //   HHRA1008: { component: "HHRA1008" },
// // //   HHRA1009: { component: "HHRA1009" },
// // //   HHRA1010: { component: "HHRA1010" },
// // //   HHRA1011: { component: "HHRA1011" },
// // //   HSRA1004: { component: "HSRA1004" },
// // //   HSRA1010: { component: "HSRA1010" },
// // //   HSRA1012: { component: "HSRA1012" },
// // //   HSRA1014: { component: "HSRA1014" },
// // //   HSRA1036: { component: "HSRA1036" },
// // //   HSRA1037: { component: "HSRA1037" },
// // //   HSRA1032: { component: "HSRA1032" },
// // //   HSRA1033: { component: "HSRA1033" },
// // //   HSRA1019: { component: "HSRA1019" },
// // //   HSRA1017: { component: "HSRA1017" },
// // // };

// // // // ─────────────────────────────────────────────
// // // //  SHARED CELL HELPERS
// // // // ─────────────────────────────────────────────
// // // const cell = (last = false, span2 = false) => ({
// // //   padding: "10px 12px", borderRight: last ? "none" : "1px solid #ccc", borderBottom: "1px solid #ccc",
// // //   display: "flex", flexDirection: "column", boxSizing: "border-box", gridColumn: span2 ? "span 2" : undefined,
// // // });
// // // const thStyle = (last = false) => ({
// // //   background: "#f5f5f5", fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
// // //   padding: "8px 12px", textAlign: "left", borderRight: last ? "none" : "1px solid #ccc", borderBottom: "1px solid #ccc", color: "#333",
// // // });
// // // const tdStyle = (last = false) => ({
// // //   padding: "8px 12px", borderRight: last ? "none" : "1px solid #eee", borderBottom: "1px solid #eee",
// // // });
// // // const asmCell = (last = false) => ({
// // //   padding: "8px 12px", borderRight: last ? "none" : "1px solid #ccc", borderBottom: "1px solid #ccc",
// // //   display: "flex", flexDirection: "column", boxSizing: "border-box",
// // // });

// // // // ─────────────────────────────────────────────
// // // //  INITIAL FORM STATE
// // // // ─────────────────────────────────────────────
// // // const initialState = {
// // //   routeCardNo: "", startDate: "", endDate: "", component: "", issuedMaterialInvNo: "",
// // //   issuedQty: "", issuedMaterialInvDate: "", customer: "", issuedMaterialInvQty: "", heatNo: "",
// // //   softMachiningOkQty: "", softMachiningRewQty: "", softMachiningRejQty: "", softMachiningDate: "", softMachiningSign: "",
// // //   htOkQty: "", htRewQty: "", htRejQty: "", htDate: "", htSign: "", htChargeNo: "", htChargeDate: "",
// // //   hardMachiningOkQty: "", hardMachiningRewQty: "", hardMachiningRejQty: "", hardMachiningDate: "", hardMachiningSign: "",
// // //   cleaningOkQty: "", cleaningRewQty: "", cleaningRejQty: "", cleaningDate: "", cleaningSign: "",
// // //   screwInvNo: "", screwInvDate: "", screwIssuedQty: "",
// // //   nutInvNo: "", nutInvDate: "", nutIssuedQty: "",
// // //   bearingInvNo: "", bearingInvDate: "", bearingIssuedQty: "",
// // //   bearingShaftInvNo: "", shaftInvDate: "", shaftIssuedQty: "",
// // //   shellBearingInvNo: "", shellBearingInvDate: "",
// // //   assemblyOkQty: "", assemblyRewQty: "", assemblyRejQty: "", assemblyDate: "", assemblySign: "",
// // //   despatchInvoiceNo: "", despatchInvDate: "",
// // // };

// // // // ─────────────────────────────────────────────
// // // //  VIEW ALL CARDS PAGE
// // // // ─────────────────────────────────────────────
// // // function ViewAllCards({ onBack }) {
// // //   const [cards, setCards] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState("");
// // //   const [search, setSearch] = useState("");

// // //   useState(() => {
// // //     fetch(APPS_SCRIPT_URL)
// // //       .then(r => r.json())
// // //       .then(res => {
// // //         if (res.status === "success") setCards(res.data);
// // //         else setError("Failed to load cards.");
// // //       })
// // //       .catch(() => setError("Network error. Check your Apps Script URL."))
// // //       .finally(() => setLoading(false));
// // //   }, []);

// // //   const filtered = cards.filter(c =>
// // //     Object.values(c).some(v => v.toString().toLowerCase().includes(search.toLowerCase()))
// // //   );

// // //   const cols = ["Timestamp", "Model", "RouteCardNo", "Component", "Customer", "IssuedQty", "HeatNo", "StartDate", "EndDate"];

// // //   return (
// // //     <div style={S.wrapper}>
// // //       <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
// // //         <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" }}>
// // //           All Route Cards
// // //         </h2>
// // //         <button style={S.btnReset} onClick={onBack}>← Back to Form</button>
// // //       </div>

// // //       <input
// // //         type="text"
// // //         placeholder="Search by model, customer, date..."
// // //         value={search}
// // //         onChange={e => setSearch(e.target.value)}
// // //         style={{ width: "100%", padding: "10px 14px", fontSize: 14, border: "2px solid #111", fontFamily: "inherit", marginBottom: 16, boxSizing: "border-box", outline: "none" }}
// // //       />

// // //       {loading && <div style={S.loadingBanner}>⏳ Loading Route Cards from Google Sheets...</div>}
// // //       {error && <div style={S.errorBanner}>✕ {error}</div>}

// // //       {!loading && !error && (
// // //         <>
// // //           <div style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>
// // //             {filtered.length} of {cards.length} route cards
// // //           </div>
// // //           <div style={{ overflowX: "auto", border: "2px solid #111", boxShadow: "5px 5px 0 #111" }}>
// // //             <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 800 }}>
// // //               <thead>
// // //                 <tr>
// // //                   {cols.map(col => (
// // //                     <th key={col} style={{ background: "#111", color: "#fff", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "8px 12px", textAlign: "left", whiteSpace: "nowrap" }}>
// // //                       {col}
// // //                     </th>
// // //                   ))}
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {filtered.length === 0 ? (
// // //                   <tr><td colSpan={cols.length} style={{ padding: 24, textAlign: "center", color: "#888", fontSize: 13 }}>No route cards found.</td></tr>
// // //                 ) : (
// // //                   filtered.map((card, i) => (
// // //                     <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f9f9f9" }}>
// // //                       {cols.map(col => (
// // //                         <td key={col} style={{ padding: "8px 12px", fontSize: 12, fontFamily: "monospace", borderBottom: "1px solid #eee", whiteSpace: "nowrap", color: "#111" }}>
// // //                           {card[col] || "—"}
// // //                         </td>
// // //                       ))}
// // //                     </tr>
// // //                   ))
// // //                 )}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         </>
// // //       )}
// // //     </div>
// // //   );
// // // }

// // // // ─────────────────────────────────────────────
// // // //  MAIN ROUTE CARD COMPONENT
// // // // ─────────────────────────────────────────────
// // // const Routecard = () => {
// // //   const [form, setForm] = useState(initialState);
// // //   const [selectedModel, setSelectedModel] = useState("");
// // //   const [search, setSearch] = useState("");
// // //   const [shaking, setShaking] = useState(false);
// // //   const [searchError, setSearchError] = useState(false);
// // //   const [showSuggestions, setShowSuggestions] = useState(false);

// // //   // Submit states
// // //   const [submitting, setSubmitting] = useState(false);
// // //   const [submitSuccess, setSubmitSuccess] = useState(false);
// // //   const [submitError, setSubmitError] = useState("");

// // //   // Page: "form" or "view"
// // //   const [page, setPage] = useState("form");

// // //   const allModels = Object.keys(MODEL_DATA);
// // //   const filteredModels = allModels.filter(m => m.toLowerCase().includes(search.toLowerCase()));

// // //   const openModel = (model) => {
// // //     setSelectedModel(model);
// // //     setForm({ ...initialState, ...MODEL_DATA[model] });
// // //     setSearch(model);
// // //     setShowSuggestions(false);
// // //     setSearchError(false);
// // //     setSubmitSuccess(false);
// // //     setSubmitError("");
// // //   };

// // //   const triggerShake = () => {
// // //     setShaking(true);
// // //     setSearchError(true);
// // //     setTimeout(() => setShaking(false), 500);
// // //   };

// // //   const handleSearchChange = (e) => {
// // //     const val = e.target.value;
// // //     setSearch(val);
// // //     setSearchError(false);
// // //     setShowSuggestions(val.length > 0);
// // //     const exact = allModels.find(m => m.toLowerCase() === val.toLowerCase());
// // //     if (exact) openModel(exact);
// // //   };

// // //   const handleSearchKeyDown = (e) => {
// // //     if (e.key === "Enter") {
// // //       const exact = allModels.find(m => m.toLowerCase() === search.toLowerCase());
// // //       if (exact) openModel(exact);
// // //       else if (filteredModels.length === 1) openModel(filteredModels[0]);
// // //       else triggerShake();
// // //     }
// // //     if (e.key === "Escape") setShowSuggestions(false);
// // //   };

// // //   const handleModelSelect = (e) => {
// // //     const model = e.target.value;
// // //     if (model) openModel(model);
// // //     else { setSelectedModel(""); setForm(initialState); setSearch(""); }
// // //   };

// // //   const handleChange = useCallback((e) => {
// // //     const field = e.target.getAttribute("data-field");
// // //     setForm(prev => ({ ...prev, [field]: e.target.value }));
// // //   }, []);

// // //   // ✅ SUBMIT — sends to Google Sheets
// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setSubmitting(true);
// // //     setSubmitSuccess(false);
// // //     setSubmitError("");

// // //     try {
// // //       const payload = { ...form, model: selectedModel };
// // //       const response = await fetch(APPS_SCRIPT_URL, {
// // //         method: "POST",
// // //         body: JSON.stringify(payload),
// // //       });
// // //       const result = await response.json();
// // //       if (result.status === "success") {
// // //         setSubmitSuccess(true);
// // //         setTimeout(() => setSubmitSuccess(false), 5000);
// // //       } else {
// // //         setSubmitError("Save failed: " + result.message);
// // //       }
// // //     } catch (err) {
// // //       setSubmitError("Network error. Check your Apps Script URL and internet connection.");
// // //     } finally {
// // //       setSubmitting(false);
// // //     }
// // //   };

// // //   const handleReset = () => {
// // //     setForm(selectedModel && MODEL_DATA[selectedModel]
// // //       ? { ...initialState, ...MODEL_DATA[selectedModel] }
// // //       : initialState
// // //     );
// // //     setSubmitSuccess(false);
// // //     setSubmitError("");
// // //   };

// // //   const inp = (field, placeholder = "", type = "text") => (
// // //     <input style={S.fieldInput} type={type} data-field={field} value={form[field]} onChange={handleChange} placeholder={placeholder} />
// // //   );
// // //   const tinp = (field, placeholder = "", type = "text") => (
// // //     <input style={S.tableInput} type={type} data-field={field} value={form[field]} onChange={handleChange} placeholder={placeholder} />
// // //   );
// // //   const lbl = (text) => <span style={S.fieldLabel}>{text}</span>;

// // //   // ─── VIEW ALL PAGE ───
// // //   if (page === "view") return <ViewAllCards onBack={() => setPage("form")} />;

// // //   // ─── FORM PAGE ───
// // //   return (
// // //     <div style={S.wrapper}>

// // //       <style>{`
// // //         @keyframes shake {
// // //           0%,100% { transform: translateX(0); }
// // //           15% { transform: translateX(-8px); }
// // //           30% { transform: translateX(8px); }
// // //           45% { transform: translateX(-5px); }
// // //           60% { transform: translateX(5px); }
// // //           75% { transform: translateX(-3px); }
// // //           90% { transform: translateX(3px); }
// // //         }
// // //         .shake { animation: shake 0.45s ease; }
// // //         .sug-item { padding: 9px 14px; font-size: 13px; font-family: monospace; font-weight: 600; border-bottom: 1px solid #eee; color: #111; cursor: pointer; }
// // //         .sug-item:hover { background: #f5f5f5; }
// // //         .btn-submit-loading { opacity: 0.7; cursor: not-allowed; }
// // //       `}</style>

// // //       {/* ── TOP BAR ── */}
// // //       <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
// // //         <button style={S.btnView} onClick={() => setPage("view")}>
// // //           📋 View All Saved Cards
// // //         </button>
// // //       </div>

// // //       {/* ── SELECTOR CARD ── */}
// // //       <div style={{ background: "#fff", border: "2px solid #111", boxShadow: "5px 5px 0 #111", padding: "24px 28px", marginBottom: 28 }}>
// // //         <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#555", marginBottom: 16 }}>
// // //           Select Model to Open Route Card
// // //         </div>

// // //         <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start" }}>

// // //           {/* Search */}
// // //           <div style={{ position: "relative", flex: 1, minWidth: 220 }}>
// // //             <div
// // //               className={shaking ? "shake" : ""}
// // //               style={{
// // //                 display: "flex", alignItems: "center", gap: 8,
// // //                 border: `2px solid ${searchError ? "#e53e3e" : "#bbb"}`,
// // //                 padding: "8px 12px",
// // //                 background: searchError ? "#fff5f5" : "#fafafa",
// // //                 transition: "border-color 0.2s, background 0.2s",
// // //               }}
// // //             >
// // //               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 30 30" fill={searchError ? "#e53e3e" : "#888"}>
// // //                 <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
// // //               </svg>
// // //               <input
// // //                 type="text"
// // //                 placeholder="Type model name & press Enter…"
// // //                 value={search}
// // //                 onChange={handleSearchChange}
// // //                 onKeyDown={handleSearchKeyDown}
// // //                 onFocus={() => search.length > 0 && setShowSuggestions(true)}
// // //                 onBlur={() => setTimeout(() => setShowSuggestions(false), 160)}
// // //                 style={{ border: "none", outline: "none", background: "transparent", fontSize: 14, color: searchError ? "#e53e3e" : "#111", width: "100%", fontFamily: "inherit", fontWeight: 500 }}
// // //               />
// // //               {search && (
// // //                 <span
// // //                   onMouseDown={() => { setSearch(""); setSearchError(false); setShowSuggestions(false); setSelectedModel(""); setForm(initialState); }}
// // //                   style={{ cursor: "pointer", color: "#aaa", fontSize: 16, userSelect: "none", lineHeight: 1 }}
// // //                 >✕</span>
// // //               )}
// // //             </div>

// // //             {searchError && (
// // //               <div style={{ fontSize: 11, color: "#e53e3e", marginTop: 5, fontWeight: 700 }}>
// // //                 ✕ Model not found — try HHRA or HSRA
// // //               </div>
// // //             )}

// // //             {showSuggestions && filteredModels.length > 0 && (
// // //               <div style={{ position: "absolute", top: "calc(100% + 2px)", left: 0, right: 0, zIndex: 200, border: "2px solid #111", background: "#fff", boxShadow: "4px 4px 0 #111", maxHeight: 200, overflowY: "auto" }}>
// // //                 {filteredModels.map(m => (
// // //                   <div key={m} className="sug-item" onMouseDown={() => openModel(m)}>{m}</div>
// // //                 ))}
// // //               </div>
// // //             )}

// // //             {showSuggestions && filteredModels.length === 0 && (
// // //               <div style={{ position: "absolute", top: "calc(100% + 2px)", left: 0, right: 0, zIndex: 200, border: "2px solid #e53e3e", background: "#fff5f5", padding: "10px 14px", fontSize: 12, color: "#e53e3e", fontWeight: 700 }}>
// // //                 No matching model found
// // //               </div>
// // //             )}
// // //           </div>

// // //           <div style={{ display: "flex", alignItems: "center", color: "#bbb", fontSize: 12, fontWeight: 700, paddingTop: 10 }}>OR</div>

// // //           {/* Dropdown */}
// // //           <select
// // //             value={selectedModel}
// // //             onChange={handleModelSelect}
// // //             style={{ padding: "10px 16px", border: "2px solid #111", fontSize: 14, fontFamily: "inherit", fontWeight: 600, background: "#fff", cursor: "pointer", minWidth: 220, outline: "none", height: 44 }}
// // //           >
// // //             <option value="">-- Select from list --</option>
// // //             {allModels.map(m => <option key={m} value={m}>{m}</option>)}
// // //           </select>
// // //         </div>

// // //         {!selectedModel && (
// // //           <div style={{ marginTop: 14, fontSize: 12, color: "#999", fontStyle: "italic" }}>
// // //             Type a model name or pick from the dropdown — the Route Card will open automatically.
// // //           </div>
// // //         )}
// // //         {selectedModel && (
// // //           <div style={{ marginTop: 14, display: "inline-flex", alignItems: "center", gap: 8, background: "#111", color: "#fff", padding: "5px 14px", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em" }}>
// // //             <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
// // //             LOADED: {selectedModel}
// // //           </div>
// // //         )}
// // //       </div>

// // //       {/* ── ROUTE CARD FORM ── */}
// // //       {selectedModel && (
// // //         <>
// // //           {submitSuccess && (
// // //             <div style={S.successBanner}>
// // //               ✓ Route Card saved to Google Sheets successfully!
// // //             </div>
// // //           )}
// // //           {submitError && (
// // //             <div style={S.errorBanner}>
// // //               ✕ {submitError}
// // //             </div>
// // //           )}

// // //           <form style={S.card} onSubmit={handleSubmit}>

// // //             {/* HEADER */}
// // //             <div style={S.header}>
// // //               <div style={S.headerTitle}>
// // //                 <h1 style={S.headerH1}>Route Card</h1>
// // //                 <p style={S.headerSub}>Roller Rocker Arm — <strong>{selectedModel}</strong></p>
// // //               </div>
// // //               <div style={S.headerLogo}>
// // //                 <div style={S.logoText}>SANSERA</div>
// // //                 <div style={S.logoSub}>ideas@work</div>
// // //               </div>
// // //             </div>

// // //             {/* A — STORE USE */}
// // //             <div style={S.sectionLabel}>A — Store Use</div>
// // //             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
// // //               <div style={cell()}>{lbl("Route Card No.")}{inp("routeCardNo")}</div>
// // //               <div style={cell()}>{lbl("Start Date")}{inp("startDate", "", "date")}</div>
// // //               <div style={cell()}>{lbl("End Date")}{inp("endDate", "", "date")}</div>
// // //               <div style={cell(true)} />
// // //             </div>
// // //             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
// // //               <div style={cell(false, true)}>{lbl("Component")}{inp("component")}</div>
// // //               <div style={cell()}>{lbl("Issued Material Inv. No.")}{inp("issuedMaterialInvNo")}</div>
// // //               <div style={cell(true)} />
// // //             </div>
// // //             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
// // //               <div style={cell()}>{lbl("Issued Qty.")}{inp("issuedQty")}</div>
// // //               <div style={cell()} />
// // //               <div style={cell()}>{lbl("Issued Material Inv. Date")}{inp("issuedMaterialInvDate", "", "date")}</div>
// // //               <div style={cell(true)} />
// // //             </div>
// // //             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
// // //               <div style={cell()}>{lbl("Customer")}{inp("customer")}</div>
// // //               <div style={cell()} />
// // //               <div style={cell()}>{lbl("Issued Material Inv. Qty.")}{inp("issuedMaterialInvQty")}</div>
// // //               <div style={cell(true)} />
// // //             </div>
// // //             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
// // //               <div style={cell()}>{lbl("Heat No.")}{inp("heatNo")}</div>
// // //               <div style={cell()} /><div style={cell()} /><div style={cell(true)} />
// // //             </div>

// // //             {/* B — MACHINE SHOP */}
// // //             <div style={S.sectionLabel}>B — Machine Shop Use</div>
// // //             <table style={S.table}>
// // //               <thead><tr>
// // //                 <th style={{ ...thStyle(), width: "22%" }}>Operation</th>
// // //                 <th style={thStyle()}>OK Qty.</th><th style={thStyle()}>Rew. Qty.</th>
// // //                 <th style={thStyle()}>Rej. Qty.</th><th style={thStyle()}>Date</th>
// // //                 <th style={thStyle(true)}>Sign.</th>
// // //               </tr></thead>
// // //               <tbody><tr>
// // //                 <td style={{ ...tdStyle(), fontSize: 13, fontWeight: 600, color: "#222" }}>Soft Machining</td>
// // //                 <td style={tdStyle()}>{tinp("softMachiningOkQty", "0")}</td>
// // //                 <td style={tdStyle()}>{tinp("softMachiningRewQty", "0")}</td>
// // //                 <td style={tdStyle()}>{tinp("softMachiningRejQty", "0")}</td>
// // //                 <td style={tdStyle()}>{tinp("softMachiningDate", "", "date")}</td>
// // //                 <td style={tdStyle(true)}>{tinp("softMachiningSign", "Signature")}</td>
// // //               </tr></tbody>
// // //             </table>

// // //             {/* C — HT SHOP */}
// // //             <div style={S.sectionLabel}>C — HT Shop Use</div>
// // //             <table style={S.table}>
// // //               <thead><tr>
// // //                 <th style={{ ...thStyle(), width: "22%" }}>Operation</th>
// // //                 <th style={thStyle()}>OK Qty.</th><th style={thStyle()}>Rew. Qty.</th>
// // //                 <th style={thStyle()}>Rej. Qty.</th><th style={thStyle()}>Date</th>
// // //                 <th style={thStyle(true)}>Sign.</th>
// // //               </tr></thead>
// // //               <tbody>
// // //                 <tr>
// // //                   <td style={{ ...tdStyle(), fontSize: 13, fontWeight: 600, color: "#222" }}>Heat Treatment</td>
// // //                   <td style={tdStyle()}>{tinp("htOkQty", "0")}</td>
// // //                   <td style={tdStyle()}>{tinp("htRewQty", "0")}</td>
// // //                   <td style={tdStyle()}>{tinp("htRejQty", "0")}</td>
// // //                   <td style={tdStyle()}>{tinp("htDate", "", "date")}</td>
// // //                   <td style={tdStyle(true)}>{tinp("htSign", "Signature")}</td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td style={tdStyle()}>{lbl("Heat Treatment Charge No.")}{tinp("htChargeNo", "—")}</td>
// // //                   <td style={tdStyle()} colSpan={2} />
// // //                   <td style={tdStyle(true)} colSpan={3}>{lbl("Heat Treatment Charge Date")}{tinp("htChargeDate", "", "date")}</td>
// // //                 </tr>
// // //               </tbody>
// // //             </table>

// // //             {/* D — MACHINE SHOP */}
// // //             <div style={S.sectionLabel}>D — Machine Shop Use</div>
// // //             <table style={S.table}>
// // //               <thead><tr>
// // //                 <th style={{ ...thStyle(), width: "22%" }}>Operation</th>
// // //                 <th style={thStyle()}>OK Qty.</th><th style={thStyle()}>Rew. Qty.</th>
// // //                 <th style={thStyle()}>Rej. Qty.</th><th style={thStyle()}>Date</th>
// // //                 <th style={thStyle(true)}>Sign.</th>
// // //               </tr></thead>
// // //               <tbody>
// // //                 <tr>
// // //                   <td style={{ ...tdStyle(), fontSize: 13, fontWeight: 600, color: "#222" }}>Hard Machining</td>
// // //                   <td style={tdStyle()}>{tinp("hardMachiningOkQty", "0")}</td>
// // //                   <td style={tdStyle()}>{tinp("hardMachiningRewQty", "0")}</td>
// // //                   <td style={tdStyle()}>{tinp("hardMachiningRejQty", "0")}</td>
// // //                   <td style={tdStyle()}>{tinp("hardMachiningDate", "", "date")}</td>
// // //                   <td style={tdStyle(true)}>{tinp("hardMachiningSign", "Signature")}</td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td style={{ ...tdStyle(), fontSize: 13, fontWeight: 600, color: "#222" }}>Cleaning</td>
// // //                   <td style={tdStyle()}>{tinp("cleaningOkQty", "0")}</td>
// // //                   <td style={tdStyle()}>{tinp("cleaningRewQty", "0")}</td>
// // //                   <td style={tdStyle()}>{tinp("cleaningRejQty", "0")}</td>
// // //                   <td style={tdStyle()}>{tinp("cleaningDate", "", "date")}</td>
// // //                   <td style={tdStyle(true)}>{tinp("cleaningSign", "Signature")}</td>
// // //                 </tr>
// // //               </tbody>
// // //             </table>

// // //             {/* E — ASSEMBLY */}
// // //             <div style={S.sectionLabel}>E — Assembly Use</div>
// // //             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
// // //               <div style={asmCell()}>{lbl("Screw Inv. No.")}{inp("screwInvNo", "—")}</div>
// // //               <div style={asmCell()}>{lbl("Screw Inv. Date")}{inp("screwInvDate", "", "date")}</div>
// // //               <div style={asmCell(true)}>{lbl("Issued Qty.")}{inp("screwIssuedQty", "0")}</div>
// // //             </div>
// // //             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
// // //               <div style={asmCell()}>{lbl("Nut Inv. No.")}{inp("nutInvNo", "—")}</div>
// // //               <div style={asmCell()}>{lbl("Nut Inv. Date")}{inp("nutInvDate", "", "date")}</div>
// // //               <div style={asmCell(true)}>{lbl("Issued Qty.")}{inp("nutIssuedQty", "0")}</div>
// // //             </div>
// // //             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
// // //               <div style={asmCell()}>{lbl("Bearing Inv. No.")}{inp("bearingInvNo", "—")}</div>
// // //               <div style={asmCell()}>{lbl("Bearing Inv. Date")}{inp("bearingInvDate", "", "date")}</div>
// // //               <div style={asmCell(true)}>{lbl("Issued Qty.")}{inp("bearingIssuedQty", "0")}</div>
// // //             </div>
// // //             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
// // //               <div style={asmCell()}>{lbl("Bearing Shaft Inv. No.")}{inp("bearingShaftInvNo", "—")}</div>
// // //               <div style={asmCell()}>{lbl("Shaft Inv. Date")}{inp("shaftInvDate", "", "date")}</div>
// // //               <div style={asmCell(true)}>{lbl("Issued Qty.")}{inp("shaftIssuedQty", "0")}</div>
// // //             </div>
// // //             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
// // //               <div style={asmCell()}>{lbl("Shell Bearing Inv. No.")}{inp("shellBearingInvNo", "—")}</div>
// // //               <div style={asmCell()}>{lbl("Shell Bearing Inv. Date")}{inp("shellBearingInvDate", "", "date")}</div>
// // //               <div style={asmCell(true)} />
// // //             </div>
// // //             <table style={S.table}>
// // //               <thead><tr>
// // //                 <th style={{ ...thStyle(), width: "22%" }}>Operation</th>
// // //                 <th style={thStyle()}>OK Qty.</th><th style={thStyle()}>Rew. Qty.</th>
// // //                 <th style={thStyle()}>Rej. Qty.</th><th style={thStyle()}>Date</th>
// // //                 <th style={thStyle(true)}>Sign.</th>
// // //               </tr></thead>
// // //               <tbody><tr>
// // //                 <td style={{ ...tdStyle(), fontSize: 13, fontWeight: 600, color: "#222" }}>Assembly</td>
// // //                 <td style={tdStyle()}>{tinp("assemblyOkQty", "0")}</td>
// // //                 <td style={tdStyle()}>{tinp("assemblyRewQty", "0")}</td>
// // //                 <td style={tdStyle()}>{tinp("assemblyRejQty", "0")}</td>
// // //                 <td style={tdStyle()}>{tinp("assemblyDate", "", "date")}</td>
// // //                 <td style={tdStyle(true)}>{tinp("assemblySign", "Signature")}</td>
// // //               </tr></tbody>
// // //             </table>

// // //             {/* F — DISPATCH */}
// // //             <div style={S.sectionLabel}>F — Dispatch Use</div>
// // //             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
// // //               <div style={cell()}>{lbl("Despatch Invoice No.")}{inp("despatchInvoiceNo", "—")}</div>
// // //               <div style={cell(true)}>{lbl("Despatch Inv. Date")}{inp("despatchInvDate", "", "date")}</div>
// // //             </div>

// // //             {/* FOOTER */}
// // //             <div style={S.formFooter}>
// // //               <span style={S.formRef}>F760B/02</span>
// // //               <div>
// // //                 <button type="button" style={S.btnReset} onClick={handleReset}>Reset</button>
// // //                 <button
// // //                   type="submit"
// // //                   style={{ ...S.btnSubmit, ...(submitting ? { opacity: 0.7, cursor: "not-allowed" } : {}) }}
// // //                   disabled={submitting}
// // //                 >
// // //                   {submitting ? "Saving..." : "Submit & Save to Sheet"}
// // //                 </button>
// // //               </div>
// // //             </div>

// // //           </form>
// // //         </>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Routecard;






// // import { useState, useCallback } from "react";

// // // ✅ Your Google Apps Script Web App URL
// // const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxi5kdQJzO4wCRwVGEW6sI1cHiIOHfZ14zfzeN19DkOyWoktlVhKuZNZeu7O7jT33L5/exec";

// // // ─────────────────────────────────────────────
// // //  STYLES
// // // ─────────────────────────────────────────────
// // const S = {
// //   wrapper: { width: "100%", maxWidth: 900, margin: "32px auto", padding: "0 16px", fontFamily: "'Segoe UI', Arial, sans-serif", boxSizing: "border-box" },
// //   card: { background: "#ffffff", border: "2px solid #111", boxShadow: "5px 5px 0px #111", width: "100%" },
// //   header: { display: "grid", gridTemplateColumns: "1fr auto", borderBottom: "2px solid #111" },
// //   headerTitle: { padding: "14px 20px", borderRight: "2px solid #111" },
// //   headerH1: { fontSize: 22, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", margin: 0, color: "#111" },
// //   headerSub: { fontSize: 13, fontWeight: 500, color: "#444", marginTop: 2, marginBottom: 0 },
// //   headerLogo: { padding: "14px 20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" },
// //   logoText: { fontSize: 22, fontWeight: 800, letterSpacing: "0.06em", color: "#111" },
// //   logoSub: { fontSize: 11, color: "#666", fontStyle: "italic", marginTop: 2 },
// //   sectionLabel: { background: "#111", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "5px 12px" },
// //   fieldLabel: { fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#555", display: "block", marginBottom: 4 },
// //   fieldInput: { fontFamily: "monospace", fontSize: 14, fontWeight: 500, border: "none", borderBottom: "1.5px solid #bbb", outline: "none", padding: "2px 0", width: "100%", background: "transparent", color: "#111", boxSizing: "border-box" },
// //   table: { width: "100%", borderCollapse: "collapse", tableLayout: "fixed" },
// //   tableInput: { fontFamily: "monospace", fontSize: 13, border: "none", borderBottom: "1.5px solid #ccc", width: "100%", background: "transparent", outline: "none", padding: "2px 0", boxSizing: "border-box", color: "#111" },
// //   formFooter: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderTop: "2px solid #111", background: "#fafafa" },
// //   formRef: { fontSize: 11, fontFamily: "monospace", color: "#888" },
// //   btnReset: { background: "transparent", color: "#555", border: "1.5px solid #bbb", padding: "10px 20px", fontFamily: "inherit", fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer", marginRight: 10 },
// //   btnSubmit: { background: "#111", color: "#fff", border: "none", padding: "10px 28px", fontFamily: "inherit", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" },
// //   btnView: { background: "#1a56db", color: "#fff", border: "none", padding: "10px 24px", fontFamily: "inherit", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer" },
// //   successBanner: { background: "#d4edda", border: "1.5px solid #28a745", color: "#155724", padding: "12px 20px", fontSize: 13, fontWeight: 600, marginBottom: 16 },
// //   errorBanner: { background: "#f8d7da", border: "1.5px solid #dc3545", color: "#721c24", padding: "12px 20px", fontSize: 13, fontWeight: 600, marginBottom: 16 },
// //   loadingBanner: { background: "#fff3cd", border: "1.5px solid #ffc107", color: "#856404", padding: "12px 20px", fontSize: 13, fontWeight: 600, marginBottom: 16 },
// // };

// // // ─────────────────────────────────────────────
// // //  MODEL DATA
// // // ─────────────────────────────────────────────
// // const MODEL_DATA = {
// //   HHRA1004: { component: "HHRA1004", issuedQty: "8000", issuedMaterialInvQty: "9000", customer: "HMSI", heatNo: "H123456" },
// //   HHRA1006: { component: "HHRA1006", issuedQty: "7000", issuedMaterialInvQty: "8200", customer: "HMSI", heatNo: "M556677" },
// //   HHRA1008: { component: "HHRA1008" },
// //   HHRA1009: { component: "HHRA1009" },
// //   HHRA1010: { component: "HHRA1010" },
// //   HHRA1011: { component: "HHRA1011" },
// //   HSRA1004: { component: "HSRA1004" },
// //   HSRA1010: { component: "HSRA1010" },
// //   HSRA1012: { component: "HSRA1012" },
// //   HSRA1014: { component: "HSRA1014" },
// //   HSRA1036: { component: "HSRA1036" },
// //   HSRA1037: { component: "HSRA1037" },
// //   HSRA1032: { component: "HSRA1032" },
// //   HSRA1033: { component: "HSRA1033" },
// //   HSRA1019: { component: "HSRA1019" },
// //   HSRA1017: { component: "HSRA1017" },
// // };

// // // ─────────────────────────────────────────────
// // //  SHARED CELL HELPERS
// // // ─────────────────────────────────────────────
// // const cell = (last = false, span2 = false) => ({
// //   padding: "10px 12px", borderRight: last ? "none" : "1px solid #ccc", borderBottom: "1px solid #ccc",
// //   display: "flex", flexDirection: "column", boxSizing: "border-box", gridColumn: span2 ? "span 2" : undefined,
// // });
// // const thStyle = (last = false) => ({
// //   background: "#f5f5f5", fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
// //   padding: "8px 12px", textAlign: "left", borderRight: last ? "none" : "1px solid #ccc", borderBottom: "1px solid #ccc", color: "#333",
// // });
// // const tdStyle = (last = false) => ({
// //   padding: "8px 12px", borderRight: last ? "none" : "1px solid #eee", borderBottom: "1px solid #eee",
// // });
// // const asmCell = (last = false) => ({
// //   padding: "8px 12px", borderRight: last ? "none" : "1px solid #ccc", borderBottom: "1px solid #ccc",
// //   display: "flex", flexDirection: "column", boxSizing: "border-box",
// // });

// // // ─────────────────────────────────────────────
// // //  INITIAL FORM STATE
// // // ─────────────────────────────────────────────
// // const initialState = {
// //   routeCardNo: "", startDate: "", endDate: "", component: "", issuedMaterialInvNo: "",
// //   issuedQty: "", issuedMaterialInvDate: "", customer: "", issuedMaterialInvQty: "", heatNo: "",
// //   softMachiningOkQty: "", softMachiningRewQty: "", softMachiningRejQty: "", softMachiningDate: "", softMachiningSign: "",
// //   htOkQty: "", htRewQty: "", htRejQty: "", htDate: "", htSign: "", htChargeNo: "", htChargeDate: "",
// //   hardMachiningOkQty: "", hardMachiningRewQty: "", hardMachiningRejQty: "", hardMachiningDate: "", hardMachiningSign: "",
// //   cleaningOkQty: "", cleaningRewQty: "", cleaningRejQty: "", cleaningDate: "", cleaningSign: "",
// //   screwInvNo: "", screwInvDate: "", screwIssuedQty: "",
// //   nutInvNo: "", nutInvDate: "", nutIssuedQty: "",
// //   bearingInvNo: "", bearingInvDate: "", bearingIssuedQty: "",
// //   bearingShaftInvNo: "", shaftInvDate: "", shaftIssuedQty: "",
// //   shellBearingInvNo: "", shellBearingInvDate: "",
// //   assemblyOkQty: "", assemblyRewQty: "", assemblyRejQty: "", assemblyDate: "", assemblySign: "",
// //   despatchInvoiceNo: "", despatchInvDate: "",
// // };

// // // ─────────────────────────────────────────────
// // //  VIEW ALL CARDS PAGE  ← FetchFix applied here
// // // ─────────────────────────────────────────────
// // function ViewAllCards({ onBack }) {
// //   const [cards, setCards] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");
// //   const [search, setSearch] = useState("");

// //   // ✅ FETCHFIX — GET request (no-cors not needed for GET, plain fetch works)
// //   useState(() => {
// //     const url = `${APPS_SCRIPT_URL}?t=${Date.now()}`;
// //     fetch(url, { method: "GET" })
// //       .then(r => r.json())
// //       .then(res => {
// //         if (res.status === "success") setCards(res.data);
// //         else setError("Could not load cards: " + res.message);
// //       })
// //       .catch(() =>
// //         setError(
// //           "Cannot reach Google Sheets. Make sure:\n" +
// //           "1. Your URL ends with /exec\n" +
// //           "2. Access is set to 'Anyone'\n" +
// //           "3. You redeployed after any script changes"
// //         )
// //       )
// //       .finally(() => setLoading(false));
// //   }, []);

// //   const filtered = cards.filter(c =>
// //     Object.values(c).some(v => v.toString().toLowerCase().includes(search.toLowerCase()))
// //   );

// //   const cols = ["Timestamp", "Model", "RouteCardNo", "Component", "Customer", "IssuedQty", "HeatNo", "StartDate", "EndDate"];

// //   return (
// //     <div style={S.wrapper}>
// //       <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
// //         <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" }}>
// //           All Route Cards
// //         </h2>
// //         <button style={S.btnReset} onClick={onBack}>← Back to Form</button>
// //       </div>

// //       <input
// //         type="text"
// //         placeholder="Search by model, customer, date..."
// //         value={search}
// //         onChange={e => setSearch(e.target.value)}
// //         style={{ width: "100%", padding: "10px 14px", fontSize: 14, border: "2px solid #111", fontFamily: "inherit", marginBottom: 16, boxSizing: "border-box", outline: "none" }}
// //       />

// //       {loading && <div style={S.loadingBanner}>⏳ Loading Route Cards from Google Sheets...</div>}
// //       {error && <div style={{ ...S.errorBanner, whiteSpace: "pre-line" }}>✕ {error}</div>}

// //       {!loading && !error && (
// //         <>
// //           <div style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>
// //             {filtered.length} of {cards.length} route cards
// //           </div>
// //           <div style={{ overflowX: "auto", border: "2px solid #111", boxShadow: "5px 5px 0 #111" }}>
// //             <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 800 }}>
// //               <thead>
// //                 <tr>
// //                   {cols.map(col => (
// //                     <th key={col} style={{ background: "#111", color: "#fff", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "8px 12px", textAlign: "left", whiteSpace: "nowrap" }}>
// //                       {col}
// //                     </th>
// //                   ))}
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {filtered.length === 0 ? (
// //                   <tr><td colSpan={cols.length} style={{ padding: 24, textAlign: "center", color: "#888", fontSize: 13 }}>No route cards found.</td></tr>
// //                 ) : (
// //                   filtered.map((card, i) => (
// //                     <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f9f9f9" }}>
// //                       {cols.map(col => (
// //                         <td key={col} style={{ padding: "8px 12px", fontSize: 12, fontFamily: "monospace", borderBottom: "1px solid #eee", whiteSpace: "nowrap", color: "#111" }}>
// //                           {card[col] || "—"}
// //                         </td>
// //                       ))}
// //                     </tr>
// //                   ))
// //                 )}
// //               </tbody>
// //             </table>
// //           </div>
// //         </>
// //       )}
// //     </div>
// //   );
// // }

// // // ─────────────────────────────────────────────
// // //  MAIN ROUTE CARD COMPONENT
// // // ─────────────────────────────────────────────
// // const Routecard = () => {
// //   const [form, setForm] = useState(initialState);
// //   const [selectedModel, setSelectedModel] = useState("");
// //   const [search, setSearch] = useState("");
// //   const [shaking, setShaking] = useState(false);
// //   const [searchError, setSearchError] = useState(false);
// //   const [showSuggestions, setShowSuggestions] = useState(false);

// //   const [submitting, setSubmitting] = useState(false);
// //   const [submitSuccess, setSubmitSuccess] = useState(false);
// //   const [submitError, setSubmitError] = useState("");

// //   const [page, setPage] = useState("form");

// //   const allModels = Object.keys(MODEL_DATA);
// //   const filteredModels = allModels.filter(m => m.toLowerCase().includes(search.toLowerCase()));

// //   const openModel = (model) => {
// //     setSelectedModel(model);
// //     setForm({ ...initialState, ...MODEL_DATA[model] });
// //     setSearch(model);
// //     setShowSuggestions(false);
// //     setSearchError(false);
// //     setSubmitSuccess(false);
// //     setSubmitError("");
// //   };

// //   const triggerShake = () => {
// //     setShaking(true);
// //     setSearchError(true);
// //     setTimeout(() => setShaking(false), 500);
// //   };

// //   const handleSearchChange = (e) => {
// //     const val = e.target.value;
// //     setSearch(val);
// //     setSearchError(false);
// //     setShowSuggestions(val.length > 0);
// //     const exact = allModels.find(m => m.toLowerCase() === val.toLowerCase());
// //     if (exact) openModel(exact);
// //   };

// //   const handleSearchKeyDown = (e) => {
// //     if (e.key === "Enter") {
// //       const exact = allModels.find(m => m.toLowerCase() === search.toLowerCase());
// //       if (exact) openModel(exact);
// //       else if (filteredModels.length === 1) openModel(filteredModels[0]);
// //       else triggerShake();
// //     }
// //     if (e.key === "Escape") setShowSuggestions(false);
// //   };

// //   const handleModelSelect = (e) => {
// //     const model = e.target.value;
// //     if (model) openModel(model);
// //     else { setSelectedModel(""); setForm(initialState); setSearch(""); }
// //   };

// //   const handleChange = useCallback((e) => {
// //     const field = e.target.getAttribute("data-field");
// //     setForm(prev => ({ ...prev, [field]: e.target.value }));
// //   }, []);

// //   // ✅ FETCHFIX — POST with mode: "no-cors" (required for Google Apps Script)
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setSubmitting(true);
// //     setSubmitSuccess(false);
// //     setSubmitError("");

// //     try {
// //       const payload = { ...form, model: selectedModel };

// //       await fetch(APPS_SCRIPT_URL, {
// //         method: "POST",
// //         mode: "no-cors",                        // ← KEY FIX: required for Apps Script
// //         headers: { "Content-Type": "text/plain" },
// //         body: JSON.stringify(payload),
// //       });

// //       // With no-cors, response is opaque — if no error is thrown, save succeeded
// //       setSubmitSuccess(true);
// //       setTimeout(() => setSubmitSuccess(false), 5000);

// //     } catch (err) {
// //       setSubmitError("Failed to save. Check your Apps Script URL and redeploy.");
// //     } finally {
// //       setSubmitting(false);
// //     }
// //   };

// //   const handleReset = () => {
// //     setForm(selectedModel && MODEL_DATA[selectedModel]
// //       ? { ...initialState, ...MODEL_DATA[selectedModel] }
// //       : initialState
// //     );
// //     setSubmitSuccess(false);
// //     setSubmitError("");
// //   };

// //   const inp = (field, placeholder = "", type = "text") => (
// //     <input style={S.fieldInput} type={type} data-field={field} value={form[field]} onChange={handleChange} placeholder={placeholder} />
// //   );
// //   const tinp = (field, placeholder = "", type = "text") => (
// //     <input style={S.tableInput} type={type} data-field={field} value={form[field]} onChange={handleChange} placeholder={placeholder} />
// //   );
// //   const lbl = (text) => <span style={S.fieldLabel}>{text}</span>;

// //   if (page === "view") return <ViewAllCards onBack={() => setPage("form")} />;

// //   return (
// //     <div style={S.wrapper}>

// //       <style>{`
// //         @keyframes shake {
// //           0%,100% { transform: translateX(0); }
// //           15% { transform: translateX(-8px); }
// //           30% { transform: translateX(8px); }
// //           45% { transform: translateX(-5px); }
// //           60% { transform: translateX(5px); }
// //           75% { transform: translateX(-3px); }
// //           90% { transform: translateX(3px); }
// //         }
// //         .shake { animation: shake 0.45s ease; }
// //         .sug-item { padding: 9px 14px; font-size: 13px; font-family: monospace; font-weight: 600; border-bottom: 1px solid #eee; color: #111; cursor: pointer; }
// //         .sug-item:hover { background: #f5f5f5; }
// //       `}</style>

// //       {/* ── TOP BAR ── */}
// //       <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
// //         <button style={S.btnView} onClick={() => setPage("view")}>
// //           📋 View All Saved Cards
// //         </button>
// //       </div>

// //       {/* ── SELECTOR CARD ── */}
// //       <div style={{ background: "#fff", border: "2px solid #111", boxShadow: "5px 5px 0 #111", padding: "24px 28px", marginBottom: 28 }}>
// //         <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#555", marginBottom: 16 }}>
// //           Select Model to Open Route Card
// //         </div>

// //         <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start" }}>

// //           {/* Search */}
// //           <div style={{ position: "relative", flex: 1, minWidth: 220 }}>
// //             <div
// //               className={shaking ? "shake" : ""}
// //               style={{
// //                 display: "flex", alignItems: "center", gap: 8,
// //                 border: `2px solid ${searchError ? "#e53e3e" : "#bbb"}`,
// //                 padding: "8px 12px",
// //                 background: searchError ? "#fff5f5" : "#fafafa",
// //                 transition: "border-color 0.2s, background 0.2s",
// //               }}
// //             >
// //               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 30 30" fill={searchError ? "#e53e3e" : "#888"}>
// //                 <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
// //               </svg>
// //               <input
// //                 type="text"
// //                 placeholder="Type model name & press Enter…"
// //                 value={search}
// //                 onChange={handleSearchChange}
// //                 onKeyDown={handleSearchKeyDown}
// //                 onFocus={() => search.length > 0 && setShowSuggestions(true)}
// //                 onBlur={() => setTimeout(() => setShowSuggestions(false), 160)}
// //                 style={{ border: "none", outline: "none", background: "transparent", fontSize: 14, color: searchError ? "#e53e3e" : "#111", width: "100%", fontFamily: "inherit", fontWeight: 500 }}
// //               />
// //               {search && (
// //                 <span
// //                   onMouseDown={() => { setSearch(""); setSearchError(false); setShowSuggestions(false); setSelectedModel(""); setForm(initialState); }}
// //                   style={{ cursor: "pointer", color: "#aaa", fontSize: 16, userSelect: "none", lineHeight: 1 }}
// //                 >✕</span>
// //               )}
// //             </div>

// //             {searchError && (
// //               <div style={{ fontSize: 11, color: "#e53e3e", marginTop: 5, fontWeight: 700 }}>
// //                 ✕ Model not found — try HHRA or HSRA
// //               </div>
// //             )}

// //             {showSuggestions && filteredModels.length > 0 && (
// //               <div style={{ position: "absolute", top: "calc(100% + 2px)", left: 0, right: 0, zIndex: 200, border: "2px solid #111", background: "#fff", boxShadow: "4px 4px 0 #111", maxHeight: 200, overflowY: "auto" }}>
// //                 {filteredModels.map(m => (
// //                   <div key={m} className="sug-item" onMouseDown={() => openModel(m)}>{m}</div>
// //                 ))}
// //               </div>
// //             )}

// //             {showSuggestions && filteredModels.length === 0 && (
// //               <div style={{ position: "absolute", top: "calc(100% + 2px)", left: 0, right: 0, zIndex: 200, border: "2px solid #e53e3e", background: "#fff5f5", padding: "10px 14px", fontSize: 12, color: "#e53e3e", fontWeight: 700 }}>
// //                 No matching model found
// //               </div>
// //             )}
// //           </div>

// //           <div style={{ display: "flex", alignItems: "center", color: "#bbb", fontSize: 12, fontWeight: 700, paddingTop: 10 }}>OR</div>

// //           {/* Dropdown */}
// //           <select
// //             value={selectedModel}
// //             onChange={handleModelSelect}
// //             style={{ padding: "10px 16px", border: "2px solid #111", fontSize: 14, fontFamily: "inherit", fontWeight: 600, background: "#fff", cursor: "pointer", minWidth: 220, outline: "none", height: 44 }}
// //           >
// //             <option value="">-- Select from list --</option>
// //             {allModels.map(m => <option key={m} value={m}>{m}</option>)}
// //           </select>
// //         </div>

// //         {!selectedModel && (
// //           <div style={{ marginTop: 14, fontSize: 12, color: "#999", fontStyle: "italic" }}>
// //             Type a model name or pick from the dropdown — the Route Card will open automatically.
// //           </div>
// //         )}
// //         {selectedModel && (
// //           <div style={{ marginTop: 14, display: "inline-flex", alignItems: "center", gap: 8, background: "#111", color: "#fff", padding: "5px 14px", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em" }}>
// //             <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
// //             LOADED: {selectedModel}
// //           </div>
// //         )}
// //       </div>

// //       {/* ── ROUTE CARD FORM ── */}
// //       {selectedModel && (
// //         <>
// //           {submitSuccess && (
// //             <div style={S.successBanner}>
// //               ✓ Route Card saved to Google Sheets successfully!
// //             </div>
// //           )}
// //           {submitError && (
// //             <div style={S.errorBanner}>✕ {submitError}</div>
// //           )}

// //           <form style={S.card} onSubmit={handleSubmit}>

// //             {/* HEADER */}
// //             <div style={S.header}>
// //               <div style={S.headerTitle}>
// //                 <h1 style={S.headerH1}>Route Card</h1>
// //                 <p style={S.headerSub}>Roller Rocker Arm — <strong>{selectedModel}</strong></p>
// //               </div>
// //               <div style={S.headerLogo}>
// //                 <div style={S.logoText}>SANSERA</div>
// //                 <div style={S.logoSub}>ideas@work</div>
// //               </div>
// //             </div>

// //             {/* A — STORE USE */}
// //             <div style={S.sectionLabel}>A — Store Use</div>
// //             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
// //               <div style={cell()}>{lbl("Route Card No.")}{inp("routeCardNo")}</div>
// //               <div style={cell()}>{lbl("Start Date")}{inp("startDate", "", "date")}</div>
// //               <div style={cell()}>{lbl("End Date")}{inp("endDate", "", "date")}</div>
// //               <div style={cell(true)} />
// //             </div>
// //             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
// //               <div style={cell(false, true)}>{lbl("Component")}{inp("component")}</div>
// //               <div style={cell()}>{lbl("Issued Material Inv. No.")}{inp("issuedMaterialInvNo")}</div>
// //               <div style={cell(true)} />
// //             </div>
// //             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
// //               <div style={cell()}>{lbl("Issued Qty.")}{inp("issuedQty")}</div>
// //               <div style={cell()} />
// //               <div style={cell()}>{lbl("Issued Material Inv. Date")}{inp("issuedMaterialInvDate", "", "date")}</div>
// //               <div style={cell(true)} />
// //             </div>
// //             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
// //               <div style={cell()}>{lbl("Customer")}{inp("customer")}</div>
// //               <div style={cell()} />
// //               <div style={cell()}>{lbl("Issued Material Inv. Qty.")}{inp("issuedMaterialInvQty")}</div>
// //               <div style={cell(true)} />
// //             </div>
// //             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
// //               <div style={cell()}>{lbl("Heat No.")}{inp("heatNo")}</div>
// //               <div style={cell()} /><div style={cell()} /><div style={cell(true)} />
// //             </div>

// //             {/* B — MACHINE SHOP */}
// //             <div style={S.sectionLabel}>B — Machine Shop Use</div>
// //             <table style={S.table}>
// //               <thead><tr>
// //                 <th style={{ ...thStyle(), width: "22%" }}>Operation</th>
// //                 <th style={thStyle()}>OK Qty.</th><th style={thStyle()}>Rew. Qty.</th>
// //                 <th style={thStyle()}>Rej. Qty.</th><th style={thStyle()}>Date</th>
// //                 <th style={thStyle(true)}>Sign.</th>
// //               </tr></thead>
// //               <tbody><tr>
// //                 <td style={{ ...tdStyle(), fontSize: 13, fontWeight: 600, color: "#222" }}>Soft Machining</td>
// //                 <td style={tdStyle()}>{tinp("softMachiningOkQty", "0")}</td>
// //                 <td style={tdStyle()}>{tinp("softMachiningRewQty", "0")}</td>
// //                 <td style={tdStyle()}>{tinp("softMachiningRejQty", "0")}</td>
// //                 <td style={tdStyle()}>{tinp("softMachiningDate", "", "date")}</td>
// //                 <td style={tdStyle(true)}>{tinp("softMachiningSign", "Signature")}</td>
// //               </tr></tbody>
// //             </table>

// //             {/* C — HT SHOP */}
// //             <div style={S.sectionLabel}>C — HT Shop Use</div>
// //             <table style={S.table}>
// //               <thead><tr>
// //                 <th style={{ ...thStyle(), width: "22%" }}>Operation</th>
// //                 <th style={thStyle()}>OK Qty.</th><th style={thStyle()}>Rew. Qty.</th>
// //                 <th style={thStyle()}>Rej. Qty.</th><th style={thStyle()}>Date</th>
// //                 <th style={thStyle(true)}>Sign.</th>
// //               </tr></thead>
// //               <tbody>
// //                 <tr>
// //                   <td style={{ ...tdStyle(), fontSize: 13, fontWeight: 600, color: "#222" }}>Heat Treatment</td>
// //                   <td style={tdStyle()}>{tinp("htOkQty", "0")}</td>
// //                   <td style={tdStyle()}>{tinp("htRewQty", "0")}</td>
// //                   <td style={tdStyle()}>{tinp("htRejQty", "0")}</td>
// //                   <td style={tdStyle()}>{tinp("htDate", "", "date")}</td>
// //                   <td style={tdStyle(true)}>{tinp("htSign", "Signature")}</td>
// //                 </tr>
// //                 <tr>
// //                   <td style={tdStyle()}>{lbl("Heat Treatment Charge No.")}{tinp("htChargeNo", "—")}</td>
// //                   <td style={tdStyle()} colSpan={2} />
// //                   <td style={tdStyle(true)} colSpan={3}>{lbl("Heat Treatment Charge Date")}{tinp("htChargeDate", "", "date")}</td>
// //                 </tr>
// //               </tbody>
// //             </table>

// //             {/* D — MACHINE SHOP */}
// //             <div style={S.sectionLabel}>D — Machine Shop Use</div>
// //             <table style={S.table}>
// //               <thead><tr>
// //                 <th style={{ ...thStyle(), width: "22%" }}>Operation</th>
// //                 <th style={thStyle()}>OK Qty.</th><th style={thStyle()}>Rew. Qty.</th>
// //                 <th style={thStyle()}>Rej. Qty.</th><th style={thStyle()}>Date</th>
// //                 <th style={thStyle(true)}>Sign.</th>
// //               </tr></thead>
// //               <tbody>
// //                 <tr>
// //                   <td style={{ ...tdStyle(), fontSize: 13, fontWeight: 600, color: "#222" }}>Hard Machining</td>
// //                   <td style={tdStyle()}>{tinp("hardMachiningOkQty", "0")}</td>
// //                   <td style={tdStyle()}>{tinp("hardMachiningRewQty", "0")}</td>
// //                   <td style={tdStyle()}>{tinp("hardMachiningRejQty", "0")}</td>
// //                   <td style={tdStyle()}>{tinp("hardMachiningDate", "", "date")}</td>
// //                   <td style={tdStyle(true)}>{tinp("hardMachiningSign", "Signature")}</td>
// //                 </tr>
// //                 <tr>
// //                   <td style={{ ...tdStyle(), fontSize: 13, fontWeight: 600, color: "#222" }}>Cleaning</td>
// //                   <td style={tdStyle()}>{tinp("cleaningOkQty", "0")}</td>
// //                   <td style={tdStyle()}>{tinp("cleaningRewQty", "0")}</td>
// //                   <td style={tdStyle()}>{tinp("cleaningRejQty", "0")}</td>
// //                   <td style={tdStyle()}>{tinp("cleaningDate", "", "date")}</td>
// //                   <td style={tdStyle(true)}>{tinp("cleaningSign", "Signature")}</td>
// //                 </tr>
// //               </tbody>
// //             </table>

// //             {/* E — ASSEMBLY */}
// //             <div style={S.sectionLabel}>E — Assembly Use</div>
// //             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
// //               <div style={asmCell()}>{lbl("Screw Inv. No.")}{inp("screwInvNo", "—")}</div>
// //               <div style={asmCell()}>{lbl("Screw Inv. Date")}{inp("screwInvDate", "", "date")}</div>
// //               <div style={asmCell(true)}>{lbl("Issued Qty.")}{inp("screwIssuedQty", "0")}</div>
// //             </div>
// //             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
// //               <div style={asmCell()}>{lbl("Nut Inv. No.")}{inp("nutInvNo", "—")}</div>
// //               <div style={asmCell()}>{lbl("Nut Inv. Date")}{inp("nutInvDate", "", "date")}</div>
// //               <div style={asmCell(true)}>{lbl("Issued Qty.")}{inp("nutIssuedQty", "0")}</div>
// //             </div>
// //             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
// //               <div style={asmCell()}>{lbl("Bearing Inv. No.")}{inp("bearingInvNo", "—")}</div>
// //               <div style={asmCell()}>{lbl("Bearing Inv. Date")}{inp("bearingInvDate", "", "date")}</div>
// //               <div style={asmCell(true)}>{lbl("Issued Qty.")}{inp("bearingIssuedQty", "0")}</div>
// //             </div>
// //             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
// //               <div style={asmCell()}>{lbl("Bearing Shaft Inv. No.")}{inp("bearingShaftInvNo", "—")}</div>
// //               <div style={asmCell()}>{lbl("Shaft Inv. Date")}{inp("shaftInvDate", "", "date")}</div>
// //               <div style={asmCell(true)}>{lbl("Issued Qty.")}{inp("shaftIssuedQty", "0")}</div>
// //             </div>
// //             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
// //               <div style={asmCell()}>{lbl("Shell Bearing Inv. No.")}{inp("shellBearingInvNo", "—")}</div>
// //               <div style={asmCell()}>{lbl("Shell Bearing Inv. Date")}{inp("shellBearingInvDate", "", "date")}</div>
// //               <div style={asmCell(true)} />
// //             </div>
// //             <table style={S.table}>
// //               <thead><tr>
// //                 <th style={{ ...thStyle(), width: "22%" }}>Operation</th>
// //                 <th style={thStyle()}>OK Qty.</th><th style={thStyle()}>Rew. Qty.</th>
// //                 <th style={thStyle()}>Rej. Qty.</th><th style={thStyle()}>Date</th>
// //                 <th style={thStyle(true)}>Sign.</th>
// //               </tr></thead>
// //               <tbody><tr>
// //                 <td style={{ ...tdStyle(), fontSize: 13, fontWeight: 600, color: "#222" }}>Assembly</td>
// //                 <td style={tdStyle()}>{tinp("assemblyOkQty", "0")}</td>
// //                 <td style={tdStyle()}>{tinp("assemblyRewQty", "0")}</td>
// //                 <td style={tdStyle()}>{tinp("assemblyRejQty", "0")}</td>
// //                 <td style={tdStyle()}>{tinp("assemblyDate", "", "date")}</td>
// //                 <td style={tdStyle(true)}>{tinp("assemblySign", "Signature")}</td>
// //               </tr></tbody>
// //             </table>

// //             {/* F — DISPATCH */}
// //             <div style={S.sectionLabel}>F — Dispatch Use</div>
// //             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
// //               <div style={cell()}>{lbl("Despatch Invoice No.")}{inp("despatchInvoiceNo", "—")}</div>
// //               <div style={cell(true)}>{lbl("Despatch Inv. Date")}{inp("despatchInvDate", "", "date")}</div>
// //             </div>

// //             {/* FOOTER */}
// //             <div style={S.formFooter}>
// //               <span style={S.formRef}>F760B/02</span>
// //               <div>
// //                 <button type="button" style={S.btnReset} onClick={handleReset}>Reset</button>
// //                 <button
// //                   type="submit"
// //                   style={{ ...S.btnSubmit, ...(submitting ? { opacity: 0.7, cursor: "not-allowed" } : {}) }}
// //                   disabled={submitting}
// //                 >
// //                   {submitting ? "Saving..." : "Submit & Save to Sheet"}
// //                 </button>
// //               </div>
// //             </div>

// //           </form>
// //         </>
// //       )}
// //     </div>
// //   );
// // };

// // export default Routecard;













// import { useState, useCallback, useRef } from "react";

// // ✅ Your Google Apps Script Web App URL
// const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxi5kdQJzO4wCRwVGEW6sI1cHiIOHfZ14zfzeN19DkOyWoktlVhKuZNZeu7O7jT33L5/exec";

// // ─────────────────────────────────────────────
// //  STYLES
// // ─────────────────────────────────────────────
// const S = {
//   wrapper: { width: "100%", maxWidth: 900, margin: "32px auto", padding: "0 16px", fontFamily: "'Segoe UI', Arial, sans-serif", boxSizing: "border-box" },
//   card: { background: "#ffffff", border: "2px solid #111", boxShadow: "5px 5px 0px #111", width: "100%" },
//   header: { display: "grid", gridTemplateColumns: "1fr auto", borderBottom: "2px solid #111" },
//   headerTitle: { padding: "14px 20px", borderRight: "2px solid #111" },
//   headerH1: { fontSize: 22, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", margin: 0, color: "#111" },
//   headerSub: { fontSize: 13, fontWeight: 500, color: "#444", marginTop: 2, marginBottom: 0 },
//   headerLogo: { padding: "14px 20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" },
//   logoText: { fontSize: 22, fontWeight: 800, letterSpacing: "0.06em", color: "#111" },
//   logoSub: { fontSize: 11, color: "#666", fontStyle: "italic", marginTop: 2 },
//   sectionLabel: { background: "#111", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "5px 12px" },
//   fieldLabel: { fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#555", display: "block", marginBottom: 4 },
//   fieldInput: { fontFamily: "monospace", fontSize: 14, fontWeight: 500, border: "none", borderBottom: "1.5px solid #bbb", outline: "none", padding: "2px 0", width: "100%", background: "transparent", color: "#111", boxSizing: "border-box" },
//   table: { width: "100%", borderCollapse: "collapse", tableLayout: "fixed" },
//   tableInput: { fontFamily: "monospace", fontSize: 13, border: "none", borderBottom: "1.5px solid #ccc", width: "100%", background: "transparent", outline: "none", padding: "2px 0", boxSizing: "border-box", color: "#111" },
//   formFooter: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderTop: "2px solid #111", background: "#fafafa" },
//   formRef: { fontSize: 11, fontFamily: "monospace", color: "#888" },
//   btnReset: { background: "transparent", color: "#555", border: "1.5px solid #bbb", padding: "10px 20px", fontFamily: "inherit", fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer", marginRight: 10 },
//   btnSubmit: { background: "#111", color: "#fff", border: "none", padding: "10px 28px", fontFamily: "inherit", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" },
//   btnView: { background: "#1a56db", color: "#fff", border: "none", padding: "10px 24px", fontFamily: "inherit", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer" },
//   successBanner: { background: "#d4edda", border: "1.5px solid #28a745", color: "#155724", padding: "12px 20px", fontSize: 13, fontWeight: 600, marginBottom: 16 },
//   errorBanner: { background: "#f8d7da", border: "1.5px solid #dc3545", color: "#721c24", padding: "12px 20px", fontSize: 13, fontWeight: 600, marginBottom: 16 },
//   loadingBanner: { background: "#fff3cd", border: "1.5px solid #ffc107", color: "#856404", padding: "12px 20px", fontSize: 13, fontWeight: 600, marginBottom: 16 },
// };

// // ─────────────────────────────────────────────
// //  MODEL DATA
// // ─────────────────────────────────────────────
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

// // ─────────────────────────────────────────────
// //  SHARED CELL HELPERS
// // ─────────────────────────────────────────────
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

// // ─────────────────────────────────────────────
// //  INITIAL FORM STATE
// // ─────────────────────────────────────────────
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

// // ─────────────────────────────────────────────
// //  ALL COLUMNS for View Table
// // ─────────────────────────────────────────────
// const ALL_COLS = [
//   "Timestamp", "Model",
//   "routeCardNo", "startDate", "endDate", "component",
//   "issuedMaterialInvNo", "issuedQty", "issuedMaterialInvDate",
//   "customer", "issuedMaterialInvQty", "heatNo",
//   "softMachiningOkQty", "softMachiningRewQty", "softMachiningRejQty", "softMachiningDate", "softMachiningSign",
//   "htOkQty", "htRewQty", "htRejQty", "htDate", "htSign", "htChargeNo", "htChargeDate",
//   "hardMachiningOkQty", "hardMachiningRewQty", "hardMachiningRejQty", "hardMachiningDate", "hardMachiningSign",
//   "cleaningOkQty", "cleaningRewQty", "cleaningRejQty", "cleaningDate", "cleaningSign",
//   "screwInvNo", "screwInvDate", "screwIssuedQty",
//   "nutInvNo", "nutInvDate", "nutIssuedQty",
//   "bearingInvNo", "bearingInvDate", "bearingIssuedQty",
//   "bearingShaftInvNo", "shaftInvDate", "shaftIssuedQty",
//   "shellBearingInvNo", "shellBearingInvDate",
//   "assemblyOkQty", "assemblyRewQty", "assemblyRejQty", "assemblyDate", "assemblySign",
//   "despatchInvoiceNo", "despatchInvDate",
// ];

// // Convert camelCase to readable label
// const toLabel = (key) =>
//   key.replace(/([A-Z])/g, " $1").replace(/^./, s => s.toUpperCase()).trim();

// // ─────────────────────────────────────────────
// //  VIEW ALL CARDS PAGE
// // ─────────────────────────────────────────────
// function ViewAllCards({ onBack }) {
//   const [cards, setCards] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [search, setSearch] = useState("");
//   const [scrollPct, setScrollPct] = useState(0);
//   const scrollRef = useRef(null);

//   useState(() => {
//     const url = `${APPS_SCRIPT_URL}?t=${Date.now()}`;
//     fetch(url, { method: "GET" })
//       .then(r => r.json())
//       .then(res => {
//         if (res.status === "success") setCards(res.data);
//         else setError("Could not load cards: " + res.message);
//       })
//       .catch(() =>
//         setError(
//           "Cannot reach Google Sheets. Make sure:\n" +
//           "1. Your URL ends with /exec\n" +
//           "2. Access is set to 'Anyone'\n" +
//           "3. You redeployed after any script changes"
//         )
//       )
//       .finally(() => setLoading(false));
//   }, []);

//   const handleScroll = () => {
//     const el = scrollRef.current;
//     if (!el) return;
//     const pct = el.scrollLeft / (el.scrollWidth - el.clientWidth);
//     setScrollPct(isNaN(pct) ? 0 : pct);
//   };

//   const handleSlider = (e) => {
//     const el = scrollRef.current;
//     if (!el) return;
//     const pct = Number(e.target.value) / 100;
//     el.scrollLeft = pct * (el.scrollWidth - el.clientWidth);
//     setScrollPct(pct);
//   };

//   const filtered = cards.filter(c =>
//     Object.values(c).some(v => v.toString().toLowerCase().includes(search.toLowerCase()))
//   );

//   const STICKY_COUNT = 2; // Timestamp + Model frozen on left
//   const COL_WIDTH = 130;

//   return (
//     <div style={S.wrapper}>
//       <style>{`
//         .scroll-table-wrap::-webkit-scrollbar { display: none; }
//         .scroll-table-wrap { -ms-overflow-style: none; scrollbar-width: none; }
//         .col-slider {
//           -webkit-appearance: none;
//           width: 100%;
//           height: 8px;
//           background: linear-gradient(to right, #111 0%, #111 ${Math.round(scrollPct * 100)}%, #ddd ${Math.round(scrollPct * 100)}%, #ddd 100%);
//           border-radius: 4px;
//           outline: none;
//           cursor: pointer;
//         }
//         .col-slider::-webkit-slider-thumb {
//           -webkit-appearance: none;
//           width: 24px; height: 24px;
//           border-radius: 50%;
//           background: #111;
//           cursor: pointer;
//           border: 3px solid #fff;
//           box-shadow: 0 0 0 2px #111;
//         }
//         .col-slider::-moz-range-thumb {
//           width: 22px; height: 22px;
//           border-radius: 50%;
//           background: #111;
//           cursor: pointer;
//           border: 3px solid #fff;
//           box-shadow: 0 0 0 2px #111;
//         }
//         .view-row:hover td { background: #fffde7 !important; }
//       `}</style>

//       {/* TOP BAR */}
//       <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
//         <div>
//           <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" }}>
//             All Route Cards
//           </h2>
//           <div style={{ fontSize: 11, color: "#888", marginTop: 4 }}>
//             {ALL_COLS.length} columns total · Timestamp &amp; Model columns are pinned
//           </div>
//         </div>
//         <button style={S.btnReset} onClick={onBack}>← Back to Form</button>
//       </div>

//       {/* SEARCH */}
//       <input
//         type="text"
//         placeholder="Search across all fields..."
//         value={search}
//         onChange={e => setSearch(e.target.value)}
//         style={{
//           width: "100%", padding: "10px 14px", fontSize: 14,
//           border: "2px solid #111", fontFamily: "inherit",
//           marginBottom: 16, boxSizing: "border-box", outline: "none",
//         }}
//       />

//       {loading && <div style={S.loadingBanner}>⏳ Loading Route Cards from Google Sheets...</div>}
//       {error && <div style={{ ...S.errorBanner, whiteSpace: "pre-line" }}>✕ {error}</div>}

//       {!loading && !error && (
//         <>
//           {/* COUNT */}
//           <div style={{ fontSize: 12, color: "#888", marginBottom: 10, display: "flex", alignItems: "center", gap: 12 }}>
//             <span>
//               Showing <strong style={{ color: "#111" }}>{filtered.length}</strong> of <strong style={{ color: "#111" }}>{cards.length}</strong> route cards
//             </span>
//             <span style={{ background: "#111", color: "#fff", fontSize: 10, fontWeight: 700, padding: "2px 8px", letterSpacing: "0.08em" }}>
//               {ALL_COLS.length} COLUMNS
//             </span>
//           </div>

//           {/* TABLE */}
//           <div
//             ref={scrollRef}
//             className="scroll-table-wrap"
//             onScroll={handleScroll}
//             style={{
//               overflowX: "auto",
//               border: "2px solid #111",
//               boxShadow: "5px 5px 0 #111",
//             }}
//           >
//             <table style={{ borderCollapse: "collapse", minWidth: ALL_COLS.length * COL_WIDTH, tableLayout: "fixed" }}>
//               <thead>
//                 <tr>
//                   {ALL_COLS.map((col, i) => (
//                     <th
//                       key={col}
//                       style={{
//                         background: i < STICKY_COUNT ? "#000" : "#111",
//                         color: "#fff",
//                         fontSize: 10,
//                         fontWeight: 700,
//                         letterSpacing: "0.08em",
//                         textTransform: "uppercase",
//                         padding: "9px 12px",
//                         textAlign: "left",
//                         whiteSpace: "nowrap",
//                         borderRight: i < ALL_COLS.length - 1 ? "1px solid #333" : "none",
//                         position: i < STICKY_COUNT ? "sticky" : "static",
//                         left: i === 0 ? 0 : i === 1 ? COL_WIDTH : undefined,
//                         zIndex: i < STICKY_COUNT ? 3 : 1,
//                         minWidth: COL_WIDTH,
//                         width: COL_WIDTH,
//                         boxShadow: i === STICKY_COUNT - 1 ? "3px 0 6px rgba(0,0,0,0.15)" : "none",
//                       }}
//                     >
//                       {toLabel(col)}
//                       {i < STICKY_COUNT && (
//                         <span style={{ display: "block", fontSize: 8, color: "#aaa", fontStyle: "italic", fontWeight: 400, marginTop: 1 }}>
//                           PINNED
//                         </span>
//                       )}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {filtered.length === 0 ? (
//                   <tr>
//                     <td
//                       colSpan={ALL_COLS.length}
//                       style={{ padding: 32, textAlign: "center", color: "#888", fontSize: 13 }}
//                     >
//                       No route cards found.
//                     </td>
//                   </tr>
//                 ) : (
//                   filtered.map((card, i) => {
//                     const rowBg = i % 2 === 0 ? "#fff" : "#f9f9f9";
//                     return (
//                       <tr key={i} className="view-row">
//                         {ALL_COLS.map((col, j) => (
//                           <td
//                             key={col}
//                             style={{
//                               padding: "8px 12px",
//                               fontSize: 12,
//                               fontFamily: "monospace",
//                               borderBottom: "1px solid #eee",
//                               borderRight: j < ALL_COLS.length - 1 ? "1px solid #eee" : "none",
//                               whiteSpace: "nowrap",
//                               color: card[col] ? "#111" : "#ccc",
//                               position: j < STICKY_COUNT ? "sticky" : "static",
//                               left: j === 0 ? 0 : j === 1 ? COL_WIDTH : undefined,
//                               background: rowBg,
//                               zIndex: j < STICKY_COUNT ? 1 : 0,
//                               boxShadow: j === STICKY_COUNT - 1 ? "3px 0 6px rgba(0,0,0,0.08)" : "none",
//                               minWidth: COL_WIDTH,
//                               width: COL_WIDTH,
//                             }}
//                           >
//                             {card[col] || "—"}
//                           </td>
//                         ))}
//                       </tr>
//                     );
//                   })
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* SLIDER */}
//           <div style={{ marginTop: 16, padding: "0 2px" }}>
//             <div style={{
//               display: "flex", justifyContent: "space-between",
//               fontSize: 11, color: "#888", marginBottom: 8,
//               fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
//             }}>
//               <span>◀ Left</span>
//               <span style={{ color: "#111", fontSize: 12 }}>
//                 ↔ Drag to scroll all {ALL_COLS.length} columns
//               </span>
//               <span>Right ▶</span>
//             </div>
//             <input
//               type="range"
//               min={0}
//               max={100}
//               value={Math.round(scrollPct * 100)}
//               onChange={handleSlider}
//               className="col-slider"
//             />
//             <div style={{
//               display: "flex", justifyContent: "space-between",
//               marginTop: 6, fontSize: 10, color: "#bbb",
//             }}>
//               <span>Timestamp · Model</span>
//               <span>← → or drag slider</span>
//               <span>Despatch Inv. Date</span>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// // ─────────────────────────────────────────────
// //  MAIN ROUTE CARD COMPONENT
// // ─────────────────────────────────────────────
// const Routecard = () => {
//   const [form, setForm] = useState(initialState);
//   const [selectedModel, setSelectedModel] = useState("");
//   const [search, setSearch] = useState("");
//   const [shaking, setShaking] = useState(false);
//   const [searchError, setSearchError] = useState(false);
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   const [submitting, setSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);
//   const [submitError, setSubmitError] = useState("");

//   const [page, setPage] = useState("form");

//   const allModels = Object.keys(MODEL_DATA);
//   const filteredModels = allModels.filter(m => m.toLowerCase().includes(search.toLowerCase()));

//   const openModel = (model) => {
//     setSelectedModel(model);
//     setForm({ ...initialState, ...MODEL_DATA[model] });
//     setSearch(model);
//     setShowSuggestions(false);
//     setSearchError(false);
//     setSubmitSuccess(false);
//     setSubmitError("");
//   };

//   const triggerShake = () => {
//     setShaking(true);
//     setSearchError(true);
//     setTimeout(() => setShaking(false), 500);
//   };

//   const handleSearchChange = (e) => {
//     const val = e.target.value;
//     setSearch(val);
//     setSearchError(false);
//     setShowSuggestions(val.length > 0);
//     const exact = allModels.find(m => m.toLowerCase() === val.toLowerCase());
//     if (exact) openModel(exact);
//   };

//   const handleSearchKeyDown = (e) => {
//     if (e.key === "Enter") {
//       const exact = allModels.find(m => m.toLowerCase() === search.toLowerCase());
//       if (exact) openModel(exact);
//       else if (filteredModels.length === 1) openModel(filteredModels[0]);
//       else triggerShake();
//     }
//     if (e.key === "Escape") setShowSuggestions(false);
//   };

//   const handleModelSelect = (e) => {
//     const model = e.target.value;
//     if (model) openModel(model);
//     else { setSelectedModel(""); setForm(initialState); setSearch(""); }
//   };

//   const handleChange = useCallback((e) => {
//     const field = e.target.getAttribute("data-field");
//     setForm(prev => ({ ...prev, [field]: e.target.value }));
//   }, []);

//   // ✅ POST with mode: "no-cors" (required for Google Apps Script)
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);
//     setSubmitSuccess(false);
//     setSubmitError("");

//     try {
//       const payload = { ...form, model: selectedModel };

//       await fetch(APPS_SCRIPT_URL, {
//         method: "POST",
//         mode: "no-cors",
//         headers: { "Content-Type": "text/plain" },
//         body: JSON.stringify(payload),
//       });

//       setSubmitSuccess(true);
//       setTimeout(() => setSubmitSuccess(false), 5000);

//     } catch (err) {
//       setSubmitError("Failed to save. Check your Apps Script URL and redeploy.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const handleReset = () => {
//     setForm(selectedModel && MODEL_DATA[selectedModel]
//       ? { ...initialState, ...MODEL_DATA[selectedModel] }
//       : initialState
//     );
//     setSubmitSuccess(false);
//     setSubmitError("");
//   };

//   const inp = (field, placeholder = "", type = "text") => (
//     <input style={S.fieldInput} type={type} data-field={field} value={form[field]} onChange={handleChange} placeholder={placeholder} />
//   );
//   const tinp = (field, placeholder = "", type = "text") => (
//     <input style={S.tableInput} type={type} data-field={field} value={form[field]} onChange={handleChange} placeholder={placeholder} />
//   );
//   const lbl = (text) => <span style={S.fieldLabel}>{text}</span>;

//   if (page === "view") return <ViewAllCards onBack={() => setPage("form")} />;

//   return (
//     <div style={S.wrapper}>

//       <style>{`
//         @keyframes shake {
//           0%,100% { transform: translateX(0); }
//           15% { transform: translateX(-8px); }
//           30% { transform: translateX(8px); }
//           45% { transform: translateX(-5px); }
//           60% { transform: translateX(5px); }
//           75% { transform: translateX(-3px); }
//           90% { transform: translateX(3px); }
//         }
//         .shake { animation: shake 0.45s ease; }
//         .sug-item { padding: 9px 14px; font-size: 13px; font-family: monospace; font-weight: 600; border-bottom: 1px solid #eee; color: #111; cursor: pointer; }
//         .sug-item:hover { background: #f5f5f5; }
//       `}</style>

//       {/* ── TOP BAR ── */}
//       <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
//         <button style={S.btnView} onClick={() => setPage("view")}>
//           📋 View All Saved Cards
//         </button>
//       </div>

//       {/* ── SELECTOR CARD ── */}
//       <div style={{ background: "#fff", border: "2px solid #111", boxShadow: "5px 5px 0 #111", padding: "24px 28px", marginBottom: 28 }}>
//         <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#555", marginBottom: 16 }}>
//           Select Model to Open Route Card
//         </div>

//         <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start" }}>

//           {/* Search */}
//           <div style={{ position: "relative", flex: 1, minWidth: 220 }}>
//             <div
//               className={shaking ? "shake" : ""}
//               style={{
//                 display: "flex", alignItems: "center", gap: 8,
//                 border: `2px solid ${searchError ? "#e53e3e" : "#bbb"}`,
//                 padding: "8px 12px",
//                 background: searchError ? "#fff5f5" : "#fafafa",
//                 transition: "border-color 0.2s, background 0.2s",
//               }}
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 30 30" fill={searchError ? "#e53e3e" : "#888"}>
//                 <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
//               </svg>
//               <input
//                 type="text"
//                 placeholder="Type model name & press Enter…"
//                 value={search}
//                 onChange={handleSearchChange}
//                 onKeyDown={handleSearchKeyDown}
//                 onFocus={() => search.length > 0 && setShowSuggestions(true)}
//                 onBlur={() => setTimeout(() => setShowSuggestions(false), 160)}
//                 style={{ border: "none", outline: "none", background: "transparent", fontSize: 14, color: searchError ? "#e53e3e" : "#111", width: "100%", fontFamily: "inherit", fontWeight: 500 }}
//               />
//               {search && (
//                 <span
//                   onMouseDown={() => { setSearch(""); setSearchError(false); setShowSuggestions(false); setSelectedModel(""); setForm(initialState); }}
//                   style={{ cursor: "pointer", color: "#aaa", fontSize: 16, userSelect: "none", lineHeight: 1 }}
//                 >✕</span>
//               )}
//             </div>

//             {searchError && (
//               <div style={{ fontSize: 11, color: "#e53e3e", marginTop: 5, fontWeight: 700 }}>
//                 ✕ Model not found — try HHRA or HSRA
//               </div>
//             )}

//             {showSuggestions && filteredModels.length > 0 && (
//               <div style={{ position: "absolute", top: "calc(100% + 2px)", left: 0, right: 0, zIndex: 200, border: "2px solid #111", background: "#fff", boxShadow: "4px 4px 0 #111", maxHeight: 200, overflowY: "auto" }}>
//                 {filteredModels.map(m => (
//                   <div key={m} className="sug-item" onMouseDown={() => openModel(m)}>{m}</div>
//                 ))}
//               </div>
//             )}

//             {showSuggestions && filteredModels.length === 0 && (
//               <div style={{ position: "absolute", top: "calc(100% + 2px)", left: 0, right: 0, zIndex: 200, border: "2px solid #e53e3e", background: "#fff5f5", padding: "10px 14px", fontSize: 12, color: "#e53e3e", fontWeight: 700 }}>
//                 No matching model found
//               </div>
//             )}
//           </div>

//           <div style={{ display: "flex", alignItems: "center", color: "#bbb", fontSize: 12, fontWeight: 700, paddingTop: 10 }}>OR</div>

//           {/* Dropdown */}
//           <select
//             value={selectedModel}
//             onChange={handleModelSelect}
//             style={{ padding: "10px 16px", border: "2px solid #111", fontSize: 14, fontFamily: "inherit", fontWeight: 600, background: "#fff", cursor: "pointer", minWidth: 220, outline: "none", height: 44 }}
//           >
//             <option value="">-- Select from list --</option>
//             {allModels.map(m => <option key={m} value={m}>{m}</option>)}
//           </select>
//         </div>

//         {!selectedModel && (
//           <div style={{ marginTop: 14, fontSize: 12, color: "#999", fontStyle: "italic" }}>
//             Type a model name or pick from the dropdown — the Route Card will open automatically.
//           </div>
//         )}
//         {selectedModel && (
//           <div style={{ marginTop: 14, display: "inline-flex", alignItems: "center", gap: 8, background: "#111", color: "#fff", padding: "5px 14px", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em" }}>
//             <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
//             LOADED: {selectedModel}
//           </div>
//         )}
//       </div>

//       {/* ── ROUTE CARD FORM ── */}
//       {selectedModel && (
//         <>
//           {submitSuccess && (
//             <div style={S.successBanner}>
//               ✓ Route Card saved to Google Sheets successfully!
//             </div>
//           )}
//           {submitError && (
//             <div style={S.errorBanner}>✕ {submitError}</div>
//           )}

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
//               <div style={cell()}>{lbl("Start Date")}{inp("startDate", "", "date")}</div>
//               <div style={cell()}>{lbl("End Date")}{inp("endDate", "", "date")}</div>
//               <div style={cell(true)} />
//             </div>
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
//               <div style={cell(false, true)}>{lbl("Component")}{inp("component")}</div>
//               <div style={cell()}>{lbl("Issued Material Inv. No.")}{inp("issuedMaterialInvNo")}</div>
//               <div style={cell(true)} />
//             </div>
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
//               <div style={cell()}>{lbl("Issued Qty.")}{inp("issuedQty")}</div>
//               <div style={cell()} />
//               <div style={cell()}>{lbl("Issued Material Inv. Date")}{inp("issuedMaterialInvDate", "", "date")}</div>
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

//             {/* B — MACHINE SHOP */}
//             <div style={S.sectionLabel}>B — Machine Shop Use</div>
//             <table style={S.table}>
//               <thead><tr>
//                 <th style={{ ...thStyle(), width: "22%" }}>Operation</th>
//                 <th style={thStyle()}>OK Qty.</th><th style={thStyle()}>Rew. Qty.</th>
//                 <th style={thStyle()}>Rej. Qty.</th><th style={thStyle()}>Date</th>
//                 <th style={thStyle(true)}>Sign.</th>
//               </tr></thead>
//               <tbody><tr>
//                 <td style={{ ...tdStyle(), fontSize: 13, fontWeight: 600, color: "#222" }}>Soft Machining</td>
//                 <td style={tdStyle()}>{tinp("softMachiningOkQty", "0")}</td>
//                 <td style={tdStyle()}>{tinp("softMachiningRewQty", "0")}</td>
//                 <td style={tdStyle()}>{tinp("softMachiningRejQty", "0")}</td>
//                 <td style={tdStyle()}>{tinp("softMachiningDate", "", "date")}</td>
//                 <td style={tdStyle(true)}>{tinp("softMachiningSign", "Signature")}</td>
//               </tr></tbody>
//             </table>

//             {/* C — HT SHOP */}
//             <div style={S.sectionLabel}>C — HT Shop Use</div>
//             <table style={S.table}>
//               <thead><tr>
//                 <th style={{ ...thStyle(), width: "22%" }}>Operation</th>
//                 <th style={thStyle()}>OK Qty.</th><th style={thStyle()}>Rew. Qty.</th>
//                 <th style={thStyle()}>Rej. Qty.</th><th style={thStyle()}>Date</th>
//                 <th style={thStyle(true)}>Sign.</th>
//               </tr></thead>
//               <tbody>
//                 <tr>
//                   <td style={{ ...tdStyle(), fontSize: 13, fontWeight: 600, color: "#222" }}>Heat Treatment</td>
//                   <td style={tdStyle()}>{tinp("htOkQty", "0")}</td>
//                   <td style={tdStyle()}>{tinp("htRewQty", "0")}</td>
//                   <td style={tdStyle()}>{tinp("htRejQty", "0")}</td>
//                   <td style={tdStyle()}>{tinp("htDate", "", "date")}</td>
//                   <td style={tdStyle(true)}>{tinp("htSign", "Signature")}</td>
//                 </tr>
//                 <tr>
//                   <td style={tdStyle()}>{lbl("Heat Treatment Charge No.")}{tinp("htChargeNo", "—")}</td>
//                   <td style={tdStyle()} colSpan={2} />
//                   <td style={tdStyle(true)} colSpan={3}>{lbl("Heat Treatment Charge Date")}{tinp("htChargeDate", "", "date")}</td>
//                 </tr>
//               </tbody>
//             </table>

//             {/* D — MACHINE SHOP */}
//             <div style={S.sectionLabel}>D — Machine Shop Use</div>
//             <table style={S.table}>
//               <thead><tr>
//                 <th style={{ ...thStyle(), width: "22%" }}>Operation</th>
//                 <th style={thStyle()}>OK Qty.</th><th style={thStyle()}>Rew. Qty.</th>
//                 <th style={thStyle()}>Rej. Qty.</th><th style={thStyle()}>Date</th>
//                 <th style={thStyle(true)}>Sign.</th>
//               </tr></thead>
//               <tbody>
//                 <tr>
//                   <td style={{ ...tdStyle(), fontSize: 13, fontWeight: 600, color: "#222" }}>Hard Machining</td>
//                   <td style={tdStyle()}>{tinp("hardMachiningOkQty", "0")}</td>
//                   <td style={tdStyle()}>{tinp("hardMachiningRewQty", "0")}</td>
//                   <td style={tdStyle()}>{tinp("hardMachiningRejQty", "0")}</td>
//                   <td style={tdStyle()}>{tinp("hardMachiningDate", "", "date")}</td>
//                   <td style={tdStyle(true)}>{tinp("hardMachiningSign", "Signature")}</td>
//                 </tr>
//                 <tr>
//                   <td style={{ ...tdStyle(), fontSize: 13, fontWeight: 600, color: "#222" }}>Cleaning</td>
//                   <td style={tdStyle()}>{tinp("cleaningOkQty", "0")}</td>
//                   <td style={tdStyle()}>{tinp("cleaningRewQty", "0")}</td>
//                   <td style={tdStyle()}>{tinp("cleaningRejQty", "0")}</td>
//                   <td style={tdStyle()}>{tinp("cleaningDate", "", "date")}</td>
//                   <td style={tdStyle(true)}>{tinp("cleaningSign", "Signature")}</td>
//                 </tr>
//               </tbody>
//             </table>

//             {/* E — ASSEMBLY */}
//             <div style={S.sectionLabel}>E — Assembly Use</div>
//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
//               <div style={asmCell()}>{lbl("Screw Inv. No.")}{inp("screwInvNo", "—")}</div>
//               <div style={asmCell()}>{lbl("Screw Inv. Date")}{inp("screwInvDate", "", "date")}</div>
//               <div style={asmCell(true)}>{lbl("Issued Qty.")}{inp("screwIssuedQty", "0")}</div>
//             </div>
//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
//               <div style={asmCell()}>{lbl("Nut Inv. No.")}{inp("nutInvNo", "—")}</div>
//               <div style={asmCell()}>{lbl("Nut Inv. Date")}{inp("nutInvDate", "", "date")}</div>
//               <div style={asmCell(true)}>{lbl("Issued Qty.")}{inp("nutIssuedQty", "0")}</div>
//             </div>
//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
//               <div style={asmCell()}>{lbl("Bearing Inv. No.")}{inp("bearingInvNo", "—")}</div>
//               <div style={asmCell()}>{lbl("Bearing Inv. Date")}{inp("bearingInvDate", "", "date")}</div>
//               <div style={asmCell(true)}>{lbl("Issued Qty.")}{inp("bearingIssuedQty", "0")}</div>
//             </div>
//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
//               <div style={asmCell()}>{lbl("Bearing Shaft Inv. No.")}{inp("bearingShaftInvNo", "—")}</div>
//               <div style={asmCell()}>{lbl("Shaft Inv. Date")}{inp("shaftInvDate", "", "date")}</div>
//               <div style={asmCell(true)}>{lbl("Issued Qty.")}{inp("shaftIssuedQty", "0")}</div>
//             </div>
//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
//               <div style={asmCell()}>{lbl("Shell Bearing Inv. No.")}{inp("shellBearingInvNo", "—")}</div>
//               <div style={asmCell()}>{lbl("Shell Bearing Inv. Date")}{inp("shellBearingInvDate", "", "date")}</div>
//               <div style={asmCell(true)} />
//             </div>
//             <table style={S.table}>
//               <thead><tr>
//                 <th style={{ ...thStyle(), width: "22%" }}>Operation</th>
//                 <th style={thStyle()}>OK Qty.</th><th style={thStyle()}>Rew. Qty.</th>
//                 <th style={thStyle()}>Rej. Qty.</th><th style={thStyle()}>Date</th>
//                 <th style={thStyle(true)}>Sign.</th>
//               </tr></thead>
//               <tbody><tr>
//                 <td style={{ ...tdStyle(), fontSize: 13, fontWeight: 600, color: "#222" }}>Assembly</td>
//                 <td style={tdStyle()}>{tinp("assemblyOkQty", "0")}</td>
//                 <td style={tdStyle()}>{tinp("assemblyRewQty", "0")}</td>
//                 <td style={tdStyle()}>{tinp("assemblyRejQty", "0")}</td>
//                 <td style={tdStyle()}>{tinp("assemblyDate", "", "date")}</td>
//                 <td style={tdStyle(true)}>{tinp("assemblySign", "Signature")}</td>
//               </tr></tbody>
//             </table>

//             {/* F — DISPATCH */}
//             <div style={S.sectionLabel}>F — Dispatch Use</div>
//             <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
//               <div style={cell()}>{lbl("Despatch Invoice No.")}{inp("despatchInvoiceNo", "—")}</div>
//               <div style={cell(true)}>{lbl("Despatch Inv. Date")}{inp("despatchInvDate", "", "date")}</div>
//             </div>

//             {/* FOOTER */}
//             <div style={S.formFooter}>
//               <span style={S.formRef}>F760B/02</span>
//               <div>
//                 <button type="button" style={S.btnReset} onClick={handleReset}>Reset</button>
//                 <button
//                   type="submit"
//                   style={{ ...S.btnSubmit, ...(submitting ? { opacity: 0.7, cursor: "not-allowed" } : {}) }}
//                   disabled={submitting}
//                 >
//                   {submitting ? "Saving..." : "Submit & Save to Sheet"}
//                 </button>
//               </div>
//             </div>

//           </form>
//         </>
//       )}
//     </div>
//   );
// };

// export default Routecard;








import { useState, useCallback, useRef } from "react";

// ✅ Your Google Apps Script Web App URL
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyMrBcR6_VDQVFgkA7guvHGh2hDflYc5qrBU-EQdrsVQvlMqP0gdhm0wmhOz3JC4xkp/exec";

// ─────────────────────────────────────────────
//  STYLES
// ─────────────────────────────────────────────
const S = {
  wrapper: { width: "100%", maxWidth: 900, margin: "32px auto", padding: "0 16px", fontFamily: "'Segoe UI', Arial, sans-serif", boxSizing: "border-box" },
  card: { background: "#ffffff", border: "2px solid #111", boxShadow: "5px 5px 0px #111", width: "100%" },
  header: { display: "grid", gridTemplateColumns: "1fr auto", borderBottom: "2px solid #111" },
  headerTitle: { padding: "14px 20px", borderRight: "2px solid #111" },
  headerH1: { fontSize: 22, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", margin: 0, color: "#111" },
  headerSub: { fontSize: 13, fontWeight: 500, color: "#444", marginTop: 2, marginBottom: 0 },
  headerLogo: { padding: "14px 20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" },
  logoText: { fontSize: 22, fontWeight: 800, letterSpacing: "0.06em", color: "#111" },
  logoSub: { fontSize: 11, color: "#666", fontStyle: "italic", marginTop: 2 },
  sectionLabel: { background: "#111", color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "5px 12px" },
  fieldLabel: { fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#555", display: "block", marginBottom: 4 },
  fieldInput: { fontFamily: "monospace", fontSize: 14, fontWeight: 500, border: "none", borderBottom: "1.5px solid #bbb", outline: "none", padding: "2px 0", width: "100%", background: "transparent", color: "#111", boxSizing: "border-box" },
  table: { width: "100%", borderCollapse: "collapse", tableLayout: "fixed" },
  tableInput: { fontFamily: "monospace", fontSize: 13, border: "none", borderBottom: "1.5px solid #ccc", width: "100%", background: "transparent", outline: "none", padding: "2px 0", boxSizing: "border-box", color: "#111" },
  formFooter: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px", borderTop: "2px solid #111", background: "#fafafa" },
  formRef: { fontSize: 11, fontFamily: "monospace", color: "#888" },
  btnReset: { background: "transparent", color: "#555", border: "1.5px solid #bbb", padding: "10px 20px", fontFamily: "inherit", fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer", marginRight: 10 },
  btnSubmit: { background: "#111", color: "#fff", border: "none", padding: "10px 28px", fontFamily: "inherit", fontSize: 13, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" },
  btnView: { background: "#1a56db", color: "#fff", border: "none", padding: "10px 24px", fontFamily: "inherit", fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", cursor: "pointer" },
  successBanner: { background: "#d4edda", border: "1.5px solid #28a745", color: "#155724", padding: "12px 20px", fontSize: 13, fontWeight: 600, marginBottom: 16 },
  errorBanner: { background: "#f8d7da", border: "1.5px solid #dc3545", color: "#721c24", padding: "12px 20px", fontSize: 13, fontWeight: 600, marginBottom: 16 },
  loadingBanner: { background: "#fff3cd", border: "1.5px solid #ffc107", color: "#856404", padding: "12px 20px", fontSize: 13, fontWeight: 600, marginBottom: 16 },
};

// ─────────────────────────────────────────────
//  MODEL DATA
// ─────────────────────────────────────────────
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

// ─────────────────────────────────────────────
//  SHARED CELL HELPERS
// ─────────────────────────────────────────────
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

// ─────────────────────────────────────────────
//  INITIAL FORM STATE
// ─────────────────────────────────────────────
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

// ─────────────────────────────────────────────
//  ALL COLUMNS — key + human label
// ─────────────────────────────────────────────
const ALL_COLS = [
  { key: "Timestamp",             label: "Timestamp" },
  { key: "Model",                 label: "Model" },
  { key: "routeCardNo",           label: "Route Card No" },
  { key: "startDate",             label: "Start Date" },
  { key: "endDate",               label: "End Date" },
  { key: "component",             label: "Component" },
  { key: "issuedMaterialInvNo",   label: "Issued Material Inv No" },
  { key: "issuedQty",             label: "Issued Qty" },
  { key: "issuedMaterialInvDate", label: "Issued Material Inv Date" },
  { key: "customer",              label: "Customer" },
  { key: "issuedMaterialInvQty",  label: "Issued Material Inv Qty" },
  { key: "heatNo",                label: "Heat No" },
  { key: "softMachiningOkQty",    label: "Soft Machining OK Qty" },
  { key: "softMachiningRewQty",   label: "Soft Machining Rew Qty" },
  { key: "softMachiningRejQty",   label: "Soft Machining Rej Qty" },
  { key: "softMachiningDate",     label: "Soft Machining Date" },
  { key: "softMachiningSign",     label: "Soft Machining Sign" },
  { key: "htOkQty",               label: "HT OK Qty" },
  { key: "htRewQty",              label: "HT Rew Qty" },
  { key: "htRejQty",              label: "HT Rej Qty" },
  { key: "htDate",                label: "HT Date" },
  { key: "htSign",                label: "HT Sign" },
  { key: "htChargeNo",            label: "HT Charge No" },
  { key: "htChargeDate",          label: "HT Charge Date" },
  { key: "hardMachiningOkQty",    label: "Hard Machining OK Qty" },
  { key: "hardMachiningRewQty",   label: "Hard Machining Rew Qty" },
  { key: "hardMachiningRejQty",   label: "Hard Machining Rej Qty" },
  { key: "hardMachiningDate",     label: "Hard Machining Date" },
  { key: "hardMachiningSign",     label: "Hard Machining Sign" },
  { key: "cleaningOkQty",         label: "Cleaning OK Qty" },
  { key: "cleaningRewQty",        label: "Cleaning Rew Qty" },
  { key: "cleaningRejQty",        label: "Cleaning Rej Qty" },
  { key: "cleaningDate",          label: "Cleaning Date" },
  { key: "cleaningSign",          label: "Cleaning Sign" },
  { key: "screwInvNo",            label: "Screw Inv No" },
  { key: "screwInvDate",          label: "Screw Inv Date" },
  { key: "screwIssuedQty",        label: "Screw Issued Qty" },
  { key: "nutInvNo",              label: "Nut Inv No" },
  { key: "nutInvDate",            label: "Nut Inv Date" },
  { key: "nutIssuedQty",          label: "Nut Issued Qty" },
  { key: "bearingInvNo",          label: "Bearing Inv No" },
  { key: "bearingInvDate",        label: "Bearing Inv Date" },
  { key: "bearingIssuedQty",      label: "Bearing Issued Qty" },
  { key: "bearingShaftInvNo",     label: "Bearing Shaft Inv No" },
  { key: "shaftInvDate",          label: "Shaft Inv Date" },
  { key: "shaftIssuedQty",        label: "Shaft Issued Qty" },
  { key: "shellBearingInvNo",     label: "Shell Bearing Inv No" },
  { key: "shellBearingInvDate",   label: "Shell Bearing Inv Date" },
  { key: "assemblyOkQty",         label: "Assembly OK Qty" },
  { key: "assemblyRewQty",        label: "Assembly Rew Qty" },
  { key: "assemblyRejQty",        label: "Assembly Rej Qty" },
  { key: "assemblyDate",          label: "Assembly Date" },
  { key: "assemblySign",          label: "Assembly Sign" },
  { key: "despatchInvoiceNo",     label: "Despatch Invoice No" },
  { key: "despatchInvDate",       label: "Despatch Inv Date" },
];

// ─────────────────────────────────────────────
//  KEY NORMALIZER
//  Google Sheets may return keys as "RouteCardNo", "route_card_no", "routecardno" etc.
//  This function maps each raw card to our canonical key names.
// ─────────────────────────────────────────────
function normalizeCard(rawCard) {
  // Build a stripped lookup: remove all non-alphanumeric chars, lowercase
  const strippedLookup = {};
  Object.entries(rawCard).forEach(([k, v]) => {
    strippedLookup[k.toLowerCase().replace(/[^a-z0-9]/g, "")] = v;
  });

  const result = {};
  ALL_COLS.forEach(({ key }) => {
    const stripped = key.toLowerCase().replace(/[^a-z0-9]/g, "");
    // Priority: exact key → Title-cased key → stripped match
    result[key] =
      rawCard[key] ??
      rawCard[key.charAt(0).toUpperCase() + key.slice(1)] ??
      strippedLookup[stripped] ??
      "";
  });
  return result;
}

// ─────────────────────────────────────────────
//  VIEW ALL CARDS PAGE
// ─────────────────────────────────────────────
function ViewAllCards({ onBack }) {
  const [cards, setCards] = useState([]);
  const [rawKeys, setRawKeys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [scrollPct, setScrollPct] = useState(0);
  const [showDebug, setShowDebug] = useState(false);
  const scrollRef = useRef(null);

  useState(() => {
    const url = `${APPS_SCRIPT_URL}?t=${Date.now()}`;
    fetch(url, { method: "GET" })
      .then(r => r.json())
      .then(res => {
        if (res.status === "success" && Array.isArray(res.data)) {
          if (res.data.length > 0) setRawKeys(Object.keys(res.data[0]));
          setCards(res.data.map(normalizeCard));
        } else {
          setError("Could not load cards: " + (res.message || "Unknown error"));
        }
      })
      .catch(err =>
        setError(
          "Cannot reach Google Sheets. Make sure:\n" +
          "1. Your URL ends with /exec\n" +
          "2. Access is set to 'Anyone'\n" +
          "3. You redeployed after any script changes\n\nError: " + err.message
        )
      )
      .finally(() => setLoading(false));
  }, []);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const pct = el.scrollLeft / (el.scrollWidth - el.clientWidth);
    setScrollPct(isNaN(pct) ? 0 : pct);
  };

  const handleSlider = (e) => {
    const el = scrollRef.current;
    if (!el) return;
    const pct = Number(e.target.value) / 100;
    el.scrollLeft = pct * (el.scrollWidth - el.clientWidth);
    setScrollPct(pct);
  };

  const filtered = cards.filter(c =>
    ALL_COLS.some(({ key }) =>
      String(c[key] ?? "").toLowerCase().includes(search.toLowerCase())
    )
  );

  const STICKY_COUNT = 2;
  const COL_WIDTH = 150;
  const sliderPct = Math.round(scrollPct * 100);

  return (
    <div style={S.wrapper}>
      <style>{`
        .scroll-table-wrap::-webkit-scrollbar { display: none; }
        .scroll-table-wrap { -ms-overflow-style: none; scrollbar-width: none; }
        .col-slider {
          -webkit-appearance: none;
          width: 100%;
          height: 8px;
          background: linear-gradient(to right, #111 0%, #111 ${sliderPct}%, #ddd ${sliderPct}%, #ddd 100%);
          border-radius: 4px;
          outline: none;
          cursor: pointer;
        }
        .col-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 24px; height: 24px;
          border-radius: 50%;
          background: #111;
          cursor: pointer;
          border: 3px solid #fff;
          box-shadow: 0 0 0 2px #111;
        }
        .col-slider::-moz-range-thumb {
          width: 22px; height: 22px;
          border-radius: 50%;
          background: #111;
          cursor: pointer;
          border: 3px solid #fff;
          box-shadow: 0 0 0 2px #111;
        }
        .view-row:hover td { background: #fffde7 !important; }
        .debug-box {
          background: #1a1a1a; color: #4ade80; font-family: monospace;
          font-size: 11px; padding: 14px 16px; margin-bottom: 14px;
          white-space: pre-wrap; word-break: break-all;
          max-height: 160px; overflow-y: auto;
          border: 1.5px solid #333;
        }
      `}</style>

      {/* TOP BAR */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <div>
          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase" }}>
            All Route Cards
          </h2>
          <div style={{ fontSize: 11, color: "#888", marginTop: 4 }}>
            {ALL_COLS.length} columns total · Timestamp &amp; Model are pinned
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            style={{ ...S.btnReset, fontSize: 11, padding: "7px 14px", marginRight: 0 }}
            onClick={() => setShowDebug(d => !d)}
            title="Show raw column keys from Google Sheets to diagnose mapping issues"
          >
            {showDebug ? "Hide Debug" : "🔍 Debug Keys"}
          </button>
          <button style={{ ...S.btnReset, marginRight: 0 }} onClick={onBack}>← Back to Form</button>
        </div>
      </div>

      {/* DEBUG PANEL */}
      {showDebug && (
        <div className="debug-box">
          {rawKeys.length > 0
            ? `Raw keys from Google Sheets (${rawKeys.length}):\n${rawKeys.join(" | ")}`
            : "No data received yet. If cards loaded, the sheet returned 0 rows."}
        </div>
      )}

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search across all fields..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{
          width: "100%", padding: "10px 14px", fontSize: 14,
          border: "2px solid #111", fontFamily: "inherit",
          marginBottom: 16, boxSizing: "border-box", outline: "none",
        }}
      />

      {loading && <div style={S.loadingBanner}>⏳ Loading Route Cards from Google Sheets...</div>}
      {error && <div style={{ ...S.errorBanner, whiteSpace: "pre-line" }}>✕ {error}</div>}

      {!loading && !error && (
        <>
          {/* COUNT */}
          <div style={{ fontSize: 12, color: "#888", marginBottom: 10, display: "flex", alignItems: "center", gap: 12 }}>
            <span>
              Showing <strong style={{ color: "#111" }}>{filtered.length}</strong> of{" "}
              <strong style={{ color: "#111" }}>{cards.length}</strong> route cards
            </span>
            <span style={{ background: "#111", color: "#fff", fontSize: 10, fontWeight: 700, padding: "2px 8px", letterSpacing: "0.08em" }}>
              {ALL_COLS.length} COLUMNS
            </span>
          </div>

          {/* TABLE */}
          <div
            ref={scrollRef}
            className="scroll-table-wrap"
            onScroll={handleScroll}
            style={{ overflowX: "auto", border: "2px solid #111", boxShadow: "5px 5px 0 #111" }}
          >
            <table style={{ borderCollapse: "collapse", minWidth: ALL_COLS.length * COL_WIDTH, tableLayout: "fixed" }}>
              <thead>
                <tr>
                  {ALL_COLS.map(({ key, label }, i) => (
                    <th
                      key={key}
                      style={{
                        background: i < STICKY_COUNT ? "#000" : "#111",
                        color: "#fff",
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        padding: "9px 12px",
                        textAlign: "left",
                        whiteSpace: "nowrap",
                        borderRight: i < ALL_COLS.length - 1 ? "1px solid #333" : "none",
                        position: i < STICKY_COUNT ? "sticky" : "static",
                        left: i === 0 ? 0 : i === 1 ? COL_WIDTH : undefined,
                        zIndex: i < STICKY_COUNT ? 3 : 1,
                        minWidth: COL_WIDTH,
                        width: COL_WIDTH,
                        boxShadow: i === STICKY_COUNT - 1 ? "3px 0 8px rgba(0,0,0,0.2)" : "none",
                      }}
                    >
                      {label}
                      {i < STICKY_COUNT && (
                        <span style={{ display: "block", fontSize: 8, color: "#aaa", fontStyle: "italic", fontWeight: 400, marginTop: 1 }}>
                          PINNED
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={ALL_COLS.length} style={{ padding: 32, textAlign: "center", color: "#888", fontSize: 13 }}>
                      No route cards found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((card, i) => {
                    const rowBg = i % 2 === 0 ? "#fff" : "#f9f9f9";
                    return (
                      <tr key={i} className="view-row">
                        {ALL_COLS.map(({ key }, j) => {
                          const val = card[key];
                          const isEmpty = val === "" || val === null || val === undefined;
                          return (
                            <td
                              key={key}
                              style={{
                                padding: "8px 12px",
                                fontSize: 12,
                                fontFamily: "monospace",
                                borderBottom: "1px solid #eee",
                                borderRight: j < ALL_COLS.length - 1 ? "1px solid #eee" : "none",
                                whiteSpace: "nowrap",
                                color: isEmpty ? "#ccc" : "#111",
                                position: j < STICKY_COUNT ? "sticky" : "static",
                                left: j === 0 ? 0 : j === 1 ? COL_WIDTH : undefined,
                                background: rowBg,
                                zIndex: j < STICKY_COUNT ? 1 : 0,
                                boxShadow: j === STICKY_COUNT - 1 ? "3px 0 8px rgba(0,0,0,0.08)" : "none",
                                minWidth: COL_WIDTH,
                                width: COL_WIDTH,
                              }}
                            >
                              {isEmpty ? "—" : String(val)}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* SLIDER */}
          {/* <div style={{ marginTop: 16, padding: "0 2px" }}>
            <div style={{
              display: "flex", justifyContent: "space-between",
              fontSize: 11, color: "#888", marginBottom: 8,
              fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
            }}>
              <span>◀ Left</span>
              <span style={{ color: "#111", fontSize: 12 }}>↔ Drag to scroll all {ALL_COLS.length} columns</span>
              <span>Right ▶</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={sliderPct}
              onChange={handleSlider}
              className="col-slider"
            />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: 10, color: "#bbb" }}> */}
              {/* <span>Timestamp · Model</span> */}
              {/* <span>← → or drag slider</span>
              <span>Despatch Inv. Date</span>
            </div>
          </div> */}
        </>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
//  MAIN ROUTE CARD COMPONENT
// ─────────────────────────────────────────────
const Routecard = () => {
  const [form, setForm] = useState(initialState);
  const [selectedModel, setSelectedModel] = useState("");
  const [search, setSearch] = useState("");
  const [shaking, setShaking] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const [page, setPage] = useState("form");

  const allModels = Object.keys(MODEL_DATA);
  const filteredModels = allModels.filter(m => m.toLowerCase().includes(search.toLowerCase()));

  const openModel = (model) => {
    setSelectedModel(model);
    setForm({ ...initialState, ...MODEL_DATA[model] });
    setSearch(model);
    setShowSuggestions(false);
    setSearchError(false);
    setSubmitSuccess(false);
    setSubmitError("");
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
    const exact = allModels.find(m => m.toLowerCase() === val.toLowerCase());
    if (exact) openModel(exact);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      const exact = allModels.find(m => m.toLowerCase() === search.toLowerCase());
      if (exact) openModel(exact);
      else if (filteredModels.length === 1) openModel(filteredModels[0]);
      else triggerShake();
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
    setForm(prev => ({ ...prev, [field]: e.target.value }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError("");

    try {
      const payload = { ...form, model: selectedModel };
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload),
      });
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (err) {
      setSubmitError("Failed to save. Check your Apps Script URL and redeploy.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setForm(selectedModel && MODEL_DATA[selectedModel]
      ? { ...initialState, ...MODEL_DATA[selectedModel] }
      : initialState
    );
    setSubmitSuccess(false);
    setSubmitError("");
  };

  const inp = (field, placeholder = "", type = "text") => (
    <input style={S.fieldInput} type={type} data-field={field} value={form[field]} onChange={handleChange} placeholder={placeholder} />
  );
  const tinp = (field, placeholder = "", type = "text") => (
    <input style={S.tableInput} type={type} data-field={field} value={form[field]} onChange={handleChange} placeholder={placeholder} />
  );
  const lbl = (text) => <span style={S.fieldLabel}>{text}</span>;

  if (page === "view") return <ViewAllCards onBack={() => setPage("form")} />;

  return (
    <div style={S.wrapper}>
      <style>{`
        @keyframes shake {
          0%,100% { transform: translateX(0); }
          15% { transform: translateX(-8px); }
          30% { transform: translateX(8px); }
          45% { transform: translateX(-5px); }
          60% { transform: translateX(5px); }
          75% { transform: translateX(-3px); }
          90% { transform: translateX(3px); }
        }
        .shake { animation: shake 0.45s ease; }
        .sug-item { padding: 9px 14px; font-size: 13px; font-family: monospace; font-weight: 600; border-bottom: 1px solid #eee; color: #111; cursor: pointer; }
        .sug-item:hover { background: #f5f5f5; }
      `}</style>

      {/* ── TOP BAR ── */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
        <button style={S.btnView} onClick={() => setPage("view")}>
          📋 View All Saved Cards
        </button>
      </div>

      {/* ── SELECTOR CARD ── */}
      <div style={{ background: "#fff", border: "2px solid #111", boxShadow: "5px 5px 0 #111", padding: "24px 28px", marginBottom: 28 }}>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#555", marginBottom: 16 }}>
          Select Model to Open Route Card
        </div>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "flex-start" }}>
          <div style={{ position: "relative", flex: 1, minWidth: 220 }}>
            <div
              className={shaking ? "shake" : ""}
              style={{
                display: "flex", alignItems: "center", gap: 8,
                border: `2px solid ${searchError ? "#e53e3e" : "#bbb"}`,
                padding: "8px 12px",
                background: searchError ? "#fff5f5" : "#fafafa",
                transition: "border-color 0.2s, background 0.2s",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 30 30" fill={searchError ? "#e53e3e" : "#888"}>
                <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
              </svg>
              <input
                type="text"
                placeholder="Type model name & press Enter…"
                value={search}
                onChange={handleSearchChange}
                onKeyDown={handleSearchKeyDown}
                onFocus={() => search.length > 0 && setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 160)}
                style={{ border: "none", outline: "none", background: "transparent", fontSize: 14, color: searchError ? "#e53e3e" : "#111", width: "100%", fontFamily: "inherit", fontWeight: 500 }}
              />
              {search && (
                <span
                  onMouseDown={() => { setSearch(""); setSearchError(false); setShowSuggestions(false); setSelectedModel(""); setForm(initialState); }}
                  style={{ cursor: "pointer", color: "#aaa", fontSize: 16, userSelect: "none", lineHeight: 1 }}
                >✕</span>
              )}
            </div>

            {searchError && (
              <div style={{ fontSize: 11, color: "#e53e3e", marginTop: 5, fontWeight: 700 }}>
                ✕ Model not found — try HHRA or HSRA
              </div>
            )}

            {showSuggestions && filteredModels.length > 0 && (
              <div style={{ position: "absolute", top: "calc(100% + 2px)", left: 0, right: 0, zIndex: 200, border: "2px solid #111", background: "#fff", boxShadow: "4px 4px 0 #111", maxHeight: 200, overflowY: "auto" }}>
                {filteredModels.map(m => (
                  <div key={m} className="sug-item" onMouseDown={() => openModel(m)}>{m}</div>
                ))}
              </div>
            )}

            {showSuggestions && filteredModels.length === 0 && (
              <div style={{ position: "absolute", top: "calc(100% + 2px)", left: 0, right: 0, zIndex: 200, border: "2px solid #e53e3e", background: "#fff5f5", padding: "10px 14px", fontSize: 12, color: "#e53e3e", fontWeight: 700 }}>
                No matching model found
              </div>
            )}
          </div>

          <div style={{ display: "flex", alignItems: "center", color: "#bbb", fontSize: 12, fontWeight: 700, paddingTop: 10 }}>OR</div>

          <select
            value={selectedModel}
            onChange={handleModelSelect}
            style={{ padding: "10px 16px", border: "2px solid #111", fontSize: 14, fontFamily: "inherit", fontWeight: 600, background: "#fff", cursor: "pointer", minWidth: 220, outline: "none", height: 44 }}
          >
            <option value="">-- Select from list --</option>
            {allModels.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>

        {!selectedModel && (
          <div style={{ marginTop: 14, fontSize: 12, color: "#999", fontStyle: "italic" }}>
            Type a model name or pick from the dropdown — the Route Card will open automatically.
          </div>
        )}
        {selectedModel && (
          <div style={{ marginTop: 14, display: "inline-flex", alignItems: "center", gap: 8, background: "#111", color: "#fff", padding: "5px 14px", fontSize: 12, fontWeight: 700, letterSpacing: "0.08em" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
            LOADED: {selectedModel}
          </div>
        )}
      </div>

      {/* ── ROUTE CARD FORM ── */}
      {selectedModel && (
        <>
          {submitSuccess && <div style={S.successBanner}>✓ Route Card saved to Google Sheets successfully!</div>}
          {submitError && <div style={S.errorBanner}>✕ {submitError}</div>}

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

            {/* A — STORE USE */}
            <div style={S.sectionLabel}>A — Store Use</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
              <div style={cell()}>{lbl("Route Card No.")}{inp("routeCardNo")}</div>
              <div style={cell()}>{lbl("Start Date")}{inp("startDate", "", "date")}</div>
              <div style={cell()}>{lbl("End Date")}{inp("endDate", "", "date")}</div>
              <div style={cell(true)} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
              <div style={cell(false, true)}>{lbl("Component")}{inp("component")}</div>
              <div style={cell()}>{lbl("Issued Material Inv. No.")}{inp("issuedMaterialInvNo")}</div>
              <div style={cell(true)} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
              <div style={cell()}>{lbl("Issued Qty.")}{inp("issuedQty")}</div>
              <div style={cell()} />
              <div style={cell()}>{lbl("Issued Material Inv. Date")}{inp("issuedMaterialInvDate", "", "date")}</div>
              <div style={cell(true)} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
              <div style={cell()}>{lbl("Customer")}{inp("customer")}</div>
              <div style={cell()} />
              <div style={cell()}>{lbl("Issued Material Inv. Qty.")}{inp("issuedMaterialInvQty")}</div>
              <div style={cell(true)} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
              <div style={cell()}>{lbl("Heat No.")}{inp("heatNo")}</div>
              <div style={cell()} /><div style={cell()} /><div style={cell(true)} />
            </div>

            {/* B — MACHINE SHOP */}
            <div style={S.sectionLabel}>B — Machine Shop Use</div>
            <table style={S.table}>
              <thead><tr>
                <th style={{ ...thStyle(), width: "22%" }}>Operation</th>
                <th style={thStyle()}>OK Qty.</th><th style={thStyle()}>Rew. Qty.</th>
                <th style={thStyle()}>Rej. Qty.</th><th style={thStyle()}>Date</th>
                <th style={thStyle(true)}>Sign.</th>
              </tr></thead>
              <tbody><tr>
                <td style={{ ...tdStyle(), fontSize: 13, fontWeight: 600, color: "#222" }}>Soft Machining</td>
                <td style={tdStyle()}>{tinp("softMachiningOkQty", "0")}</td>
                <td style={tdStyle()}>{tinp("softMachiningRewQty", "0")}</td>
                <td style={tdStyle()}>{tinp("softMachiningRejQty", "0")}</td>
                <td style={tdStyle()}>{tinp("softMachiningDate", "", "date")}</td>
                <td style={tdStyle(true)}>{tinp("softMachiningSign", "Signature")}</td>
              </tr></tbody>
            </table>

            {/* C — HT SHOP */}
            <div style={S.sectionLabel}>C — HT Shop Use</div>
            <table style={S.table}>
              <thead><tr>
                <th style={{ ...thStyle(), width: "22%" }}>Operation</th>
                <th style={thStyle()}>OK Qty.</th><th style={thStyle()}>Rew. Qty.</th>
                <th style={thStyle()}>Rej. Qty.</th><th style={thStyle()}>Date</th>
                <th style={thStyle(true)}>Sign.</th>
              </tr></thead>
              <tbody>
                <tr>
                  <td style={{ ...tdStyle(), fontSize: 13, fontWeight: 600, color: "#222" }}>Heat Treatment</td>
                  <td style={tdStyle()}>{tinp("htOkQty", "0")}</td>
                  <td style={tdStyle()}>{tinp("htRewQty", "0")}</td>
                  <td style={tdStyle()}>{tinp("htRejQty", "0")}</td>
                  <td style={tdStyle()}>{tinp("htDate", "", "date")}</td>
                  <td style={tdStyle(true)}>{tinp("htSign", "Signature")}</td>
                </tr>
                <tr>
                  <td style={tdStyle()}>{lbl("Heat Treatment Charge No.")}{tinp("htChargeNo", "—")}</td>
                  <td style={tdStyle()} colSpan={2} />
                  <td style={tdStyle(true)} colSpan={3}>{lbl("Heat Treatment Charge Date")}{tinp("htChargeDate", "", "date")}</td>
                </tr>
              </tbody>
            </table>

            {/* D — MACHINE SHOP */}
            <div style={S.sectionLabel}>D — Machine Shop Use</div>
            <table style={S.table}>
              <thead><tr>
                <th style={{ ...thStyle(), width: "22%" }}>Operation</th>
                <th style={thStyle()}>OK Qty.</th><th style={thStyle()}>Rew. Qty.</th>
                <th style={thStyle()}>Rej. Qty.</th><th style={thStyle()}>Date</th>
                <th style={thStyle(true)}>Sign.</th>
              </tr></thead>
              <tbody>
                <tr>
                  <td style={{ ...tdStyle(), fontSize: 13, fontWeight: 600, color: "#222" }}>Hard Machining</td>
                  <td style={tdStyle()}>{tinp("hardMachiningOkQty", "0")}</td>
                  <td style={tdStyle()}>{tinp("hardMachiningRewQty", "0")}</td>
                  <td style={tdStyle()}>{tinp("hardMachiningRejQty", "0")}</td>
                  <td style={tdStyle()}>{tinp("hardMachiningDate", "", "date")}</td>
                  <td style={tdStyle(true)}>{tinp("hardMachiningSign", "Signature")}</td>
                </tr>
                <tr>
                  <td style={{ ...tdStyle(), fontSize: 13, fontWeight: 600, color: "#222" }}>Cleaning</td>
                  <td style={tdStyle()}>{tinp("cleaningOkQty", "0")}</td>
                  <td style={tdStyle()}>{tinp("cleaningRewQty", "0")}</td>
                  <td style={tdStyle()}>{tinp("cleaningRejQty", "0")}</td>
                  <td style={tdStyle()}>{tinp("cleaningDate", "", "date")}</td>
                  <td style={tdStyle(true)}>{tinp("cleaningSign", "Signature")}</td>
                </tr>
              </tbody>
            </table>

            {/* E — ASSEMBLY */}
            <div style={S.sectionLabel}>E — Assembly Use</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
              <div style={asmCell()}>{lbl("Screw Inv. No.")}{inp("screwInvNo", "—")}</div>
              <div style={asmCell()}>{lbl("Screw Inv. Date")}{inp("screwInvDate", "", "date")}</div>
              <div style={asmCell(true)}>{lbl("Issued Qty.")}{inp("screwIssuedQty", "0")}</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
              <div style={asmCell()}>{lbl("Nut Inv. No.")}{inp("nutInvNo", "—")}</div>
              <div style={asmCell()}>{lbl("Nut Inv. Date")}{inp("nutInvDate", "", "date")}</div>
              <div style={asmCell(true)}>{lbl("Issued Qty.")}{inp("nutIssuedQty", "0")}</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
              <div style={asmCell()}>{lbl("Bearing Inv. No.")}{inp("bearingInvNo", "—")}</div>
              <div style={asmCell()}>{lbl("Bearing Inv. Date")}{inp("bearingInvDate", "", "date")}</div>
              <div style={asmCell(true)}>{lbl("Issued Qty.")}{inp("bearingIssuedQty", "0")}</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
              <div style={asmCell()}>{lbl("Bearing Shaft Inv. No.")}{inp("bearingShaftInvNo", "—")}</div>
              <div style={asmCell()}>{lbl("Shaft Inv. Date")}{inp("shaftInvDate", "", "date")}</div>
              <div style={asmCell(true)}>{lbl("Issued Qty.")}{inp("shaftIssuedQty", "0")}</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
              <div style={asmCell()}>{lbl("Shell Bearing Inv. No.")}{inp("shellBearingInvNo", "—")}</div>
              <div style={asmCell()}>{lbl("Shell Bearing Inv. Date")}{inp("shellBearingInvDate", "", "date")}</div>
              <div style={asmCell(true)} />
            </div>
            <table style={S.table}>
              <thead><tr>
                <th style={{ ...thStyle(), width: "22%" }}>Operation</th>
                <th style={thStyle()}>OK Qty.</th><th style={thStyle()}>Rew. Qty.</th>
                <th style={thStyle()}>Rej. Qty.</th><th style={thStyle()}>Date</th>
                <th style={thStyle(true)}>Sign.</th>
              </tr></thead>
              <tbody><tr>
                <td style={{ ...tdStyle(), fontSize: 13, fontWeight: 600, color: "#222" }}>Assembly</td>
                <td style={tdStyle()}>{tinp("assemblyOkQty", "0")}</td>
                <td style={tdStyle()}>{tinp("assemblyRewQty", "0")}</td>
                <td style={tdStyle()}>{tinp("assemblyRejQty", "0")}</td>
                <td style={tdStyle()}>{tinp("assemblyDate", "", "date")}</td>
                <td style={tdStyle(true)}>{tinp("assemblySign", "Signature")}</td>
              </tr></tbody>
            </table>

            {/* F — DISPATCH */}
            <div style={S.sectionLabel}>F — Dispatch Use</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              <div style={cell()}>{lbl("Despatch Invoice No.")}{inp("despatchInvoiceNo", "—")}</div>
              <div style={cell(true)}>{lbl("Despatch Inv. Date")}{inp("despatchInvDate", "", "date")}</div>
            </div>

            {/* FOOTER */}
            <div style={S.formFooter}>
              <span style={S.formRef}>F760B/02</span>
              <div>
                <button type="button" style={S.btnReset} onClick={handleReset}>Reset</button>
                <button
                  type="submit"
                  style={{ ...S.btnSubmit, ...(submitting ? { opacity: 0.7, cursor: "not-allowed" } : {}) }}
                  disabled={submitting}
                >
                  {submitting ? "Saving..." : "Submit & Save to Sheet"}
                </button>
              </div>
            </div>

          </form>
        </>
      )}
    </div>
  );
};

export default Routecard;