
"use client";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = async () => {
    await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setSent(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-4">Forgot Password</h2>
      {sent ? (
        <p>If this email exists, a reset link has been sent.</p>
      ) : (
        <>
          <input
            type="email"
            className="border p-2 mb-4 w-64 text-black"
            placeholder="Your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Send Link
          </button>
        </>
      )}
    </div>
  );
}
