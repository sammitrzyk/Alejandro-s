/* Commercial service records. EVERY page in this file is for a service that has never
   been confirmed as offered — each carries a page-level notConfirmed banner. */
const UNCONFIRMED_COMM = "[VERIFY COMMERCIAL WORK IS REAL REVENUE] — this branch was inferred from photographs of a condominium property, never confirmed. Confirm before it publishes.";

window.SERVICES_OTHER = {
  "commercial-landscaping": {
    navGroup: "Commercial", shortName: "commercial landscaping",
    eyebrow: "Commercial · Landscaping",
    title: "Improvements, not just upkeep.",
    lede: "Landscape installation, renovation and hardscaping for commercial and managed properties across the Harrisburg area.",
    notConfirmed: UNCONFIRMED_COMM,
    hero: "commercial-property-beds.jpg",
    heroAlt: "Planting beds and walkway at a commercial building entrance",
    heroCredit: "Entry beds and walks",
    convertTitle: "Property looking tired?",
    convertBody: "Entrances and signage beds are what tenants and visitors actually see. Send photos and we will scope what a renovation would take.",
    convertCta: "Request a proposal",
    detailEyebrow: "Scope",
    detailTitle: "What commercial project work covers.",
    detail: [
      ["Renovation", "[VERIFY WHETHER PHASED RENOVATION OF EXISTING LANDSCAPING IS OFFERED.]"],
      ["Entrances & signage beds", "[VERIFY CAPABILITY.] Highest-visibility area on most commercial properties."],
      ["Hardscape", "[VERIFY WHETHER COMMERCIAL WALKWAYS, WALLS AND PADS ARE UNDERTAKEN.]"],
      ["Grading & drainage", "[VERIFY COMMERCIAL DRAINAGE CAPABILITY.]"],
      ["Phasing", "[VERIFY WHETHER WORK CAN BE PHASED across budget years.]"],
      ["Working around operations", "[VERIFY SCHEDULING FLEXIBILITY — after hours, weekends, around tenant access.]"]
    ],
    detailNote: "[VERIFY ALL COMMERCIAL PROJECT CAPABILITY WITH DORIAN.]",
    faq: [
      { question: "What commercial landscaping projects do you handle?", answer: "[VERIFY PROJECT TYPES AND SCALE ACTUALLY UNDERTAKEN.] Be specific and honest here — a property manager will ask for a comparable reference, and a list that overstates capability costs more than a short one.", linkLabel: null, href: null },
      { question: "Can you renovate existing landscaping instead of replacing it?", answer: "[VERIFY RENOVATION CAPABILITY AND PHASING.] Most commercial properties do not need a full replacement — they need the entrances and signage beds brought back, which is a fraction of the cost and most of the visible improvement.", linkLabel: null, href: null },
      { question: "Do you provide installation and ongoing maintenance?", answer: "[VERIFY WHETHER BOTH ARE OFFERED UNDER ONE RELATIONSHIP.] The practical benefit is that whoever installed the plantings is the one keeping them alive, which removes the argument about why something died.", linkLabel: "Grounds maintenance", href: "/commercial/maintenance" },
      { question: "Can you handle grading, drainage and hardscaping too?", answer: "[VERIFY COMMERCIAL HARDSCAPE AND DRAINAGE CAPABILITY.] On commercial sites drainage is usually the underlying problem — standing water in a lot or against a walkway is a liability question as much as an appearance one.", linkLabel: "Grading & drainage", href: "/grading-drainage" },
      { question: "How is a commercial project estimated?", answer: "[VERIFY THE COMMERCIAL ESTIMATE PROCESS — site walk, written scope, whether drawings are provided, and typical turnaround.] Property managers usually need something they can put in front of a board, so what the proposal contains matters.", linkLabel: null, href: null },
      { question: "Can work be phased around budget or operations?", answer: "[VERIFY PHASING AND SCHEDULING FLEXIBILITY.] Most associations approve capital work a year at a time, so being able to split a project across two budget years is often what makes it happen at all.", linkLabel: null, href: null }
    ],
    closeTitle: "Send photos of the property.",
    closeBody: "Entrances, beds and anything that is failing. We will scope it."
  }
};
