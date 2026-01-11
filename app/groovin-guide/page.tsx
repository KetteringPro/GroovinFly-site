import Image from "next/image";
import Link from "next/link";

export default function GroovinGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-fuchsia-800 to-purple-900">
      <div className="container mx-auto px-4 py-12">
        
        {/* Hero Section */}
        <header className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-block bg-fuchsia-500/20 border border-fuchsia-400/50 rounded-full px-6 py-2 mb-6">
            <span className="text-fuchsia-200 font-semibold">✨ Now Accepting Applications ✨</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Become a Groovin' Guide
          </h1>
          <p className="text-2xl text-white/90 mb-4">
            Promote. Lead. Travel Free.
          </p>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Help us fill trips, lead epic adventures, and earn your spot for FREE. We're building something special at GroovinFly—and we want passionate women to grow with us.
          </p>
        </header>

        {/* What is a Groovin' Guide */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">What is a Groovin' Guide?</h2>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              A Groovin' Guide is both a <strong>brand ambassador</strong> and <strong>trip leader</strong>. Before the trip, you help spread the word and bring travelers into the GroovinFly family. During the trip, you're the vibe-setter, problem-solver, and friend who makes sure everyone has an unforgettable experience.
            </p>
            <p className="text-white/90 text-lg leading-relaxed">
              <strong>Here's the deal:</strong> Hit your booking goal, and your entire trip is FREE—plus a spending stipend. The more you help us grow, the more you travel for free. It's a true partnership.
            </p>
          </div>
        </section>

        {/* How It Works */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 border border-fuchsia-400/50 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">📣</div>
              <h3 className="text-2xl font-bold text-white mb-3">1. Promote</h3>
              <p className="text-white/80 leading-relaxed">
                Share your unique referral link, post on social media, tell your friends—help us fill your trip with amazing women.
              </p>
            </div>

            <div className="bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 border border-fuchsia-400/50 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-white mb-3">2. Hit Your Goal</h3>
              <p className="text-white/80 leading-relaxed">
                Reach your booking target and your trip is completely FREE. We'll share the specific goal when you're accepted.
              </p>
            </div>

            <div className="bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 border border-fuchsia-400/50 rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">✈️</div>
              <h3 className="text-2xl font-bold text-white mb-3">3. Lead & Travel</h3>
              <p className="text-white/80 leading-relaxed">
                Be the trip leader on the ground—set the vibe, handle logistics, and make sure everyone has a blast.
              </p>
            </div>

          </div>
        </section>

        {/* What You Get */}
        <section className="max-w-5xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">What You Get as a Groovin' Guide</h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 border border-fuchsia-400/50 rounded-xl p-8">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-white mb-3">Earn Your Free Trip</h3>
              <p className="text-white/80 leading-relaxed">
                Hit your booking goal and your trip is 100% covered—festival tickets, lodging, transportation, group meals, everything. No out-of-pocket costs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 border border-fuchsia-400/50 rounded-xl p-8">
              <div className="text-5xl mb-4">💵</div>
              <h3 className="text-2xl font-bold text-white mb-3">Spending Money Stipend</h3>
              <p className="text-white/80 leading-relaxed">
                Guides who hit their goal also receive a cash stipend for personal expenses—extra drinks, souvenirs, shopping, whatever you want.
              </p>
            </div>

            <div className="bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 border border-fuchsia-400/50 rounded-xl p-8">
              <div className="text-5xl mb-4">🔗</div>
              <h3 className="text-2xl font-bold text-white mb-3">Your Own Referral Link</h3>
              <p className="text-white/80 leading-relaxed">
                Get a custom tracking link so every booking you bring in counts toward your goal. Share it everywhere!
              </p>
            </div>

            <div className="bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 border border-fuchsia-400/50 rounded-xl p-8">
              <div className="text-5xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-white mb-3">Travel Multiple Times a Year</h3>
              <p className="text-white/80 leading-relaxed">
                Lead as many trips as you want! Each trip is a new opportunity to earn your free spot. Turn your passion into a lifestyle.
              </p>
            </div>

            <div className="bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 border border-fuchsia-400/50 rounded-xl p-8">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold text-white mb-3">VIP Status in the Community</h3>
              <p className="text-white/80 leading-relaxed">
                Become part of the GroovinFly family. Get first dibs on new trips, insider access, and recognition as a core team member.
              </p>
            </div>

            <div className="bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 border border-fuchsia-400/50 rounded-xl p-8">
              <div className="text-5xl mb-4">💜</div>
              <h3 className="text-2xl font-bold text-white mb-3">Build Lifelong Friendships</h3>
              <p className="text-white/80 leading-relaxed">
                Guides form tight bonds with each other and with travelers. Create memories and friendships that last well beyond the trip.
              </p>
            </div>

          </div>
        </section>

        {/* What You'll Do */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">What You'll Do as a Guide</h2>
          
          {/* Before the Trip */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12 mb-6">
            <h3 className="text-2xl font-bold text-fuchsia-300 mb-6">Before the Trip: Sales & Marketing</h3>
            <ul className="space-y-5 text-white/80 text-lg">
              <li className="flex gap-4">
                <span className="text-fuchsia-400 font-bold text-2xl">✓</span>
                <div>
                  <strong className="text-white">Spread the Word:</strong> Share GroovinFly trips on social media, in Facebook groups, with friends, coworkers, and your communities. Authentic enthusiasm sells!
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-fuchsia-400 font-bold text-2xl">✓</span>
                <div>
                  <strong className="text-white">Use Your Referral Link:</strong> Track every booking that comes from your efforts. Watch your progress toward your free trip goal.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-fuchsia-400 font-bold text-2xl">✓</span>
                <div>
                  <strong className="text-white">Be a Brand Ambassador:</strong> Answer questions, share your own travel experiences, and help potential travelers feel excited and confident to join.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-fuchsia-400 font-bold text-2xl">✓</span>
                <div>
                  <strong className="text-white">Create Content:</strong> Post stories, reels, testimonials—whatever feels natural to you. We'll provide graphics and talking points to help.
                </div>
              </li>
            </ul>
          </div>

          {/* During the Trip */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-fuchsia-300 mb-6">During the Trip: Leadership</h3>
            <ul className="space-y-5 text-white/80 text-lg">
              <li className="flex gap-4">
                <span className="text-fuchsia-400 font-bold text-2xl">✓</span>
                <div>
                  <strong className="text-white">Welcome & Introductions:</strong> Greet travelers when they arrive, facilitate icebreakers, and help everyone feel comfortable from day one.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-fuchsia-400 font-bold text-2xl">✓</span>
                <div>
                  <strong className="text-white">Trip Coordination:</strong> Share schedules, coordinate transportation, communicate important details, and make sure everyone knows what's happening.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-fuchsia-400 font-bold text-2xl">✓</span>
                <div>
                  <strong className="text-white">Problem Solving:</strong> Handle minor issues (lost wristbands, schedule changes, someone feels sick) calmly and efficiently.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-fuchsia-400 font-bold text-2xl">✓</span>
                <div>
                  <strong className="text-white">Group Cohesion:</strong> Encourage friendships, organize optional group activities, and make sure no one feels left out.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-fuchsia-400 font-bold text-2xl">✓</span>
                <div>
                  <strong className="text-white">Safety & Support:</strong> Keep an eye on the group, be the go-to person for questions or concerns, and ensure everyone gets home safely.
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-fuchsia-400 font-bold text-2xl">✓</span>
                <div>
                  <strong className="text-white">Be the Energy:</strong> Set a positive, inclusive, fun tone. Your enthusiasm is contagious—bring it!
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Who Makes a Great Guide */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Who Makes a Great Groovin' Guide?</h2>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              We're looking for women who can hustle AND host—organized, outgoing, not afraid to put themselves out there, and genuinely FUN. Here's our ideal guide:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-fuchsia-400">✓</span>
                  <span className="text-white/80"><strong>You're not shy about promoting</strong>—you'll share on social media, talk to friends, and spread the word authentically</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-fuchsia-400">✓</span>
                  <span className="text-white/80"><strong>You have an engaged network</strong>—friends, social followers, communities who trust your recommendations</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-fuchsia-400">✓</span>
                  <span className="text-white/80"><strong>You're naturally social and friendly</strong>—you love meeting new people and making them feel welcome</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-fuchsia-400">✓</span>
                  <span className="text-white/80"><strong>You stay calm under pressure</strong>—things don't always go perfectly, and you can roll with it</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="text-fuchsia-400">✓</span>
                  <span className="text-white/80"><strong>You're organized and reliable</strong>—people can count on you to show up and follow through</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-fuchsia-400">✓</span>
                  <span className="text-white/80"><strong>You're inclusive and empathetic</strong>—you make sure everyone feels seen and included</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-fuchsia-400">✓</span>
                  <span className="text-white/80"><strong>You love music festivals and travel</strong>—your passion is obvious!</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-fuchsia-400">✓</span>
                  <span className="text-white/80"><strong>You're 30+ years old</strong> (life experience matters!)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Priority for Early Groovers */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-fuchsia-500/30 to-purple-500/30 border-2 border-fuchsia-400 rounded-2xl p-8 md:p-12 text-center">
            <div className="text-6xl mb-4">🌟</div>
            <h2 className="text-3xl font-bold text-white mb-4">Early Groovers Get First Priority</h2>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              If you've already traveled with GroovinFly (or book a trip soon), you'll be first in line to become a Groovin' Guide. You already know the vibe, you trust us, and we trust you.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              <strong>Translation:</strong> Book a trip now → Become a guide later → Earn free trips forever. Not a bad deal, right? 😉
            </p>
          </div>
        </section>

        {/* How to Apply */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">How to Become a Groovin' Guide</h2>
          <div className="space-y-6">
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 flex gap-6 items-start">
              <div className="text-4xl font-bold text-fuchsia-400 min-w-[60px]">01</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Apply Now</h3>
                <p className="text-white/80 leading-relaxed">
                  Submit the Groovin' Guide application form. Tell us about yourself, your network, and why you'd be great at promoting and leading trips.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 flex gap-6 items-start">
              <div className="text-4xl font-bold text-fuchsia-400 min-w-[60px]">02</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Interview & Selection</h3>
                <p className="text-white/80 leading-relaxed">
                  We'll schedule a casual video call to get to know you better. If it's a good fit, you're in!
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 flex gap-6 items-start">
              <div className="text-4xl font-bold text-fuchsia-400 min-w-[60px]">03</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Get Your Referral Link & Goal</h3>
                <p className="text-white/80 leading-relaxed">
                  We'll set you up with your unique tracking link and share your booking goal for your chosen trip.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 flex gap-6 items-start">
              <div className="text-4xl font-bold text-fuchsia-400 min-w-[60px]">04</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Promote & Hit Your Goal</h3>
                <p className="text-white/80 leading-relaxed">
                  Start spreading the word! Share on social, tell your friends, create content. Watch those bookings roll in.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 flex gap-6 items-start">
              <div className="text-4xl font-bold text-fuchsia-400 min-w-[60px]">05</div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Lead Your Trip—For Free!</h3>
                <p className="text-white/80 leading-relaxed">
                  You hit your goal, you earned it. Now enjoy the trip as our guide—all expenses paid, plus your stipend.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">

            <details className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 group">
              <summary className="text-xl font-semibold text-white cursor-pointer">
                What's the booking goal to earn a free trip?
              </summary>
              <p className="text-white/80 mt-4 leading-relaxed">
                The goal varies by trip (typically 3-5 bookings). We'll share the specific number when you're accepted as a guide. It's designed to be achievable—if you're genuinely excited and willing to share, you can hit it!
              </p>
            </details>

            <details className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 group">
              <summary className="text-xl font-semibold text-white cursor-pointer">
                What if I don't hit my booking goal?
              </summary>
              <p className="text-white/80 mt-4 leading-relaxed">
                You can still join the trip—you'd just pay the regular traveler price. But we believe in you! Most guides who actively promote hit their goal. We'll also give you marketing support and tips along the way.
              </p>
            </details>
            
            <details className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 group">
              <summary className="text-xl font-semibold text-white cursor-pointer">
                Do I need prior sales or marketing experience?
              </summary>
              <p className="text-white/80 mt-4 leading-relaxed">
                Nope! We're not looking for professional salespeople. We want authentic advocates who genuinely love travel and aren't afraid to share. If you've ever convinced friends to try a restaurant, book a trip, or watch a show—you've got what it takes.
              </p>
            </details>

            <details className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 group">
              <summary className="text-xl font-semibold text-white cursor-pointer">
                Do I need prior tour guide experience?
              </summary>
              <p className="text-white/80 mt-4 leading-relaxed">
                Nope! We care more about your personality, reliability, and passion for travel than formal experience. If you've been a camp counselor, event coordinator, teacher, or team leader in any capacity, that's a plus—but not required.
              </p>
            </details>

            <details className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 group">
              <summary className="text-xl font-semibold text-white cursor-pointer">
                How many trips can I lead per year?
              </summary>
              <p className="text-white/80 mt-4 leading-relaxed">
                As many as you want! Each trip is a new opportunity to promote and earn your free spot. Some guides do 1-2 trips a year, others do 6+. It's completely up to your availability and hustle.
              </p>
            </details>

            <details className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 group">
              <summary className="text-xl font-semibold text-white cursor-pointer">
                What's the time commitment?
              </summary>
              <p className="text-white/80 mt-4 leading-relaxed">
                <strong>Before the trip:</strong> A few hours per week promoting (more if you want!). <strong>During the trip:</strong> You're committed for the full duration (typically 3-7 days). There's also some pre-trip prep and post-trip wrap-up—expect about 5-10 hours total.
              </p>
            </details>

            <details className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 group">
              <summary className="text-xl font-semibold text-white cursor-pointer">
                Do I have to share a room?
              </summary>
              <p className="text-white/80 mt-4 leading-relaxed">
                That depends on the trip. Some trips, guides get their own space. Other trips, guides share accommodations like everyone else (but you'll always have a comfortable setup). We'll be transparent about arrangements before you commit.
              </p>
            </details>

            <details className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 group">
              <summary className="text-xl font-semibold text-white cursor-pointer">
                What if I can't handle a situation that comes up?
              </summary>
              <p className="text-white/80 mt-4 leading-relaxed">
                You're never alone! GroovinFly leadership is available 24/7 during trips for backup. We'll train you on common scenarios, but if something feels beyond your scope (medical emergency, serious conflict), you can always call us for support.
              </p>
            </details>

            <details className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 group">
              <summary className="text-xl font-semibold text-white cursor-pointer">
                Can I bring a friend or partner on trips I'm guiding?
              </summary>
              <p className="text-white/80 mt-4 leading-relaxed">
                Generally, no—guides should be focused on the group. However, if your friend/partner books as a regular traveler (pays for their own spot), they can absolutely join! We just ask that you maintain professional boundaries and prioritize the group experience.
              </p>
            </details>

          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Join the Groovin' Guide Family?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Apply now to become one of GroovinFly's founding guides. Show us your hustle, hit your goal, and travel free!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLScMayc44QNyyTE9oe-aqbJbnIc8auX5_dtXMC2ykxMLBkAViw/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-purple-700 font-bold px-10 py-5 rounded-lg text-lg shadow-lg"
              >
                Apply to Be a Guide
              </a>
              <Link 
                href="/trips/2026"
                className="bg-white/20 hover:bg-white/30 text-white font-semibold px-10 py-5 rounded-lg border-2 border-white"
              >
                Book a Trip First
              </Link>
            </div>
            <p className="text-white/70 text-sm mt-6">
              Questions? Email us at <a href="mailto:guides@groovinfly.com" className="underline">guides@groovinfly.com</a>
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}