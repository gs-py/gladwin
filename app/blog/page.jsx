export const metadata = {
  title: "Case Studies & Blog | Gladwin Santhosh",
  description:
    "Engineering case studies from production work: scaling organic search to 15M impressions, shipping across 5 codebases, and building booking flows end-to-end.",
};

const posts = [
  {
    slug: "scaling-organic-search",
    tag: "Case Study · SEO Engineering",
    title: "Scaling Organic Search from Zero to 15M Impressions in 3 Months",
    date: "July 2026",
    metrics: [
      { value: "15M", label: "Impressions" },
      { value: "79.7K", label: "Clicks" },
      { value: "#8", label: "Avg. Position" },
      { value: "3 mo", label: "Timeframe" },
    ],
    intro:
      "When I joined, our consumer platform was a client-rendered React app — nearly invisible to search engines. Three months after shipping a prerendering pipeline, sitemap architecture, and a 301 redirect system, Google Search Console showed 15M impressions and 79.7K clicks, with meaningful traffic arriving from Google Discover. This is the engineering behind that curve.",
    sections: [
      {
        heading: "The problem: a rich product Google couldn't read",
        body: "Thousands of listing and profile pages existed only after JavaScript executed. Crawlers saw empty shells, indexing was inconsistent, and organic traffic was effectively zero. The product had the content; the architecture hid it.",
      },
      {
        heading: "Prerendering without a rewrite",
        body: "A full SSR migration would have taken months we didn't have. Instead I added a prerendering layer that serves crawlers fully rendered HTML — complete with body content, titles, and meta keywords — while real users keep the same SPA experience. Shipping days instead of months, with a clear upgrade path to SSR later.",
      },
      {
        heading: "Sitemaps and the 301 system",
        body: "Discovery needs a map. I built sitemap generation covering every listing, profile, and city page, and a 301 redirect system so legacy URLs and renamed localities pass their equity to canonical pages instead of 404ing. When the platform expanded to new cities, redirects and sitemaps updated with it.",
      },
      {
        heading: "The result",
        body: "Daily clicks went from single digits in April to over 2,000 by July, at an average position of 8. Pages began surfacing in Google Discover — traffic that requires no query at all, only content Google can fully read and trust. Analytics events on every page close the loop between shipped code and measured outcome.",
      },
      {
        heading: "Lessons",
        body: "Ship the layer, not the rewrite: the prerendering pipeline delivered 90% of SSR's value at 10% of its cost. Treat URLs as an asset with equity — every migration needs a redirect plan before it needs a deploy. And instrument first: without Search Console and analytics wired in from day one, this graph would just be a feeling.",
      },
    ],
  },
  {
    slug: "shipping-across-five-codebases",
    tag: "Case Study · Full Stack",
    title: "Shipping Across 5 Production Codebases at an EdTech Startup",
    date: "July 2026",
    metrics: [
      { value: "5", label: "Production Repos" },
      { value: "4", label: "Platforms" },
      { value: "2", label: "Languages" },
    ],
    intro:
      "At LyfSkills I ship features across five production repositories: a React admin dashboard, a consumer-facing web app, a parent portal, a React Native partner app, and a FastAPI backend. This is what owning a full product surface actually looks like.",
    sections: [
      {
        heading: "The surface area",
        body: "Every feature at a small startup cuts through the whole stack. A single booking feature touches the consumer app (the booking UI), the backend (availability, OTP verification, invoicing), the partner app (the coach sees the new session), and the parent portal (the parent sees the enrollment). Owning a feature means owning it in every repo it touches — there is no team to hand it off to.",
      },
      {
        heading: "What I shipped",
        body: "End-to-end trial booking with OTP verification. Plan renewal and invoicing flows with payment settlement UI. Full mobile-first UI revamps of the admin dashboard and parent portal. Google OAuth sign-in. Multi-currency and timezone-aware experiences for international users. The SEO infrastructure covered in the case study above.",
      },
      {
        heading: "What five repos teach you",
        body: "Context switching is the real cost. The fix was consistency: the same API interceptor pattern in every frontend, the same state conventions, the same component structure. When every repo follows the same shape, switching costs drop from hours to minutes. The second lesson: frontend validation is a courtesy, backend validation is the contract. Every flow I built validates twice.",
      },
    ],
  },
  {
    slug: "booking-flow-end-to-end",
    tag: "Case Study · Product Engineering",
    title: "Building a Trial Booking Flow End-to-End",
    date: "July 2026",
    metrics: [
      { value: "OTP", label: "Verified Booking" },
      { value: "Intl", label: "Currency & Timezone" },
      { value: "E2E", label: "UI to Invoice" },
    ],
    intro:
      "A booking flow looks like a form and a button. Building one that survives real users — international phone numbers, retried OTPs, expired plans, currency differences — is where the actual engineering lives.",
    sections: [
      {
        heading: "The happy path is 10% of the work",
        body: "The first version took days: pick a slot, enter a phone number, verify OTP, confirm. Everything after that took months. International users needed country codes and currency handling. Users abandoned mid-OTP and came back. Plans expired between selection and payment. Each edge case became a guard, a redirect, or a clearer error message.",
      },
      {
        heading: "OTP without frustration",
        body: "OTP verification fails in boring ways: wrong number typed, SMS delayed, user switches apps and loses state. The flow keeps form state through the verification round-trip, prefills everything it already knows, and never makes the user re-enter data because of our failure rather than theirs.",
      },
      {
        heading: "Lessons",
        body: "Design the failure states before the success state — the success state designs itself. Keep money-adjacent logic on the backend only; the frontend renders what the API decides, it never computes a price. And instrument everything: the difference between guessing and knowing why users drop off is one analytics event.",
      },
    ],
  },
];

const Blog = () => {
  return (
    <section className="min-h-[80vh] py-12 xl:py-8">
      <div className="container mx-auto flex flex-col gap-12 max-w-[860px]">
        <div className="text-center xl:text-left">
          <h1 className="text-4xl font-bold">Case Studies</h1>
          <p className="text-white/60 mt-3">
            Engineering write-ups from real production work — problems, decisions, and measured outcomes.
          </p>
        </div>
        {posts.map((post) => (
          <article
            key={post.slug}
            id={post.slug}
            className="bg-[#232329] rounded-xl p-8 xl:p-10 flex flex-col gap-6"
          >
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-accent-defaults text-sm uppercase tracking-wider">{post.tag}</span>
              <span className="text-white/40 text-sm">{post.date}</span>
            </div>
            <h3 className="text-2xl xl:text-3xl font-bold leading-snug">{post.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {post.metrics.map((m, i) => (
                <div key={i} className="bg-[#1c1c22] rounded-lg py-4 px-3 text-center">
                  <div className="text-2xl font-extrabold text-accent-defaults">{m.value}</div>
                  <div className="text-white/50 text-xs mt-1 uppercase tracking-wide">{m.label}</div>
                </div>
              ))}
            </div>
            <p className="text-white/70 leading-relaxed">{post.intro}</p>
            {post.sections.map((section, i) => (
              <div key={i} className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold text-accent-defaults">{section.heading}</h4>
                <p className="text-white/60 leading-relaxed">{section.body}</p>
              </div>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
