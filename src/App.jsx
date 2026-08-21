import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  HeartPulse,
  Home,
  Mail,
  Menu,
  MapPin,
  Phone,
  ShieldCheck,
  UserRound,
  X,
} from "lucide-react";
import "./styles.css";

const assets = {
  logo:
    "https://static.wixstatic.com/media/6632cb_b32c15ed38e74d43b4cdffe2a645f339~mv2.png/v1/fill/w_713,h_156,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Assured-Insurance-Finance-logo.png",
  homeHero:
    "https://static.wixstatic.com/media/3fb78b_602efb7f26c248a9a5124911fd449826~mv2.jpg/v1/fill/w_2500,h_742,al_c/3fb78b_602efb7f26c248a9a5124911fd449826~mv2.jpg",
  financeHero:
    "https://static.wixstatic.com/media/3fb78b_eaff0ad92cc84bcf85013b5ddd4edf67~mv2.jpg/v1/fill/w_2500,h_1222,al_c/3fb78b_eaff0ad92cc84bcf85013b5ddd4edf67~mv2.jpg",
  bob:
    "https://static.wixstatic.com/media/60cbbc_e7ec3ed766b445cf9673f44ba17bc2b1~mv2.jpg/v1/crop/x_0,y_449,w_4267,h_3028/fill/w_970,h_688,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Assured%20insurance%20-3.jpg",
  contactHero:
    "https://static.wixstatic.com/media/3fb78b_602efb7f26c248a9a5124911fd449826~mv2.jpg/v1/fill/w_2500,h_742,al_c/3fb78b_602efb7f26c248a9a5124911fd449826~mv2.jpg",
};

const nav = [
  {
    label: "Mortgages",
    href: "/mortgages/",
    children: [
      ["Mortgage Broker Nelson", "/mortgages/nelson/"],
      ["First Home Buyers", "/mortgages/first-home-buyers/"],
      ["Refinancing", "/mortgages/refinancing/"],
      ["Investment Property", "/mortgages/investment-property/"],
      ["Bridging Loans", "/mortgages/bridging-loans/"],
    ],
  },
  {
    label: "Insurance",
    href: "/insurance/",
    children: [
      ["Life Insurance", "/insurance/life/"],
      ["Health Insurance", "/insurance/health/"],
      ["Income Protection", "/insurance/income-protection/"],
      ["Mortgage Protection", "/insurance/mortgage-protection/"],
      ["Trauma Insurance", "/insurance/trauma/"],
    ],
  },
  {
    label: "Business",
    href: "/business/",
    children: [
      ["Key Person Insurance", "/business/key-person-insurance/"],
      ["Business Protection", "/business/business-protection/"],
      ["Commercial Finance", "/business/commercial-finance/"],
    ],
  },
  {
    label: "About Bob",
    href: "/about-bob/",
    children: [
      ["Why use an adviser?", "/about-bob/"],
      ["Disclosure", "/disclosure/"],
    ],
  },
  {
    label: "Resources",
    href: "/resources/",
    children: [
      ["FAQs", "/resources/faqs/"],
      ["Guides", "/resources/guides/"],
    ],
  },
  { label: "Contact", href: "/contact/" },
];

const pageCopy = {
  "/mortgages/": {
    eyebrow: "Mortgages and Finance",
    title: "Mortgage and finance advice for Nelson, Richmond and Tasman.",
    intro:
      "Assured helps remove property buying barriers and makes it easier to move through the finance and lending process, whether you are buying your first home, investing, refinancing, or looking at business or personal finance.",
    image: assets.financeHero,
    icon: Home,
    sections: ["Home Loans", "First Home Buyers", "Refinancing", "Investment Loans", "Bridging Loans", "Commercial and Business Loans"],
    cta: "Talk to the team about your mortgage options",
  },
  "/insurance/": {
    eyebrow: "Insurance Advice",
    title: "Life, health and income protection advice.",
    intro:
      "Assured provides an overview of what is available in the insurance market for life, trauma and health insurance, then discusses the areas of cover that suit your circumstances.",
    image: assets.homeHero,
    icon: HeartPulse,
    sections: ["Life & Health Insurance", "Income & Mortgage Protection", "Trauma Cover", "Key Person Cover", "Business Cover"],
    cta: "Talk to the team about your insurance options",
  },
  "/business/": {
    eyebrow: "Business Advice",
    title: "Business cover and finance advice for local owners.",
    intro:
      "Assured works with business owners on key person and business insurance, commercial lending, cash-flow lending, expansion finance and the protection needed if illness or injury affects the people a business depends on.",
    image: assets.financeHero,
    icon: BriefcaseBusiness,
    sections: ["Key Person Insurance", "Business Protection", "Commercial Finance", "Cash Flow Lending", "Commercial Property"],
    cta: "Talk to the team about protecting your business",
  },
  "/about-bob/": {
    eyebrow: "Bob Llewellyn",
    title: "Good advice is at the heart of everything.",
    intro:
      "Bob Llewellyn is a Financial & Mortgage Adviser and Life and Risk Insurance Adviser. Assured takes pride in helping clients understand the financial products and services available to them, and how those options meet their needs and objectives.",
    image: assets.bob,
    icon: UserRound,
    sections: ["Financial & Mortgage Adviser", "Life and Risk Insurance Adviser", "FSP No: 99484", "Nelson and Tasman focused"],
    cta: "Talk to Bob about working with an adviser",
  },
};

const financeServices = [
  {
    title: "Home Loans",
    text: "A home loan is a large and often long-term commitment. The right structure depends on the loan size, the property, your deposit, and the way you live day to day.",
    href: "/mortgages/nelson/",
  },
  {
    title: "First Home Buyers",
    text: "First-home buyers need to understand both lending options and any grants or entitlements that may be available. Assured helps make the application process clearer and easier to manage.",
    href: "/mortgages/first-home-buyers/",
  },
  {
    title: "Refinancing",
    text: "Refinancing can be used to seek a better rate, consolidate debt, renovate, or access equity. Assured helps weigh the costs against the long-term benefits.",
    href: "/mortgages/refinancing/",
  },
  {
    title: "Investment Loans",
    text: "Property investors need lending that fits their goals and strategy. Assured can help compare investment loan options and shape the finance around the property plan.",
    href: "/mortgages/investment-property/",
  },
  {
    title: "Self-Employed",
    text: "Self-employed borrowers can find standard lending criteria difficult because business cash flow varies. Competitive lending options may still be available for home and business needs.",
    href: "/business/commercial-finance/",
  },
  {
    title: "Land and Construction Loans",
    text: "A land and construction loan can fund a build or major renovation while helping keep repayments lower during the construction phase.",
    href: "/mortgages/nelson/",
  },
  {
    title: "Personal Loans",
    text: "Personal lending can help with major purchases, courses, medical expenses, weddings, furniture, or travel when extra funds are needed.",
    href: "/contact/",
  },
  {
    title: "Commercial and Business Loans",
    text: "Assured works with business and commercial lending specialists and major banks for expansion, investment funding, leasing, commercial property and cash-flow lending.",
    href: "/business/commercial-finance/",
  },
  {
    title: "Bridging Loans",
    text: "Bridging finance can help bridge the gap between two home loans when buying a new property before the sale of an existing one settles.",
    href: "/mortgages/bridging-loans/",
  },
];

const insuranceServices = [
  {
    title: "Life & Health Insurance",
    text: "Life and health are among the most important things to protect. Assured discusses risk insurance and health cover that can support family security and access to care.",
    href: "/insurance/life/",
  },
  {
    title: "Income & Mortgage Protection",
    text: "If injury or illness affects your ability to work, income or mortgage protection can provide financial support and reduce pressure on the household.",
    href: "/insurance/income-protection/",
  },
  {
    title: "Trauma, Key Person & Business Cover",
    text: "Trauma and business cover can provide a lump sum or regular payments when serious illness affects you, your business, or someone the business relies on.",
    href: "/insurance/trauma/",
  },
];

const servicePages = {
  "/mortgages/nelson/": {
    title: "Mortgage Broker Nelson",
    intro: "Home loan advice for Nelson, Richmond and Tasman buyers, homeowners and investors.",
    cta: "Talk to the team about home loans in Nelson",
    paragraphs: [
      "Assured has access to home loans from a wide panel of major banks and secure lenders, with advice grounded in the realities of buying property locally.",
      "Getting finance organised early can put you in a stronger position when it is time to negotiate. The home loan process can feel daunting at first, but with the right support it is often more straightforward than expected.",
      "We can help you understand deposits, pre-approval, lender requirements and the structure of a loan before you commit to a property.",
    ],
  },
  "/mortgages/first-home-buyers/": {
    title: "First Home Buyers",
    intro: "Support with deposits, pre-approval, lender expectations and the first-home loan process.",
    cta: "Talk to the team about buying your first home",
    paragraphs: [
      "Buying a first home is exciting, but there is a lot to think about. Assured helps make the home loan application process smoother so you can focus on finding the right property.",
      "Most banks and lenders look for a deposit before approving a home loan. Depending on your situation, a deposit may come from savings, gifts, inheritance, first-home assistance, or family equity arrangements.",
      "We can explain the types of home loans available, help you compare suitable options, and support the paperwork if you are eligible for first-home assistance.",
    ],
  },
  "/mortgages/refinancing/": {
    title: "Refinancing",
    intro: "Review your current lending and understand whether switching could put you in a better position.",
    cta: "Talk to the team about refinancing",
    paragraphs: [
      "People refinance for different reasons, including a better rate, debt consolidation, renovations, or freeing up equity.",
      "Refinancing needs careful consideration because there can be costs involved, including legal or conveyancing fees. The question is whether the change improves your position over time.",
      "We can compare your current loan with proposed options, talk through the numbers, and help manage the paperwork if refinancing makes sense.",
    ],
  },
  "/mortgages/investment-property/": {
    title: "Investment Property Loans",
    intro: "Lending advice for property investors who need finance shaped around their goals.",
    cta: "Talk to the team about investment property lending",
    paragraphs: [
      "Property investment can support wealth creation when the property and the finance are both right for the strategy.",
      "The loan package should reflect your goals, cash flow and long-term plan. Assured helps investors compare options and understand the practical lending requirements.",
      "Whether you are buying your first investment property or managing a larger portfolio, we can help you find lending that fits your circumstances.",
    ],
  },
  "/mortgages/bridging-loans/": {
    title: "Bridging Loans",
    intro: "Finance that helps bridge the gap between buying a new property and selling an existing one.",
    cta: "Talk to the team about bridging finance",
    paragraphs: [
      "Moving from one property to another can be stressful when the timing of buying and selling does not line up.",
      "A bridging loan may let you buy the next property before the sale of your current property is complete, with the lender using both properties as security.",
      "We can explain the repayment structure, interest treatment and end-debt position so you understand the implications before moving ahead.",
    ],
  },
  "/insurance/life/": {
    title: "Life Insurance",
    intro: "Protect your family and financial commitments with cover that reflects your situation.",
    cta: "Talk to the team about life insurance",
    paragraphs: [
      "Life insurance is designed to support the people who depend on you financially. It can help protect family security, debt commitments and future plans.",
      "Assured discusses your household, income, mortgage and wider responsibilities before matching cover to the needs that matter most.",
      "We can compare life and risk insurance options and explain the differences clearly.",
    ],
  },
  "/insurance/health/": {
    title: "Health Insurance",
    intro: "Advice on health cover that can support access to care when it matters.",
    cta: "Talk to the team about health insurance",
    paragraphs: [
      "Good health is essential to a good life, and private health insurance can help provide access to care and treatment options.",
      "Assured reviews what is available in the health insurance market and discusses the products that may suit you and your family.",
      "We can help arrange cover that balances benefits, affordability and peace of mind.",
    ],
  },
  "/insurance/income-protection/": {
    title: "Income Protection",
    intro: "Financial support if illness or injury affects your ability to work.",
    cta: "Talk to the team about income protection",
    paragraphs: [
      "If you are unable to work because of illness or injury, income protection can help reduce financial stress at an already difficult time.",
      "Mortgage protection can also help keep repayments manageable when household income is disrupted.",
      "Assured can put a plan in place so your family has support when it is most needed.",
    ],
  },
  "/insurance/mortgage-protection/": {
    title: "Mortgage Protection",
    intro: "Cover designed to support mortgage repayments if your income is interrupted.",
    cta: "Talk to the team about mortgage protection",
    paragraphs: [
      "Mortgage protection is designed around one of the biggest commitments most households carry: the home loan.",
      "It can provide financial assistance if injury or illness affects your ability to meet repayments.",
      "We can talk through how mortgage protection differs from income protection and what level of cover may be appropriate.",
    ],
  },
  "/insurance/trauma/": {
    title: "Trauma Insurance",
    intro: "A lump-sum safety net for serious health events and recovery time.",
    cta: "Talk to the team about trauma insurance",
    paragraphs: [
      "Trauma cover can provide a lump-sum payment after a defined serious health event, giving you more flexibility during recovery.",
      "For business owners, related cover can help reduce financial strain if you or another key person is unable to work.",
      "Assured provides advice and understanding around these products so the cover reflects real risks.",
    ],
  },
  "/business/key-person-insurance/": {
    title: "Key Person Insurance",
    intro: "Protect the business impact of losing a key owner, operator or revenue-generating person.",
    cta: "Talk to the team about key person insurance",
    paragraphs: [
      "Many businesses rely heavily on a small number of people. Key person cover can help protect cash flow and continuity if one of them is unable to work.",
      "The right arrangement depends on the role, revenue impact, ownership structure and the practical needs of the business.",
      "We can talk through the insurance options and help shape cover around the risks your business actually carries.",
    ],
  },
  "/business/business-protection/": {
    title: "Business Protection",
    intro: "Insurance advice for business continuity, ownership and financial resilience.",
    cta: "Talk to the team about business protection",
    paragraphs: [
      "Business protection can help reduce financial strain when illness, injury or a major event affects the people behind a business.",
      "Cover may support the business with lump-sum or ongoing payments while owners or key staff recover.",
      "Assured works with you to understand the business, the people it depends on and the financial risks that need attention.",
    ],
  },
  "/business/commercial-finance/": {
    title: "Commercial Finance",
    intro: "Commercial and business lending options for Nelson, Richmond and Tasman businesses.",
    cta: "Talk to the team about commercial finance",
    paragraphs: [
      "Good business finance is valuable when buying, growing or refinancing a business.",
      "Assured can assist with expansion finance, investment funding, leasing, commercial property purchases, retail premises, industrial land, factories, offices and cash-flow lending.",
      "Because Assured has relationships with business lending specialists and major banks, we can help compare options and explain the next steps.",
    ],
  },
  "/resources/": {
    title: "Resources",
    intro: "Useful answers and guides for mortgage, insurance and business finance questions.",
    cta: "Talk to the team about your finance or insurance questions",
    paragraphs: [
      "Assured keeps resources practical: answers to common questions, plain-language explanations and guidance that helps clients prepare for the next conversation.",
      "For detailed advice, we can talk through your situation and objectives directly.",
    ],
  },
  "/resources/faqs/": {
    title: "FAQs",
    intro: "Common questions Assured clients ask about lending decisions.",
    cta: "Talk to the team about your questions",
    faqs: [
      ["How much deposit do I need?", "Mortgage lenders generally prefer a 20% deposit or more, although lending may be available with less than 20% depending on the circumstances."],
      ["Should I fix or float?", "The choice depends on your situation and objectives. Fixed rates can provide repayment certainty, while floating rates may allow lump-sum repayments and can move up or down."],
      ["Should I refinance when my fixed rate expires?", "Refinancing may offer benefits, but it depends on your current lender, available rates, possible cash contributions and the costs involved in changing lender."],
    ],
  },
  "/resources/guides/": {
    title: "Guides",
    intro: "Plain-language guides for local mortgage and insurance decisions.",
    cta: "Talk to the team about the right next step",
    paragraphs: [
      "Useful guides should help clients understand practical choices before making decisions about home loans, insurance or business finance.",
      "Good starting points include preparing for home loan pre-approval, reviewing cover after life changes, and understanding when refinancing may be worth exploring.",
    ],
  },
};

const disclosureSections = [
  ["Licence Status and Conditions", "Assured Limited, FSP645889, trading as Assured Group and Assured Insurance and Finance, holds a financial advice provider licence issued by the Financial Markets Authority."],
  ["Nature and Scope of Advice", "Assured Limited provides advice about financial, lending, life and risk insurance needs. This includes access to a wide panel of approved lenders for mortgage and commercial lending, and access to a broad range of insurance providers for life, trauma, key person, private health and other risk products."],
  ["Fees, Expenses or Other Amounts Payable", "Assured Limited may charge a fee for financial advice, arranging finance, or arranging, altering or cancelling risk insurance. If a fee applies, you will be told when advice is provided."],
  ["Conflicts of Interest and Commissions", "Assured Limited has relationships with product providers and may be paid commissions by lenders and insurance providers. The amount varies by provider and is generally calculated as a percentage of the business placed."],
  ["Complaints and Disputes Process", "If you are not fully satisfied, contact your adviser or Assured Limited directly. The complaints officer will acknowledge the complaint in writing and work to resolve it fairly and in a timely way."],
  ["Contact Details", "Assured Limited [FSP645889]. Phone: 021 544 150. Email: admin@assuredgroup.co.nz. Address: PO Box 1609, Nelson 7040."],
];

function go(path) {
  window.location.hash = path;
  window.scrollTo(0, 0);
}

function Link({ href, children, className, onNavigate }) {
  return (
    <a
      className={className}
      href={`#${href}`}
      onClick={(event) => {
        event.preventDefault();
        go(href);
        onNavigate?.();
      }}
    >
      {children}
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <div className="topbar">
        <Phone size={15} />
        <span>0800 500 223</span>
      </div>
      <div className="masthead">
        <Link href="/" className="logoLink">
          <img src={assets.logo} alt="Assured Group Insurance and Finance" />
        </Link>
        <button
          className="mobileToggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
          <span>Menu</span>
        </button>
        <nav className="desktopNav">
          <Link href="/" className="navItem">Home</Link>
          {nav.map((item) => (
            <div className="navGroup" key={item.label}>
              <Link href={item.href} className="navItem">
                {item.label}
                {item.children && <ChevronDown size={13} />}
              </Link>
              {item.children && (
                <div className="dropdown">
                  {item.children.map(([label, href]) => (
                    <Link href={href} key={href}>{label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
      {menuOpen && (
        <nav className="mobileNav" aria-label="Mobile navigation">
          <Link href="/" className="mobileNavItem" onNavigate={closeMenu}>Home</Link>
          {nav.map((item) => (
            <div className="mobileNavGroup" key={item.label}>
              <Link href={item.href} className="mobileNavItem" onNavigate={closeMenu}>{item.label}</Link>
              {item.children && (
                <div className="mobileSubnav">
                  {item.children.map(([label, href]) => (
                    <Link href={href} key={href} onNavigate={closeMenu}>{label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero({ page }) {
  return (
    <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(255,255,255,.94), rgba(255,255,255,.7) 52%, rgba(255,255,255,.18)), url("${page.image}")` }}>
      <div className="heroInner">
        <p className="eyebrow">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
        <div className="heroActions">
          <Link href="/contact/" className="button primary">Talk To The Team <ArrowRight size={16} /></Link>
          <Link href="/about-bob/" className="button secondary">Learn More</Link>
        </div>
      </div>
    </section>
  );
}

function BobPanel({ cta = "Talk to the team about finance or insurance" }) {
  return (
    <section className="bobBand">
      <div className="bobWrap">
        <img src={assets.bob} alt="Bob Llewellyn, Assured Group adviser" />
        <div>
          <p className="eyebrow">Contact our adviser</p>
          <h2>{cta}</h2>
          <p className="role">Financial & Mortgage Adviser | Life and Risk Insurance Adviser</p>
          <p>
            Bob is a central point of contact for advice across mortgages, insurance and business finance, supported by Assured's wider adviser and administration team.
          </p>
          <Link href="/contact/" className="button primary">Contact The Team <ArrowRight size={16} /></Link>
          <div className="contactGrid">
            <span><Phone size={16} /> 0800 500 223</span>
            <span><Phone size={16} /> 021 544 150</span>
            <span><Mail size={16} /> bob@assuredgroup.co.nz</span>
            <span><ShieldCheck size={16} /> FSP No: 99484</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  const services = [
    ["Mortgages", "Get help with home loans, first-home buying, refinancing, investment property and other lending needs.", "/mortgages/", "Explore mortgage advice", Home],
    ["Insurance", "Understand your options for life, health, trauma, income protection and other personal or business insurance needs.", "/insurance/", "Explore insurance advice", HeartPulse],
    ["Business", "Advice for business owners looking at commercial finance, business protection and the financial risks that come with running a company.", "/business/", "Explore business advice", BriefcaseBusiness],
  ];
  const steps = [
    ["Tell us what you need", "Start with a conversation about your circumstances, goals and any problems you are trying to solve."],
    ["Work through the options", "We help identify appropriate options and explain what they mean in practical terms."],
    ["Decide how to proceed", "Once you understand your choices, you can make an informed decision about what is right for you."],
    ["Get support through the process", "Assured remains involved through applications, implementation and future changes where appropriate."],
  ];
  const quickLinks = [
    ["Mortgage broker in Nelson", "/mortgages/nelson/"],
    ["Buying your first home", "/mortgages/first-home-buyers/"],
    ["Refinancing a mortgage", "/mortgages/refinancing/"],
    ["Life insurance advice", "/insurance/life/"],
    ["Health insurance advice", "/insurance/health/"],
    ["Business finance and protection", "/business/"],
  ];
  return (
    <>
      <section className="hero homeHubHero" style={{ backgroundImage: `linear-gradient(90deg, rgba(255,255,255,.94), rgba(255,255,255,.7) 52%, rgba(255,255,255,.18)), url("${assets.homeHero}")` }}>
        <div className="heroInner">
          <p className="eyebrow">Personal financial advice in Nelson</p>
          <h1>Mortgage and insurance advice in Nelson</h1>
          <p>Financial decisions are easier when you have someone who understands what you are trying to achieve. Assured Group provides personal mortgage, insurance and business finance advice built around your circumstances.</p>
          <p className="hubHeroSupporting">Based in Nelson and working with clients across New Zealand, we offer straightforward advice without unnecessary jargon.</p>
          <div className="heroActions">
            <Link href="/contact/" className="button primary">Talk to an adviser <ArrowRight size={16} /></Link>
            <a className="button secondary" href="tel:0800500223"><Phone size={16} /> Call us</a>
          </div>
        </div>
      </section>

      <section className="nelsonSection homeHubServices">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro">
            <p className="eyebrow">How we can help</p>
            <h2>Advice for the decisions that matter</h2>
            <p>Whether you're buying a home, protecting your family or arranging finance for a business, we help you understand the options and decide what works for you.</p>
          </div>
          <div className="homeHubServiceGrid">
            {services.map(([title, description, href, linkText, Icon], index) => (
              <article className={`homeHubServiceCard${index === 0 ? " featured" : ""}`} key={title}>
                <Icon size={28} /><h3>{title}</h3><p>{description}</p>
                <Link href={href}>{linkText} <ArrowRight size={15} /></Link>
                {index === 0 && <Link className="homeHubSecondaryLink" href="/mortgages/nelson/">Looking for a mortgage broker in Nelson?</Link>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nelsonSection homeHubValue">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro">
            <p className="eyebrow">Advice built around you</p><h2>Start with your situation, not a product</h2>
            <p>Mortgages, insurance and finance can involve a large number of products, providers and decisions. We believe good advice starts somewhere simpler: understanding what you need and what you are trying to achieve.</p>
            <p>Assured Group helps you work through the options, understand the important differences and make informed decisions with a clear view of the consequences.</p>
          </div>
          <div className="nelsonFeatureGrid">
            <article><UserRound size={25} /><h3>Understand what matters</h3><p>We begin with your circumstances, priorities and the problem you want to solve.</p></article>
            <article><CircleDollarSign size={25} /><h3>Understand your options</h3><p>We explain the choices available and the important differences between them.</p></article>
            <article><CheckCircle2 size={25} /><h3>Make an informed decision</h3><p>You decide how to proceed with advice and support throughout the process.</p></article>
          </div>
        </div>
      </section>

      <section className="nelsonSection homeHubProcess">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro"><p className="eyebrow">Straightforward advice</p><h2>How working with Assured works</h2></div>
          <ol className="nelsonProcessList">
            {steps.map(([title, description], index) => <li key={title}><span aria-hidden="true">{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}
          </ol>
        </div>
      </section>

      <section className="nelsonSection homeHubLocal">
        <div className="nelsonContainer homeHubLocalGrid">
          <div>
            <p className="eyebrow">Local when it matters</p><h2>Financial advice in Nelson and beyond</h2>
            <p>Assured Group is based in Nelson and works with individuals, families and businesses throughout Nelson, Richmond and the wider region.</p>
            <p>We also work with clients elsewhere in New Zealand, combining personal service with access to lending and insurance options beyond the local market.</p>
            <Link className="nelsonTextLink" href="/contact/">Contact Assured Group <ArrowRight size={15} /></Link>
          </div>
          <img src={assets.financeHero} alt="Financial advice for Nelson, New Zealand" />
        </div>
      </section>

      <section className="nelsonSection nelsonAdviser homeHubTeam">
        <div className="nelsonContainer nelsonAdviserGrid">
          <img src={assets.bob} alt="Bob Llewellyn of Assured Group" />
          <div>
            <p className="eyebrow">The Assured team</p><h2>Personal advice from someone who knows your situation</h2>
            <p>Assured Group is built around personal relationships rather than anonymous transactions. You speak directly with the person advising you and have someone available to answer questions as decisions are made.</p>
            <p>Today, clients work directly with Bob Llewellyn, an experienced financial adviser with more than 15 years in financial services in New Zealand and the UK.</p>
            <p>As Assured grows, that same approach remains central: practical advice, individual attention and long-term relationships with clients.</p>
            <Link className="nelsonTextLink" href="/about-bob/">Meet Bob <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="nelsonSection homeHubQuickLinks">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro"><h2>What are you looking for?</h2></div>
          <div className="homeHubQuickGrid">
            {quickLinks.map(([label, href]) => <Link className="homeHubQuickCard" href={href} key={label}><span>{label}</span><ArrowRight size={17} /></Link>)}
          </div>
        </div>
      </section>

      <section className="homeHubTrust">
        <div className="nelsonContainer homeHubTrustPanel">
          <div><p className="eyebrow">Clear and transparent</p><h2>Know who you're dealing with</h2><p>Financial advice should come with clear information about who is providing it, the services offered and how the adviser is paid.</p></div>
          <div className="homeHubTrustActions">
            <Link href="/disclosure/">Disclosure information <ArrowRight size={15} /></Link>
            <Link href="/about-bob/">About Bob and Assured <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="nelsonFinalCta">
        <div className="nelsonContainer"><div className="nelsonCtaPanel">
          <h2>Start with a conversation</h2>
          <p>Whether you're looking at a mortgage, reviewing insurance or arranging finance for your business, tell us what you're trying to achieve and we'll help you work through the next step.</p>
          <div className="heroActions">
            <Link href="/contact/" className="button primary">Talk to an adviser <ArrowRight size={16} /></Link>
            <a className="button secondary" href="tel:0800500223"><Phone size={16} /> Call 0800 500 223</a>
          </div>
        </div></div>
      </section>
    </>
  );
}

function Process() {
  const steps = [
    ["Listen To Your Needs & Goals", "When banks or insurers feel hard to navigate, Assured takes time to understand your unique situation and what you want to achieve."],
    ["Match You With Products", "We find suitable banks, lenders or insurers and tailor their products to your needs and goals so you can see the options available."],
    ["Provide Expert Advice & Service", "Assured uses financial services experience to provide clear advice, ongoing service and professional recommendations."],
  ];
  return (
    <section className="process">
      {steps.map(([title, text]) => (
        <div key={title}>
          <CheckCircle2 size={26} />
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      ))}
    </section>
  );
}

function LandingPage({ page }) {
  const Icon = page.icon;
  const services = page.eyebrow.includes("Mortgage")
    ? financeServices
    : page.eyebrow.includes("Insurance")
      ? insuranceServices
      : financeServices.filter((item) => item.title.includes("Commercial") || item.title.includes("Self-Employed"));

  return (
    <>
      <Hero page={page} />
      <section className="contentGrid">
        <div>
          <p className="eyebrow">How Assured helps</p>
          <h2>Advice matched to your needs and objectives.</h2>
          <p>
            Assured starts by understanding your situation, then compares suitable lenders, insurers and products. The aim is to make the process easier to understand and give you confidence in the next step.
          </p>
          {page.eyebrow.includes("Business") && (
            <p>
              For businesses, that may include protection for key people, insurance for continuity, or finance for growth, leasing, property purchases and cash-flow needs.
            </p>
          )}
        </div>
        <div className="featureList">
          {page.sections.map((item) => (
            <div key={item}>
              <Icon size={22} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>
      {services.length > 0 && <ServiceDirectory services={services} />}
      {page.eyebrow.includes("Mortgage") && <Partners />}
      {page.eyebrow.includes("Insurance") && <InsurancePartners />}
      <BobPanel cta={page.cta} />
    </>
  );
}

function ServiceDirectory({ services }) {
  return (
    <section className="serviceDirectory">
      {services.map((item) => (
        <Link href={item.href} className="infoCard" key={item.title}>
          <CircleDollarSign size={24} />
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </Link>
      ))}
    </section>
  );
}

function Partners() {
  return (
    <section className="partners">
      <p className="eyebrow">Banks and lending partners</p>
      <h2>Access to a wide panel of lenders.</h2>
      <p>
        ANZ, ASAP Finance, ASB, Avanti Finance, Bank of China, Basecorp, BNZ, Cressida Capital, DBR, First Mortgage Trust, Funding Partners, Heartland Bank, Kiwibank, Liberty, NZCU, Pepper Money, Plus Finance, Prospa, Resimac, SBS, Southern Cross Partners, The Co-Operative Bank and Westpac.
      </p>
    </section>
  );
}

function InsurancePartners() {
  return (
    <section className="partners">
      <p className="eyebrow">Life and risk insurance partners</p>
      <h2>Insurance providers Assured works with.</h2>
      <p>
        Accuro Health Insurance, AIA, Asteron Life, Cigna, Fidelity Life, nib and Partners Life.
      </p>
    </section>
  );
}

function DetailPage({ page }) {
  return (
    <>
      <Hero page={{ eyebrow: "Assured Group", title: page.title, intro: page.intro, image: assets.financeHero }} />
      <section className="article">
        <h2>{page.title} in Nelson and Tasman</h2>
        {page.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {page.faqs && (
          <div className="faqList">
            {page.faqs.map(([question, answer]) => (
              <div key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
              </div>
            ))}
          </div>
        )}
        <Link href="/contact/" className="button primary">Talk To The Team <ArrowRight size={16} /></Link>
      </section>
      <BobPanel cta={page.cta} />
    </>
  );
}

const nelsonServices = [
  {
    title: "First-home buyers",
    text: "Understand borrowing capacity, deposits, the application process and what to expect before making your first offer.",
    href: "/mortgages/first-home-buyers/",
    linkText: "First-home buyer advice",
  },
  {
    title: "Refinancing",
    text: "Review an existing mortgage when your circumstances, priorities or lending needs have changed.",
    href: "/mortgages/refinancing/",
    linkText: "Refinancing advice",
  },
  {
    title: "Property investors",
    text: "Discuss lending options and structure when buying or refinancing an investment property.",
    href: "/mortgages/investment-property/",
    linkText: "Investment property finance",
  },
  {
    title: "Other lending situations",
    text: "Not every application is straightforward. Talk to us about your circumstances and what you are trying to achieve.",
    href: "/contact/",
    linkText: "Talk to Bob",
  },
];

const nelsonProcess = [
  ["Tell us what you're trying to do", "We start with your circumstances, goals and any problems you are trying to solve."],
  ["Review the options", "Bob works through the lending options that may be appropriate and explains the implications in straightforward terms."],
  ["Prepare and apply", "Once you decide how you want to proceed, Assured helps with the application and supporting information."],
  ["Stay involved", "We remain available through the lending process and can help when your borrowing needs change later."],
];

const nelsonFaqs = [
  ["What does a mortgage broker do?", "A mortgage broker or adviser helps you understand lending options, prepare an application and work through the mortgage process. The advice should take account of your circumstances rather than simply focusing on a headline interest rate."],
  ["When should I speak to a mortgage adviser?", "Ideally before you need to make a final borrowing decision. First-home buyers may benefit from talking to an adviser before beginning a serious property search, while existing borrowers may want advice before refinancing or restructuring their mortgage."],
  ["Do I need to be in Nelson?", "No. Assured Group is based in Nelson but can work with clients elsewhere in New Zealand."],
  ["Can you help if my situation isn't straightforward?", "Talk to us. Lending decisions depend on individual circumstances, so the first step is understanding what you are trying to achieve and what constraints apply."],
  ["Can you guarantee that my mortgage will be approved?", "No. Lending decisions are made by lenders and depend on their criteria and your circumstances. Assured can help you understand your options and prepare an appropriate application."],
];

function NelsonMortgagePage() {
  return (
    <>
      <section className="nelsonHero">
        <div className="nelsonHeroGrid">
          <div className="nelsonHeroContent">
            <p className="eyebrow">Mortgage advice in Nelson</p>
            <h1>Mortgage Broker in Nelson</h1>
            <p className="nelsonHeroIntro">
              Buying a home, refinancing or arranging lending can become complicated quickly. Assured Group provides personal mortgage advice to help you understand your options, structure your borrowing and find a solution that fits your circumstances.
            </p>
            <p>
              Work directly with Bob Llewellyn, a Nelson-based financial adviser and mortgage broker with more than 15 years’ experience in New Zealand and the UK.
            </p>
            <div className="heroActions">
              <Link href="/contact/" className="button primary">Talk to a mortgage adviser <ArrowRight size={16} /></Link>
              <a className="button secondary" href="tel:021544150"><Phone size={16} /> Call Bob</a>
            </div>
          </div>
          <div className="nelsonHeroMedia">
            <img src={assets.bob} alt="Bob Llewellyn, mortgage broker and financial adviser at Assured Group" />
          </div>
        </div>
      </section>

      <section className="nelsonSection nelsonValue">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro">
            <h2>Mortgage advice built around you</h2>
            <p>A mortgage is not simply a question of finding an interest rate. Your deposit, income, existing commitments, future plans and the way a loan is structured can all affect which options are appropriate.</p>
            <p>Assured Group helps you work through those decisions, understand the available choices and approach lenders with a clear picture of what you need.</p>
          </div>
          <div className="nelsonFeatureGrid">
            <article><CheckCircle2 size={25} /><h3>Understand your options</h3><p>Clear explanations without unnecessary financial jargon.</p></article>
            <article><CircleDollarSign size={25} /><h3>Find the right structure</h3><p>Consider loan structure as well as the lender and product.</p></article>
            <article><ShieldCheck size={25} /><h3>Have someone on your side</h3><p>Support through the application process rather than dealing with it alone.</p></article>
          </div>
        </div>
      </section>

      <section className="nelsonSection nelsonServices">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro"><h2>How we can help</h2></div>
          <div className="nelsonServiceGrid">
            {nelsonServices.map((service) => (
              <article className="nelsonServiceCard" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link href={service.href}>{service.linkText} <ArrowRight size={15} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nelsonSection nelsonProcess">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro"><h2>How mortgage advice works</h2></div>
          <ol className="nelsonProcessList">
            {nelsonProcess.map(([title, text], index) => (
              <li key={title}>
                <span aria-hidden="true">{index + 1}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="nelsonSection nelsonAdviser">
        <div className="nelsonContainer nelsonAdviserGrid">
          <img src={assets.bob} alt="Bob Llewellyn of Assured Group" />
          <div>
            <p className="eyebrow">Local expertise</p>
            <h2>Your Nelson mortgage adviser</h2>
            <h3>Bob Llewellyn</h3>
            <p>Bob is a Nelson-based financial adviser and mortgage broker with more than 15 years’ experience in financial services in New Zealand and the UK.</p>
            <p>He approaches mortgage advice as a problem-solving exercise: understanding what a client is trying to achieve, identifying the barriers and working through practical lending options with them.</p>
            <p>When you contact Assured Group about a mortgage, you deal directly with the person advising you.</p>
            <Link className="nelsonTextLink" href="/about-bob/">More about Bob <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="nelsonSection nelsonLocal">
        <div className="nelsonContainer nelsonSectionIntro">
          <h2>Mortgage advice in Nelson — and beyond</h2>
          <p>Assured Group is based in Nelson and works with clients locally as well as elsewhere in New Zealand.</p>
          <p>If you're in Nelson, Richmond or the wider region, you can speak to someone who understands the local market while still considering lending options appropriate to your individual circumstances.</p>
        </div>
      </section>

      <section className="nelsonSection nelsonFaq">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro"><h2>Mortgage questions</h2></div>
          <div className="nelsonFaqList">
            {nelsonFaqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="nelsonFinalCta">
        <div className="nelsonContainer">
          <div className="nelsonCtaPanel">
            <h2>Start with a conversation</h2>
            <p>Whether you're buying your first home, considering refinancing or simply want to understand your borrowing options, talk to Assured Group about what you're trying to achieve.</p>
            <div className="heroActions">
              <Link href="/contact/" className="button primary">Talk to a mortgage adviser <ArrowRight size={16} /></Link>
              <a className="button secondary" href="tel:021544150"><Phone size={16} /> Call 021 544 150</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const insuranceHubServices = [
  ["Life Insurance", "Help protect the people who depend on you financially if you die.", "/insurance/life/", "Life insurance advice"],
  ["Health Insurance", "Understand options for private health cover and the differences between available policies.", "/insurance/health/", "Health insurance advice"],
  ["Income Protection", "Consider protection if illness or injury prevents you from working and earning an income.", "/insurance/income-protection/", "Income protection advice"],
  ["Trauma Insurance", "Financial support following specified serious illnesses or medical events.", "/insurance/trauma/", "Trauma insurance advice"],
  ["Mortgage Protection", "Help protect your ability to meet mortgage commitments if your circumstances change unexpectedly.", "/insurance/mortgage-protection/", "Mortgage protection advice"],
  ["Other Insurance Needs", "Assured Group can also discuss other personal and business insurance needs, including cover for property, vehicles and commercial risks where appropriate.", "/contact/", "Discuss your insurance needs"],
];

const insuranceHubProcess = [
  ["Tell us about your circumstances", "We start by understanding you, your financial commitments and what you want to protect."],
  ["Identify the risks", "We discuss the events that could have a significant financial impact and any existing cover you already have."],
  ["Review your options", "We explain appropriate insurance options and the important differences between them."],
  ["Put the cover in place", "Once you decide how to proceed, Assured helps with the application process and remains available as your circumstances change."],
];

const insuranceHubFaqs = [
  ["What does an insurance adviser do?", "An insurance adviser helps you understand the financial risks you may want to protect against, explains suitable types of cover and helps you compare options based on your circumstances."],
  ["Why use an insurance adviser instead of approaching an insurer directly?", "An adviser can look at your wider circumstances rather than considering a single product in isolation. They can also help explain differences between types of cover and assist with the application process."],
  ["What types of insurance can Assured advise on?", "Assured Group can discuss a range of personal insurance needs including life insurance, health insurance, trauma cover, income protection and mortgage protection. Other personal and business insurance needs can also be discussed where appropriate."],
  ["How much insurance do I need?", "There is no single amount that is right for everyone. Appropriate cover depends on factors such as income, debts, family responsibilities, existing protection and the financial consequences of different events."],
  ["Can you review insurance I already have?", "Yes. Existing cover can be considered alongside your current circumstances to help identify whether it still reflects what you need."],
  ["Do I need to live in Nelson?", "No. Assured Group is based in Nelson but can work with clients elsewhere in New Zealand."],
];

function InsuranceHubPage() {
  return (
    <>
      <section className="hero insuranceHubHero" style={{ backgroundImage: `linear-gradient(90deg, rgba(255,255,255,.94), rgba(255,255,255,.7) 52%, rgba(255,255,255,.18)), url("${assets.homeHero}")` }}>
        <div className="heroInner">
          <p className="eyebrow">Insurance advice in Nelson</p>
          <h1>Insurance Brokers &amp; Advisers in Nelson</h1>
          <p>The right insurance depends on much more than choosing a policy. Assured Group helps you understand your options, decide what protection is appropriate for you and structure cover around your circumstances.</p>
          <p className="hubHeroSupporting">Based in Nelson, we provide personal insurance advice for individuals, families and businesses across the region and elsewhere in New Zealand.</p>
          <div className="heroActions">
            <Link href="/contact/" className="button primary">Talk to an insurance adviser <ArrowRight size={16} /></Link>
            <a className="button secondary" href="tel:0800500223"><Phone size={16} /> Call us</a>
          </div>
        </div>
      </section>

      <section className="nelsonSection insuranceHubTypes">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro">
            <h2>What can we help protect?</h2>
            <p>Different types of insurance protect against different financial risks. We help you understand which areas are relevant to you and how different forms of cover can work together.</p>
          </div>
          <div className="insuranceHubServiceGrid">
            {insuranceHubServices.map(([title, text, href, linkText]) => (
              <article className="nelsonServiceCard" key={title}>
                <h3>{title}</h3><p>{text}</p>
                <Link href={href}>{linkText} <ArrowRight size={15} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nelsonSection insuranceHubValue">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro">
            <h2>Insurance advice built around you</h2>
            <p>Insurance policies can look similar while differing significantly in what they cover, how claims are assessed and the conditions that apply.</p>
            <p>Assured Group starts with your circumstances: what matters to you, what financial risks you want to manage and what existing protection you already have. We then help you understand the available options and make an informed decision.</p>
          </div>
          <div className="nelsonFeatureGrid">
            <article><HeartPulse size={25} /><h3>Understand your risks</h3><p>Identify the events that could create a significant financial problem for you, your family or your business.</p></article>
            <article><CheckCircle2 size={25} /><h3>Understand your options</h3><p>Compare appropriate types of cover and understand important differences between policies.</p></article>
            <article><ShieldCheck size={25} /><h3>Structure your protection</h3><p>Consider the combination and level of cover rather than looking at individual policies in isolation.</p></article>
          </div>
        </div>
      </section>

      <section className="nelsonSection nelsonProcess insuranceHubProcess">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro"><h2>How insurance advice works</h2></div>
          <ol className="nelsonProcessList">
            {insuranceHubProcess.map(([title, text], index) => (
              <li key={title}><span aria-hidden="true">{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="nelsonSection nelsonAdviser">
        <div className="nelsonContainer nelsonAdviserGrid">
          <img src={assets.bob} alt="Bob Llewellyn of Assured Group" />
          <div>
            <p className="eyebrow">Personal advice</p>
            <h2>Advice from the Assured team</h2>
            <p>Assured Group is based in Nelson and provides personal insurance and financial advice built around individual circumstances rather than one-size-fits-all solutions.</p>
            <p>Today, clients work directly with Bob Llewellyn, an experienced financial adviser with more than 15 years in financial services in New Zealand and the UK.</p>
            <p>When you speak to Assured, you deal directly with the person advising you and can ask questions throughout the process.</p>
            <Link className="nelsonTextLink" href="/about-bob/">Meet Bob <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="nelsonSection nelsonLocal">
        <div className="nelsonContainer nelsonSectionIntro">
          <h2>Insurance advice in Nelson — and beyond</h2>
          <p>Assured Group is based in Nelson and works with clients in Nelson, Richmond and the wider region, as well as clients elsewhere in New Zealand.</p>
          <p>Whether you are arranging insurance for the first time or reviewing cover you already have, we can help you understand the options available and make decisions based on your own circumstances.</p>
        </div>
      </section>

      <section className="nelsonSection nelsonFaq">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro"><h2>Insurance questions</h2></div>
          <div className="nelsonFaqList">
            {insuranceHubFaqs.map(([question, answer]) => (
              <details key={question}><summary>{question}</summary><p>{answer}</p></details>
            ))}
            <details>
              <summary>How does Assured Group get paid?</summary>
              <p>Please ask us about fees and remuneration, or see our disclosure information for details about how Assured Group is paid for advice.</p>
              <p><Link className="nelsonTextLink" href="/disclosure/">Read our disclosure information <ArrowRight size={15} /></Link></p>
            </details>
          </div>
        </div>
      </section>

      <InsurancePartners />

      <section className="nelsonFinalCta">
        <div className="nelsonContainer">
          <div className="nelsonCtaPanel">
            <h2>Start with a conversation</h2>
            <p>If you're arranging insurance, reviewing existing cover or simply want to understand your options, talk to Assured Group about what you need to protect.</p>
            <div className="heroActions">
              <Link href="/contact/" className="button primary">Talk to an insurance adviser <ArrowRight size={16} /></Link>
              <a className="button secondary" href="tel:0800500223"><Phone size={16} /> Call 0800 500 223</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const lifeInsuranceProcess = [
  ["Understand your circumstances", "We discuss your household, income, commitments, dependants and existing arrangements."],
  ["Consider the financial impact", "We look at what financial needs could arise if you were no longer there."],
  ["Review appropriate options", "We help you understand suitable types and levels of cover and important differences between options."],
  ["Arrange the cover", "If you choose to proceed, Assured helps you through the application process."],
];

const lifeInsuranceFaqs = [
  ["How much life insurance do I need?", "There is no single figure that is right for everyone. It depends on factors such as debts, dependants, household income, savings and what you want the insurance to provide."],
  ["Can I review life insurance I already have?", "Yes. Existing cover can be considered alongside your current circumstances and financial commitments."],
  ["Do I need life insurance if I have no children?", "Not necessarily. The relevant question is whether your death would create a financial problem for another person or leave commitments that need to be met."],
  ["Can Assured help clients outside Nelson?", "Yes. Assured is based in Nelson but works with clients elsewhere in New Zealand."],
];

function LifeInsurancePage() {
  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/insurance/">Insurance</Link></li>
          <li aria-current="page">Life Insurance</li>
        </ol>
      </nav>

      <section className="hero lifeInsuranceHero" style={{ backgroundImage: `linear-gradient(90deg, rgba(255,255,255,.96), rgba(255,255,255,.78) 54%, rgba(255,255,255,.2)), url("${assets.homeHero}")` }}>
        <div className="heroInner">
          <p className="eyebrow">Personal insurance advice</p>
          <h1>Life Insurance Advice in Nelson</h1>
          <p>Life insurance can help provide financial support for the people who depend on you if you die.</p>
          <p className="hubHeroSupporting">Assured Group helps you consider how much protection may be appropriate, what you want the cover to achieve and how life insurance fits alongside your other financial arrangements.</p>
          <div className="heroActions">
            <Link href="/contact/" className="button primary">Talk to an insurance adviser <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="nelsonSection lifeInsuranceNeeds">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro">
            <h2>What would happen financially if you weren't there?</h2>
            <p>Life insurance is designed to help reduce the financial impact of your death on the people who rely on you.</p>
            <p>The amount and type of cover worth considering depends on your circumstances. That may include your mortgage and other debts, your family's living costs, children or other dependants, and any savings or existing insurance you already have.</p>
          </div>
          <div className="nelsonFeatureGrid">
            <article><UserRound size={25} /><h3>Family and dependants</h3><p>Consider the financial support people who depend on you may need if your income or contribution to the household disappeared.</p></article>
            <article><Home size={25} /><h3>Mortgage and debts</h3><p>Consider whether outstanding borrowing could create financial pressure for your family.</p></article>
            <article><ShieldCheck size={25} /><h3>Longer-term needs</h3><p>Think beyond immediate bills to future commitments, education, household costs and other responsibilities.</p></article>
          </div>
        </div>
      </section>

      <section className="nelsonSection lifeInsuranceConsider">
        <div className="nelsonContainer lifeInsuranceContent">
          <h2>When might life insurance be worth considering?</h2>
          <ul className="lifeInsuranceList">
            <li>You have a partner or family who depends on your income.</li>
            <li>You have children or other financial dependants.</li>
            <li>You have a mortgage or substantial debts.</li>
            <li>You own a business or have financial responsibilities to business partners.</li>
            <li>Your family's financial position would change significantly if you died.</li>
          </ul>
          <p>These are examples rather than rules. The right approach depends on your own financial position and priorities.</p>
        </div>
      </section>

      <section className="nelsonSection lifeInsuranceAdvice">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro">
            <h2>How we help with life insurance</h2>
            <p>Good life insurance advice starts with the financial problem you want the cover to solve, rather than with a predetermined amount of insurance.</p>
          </div>
          <ol className="nelsonProcessList">
            {lifeInsuranceProcess.map(([title, text], index) => (
              <li key={title}><span aria-hidden="true">{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="nelsonSection lifeInsuranceRelated">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro"><h2>Related insurance options</h2></div>
          <div className="lifeInsuranceRelatedGrid">
            <article className="nelsonServiceCard"><h3>Trauma Insurance</h3><p>Protection following specified serious illnesses or medical conditions.</p><Link href="/insurance/trauma/">Trauma insurance advice <ArrowRight size={15} /></Link></article>
            <article className="nelsonServiceCard"><h3>Income Protection</h3><p>Consider protection if illness or injury prevents you from earning an income.</p><Link href="/insurance/income-protection/">Income protection advice <ArrowRight size={15} /></Link></article>
            <article className="nelsonServiceCard"><h3>Mortgage Protection</h3><p>Consider how your mortgage could be managed if your income were disrupted.</p><Link href="/insurance/mortgage-protection/">Mortgage protection advice <ArrowRight size={15} /></Link></article>
          </div>
        </div>
      </section>

      <section className="nelsonSection nelsonAdviser">
        <div className="nelsonContainer nelsonAdviserGrid">
          <img src={assets.bob} alt="Bob Llewellyn of Assured Group" />
          <div>
            <p className="eyebrow">Personal advice</p>
            <h2>Life insurance advice from the Assured team</h2>
            <p>Assured Group is based in Nelson and works with clients locally and throughout New Zealand.</p>
            <p>Clients currently work directly with Bob Llewellyn, an experienced financial adviser with more than 15 years in financial services in New Zealand and the UK.</p>
            <Link className="nelsonTextLink" href="/about-bob/">Meet Bob <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="nelsonSection nelsonFaq">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro"><h2>Life insurance questions</h2></div>
          <div className="nelsonFaqList">
            {lifeInsuranceFaqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="nelsonFinalCta">
        <div className="nelsonContainer"><div className="nelsonCtaPanel">
          <h2>Talk about what you need to protect</h2>
          <p>If you're considering life insurance or want to review cover you already have, start with a conversation about your circumstances.</p>
          <div className="heroActions"><Link href="/contact/" className="button primary">Talk to an insurance adviser <ArrowRight size={16} /></Link></div>
        </div></div>
      </section>
    </>
  );
}

const healthInsuranceProcess = [
  ["Understand your priorities", "We discuss what you want health insurance to achieve and any existing cover you have."],
  ["Consider appropriate cover", "We help identify policy options relevant to your circumstances."],
  ["Understand the differences", "We explain important features, restrictions and trade-offs so that you can compare options properly."],
  ["Apply with support", "If you choose to proceed, Assured can help through the application process."],
];

const healthInsuranceFaqs = [
  ["What should I look for in health insurance?", "Consider the types of treatment covered, exclusions, limits, conditions and the premium, as well as what you personally want the policy to provide."],
  ["Can I review an existing health insurance policy?", "Yes. Existing cover can be reviewed against your current circumstances and priorities."],
  ["Is the cheapest health insurance always best?", "Not necessarily. A lower premium may reflect differences in cover, limits or other policy terms, so the overall policy needs to be considered."],
  ["Do I need to live in Nelson?", "No. Assured Group works with clients elsewhere in New Zealand as well as in the Nelson region."],
];

function HealthInsurancePage() {
  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/insurance/">Insurance</Link></li>
          <li aria-current="page">Health Insurance</li>
        </ol>
      </nav>

      <section className="hero lifeInsuranceHero" style={{ backgroundImage: `linear-gradient(90deg, rgba(255,255,255,.96), rgba(255,255,255,.78) 54%, rgba(255,255,255,.2)), url("${assets.homeHero}")` }}>
        <div className="heroInner">
          <p className="eyebrow">Personal insurance advice</p>
          <h1>Health Insurance Advice in Nelson</h1>
          <p>Private health insurance can provide access to additional options for medical treatment, but policies can differ significantly in what they cover.</p>
          <p className="hubHeroSupporting">Assured Group helps you understand those differences and consider health insurance based on your circumstances, priorities and budget.</p>
          <div className="heroActions"><Link href="/contact/" className="button primary">Talk to an insurance adviser <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section className="nelsonSection">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro">
            <h2>Choosing health insurance is about more than price</h2>
            <p>Different policies can provide different levels of cover, exclusions, limits and conditions. The lowest premium is therefore not necessarily the most appropriate option for your needs.</p>
          </div>
          <div className="nelsonFeatureGrid">
            <article><HeartPulse size={25} /><h3>What is covered?</h3><p>Understand the kinds of treatment and services included by a policy.</p></article>
            <article><ShieldCheck size={25} /><h3>What are the limits?</h3><p>Consider exclusions, policy limits and other conditions that may affect claims.</p></article>
            <article><UserRound size={25} /><h3>What matters to you?</h3><p>Balance the level of protection you want against what you are comfortable paying.</p></article>
          </div>
        </div>
      </section>

      <section className="nelsonSection lifeInsuranceAdvice">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro">
            <h2>How health insurance advice can help</h2>
            <p>An adviser can help you look beyond headline premiums and understand the practical differences between available options.</p>
          </div>
          <ol className="nelsonProcessList">
            {healthInsuranceProcess.map(([title, text], index) => (
              <li key={title}><span aria-hidden="true">{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="nelsonSection lifeInsuranceRelated">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro"><h2>Other personal insurance</h2></div>
          <div className="lifeInsuranceRelatedGrid">
            <article className="nelsonServiceCard"><h3>Life Insurance</h3><p>Financial protection for people who depend on you.</p><Link href="/insurance/life/">Life insurance advice <ArrowRight size={15} /></Link></article>
            <article className="nelsonServiceCard"><h3>Trauma Insurance</h3><p>Financial support following specified serious medical events.</p><Link href="/insurance/trauma/">Trauma insurance advice <ArrowRight size={15} /></Link></article>
            <article className="nelsonServiceCard"><h3>Income Protection</h3><p>Consider protection if your health affects your ability to work.</p><Link href="/insurance/income-protection/">Income protection advice <ArrowRight size={15} /></Link></article>
          </div>
        </div>
      </section>

      <section className="nelsonSection nelsonAdviser">
        <div className="nelsonContainer nelsonAdviserGrid">
          <img src={assets.bob} alt="Bob Llewellyn of Assured Group" />
          <div>
            <p className="eyebrow">Personal advice</p>
            <h2>Health insurance advice from the Assured team</h2>
            <p>Assured Group is based in Nelson and provides personal insurance advice to clients locally and elsewhere in New Zealand.</p>
            <p>Clients currently work directly with Bob Llewellyn, an experienced financial adviser.</p>
            <Link className="nelsonTextLink" href="/about-bob/">Meet Bob <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="nelsonSection nelsonFaq">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro"><h2>Health insurance questions</h2></div>
          <div className="nelsonFaqList">
            {healthInsuranceFaqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="nelsonFinalCta">
        <div className="nelsonContainer"><div className="nelsonCtaPanel">
          <h2>Understand your health insurance options</h2>
          <p>Talk to Assured about what you want from health insurance and the options available to you.</p>
          <div className="heroActions"><Link href="/contact/" className="button primary">Talk to an insurance adviser <ArrowRight size={16} /></Link></div>
        </div></div>
      </section>
    </>
  );
}

const incomeProtectionProcess = [
  ["Understand your income and commitments", "We look at what you earn and the financial responsibilities that depend on that income."],
  ["Review existing protection", "Existing savings, employer benefits and insurance can form part of the overall picture."],
  ["Consider appropriate options", "We explain relevant choices and the practical differences between them."],
  ["Arrange cover", "If you decide to proceed, we help with the application process."],
];

const incomeProtectionFaqs = [
  ["Who might consider income protection?", "Anyone whose financial position would be significantly affected by an extended period without earned income may want to consider it."],
  ["What if my employer already provides sick pay?", "Existing employer benefits should be taken into account when considering whether additional protection is appropriate."],
  ["How much cover should I have?", "That depends on your income, financial commitments, existing protection and the level of risk you can manage yourself."],
];

function IncomeProtectionPage() {
  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/insurance/">Insurance</Link></li>
          <li aria-current="page">Income Protection</li>
        </ol>
      </nav>

      <section className="hero lifeInsuranceHero" style={{ backgroundImage: `linear-gradient(90deg, rgba(255,255,255,.94), rgba(255,255,255,.7) 52%, rgba(255,255,255,.18)), url("${assets.financeHero}")` }}>
        <div className="heroInner">
          <p className="eyebrow">Protecting your income</p>
          <h1>Income Protection Insurance Advice in Nelson</h1>
          <p>Your income supports almost everything else in your financial life. If illness or injury stopped you working, how long could you continue meeting your normal commitments?</p>
          <p className="hubHeroSupporting">Assured Group helps you consider whether income protection is appropriate and how different cover options fit your circumstances.</p>
          <div className="heroActions"><Link href="/contact/" className="button primary">Talk to an insurance adviser <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section className="nelsonSection">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro">
            <h2>What depends on your income?</h2>
            <p>Most households have commitments that continue even when earnings stop. Income protection is intended to help manage that risk when illness or injury affects your ability to work.</p>
          </div>
          <div className="nelsonFeatureGrid">
            <article><CircleDollarSign size={25} /><h3>Everyday living costs</h3><p>Household expenses still need to be met if your income falls.</p></article>
            <article><Home size={25} /><h3>Mortgage and borrowing</h3><p>Regular loan repayments may represent one of your largest ongoing commitments.</p></article>
            <article><ShieldCheck size={25} /><h3>Long-term financial plans</h3><p>A prolonged interruption to earnings can affect savings, investment and other financial goals.</p></article>
          </div>
        </div>
      </section>

      <section className="nelsonSection incomeProtectionOptions">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro">
            <h2>Income protection is not one-size-fits-all</h2>
            <p>Appropriate cover depends on factors such as your occupation, income, existing benefits, financial commitments and the amount of risk you can comfortably retain yourself.</p>
          </div>
          <div className="nelsonFeatureGrid">
            <article><CircleDollarSign size={25} /><h3>How much income?</h3><p>Consider what level of financial support you would realistically need.</p></article>
            <article><CheckCircle2 size={25} /><h3>When would payments begin?</h3><p>Different arrangements may involve different waiting periods before benefits become payable.</p></article>
            <article><HeartPulse size={25} /><h3>How long might support be needed?</h3><p>The appropriate benefit period depends on the protection you want and your broader financial circumstances.</p></article>
          </div>
        </div>
      </section>

      <section className="nelsonSection lifeInsuranceAdvice">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro"><h2>How we help</h2></div>
          <ol className="nelsonProcessList">
            {incomeProtectionProcess.map(([title, text], index) => (
              <li key={title}><span aria-hidden="true">{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="nelsonSection lifeInsuranceRelated">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro"><h2>Related protection</h2></div>
          <div className="lifeInsuranceRelatedGrid">
            <article className="nelsonServiceCard"><h3>Mortgage Protection</h3><p>Protection focused on keeping mortgage repayments manageable if your income is interrupted.</p><Link href="/insurance/mortgage-protection/">Mortgage protection advice <ArrowRight size={15} /></Link></article>
            <article className="nelsonServiceCard"><h3>Trauma Insurance</h3><p>Financial support following specified serious illnesses or medical events.</p><Link href="/insurance/trauma/">Trauma insurance advice <ArrowRight size={15} /></Link></article>
            <article className="nelsonServiceCard"><h3>Life Insurance</h3><p>Financial protection for the people who depend on you.</p><Link href="/insurance/life/">Life insurance advice <ArrowRight size={15} /></Link></article>
          </div>
        </div>
      </section>

      <section className="nelsonSection nelsonFaq">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro"><h2>Income protection questions</h2></div>
          <div className="nelsonFaqList">
            {incomeProtectionFaqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="nelsonFinalCta">
        <div className="nelsonContainer"><div className="nelsonCtaPanel">
          <h2>What if your income stopped?</h2>
          <p>Talk to Assured about your financial commitments and whether income protection could form part of your overall insurance arrangements.</p>
          <div className="heroActions"><Link href="/contact/" className="button primary">Talk to an insurance adviser <ArrowRight size={16} /></Link></div>
        </div></div>
      </section>
    </>
  );
}

const mortgageProtectionProcess = [
  ["Understand the mortgage commitment", "We consider the borrowing and regular payments you want to protect."],
  ["Consider your household finances", "We discuss income, savings, other commitments and existing protection."],
  ["Review protection options", "We explain relevant forms of cover and how they may interact with one another."],
  ["Decide what fits", "You decide how much risk you want to insure and what you are comfortable managing yourself."],
];

const mortgageProtectionFaqs = [
  ["Is mortgage protection the same as life insurance?", "They address related financial risks but are not necessarily the same type of cover. The appropriate combination depends on what you want to protect."],
  ["Do I have to arrange mortgage protection when I take out a mortgage?", "Your insurance needs should be considered separately according to your circumstances and the requirements applicable to your lending arrangement."],
  ["Can Assured arrange both mortgage and insurance advice?", "Yes. Assured provides advice in both areas, allowing the borrowing and protection questions to be considered together where appropriate."],
];

function MortgageProtectionPage() {
  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/insurance/">Insurance</Link></li>
          <li aria-current="page">Mortgage Protection</li>
        </ol>
      </nav>

      <section className="hero lifeInsuranceHero" style={{ backgroundImage: `linear-gradient(90deg, rgba(255,255,255,.94), rgba(255,255,255,.7) 52%, rgba(255,255,255,.18)), url("${assets.financeHero}")` }}>
        <div className="heroInner">
          <p className="eyebrow">Protecting your home finances</p>
          <h1>Mortgage Protection Insurance Advice in Nelson</h1>
          <p>A mortgage is often one of a household's largest regular financial commitments. If your income were seriously disrupted, keeping up with those payments could become difficult.</p>
          <p className="hubHeroSupporting">Assured Group helps you consider how mortgage protection may fit alongside your wider insurance and financial arrangements.</p>
          <div className="heroActions"><Link href="/contact/" className="button primary">Talk to an insurance adviser <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section className="nelsonSection">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro">
            <h2>Could you keep paying your mortgage if your circumstances changed?</h2>
            <p>Mortgage protection is intended to address the financial risk created when circumstances covered by a policy affect your ability to meet mortgage commitments.</p>
            <p>The appropriate approach depends on your mortgage, income, household finances, savings and other insurance arrangements.</p>
          </div>
          <div className="nelsonFeatureGrid">
            <article><Home size={25} /><h3>Your mortgage</h3><p>Consider the size and structure of the financial commitment you need to protect.</p></article>
            <article><CircleDollarSign size={25} /><h3>Your household income</h3><p>Consider how repayments would be managed if one person's income were interrupted.</p></article>
            <article><ShieldCheck size={25} /><h3>Your existing protection</h3><p>Savings, employer benefits and other insurance should form part of the assessment.</p></article>
          </div>
        </div>
      </section>

      <section className="nelsonSection mortgageProtectionConnection">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro">
            <p className="eyebrow">A joined-up approach</p>
            <h2>Mortgage advice and protection can be considered together</h2>
            <p>Buying a home involves more than arranging the loan itself. It can also be useful to consider what would happen to that commitment if your circumstances changed later.</p>
            <p>Assured provides both mortgage and insurance advice, allowing those questions to be considered as part of the wider financial picture.</p>
            <Link className="nelsonTextLink" href="/mortgages/nelson/">Mortgage broker and home loan advice in Nelson <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="nelsonSection lifeInsuranceAdvice">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro"><h2>How we help</h2></div>
          <ol className="nelsonProcessList">
            {mortgageProtectionProcess.map(([title, text], index) => (
              <li key={title}><span aria-hidden="true">{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="nelsonSection lifeInsuranceRelated">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro"><h2>Other protection worth considering</h2></div>
          <div className="lifeInsuranceRelatedGrid">
            <article className="nelsonServiceCard"><h3>Income Protection</h3><p>Consider protection if illness or injury prevents you from earning an income.</p><Link href="/insurance/income-protection/">Income protection advice <ArrowRight size={15} /></Link></article>
            <article className="nelsonServiceCard"><h3>Life Insurance</h3><p>Financial protection for the people who depend on you.</p><Link href="/insurance/life/">Life insurance advice <ArrowRight size={15} /></Link></article>
            <article className="nelsonServiceCard"><h3>Trauma Insurance</h3><p>Financial support following specified serious illnesses or medical events.</p><Link href="/insurance/trauma/">Trauma insurance advice <ArrowRight size={15} /></Link></article>
          </div>
        </div>
      </section>

      <section className="nelsonSection nelsonFaq">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro"><h2>Mortgage protection questions</h2></div>
          <div className="nelsonFaqList">
            {mortgageProtectionFaqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="nelsonFinalCta">
        <div className="nelsonContainer"><div className="nelsonCtaPanel">
          <h2>Protect the commitment behind your home</h2>
          <p>Talk to Assured about your mortgage, household finances and the protection options available to you.</p>
          <div className="heroActions"><Link href="/contact/" className="button primary">Talk to an insurance adviser <ArrowRight size={16} /></Link></div>
        </div></div>
      </section>
    </>
  );
}

const traumaInsuranceProcess = [
  ["Understand your financial position", "We discuss income, savings, debts, dependants and other protection you already have."],
  ["Consider the financial risk", "We look at how a serious illness could affect your finances and what support you might want available."],
  ["Review the options", "We help you understand available cover and important policy differences."],
  ["Arrange appropriate cover", "If you decide to proceed, Assured supports you through the application."],
];

const traumaInsuranceFaqs = [
  ["What is trauma insurance?", "Trauma insurance provides a benefit when the conditions specified by a policy are satisfied following a covered serious illness or medical event."],
  ["Is trauma insurance the same as health insurance?", "No. They are designed to address different financial risks. Health insurance relates to eligible healthcare costs or treatment, while trauma cover provides a benefit following conditions specified in the policy."],
  ["How much trauma cover should I have?", "Appropriate cover depends on your finances, household responsibilities, existing insurance and what financial support you would want following a serious illness."],
  ["Can trauma cover be considered alongside life insurance?", "Yes. Different forms of insurance can be considered together as part of an overall protection strategy."],
];

function TraumaInsurancePage() {
  return (
    <>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/insurance/">Insurance</Link></li>
          <li aria-current="page">Trauma Insurance</li>
        </ol>
      </nav>

      <section className="hero lifeInsuranceHero" style={{ backgroundImage: `linear-gradient(90deg, rgba(255,255,255,.94), rgba(255,255,255,.7) 52%, rgba(255,255,255,.18)), url("${assets.financeHero}")` }}>
        <div className="heroInner">
          <p className="eyebrow">Protection for serious illness</p>
          <h1>Trauma Insurance Advice in Nelson</h1>
          <p>A serious illness or medical event can affect much more than your health. It can also affect income, household finances and the choices available to you while you recover.</p>
          <p className="hubHeroSupporting">Trauma insurance can provide financial support following specified medical conditions covered by a policy. Assured Group helps you understand how that protection may fit your circumstances.</p>
          <div className="heroActions"><Link href="/contact/" className="button primary">Talk to an insurance adviser <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section className="nelsonSection">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro">
            <h2>Financial breathing room when health becomes the priority</h2>
            <p>The financial consequences of serious illness can include more than medical costs. You may work less, take time away from employment, change household arrangements or face additional expenses.</p>
            <p>Trauma cover is intended to provide money following qualifying events specified in the policy, giving you more financial flexibility at a difficult time.</p>
          </div>
          <div className="nelsonFeatureGrid">
            <article><CircleDollarSign size={25} /><h3>Household expenses</h3><p>Help manage normal financial commitments while circumstances are disrupted.</p></article>
            <article><BriefcaseBusiness size={25} /><h3>Time away from work</h3><p>Financial support may provide greater flexibility if recovery affects employment.</p></article>
            <article><HeartPulse size={25} /><h3>Additional costs</h3><p>Serious illness may create costs or financial decisions that were not previously expected.</p></article>
          </div>
        </div>
      </section>

      <section className="nelsonSection traumaPolicyDetail">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro">
            <p className="eyebrow">Policy details</p>
            <h2>Understanding what a trauma policy covers matters</h2>
            <p>Trauma insurance policies can differ in the medical conditions covered, the definitions used and the conditions that must be met before a benefit is payable.</p>
            <p>That makes the detail of the cover important. Advice can help you understand those differences rather than comparing policies only on price.</p>
          </div>
        </div>
      </section>

      <section className="nelsonSection lifeInsuranceAdvice">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro"><h2>How we help with trauma insurance</h2></div>
          <ol className="nelsonProcessList">
            {traumaInsuranceProcess.map(([title, text], index) => (
              <li key={title}><span aria-hidden="true">{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="nelsonSection lifeInsuranceRelated">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro"><h2>How trauma cover fits with other insurance</h2></div>
          <div className="lifeInsuranceRelatedGrid">
            <article className="nelsonServiceCard"><h3>Health Insurance</h3><p>Cover intended to address different aspects of medical treatment and healthcare.</p><Link href="/insurance/health/">Health insurance advice <ArrowRight size={15} /></Link></article>
            <article className="nelsonServiceCard"><h3>Income Protection</h3><p>Protection focused on the financial effect of being unable to work.</p><Link href="/insurance/income-protection/">Income protection advice <ArrowRight size={15} /></Link></article>
            <article className="nelsonServiceCard"><h3>Life Insurance</h3><p>Financial protection for people who depend on you if you die.</p><Link href="/insurance/life/">Life insurance advice <ArrowRight size={15} /></Link></article>
          </div>
        </div>
      </section>

      <section className="nelsonSection nelsonFaq">
        <div className="nelsonContainer">
          <div className="nelsonSectionIntro"><h2>Trauma insurance questions</h2></div>
          <div className="nelsonFaqList">
            {traumaInsuranceFaqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="nelsonFinalCta">
        <div className="nelsonContainer"><div className="nelsonCtaPanel">
          <h2>Understand how trauma cover could fit your circumstances</h2>
          <p>Talk to Assured about your financial risks, existing protection and the options available.</p>
          <div className="heroActions"><Link href="/contact/" className="button primary">Talk to an insurance adviser <ArrowRight size={16} /></Link></div>
        </div></div>
      </section>
    </>
  );
}

function DisclosurePage() {
  return (
    <>
      <Hero page={{
        eyebrow: "Disclosure Information",
        title: "Important information about Assured Limited.",
        intro: "An overview of Assured Limited, duties to clients, fees and how complaints are managed.",
        image: assets.contactHero,
      }} />
      <section className="article">
        {disclosureSections.map(([title, text]) => (
          <div className="disclosureBlock" key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        ))}
      </section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <Hero page={{
        eyebrow: "Contact Assured Group",
        title: "Contact Assured Group",
        intro: "Send a message or call the team about mortgages, insurance or business finance.",
        image: assets.contactHero,
      }} />
      <section className="contactPage">
        <form>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Subject" />
          <input placeholder="Phone" />
          <textarea placeholder="Message" rows="5" />
          <button type="button">Submit</button>
        </form>
        <aside>
          <h2>Assured Limited</h2>
          <p><Mail size={16} /> admin@assuredgroup.co.nz</p>
          <p><Phone size={16} /> 0800 500 223</p>
          <p><MapPin size={16} /> PO Box 1609, Nelson 7040, New Zealand</p>
          <div className="miniBob">
            <img src={assets.bob} alt="Bob Llewellyn" />
            <span>Bob Llewellyn<br />Financial & Mortgage Adviser</span>
          </div>
        </aside>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer>
      <img src={assets.logo} alt="" />
      <p>©2026 by Assured Group Limited, Nelson.</p>
      <p>0800 500 223</p>
      <Link href="/disclosure/" className="footerLink">Disclosure Statement</Link>
    </footer>
  );
}

function App() {
  const readHashPath = () => window.location.hash.replace(/^#/, "") || "/";
  const [path, setPath] = React.useState(readHashPath);
  React.useEffect(() => {
    const update = () => setPath(readHashPath());
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  React.useEffect(() => {
    const metadata = {
      "/mortgages/nelson/": {
        title: "Mortgage Broker Nelson | Home Loan & Mortgage Advice | Assured Group",
        description: "Looking for a mortgage broker in Nelson? Assured Group provides personal mortgage and home loan advice for first-home buyers, refinancing, investors and other borrowers in Nelson and across New Zealand.",
        canonical: "https://www.assuredgroup.co.nz/mortgages/nelson/",
      },
      "/insurance/": {
        title: "Insurance Brokers & Advisers in Nelson | Assured Group",
        description: "Personal insurance advice in Nelson from Assured Group. Get help with life, health, trauma, income protection and other insurance needs.",
        canonical: "https://www.assuredgroup.co.nz/insurance/",
      },
      "/insurance/life/": {
        title: "Life Insurance Advice in Nelson | Assured Group",
        description: "Life insurance advice in Nelson from Assured Group. Understand your options and choose cover based on your family, financial commitments and circumstances.",
        canonical: "https://www.assuredgroup.co.nz/insurance/life/",
      },
      "/insurance/health/": {
        title: "Health Insurance Advice in Nelson | Assured Group",
        description: "Health insurance advice in Nelson from Assured Group. Understand private health insurance options, policy differences and cover based on your needs.",
        canonical: "https://www.assuredgroup.co.nz/insurance/health/",
      },
      "/insurance/income-protection/": {
        title: "Income Protection Insurance Nelson | Assured Group",
        description: "Income protection insurance advice in Nelson from Assured Group. Consider how you could manage financially if illness or injury prevented you from working.",
        canonical: "https://www.assuredgroup.co.nz/insurance/income-protection/",
      },
      "/insurance/mortgage-protection/": {
        title: "Mortgage Protection Insurance Nelson | Assured Group",
        description: "Mortgage protection insurance advice in Nelson from Assured Group. Consider how your mortgage could be managed if illness, injury or another insured event affects your income.",
        canonical: "https://www.assuredgroup.co.nz/insurance/mortgage-protection/",
      },
      "/insurance/trauma/": {
        title: "Trauma Insurance Advice in Nelson | Assured Group",
        description: "Trauma insurance advice in Nelson from Assured Group. Understand how trauma cover may provide financial support following specified serious illnesses or medical events.",
        canonical: "https://www.assuredgroup.co.nz/insurance/trauma/",
      },
    };
    const pageMetadata = metadata[path] || {
      title: "Mortgage & Insurance Advice in Nelson | Assured Group",
      description: "Personal mortgage, insurance and business finance advice in Nelson from Assured Group. Clear, practical advice built around your circumstances and goals.",
      canonical: "https://www.assuredgroup.co.nz/",
    };

    document.documentElement.lang = "en-NZ";
    document.title = pageMetadata.title;

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = pageMetadata.description;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = pageMetadata.canonical;
  }, [path]);

  let page = <HomePage />;
  if (path === "/contact/") page = <ContactPage />;
  else if (path === "/disclosure/") page = <DisclosurePage />;
  else if (path === "/mortgages/nelson/") page = <NelsonMortgagePage />;
  else if (path === "/insurance/") page = <InsuranceHubPage />;
  else if (path === "/insurance/life/") page = <LifeInsurancePage />;
  else if (path === "/insurance/health/") page = <HealthInsurancePage />;
  else if (path === "/insurance/income-protection/") page = <IncomeProtectionPage />;
  else if (path === "/insurance/mortgage-protection/") page = <MortgageProtectionPage />;
  else if (path === "/insurance/trauma/") page = <TraumaInsurancePage />;
  else if (pageCopy[path]) page = <LandingPage page={pageCopy[path]} />;
  else if (servicePages[path]) page = <DetailPage page={servicePages[path]} />;
  else if (path !== "/") page = <DetailPage page={{ title: "Assured Group", intro: "Prototype page for the proposed Assured Group website structure.", paragraphs: ["Assured provides mortgage, finance and insurance advice for Nelson, Richmond and wider Tasman clients."], cta: "Talk to the team" }} />;

  return (
    <>
      <Header />
      <main>{page}</main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
