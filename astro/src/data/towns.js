/* Town pages. Ported from ui_kits/website/TownPage.jsx. Only towns with a documented local
   project get real local photography; the rest get a generic intro and recent work from
   nearby towns, labelled with where it was actually done. */
export const TOWNS_DATA = [
  { slug: "new-cumberland-pa", town: "New Cumberland", county: "Cumberland County",
    intro: "Alejandro's Landscaping is based in New Cumberland and does landscaping, hardscaping and commercial grounds work across the borough and the neighbouring west shore towns.",
    note: "This is home ground for the crew, so New Cumberland jobs are the shortest drive on the schedule.",
    hero: "dw-proof2.jpg", heroAlt: "Paver parking area and walkway in front of a brick home in New Cumberland, PA" },
  { slug: "mechanicsburg-pa", town: "Mechanicsburg", county: "Cumberland County",
    intro: "Alejandro's Landscaping builds patios, retaining walls, fire features and landscape beds in Mechanicsburg, about seven miles from our base in New Cumberland.",
    note: "Most of our Mechanicsburg work so far has been backyard hardscaping: patios, walls and fire features.",
    hero: "pool-pavers-after.jpg", heroAlt: "Rebuilt paver pool patio at a home in Mechanicsburg, PA" },
  { slug: "camp-hill-pa", town: "Camp Hill", county: "Cumberland County",
    intro: "Alejandro's Landscaping does landscape installation, bed work and hardscaping in Camp Hill, a few minutes from our base in New Cumberland.",
    note: "Our documented Camp Hill work so far is planting and bed work: new beds, stone edging and layered shrubs.",
    hero: "landscape-island-bed-fieldstone.jpg", heroAlt: "Curved island bed with fieldstone edging and layered shrubs at a home in Camp Hill, PA" },
];

const TOWN_COUNTY = {
  "Cumberland County": ["Lemoyne", "Wormleysburg", "Shiremanstown", "Enola", "Summerdale", "Lisburn", "Grantham", "Boiling Springs", "New Kingstown", "Carlisle", "Mount Holly Springs"],
  "Dauphin County": ["Highspire", "Steelton", "Harrisburg", "Paxtang", "Penbrook", "Middletown", "Colonial Park", "Linglestown", "Dauphin", "Hummelstown", "Hershey", "Grantville"],
  "York County": ["Lewisberry", "Goldsboro", "Etters", "Newberrytown", "Dillsburg", "Wellsville", "Rossville", "Emigsville", "Franklintown", "Manchester", "Mount Wolf", "Dover", "York"],
  "Perry County": ["Marysville", "Shermans Dale", "New Bloomfield"],
  "Lancaster County": ["Bainbridge", "Elizabethtown", "Maytown"],
  "Lebanon County": ["Campbelltown", "Palmyra"],
};
const TOWN_RING = {
  "0–8 miles": ["Lemoyne", "Wormleysburg", "Highspire", "Steelton", "Harrisburg", "Shiremanstown", "Lewisberry", "Goldsboro", "Etters", "Enola", "Summerdale", "Marysville"],
  "8–15 miles": ["Paxtang", "Penbrook", "Newberrytown", "Middletown", "Colonial Park", "Lisburn", "Dillsburg", "Grantham", "Linglestown", "Dauphin", "Hummelstown", "Boiling Springs", "Wellsville", "New Kingstown", "Shermans Dale", "Hershey"],
};
const TOWN_HEROES = [
  ["patio-raised-wall-dusk.jpg", "Raised paver patio with lit steps at dusk, built by Alejandro's Landscaping"],
  ["firepit-seatwall-night.jpg", "Seat wall and fire pit lit at night, built by Alejandro's Landscaping"],
  ["patio-pool-pavers.jpg", "Paver pool patio built by Alejandro's Landscaping"],
  ["stone-edge-bed.jpg", "Stone-edged planting bed installed by Alejandro's Landscaping"],
  ["hero-firepit-wall-night.jpg", "Retaining wall and fire pit lit at night, built by Alejandro's Landscaping"],
];

Object.entries(TOWN_COUNTY).forEach(([county, towns]) => towns.forEach((town) => {
  const slug = town.toLowerCase().replace(/ /g, "-") + "-pa";
  if (TOWNS_DATA.some((x) => x.slug === slug)) return;
  const ring = Object.keys(TOWN_RING).find((r) => TOWN_RING[r].includes(town));
  const where = ring === "0–8 miles" ? "within about eight miles of" : ring === "8–15 miles" ? "about eight to fifteen miles from" : "about fifteen to twenty miles from";
  const [hero, heroAlt] = TOWN_HEROES[TOWNS_DATA.length % TOWN_HEROES.length];
  TOWNS_DATA.push({
    slug, town, county, hero, heroAlt, generic: true,
    intro: `Alejandro's Landscaping does landscaping, hardscaping and commercial grounds work in ${town}, ${where} our base in New Cumberland.`,
    note: `We haven't published a completed project in ${town} yet. Here's recent work from nearby towns, labelled with where it was done.`,
  });
}));

export const TOWN_SERVICES = [
  ["Paver patios", "/hardscaping/paver-patios/", "New patios, rebuilds and patios with steps, seat walls or fire features."],
  ["Retaining walls", "/hardscaping/retaining-walls/", "Walls that hold a slope or support a patio or walkway."],
  ["Walkways & steps", "/hardscaping/walkways/", "Front walks and entry steps built on a compacted stone base."],
  ["Paver driveways", "/hardscaping/paver-driveways/", "Paver driveways and parking areas with matching walks."],
  ["Landscape installation", "/landscaping/installation/", "New beds, shrubs, decorative stone and edging."],
  ["Mulch & bed work", "/landscaping/mulch-beds/", "Re-cutting bed edges and refreshing mulch."],
  ["Shrub & hedge trimming", "/landscaping/trimming/", "Shaping shrubs and hedges, and dealing with overgrown ones."],
  ["Commercial landscaping", "/commercial-landscaping/", "Grounds maintenance for offices, practices and managed properties."],
];

export function townProjects(town, PROJECT_STUDIES, PROJECT_CARDS) {
  const s = PROJECT_STUDIES.filter((p) => p.townVerified && p.town.startsWith(town))
    .map((p) => ({ img: p.hero, alt: p.heroAlt, title: p.short, scope: p.result, href: "/projects/" + p.slug + "/", study: true }));
  const c = PROJECT_CARDS.filter((p) => p.town.startsWith(town))
    .map((p) => ({ img: p.img, alt: p.alt, title: p.title, scope: p.scope, href: p.href }));
  return [...s, ...c];
}

export function nearbyProjects(PROJECT_STUDIES) {
  return PROJECT_STUDIES.filter((p) => p.townVerified)
    .map((p) => ({ img: p.hero, alt: p.heroAlt, title: p.short, place: p.town, scope: p.result, href: "/projects/" + p.slug + "/", study: true }));
}
