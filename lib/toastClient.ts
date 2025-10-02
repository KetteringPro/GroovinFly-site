

// lib/toastClient.ts
"use client";

import { useEffect, useState } from "react";

let listeners: ((msg: string) => void)[] = [];

/** Fire a toast message from anywhere in client code */
export function setToast(msg: string) {
  listeners.forEach((cb) => cb(msg));
}

/** Subscribe to global toast messages */
export function useToast() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const cb = (msg: string) => {
      setMessage(msg);
      window.setTimeout(() => setMessage(null), 2000); // auto-hide after 2s
    };
    listeners.push(cb);
    return () => {
      listeners = listeners.filter((x) => x !== cb);
    };
  }, []);

  return message;
}