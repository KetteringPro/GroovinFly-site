"use client";

export default function SocialLinks() {
  return (
    <div className="fixed bottom-4 left-4 flex gap-4 text-sm">
      <a href={process.env.NEXT_PUBLIC_IG_URL ?? "https://instagram.com"} target="_blank" rel="noopener noreferrer">
        IG
      </a>
      <a href={process.env.NEXT_PUBLIC_TT_URL ?? "https://tiktok.com"} target="_blank" rel="noopener noreferrer">
        TikTok
      </a>
      <a href={process.env.NEXT_PUBLIC_YT_URL ?? "https://youtube.com"} target="_blank" rel="noopener noreferrer">
        YouTube
      </a>
    </div>
  );
}