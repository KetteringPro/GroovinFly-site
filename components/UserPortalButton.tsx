"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

/** Minimal shape; extend when your portal is ready */
type User = { id: string; name?: string; email?: string; avatarUrl?: string };

function getStoredUser(): User | null {
  try {
    const raw = localStorage.getItem("user"); // <- swap to your real key later
    return raw ? JSON.parse(raw) as User : null;
  } catch {
    return null;
  }
}

export default function UserPortalButton() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const update = () => setUser(getStoredUser());

    // initial
    update();

    // listen for app-wide auth updates (emit this when you login/logout)
    window.addEventListener("auth:updated", update);

    // cross-tab sync if you store user in localStorage
    const onStorage = (e: StorageEvent) => {
      if (e.key === "user") update();
    };
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("auth:updated", update);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  if (!user) {
    // Logged OUT: show Login
    return (
      <Link
        href="/login"
        className="inline-flex items-center justify-center rounded-lg p-1.5 text-white/80 hover:text-white hover:bg-white/10 transition"
        aria-label="Login"
      >
        {/* user icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" strokeWidth={1.6}
             className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round"
                d="M15.75 7.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.5 20.25a8.25 8.25 0 0 1 15 0"/>
        </svg>
      </Link>
    );
  }

  // Logged IN: show avatar or initials with dropdown link targets
  const initials =
    user.name?.split(/\s+/).map(s => s[0]).join("").slice(0,2).toUpperCase() ||
    user.email?.[0]?.toUpperCase() || "U";

  return (
    <div className="relative group">
      <Link
        href="/account"
        className="inline-flex items-center justify-center rounded-lg p-1.5 text-white hover:bg-white/10 transition"
        aria-label="My account"
      >
        {user.avatarUrl ? (
          // avatar image
          // eslint-disable-next-line @next/next/no-img-element
          <img src={user.avatarUrl} alt={user.name || "User"} className="w-6 h-6 rounded-full" />
        ) : (
          // initials fallback
          <span className="w-6 h-6 rounded-full bg-white/15 text-white text-xs font-semibold grid place-items-center">
            {initials}
          </span>
        )}
      </Link>

      {/* simple hover dropdown (can swap to a real menu later) */}
      <div className="absolute right-0 mt-2 hidden group-hover:block bg-black/80 backdrop-blur rounded-lg border border-white/10 min-w-[160px] p-1">
        <Link href="/account" className="block px-3 py-2 rounded hover:bg-white/10">My Account</Link>
        <Link href="/orders" className="block px-3 py-2 rounded hover:bg-white/10">Orders</Link>
        <button
          onClick={() => {
            localStorage.removeItem("user");             // clear your real auth here
            window.dispatchEvent(new Event("auth:updated"));
          }}
          className="w-full text-left px-3 py-2 rounded hover:bg-white/10 text-white/80"
        >
          Log out
        </button>
      </div>
    </div>
  );
}

export { UserPortalButton };