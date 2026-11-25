const raw = import.meta.glob("./designs/*.jsx", { query: "?raw", import: "default", eager: true });

export const categories = [
  "Landing Pages",
  "SaaS Websites",
  "E-commerce Interfaces",
  "Dashboard Interfaces",
  "Authentication Pages",
  "Portfolio Websites",
  "Agency Websites",
  "Blog & Content Websites",
  "Pricing & Subscription Pages",
  "UI Components & Sections",
];

const palettes = [
  ["#f5f2eb", "#17251f", "#547966", "#e7e1d5"],
  ["#f3f5f8", "#17243a", "#526fa9", "#e7ebf1"],
  ["#f7f2ef", "#30211c", "#ad6549", "#eee5df"],
  ["#f3f3ef", "#1e2524", "#657b6d", "#e6e8df"],
  ["#f5f1e9", "#27251f", "#9d8053", "#e9e1d4"],
  ["#f4f2f7", "#252031", "#766292", "#e9e4f0"],
  ["#f4f5f2", "#1e2926", "#588276", "#e5e9e3"],
  ["#f7f3ed", "#302923", "#ba744d", "#eee4d8"],
  ["#f0f3f2", "#192a2d", "#3c7880", "#e1e9e8"],
  ["#f7f2f2", "#2c2025", "#a85768", "#eee3e5"],
];

const rows = [
  ["Landing Pages", "LandingTemplate", [
    ["Nova — Modern Startup Landing", "nova-modern-startup-landing", "A clearer way to build what matters.", "An optimistic launch page for ambitious teams, with crisp storytelling and a strong first action.", ["A sharp product promise", "Proof from early adopters", "A focused conversion path"]],
    ["Elevate — SaaS Product Landing", "elevate-saas-product-landing", "Your next chapter starts here.", "A polished, confident home for a product ready to move teams forward.", ["Product-led hero", "Outcome-focused features", "Customer proof"]],
    ["Horizon — Creative Business Landing", "horizon-creative-business-landing", "Make room for a brighter idea.", "A spacious, image-free creative business page that puts its message and craft first.", ["Editorial hero", "Services overview", "Thoughtful inquiry CTA"]],
    ["Lumina — Minimal Landing Page", "lumina-minimal-landing-page", "Less noise. More momentum.", "A deliberately minimal landing page with generous whitespace and a single clear next step.", ["Quiet typography", "Focused call to action", "Concise feature list"]],
    ["Orbit — Tech Product Landing", "orbit-tech-product-landing", "Ideas in motion, all in one orbit.", "A technical product launch page with a compact product preview and clear capability story.", ["Product console preview", "Technical feature cards", "Early access form"]],
    ["Vertex — Corporate Landing Page", "vertex-corporate-landing-page", "Built for the work ahead.", "A composed corporate landing page for teams that value reliability, expertise and measurable results.", ["Trust-led introduction", "Service highlights", "Business inquiry action"]],
    ["Bloom — Lifestyle Landing Page", "bloom-lifestyle-landing-page", "A little more space to feel good.", "A warm lifestyle brand page with human copy, soft surfaces and a simple newsletter signup.", ["Warm brand story", "Curated benefits", "Newsletter signup"]],
    ["Flux — Gradient-Free Creative Landing", "flux-gradient-free-creative-landing", "Good ideas deserve a clear stage.", "A graphic, gradient-free creative landing page using confident blocks, type and useful details.", ["Bold typographic composition", "Project highlights", "Direct contact CTA"]],
    ["Summit — Professional Service Landing", "summit-professional-service-landing", "Expert guidance. Practical progress.", "A reassuring service-business page designed to turn expertise into clear next steps.", ["Expertise-led hero", "Service breakdown", "Consultation request"]],
    ["Pulse — App Launch Landing Page", "pulse-app-launch-landing-page", "A better rhythm for every day.", "A mobile-app launch page with a device-style feature preview, benefits and a working signup action.", ["App preview panel", "Benefit-led storytelling", "Launch list signup"]],
  ]],
  ["SaaS Websites", "SaasTemplate", [
    ["FlowDesk — Project Management SaaS", "flowdesk-project-management-saas", "Projects, finally in sync.", "A calm project workspace for planning, ownership and steady team progress.", ["Flexible project boards", "Clear ownership", "Weekly progress view"]],
    ["CloudSync — Cloud Storage Platform", "cloudsync-cloud-storage-platform", "Your files, wherever work happens.", "A cloud storage platform homepage focused on safe sharing and effortless access.", ["Shared team spaces", "Permission controls", "Fast file discovery"]],
    ["TaskPilot — Productivity SaaS", "taskpilot-productivity-saas", "Make your best work the easy work.", "A productivity product site that turns scattered tasks into a practical daily plan.", ["Personal work queue", "Smart reminders", "Focus insights"]],
    ["Metricly — Analytics SaaS Website", "metricly-analytics-saas-website", "Know what is moving the needle.", "An analytics SaaS homepage for teams who need clear answers without reporting overhead.", ["Live performance overview", "Flexible reports", "Team-ready sharing"]],
    ["Invoxa — Billing & Invoice Platform", "invoxa-billing-invoice-platform", "Billing that keeps business moving.", "A modern invoicing product page for creating, tracking and collecting payments.", ["Branded invoices", "Payment tracking", "Recurring billing"]],
    ["MeetSpace — Collaboration SaaS", "meetspace-collaboration-saas", "A shared place for better work.", "A collaboration suite homepage centered on thoughtful communication and team context.", ["Shared team rooms", "Meeting notes", "Async updates"]],
    ["AutomateX — Workflow Automation Platform", "automatex-workflow-automation-platform", "Let good workflows run themselves.", "A workflow automation platform that helps operations teams connect everyday tools.", ["Visual workflow builder", "Connected apps", "Run history"]],
    ["DataNest — Data Management SaaS", "datanest-data-management-saas", "Make trusted data easier to find.", "A practical data management platform for organizing, documenting and sharing knowledge.", ["Centralized data catalog", "Ownership and lineage", "Governed sharing"]],
    ["PromptLab — AI Tools Platform", "promptlab-ai-tools-platform", "A better workbench for ideas.", "An AI tools workspace for organizing prompts, testing outputs and sharing useful patterns.", ["Prompt collections", "Version comparison", "Team workspaces"]],
    ["SecureStack — Cybersecurity SaaS", "securestack-cybersecurity-saas", "Security posture, made understandable.", "A security SaaS product site that makes risk, coverage and remediation easier to act on.", ["Asset visibility", "Risk prioritization", "Remediation workflows"]],
  ]],
  ["E-commerce Interfaces", "CommerceTemplate", [
    ["LuxeCart — Premium Fashion Store", "luxecart-premium-fashion-store", "Considered pieces. Lasting presence.", "A refined fashion storefront with an edited collection, tactile neutrals and a compact cart.", ["Seasonal collection", "Size selection", "Saved favorites"], ["The Form Coat", "Studio Trouser", "Everyday Knit", "Soft Leather Tote"]],
    ["TechMart — Electronics Store", "techmart-electronics-store", "The right tech, without the noise.", "A useful electronics shop that makes specifications, comparisons and trusted picks easy.", ["Curated electronics", "Quick specifications", "Compare products"], ["Studio Headphones", "Compact Speaker", "Travel Keyboard", "Focus Webcam"]],
    ["UrbanWear — Streetwear Store", "urbanwear-streetwear-store", "Uniform for the unexpected.", "A bold streetwear collection with drop labels, contrast blocks and a direct shopping flow.", ["New drop collection", "Fit and color options", "Limited-run edits"], ["Oversized Utility Tee", "Transit Cargo Pant", "Canvas Runner", "Core Zip Hoodie"]],
    ["PureSkin — Beauty & Skincare Store", "pureskin-beauty-skincare-store", "A softer routine, backed by care.", "A clean skincare storefront that foregrounds ingredients, routines and everyday essentials.", ["Routine finder", "Ingredient details", "Skin-friendly essentials"], ["Daily Cloud Cleanser", "Calm Barrier Serum", "Sun Veil SPF 40", "Night Renewal Cream"]],
    ["HomeCraft — Furniture E-commerce", "homecraft-furniture-ecommerce", "Make home feel more like you.", "A considered furniture shop with room-led categories and enduring material choices.", ["Room collections", "Material details", "Delivery information"], ["Arc Lounge Chair", "Oakline Side Table", "Sunday Floor Lamp", "Modular Shelf"]],
    ["Zarqa — Jewelry Store", "zarqa-jewelry-store", "Small details. Kept for years.", "A jewelry storefront built around thoughtful materials, considered gifting and lasting pieces.", ["Fine-jewelry edits", "Material and care notes", "Gift-ready packaging"], ["Dawn Signet Ring", "Stillwater Chain", "Orbit Stud Pair", "Morrow Cuff"]],
    ["FreshBasket — Grocery Store", "freshbasket-grocery-store", "Good food, closer to home.", "A friendly market interface for fresh produce, weekly staples and easy basket building.", ["Fresh picks", "Weekly essentials", "Quick add to basket"], ["Market Greens Box", "Stoneground Sourdough", "Orchard Citrus Bag", "Pantry Starter Set"]],
    ["SoleStreet — Footwear Store", "solestreet-footwear-store", "Find your everyday stride.", "A footwear shop organized around versatile silhouettes, comfort and straightforward fit details.", ["Fit guidance", "Everyday collection", "Comfort details"], ["Daybreak Runner", "Field Canvas Low", "Studio Leather Court", "Weekend Trail Shoe"]],
    ["GadgetHub — Gadgets & Accessories", "gadgethub-gadgets-accessories", "Small upgrades. Smoother days.", "A curated gadget store for practical desk, travel and everyday carry accessories.", ["Desk and travel edits", "Compatibility details", "Accessory bundles"], ["Magnetic Desk Stand", "Pocket Power Bank", "Cable Kit No. 2", "Quiet Keys Mini"]],
    ["Artisan — Handmade Products Store", "artisan-handmade-products-store", "Made slowly, meant to stay.", "A maker-led storefront celebrating handmade objects, small batches and the people behind them.", ["Maker profiles", "Small-batch releases", "Care instructions"], ["Speckle Stoneware Cup", "Woven Market Basket", "Hand-poured Cedar Candle", "Linen Table Runner"]],
  ]],
  ["Dashboard Interfaces", "DashboardTemplate", [
    ["AdminCore — Admin Dashboard", "admincore-admin-dashboard", "Workspace overview", "A practical admin home for user activity, system health and common workspace actions.", ["User activity", "Workspace health", "Recent administration"]],
    ["FinTrack — Financial Analytics Dashboard", "fintrack-financial-analytics-dashboard", "Financial overview", "A financial analytics workspace for tracking cash flow, budgets and monthly movement.", ["Cash flow trends", "Budget performance", "Account activity"]],
    ["SalesFlow — Sales Management Dashboard", "salesflow-sales-management-dashboard", "Sales overview", "A pipeline dashboard for seeing deal movement, team performance and upcoming follow-ups.", ["Pipeline health", "Team attainment", "Next actions"]],
    ["HealthPulse — Healthcare Dashboard", "healthpulse-healthcare-dashboard", "Care operations", "A healthcare operations dashboard for appointment demand, care access and daily capacity.", ["Appointment volume", "Care access", "Capacity watch"]],
    ["EduManage — Education Management Dashboard", "edumanage-education-management-dashboard", "Learning overview", "A clear education dashboard for attendance, course progress and learner engagement.", ["Attendance trends", "Course progress", "Learner engagement"]],
    ["StockPilot — Inventory Dashboard", "stockpilot-inventory-dashboard", "Inventory overview", "An inventory control center for stock levels, incoming orders and items needing attention.", ["Stock coverage", "Incoming shipments", "Reorder watchlist"]],
    ["ProjectBoard — Project Management Dashboard", "projectboard-project-management-dashboard", "Portfolio overview", "A project portfolio dashboard for delivery pace, ownership and cross-team dependencies.", ["Delivery status", "Team capacity", "Dependency watch"]],
    ["CloudMonitor — Infrastructure Monitoring Dashboard", "cloudmonitor-infrastructure-monitoring-dashboard", "Infrastructure health", "An infrastructure overview for service uptime, resource usage and recent incidents.", ["Service availability", "Resource utilization", "Incident timeline"]],
    ["CyberWatch — Security Monitoring Dashboard", "cyberwatch-security-monitoring-dashboard", "Security posture", "A security monitoring view for prioritized alerts, control coverage and response status.", ["Priority alerts", "Control coverage", "Response progress"]],
    ["InsightPro — Business Intelligence Dashboard", "insightpro-business-intelligence-dashboard", "Business performance", "A business intelligence workspace for key metrics, trend lines and team-ready insights.", ["Executive metrics", "Period comparisons", "Saved insights"]],
  ]],
  ["Authentication Pages", "AuthTemplate", [
    ["AuthFlow — Modern Login & Signup", "authflow-modern-login-signup", "Welcome back to better work.", "A flexible sign-in experience with a clean account flow and clear inline feedback.", ["Email and password sign-in", "Remember this device", "Account creation link"]],
    ["MinimalAuth — Minimal Authentication", "minimal-auth-minimal-authentication", "Sign in, simply.", "A quiet, single-purpose authentication screen that keeps focus on getting into the app.", ["Minimal sign-in form", "Accessible input labels", "Password recovery"]],
    ["SecureGate — Security-Focused Login", "securegate-security-focused-login", "Your account, protected.", "A security-forward login experience with clear device assurance and recovery guidance.", ["Trusted-device option", "Security guidance", "Account recovery"]],
    ["SplitLogin — Split Screen Authentication", "splitlogin-split-screen-authentication", "Good to have you back.", "A split-screen sign-in design pairing a focused form with an editorial welcome panel.", ["Split-screen layout", "Remember me", "Password visibility toggle"]],
    ["GlassAuth — Glass-Style Authentication", "glassauth-glass-style-authentication", "A clear path back in.", "A translucent layered sign-in card with readable controls and a straightforward account flow.", ["Layered sign-in card", "Show and hide password", "Inline confirmation"]],
    ["OTPVerify — OTP Verification Interface", "otpverify-otp-verification-interface", "One more step to verify.", "A focused verification screen for one-time codes, resend timing and recovery options.", ["Six-digit code entry", "Resend code action", "Verification feedback"]],
    ["Recoverly — Password Recovery Interface", "recoverly-password-recovery-interface", "Let's get you back in.", "A reassuring recovery flow that validates an email address and confirms next steps.", ["Email validation", "Clear recovery instructions", "Success state"]],
    ["SocialPass — Social Login Interface", "socialpass-social-login-interface", "Choose how to continue.", "A social sign-in layout with familiar provider actions and an accessible email fallback.", ["Provider sign-in actions", "Email fallback", "Terms and privacy links"]],
    ["EnterpriseAuth — Enterprise Authentication", "enterpriseauth-enterprise-authentication", "Sign in to your workspace.", "An enterprise login interface with workspace identification and organization-ready messaging.", ["Workspace identifier", "Organization email", "Secure sign-in guidance"]],
    ["MultiStepAuth — Multi-Step Registration", "multistepauth-multi-step-registration", "A better workspace starts here.", "A guided registration flow that collects account details before confirming a new workspace.", ["Step-by-step progress", "Field validation", "Completion state"]],
  ]],
  ["Portfolio Websites", "PortfolioTemplate", [
    ["DevFolio — Developer Portfolio", "devfolio-developer-portfolio", "I build useful things for the web.", "A confident developer portfolio with selected work, a concise story and a direct way to get in touch.", ["Selected engineering work", "A clear skills snapshot", "Contact and availability"]],
    ["PixelCraft — UI/UX Designer Portfolio", "pixelcraft-ui-ux-designer-portfolio", "Digital products, made more human.", "A visual product-design portfolio centered on thoughtful case studies and practical outcomes.", ["Case-study storytelling", "Research and process", "Outcome highlights"]],
    ["MonoFrame — Minimal Portfolio", "monoframe-minimal-portfolio", "Work, without the noise.", "A restrained portfolio layout using typography, whitespace and a carefully edited project list.", ["Minimal project index", "Compact biography", "Quiet contact details"]],
    ["CreativeEdge — Creative Professional Portfolio", "creativeedge-creative-professional-portfolio", "Ideas with a point of view.", "A distinctive portfolio for an independent creative, balancing expressive work and clear services.", ["Expressive project tiles", "Creative disciplines", "Inquiry call to action"]],
    ["CodeCanvas — Full-Stack Developer Portfolio", "codecanvas-full-stack-developer-portfolio", "From first sketch to shipped product.", "A full-stack engineering portfolio showing product thinking, technical range and shipped work.", ["Full-stack case studies", "Technology stack", "Build notes"]],
    ["CyberFolio — Cybersecurity Portfolio", "cyberfolio-cybersecurity-portfolio", "Security that starts with understanding.", "A professional security portfolio highlighting responsible practice, research and defensive expertise.", ["Security research notes", "Responsible disclosure", "Defensive capabilities"]],
    ["MotionFrame — Motion Designer Portfolio", "motionframe-motion-designer-portfolio", "Give good stories a little movement.", "A motion design portfolio with a cinematic feature panel and a tidy reel and project index.", ["Featured motion reel", "Project breakdowns", "Production capabilities"]],
    ["Architecta — Architecture Portfolio", "architecta-architecture-portfolio", "Spaces shaped around the way we live.", "An architectural portfolio presenting selected spaces, materials and design intent with editorial care.", ["Selected built work", "Material studies", "Practice profile"]],
    ["PhotoVerse — Photographer Portfolio", "photoverse-photographer-portfolio", "A closer look at the in-between.", "A photography portfolio with a gallery-led layout, collection filters and thoughtful image notes.", ["Curated photo collections", "Gallery navigation", "Booking inquiry"]],
    ["PersonalBrand — Professional Personal Website", "personalbrand-professional-personal-website", "Good work begins with good people.", "A personal professional website connecting expertise, writing and speaking into one clear profile.", ["Professional introduction", "Expertise and writing", "Speaking inquiries"]],
  ]],
  ["Agency Websites", "AgencyTemplate", [
    ["PixelAgency — Creative Digital Agency", "pixelagency-creative-digital-agency", "Digital work with a human point of view.", "A creative agency homepage that pairs strong art direction with practical project information.", ["Creative capabilities", "Selected client work", "Project inquiry"]],
    ["CodeSphere — Software Development Agency", "codesphere-software-development-agency", "Complex software, made dependable.", "A software agency site focused on reliable delivery, product partnership and engineering depth.", ["Product engineering", "Delivery approach", "Technical case studies"]],
    ["BrandForge — Branding Agency", "brandforge-branding-agency", "Build a brand people can feel.", "A branding studio website for strategy, identity and the systems that bring a brand to life.", ["Brand strategy", "Identity systems", "Launch support"]],
    ["MarketRise — Digital Marketing Agency", "market-rise-digital-marketing-agency", "Marketing built around meaningful growth.", "A digital marketing agency landing page focused on clear strategy and measurable performance.", ["Growth strategy", "Channel programs", "Transparent reporting"]],
    ["DesignHaus — Design Studio Website", "designhaus-design-studio-website", "Useful, beautiful, built together.", "A collaborative design studio homepage for digital experiences, systems and product craft.", ["Product design", "Design systems", "Collaborative process"]],
    ["CyberShield — Cybersecurity Agency", "cybershield-cybersecurity-agency", "Confidence for the work you do online.", "A cybersecurity consultancy page outlining practical assessment, protection and response services.", ["Security assessments", "Incident readiness", "Practical remediation"]],
    ["GrowthLab — Growth & Consulting Agency", "growthlab-growth-consulting-agency", "Find the next sensible step forward.", "A strategy and growth consultancy website built around clear diagnosis and measurable action.", ["Growth diagnostics", "Operating strategy", "Hands-on advisory"]],
    ["MotionWorks — Video Production Agency", "motionworks-video-production-agency", "Stories in motion, from first frame to final cut.", "A video production studio homepage showcasing its approach, craft and production services.", ["Creative development", "Production and direction", "Post-production"]],
    ["WebNexus — Web Development Agency", "webnexus-web-development-agency", "Websites that work as hard as you do.", "A web development agency page for accessible, performant and maintainable digital products.", ["Modern web builds", "Accessibility and speed", "Ongoing partnership"]],
    ["StudioNorth — Premium Creative Studio", "studionorth-premium-creative-studio", "A little more intention in every detail.", "A premium creative studio website with an editorial portfolio, considered services and personal contact.", ["Art direction", "Brand and digital work", "Studio notes"]],
  ]],
  ["Blog & Content Websites", "BlogTemplate", [
    ["DailyScope — News & Magazine", "dailyscope-news-magazine", "A sharper view of what matters today.", "A news and magazine front page with a lead story, topic navigation and a readable story list.", ["Lead story layout", "Topic-led browsing", "Latest headlines"]],
    ["TechJournal — Technology Blog", "techjournal-technology-blog", "Technology, explained with care.", "A technology publication for useful analysis, product thinking and informed industry stories.", ["Technology categories", "Long-form articles", "Newsletter signup"]],
    ["StoryNest — Personal Blog", "storynest-personal-blog", "Notes from a life in progress.", "A warm personal blog with an author introduction, recent essays and a comfortable reading rhythm.", ["Author profile", "Personal essays", "Archive navigation"]],
    ["InsightDaily — Editorial Website", "insightdaily-editorial-website", "Context for a world that won't stand still.", "An editorial homepage designed to surface considered reporting, analysis and perspectives.", ["Featured editorial", "Opinion and analysis", "Editor-selected reads"]],
    ["DevNotes — Developer Blog", "devnotes-developer-blog", "Practical notes from building software.", "A developer writing site with technical article cards, topic filters and code-friendly typography.", ["Engineering articles", "Topic filters", "Reading-time labels"]],
    ["TravelTales — Travel Blog", "traveltales-travel-blog", "Take the scenic route, thoughtfully.", "A travel journal for destination notes, itineraries and the small details worth remembering.", ["Destination collections", "Travel stories", "Trip planning notes"]],
    ["FoodCanvas — Food & Recipe Blog", "foodcanvas-food-recipe-blog", "A good meal starts with a good idea.", "A recipe publication with seasonal collections, approachable cooking notes and saved favorites.", ["Recipe categories", "Cooking time details", "Saveable recipes"]],
    ["DesignDigest — Design Magazine", "designdigest-design-magazine", "A closer look at how things come together.", "A design magazine homepage for visual culture, digital craft and thoughtful creative practice.", ["Design features", "Studio interviews", "Visual inspiration"]],
    ["FinanceBrief — Finance Blog", "financebrief-finance-blog", "Money news with the useful parts up front.", "A personal-finance publication that makes market context and everyday decisions easier to follow.", ["Finance explainers", "Market briefings", "Practical guides"]],
    ["KnowledgeHub — Educational Content Platform", "knowledgehub-educational-content-platform", "Learn something useful, one step at a time.", "An educational content hub organized around learning paths, concise lessons and clear progress.", ["Guided learning paths", "Short lessons", "Progress overview"]],
  ]],
  ["Pricing & Subscription Pages", "PricingTemplate", [
    ["PricePilot — SaaS Pricing Table", "pricepilot-saas-pricing-table", "A plan that fits the way you work.", "A clear SaaS pricing table with a billing toggle, feature breakdown and a confident recommended tier.", ["Monthly and annual billing", "Three clear plan tiers", "Feature comparison"]],
    ["Planify — Subscription Plans", "planify-subscription-plans", "Simple plans for steady progress.", "A subscription comparison page designed to make plan differences and billing cadence easy to understand.", ["Flexible billing cadence", "Included benefits", "Plan selection feedback"]],
    ["TierStack — Tiered Pricing Interface", "tierstack-tiered-pricing-interface", "Room to grow, at every stage.", "A tiered pricing page for teams moving from an initial setup to a more capable workspace.", ["Starter to scale tiers", "Usage and feature limits", "Recommended plan"]],
    ["ScaleUp — Usage-Based Pricing", "scaleup-usage-based-pricing", "Pay for the value you actually use.", "A usage-based pricing experience with an adjustable volume estimate and a transparent cost preview.", ["Adjustable usage estimate", "Live price calculation", "Clear included allowance"]],
    ["FlexiPlan — Flexible Pricing Page", "flexiplan-flexible-pricing-page", "Choose what works for you.", "A flexible pricing page with an interactive billing selector and straightforward plan details.", ["Flexible billing options", "Selectable plan cards", "Included feature lists"]],
    ["EnterprisePlus — Enterprise Pricing", "enterpriseplus-enterprise-pricing", "A plan shaped around your organization.", "An enterprise pricing experience focused on tailored capabilities, support and a practical sales conversation.", ["Organization-ready features", "Dedicated support options", "Talk to an expert action"]],
    ["CompareX — Plan Comparison Interface", "comparex-plan-comparison-interface", "The differences, made easy to compare.", "A plan comparison interface that puts included features and meaningful limits side by side.", ["Side-by-side comparison", "Feature availability", "Billing interval toggle"]],
    ["MemberPro — Membership Pricing", "memberpro-membership-pricing", "Membership that gives more back.", "A membership pricing page outlining recurring benefits, member-only access and annual savings.", ["Member benefits", "Monthly or annual option", "Membership confirmation"]],
    ["CreditFlow — Credit-Based Pricing", "creditflow-credit-based-pricing", "Credits that keep every action clear.", "A credit-based pricing interface with selectable packs, estimated usage and transparent balances.", ["Selectable credit packs", "Usage estimate", "Balance preview"]],
    ["SimpleBill — Simple Subscription Pricing", "simplebill-simple-subscription-pricing", "One straightforward plan. No surprises.", "A deliberately simple subscription page that explains one plan, its billing and the next step.", ["Single-plan summary", "Annual billing option", "Cancel-anytime clarity"]],
  ]],
  ["UI Components & Sections", "ComponentTemplate", [
    ["HeroCraft — Hero Section Collection", "herocraft-hero-section-collection", "A thoughtful opening for every story.", "A collection of adaptable hero sections with message hierarchy, supporting details and clear actions.", ["Centered and split layouts", "Eyebrow and headline patterns", "Primary and secondary actions"]],
    ["NavMaster — Navigation Bar Collection", "navmaster-navigation-bar-collection", "Navigation patterns, made practical.", "A component gallery for responsive navigation, brand placement, active states and compact menus.", ["Responsive menu patterns", "Active navigation states", "Desktop and mobile variants"]],
    ["CardVerse — Card Component Collection", "cardverse-card-component-collection", "A better home for useful information.", "A collection of reusable cards for feature summaries, metrics, profiles and editorial content.", ["Feature and metric cards", "Profile and content cards", "Interactive hover states"]],
    ["FormFlow — Form & Input Collection", "formflow-form-input-collection", "Forms that feel clear from the first field.", "A practical form collection with accessible labels, validation feedback and multiple input patterns.", ["Text and select fields", "Inline validation", "Submission feedback"]],
    ["ModalX — Modal & Dialog Collection", "modalx-modal-dialog-collection", "Dialogs that make the next step clear.", "An interactive set of confirmation, information and destructive-action dialogs.", ["Confirmation dialog", "Information panel", "Dismiss and confirm actions"]],
    ["TableGrid — Data Table Collection", "tablegrid-data-table-collection", "Structured data, easier to scan.", "A compact data table collection with search, status filters and clear row-level actions.", ["Searchable data rows", "Status filtering", "Row action menu"]],
    ["TestimonialPro — Testimonial Sections", "testimonialpro-testimonial-sections", "Let customer stories do the talking.", "A testimonial section collection with quote cards, attribution and interactive story navigation.", ["Quote and attribution styles", "Customer profile details", "Previous and next controls"]],
    ["FooterLab — Footer Design Collection", "footerlab-footer-design-collection", "A useful finish to every page.", "A footer gallery covering brand summaries, grouped links, newsletter signup and legal navigation.", ["Multi-column link groups", "Newsletter form", "Legal and social links"]],
    ["ButtonForge — Button & Action Collection", "buttonforge-button-action-collection", "The small details behind confident actions.", "A button collection for primary actions, quiet controls, icon buttons and loading feedback.", ["Primary and secondary styles", "Loading and disabled states", "Icon action controls"]],
    ["LayoutKit — Layout & Section Collection", "layoutkit-layout-section-collection", "Useful sections that fit together.", "A layout collection for content grids, side-by-side stories, metric bands and call-to-action sections.", ["Content grid patterns", "Split story sections", "Call-to-action layouts"]],
  ]],
];

const palettesForCategory = (categoryIndex) => palettes.map((palette, i) => {
  const offset = (i + categoryIndex * 2) % palettes.length;
  return palettes[offset];
});

export const designs = rows.flatMap(([category, template, entries], categoryIndex) =>
  entries.map(([name, slug, headline, description, features, products], index) => {
    const palette = palettesForCategory(categoryIndex)[index];
    const file = name.split(" —")[0];
    const data = {
      id: categoryIndex * 10 + index + 1,
      category,
      template,
      file,
      name,
      slug,
      brand: file,
      headline,
      description,
      features,
      products: products ?? [],
      tags: ["react", "tailwind", category.toLowerCase().split(" ")[0]],
      use: [category, description.split(" ").slice(0, 7).join(" ")],
      customize: ["Brand and copy: edit this design's registry entry", "Palette: update its color configuration", "Interactions: customize the component source"],
      colors: { background: palette[0], ink: palette[1], accent: palette[2], surface: palette[3] },
      variant: index,
      chart: Array.from({ length: 12 }, (_, i) => 24 + ((i * 19 + index * 13 + categoryIndex * 7) % 70)),
      metrics: [index * 7 + 68, index * 9 + 124, index * 5 + 42],
      featured: index === 0,
      popular: index === 0 || index === 4 || index === 8,
    };
    const source = raw[`./designs/${template}.jsx`];
    let generatedSource;
    return {
      ...data,
      get source() {
        generatedSource ??= source.replace("const config = globalThis.__CONFIG__ ?? {};", `const config = ${JSON.stringify(data)};`);
        return generatedSource;
      },
    };
  }),
);

export const bySlug = (slug) => designs.find((design) => design.slug === slug);
export const categorySlug = (category) => category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
