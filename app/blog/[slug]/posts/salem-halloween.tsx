import Image from "next/image";
import Link from "next/link";

export default function HalloweenSalemGuide() {
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
            <span className="inline-block bg-orange-500/30 text-orange-200 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              Seasonal Events
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Halloween in Salem: A Magical Girls' Trip Guide
            </h1>
            <div className="flex items-center gap-4 text-white/60 mb-6">
              <span>November 2025</span>
              <span>•</span>
              <span>10 min read</span>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
              <Image 
                src="/images/blog/salem-halloween.jpg" 
                alt="Salem Massachusetts during Halloween"
                fill
                className="object-cover"
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            
            <div className="bg-orange-500/10 backdrop-blur-sm border border-orange-400/30 rounded-xl p-6 mb-8">
              <p className="text-white/90 text-lg leading-relaxed mb-0">
                <strong>Picture this:</strong> Cobblestone streets lit by jack-o'-lanterns, historic houses decorated with witchy charm, fall leaves crunching under your feet, and the most magical month-long Halloween celebration in America. Welcome to Salem, Massachusetts in October—where history, mystery, and pure autumn magic create the ultimate girls' getaway.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-4">Why Salem for Halloween?</h2>
            
            <p className="text-white/80 leading-relaxed mb-6">
              Salem isn't just capitalizing on its witch trial history—it's become a month-long celebration of Halloween, history, and the supernatural. Here's what makes it special:
            </p>

            <ul className="space-y-4 mb-8 text-white/80">
              <li className="flex gap-3">
                <span className="text-orange-400 font-bold">🎃</span>
                <span><strong>Peak Fall Foliage:</strong> October in New England means stunning autumn colors everywhere you look.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400 font-bold">🎃</span>
                <span><strong>Walkable Everything:</strong> The entire historic district is compact and easy to explore on foot.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400 font-bold">🎃</span>
                <span><strong>Month-Long Festival:</strong> Events, haunted houses, parades, and activities throughout October—not just Halloween weekend.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400 font-bold">🎃</span>
                <span><strong>Real History:</strong> This isn't a theme park—Salem is a real historic town with fascinating stories.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-400 font-bold">🎃</span>
                <span><strong>Perfect Girls' Trip Vibe:</strong> Cozy cafes, cute boutiques, waterfront dining, and lots of photo ops.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-white mt-12 mb-4">When to Go: Timing Your Salem Visit</h2>

            <div className="space-y-6 mb-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-orange-300 mb-3">Early October (Weekends 1-2)</h3>
                <p className="text-white/80 leading-relaxed mb-3">
                  <strong>Best for:</strong> Avoiding crowds while still getting the full Halloween experience
                </p>
                <p className="text-white/70 leading-relaxed">
                  <strong>Pros:</strong> Easier to get reservations, less crowded attractions, better hotel rates<br/>
                  <strong>Cons:</strong> Some events haven't started yet, slightly less festive atmosphere
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-orange-300 mb-3">Mid-October (Weekends 3-4)</h3>
                <p className="text-white/80 leading-relaxed mb-3">
                  <strong>Best for:</strong> The sweet spot—festive without being overwhelmed
                </p>
                <p className="text-white/70 leading-relaxed">
                  <strong>Pros:</strong> All events running, peak foliage, manageable crowds on weekdays<br/>
                  <strong>Cons:</strong> Weekends still busy, need to book restaurants ahead
                </p>
              </div>

              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-orange-300 mb-3">Halloween Week (October 25-31) ⭐</h3>
                <p className="text-white/80 leading-relaxed mb-3">
                  <strong>Best for:</strong> The full immersive Halloween experience (if you don't mind crowds)
                </p>
                <p className="text-white/70 leading-relaxed">
                  <strong>Pros:</strong> Peak festivities, Halloween parade, costume contests, maximum atmosphere<br/>
                  <strong>Cons:</strong> Very crowded (especially Halloween night), higher prices, need reservations for everything<br/>
                  <strong>Note:</strong> This is when GroovinFly typically runs our Salem trip!
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-4">Must-Do Experiences in Salem</h2>

            <div className="space-y-6 mb-8">
              
              <div className="bg-gradient-to-r from-purple-500/10 to-orange-500/10 border border-white/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-3">🏛️ Historical Sites</h3>
                <ul className="space-y-3 text-white/80">
                  <li><strong>The Witch House:</strong> The only structure still standing with direct ties to the 1692 trials</li>
                  <li><strong>Salem Witch Museum:</strong> Great overview of the witch trials (book tickets online ahead!)</li>
                  <li><strong>Old Burying Point Cemetery:</strong> Dating to 1637, includes Judge Hathorne's grave</li>
                  <li><strong>House of the Seven Gables:</strong> Made famous by Nathaniel Hawthorne, beautiful mansion tour</li>
                  <li><strong>Peabody Essex Museum:</strong> World-class art and history museum (great rainy day option)</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 to-orange-500/10 border border-white/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-3">🔮 Salem's Witchy Side</h3>
                <ul className="space-y-3 text-white/80">
                  <li><strong>Get a Tarot Reading:</strong> Salem has dozens of readers—try HausWitch or Crow Haven Corner</li>
                  <li><strong>Visit Witch Shops:</strong> Browse crystals, herbs, and metaphysical goods at local shops</li>
                  <li><strong>Count's Hysteria:</strong> Salem's most popular haunted attraction (get tickets early!)</li>
                  <li><strong>Haunted Happenings Grand Parade:</strong> Massive Halloween parade (typically Oct 30th or 31st)</li>
                  <li><strong>Ghost Tours:</strong> Multiple companies offer walking tours—some historical, some theatrical</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-500/10 to-orange-500/10 border border-white/20 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-3">🍂 Seasonal Activities</h3>
                <ul className="space-y-3 text-white/80">
                  <li><strong>Salem's Spooky Street Fair:</strong> Vendors, food trucks, entertainment on Essex Street</li>
                  <li><strong>Costume Shopping:</strong> Visit in costume or buy pieces from local shops</li>
                  <li><strong>Waterfront Walk:</strong> Beautiful autumn views along the harbor</li>
                  <li><strong>Apple Cider Everything:</strong> Donuts, cider, apple pie—fall treats everywhere</li>
                  <li><strong>Photo Ops Galore:</strong> Every corner is Instagram-worthy in October</li>
                </ul>
              </div>

            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-4">Where to Eat & Drink</h2>

            <div className="space-y-4 mb-8">
              <div className="bg-white/5 border-l-4 border-orange-400 p-5 rounded">
                <p className="font-semibold text-white mb-2">☕ Best Coffee & Breakfast</p>
                <p className="text-white/80"><strong>Flying Saucer Pizza:</strong> Counter-culture vibe, great breakfast sandwiches<br/>
                <strong>Gulu-Gulu Cafe:</strong> Cozy spot with excellent coffee and light bites</p>
              </div>

              <div className="bg-white/5 border-l-4 border-orange-400 p-5 rounded">
                <p className="font-semibold text-white mb-2">🍽️ Lunch & Casual Dining</p>
                <p className="text-white/80"><strong>Mercy Tavern:</strong> Upscale casual with great atmosphere<br/>
                <strong>Longboards:</strong> Waterfront spot with seafood and cocktails<br/>
                <strong>Rockafellas:</strong> American comfort food, lively bar scene</p>
              </div>

              <div className="bg-white/5 border-l-4 border-orange-400 p-5 rounded">
                <p className="font-semibold text-white mb-2">🍷 Dinner & Nicer Spots</p>
                <p className="text-white/80"><strong>Sea Level Oyster Bar:</strong> Fresh seafood, reservation required<br/>
                <strong>Ledger Restaurant:</strong> Farm-to-table in a historic building<br/>
                <strong>Witch's Brew Cafe:</strong> Themed restaurant, fun atmosphere (get reservations!)</p>
              </div>

              <div className="bg-white/5 border-l-4 border-orange-400 p-5 rounded">
                <p className="font-semibold text-white mb-2">🍻 Bars & Nightlife</p>
                <p className="text-white/80"><strong>Salem Beer Works:</strong> Craft brews and pub food<br/>
                <strong>The Howling Wolf Taqueria:</strong> Cocktails and tacos<br/>
                <strong>Opus Underground:</strong> Live music and late-night vibes</p>
              </div>
            </div>

            <div className="bg-red-500/10 border border-red-400/50 rounded-xl p-6 mb-8">
              <h4 className="text-xl font-bold text-white mb-3">🚨 Important Dining Tip</h4>
              <p className="text-white/80 leading-relaxed">
                Make reservations for EVERYTHING during Halloween season, especially for dinner. Restaurants book up weeks in advance. If you can't get a reservation, arrive right when they open (5pm) or be prepared to wait 1-2 hours. Food trucks and quick-service spots (pizza, sandwiches) are your friends for spontaneous meals.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-4">What to Pack for Salem in October</h2>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-orange-300 mb-4">The Essentials:</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex gap-3">
                  <span className="text-orange-400">•</span>
                  <span><strong>Layers:</strong> October weather ranges from 40-65°F. Pack sweaters, light jackets, scarves</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400">•</span>
                  <span><strong>Comfortable Walking Shoes:</strong> You'll walk 15,000+ steps a day on cobblestones</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400">•</span>
                  <span><strong>Rain Jacket or Umbrella:</strong> October can be rainy—be prepared</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400">•</span>
                  <span><strong>Costume Pieces:</strong> Bring accessories (witch hat, cape, etc.) to join the fun</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400">•</span>
                  <span><strong>Crossbody Bag:</strong> Hands-free for walking around, shopping, and taking photos</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400">•</span>
                  <span><strong>Portable Phone Charger:</strong> You'll be taking SO many photos</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-4">Pro Tips from Seasoned Salem Visitors</h2>

            <div className="space-y-4 mb-8 text-white/80">
              <div className="bg-white/5 p-5 rounded border-l-4 border-purple-400">
                <p><strong>Arrive Early in the Day:</strong> By 11am-noon, the town is packed. Get to attractions when they open (9-10am) to beat crowds.</p>
              </div>
              
              <div className="bg-white/5 p-5 rounded border-l-4 border-purple-400">
                <p><strong>Buy Attraction Tickets Online:</strong> Skip the lines by purchasing museum and haunted house tickets in advance.</p>
              </div>
              
              <div className="bg-white/5 p-5 rounded border-l-4 border-purple-400">
                <p><strong>Park Outside Downtown:</strong> Parking is limited and expensive. Consider parking at the visitor center and taking the trolley or walking in.</p>
              </div>
              
              <div className="bg-white/5 p-5 rounded border-l-4 border-purple-400">
                <p><strong>Embrace the Crowds:</strong> Halloween weekend is BUSY. Go with the flow, be patient, and remember everyone's there to have fun.</p>
              </div>
              
              <div className="bg-white/5 p-5 rounded border-l-4 border-purple-400">
                <p><strong>Explore Nearby Towns:</strong> Marblehead (charming coastal town), Beverly (less crowded), and Rockport (fishing village) make great day trips.</p>
              </div>

              <div className="bg-white/5 p-5 rounded border-l-4 border-purple-400">
                <p><strong>Take the Ferry to Boston:</strong> 30-minute ferry ride to Boston's waterfront—great way to explore another city!</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-4">Sample 3-Day Salem Itinerary</h2>

            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-br from-orange-500/20 to-purple-500/20 border border-orange-400/50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Day 1: Historic Salem</h3>
                <ul className="space-y-2 text-white/80">
                  <li><strong>Morning:</strong> Breakfast at Gulu-Gulu, then Salem Witch Museum</li>
                  <li><strong>Midday:</strong> Walk to The Witch House, lunch at Mercy Tavern</li>
                  <li><strong>Afternoon:</strong> House of the Seven Gables tour, waterfront stroll</li>
                  <li><strong>Evening:</strong> Dinner reservation at Sea Level, ghost tour at 8pm</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-purple-500/20 border border-orange-400/50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Day 2: Witchy & Spooky</h3>
                <ul className="space-y-2 text-white/80">
                  <li><strong>Morning:</strong> Coffee and shop the witch stores on Essex Street</li>
                  <li><strong>Midday:</strong> Tarot reading, browse boutiques, lunch at Flying Saucer</li>
                  <li><strong>Afternoon:</strong> Count's Hysteria haunted house (pre-booked tickets)</li>
                  <li><strong>Evening:</strong> Dinner at Witch's Brew Cafe, catch street performers</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-purple-500/20 border border-orange-400/50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Day 3: Explore & Relax</h3>
                <ul className="space-y-2 text-white/80">
                  <li><strong>Morning:</strong> Day trip to Marblehead or ferry to Boston</li>
                  <li><strong>Midday:</strong> Return to Salem, final shopping and photos</li>
                  <li><strong>Afternoon:</strong> Old Burying Point Cemetery, last-minute souvenir hunting</li>
                  <li><strong>Evening:</strong> Early dinner at Rockafellas, Halloween parade (if Oct 30-31)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-4">Why You Should Go With GroovinFly</h2>

            <div className="bg-gradient-to-r from-orange-500/20 to-purple-500/20 border border-orange-400/50 rounded-xl p-8 mb-8">
              <p className="text-white/90 text-lg leading-relaxed mb-4">
                Salem in October is magical—but it requires serious planning. Hotels book months in advance. Restaurant reservations are impossible without insider knowledge. Navigating crowds can be overwhelming if you're unfamiliar with the town.
              </p>
              <p className="text-white/90 text-lg leading-relaxed mb-4">
                <strong>That's where we come in.</strong> GroovinFly handles all the logistics: pre-booked accommodations, restaurant reservations, attraction tickets, and a curated itinerary that hits all the must-sees without the stress. Plus, you're traveling with other women who love autumn, history, and a little Halloween magic.
              </p>
              <p className="text-white/90 text-lg leading-relaxed font-semibold">
                You just show up, wear your witch hat, and enjoy the experience.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                Join Us for Halloween in Salem 2026
              </h3>
              <p className="text-white/80 mb-6">
                October 2026 trip dates coming soon! Sign up for our newsletter to be the first to know when bookings open.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#newsletter"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg"
                >
                  Get Trip Updates
                </a>
                <Link 
                  href="/trips/2026"
                  className="bg-white/20 hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-lg border border-white/30"
                >
                  View Other Trips
                </Link>
              </div>
            </div>

          </div>
        </article>

      </div>
    </div>
  );
}
