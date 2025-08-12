import React from "react";

function FormSection() {
  return (
    <section
      style={{
        padding: "4rem 1rem",
        textAlign: "center",
        backgroundColor: "#f3f4f6",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#111827" }}>
        Ready to Unlock Student Vouchers?
      </h2>

      <p
        style={{
          fontSize: "1.1rem",
          maxWidth: "600px",
          margin: "0 auto 2rem",
          color: "#374151",
        }}
      >
        Fill out our quick quiz to help us understand your interests — and stand a chance
        to win exclusive vouchers! It's simple, fun, and only takes a minute.
      </p>

      <a
        href="https://forms.gle/your-google-form-link" // ← Replace with your Google Form link
        target="_blank"
        rel="noopener noreferrer"
        style={{
          padding: "0.75rem 2rem",
          fontSize: "1rem",
          backgroundColor: "#10b981",
          color: "#fff",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: "bold",
          transition: "background-color 0.3s ease, transform 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#059669";
          e.target.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#10b981";
          e.target.style.transform = "scale(1)";
        }}
      >
        Take the Quiz & Win 🎉
      </a>
    </section>
  );
}

export default FormSection;
