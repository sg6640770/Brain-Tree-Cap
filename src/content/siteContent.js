import {
  ArrowLeftRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  Cpu,
  FileCheck,
  Globe,
  Globe2,
  KeyRound,
  Landmark,
  Laptop,
  Layers,
  Layers3,
  LineChart,
  RefreshCw,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Unlock,
  UserRoundPlus,
  UsersRound,
  Wallet,
} from 'lucide-react';

export const CTA_LABELS = {
  primary: 'Start investing',
  secondary: 'Speak with the team',
  bookConsultation: 'Book a consultation',
};

export const navItems = [
  { label: 'Portfolios', href: '#global-portfolios', id: 'global-portfolios' },
  { label: 'Why Us', href: '#why-us', id: 'why-us' },
  { label: 'How it works', href: '#how-it-works', id: 'how-it-works' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Contact Us', href: '/contact', id: 'contact' },
];

export const footerColumns = [
  {
    heading: 'Explore',
    links: [
      { label: 'Portfolios', to: '/#global-portfolios' },
      { label: 'Why Us', to: '/#why-us' },
      { label: 'How it works', to: '/#how-it-works' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About and team', to: '/#about' },
      { label: 'Contact Us', href: 'https://www.braintreecap.com/contact', external: true },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy', href: '#privacy' },
      { label: 'Terms', href: '#terms' },
      { label: 'Disclosures', href: '#disclosures' },
    ],
  },
];

export const footerBlurb =
  'Professionally managed global investment portfolios for Indian residents, NRIs and foreign investors.';

export const footerLegal =
  'All investments involve risk and returns will fluctuate. Past performance does not guarantee future results. Tax treatment depends on your residency and circumstances. Any portfolio figures shown are hypothetical.';

export const heroContent = {
  badge: 'Managed ETF portfolios',
  headline: ['Your Wealth', 'Without Borders'],
  blurb:
    'Simplicity of a single portfolio for all your major life stage needs \u2014 Built for the global Indian.',
  multiTags: ['Multi Asset', 'Multi Industry', 'Multi Geography', 'Multi Currency'],
  chips: ['No Lock in.', 'No Exit Fee.', 'Insured up to $0.5 Mn.\u2020'],
  notes: [
    'Compliant with Indian, American and Irish laws.\u2021',
    'Convenient \u2014 Paperless, Seamless, Fully Digital.',
  ],
  footnoteRefs: { insured: '\u2020', compliant: '\u2021' },
};

export const reasons = [
  {
    key: 'FX',
    icon: ArrowLeftRight,
    title: 'Build a $ corpus for your $ needs',
    text: "Child's education, travel, settling abroad, medical treatment.",
  },
  {
    key: 'TOP',
    icon: Globe,
    title: 'Reduce risk by diversifying beyond India.',
    text: 'Put eggs in different baskets.',
  },
  {
    key: 'NEXT',
    icon: Cpu,
    title: 'Own the technologies of tomorrow',
    text: 'Be invested where the next big ideas are built.',
  },
];

export const whatGoesWrong = [
  'The pick rests on a tip or one small piece of information.',
  'Nothing tells you when to buy \u2014 or to sell.',
  'You accumulate stocks instead of building a methodical portfolio.',
  'Returns end up below what you expected.',
];

export const portfolios = [
  {
    title: 'BrainTree WealthBuilder',
    description: 'A global UCITS portfolio built on the Layered Pyramid approach.',
    icon: Layers3,
    iconClass: 'bg-[#EAF0FF] text-blue',
  },
  {
    title: 'BrainTree IncomeBuilder',
    description: 'With Systematic Withdrawal Plan.',
    icon: Wallet,
    iconClass: 'bg-[#FFF5DE] text-[#A97912]',
  },
];

export const multiTags = ['Asset', 'Geographic', 'Currency', 'Industry'];

export const pyramidLayers = [
  {
    key: 'conviction',
    name: 'Conviction',
    desc: 'High growth themes',
    bullets: ['Technologies of future', 'Return of innovation', 'Multibaggers'],
    icon: TrendingUp,
    colors: { frontStart: '#1743B8', frontEnd: '#2F5FE5', top: '#6788EA', left: '#153990', right: '#102F7E' },
  },
  {
    key: 'smart-beta',
    name: 'Smart Beta',
    desc: 'Momentum based ETFs Stocks',
    icon: Layers,
    colors: { frontStart: '#526EC9', frontEnd: '#7C96E8', top: '#A5B7ED', left: '#4961AE', right: '#3D559D' },
  },
  {
    key: 'core-equity',
    name: 'Core Equity',
    desc: 'Owns the broad global markets through index ETFs',
    icon: Globe2,
    colors: { frontStart: '#AFC3ED', frontEnd: '#D0DCF5', top: '#EFF4FD', left: '#94A9D2', right: '#839AC4' },
  },
  {
    key: 'defensive-income',
    name: 'Defensive and Income',
    desc: 'Preserves your capital and generates steady returns',
    icon: ShieldCheck,
    colors: { frontStart: '#DDE6F4', frontEnd: '#F8FAFE', top: '#FFFFFF', left: '#C7D2E4', right: '#B6C5DA' },
  },
];

export const pyramidChips = [
  { text: 'Created Mathematically with Low Correlation', icon: LineChart },
  { text: 'Rebalanced once a quarter', icon: RefreshCw },
  { text: 'Aims for Better Risk Adjusted Returns', icon: ShieldCheck },
];

export const safetyCards = [
  {
    title: 'Compliant with US and Indian regulations.',
    desc: 'SIPC member custody and an SEC registered broker-dealer, through IBKR.',
    icon: ShieldCheck,
  },
  { title: 'Fully digital KYC', desc: 'Verify online in about a day. No branch visits.', icon: Smartphone },
  { title: 'You own what you hold', desc: 'Securities sit in your name, and you control them.', icon: KeyRound },
  { title: 'No lock-in, no exit fee', desc: 'You can top up & withdraw fully or partly anytime.', icon: Unlock },
];

export const audienceCards = [
  { title: 'NRIs', text: 'Keep your wealth working in global markets, wherever you live.', icon: UsersRound },
  {
    title: 'CXOs holding RSUs',
    text: "Executives in Indian tech companies who want to spread risk beyond one company's shares.",
    icon: Laptop,
  },
  {
    title: 'Business owners',
    text: "Put surplus capital to work outside India, under the RBI's rules.",
    icon: Building2,
  },
  { title: 'Investors in India', text: 'AIF/PMS seeking global returns.', icon: ChartNoAxesCombined },
];

export const journeySteps = [
  { number: '1', title: 'Open an account', text: 'Sign up online in a few minutes.', icon: UserRoundPlus, delay: 350 },
  { number: '2', title: 'Complete KYC', text: 'Verify your identity digitally in about a day. No branch visits and no paperwork.', icon: FileCheck, delay: 930 },
];

export const investorRouteCards = [
  { title: 'NRIs', text: 'Invest directly from the country where you live.', icon: Globe },
  { title: 'RSU holders', text: 'Sell RSUs in a planned manner and invest directly.', icon: BriefcaseBusiness },
];

export const journeyResidentStep = {
  number: '4',
  title: 'Resident Indians',
  text: "Invest through the RBI's LRS scheme.",
  icon: Landmark,
  delay: 2360,
};

export const journeyFootnote =
  'Minimum US $10,000, top-up from US $1,000. Partial / Full withdrawal anytime.';

export const teamMembers = [
  {
    name: 'Anurag Bhatnagar',
    role: 'CO-FOUNDER & PORTFOLIO DIRECTOR',
    credentials: 'CA \u00b7 30+ Years Leadership',
    biography:
      "Chartered Accountant with over 30 years of CXO-level leadership across banking, investments and insurance. Was part of HDFC Mutual Fund's founding team, led Wealth Management at Citigroup, and managed public portfolios for ULIPs at New York Life. His institutional experience across full market cycles shapes BrainTree Capital's risk-first portfolio architecture. Personally invested in the same strategies he builds for clients.",
    tags: ['CITIGROUP', 'HDFC AMC', 'NEW YORK LIFE', 'IL&FS A.F. FERGUSON'],
    image: '/team/anurag.png',
  },
  {
    name: 'Varun Verma',
    role: 'CO-FOUNDER & TRADER',
    credentials: 'Co-founder \u00b7 Trader',
    biography:
      'He built Temporal, a venture-backed research firm developing market mechanisms for interest rate derivatives and perpetual futures. He also leads Erdos, a proprietary trading firm operating in niche liquid markets, generating edge from product design inefficiencies and the structural constraints of market participants.',
    tags: ['TEMPORAL', 'ERDOS', 'MARKET STRUCTURE'],
    image: '/team/varun-verma.png',
  },
  {
    name: 'Shashikant Burnwal',
    role: 'MANAGING PARTNER',
    credentials: 'IIT Kharagpur \u00b7 ISB MBA \u00b7 SEBI-Certified Portfolio Manager',
    biography:
      "Leads deep-sector research and portfolio management at BrainTree Capital. Combines fundamental analysis with macro insights to identify high-quality businesses with long-term compounding potential. Builds diversified portfolios with a strong emphasis on quantitative risk management. His SEBI certification and ISB finance background ground the firm's systematic, rules-based investment process.",
    tags: ['IIT KHARAGPUR', 'ISB MBA FINANCE', 'SEBI CERTIFIED'],
    image: '/team/shashikant-burnwal.png',
  },
  {
    name: 'Ian Jason Creado',
    role: 'PARTNER \u00b7 INVESTOR RELATIONS',
    credentials: '14+ Years Experience',
    biography:
      'A seasoned client relationship professional with over 14 years of experience spanning B2B sales, business development, and operations. As Partner, Investor Relations at BrainTree Capital, Ian serves as the primary point of contact for investors, ensuring a seamless onboarding experience and a consistently high-touch engagement through every stage of the investment journey.',
    tags: ['HubCredo', 'CLIENT RELATIONS'],
    image: '/team/ian-jason-creado.png',
  },
];

export const teamAdvisor = {
  name: 'Himanshu Verma',
  role: 'BOARD ADVISOR',
  credentials: 'Board Advisor and founder of ShiftAltCap',
  biography:
    "Chartered Accountant and former Senior Vice President at Cognizant, where he led the Digital business unit serving clients including Alphabet, Microsoft, Meta, Apple and Stripe. Now serves on the boards of several companies while building ShiftAlt Capital. A keen investor himself, he brings a technology operator's lens to wealth building \u2014 and is passionate about helping fellow HNIs navigate the path to US market exposure.",
  tags: [],
  image: '/team/himanshu-verma.png',
};

export const portfolioSeries = {
  '3M': [76, 69, 72, 60, 63, 54, 57, 48, 52, 40, 43, 30],
  '6M': [76, 73, 67, 70, 61, 58, 60, 47, 51, 38, 42, 30],
  '9M': [76, 71, 74, 63, 66, 54, 58, 45, 50, 36, 41, 30],
  '1Y': [76, 73, 65, 68, 56, 59, 45, 49, 37, 41, 25, 30],
  ALL: [76, 68, 70, 58, 60, 47, 51, 37, 42, 27, 31, 12],
};

export const phoneHoldings = [
  { label: 'Defensive & Income', width: 105, color: '#8DA4F0' },
  { label: 'Core Equity', width: 83, color: '#4F74EA' },
  { label: 'Smart Beta', width: 57, color: '#2150E8' },
  { label: 'Conviction', width: 30, color: '#0A1B3D' },
];

export { ArrowUpRight };
