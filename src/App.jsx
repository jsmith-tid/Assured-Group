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
  MapPin,
  Phone,
  ShieldCheck,
  UserRound,
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

function Link({ href, children, className }) {
  return (
    <a
      className={className}
      href={`#${href}`}
      onClick={(event) => {
        event.preventDefault();
        go(href);
      }}
    >
      {children}
    </a>
  );
}

function Header() {
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
        <nav>
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
    ["Mortgages", "Home loans, first-home buyers, refinancing, investment lending and bridging loans.", "/mortgages/", Home],
    ["Insurance", "Life, health, income, mortgage protection, trauma and key person insurance.", "/insurance/", HeartPulse],
    ["Business", "Business protection, key person cover, commercial property finance and cash-flow lending.", "/business/", BriefcaseBusiness],
  ];
  return (
    <>
      <Hero page={{
        eyebrow: "Insurance and Finance",
        title: "Insurance and Finance",
        intro: "A name you can trust when it comes to your finance and insurance needs, with personalised service and access to a wide range of banks, lenders and insurers.",
        image: assets.homeHero,
      }} />
      <section className="introBand">
        <div className="introText">
          <h2>Personal advice, practical options and peace of mind.</h2>
          <p>
            Assured does the market work so you do not have to. We listen to your needs and goals, match you with appropriate products, and provide ongoing advice and service for lending and insurance decisions.
          </p>
        </div>
        <div className="serviceCards">
          {services.map(([title, text, href, Icon]) => (
            <Link href={href} className="serviceCard" key={title}>
              <Icon size={30} />
              <h3>{title}</h3>
              <p>{text}</p>
            </Link>
          ))}
        </div>
      </section>
      <Process />
      <BobPanel cta="Talk to the team about finance or insurance" />
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

  let page = <HomePage />;
  if (path === "/contact/") page = <ContactPage />;
  else if (path === "/disclosure/") page = <DisclosurePage />;
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
