/* LocalBusiness JSON-LD using only verified facts from discovery/business-fact-sheet.md:
   name, phone, email, and the New Cumberland, PA service area. No address, hours or ratings —
   those remain NEEDED on the fact sheet and must not be fabricated. */
export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Alejandro's Landscaping",
    telephone: "+1-717-736-6538",
    email: "contact@alejandroslandscapes.com",
    url: "https://alejandroslandscapes.com",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: { "@type": "GeoCoordinates", name: "New Cumberland, PA" },
      description: "Within approximately 20 miles of New Cumberland, PA, including Cumberland, Dauphin, York, Perry, Lancaster and Lebanon counties.",
    },
  };
}
