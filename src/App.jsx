import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
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
      ["Mortgage Broker Nelson", "/mortgages/nelson/"],
      ["First Home Buyers", "/mortgages/first-home-buyers/"],
      ["Refinancing", "/mortgages/refinancing/"],
      ["Investment Property", "/mortgages/investment-property/"],
      ["Bridging Loans", "/mortgages/bridging-loans/"],
      ["Commercial / Business Finance", "/mortgages/commercial-business-finance/"],
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
      ["Bob Llewellyn", "/about-bob/"],
      ["Why use an adviser?", "/about-bob/why-use-an-adviser/"],
      ["How the process works", "/about-bob/process/"],
      ["Disclosure / regulatory information", "/about-bob/disclosure/"],
    ],
  },
  {
    label: "Resources",
    href: "/resources/",
    children: [
      ["FAQs", "/resources/faqs/"],
      ["Useful guides / articles", "/resources/guides/"],
    ],
  },
  { label: "Contact", href: "/contact/" },
];

const pageCopy = {
  "/mortgages/": {
    eyebrow: "Mortgages and Finance",
    title: "Home loan advice for Nelson, Richmond and Tasman.",
    intro:
      "Bob helps first-home buyers, homeowners and property investors compare lending options and move through the mortgage process with confidence.",
    image: assets.financeHero,
    icon: Home,
    sections: ["Home Loans", "First Home Buyers", "Refinancing", "Investment Property"],
  },
  "/mortgages/nelson/": {
    eyebrow: "Mortgage Broker Nelson",
    title: "A local mortgage adviser who knows the Nelson market.",
    intro:
      "Talk with Bob about borrowing options, pre-approval, refinancing and lender choice, with advice shaped around Nelson, Richmond and wider Tasman buyers.",
    image: assets.financeHero,
    icon: Home,
    sections: ["Pre-approval", "Deposit options", "Lender selection", "Negotiation support"],
  },
  "/insurance/": {
    eyebrow: "Insurance Advice",
    title: "Life, health and income protection advice built around real families.",
    intro:
      "Assured gives you a clear overview of the insurance market and helps match your cover to your household, income and long-term plans.",
    image: assets.homeHero,
    icon: HeartPulse,
    sections: ["Life Insurance", "Health Insurance", "Income Protection", "Trauma Cover"],
  },
  "/business/": {
    eyebrow: "Business Advice",
    title: "Protect the people, cash flow and finance behind your business.",
    intro:
      "From key person cover to commercial finance, Bob works with Nelson and Tasman business owners who need practical advice and a personal point of contact.",
    image: assets.financeHero,
    icon: BriefcaseBusiness,
    sections: ["Key Person Insurance", "Business Protection", "Commercial Finance", "Succession planning"],
  },
  "/about-bob/": {
    eyebrow: "Bob Llewellyn",
    title: "Personal advice from a Nelson-based mortgage and insurance adviser.",
    intro:
      "Bob is the person clients deal with directly. He listens carefully, explains the options plainly and stays involved from the first conversation through to recommendation and review.",
    image: assets.bob,
    icon: UserRound,
    sections: ["Financial & Mortgage Adviser", "Life and Risk Insurance Adviser", "FSP No: 99484", "Nelson and Tasman focused"],
  },
};

const servicePages = {
  "/mortgages/first-home-buyers/": ["First Home Buyers", "Buying your first home is easier when someone explains deposits, approvals, grants and lender expectations in plain language."],
  "/mortgages/refinancing/": ["Refinancing", "Review your current lending, compare options and understand whether switching could put you in a stronger position."],
  "/mortgages/investment-property/": ["Investment Property", "Shape lending around your property goals, cash flow and long-term investment strategy."],
  "/mortgages/bridging-loans/": ["Bridging Loans", "Bridge the gap between buying and selling with advice on structure, repayments and lender requirements."],
  "/mortgages/commercial-business-finance/": ["Commercial / Business Finance", "Access lending options for business growth, property purchase, cash flow and refinancing."],
  "/insurance/life/": ["Life Insurance", "Protect your family and financial commitments with cover that reflects your situation and priorities."],
  "/insurance/health/": ["Health Insurance", "Compare health insurance options and choose cover that supports access to care when it matters."],
  "/insurance/income-protection/": ["Income Protection", "Plan for the financial impact of illness or injury affecting your ability to work."],
  "/insurance/mortgage-protection/": ["Mortgage Protection", "Help keep home loan repayments manageable if life takes an unexpected turn."],
  "/insurance/trauma/": ["Trauma Insurance", "Create a lump-sum safety net for serious health events and recovery time."],
  "/business/key-person-insurance/": ["Key Person Insurance", "Protect the business impact of losing a key owner, operator or revenue-generating person."],
  "/business/business-protection/": ["Business Protection", "Build insurance arrangements around ownership, continuity and future planning."],
  "/business/commercial-finance/": ["Commercial Finance", "Find commercial lending options for Nelson and Tasman businesses."],
  "/about-bob/why-use-an-adviser/": ["Why use an adviser?", "A good adviser helps compare options, explain trade-offs and save clients from dealing with lenders and insurers alone."],
  "/about-bob/process/": ["How the process works", "Start with a conversation, clarify the goal, compare suitable options and move forward with a clear recommendation."],
  "/about-bob/disclosure/": ["Disclosure / regulatory information", "A prototype page for disclosure information, adviser details and regulatory material."],
  "/resources/": ["Resources", "Useful guides and answers for mortgage, insurance and business finance questions."],
  "/resources/faqs/": ["FAQs", "Clear answers to common questions about working with Bob and Assured Group."],
  "/resources/guides/": ["Useful guides / articles", "A small library of genuinely useful local finance and insurance guides."],
};

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
          <Link href="/contact/" className="button primary">Talk To Bob <ArrowRight size={16} /></Link>
          <Link href="/about-bob/" className="button secondary">Learn More</Link>
        </div>
      </div>
    </section>
  );
}

function BobPanel() {
  return (
    <section className="bobBand">
      <div className="bobWrap">
        <img src={assets.bob} alt="Bob Llewellyn, Assured Group adviser" />
        <div>
          <p className="eyebrow">Contact our adviser</p>
          <h2>Bob Llewellyn</h2>
          <p className="role">Financial & Mortgage Adviser | Life and Risk Insurance Adviser</p>
          <p>
            Bob is the central point of contact for advice across mortgages, insurance and business finance. He works locally with Nelson, Richmond and Tasman clients.
          </p>
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
    ["Mortgages", "Home loans, first-home buyers, refinancing and investment lending.", "/mortgages/", Home],
    ["Insurance", "Life, health, income, mortgage protection and trauma insurance.", "/insurance/", HeartPulse],
    ["Business", "Key person cover, business protection and commercial finance.", "/business/", BriefcaseBusiness],
  ];
  return (
    <>
      <Hero page={{
        eyebrow: "Insurance and Finance",
        title: "Personal mortgage and insurance advice in Nelson.",
        intro: "Assured Group helps local families and business owners compare banks, lenders and insurers, with Bob Llewellyn guiding the process from first conversation to recommendation.",
        image: assets.homeHero,
      }} />
      <section className="introBand">
        <div className="introText">
          <h2>A name you can trust for finance and insurance needs.</h2>
          <p>
            We access a wide range of banks, lenders and insurers so you do not have to. The result is practical advice, personal service and a clearer path through decisions that can otherwise feel complicated.
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
      <BobPanel />
    </>
  );
}

function Process() {
  return (
    <section className="process">
      {["Listen To Your Needs & Goals", "Match You With Products", "Provide Expert Advice & Service"].map((title) => (
        <div key={title}>
          <CheckCircle2 size={26} />
          <h3>{title}</h3>
          <p>
            Bob takes time to understand your situation, explain suitable options and provide recommendations that fit your goals.
          </p>
        </div>
      ))}
    </section>
  );
}

function LandingPage({ page }) {
  const Icon = page.icon;
  return (
    <>
      <Hero page={page} />
      <section className="contentGrid">
        <div>
          <p className="eyebrow">How Assured helps</p>
          <h2>Clear advice with a local point of contact.</h2>
          <p>
            The prototype copy here is intentionally realistic filler. It gives each page enough substance to feel search-focused and complete while final page content is prepared separately.
          </p>
          <p>
            Bob talks through your goals, reviews the market, explains suitable options and supports the practical steps needed to move ahead.
          </p>
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
      <BobPanel />
    </>
  );
}

function DetailPage({ title, intro }) {
  return (
    <>
      <Hero page={{ eyebrow: "Assured Group", title, intro, image: assets.financeHero }} />
      <section className="article">
        <h2>{title} in Nelson and Tasman</h2>
        <p>
          This page is a high-quality placeholder for final content. It is designed to demonstrate the new information architecture, internal linking and page rhythm while keeping the visual style close to the existing Assured Group website.
        </p>
        <p>
          Bob can help clarify the available options, compare providers and explain the steps in straightforward language. The finished copy can replace this section without changing the layout.
        </p>
        <Link href="/contact/" className="button primary">Talk To Bob <ArrowRight size={16} /></Link>
      </section>
      <BobPanel />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <Hero page={{
        eyebrow: "Contact Assured Group",
        title: "Talk to Bob about finance or insurance.",
        intro: "Send a message or call the team. Forms, phone numbers and email links are presentational only in this prototype.",
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
  else if (pageCopy[path]) page = <LandingPage page={pageCopy[path]} />;
  else if (servicePages[path]) page = <DetailPage title={servicePages[path][0]} intro={servicePages[path][1]} />;
  else if (path !== "/") page = <DetailPage title="Assured Group" intro="Prototype page for the proposed Assured Group website structure." />;

  return (
    <>
      <Header />
      <main>{page}</main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
