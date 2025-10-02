// components/Toast.tsx
"use client";

import { useEffect, useState } from "react";

export default function Toast({ message }: { message: string }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000); // auto-hide after 2s
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 bg-fuchsia-600 text-white px-4 py-2 rounded-xl shadow-lg text-sm">
      {message}
    </div>
  );
}