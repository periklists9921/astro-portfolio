import { useMemo, useState } from "react";

/**
 * ContactForm (React)
 * -----------------------------------------------------------------------------
 * Requirement: "Contact form section - UI only"
 * - No backend submit
 * - Shows validation UI and success message
 */

export default function ContactForm({ labels }) {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | success

  const errors = useMemo(() => {
    const e = {};
    if (!values.name.trim()) e.name = labels?.err_required ?? "Required";
    if (!values.email.trim()) e.email = labels?.err_required ?? "Required";
    else if (!/^\S+@\S+\.\S+$/.test(values.email))
      e.email = labels?.err_email ?? "Invalid email";
    if (!values.message.trim()) e.message = labels?.err_required ?? "Required";
    return e;
  }, [values, labels]);

  const canSubmit = Object.keys(errors).length === 0;

  function onChange(field, val) {
    setValues((v) => ({ ...v, [field]: val }));
  }

  function onBlur(field) {
    setTouched((t) => ({ ...t, [field]: true }));
  }

  function submit(e) {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!canSubmit) return;

    // UI only: show success and reset.
    setStatus("success");
    setTimeout(() => {
      setStatus("idle");
      setValues({ name: "", email: "", message: "" });
      setTouched({});
    }, 1500);
  }

  return (
    <form onSubmit={submit} className="grid gap-4">
      <Field
        label={labels?.name ?? "Name"}
        value={values.name}
        onChange={(v) => onChange("name", v)}
        onBlur={() => onBlur("name")}
        error={touched.name ? errors.name : ""}
      />

      <Field
        label={labels?.email ?? "Email"}
        type="email"
        value={values.email}
        onChange={(v) => onChange("email", v)}
        onBlur={() => onBlur("email")}
        error={touched.email ? errors.email : ""}
      />

      <Field
        label={labels?.message ?? "Message"}
        as="textarea"
        rows={5}
        value={values.message}
        onChange={(v) => onChange("message", v)}
        onBlur={() => onBlur("message")}
        error={touched.message ? errors.message : ""}
      />

      <button
        type="submit"
        className={[
          "mt-2 inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium transition",
          canSubmit
            ? "bg-white text-zinc-900 hover:opacity-90"
            : "bg-white/20 text-white/70 cursor-not-allowed",
        ].join(" ")}
        disabled={!canSubmit}
      >
        {status === "success" ? (labels?.sent ?? "Sent ✓") : labels?.send ?? "Send"}
      </button>

      <p className="text-xs opacity-60">{labels?.note ?? "UI only (no backend submission)."}</p>
    </form>
  );
}

function Field({ label, value, onChange, onBlur, error, type = "text", as, rows }) {
  const base =
    "rounded-xl border bg-transparent px-4 py-3 outline-none transition focus:border-white/25";
  const cls = error ? "border-red-500/40" : "border-white/10";

  return (
    <label className="grid gap-2">
      <span className="text-sm opacity-80">{label}</span>

      {as === "textarea" ? (
        <textarea
          rows={rows}
          className={`${base} ${cls}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
        />
      ) : (
        <input
          type={type}
          className={`${base} ${cls}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={onBlur}
        />
      )}

      {error && <span className="text-xs text-red-200/80">{error}</span>}
    </label>
  );
}
