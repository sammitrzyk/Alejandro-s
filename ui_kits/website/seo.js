/* Site-wide head management. Data source of truth: seo-pages.json (also imported by the
   Astro build). Writes title, description, canonical, robots, Open Graph, Twitter and breadcrumb
   JSON-LD on every route, and removes duplicates. Project and town pages pass their own values.
   Production domain confirmed by owner: alejandroslandscapes.com. */
(function () {
  var DATA = {"site":"https://alejandroslandscapes.com","siteVerified":true,"ogBase":"/og/","brand":"Alejandro's Landscaping","pages":{"home":{"path":"/","title":"Landscaping & Hardscaping in Harrisburg, PA | Alejandro's","description":"Paver patios, driveways, retaining walls, landscape installation and commercial grounds care from New Cumberland across the Harrisburg area. Request an estimate.","crumbs":[["Home","/"]],"ogImage":"og-home.jpg"},"paver-patios":{"path":"/hardscaping/paver-patios/","title":"Paver Patio Installation in Harrisburg, PA | Alejandro's","description":"Paver patio design and installation for homes in Harrisburg and surrounding communities. Explore completed projects and request an estimate.","crumbs":[["Home","/"],["Paver patios","/hardscaping/paver-patios/"]],"ogImage":"og-paver-patios.jpg"},"paver-driveways":{"path":"/hardscaping/paver-driveways/","title":"Paver Driveways in Harrisburg, PA | Alejandro's","description":"Paver driveway design and installation in the Harrisburg area. Explore material options, site preparation and completed work. Request an estimate.","crumbs":[["Home","/"],["Paver driveways","/hardscaping/paver-driveways/"]],"ogImage":"og-paver-driveways.jpg"},"retaining-walls":{"path":"/hardscaping/retaining-walls/","title":"Retaining Walls in Harrisburg, PA | Alejandro's","description":"Retaining wall installation and replacement for slopes, patios and grade changes in the Harrisburg area. See completed walls and request an estimate.","crumbs":[["Home","/"],["Retaining walls","/hardscaping/retaining-walls/"]],"ogImage":"og-home.jpg"},"walkways-steps":{"path":"/hardscaping/walkways/","title":"Paver Walkways & Steps in Harrisburg, PA | Alejandro's","description":"Paver walkway and entry step installation in the Harrisburg area. Explore options for connecting entrances, patios and outdoor spaces.","crumbs":[["Home","/"],["Walkways & steps","/hardscaping/walkways/"]],"ogImage":"og-paver-patios.jpg"},"fire-features-seat-walls":{"path":"/hardscaping/fire-features/","title":"Fire Pits & Seat Walls in Harrisburg, PA | Alejandro's","description":"Built-in fire pits, seat walls and integrated lighting planned with the patio around them, across the west shore and Harrisburg area.","crumbs":[["Home","/"],["Fire features & seat walls","/hardscaping/fire-features/"]],"ogImage":"og-home.jpg"},"grading-drainage":{"path":"/hardscaping/drainage/","title":"Grading & Drainage in Harrisburg, PA | Alejandro's","description":"Grading and drainage work that moves water away from houses, patios and other outdoor spaces in the Harrisburg area. Request an estimate.","crumbs":[["Home","/"],["Grading & drainage","/hardscaping/drainage/"]],"ogImage":"og-home.jpg"},"landscape-installation":{"path":"/landscaping/installation/","title":"Landscape Installation in Harrisburg, PA | Alejandro's","description":"New planting beds, shrubs, edging, decorative stone and bed renovation for homes across the west shore and Harrisburg area. Request an estimate.","crumbs":[["Home","/"],["Landscape installation","/landscaping/installation/"]],"ogImage":"og-home.jpg"},"mulch-bed-work":{"path":"/landscaping/mulch-beds/","title":"Mulch & Bed Work in Harrisburg, PA | Alejandro's","description":"Mulch installation, bed edging and landscape bed refreshes for homes and commercial properties in the Harrisburg area. Request an estimate.","crumbs":[["Home","/"],["Mulch & bed work","/landscaping/mulch-beds/"]],"ogImage":"og-home.jpg"},"sod-installation":{"path":"/landscaping/sod-installation/","title":"Sod Installation in Harrisburg, PA | Alejandro's","description":"Sod installation and lawn preparation for properties in the Harrisburg area. Learn about site preparation, installation and aftercare.","crumbs":[["Home","/"],["Sod installation","/landscaping/sod-installation/"]],"ogImage":"og-home.jpg"},"shrub-hedge-trimming":{"path":"/landscaping/trimming/","title":"Shrub & Hedge Trimming in Harrisburg, PA | Alejandro's","description":"Shrub and hedge trimming for homes and commercial properties in the Harrisburg area, including shaping and clearing overgrown walks and entrances.","crumbs":[["Home","/"],["Shrub & hedge trimming","/landscaping/trimming/"]],"ogImage":"og-home.jpg"},"yard-cleanups":{"path":"/landscaping/yard-cleanups/","title":"Spring & Fall Yard Cleanups in Harrisburg, PA | Alejandro's","description":"Spring and fall yard cleanups, leaf removal and landscape bed cleanup for properties in the Harrisburg area. Request an estimate.","crumbs":[["Home","/"],["Spring & fall cleanups","/landscaping/yard-cleanups/"]],"ogImage":"og-home.jpg"},"landscape-lighting":{"path":"/landscaping/landscape-lighting/","title":"Landscape Lighting in Harrisburg, PA | Alejandro's","description":"Landscape and hardscape lighting for steps, walls, patios and paths, installed across the west shore and Harrisburg area. Request an estimate.","crumbs":[["Home","/"],["Landscape lighting","/landscaping/landscape-lighting/"]],"ogImage":"og-paver-patios.jpg"},"christmas-light-installation":{"path":"/landscaping/christmas-light-installation/","title":"Christmas Light Installation in Harrisburg, PA | Alejandro's","description":"Christmas light installation for properties in the Harrisburg area. Contact Alejandro's Landscaping to discuss your display and seasonal availability.","crumbs":[["Home","/"],["Christmas light installation","/landscaping/christmas-light-installation/"]],"ogImage":"og-home.jpg"},"commercial-landscaping":{"path":"/commercial-landscaping/","title":"Commercial Landscaping Harrisburg PA | Alejandro's","description":"Commercial landscaping and grounds maintenance for businesses, offices and managed properties in Harrisburg, New Cumberland, Camp Hill, Mechanicsburg and surrounding Central PA communities.","crumbs":[["Home","/"],["Commercial landscaping","/commercial-landscaping/"]],"ogImage":"og-commercial.jpg"},"snow-removal":{"path":"/commercial/snow-removal/","title":"Commercial Snow Removal Harrisburg PA | Alejandro's","description":"Commercial snow removal and ice management for offices, businesses and managed properties in Harrisburg and surrounding Central PA communities.","crumbs":[["Home","/"],["Commercial snow removal","/commercial/snow-removal/"]],"ogImage":"og-snow.jpg"},"service-area":{"path":"/service-areas/","title":"Service Areas Around New Cumberland & Harrisburg | Alejandro's","description":"Alejandro's Landscaping works within about 20 miles of New Cumberland, including Harrisburg, Camp Hill, Mechanicsburg and Hershey. Find your town.","crumbs":[["Home","/"],["Service areas","/service-areas/"]],"ogImage":"og-home.jpg"},"projects":{"path":"/projects/","title":"Landscaping & Hardscaping Projects in Central PA | Alejandro's Landscaping","description":"Completed paver driveways, patios, walkways, retaining walls, landscaping and commercial grounds by Alejandro's Landscaping in New Cumberland and across Central Pennsylvania.","crumbs":[["Home","/"],["Projects","/projects/"]],"ogImage":"og-paver-patios.jpg"},"resources":{"path":"/resources/","title":"Landscaping & Hardscaping Resources | Alejandro's","description":"Answers to common landscaping and hardscaping questions, completed projects and service-area information from Alejandro's Landscaping in Central Pennsylvania.","crumbs":[["Home","/"],["Resources","/resources/"]],"ogImage":"og-home.jpg"},"faqs":{"path":"/resources/faqs/","title":"Landscaping & Hardscaping FAQs | Alejandro's Landscaping","description":"Answers to common questions about estimates, patios, walls, drainage and landscaping from Alejandro's Landscaping in New Cumberland, PA.","crumbs":[["Home","/"],["Resources","/resources/"],["FAQs","/resources/faqs/"]],"ogImage":"og-home.jpg"},"about":{"path":"/about/","title":"About Alejandro's Landscaping | New Cumberland, PA","description":"Alejandro's Landscaping is a New Cumberland-based landscaping and hardscaping company serving properties across Central Pennsylvania. Meet the people and see the work.","crumbs":[["Home","/"],["About","/about/"]],"ogImage":"og-home.jpg"}}};
  var SITE = DATA.site, BRAND = DATA.brand;
  function one(sel, make) {
    var all = document.head.querySelectorAll(sel);
    for (var i = 1; i < all.length; i++) all[i].remove();
    var el = all[0];
    if (!el) { el = make(); document.head.appendChild(el); }
    return el;
  }
  function meta(attr, key, val) {
    one("meta[" + attr + '="' + key + '"]', function () { var m = document.createElement("meta"); m.setAttribute(attr, key); return m; }).setAttribute("content", val);
  }
  function drop(sel) { var a = document.head.querySelectorAll(sel); for (var i = 0; i < a.length; i++) a[i].remove(); }
  function setHead(title, desc, path, crumbs, opts) {
    opts = opts || {};
    var url = SITE + (path || "/");
    document.title = title;
    one("title", function () { return document.createElement("title"); }).textContent = title;
    meta("name", "description", desc);
    one('link[rel="canonical"]', function () { var l = document.createElement("link"); l.rel = "canonical"; return l; }).href = url;
    if (opts.noindex) meta("name", "robots", "noindex, follow"); else drop('meta[name="robots"]');
    meta("property", "og:type", "website");
    meta("property", "og:site_name", BRAND);
    meta("property", "og:title", title);
    meta("property", "og:description", desc);
    meta("property", "og:url", url);
    var img = SITE + DATA.ogBase + (opts.ogImage || "og-home.jpg");
    meta("property", "og:image", img);
    meta("property", "og:image:width", "1200");
    meta("property", "og:image:height", "630");
    meta("name", "twitter:card", "summary_large_image");
    meta("name", "twitter:title", title);
    meta("name", "twitter:description", desc);
    meta("name", "twitter:image", img);
    drop('script[data-ld="crumbs"]');
    if (crumbs && crumbs.length > 1) {
      var s = document.createElement("script");
      s.type = "application/ld+json"; s.dataset.ld = "crumbs";
      s.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: crumbs.map(function (c, i) { return { "@type": "ListItem", position: i + 1, name: c[0], item: SITE + c[1] }; }) });
      document.head.appendChild(s);
    }
  }
  function applySeo(key) {
    var p = DATA.pages[key] || DATA.pages.home;
    setHead(p.title, p.description, p.path, p.crumbs, { ogImage: p.ogImage, noindex: p.noindex });
  }
  window.SEO_DATA = DATA;
  window.__seoSetHead = setHead;
  window.setHead = setHead;
  window.applySeo = applySeo;
  applySeo("home");
})();
