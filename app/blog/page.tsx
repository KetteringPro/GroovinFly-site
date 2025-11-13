"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Blog post data structure - ONLY THE 3 POSTS WE HAVE
const blogPosts = [
  {
    slug: "first-festival-over-40",
    title: "Your First Music Festival Over 40: Everything You Need to Know",
    excerpt: "Thinking about going to your first festival? Here's what to expect, what to pack, and why it's actually better after 40.",
    category: "Festival Tips",
    image: "/images/blog/festival-40-cover.jpg",
    date: "November 2025",
    readTime: "8 min read"
  },
  {
    slug: "salem-halloween",
    title: "Halloween in Salem: A Magical Girls' Trip Guide",
    excerpt: "Witches, history, and fall vibes. Everything you need to know about experiencing Salem in October.",
    category: "Seasonal Events",
    image: "/images/blog/salem-halloween.jpg",
    date: "November 2025",
    readTime: "10 min read"
  },
  {
    slug: "christmas-nyc",
    title: "Christmas in NYC: The Ultimate Holiday Girls' Getaway",
    excerpt: "From Rockefeller Center to Broadway shows—how to do NYC during the holidays without the overwhelm.",
    category: "Seasonal Events",
    image: "/images/blog/nyc-christmas.jpg",
    date: "November 2025",
    readTime: "9 min read"
  }
];

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    try {
      setSending(true);
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } finally {
      setSending(false);
      setEmail("");
    }
  }

  // Group posts by category
  const festivalPosts = blogPosts.filter(post => post.category === "Festival Tips");
  const seasonalPosts = blogPosts.filter(post => post.category === "Seasonal Events");

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-fuchsia-800 to-purple-900">
      <div className="container mx-auto px-4 py-12">
        
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            GroovinFly Travel Blog
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Festival guides, packing tips, and insider advice for women who love live music and adventure.
          </p>
        </header>

        {/* Featured Post */}
        <section className="mb-16">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <Image 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block bg-fuchsia-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3 w-fit">
                  Featured
                </span>
                <h2 className="text-3xl font-bold text-white mb-3">
                  {blogPosts[0].title}
                </h2>
                <p className="text-white/80 mb-4">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
                  <span>{blogPosts[0].date}</span>
                  <span>•</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Link 
                  href={`/blog/${blogPosts[0].slug}`}
                  className="inline-block bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold px-6 py-3 rounded-lg w-fit"
                >
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal Events Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Seasonal Events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {seasonalPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>

        {/* Newsletter Signup - Matches Homepage Style */}
        <section className="max-w-2xl mx-auto text-center bg-white/5 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold text-white">Stay in the Loop</h3>
          <p className="mx-auto mt-2 max-w-lg text-sm text-white/70">
            Subscribe for exclusive trip updates, early access to bookings, and insider festival + travel news.
          </p>

          <form onSubmit={submit} className="mx-auto mt-4 flex w-full max-w-lg items-center gap-3">
            <label htmlFor="email" className="sr-only">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email address"
              className="flex-1 rounded-xl bg-black/40 px-4 py-3 text-white placeholder-white/50 outline-none ring-1 ring-white/15 focus:ring-2 focus:ring-fuchsia-400"
            />
            <button
              type="submit"
              disabled={sending}
              className="rounded-xl bg-fuchsia-500 px-5 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/20 hover:bg-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0b0713] focus:ring-fuchsia-400 disabled:opacity-60"
            >
              {sending ? "Sending..." : "Subscribe"}
            </button>
          </form>

          <p className="mt-2 text-xs text-white/50">No spam. Unsubscribe anytime.</p>
        </section>

      </div>
    </div>
  );
}

// Blog Card Component
function BlogCard({ post }: { post: typeof blogPosts[0] }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden hover:bg-white/15 transition-all">
      <div className="relative h-48">
        <Image 
          src={post.image} 
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <span className="inline-block bg-purple-500/30 text-purple-200 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          {post.category}
        </span>
        <h3 className="text-xl font-bold text-white mb-2">
          {post.title}
        </h3>
        <p className="text-white/70 mb-4 text-sm">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-white/60">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <Link 
            href={`/blog/${post.slug}`}
            className="text-fuchsia-300 hover:text-fuchsia-200 font-semibold text-sm"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}