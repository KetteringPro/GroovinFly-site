export type Trip = { slug:string; title:string; dates:string; tags:string[]; blurb:string; };
export const trips: Trip[] = [
  { slug:"ultra-miami-2026", title:"Ultra • Miami", dates:"Mar 27–30, 2026", tags:["Festival","Booking Soon"], blurb:"Festival glam, pool parties, crew dinner." },
  { slug:"edc-las-vegas-2026", title:"EDC • Las Vegas", dates:"May 15–19, 2026", tags:["Festival","Small Group"], blurb:"Festival + clubbing • resort shuttle." },
  { slug:"st-thomas-2026", title:"St. Thomas • Full Moon", dates:"Jun 26–30, 2026", tags:["Island"], blurb:"Beach, sunset cruise, party night." },
  { slug:"nashville-2026", title:"Nashville Weekend", dates:"Jul/Aug 2026", tags:["City Glam"], blurb:"Honky‑tonks, rooftop cocktails, country‑glam." },
  { slug:"hampton-beach-2026", title:"Hampton Beach Week", dates:"Mid‑Jul / Early Aug 2026", tags:["Beach"], blurb:"Boardwalk, live music, fireworks on the sand." },
  { slug:"costa-rica-2026", title:"Costa Rica Adventure", dates:"Sept/Oct 2026", tags:["International"], blurb:"Jungle + beaches • 7 nights • crew dinner." },
  { slug:"salem-2026", title:"Salem • Halloween", dates:"Oct 2026", tags:["Seasonal"], blurb:"Witch tours, costumes, spooky‑glam nights." },
  { slug:"tomorrowland-thailand-2026", title:"Tomorrowland • Thailand", dates:"Nov 2026 (TBD)", tags:["Festival","International"], blurb:"Global festival • tropical backdrop." },
  { slug:"vegas-week-2026", title:"Vegas Timeshare Week", dates:"Week after Thanksgiving", tags:["City Glam"], blurb:"Chill + shows + Sphere night." },
  { slug:"nyc-holiday-2026", title:"NYC Holiday Weekend", dates:"Dec 13th Weekend", tags:["City Glam"], blurb:"Rockettes, rooftops, 5th Ave lights." }
];
export const getTrip = (slug:string)=>trips.find(t=>t.slug===slug);
