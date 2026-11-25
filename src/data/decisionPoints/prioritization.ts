import { DecisionPoint } from '@/types/decisionPoint';

export const PRIORITIZATION_DECISION_POINTS: DecisionPoint[] = [
  {
    lessonId: 'lms-019',
    protagonist: 'Billy Beane',
    roleTitle: 'General Manager, Oakland Athletics',
    momentLabel: '2002 · Oakland, California',
    title: 'Your Call: The War Room Draft Mutiny',
    setup: 'It is 2002 in the Oakland Athletics draft war room. You are Billy Beane, General Manager of the A’s. You have just lost your three biggest star players to high-paying big-market franchises and your owner will not increase your $40 million player payroll. Your head scout Grady Fuson and veteran scouts are demanding you draft high school prospects with athletic bodies and clean swings, while your economics analyst Peter Brand insists that walks and on-base percentage are the only undervalued statistical drivers of winning.',
    stakes: [
      'Your payroll is one-third the New York Yankees; you cannot outbid rich teams.',
      'Head scout Grady Fuson threatens public mutiny if you overrule scouting orthodoxy.',
      'Drafting players with unorthodox appearances risks widespread ridicule across Major League Baseball.',
      'A losing season will cost you and your analytical staff your front-office jobs.'
    ],
    question: 'How do you prioritize your scarce draft capital and free-agent acquisitions?',
    options: [
      {
        id: 'A',
        label: 'Compromise by drafting traditional high-school athletic prospects recommended by scouts',
        rationale: 'Preserves front-office harmony and relies on decades of institutional baseball wisdom.',
        consequence: 'The athletic prospects take five years to develop and fail to generate offense. The A’s finish last in the American League West and your budget deficit widens.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Target undervalued players with elite on-base percentage regardless of scout aesthetic bias',
        rationale: 'Exploits a massive market pricing inefficiency to buy runs at one-fifth the market cost.',
        consequence: 'You sign Scott Hatteberg, Chad Bradford, and David Justice for pennies on the dollar. The team overcomes internal skepticism to win twenty consecutive games and capture the AL West title.',
        verdict: 'strong'
      },
      {
        id: 'C',
        label: 'Trade away remaining prospects to rent an aging superstar slugger for one season',
        rationale: 'Provides instant box-office star power to boost lagging stadium ticket sales.',
        consequence: 'The aging slugger suffers a hamstring tear in May, consuming thirty percent of your payroll. The team collapses into irrelevance and trades away its future.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Adopt sabermetrics for bullpen pitching while leaving hitting decisions to traditional scouts',
        rationale: 'Splits organizational territory to test analytics without alienating veteran scouts.',
        consequence: 'The hitting lineup continues to strike out and strand baserunners. The halfway implementation creates confused player development signals and leaves the team in third place.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'Billy Beane fired Grady Fuson, overruled his scouting department, and strictly enforced Peter Brand’s on-base percentage metrics. The Oakland A’s won 103 games on a $41 million payroll, setting an AL record with a 20-game winning streak and changing baseball analytics forever.',
    frameworkBridge: 'This is the North Star Metric & Leading vs Lagging Metric Hierarchy in action. Traditional scouts prioritized vanity metrics (bat speed, physical appearance). Beane identified the critical leading indicator (on-base percentage) that directly produces runs, building an efficient quantitative decision engine under extreme budgetary constraints.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-020',
    protagonist: 'Peter Sullivan',
    roleTitle: 'Junior Risk Analyst, Wall Street Investment Bank',
    momentLabel: '2008 · Manhattan, New York',
    title: 'Your Call: The Historical Volatility Breach',
    setup: 'It is 11:00 PM on a Thursday in Manhattan. You are Peter Sullivan, a junior risk analyst with a doctorate in propulsion engineering working at a premier Wall Street investment bank. Your boss Eric Dale was abruptly escorted out during mass layoffs today, handing you a USB drive marked "be careful." After completing his stress models, you realize the bank’s mortgage-backed securities have breached their historical volatility thresholds, meaning the firm holds toxic assets exceeding its entire market capitalization.',
    stakes: [
      'The firm’s leverage ratio is over thirty-three to one; minor losses wipe out all equity.',
      'Whistleblowing to senior partners late at night risks being terminated for insubordination.',
      'Remaining silent allows the toxic debt to compound until total firm bankruptcy.',
      'Senior trading executives are aggressively dismissing junior risk warnings as academic noise.'
    ],
    question: 'How do you escalate the catastrophic Value-at-Risk breach to executive leadership?',
    options: [
      {
        id: 'A',
        label: 'Escalate up the executive chain immediately with verified mathematical proof',
        rationale: 'Triggers emergency stop-loss protocol before Asian and European financial markets open.',
        consequence: 'You call trading head Will Emerson, who summons division head Sam Rogers and CEO John Tuld for an emergency 2:00 AM executive committee meeting. Tuld recognizes the existential math and initiates an emergency fire sale to save the firm.',
        verdict: 'strong'
      },
      {
        id: 'B',
        label: 'Wait until the normal 9:00 AM morning executive meeting to submit a memo',
        rationale: 'Follows traditional corporate communication protocols and avoids alarming superiors at midnight.',
        consequence: 'By 9:00 AM, market rumors leak and credit default swap prices spike violently. Counterparties refuse your collateral, trapping the firm in total illiquidity and sudden bankruptcy.',
        verdict: 'partial'
      },
      {
        id: 'C',
        label: 'Delete the risk model from your hard drive and leave the office quietly',
        rationale: 'Protects personal career safety by avoiding involvement in leadership catastrophes.',
        consequence: 'The firm collapses forty-eight hours later in a chaotic government takeover. Regulatory investigators trace your login credentials and subpoena you for concealing material risk data.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Short the bank’s stock from your personal brokerage account before dawn',
        rationale: 'Capitalizes financially on proprietary inside knowledge of impending corporate insolvency.',
        consequence: 'Securities and Exchange Commission surveillance systems detect the anomalous trade immediately. Federal agents arrest you for insider trading, ruining your career and facing prison time.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'Peter immediately called his superiors, triggering a late-night executive summit. CEO John Tuld decided to liquidate the firm’s toxic mortgage positions at a massive discount at the opening bell, offloading the risk onto unsuspecting counterparties before the market caught on.',
    frameworkBridge: 'This illustrates the Site Reliability Engineering (SRE) Error Budget & VaR Circuit Breaker framework applied to financial risk. When empirical metrics breach the allowable error budget, all feature releases (trading) must halt immediately. Sullivan recognized that exceeding statistical variance limits creates fatal systemic bankruptcy.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-021',
    protagonist: 'Dr. Michael Burry',
    roleTitle: 'Hedge Fund Manager & Founder, Scion Capital',
    momentLabel: '2005 · San Jose, California',
    title: 'Your Call: Reading the Subprime Tape',
    setup: 'It is 2005 in San Jose, California. You are Dr. Michael Burry, founder of hedge fund Scion Capital. While Wall Street banks celebrate record profits from Collateralized Debt Obligations, you have spent months reading thousands of individual mortgage prospectuses. You discover that underlying subprime home loans are packed with zero-income, adjustable-rate borrowers who will default when interest rates reset, yet rating agencies continue stamping CDOs with pristine AAA ratings.',
    stakes: [
      'Your fund investors are outraged at paying high insurance premiums on a housing boom.',
      'Wall Street banks view credit default swaps as free money and mock your contrarian thesis.',
      'Carrying negative credit insurance premiums bleeds fifteen percent of your fund’s capital annually.',
      'Major investors threaten lawsuits and demand immediate capital withdrawals.'
    ],
    question: 'How do you position your fund against the corrupt subprime mortgage market?',
    options: [
      {
        id: 'A',
        label: 'Liquidate your contrarian bets and invest in traditional blue-chip technology stocks',
        rationale: 'Pacifies vocal fund investors and eliminates painful negative carrying costs.',
        consequence: 'Your fund generates pedestrian eight percent returns while the broader financial system heads toward collapse. When the 2008 crash occurs, you miss the trade of the century.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Publish your research findings on public investment blogs to warn homeowners',
        rationale: 'Alerts the public and regulatory authorities to pervasive mortgage lending fraud.',
        consequence: 'Wall Street banks ignore your amateur blog warnings while aggressive short-sellers front-run your positions. Your investors use the publicity as an excuse to pull their capital.',
        verdict: 'partial'
      },
      {
        id: 'C',
        label: 'Purchase billions in credit default swaps against subprime tranches and lock down investor capital',
        rationale: 'Aligns portfolio exposure with ground-truth data while enduring short-term liquidity pain.',
        consequence: 'You lock fund gates to prevent panic redemptions, weathering brutal investor fury for two years. When subprime defaults explode, Scion Capital realizes over $720 million in profit, delivering a 489% net return.',
        verdict: 'strong'
      },
      {
        id: 'D',
        label: 'Purchase physical subprime residential properties to rent them out to displaced tenants',
        rationale: 'Hedging financial bets by owning physical real estate assets in suburban Florida.',
        consequence: 'Property values plummet by sixty percent and maintenance costs explode as tenants default. Your fund becomes an illiquid landlord and collapses under property tax liens.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'Burry bought over $1 billion in credit default swaps against subprime mortgage bonds. Despite intense pressure, lawsuits, and furious phone calls from his largest investors, he restricted fund withdrawals until the housing market crashed, earning hundreds of millions for his partners.',
    frameworkBridge: 'This is Goodhart’s Law & Ground-Truth Verification Matrix in full effect. When a measure (AAA rating) becomes a target, it ceases to be a good measure. Burry bypassed surrogate metrics stamped by corrupt agencies and inspected ground-truth raw loan data, uncovering catastrophic divergence between reported indicators and physical reality.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-022',
    protagonist: 'Alan Turing',
    roleTitle: 'Chief Cryptanalyst & Mathematician, Bletchley Park',
    momentLabel: '1940 · Bletchley Park, England',
    title: 'Your Call: Breaking the Enigma Permutation Trap',
    setup: 'It is late 1940 at Hut 8 in Bletchley Park. You are Alan Turing, lead mathematical cryptanalyst working for British Intelligence. The German military encodes all operational signals using the Enigma machine, which changes cipher settings every midnight. Your electro-mechanical decryption machine (Christopher) is running continuously, but with 159 quintillion possible rotor settings, brute-force searching takes weeks, resetting to zero every night while Allied merchant convoys are torpedoed.',
    stakes: [
      'Britain’s Atlantic food and supply convoys are being decimated by German U-boats.',
      'Commander Denniston threatens to fire you and dismantle your machine within forty-eight hours.',
      'Brute-force testing 159 quintillion settings before midnight is mathematically impossible.',
      'Fellow cryptanalysts are exhausted and resentful of your abrasive eccentric leadership.'
    ],
    question: 'How do you prune the astronomical search space to break the daily cipher?',
    options: [
      {
        id: 'A',
        label: 'Hire five hundred additional human linguists to check anagram combinations by hand',
        rationale: 'Increases human processing bandwidth to accelerate manual codebreaking attempts.',
        consequence: 'Manual human sorting cannot keep pace with exponential mathematical permutations. The daily midnight deadline passes with zero decrypted messages, and food rationing tightens.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Request military command to bomb German radio transmission towers in occupied France',
        rationale: 'Disrupts the source of encrypted radio signals to silence Axis communications.',
        consequence: 'The German military deploys mobile radio trucks within hours. Decryption efforts gain nothing while scarce Allied bombers are lost over enemy territory.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Re-engineer the machine to use fifty rotors instead of three to increase electrical speed',
        rationale: 'Attempts to solve the brute-force problem by accelerating computational hardware.',
        consequence: 'Fabricating forty-seven extra precision rotors requires six months of machine-shop tooling. The project runs out of time and Denniston shuts down Hut 8.',
        verdict: 'partial'
      },
      {
        id: 'D',
        label: 'Anchor the search space around known repeated phrases and self-cipher constraints',
        rationale: 'Applies heuristic pruning to eliminate 99.9% of permutations instantly before running the machine.',
        consequence: 'By programming the Bombe to search only for known repeated phrases like "Heil Hitler" and weather reports, you eliminate billions of impossible rotor combinations. Christopher cracks the Enigma cipher in minutes, saving an estimated fourteen million lives.',
        verdict: 'strong'
      }
    ],
    whatActuallyHappened: 'Turing realized that the German operators signed off every morning weather report with identical vocabulary and that Enigma never encrypted a letter as itself. By using these cribs to prune the search space, the Bombe decrypted Axis naval communications daily.',
    frameworkBridge: 'This exemplifies Heuristic Search Pruning & RICE Prioritization Matrix. When faced with intractable complexity or combinatorial explosion, brilliant strategists reject brute-force exhaustion. Instead, they identify structural constraints and known cribs to prune the problem space by orders of magnitude.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-023',
    protagonist: 'Chuck Noland',
    roleTitle: 'Systems Engineer & Logistics Executive, FedEx',
    momentLabel: '1995 · Uninhabited South Pacific Island',
    title: 'Your Call: Desert Island Backlog Prioritization',
    setup: 'It is late 1995 on a deserted atoll in the South Pacific. You are Chuck Noland, a time-obsessed FedEx systems engineer and sole survivor of an airplane crash. You have washed ashore on an uninhabited island with several floating FedEx packages and no human contact. Your body is suffering from dehydration, your feet are cut by coral, and tropical storms are brewing on the horizon. Every minute spent on low-impact tasks accelerates exhaustion.',
    stakes: [
      'Severe dehydration will cause delirium and fatal organ failure within seventy-two hours.',
      'Opening every package randomly expends scarce caloric energy on non-essential goods.',
      'Nighttime exposure without shelter will lead to dangerous hypothermia during tropical rains.',
      'An infected tooth is throbbing painfully, threatening systemic blood poisoning.'
    ],
    question: 'How do you sequence your survival backlog to sustain life?',
    options: [
      {
        id: 'A',
        label: 'Prioritize water collection, shelter construction, and fire creation before exploring the island',
        rationale: 'Satisfies foundational physiological and safety prerequisites before pursuing higher-level initiatives.',
        consequence: 'You collect rainwater in coconut shells, construct a cave shelter, and master making fire with friction wood. Securing baseline physiological stability allows you to preserve calories and design a sturdy sea raft to escape four years later.',
        verdict: 'strong'
      },
      {
        id: 'B',
        label: 'Begin chopping logs immediately to build an escape raft for the open ocean',
        rationale: 'Focuses directly on the ultimate strategic goal of escaping the island as fast as possible.',
        consequence: 'You collapse from severe dehydration and heatstroke on day two while dragging heavy tree trunks across the beach. Without water or shelter, you perish before finishing the raft.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Open every washed-up FedEx parcel to find modern technological tools',
        rationale: 'Hopes to discover satellite phones, GPS trackers, or military survival rations.',
        consequence: 'The packages contain ice skates, videotapes, and a volleyball. While the skate blades provide cutting tools, opening everything burns precious daylight without securing drinking water.',
        verdict: 'partial'
      },
      {
        id: 'D',
        label: 'Climb to the island’s highest volcanic peak to establish a continuous smoke signal',
        rationale: 'Alerts passing commercial airliners or naval ships to your exact location.',
        consequence: 'You exhaust your remaining physical strength climbing jagged volcanic rock in bare feet. You suffer severe lacerations, pass out from dehydration, and no ships pass by.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'Chuck systematically addressed his biological hierarchy: collecting fresh rainwater in coconut shells, securing shelter in a cliffside cave, and teaching himself to create fire. Only after stabilizing his physical survival did he repurpose parcel items (ice skates, Wilson volleyball) to plan his escape.',
    frameworkBridge: 'This is the Product Maslow Hierarchy of Needs applied to product engineering. You cannot build higher-order strategic capabilities (escape rafts, viral growth) if foundational prerequisites (water, reliable core architecture, uptime) are compromised. Execution must strictly honor dependencies.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-024',
    protagonist: 'Chesley "Sully" Sullenberger',
    roleTitle: 'Captain, US Airways Flight 1549',
    momentLabel: 'January 2009 · New York City airspace',
    title: 'Your Call: Miracle on the Hudson',
    setup: 'It is 3:27 PM on January 15, 2009 over the Bronx, New York. You are Captain Chesley "Sully" Sullenberger, piloting US Airways Flight 1549 with 155 souls on board. At 2,800 feet, a flock of Canada geese strikes both CFM56 jet engines, causing catastrophic thrust failure and cockpit cabin shuddering. Air traffic control offers runway clearances at LaGuardia and Teterboro, but you are losing 1,000 feet of altitude per minute over dense urban Manhattan.',
    stakes: [
      'Attempting to reach a runway and coming up short means crashing into populated skyscrapers.',
      'You have less than 208 seconds before the heavy airliner impacts the surface of the earth.',
      'Cockpit checklists for dual engine failure assume cruise altitudes above twenty thousand feet.',
      'Ditching an Airbus A320 into freezing water has never succeeded in aviation history.'
    ],
    question: 'Where do you commit the unpowered airliner for emergency landing?',
    options: [
      {
        id: 'A',
        label: 'Bank aggressively toward LaGuardia runway 13 to attempt a high-speed deadstick landing',
        rationale: 'Follows official air traffic controller recommendations toward the nearest certified airport.',
        consequence: 'The heavy airliner lacks the glide ratio to clear the highway overpass and approach lights. The plane clips buildings and crashes into the Astoria neighborhood with total loss of life.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Commit decisively to ditching on the unobstructed Hudson River and prep the cabin',
        rationale: 'Trades runway landing certainty to eliminate catastrophic urban ground collision risk.',
        consequence: 'You maneuver the aircraft smoothly over the George Washington Bridge, glideslope level with wings parallel to the water, and touch down on the Hudson. Ferry boats rescue all 155 passengers and crew in minutes.',
        verdict: 'strong'
      },
      {
        id: 'C',
        label: 'Turn toward Teterboro Airport across the river in New Jersey',
        rationale: 'Offers a straight-in descent approach away from Manhattan skyscraper flight corridors.',
        consequence: 'Flight data recorders show the aircraft drops below glide threshold over the Palisades cliffs. The plane impacts commercial warehouses in North Bergen with zero survivors.',
        verdict: 'partial'
      },
      {
        id: 'D',
        label: 'Circle in place over Central Park while the copilot attempts multiple engine relights',
        rationale: 'Attempts to restart jet engines while remaining over open municipal parkland.',
        consequence: 'The engines suffered complete structural internal blade destruction and cannot reignite. The aircraft stalls at five hundred feet and crashes into the park reservoir.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'Captain Sully recognized within thirty seconds that both LaGuardia and Teterboro were out of reach. He calmly informed air traffic control, "We’re gonna be in the Hudson," executed a textbook water landing, and evacuated all 155 passengers safely onto rescue ferries.',
    frameworkBridge: 'This is OODA Loop (Observe-Orient-Decide-Act) Latency Budgeting in high-velocity operations. When NTSB investigators simulated the flight, pilots only reached runways if they turned immediately without cognitive human reaction time. Sully’s real-world latency accounting proved that committing to the river was the only survivable choice.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-025',
    protagonist: 'Marty Baron',
    roleTitle: 'Editor-in-Chief, The Boston Globe',
    momentLabel: '2001 · Boston, Massachusetts',
    title: 'Your Call: Investigating the Archdiocese',
    setup: 'It is summer 2001 in Boston. You are Marty Baron, the newly arrived outsider editor-in-chief of The Boston Globe. You are Jewish, unmarried, and unfamiliar with Boston’s deeply entrenched Catholic cultural hierarchy. On your first day, you read a column about a local lawyer claiming Cardinal Law knew about sexually abusive priests. The Globe’s veteran reporters view this as another isolated rogue priest story, having covered similar episodic lawsuits for years without touching church leadership.',
    stakes: [
      'The Catholic Archdiocese holds enormous cultural, political, and economic power in Boston.',
      'Globe circulation and advertising revenue depend heavily on a majority-Catholic readership.',
      'Pursuing episodic rogue priest stories generates sensational front-page headlines immediately.',
      'Uncovering institutional conspiracy requires suing the Church to unseal confidential records.'
    ],
    question: 'How do you direct the Spotlight investigative investigative team’s reporting strategy?',
    options: [
      {
        id: 'A',
        label: 'Publish a sensational exposé immediately focusing exclusively on Father John Geoghan',
        rationale: 'Capitalizes on immediate reader outrage with a shocking individual predator story.',
        consequence: 'The Archdiocese settles quietly with the victims, portrays Geoghan as an isolated bad apple, and the systemic cover-up continues unchecked for decades.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Spike the investigation completely to avoid antagonizing the city’s civic leadership',
        rationale: 'Protects the newspaper’s advertising accounts and preserves access to municipal leaders.',
        consequence: 'The Globe maintains comfortable civic relationships while rival media eventually breaks the scandal. The Globe’s journalistic credibility and moral standing are permanently compromised.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Direct Spotlight to ignore individual priests and prove the systemic institutional cover-up',
        rationale: 'Elevates the investigation from anecdotal symptoms to structural root-cause accountability.',
        consequence: 'The team sues to unseal secret archives, discovering evidence that Cardinal Law systematically reassigned hundreds of abusive priests. The investigation wins the Pulitzer Prize and forces global Vatican reform.',
        verdict: 'strong'
      },
      {
        id: 'D',
        label: 'Assign the story to general city-desk beat reporters while Spotlight investigates city hall',
        rationale: 'Maintains daily news coverage of police reports without committing expensive long-term investigative resources.',
        consequence: 'Overworked beat reporters settle for standard church PR statements. The structural conspiracy remains hidden behind confidential settlements.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'Marty Baron instructed Walter Robinson and the Spotlight team to focus on the system: Cardinal Law and the institutional bureaucracy that enabled and concealed abuse. The resulting series exposed hundreds of priests in Boston alone and triggered worldwide investigations.',
    frameworkBridge: 'This demonstrates Systemic Pattern Extraction & Root Cause Clustering. Novice organizations waste resources chasing episodic anomalies (isolated bug fixes). Baron recognized that clustering independent data points reveals structural systemic failure, creating transformative organizational impact.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-026',
    protagonist: 'John Nash',
    roleTitle: 'Graduate Mathematics Researcher, Princeton University',
    momentLabel: '1949 · Princeton, New Jersey',
    title: 'Your Call: Beyond Adam Smith at the Pub',
    setup: 'It is 1949 at Princeton University. You are John Nash, a brilliant but socially isolated doctoral candidate in mathematics. While your peers publish incremental extensions of existing theorems, you have spent months searching for a truly original mathematical concept. Sitting in a campus tavern, you watch four classmates all prepare to compete for the attention of a striking blonde woman entering the pub, while completely ignoring her four brunette companions.',
    stakes: [
      'Your faculty advisor warns that failure to publish a doctoral dissertation will forfeit your fellowship.',
      'Adam Smith’s foundational economic doctrine holds that individual self-interest yields common good.',
      'Competing directly for the same prize guarantees mutual destruction and zero payoff for everyone.',
      'Academic colleagues mock your solitary research habits as arrogant eccentricity.'
    ],
    question: 'How do you formulate a mathematical equilibrium for competitive multi-agent systems?',
    options: [
      {
        id: 'A',
        label: 'Join your classmates in competing aggressively for the blonde woman’s attention',
        rationale: 'Follows traditional competitive market dynamics to maximize individual utility.',
        consequence: 'All four men crowd the blonde woman simultaneously, annoying her so she leaves. When you then approach her brunette friends, they reject you for being second-choice.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Encourage your classmates to leave the pub entirely to eliminate all social friction',
        rationale: 'Avoids uncomfortable social competition by withdrawing from the interaction space.',
        consequence: 'Your classmates ignore your eccentric advice and stay in the pub. You return to your dorm empty-handed with zero mathematical progress.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Compromise by proposing a rotating five-minute speaking schedule for the blonde',
        rationale: 'Attempts to enforce centralized socialist coordination on competitive individuals.',
        consequence: 'The woman finds the mechanical schedule absurd and leaves. Your classmates mock your bizarre social engineering and your thesis remains unwritten.',
        verdict: 'partial'
      },
      {
        id: 'D',
        label: 'Coordinate non-zero-sum cooperation where everyone approaches the brunette friends simultaneously',
        rationale: 'Achieves a stable equilibrium where every agent secures a positive payoff without mutual interference.',
        consequence: 'You realize that Adam Smith’s theory was incomplete: the best result comes when everyone does what is best for himself and the group. You draft your 27-page doctoral thesis on non-cooperative games, earning the Nobel Prize.',
        verdict: 'strong'
      }
    ],
    whatActuallyHappened: 'Nash realized that if everyone competed for the same prize, they canceled each other out and insulted the other options. By cooperating to avoid direct head-to-head conflict, everyone won. This insight became the foundation of Game Theory and the Nash Equilibrium.',
    frameworkBridge: 'This is the Game-Theoretic Payoff Matrix & Nash Equilibrium. In competitive strategy and product metrics, optimizing purely for localized self-interest often triggers ruinous price wars and mutually assured destruction. Identifying non-zero-sum equilibria creates sustainable market value.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-027',
    protagonist: 'Dr. Erin Mears',
    roleTitle: 'Epidemic Intelligence Service Officer, CDC',
    momentLabel: '2011 · Minneapolis, Minnesota',
    title: 'Your Call: Modeling the MEV-1 Outbreak Curve',
    setup: 'It is 2011 in a Minneapolis public health command room. You are Dr. Erin Mears, an Epidemic Intelligence Service officer dispatched by the Centers for Disease Control. A novel paramyxovirus (MEV-1) transmitted by respiratory droplets and fomites has caused rapid encephalitis deaths in Hong Kong, Chicago, and Minneapolis. Local health commissioners are reluctant to issue quarantine advisories or cancel school basketball tournaments, fearing public economic panic.',
    stakes: [
      'The virus has a case fatality rate near thirty percent with zero vaccine or antiviral cure.',
      'Civic officials are prioritizing political and economic normalcy over epidemiological warnings.',
      'Failing to isolate early outbreak clusters allows the infection rate to expand exponentially.',
      'Frontline healthcare workers lack specialized personal protective gear in local hospitals.'
    ],
    question: 'How do you communicate the urgency of the viral reproductive metrics to civic leadership?',
    options: [
      {
        id: 'A',
        label: 'Downplay the severity to preserve public calm while waiting for laboratory confirmation',
        rationale: 'Avoids triggering financial stock market panic before conclusive serological data arrives.',
        consequence: 'Unrestricted social gatherings accelerate transmission across the city. Hospital intensive care units are overrun within four days, leading to systemic social breakdown.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Explain the mathematical exponential expansion of R0 and demand immediate school and workplace closures',
        rationale: 'Uses basic reproduction rate modeling to illustrate why immediate social distancing is mandatory.',
        consequence: 'You break down how an R-naught of four means one case becomes sixteen, then sixty-four, then thousands. The health commissioner heeds the math, mobilizing gymnasiums as field hospitals and ordering aggressive contact tracing.',
        verdict: 'strong'
      },
      {
        id: 'C',
        label: 'Recommend closing only international airport arrival terminals while keeping local venues open',
        rationale: 'Focuses containment on foreign travelers while preserving domestic commercial activity.',
        consequence: 'The virus is already circulating silently within the local community through surface fomites. Community spread explodes inside suburban shopping malls and schools.',
        verdict: 'partial'
      },
      {
        id: 'D',
        label: 'Advise residents to take herbal immune supplements while continuing normal work routines',
        rationale: 'Promotes non-invasive health wellness without requiring municipal economic disruption.',
        consequence: 'Faux treatments provide false confidence, encouraging sick citizens to remain in public spaces. Infection numbers spike catastrophically and municipal infrastructure collapses.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'Dr. Mears stood before Minneapolis officials and explained the terrifying mathematics of R-naught: the reproduction rate determining how many people an infected person contaminates. Her relentless frontline epidemiology saved thousands before she herself contracted the virus.',
    frameworkBridge: 'This is Epidemic Viral Engine & K-Factor Decomposition applied to product metrics. Growth leaders evaluate viral loops using the exact same mathematics: a K-factor (or R0) greater than 1 generates compounding viral expansion, while values below 1 decay into organic dormancy.',
    verification: 'verified'
  }
];
