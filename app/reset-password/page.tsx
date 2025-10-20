
"use client";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ResetPasswordPage() {
  const params = useSearchParams();
  const token = params.get("token");
  const [password, setPassword] = useState('');
  const [done, setDone] = useState(false);

  const handleReset = async () => {
    const res = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password }),
    });
    if (res.ok) setDone(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {!done ? (
        <>
          <h2 className="text-3xl font-bold mb-4">Set New Password</h2>
          <input
            type="password"
            placeholder="New password"
            className="border p-2 mb-4 w-64 text-black"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleReset}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Change Password
          </button>
        </>
      ) : (
        <p>Password successfully changed!</p>
      )}
    </div>
  );
}
