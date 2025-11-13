import Image from "next/image";
import Link from "next/link";

export default function FirstFestivalOver40() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-fuchsia-800 to-purple-900">
      <div className="container mx-auto px-4 py-12">
        
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link href="/blog" className="text-fuchsia-300 hover:text-fuchsia-200">
            ← Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <span className="inline-block bg-purple-500/30 text-purple-200 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              Festival Tips
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Your First Music Festival Over 40: Everything You Need to Know
            </h1>
            <div className="flex items-center gap-4 text-white/60 mb-6">
              <span>November 2025</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
              <Image 
                src="/images/blog/festival-40-cover.jpg" 
                alt="Women enjoying a music festival"
                fill
                className="object-cover"
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 mb-8">
              <p className="text-white/90 text-lg leading-relaxed mb-0">
                <strong>Let's be real:</strong> You've spent the last 20 years saying "I'd love to go to Coachella someday" or "I wish I could see that artist live." Well, guess what? There's no age limit on having an amazing time at a music festival—and honestly, you might enjoy it more now than you would have in your twenties.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-4">Why Festivals Are Better After 40</h2>
            
            <p className="text-white/80 leading-relaxed mb-6">
              Here's something nobody tells you: attending a music festival in your 40s (or 50s, or 60s!) actually has some serious advantages:
            </p>

            <ul className="space-y-4 mb-8 text-white/80">
              <li className="flex gap-3">
                <span className="text-fuchsia-400 font-bold">✓</span>
                <span><strong>You know what you want.</strong> No more trying to see every single act or prove anything to anyone. You're there for the artists YOU love and the experience YOU want.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-fuchsia-400 font-bold">✓</span>
                <span><strong>You have actual money.</strong> Comfortable shoes? Check. A decent hotel instead of camping? Done. Paying for convenience? Worth it.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-fuchsia-400 font-bold">✓</span>
                <span><strong>You're confident.</strong> Nobody's watching you dance. Nobody cares what you're wearing. You're just there to have fun.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-fuchsia-400 font-bold">✓</span>
                <span><strong>You appreciate it more.</strong> You've lived enough life to know that these moments—live music with good people—are actually precious.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-4">But What About...? (Your Worries, Addressed)</h2>

            <div className="space-y-6 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-fuchsia-300 mb-3">"Am I too old for this?"</h3>
                <p className="text-white/80 leading-relaxed">
                  Short answer: No. Long answer: You'll see people of all ages at every festival. At Coachella, Stagecoach, and Gulf Coast Jam, there's a huge 40+ crowd. Music festivals aren't just for 22-year-olds anymore—they're for anyone who loves live music. And honestly? The artists performing are often in their 40s, 50s, and 60s too!
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-fuchsia-300 mb-3">"Will I be able to handle it physically?"</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Absolutely—with the right planning. This isn't about proving you can "rage all night." It's about pacing yourself, wearing comfortable shoes, staying hydrated, and taking breaks. Most festivals have shaded areas, food courts, and places to sit. You don't have to be in the front row at every show. Find your comfortable spot and enjoy.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Pro tip: Book accommodations OFF-SITE (not camping) so you can retreat to a real bed, shower, and AC when needed. Game changer.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-fuchsia-300 mb-3">"What if I don't know anyone going?"</h3>
                <p className="text-white/80 leading-relaxed">
                  This is actually one of the best parts about group travel! With GroovinFly, you're traveling with other women in your age range who also love live music. You're not showing up alone—you're showing up to a pre-made friend group. Plus, festivals are incredibly social. You'll chat with people in line, at the bar, waiting for a show to start. It's easy.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-fuchsia-300 mb-3">"What do I even wear?"</h3>
                <p className="text-white/80 leading-relaxed">
                  Comfort + your personal style. Forget the Instagram influencer outfits if they're not you. Most women over 40 at festivals wear: cute sundresses, denim shorts with a tank top, comfortable pants with a flowy top, or rompers. The key is breathable fabric, sun protection, and GOOD SHOES. We'll cover packing in detail below.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-4">Which Festival Should You Start With?</h2>

            <p className="text-white/80 leading-relaxed mb-6">
              Not all festivals are created equal. If this is your first one, consider these beginner-friendly options:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 border border-white/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-3">Gulf Coast Jam (Panama City Beach, FL)</h3>
                <p className="text-white/80 leading-relaxed mb-3">
                  <strong>Perfect for:</strong> First-timers who love country music and beach vibes
                </p>
                <p className="text-white/70 leading-relaxed">
                  This is the most relaxed, welcoming festival for beginners. It's on the beach (gorgeous setting), the crowd is friendly and laid-back, and you get shuttle transportation included with your ticket. No camping required—just comfortable hotel rooms and easy access to the festival grounds.
                </p>
                <Link href="/trips/2026/gulf-jam" className="inline-block mt-4 text-fuchsia-300 hover:text-fuchsia-200 font-semibold">
                  See Gulf Coast Jam Trip Details →
                </Link>
              </div>

              <div className="bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 border border-white/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-3">Stagecoach (Indio, CA)</h3>
                <p className="text-white/80 leading-relaxed mb-3">
                  <strong>Perfect for:</strong> Country music lovers who want the "big festival" experience
                </p>
                <p className="text-white/70 leading-relaxed">
                  Stagecoach is basically Coachella's country cousin—same venue, same vibe, but with a distinctly country crowd that tends to skew a bit older and more chill. Great production, amazing artists, and a really fun atmosphere.
                </p>
                <Link href="/trips/2026/stagecoach" className="inline-block mt-4 text-fuchsia-300 hover:text-fuchsia-200 font-semibold">
                  See Stagecoach Trip Details →
                </Link>
              </div>

              <div className="bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 border border-white/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-3">Coachella (Indio, CA)</h3>
                <p className="text-white/80 leading-relaxed mb-3">
                  <strong>Perfect for:</strong> The iconic festival experience with diverse music
                </p>
                <p className="text-white/70 leading-relaxed">
                  Yes, it's THE festival everyone talks about. But here's a secret: there are tons of women over 40 at Coachella these days, and it's actually super accessible. The venue is massive (so you can find your vibe), the art installations are incredible, and the lineup usually has something for everyone.
                </p>
                <Link href="/trips/2026/coachella" className="inline-block mt-4 text-fuchsia-300 hover:text-fuchsia-200 font-semibold">
                  See Coachella Trip Details →
                </Link>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-4">Essential Packing List for Your First Festival</h2>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-fuchsia-300 mb-4">The Absolute Must-Haves:</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex gap-3">
                  <span className="text-fuchsia-400">•</span>
                  <span><strong>Comfortable, broken-in shoes</strong> (sneakers or supportive sandals—no new shoes!)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-fuchsia-400">•</span>
                  <span><strong>Sunscreen SPF 50+</strong> and a hat (trust us, the sun is brutal)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-fuchsia-400">•</span>
                  <span><strong>Refillable water bottle</strong> (most festivals have free water stations)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-fuchsia-400">•</span>
                  <span><strong>Small crossbody bag or fanny pack</strong> (hands-free is key)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-fuchsia-400">•</span>
                  <span><strong>Portable phone charger</strong> (your phone will die by 2pm)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-fuchsia-400">•</span>
                  <span><strong>Light layers</strong> (deserts get cold at night; beaches get breezy)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-fuchsia-400">•</span>
                  <span><strong>Bandaids and blister pads</strong> (even comfortable shoes can surprise you)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-fuchsia-400">•</span>
                  <span><strong>Hand sanitizer & wipes</strong> (festival bathrooms are...rustic)</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-4">Day-Of Festival Tips</h2>

            <div className="space-y-4 mb-8 text-white/80">
              <div className="bg-white/5 border-l-4 border-fuchsia-400 p-5 rounded">
                <p className="font-semibold text-white mb-2">🌅 Arrive Early, Leave When You Want</p>
                <p>Get there when gates open to explore without crowds. But don't feel like you have to stay until the headliner ends at midnight if you're tired. It's YOUR experience.</p>
              </div>

              <div className="bg-white/5 border-l-4 border-fuchsia-400 p-5 rounded">
                <p className="font-semibold text-white mb-2">💧 Hydrate Like Your Life Depends On It</p>
                <p>Seriously—drink water constantly. Alternate one alcoholic drink with one water. Festival dehydration is real and will ruin your day.</p>
              </div>

              <div className="bg-white/5 border-l-4 border-fuchsia-400 p-5 rounded">
                <p className="font-semibold text-white mb-2">📍 Make a Meeting Spot</p>
                <p>Cell service is terrible at festivals. Pick a physical landmark ("meet at the Ferris wheel at 5pm") and stick to it.</p>
              </div>

              <div className="bg-white/5 border-l-4 border-fuchsia-400 p-5 rounded">
                <p className="font-semibold text-white mb-2">🎵 Don't Overplan the Schedule</p>
                <p>Yes, make a list of artists you want to see. But leave room to wander, discover new music, and just vibe. Some of the best festival moments are unplanned.</p>
              </div>

              <div className="bg-white/5 border-l-4 border-fuchsia-400 p-5 rounded">
                <p className="font-semibold text-white mb-2">🍕 Eat Real Food</p>
                <p>Don't just snack. Sit down and eat an actual meal midday. Your body (and your mood) will thank you.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-4">The Bottom Line</h2>

            <div className="bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 border border-fuchsia-400/50 rounded-xl p-8 mb-8">
              <p className="text-white/90 text-lg leading-relaxed mb-4">
                You're not "too old" for anything that brings you joy. Music festivals are for music lovers—and that's you. Will there be some logistical challenges? Sure. Will your feet hurt? Probably. Will it be worth it when your favorite artist plays that song and you're singing along with thousands of other people under the stars?
              </p>
              <p className="text-white/90 text-lg leading-relaxed font-semibold">
                Absolutely.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Book Your First Festival?
              </h3>
              <p className="text-white/80 mb-6">
                We handle all the logistics—lodging, transportation, tickets—so you can just show up and have fun.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/trips/2026"
                  className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-semibold px-8 py-4 rounded-lg"
                >
                  View 2026 Trips
                </Link>
                <Link 
                  href="/blog"
                  className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-lg border border-white/30"
                >
                  Read More Guides
                </Link>
              </div>
            </div>

          </div>
        </article>

        {/* Related Posts */}
        <section className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <RelatedPostCard 
              title="Coachella Packing Guide for Women Over 40"
              slug="coachella-packing-guide"
              image="/images/blog/coachella-packing.jpg"
            />
            <RelatedPostCard 
              title="Gulf Coast Jam: The Perfect First Festival"
              slug="gulf-coast-jam-guide"
              image="/images/blog/gulf-coast-guide.jpg"
            />
            <RelatedPostCard 
              title="Festival Survival Tips from Seasoned Travelers"
              slug="festival-survival-tips"
              image="/images/blog/festival-survival.jpg"
            />
          </div>
        </section>

      </div>
    </div>
  );
}

function RelatedPostCard({ title, slug, image }: { title: string; slug: string; image: string }) {
  return (
    <Link href={`/blog/${slug}`} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden hover:bg-white/15 transition-all">
      <div className="relative h-40">
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold hover:text-fuchsia-300">
          {title}
        </h3>
      </div>
    </Link>
  );
}
