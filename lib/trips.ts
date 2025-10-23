// lib/trips.ts
export type Trip = {
  slug: string;
  title: string;
  dates: string;
  start_date: string;
  tags: string[];
  blurb: string;
  href?: string;
  image?: {
    src: string;
    alt: string;
  };
  links?: {
    [key: string]: string;
  };
};

export const trips: Trip[] = [
  { slug:"ultra-miami-2026", title:"Ultra • Miami", dates:"Mar 27–30, 2026", start_date:"2026-03-27", tags:["Festival","Booking Soon"], blurb:"Festival glam, pool parties, crew dinner." },
  { slug:"edc-las-vegas-2026", title:"EDC • Las Vegas", dates:"May 15–19, 2026", start_date:"2026-05-15", tags:["Festival","Small Group"], blurb:"Festival + clubbing • resort shuttle." },
  { slug:"st-thomas-2026", title:"St. Thomas • Full Moon", dates:"Jun 26–30, 2026", start_date:"2026-06-26", tags:["Island"], blurb:"Beach, sunset cruise, party night." },
  { slug:"nashville-2026", title:"Nashville Weekend", dates:"Jul/Aug 2026", start_date:"2026-07-19", tags:["City Glam"], blurb:"Honky-tonks, rooftops, country-glam." },
  { slug:"hampton-beach-2026", title:"Hampton Beach Week", dates:"Mid-Jul / Early Aug 2026", start_date:"2026-07-25", tags:["Beach"], blurb:"Boardwalk, live music, fireworks on the sand." },
  { slug:"costa-rica-2026", title:"Costa Rica Adventure", dates:"Sept/Oct 2026", start_date:"2026-09-15", tags:["International"], blurb:"Jungle + beaches • 7 nights • crew dinner." },
  { slug:"salem-2026", title:"Salem • Halloween", dates:"Oct 2026", start_date:"2026-10-29", tags:["Seasonal"], blurb:"Witch tours, costumes, spooky-glam nights." },
  { slug:"tomorrowland-thailand-2026", title:"Tomorrowland • Thailand", dates:"Nov 2026 (TBD)", start_date:"2026-11-20", tags:["Festival","International"], blurb:"Global festival • tropical backdrop." },
  { slug:"vegas-week-2026", title:"Vegas Timeshare Week", dates:"Week after Thanksgiving", start_date:"2026-11-29", tags:["City Glam"], blurb:"Chill + shows + Sphere night." },
  { slug:"nyc-holiday-2026", title:"NYC Holiday Weekend", dates:"Dec 13th Weekend", start_date:"2026-12-11", tags:["City Glam"], blurb:"Rockettes, rooftops, 5th Ave lights." },

  {
    slug: "croatia-ultra-2026",
    href: "/images/croatia-ultra",
    title: "🌅 Ultra Yacht Week – Croatia",
    dates: "July 11–18, 2026",
    start_date: "2026-07-11",
    tags: ["Festival","Yacht","International"],
    blurb:
      "Experience world-class EDM and yacht life in the Adriatic. A 7-day festival at sea with exclusive VIP access to Ultra Europe, sunsets, and sail parties across three historic islands.",
    image: {
      src: "/images/yacht-croatia/croatia-ultra.jpg",
      alt: "Yacht Week Croatia – Ultra Europe Festival at Sea",
    },
    links: {
      sharedCabin: "https://buy.stripe.com/cNi9AM1iT5Ej1qh4Zx2Nq0x",
      privateCabin: "https://buy.stripe.com/eVq7sEe5F5Ejglbdw32Nq0w",
    },
  },
  {
    slug: "greece-disco-2026",
    href: "/trips/2026/greece-disco",
    title: "🎶 Disco Yacht Week – Greece",
    dates: "August 8–15, 2026",
    start_date: "2026-08-08",
    tags: ["Yacht","Festival","International"],
    blurb:
      "Set sail through the Greek Islands with a disco-house soundtrack under the Mediterranean sun. Seven days of music, swimming, and unforgettable island energy.",
    image: {
      src: "/images/yacht-greece/greece-disco.jpg",
      alt: "Yacht Week Greece – Disco & House Party Cruise",
    },
    links: {
      sharedCabin: "https://buy.stripe.com/bJe3co0ePd6L8SJdw32Nq0v",
      saloonBerth: "https://buy.stripe.com/fZu4gs5z9c2Hed3dw32Nq0t",
      privateCabin: "https://buy.stripe.com/cNidR2bXx1o3b0RajR2Nq0u",
    },
  },

];

export const getTrip = (slug: string) => trips.find(t => t.slug === slug);
