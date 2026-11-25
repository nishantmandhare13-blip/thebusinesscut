import { DecisionPoint } from '@/types/decisionPoint';

export const ENTREPRENEURSHIP_DECISION_POINTS: DecisionPoint[] = [
  {
    lessonId: 'lms-054',
    protagonist: 'Ray Kroc',
    roleTitle: 'Exclusive National Franchise Agent, McDonald’s Systems Inc.',
    momentLabel: '1956 · Des Plaines, Illinois',
    title: 'Your Call: The Real Estate Pivot',
    setup: 'It is 1956 in Chicago. You are Ray Kroc. You have franchised eighteen McDonald’s locations across the Midwest, but your business is on the brink of financial insolvency. You collect a meager 1.4 percent of store burger sales, of which 0.5 percent goes directly back to the McDonald brothers in California. Your contract forbids you from raising franchise fees, local banks refuse to loan you working capital, and your mortgage is past due.',
    stakes: [
      'You are bleeding personal capital while franchise store owners grow wealthy on burgers.',
      'The McDonald brothers legally veto every attempt you make to renegotiate the franchise fee contract.',
      'Banks refuse to lend money against low-margin restaurant royalty percentage streams.',
      'Financial advisor Harry Sonneborn reveals that you are in the wrong business entirely.'
    ],
    question: 'How do you pivot your economic engine to capture enterprise wealth?',
    options: [
      {
        id: 'A',
        label: 'Sue the McDonald brothers in federal court to break the franchise contract',
        rationale: 'Attempts to force an immediate judicial modification of royalty percentages.',
        consequence: 'The court upholds the original ironclad agreement. You burn your remaining cash on legal fees and file for corporate bankruptcy.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Pivot the business model to buy land and lease franchise locations to franchisees',
        rationale: 'Creates an economic engine based on real estate equity and guaranteed rental cash flow.',
        consequence: 'You form Franchise Realty Corporation, buying the physical land beneath restaurants and leasing it to operators. Guaranteed rent provides steady income and collateral, enabling global expansion and buying out the brothers.',
        verdict: 'strong'
      },
      {
        id: 'C',
        label: 'Sell five-cent sodas for ten cents to extract higher beverage profit margins',
        rationale: 'Increases unit gross margins without violating core burger franchising terms.',
        consequence: 'Franchisees rebel against high soda syrup costs and customers notice the price hike. Foot traffic drops across stores and royalty revenue remains stagnant.',
        verdict: 'partial'
      },
      {
        id: 'D',
        label: 'Declare bankruptcy and return to selling five-spindle milkshake multimixers across America',
        rationale: 'Retreats to a familiar travelling sales career to avoid financial disaster.',
        consequence: 'Fast food diners abandon multimixers for soft-serve dispensers. Your machine sales dry up and you retire with zero equity in the fast-food revolution.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'Ray Kroc followed Harry Sonneborn’s advice and founded the Franchise Realty Corporation. By buying the physical real estate and leasing it to franchisees with contractual lease compliance, Kroc built an empire that made McDonald’s one of the largest real estate owners in the world.',
    frameworkBridge: 'This is the Business Model Canvas & Economic Engine Pivot in entrepreneurship. Entrepreneurs often mistake their product (hamburgers) for their business model. Kroc recognized that the true economic engine was prime real estate acquisition and leasehold control, unlocking astronomical enterprise valuation.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-055',
    protagonist: 'Joy Mangano',
    roleTitle: 'Solo Inventor & President, Arma Products',
    momentLabel: '1993 · Long Island, New York',
    title: 'Your Call: The Tooling Supplier Heist',
    setup: 'It is 1993 in Long Island, New York. You are Joy Mangano. The Miracle Mop is a runaway hit on QVC, but your California parts supplier has suddenly increased your injection-molding tooling fees by thirty percent, threatening to halt deliveries unless you pay $50,000 in cash. While reviewing their invoices, you discover that the supplier has secretly filed a fraudulent patent on your design and is manufacturing knockoff mops for your competitors.',
    stakes: [
      'Halting mop deliveries will breach your lucrative QVC distribution contract.',
      'Your family has pledged their personal life savings to fund the production tooling.',
      'The corrupt supplier is using your original CAD dies to produce unauthorized knockoffs.',
      'Patent litigation in federal court can take years and cost hundreds of thousands of dollars.'
    ],
    question: 'How do you protect your intellectual property and regain control of manufacturing?',
    options: [
      {
        id: 'A',
        label: 'Pay the supplier’s extortion fees to keep QVC holiday deliveries on schedule',
        rationale: 'Prioritizes short-term inventory fulfillment to prevent immediate retail stockouts.',
        consequence: 'The supplier increases demands further and transfers your tooling to their knockoff line. You are eventually pushed into insolvency while they capture your market.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'File an antitrust complaint with the Federal Trade Commission and await an inquiry',
        rationale: 'Relies on federal regulatory authorities to investigate anti-competitive supply theft.',
        consequence: 'The FTC inquiry takes eighteen months to review documents. Meanwhile, QVC terminates your contract for failing to deliver mops, bankrupting your business.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Directly audit manufacturing tooling and enforce your original registered mechanical patents',
        rationale: 'Confronts the counterparty with indisputable prior art and physical audit leverage to seize tooling.',
        consequence: 'You fly directly to California, audit their machine shop, and confront the CEO with proof of your prior patent filings. Faced with criminal fraud charges, the supplier surrenders your steel dies and pays restitution.',
        verdict: 'strong'
      },
      {
        id: 'D',
        label: 'Abandon the Miracle Mop and design a new velvet clothing hanger from scratch',
        rationale: 'Pivots to an entirely new invention to escape legal conflict with the supplier.',
        consequence: 'You forfeit all revenue and manufacturing equity earned from the mop. While your hanger invention succeeds later, you lose millions in stolen mop earnings.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'Joy flew to Dallas, discovered the machine shop was using her proprietary molds to produce knockoffs, and confronted the owner with the original patent paperwork. She forced him to sign over the tooling and return her money, securing complete ownership of her supply chain.',
    frameworkBridge: 'This illustrates the Hardware Supply-Chain & IP Protection Framework for independent inventors. Hardware startups face extreme vulnerability at the supplier interface. Founders must secure defensive patent filings, maintain physical custody of production dies, and audit contract manufacturers regularly.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-056',
    protagonist: 'Adam Neumann',
    roleTitle: 'Co-Founder & CEO, WeWork',
    momentLabel: '2019 · Manhattan, New York',
    title: 'Your Call: The $47 Billion Valuation Chasm',
    setup: 'It is early 2019 at WeWork headquarters in New York City. You are Adam Neumann, charismatic co-founder of WeWork. Fueled by SoftBank visionary fund cash, you have expanded to over 400 locations globally, styling WeWork as a "physical social network" valued at $47 billion. SoftBank founder Masayoshi Son has just told you that SoftBank cannot complete its planned $16 billion buyout, forcing you to file for an initial public offering.',
    stakes: [
      'WeWork is burning $200,000 every single hour, losing $1.6 billion annually.',
      'The S-1 IPO filing will expose bizarre self-dealing transactions and massive long-term lease liabilities.',
      'Public market investors value co-working spaces as cyclical real estate, not software tech multiples.',
      'Cash reserves will run dry within twelve weeks without an immediate equity infusion.'
    ],
    question: 'How do you position WeWork’s unit economics for public market scrutiny?',
    options: [
      {
        id: 'A',
        label: 'Restructure lease liabilities and moderate growth to align with asset-heavy co-working reality',
        rationale: 'Transitions from hyper-growth subsidies to durable, sustainable unit economics before going public.',
        consequence: 'While valuation drops from mythical tech heights to realistic real estate multiples, the business achieves operational sustainability, protects jobs, and avoids the catastrophic public IPO collapse.',
        verdict: 'strong'
      },
      {
        id: 'B',
        label: 'Double marketing spend and launch experimental wave pools and elementary schools',
        rationale: 'Sustains the grand vision of elevating the world’s collective consciousness.',
        consequence: 'Public investors mock the prospectus as a delusional cult. The IPO is scrapped in disgrace, SoftBank cancels funding, and you are ousted as CEO.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Refuse to file the S-1 and demand a personal buyout loan from SoftBank',
        rationale: 'Extracts massive personal liquidity while leaving corporate insolvency to the board.',
        consequence: 'SoftBank pulls its credit lines and the board fires you immediately. The company enters emergency bankruptcy reorganization amid lawsuits.',
        verdict: 'partial'
      },
      {
        id: 'D',
        label: 'Convert all office buildings into residential dormitories called WeLive overnight',
        rationale: 'Pivots the real estate portfolio toward urban multifamily residential leasing.',
        consequence: 'Municipal zoning laws prohibit residential occupancy in commercial office buildings. City inspectors shut down buildings, triggering massive tenant lease breaches.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'Neumann published an S-1 filled with bizarre corporate governance and "community-adjusted EBITDA." Wall Street rejected the narrative, the valuation plummeted from $47 billion to bankruptcy talks within six weeks, and Neumann was pushed out by SoftBank with a golden parachute.',
    frameworkBridge: 'This is the Software vs Asset-Heavy Unit Economics Reality Check in venture entrepreneurship. Slapping software branding on an asset-heavy business with forty-year fixed lease commitments cannot magically transform negative-margin unit economics into exponential software returns.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-057',
    protagonist: 'Elizabeth Holmes',
    roleTitle: 'Founder & CEO, Theranos',
    momentLabel: '2013 · Palo Alto, California',
    title: 'Your Call: The Walgreens Wellness Centers Launch',
    setup: 'It is 2013 in Palo Alto, California. You are Elizabeth Holmes, founder and CEO of Theranos. You have raised hundreds of millions from elite investors and signed a landmark commercial contract to launch clinical blood testing centers inside Walgreens pharmacies. However, your chief scientist Ian Gibbons and lab technicians confirm that the proprietary Edison blood analyzer is erratic, inaccurate, and fails over seventy percent of quality control tests.',
    stakes: [
      'Walgreens executives threaten to sue for breach of contract if launch milestones are missed.',
      'Deploying faulty diagnostic machines will give real patients false medical diagnoses and cancer reports.',
      'Admitting failure erases your $9 billion paper valuation and ends your superstar prestige.',
      'Federal health regulators (CLIA) perform unannounced inspections on certified diagnostic labs.'
    ],
    question: 'How do you handle the technical failure of your blood testing hardware?',
    options: [
      {
        id: 'A',
        label: 'Secretly dilute fingerstick blood samples and run tests on commercial Siemens lab machines',
        rationale: 'Maintains commercial partnership momentum while continuing to promise future technological breakthroughs.',
        consequence: 'Diluted blood tests deliver wildly inaccurate medical results to thousands of real patients. Regulators and investigative reporters expose the systemic fraud, leading to federal indictments and prison.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Blame laboratory technicians and fire whistleblowers who report testing inaccuracies',
        rationale: 'Suppresses internal dissent through strict non-disclosure agreement intimidation.',
        consequence: 'Fired whistleblowers like Tyler Shultz take documentation to the Wall Street Journal and federal regulators. The subsequent exposé destroys the company overnight.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Launch wellness centers offering only blood pressure and BMI readings while delaying blood tests',
        rationale: 'Fulfills physical footprint contracts without deploying faulty biochemical analyzers.',
        consequence: 'Walgreens demands the promised fingerstick blood testing capabilities. Frustrated by endless delays, Walgreens cancels the contract after six months.',
        verdict: 'partial'
      },
      {
        id: 'D',
        label: 'Halt commercial patient deployments until proprietary microfluidic hardware passes clinical trials',
        rationale: 'Respects the ethical concierge prototype boundary by refusing to deploy unverified diagnostics.',
        consequence: 'You admit to Walgreens that the technology requires further laboratory R&D. While the delay damages your Silicon Valley valuation, you preserve scientific integrity and avoid catastrophic criminal fraud.',
        verdict: 'strong'
      }
    ],
    whatActuallyHappened: 'Holmes chose deception: she hid the Edison’s failures, diluted capillary blood samples to run on modified commercial Siemens analyzers in a secret basement lab, and issued fraudulent medical results. John Carreyrou exposed the fraud in the Wall Street Journal, and Holmes was convicted of federal wire fraud.',
    frameworkBridge: 'This is the Concierge Prototype vs Fraud Boundary Matrix. In software, "fake it till you make it" involves concierge manual workflows behind UI mockups. In healthcare and physical hardware, deploying unverified systems on real humans crosses the boundary into life-threatening fraud.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-058',
    protagonist: 'Shelley Levene',
    roleTitle: 'Veteran Real Estate Salesman, Premiere Properties',
    momentLabel: '1992 · Chicago, Illinois',
    title: 'Your Call: Closing the Deadbeat Leads',
    setup: 'It is a rain-slicked evening in a rundown Chicago real estate office. You are Shelley "The Machine" Levene, a once-legendary salesman in a desperate cold slump. Corporate trainer Blake has arrived from downtown, issuing an ultimatum: first prize is a Cadillac, second prize is a set of steak knives, and third prize is you’re fired. Office manager Williamson refuses to give you the fresh Glengarry leads, handing you ancient index cards.',
    stakes: [
      'You are on the bottom of the sales leaderboard and face immediate firing tomorrow morning.',
      'Your daughter is hospitalized with severe medical bills you cannot pay.',
      'The leads you hold have been called dozens of times and have no money to buy land.',
      'Co-worker Dave Moss is proposing breaking in tonight to steal the Glengarry leads.'
    ],
    question: 'How do you prioritize your remaining sales efforts before the morning deadline?',
    options: [
      {
        id: 'A',
        label: 'Conspire with Dave Moss to burglarize the office and sell the Glengarry leads',
        rationale: 'Secures quick cash to pay hospital bills while taking revenge on corporate management.',
        consequence: 'The burglary triggers a police investigation the next morning. Williamson catches you in a verbal contradiction, police interrogate you, and you are arrested.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Qualify prospects ruthlessly by budget and authority instead of calling cold residential names',
        rationale: 'Applies BANT criteria to avoid burning scarce closing time on broke, unqualified prospects.',
        consequence: 'You stop visiting broke couples who bounce deposit checks. By filtering for verified capital and decision-making authority, you close an eight-lot commercial plot and climb to safety on the board.',
        verdict: 'strong'
      },
      {
        id: 'C',
        label: 'Spend the evening begging Williamson to give you two Glengarry leads on credit',
        rationale: 'Hopes personal pity and pleading will sway a bureaucratic office manager.',
        consequence: 'Williamson has zero empathy and demands cash up front. You waste your entire evening groveling in the office while other salesmen make closing calls.',
        verdict: 'partial'
      },
      {
        id: 'D',
        label: 'Drive out in the rain to visit an elderly couple with bounced checks',
        rationale: 'Relies on desperate brute-force personal visits to anyone who will open their door.',
        consequence: 'You spend three hours persuading a lonely couple who sign the contract for attention, knowing their bank account is empty. The check bounces the next day.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'Levene broke into the office, stole the Glengarry leads, and sold them to a rival firm. The next day, he bragged to Williamson about closing an elderly couple who had no money, inadvertently slipped details about the break-in, and was turned over to the police.',
    frameworkBridge: 'This demonstrates the BANT Lead Qualification & Pipeline Decay Curve. Sales velocity is dictated by lead hygiene: pursuing unqualified prospects with no Budget, Authority, Need, or Timeline is an exercise in futility. Sales teams must prune decayed leads to focus on high-yield prospects.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-059',
    protagonist: 'Chris Gardner',
    roleTitle: 'Trainee Stockbroker, Dean Witter Reynolds',
    momentLabel: '1981 · San Francisco, California',
    title: 'Your Call: The Unpaid Internship Sprint',
    setup: 'It is 1981 in San Francisco. You are Chris Gardner, an unpaid intern at brokerage Dean Witter Reynolds. You are competing against nineteen younger, privileged graduates for a single permanent stockbroker position. You are homeless, sleeping in subway restrooms and homeless shelters with your young son Christopher. Every day you must arrive at the shelter by 5:00 PM to secure a bed, leaving you with six hours less prospecting time than your competitors.',
    stakes: [
      'Only one intern out of twenty will receive a job offer; the rest leave with zero compensation.',
      'You have zero personal savings and are sleeping on the floor of BART subway bathrooms.',
      'You must leave the office by 4:00 PM every day to stand in line at the homeless shelter.',
      'Other interns make calls until 8:00 PM while taking long lunches and coffee breaks.'
    ],
    question: 'How do you optimize your daily prospecting workflow to beat nineteen competitors?',
    options: [
      {
        id: 'A',
        label: 'Work past 8:00 PM and sleep on park benches to match call volume',
        rationale: 'Maximizes telephone outbound calling hours regardless of physical safety hazards.',
        consequence: 'Exposing your child to cold park benches leads to pneumonia and child protective intervention. The exhaustion ruins your mental focus during morning trading sessions.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Ask your branch manager for an emergency advance on your future commission salary',
        rationale: 'Seeks compassionate financial relief to secure basic apartment housing.',
        consequence: 'Corporate brokerage policy prohibits advances for interns. The manager views your personal instability as a business risk and dismisses you from the program.',
        verdict: 'partial'
      },
      {
        id: 'C',
        label: 'Eliminate administrative pauses and cold-call high-net-worth CEOs without hanging up between dials',
        rationale: 'Engineers extreme micro-efficiency and prioritizes high-leverage decision makers.',
        consequence: 'By not hanging up the phone receiver between calls and never pausing to drink water, you make 200 calls in six hours. You land high-net-worth executive Walter Ribbon, win the permanent broker job, and launch your wealth.',
        verdict: 'strong'
      },
      {
        id: 'D',
        label: 'Spend your workdays studying for the Series 7 licensing exam instead of cold-calling clients',
        rationale: 'Ensures a perfect academic exam score to impress the selection committee.',
        consequence: 'You achieve a 98% on the exam, but your total client asset book is zero. Dean Witter awards the permanent broker seat to the intern who brought in actual trading capital.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'Gardner optimized every second: he didn’t hang up the phone between calls to save eight minutes a day, drank no water so he wouldn’t lose time in restrooms, and cold-called top CEOs. He passed his exam, was hired as the sole full-time broker, and later founded Gardner Rich & Co.',
    frameworkBridge: 'This is Time-and-Motion Micro-Efficiency & High-Leverage Prospecting. When operating under extreme resource and time constraints, entrepreneurs cannot compete through raw hours. They must strip away frictional latency and ruthlessly target high-leverage accounts to generate asymmetric output.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-060',
    protagonist: 'Vianne Rocher',
    roleTitle: 'Chocolatière & Independent Entrepreneur',
    momentLabel: '1959 · Lansquenet-sous-Tannes, France',
    title: 'Your Call: Opening During Lent',
    setup: 'It is 1959 in a quiet French village. You are Vianne Rocher. You and your young daughter have just opened a traditional chocolaterie on the village square. It is the beginning of Lent, a sacred forty-day period of Catholic fasting and self-denial. The town’s puritanical mayor, the Comte de Reynaud, uses the pulpit to declare your sweet confections an immoral pagan temptation, ordering townspeople to boycott your shop completely.',
    stakes: [
      'Your rental lease requires monthly payments, and you have exhausted your savings on raw cocoa.',
      'The mayor commands absolute cultural and religious authority over all village residents.',
      'Conforming to the boycott forces you into financial insolvency before the spring thaw.',
      'The villagers are repressed, lonely, and secretly yearn for warmth and personal connection.'
    ],
    question: 'How do you overcome the municipal religious cartel to attract customers?',
    options: [
      {
        id: 'A',
        label: 'Offer bespoke sensory tastings tailored to each resident\'s hidden emotional cravings',
        rationale: 'Bypasses formal cultural barriers through intimate personalization and emotional empathy.',
        consequence: 'Using a spinning ceramic wheel and keen psychological empathy, you guess each villager’s hidden preference: spicy Mayan chili for Armande, hazelnut truffles for Guillaume. Word of mouth spreads, and the village embraces your shop.',
        verdict: 'strong'
      },
      {
        id: 'B',
        label: 'Close the shop for forty days of Lent to avoid local religious controversy',
        rationale: 'Respects municipal religious traditions to cultivate community goodwill for Easter.',
        consequence: 'You run out of living capital during the forty days of closure. Your landlord evicts you for unpaid rent before Easter Sunday arrives.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Sue the Comte de Reynaud in regional civil court for anti-competitive business interference',
        rationale: 'Asserts secular French legal rights against religious administrative overreach.',
        consequence: 'The conservative local magistrate rules in favor of the aristocratic mayor. Villagers view you as a hostile litigious outsider and shun your store completely.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Sell only plain bread and crackers to comply with church fasting guidelines',
        rationale: 'Pivots inventory toward church-approved dietary goods during the holy season.',
        consequence: 'The village already has an established traditional baker. Nobody buys your expensive specialty crackers, and your differentiated culinary advantage is lost.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'Vianne welcomed the villagers with warmth, intuition, and personalized chocolate treats that addressed their emotional pains. Her generosity won over the town, culminating in the mayor himself breaking his fast in an ecstatic chocolate feast in her shop window.',
    frameworkBridge: 'This is the Experiential Customization & Incumbent Bypass Model in competitive entry. Entrenched monopolies control regulatory and cultural channels. Disruptive entrepreneurs win not by fighting incumbents in court, but by offering customized emotional experiences that satisfy latent consumer desires.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-061',
    protagonist: 'Dr. Robert Kearns',
    roleTitle: 'Inventor & Engineering Professor, Wayne State University',
    momentLabel: '1963 · Detroit, Michigan',
    title: 'Your Call: The Ford Wiper Demonstration',
    setup: 'It is 1963 in an engineering boardroom at Ford World Headquarters. You are Dr. Robert Kearns, an engineering professor and independent inventor. Inspired by the human eyelid, you have spent years developing the intermittent windshield wiper, which varies wipe frequency in light rain. Ford executives are fascinated, claiming they want to license your invention for their upcoming Mustang line, but their engineering team demands to inspect your proprietary circuit box.',
    stakes: [
      'Ford possesses immense legal, manufacturing, and financial resources that dwarf an independent inventor.',
      'Revealing internal circuit schematics without an executed licensing deal risks direct intellectual theft.',
      'Refusing to show the internal mechanism risks Ford walking away from licensing discussions.',
      'You have a patent pending, but the United States Patent Office has not yet formally issued it.'
    ],
    question: 'How do you structure your product demonstration to protect your intellectual property?',
    options: [
      {
        id: 'A',
        label: 'Hand over the complete circuit schematics and allow Ford engineers to disassemble the prototype',
        rationale: 'Demonstrates complete trust and transparency to accelerate corporate contract negotiations.',
        consequence: 'Ford takes your components, cancels licensing discussions claiming it was an obvious design, and reverse-engineers the unit. They install your wipers on millions of cars without paying you a dime.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Smash your prototype with a hammer and accuse Ford executives of being corporate thieves',
        rationale: 'Preemptively protects secrets by terminating corporate interactions aggressively.',
        consequence: 'Ford security escorts you from the building. Ford engineers solve the circuit on their own, and you spend your career blacklisted from the American automotive industry.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Offer Ford an exclusive royalty-free license in exchange for an honorary corporate title',
        rationale: 'Secures personal corporate prestige within Detroit’s executive hierarchy.',
        consequence: 'Ford gives you an unpaid advisory desk and uses your patent royalty-free. You spend the rest of your life watching Ford earn billions from your stolen genius.',
        verdict: 'partial'
      },
      {
        id: 'D',
        label: 'Refuse secret demonstrations without an executed non-disclosure and patent licensing agreement',
        rationale: 'Enforces strict contractual and patent boundaries before exposing core mechanical architecture.',
        consequence: 'You demonstrate functional exterior capabilities while keeping the electrical box sealed until binding terms are signed. This establishes legal proof of corporate theft, enabling you to win landmark patent damages.',
        verdict: 'strong'
      }
    ],
    whatActuallyHappened: 'Ford took Kearns’s prototype, claimed they developed it internally, and put it on millions of cars. Kearns refused to settle for quick buyouts, spending thirty years fighting in federal court. He eventually defeated Ford and Chrysler, winning over $30 million in patent damages.',
    frameworkBridge: 'This illustrates Patent Non-Obviousness & Non-Disclosure Agreement (NDA) Enforcement in startup innovation. Independent inventors must recognize that corporate partners often view licensing as an option of last resort. Rigorous patent claim drafting and binding contractual NDAs are essential defense barriers.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-062',
    protagonist: 'Adam Jones',
    roleTitle: 'Head Chef, The Langham Restaurant',
    momentLabel: '2015 · London, England',
    title: 'Your Call: Opening Night at The Langham',
    setup: 'It is 7:00 PM on opening night at The Langham in London. You are Adam Jones, a brilliant, temperamental chef seeking your third Michelin star after destroying your career in Paris through addiction. You have assembled an elite kitchen brigade, but during the first dinner service, orders flood in simultaneously. The meat station is lagging, fish is overcooking under the heat lamps, and tickets are backing up on the pass.',
    stakes: [
      'Michelin inspectors could be seated anonymously in the dining room tonight.',
      'Screaming and throwing pans destroys brigade morale and causes cooks to walk off the line.',
      'Serving a single overcooked turbot or cold sauce will permanently ruin your Michelin review.',
      'The kitchen throughput system must execute dozens of complex dishes in exact synchronization.'
    ],
    question: 'How do you reorganize kitchen operations to achieve Michelin-star synchronization?',
    options: [
      {
        id: 'A',
        label: 'Scream obscenities, throw hot saute pans at cooks, and demand they cook faster',
        rationale: 'Uses intimidation and terror to force immediate culinary perfection.',
        consequence: 'Your sous-chef Helene walks out, prep cooks quit in tears, and dinner service collapses into chaos. Reviewers publish scathing articles about abusive kitchen culture.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Enforce a disciplined brigade structure with synchronized sous-chef stations to eliminate ticket backlogs',
        rationale: 'Applies Escoffier’s high-precision division of labor and synchronized timing across the pass.',
        consequence: 'You establish clear timing call-outs: fish and meat fire simultaneously, sauces are finished to order, and every plate passes through rigorous inspection. Service flows smoothly, earning rave reviews and your third Michelin star.',
        verdict: 'strong'
      },
      {
        id: 'C',
        label: 'Cook every single dish yourself and push your brigade cooks out of the kitchen',
        rationale: 'Guarantees uncompromised individual culinary perfection by eliminating junior errors.',
        consequence: 'One chef cannot prepare forty complex dishes simultaneously. Ticket wait times balloon to two hours, tables leave hungry, and the restaurant loses thousands in refunded bills.',
        verdict: 'partial'
      },
      {
        id: 'D',
        label: 'Replace the tasting menu with simple pre-cooked buffet chafing dishes',
        rationale: 'Eliminates ticket latency by serving pre-cooked food in banquet warmers.',
        consequence: 'Fine-dining critics are horrified by buffet-style luxury dining. The restaurant loses its culinary reputation and closes within two weeks.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'Adam initially melted down, abusing his crew. He realized that culinary greatness requires complete trust in the brigade system: empowering sous-chef Helene, trusting his line cooks, and orchestrating timing rather than trying to control every pan himself.',
    frameworkBridge: 'This is the Escoffier Brigade System & High-Precision Throughput Matrix. In high-velocity service operations, elite performance requires a disciplined division of labor, synchronized dependency timing, and relentless quality control at the pass, transforming chaotic solo genius into scalable excellence.',
    verification: 'verified'
  }
];
