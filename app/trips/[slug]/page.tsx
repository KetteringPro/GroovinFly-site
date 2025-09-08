import { getTrip } from "@/lib/trips"; import Responsibilities from "@/components/Responsibilities"; import Link from "next/link";
export default function TripPage({ params }: { params: { slug: string } }){
  const trip = getTrip(params.slug); if(!trip) return <div className="p-6">Trip not found.</div>;
  return (<div className="max-w-5xl mx-auto p-6">
    <p className="text-white/70 text-sm uppercase">{trip.dates}</p>
    <h1 className="text-4xl font-extrabold mt-1">{trip.title}</h1>
    <p className="mt-6 text-lg">{trip.blurb}</p>
    <h2 className="mt-8 text-2xl font-bold">What’s Included</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1"><li>Shared lodging (boutique, central)</li><li>Transportation where stated</li><li>GroovinFly merch kit + Style Lounge access</li></ul>
    <h2 className="mt-6 text-2xl font-bold">What’s Not Included</h2>
    <ul className="list-disc ml-6 mt-2 space-y-1"><li>Flights (unless specified)</li><li>Meals not listed</li><li>Festival tickets when not explicitly included</li></ul>
    <Responsibilities className="mt-8" />
    <Link href="/reserve" className="inline-block mt-8 px-6 py-3 rounded-xl bg-fuchsia-500 font-bold">Reserve Interest</Link>
  </div>); }