import TripTemplate from "@/app/components/TripTemplate";

export default function TemplateDemoPage() {
  return (
    <TripTemplate
      title="Sample Trip Template – Demo"
      subtitle="Example layout for new trip builds"
      heroImage="/images/demo/demo-hero.jpg"
      description={
        <>
          <p>
            This is a sample trip page using the new standardized <strong>TripTemplate</strong> 
            component. Use it as a reference when creating new trip pages so you never miss 
            required sections like Travel Tips, Highlights, and Booking options.
          </p>
        </>
      }
      highlights={[
        "7 Days / 6 Nights",
        "Luxury accommodations",
        "Private experiences included",
        "Professional guide and crew",
        "Curated activities and nightlife",
      ]}
      stripeLinks={{
        shared: "#",
        private: "#",
      }}
      travelTips={{
        arrival: {
          airport: "Sample Airport (AAA)",
          arrivalDate: "Example: Friday before trip start",
          details: [
            "Arrive early for check-in and welcome event.",
            "Private transfers available on request.",
          ],
        },
        departure: {
          marina: "Sample Marina",
          departureDate: "Example: Saturday following trip end",
          details: [
            "Check-out by 10 AM.",
            "Return shuttles available throughout the day.",
          ],
        },
        packing: [
          "Casual daytime wear",
          "Dressy outfit for group dinner",
          "Comfortable shoes",
          "Reusable water bottle",
        ],
        currency: "USD ($)",
        proTip:
          "Use this demo to copy structure and keep all new trip pages consistent!",
      }}
    />
  );
}