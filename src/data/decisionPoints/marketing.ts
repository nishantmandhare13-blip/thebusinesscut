import { DecisionPoint } from '@/types/decisionPoint';

export const MARKETING_DECISION_POINTS: DecisionPoint[] = [
  {
    lessonId: 'lms-045',
    protagonist: 'Seth Davis',
    roleTitle: 'Trainee Stockbroker, J.T. Marlin',
    momentLabel: '1999 · Long Island, New York',
    title: 'Your Call: The Thirty-Second Outbound Cold Call',
    setup: 'It is late 1999 on the noisy boiler room floor of J.T. Marlin. You are Seth Davis, a college dropout and former underground casino operator desperate for your father’s respect. You have dialed Dr. Jacobs, a busy physician with zero interest in telemarketed stock pitches. Your managing partner Jim Young paces behind you, screaming that you have thirty seconds to establish urgency before the prospect slams down the receiver.',
    stakes: [
      'Cold phone prospects hang up within ten seconds if the pitch sounds generic.',
      'Failing to open new accounts results in public humiliation and immediate termination.',
      'Aggressive pushy tactics can trigger regulatory complaints from municipal authorities.',
      'You must manufacture immediate fear of missing out on an impending initial public offering.'
    ],
    question: 'How do you structure your thirty-second cold outbound phone hook?',
    options: [
      {
        id: 'A',
        label: 'Frame an impending IPO allocation window that closes at the 4:00 PM bell',
        rationale: 'Creates an authentic urgency bridge that overcomes cognitive resistance and forces immediate commitment.',
        consequence: 'You tell Dr. Jacobs that institutional shares in a medical tech firm are restricted and closing at the market bell. Hooked by professional relevance and urgent scarcity, he buys two thousand shares, opening his account.',
        verdict: 'strong'
      },
      {
        id: 'B',
        label: 'Apologize profusely for calling during patient examination hours and request a call back',
        rationale: 'Shows respectful deference to the physician’s professional busy medical schedule.',
        consequence: 'Dr. Jacobs hangs up instantly and instructs his receptionist to block your telephone number. You fail to book the appointment and Jim Young screams at you.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Read the complete historical dividend balance sheet of the company from the prospectus',
        rationale: 'Educates the doctor with objective historical accounting fundamentals.',
        consequence: 'The dry financial recitation loses the doctor’s attention within eight seconds. He interrupts you, mutters that he has surgery, and disconnects.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Offer a free weekend golf resort voucher to secure a twenty-minute meeting',
        rationale: 'Uses tangible promotional bribery to overcome telephone cold resistance.',
        consequence: 'The doctor views the travel bribe as unprofessional and suspicious. He questions the firm’s regulatory credentials and reports the brokerage to the NASD.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'Seth mastered the high-pressure script, using artificial deadlines and the illusion of restricted allocations to force prospects to make instant commitments. He rapidly became the firm’s top trainee broker, earning hundreds of thousands before realizing the underlying stocks were fraudulent shells.',
    frameworkBridge: 'This is The 30-Second Outbound Hook & Urgency Bridge in outbound sales operations. Cold prospecting requires immediately piercing cognitive skepticism by pairing high perceived competence with an urgent, time-decaying call to action that forces an immediate binary decision.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-046',
    protagonist: 'Nick Naylor',
    roleTitle: 'Chief Spokesman & Vice President, Academy of Tobacco Studies',
    momentLabel: '2005 · Washington D.C.',
    title: 'Your Call: The Hostile Daytime TV Debate',
    setup: 'It is 2005 on the stage of the Joan Lunden daytime talk show in Washington D.C. You are Nick Naylor, chief lobbyist for Big Tobacco. You are seated on a panel opposite an anti-smoking activist, a hostile health commissioner, and a sixteen-year-old cancer patient who recently quit smoking. The studio audience despises you, and the host opens by asking how you can sleep at night selling lethal cigarettes to children.',
    stakes: [
      'The studio audience and millions of television viewers are emotionally hostile to your position.',
      'Defending the health safety of cigarettes is scientifically impossible and legally fatal.',
      'Losing this public debate will trigger federal packaging legislation requiring skull-and-crossbones labels.',
      'You must reframe the debate from public health damage to individual personal freedom and choice.'
    ],
    question: 'How do you reframe the public narrative to defend your corporate client?',
    options: [
      {
        id: 'A',
        label: 'Claim that smoking tobacco cigarettes actually prevents lung cancer and improves breathing',
        rationale: 'Mounts an aggressive direct counter-attack against medical consensus.',
        consequence: 'The studio audience boos furiously and the health commissioner produces certified oncological data. You are laughed off the stage, destroying your corporate credibility completely.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Reframe the debate around consumer liberty, parental responsibility, and bureaucratic government overreach',
        rationale: 'Shifts the battleground from unwinnable health science to universally cherished personal freedom.',
        consequence: 'You argue that cigarette companies want children to live long so they keep smoking, while anti-smoking bureaucrats secretly need people to die to protect their government budgets. You shift the debate from lung disease to personal freedom, winning the television audience.',
        verdict: 'strong'
      },
      {
        id: 'C',
        label: 'Break down in tears on live television and apologize for your industry’s actions',
        rationale: 'Generates personal sympathy by expressing moral remorse before millions of viewers.',
        consequence: 'Your tobacco industry bosses fire you before you leave the television studio. Anti-smoking activists seize your confession as ammunition to pass punitive tobacco excise taxes.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Remain silent and refuse to answer the host’s hostile opening question',
        rationale: 'Avoids making incriminating public admissions on national television.',
        consequence: 'Silence appears to the viewing public as a direct admission of guilt. The network edits your blank stare into an anti-tobacco public service announcement.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'Naylor deftly reframed the argument: he gave the teenage cancer patient a donation, pointed out that his industry has every financial incentive to keep people alive, and positioned government regulators as nanny-state despots telling parents how to raise children.',
    frameworkBridge: 'This exemplifies Framing Theory & Narrative Reframing Matrix (Lakoff / Kahneman). When defending unpopular products or crises, directly disputing established negative facts is suicidal. Master strategists shift the cognitive frame entirely to higher-order values (choice, autonomy, innovation) where they hold strategic advantage.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-047',
    protagonist: 'Stereotypical Barbie',
    roleTitle: 'Brand Icon & Cultural Ambassador, Barbieland',
    momentLabel: '2023 · Los Angeles & Barbieland',
    title: 'Your Call: Escaping the Corporate Box',
    setup: 'It is 2023 inside the corporate headquarters of Mattel in Los Angeles. You are Stereotypical Barbie. After experiencing flat feet, cellulite, and existential thoughts of death in Barbieland, you traveled to the real world only to discover that modern teenage girls despise you, calling you a fascist consumerist doll who sets women back fifty years. Mattel CEO Will Ferrell and his all-male board of directors are trying to force you into a giant pink toy box to restore the status quo.',
    stakes: [
      'Legacy doll sales have been in terminal decline as digital culture rejects pristine perfection.',
      'Climbing back into the corporate toy box preserves nostalgic comfort but cements brand irrelevance.',
      'Embracing real-world imperfection risks alienating traditional conservative toy collectors.',
      'Ken has imported real-world patriarchy back to Barbieland, threatening total brand collapse.'
    ],
    question: 'How do you revitalize the Barbie brand identity for a cynical modern generation?',
    options: [
      {
        id: 'A',
        label: 'Step meekly into the pink packaging box and let executives seal the ties',
        rationale: 'Preserves traditional nostalgic brand aesthetics and satisfies corporate executive leadership.',
        consequence: 'You return to an artificial dollhouse existence while real-world sales continue to decline. The brand fades into an obsolete relic of twentieth-century plastic consumerism.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Sue Mattel in federal court for manufacturing female dolls with anatomically impossible proportions',
        rationale: 'Takes legal punitive action against the corporation to punish gender stereotyping.',
        consequence: 'The lawsuit drags on for years in corporate litigation, freezing toy production. Mattel cancels the doll line entirely and cuts thousands of manufacturing jobs.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Subvert brand tropes with radical self-aware irony, embracing existential humanity and feminist contradictions',
        rationale: 'Leverages irony arbitrage to transform legacy brand baggage into a cultural celebration.',
        consequence: 'By mocking Mattel’s corporate absurdity and exploring real female struggles, the brand achieves cultural renaissance. The movie grosses $1.4 billion, revitalizing global toy merchandise and cultural relevance.',
        verdict: 'strong'
      },
      {
        id: 'D',
        label: 'Rebrand exclusively as a militant combat action figure to appeal to young boys',
        rationale: 'Pivots product positioning toward the male action-figure market to expand TAM.',
        consequence: 'The aggressive military branding confuses core doll buyers while boys view it as a fake gimmick. Mattel warehouses fill with unsold combat dolls.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'Barbie fled the corporate board, returned to Barbieland to dismantle the Kendom, and chose to become a real, imperfect mortal human. The self-aware movie transformed Mattel’s most criticized toy into a billion-dollar cultural phenomenon.',
    frameworkBridge: 'This is Subversive Brand Modernization & Irony Arbitrage. When a legacy brand suffers from cultural fatigue or perceived toxic baggage, attempts to defend historical perfection fail. Innovators must lean directly into audience critiques, subverting past tropes through self-aware satire to unlock authenticity.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-048',
    protagonist: 'Christof',
    roleTitle: 'Creator & Executive Producer, The Truman Show',
    momentLabel: '1998 · Seahaven Island Control Room',
    title: 'Your Call: Seamless Native Merchandising',
    setup: 'It is 1998 in the lunar control room hovering above Seahaven Island. You are Christof, visionary creator of The Truman Show. Your live television broadcast runs twenty-four hours a day, commercial-free, watched by over one billion people worldwide. The multi-million-dollar production budget is funded entirely by seamless product placements integrated into Truman Burbank’s daily life by his cast-member wife and neighbors.',
    stakes: [
      'The broadcast has zero commercial breaks; brand revenue depends 100% on native in-scene placements.',
      'Clumsy, artificial product plugs trigger Truman’s growing suspicion that his reality is staged.',
      'Sponsors like Mococoa and Chef’s Pal demand high-visibility closeup camera angles.',
      'Truman is growing erratic, noticing camera glitches and staging oddities across town.'
    ],
    question: 'How do you optimize native product placements without breaking the narrative illusion?',
    options: [
      {
        id: 'A',
        label: 'Interrupt the live broadcast with traditional 30-second commercial breaks every ten minutes',
        rationale: 'Guarantees sponsor impressions through standardized, familiar television advertising formats.',
        consequence: 'Cutting to commercial breaks ruins the sacred voyeuristic conceit of the uninterrupted live show. Viewers tune out in droves and ratings collapse.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Force Truman’s wife to turn to camera during arguments to recite coffee slogans',
        rationale: 'Maximizes brand recall during high-drama moments when viewer attention peaks.',
        consequence: 'The bizarre, unmotivated commercial plug makes Truman scream in horror: "Who are you talking to?!" His suspicion turns to terror, accelerating his desperate escape from Seahaven.',
        verdict: 'partial'
      },
      {
        id: 'C',
        label: 'Cease all commercial sponsorships and fund the broadcast through mandatory municipal viewer taxes',
        rationale: 'Eliminates corporate merchandising completely to focus purely on pristine artistic storytelling.',
        consequence: 'The network has no legal taxing authority over worldwide viewers. Without commercial revenue, the show runs out of production funds and shuts down within a month.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Integrate brands natively into physical props and lifestyle rituals instead of spoken pitches',
        rationale: 'Optimizes the native seamlessness index to deliver impressions without disrupting environmental realism.',
        consequence: 'By placing lawnmowers, beers, and breakfast cereals naturally into Truman’s daily background routines, sponsors achieve record sales while Truman’s psychological reality remains stable.',
        verdict: 'strong'
      }
    ],
    whatActuallyHappened: 'Christof relied heavily on in-show product placement, but when actors delivered blatant, robotic commercial pitches during emotional arguments, Truman realized his world was manufactured, triggering his escape across the artificial ocean.',
    frameworkBridge: 'This is the Native Placement Seamlessness vs Intrusion Index in modern media. In an ad-blocked, fragmented media world, brands must integrate natively into user workflows. When product placement crosses the threshold into clumsy intrusion, it triggers consumer reactance and destroys trust.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-049',
    protagonist: 'Emory Leeson',
    roleTitle: 'Senior Creative Copywriter, Ad Agency',
    momentLabel: '1990 · New York City',
    title: 'Your Call: Radical Truth in Advertising',
    setup: 'It is 1990 at a high-end Madison Avenue advertising agency. You are Emory Leeson, an exhausted creative copywriter suffering an emotional breakdown over decades of composing dishonest corporate slogans. Having snapped under the cynicism of marketing lies, you have penned completely honest advertisements: "Volvo: Boxy, but good," "Metpath: We deliver clean urine," and "United Airlines: Most of our passengers survive."',
    stakes: [
      'Your agency boss considers honest copywriting to be career suicide and commits you to a sanitarium.',
      'Conventional marketing wisdom insists that admitting product flaws destroys consumer sales.',
      'An accidental print run of your unvarnished ads has hit the Sunday New York Times.',
      'Corporate clients are preparing massive breach of contract lawsuits against your agency.'
    ],
    question: 'How do you position radical candor in consumer advertising?',
    options: [
      {
        id: 'A',
        label: 'Double down on radical honesty, positioning truth-in-advertising as the ultimate trust builder',
        rationale: 'Employs two-sided persuasion to shock cynical consumers into believing core brand claims.',
        consequence: 'Consumers are so stunned by an airline admitting risks that they find the claim that most passengers survive immensely credible. Volvo dealerships sell out across the country, turning radical candor into the hottest agency playbook.',
        verdict: 'strong'
      },
      {
        id: 'B',
        label: 'Issue a groveling public apology and claim an intern mistakenly released the mock drafts',
        rationale: 'Limits legal liability and restores conventional relationships with corporate client sponsors.',
        consequence: 'Clients pull their accounts anyway, and the brief window of consumer brand excitement closes. Your agency returns to generic corporate mediocrity.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Switch to surreal abstract animated cartoons that avoid making any product statements whatsoever',
        rationale: 'Avoids making either true or false claims by relying entirely on artistic ambiguity.',
        consequence: 'Consumers find the abstract cartoons confusing and irrelevant. Product sales drop and the client fires your agency for failing to articulate value.',
        verdict: 'partial'
      },
      {
        id: 'D',
        label: 'Blame the printing press company and file for personal bankruptcy in federal court',
        rationale: 'Evades corporate lawsuits by transferring all legal liability to print vendors.',
        consequence: 'The print vendor produces signed proof of your manuscript. You are sued for defamation, lose your home, and spend years embroiled in civil litigation.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'Emory’s brutally honest ads were accidentally published in major newspapers. Instead of destroying the clients, consumers loved the refreshing transparency: Volvo sales surged, the ads won awards, and Emory ran a successful agency from the sanitarium with fellow patients.',
    frameworkBridge: 'This demonstrates Two-Sided Persuasion & Defect Admitting Matrix in brand positioning. Research proves that admitting a minor, obvious product flaw dramatically elevates consumer belief in your primary strength, cutting through advertising clutter with unassailable authenticity.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-050',
    protagonist: 'Dan Wieden',
    roleTitle: 'Co-Founder & Creative Director, Wieden+Kennedy',
    momentLabel: '1988 · Portland, Oregon',
    title: 'Your Call: Crafting "Just Do It"',
    setup: 'It is 1988 at the Portland offices of Wieden+Kennedy. You are Dan Wieden, creative director on the Nike account. Nike has achieved solid success with elite marathon runners and NBA players, but CEO Phil Knight is skeptical of spending money on national television advertising. He wants an athletic campaign that speaks to elite track athletes, women walking to work, suburban couch potatoes, and inner-city kids alike.',
    stakes: [
      'Phil Knight famously told you: "I don’t believe in advertising; products speak for themselves."',
      'Fragmenting the brand with separate slogans for each sport will bankrupt the modest media budget.',
      'Focusing purely on technical shoe cushioning and rubber outsoles bores general consumers.',
      'Reebok is dominating the aerobic footwear market and beating Nike in overall revenue.'
    ],
    question: 'What central brand positioning tagline do you present to Nike leadership?',
    options: [
      {
        id: 'A',
        label: 'Pitch a technical slogan highlighting patented polyurethane midsole air-cushioning pods',
        rationale: 'Focuses directly on functional performance engineering superiority over rival shoe brands.',
        consequence: 'The technical jargon resonates with elite marathon runners but completely alienates everyday lifestyle walkers. Reebok extends its sales lead in mainstream athletic fashion.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Present "Just Do It," anchoring the brand on emotional resonance, grit, and action',
        rationale: 'Ascends to the peak of the brand resonance pyramid, creating an enduring emotional identity.',
        consequence: 'Phil Knight reluctantly approves the campaign. Featuring eighty-year-old jogger Walt Stack on the Golden Gate Bridge, the tagline becomes a global cultural rallying cry, expanding Nike’s market share by 43%.',
        verdict: 'strong'
      },
      {
        id: 'C',
        label: 'Propose copying Reebok’s pastel-colored aerobic lifestyle ads with dance instructors',
        rationale: 'Directly counters competitor market share gains by mimicking their successful campaigns.',
        consequence: 'Nike looks like an uninspired copycat in the fitness space. Core runners feel betrayed and aerobic dancers stick with original Reebok Freestyles.',
        verdict: 'partial'
      },
      {
        id: 'D',
        label: 'Recommend that Nike cancel all marketing and discount all retail sneakers by ten dollars',
        rationale: 'Competes on pure retail price elasticity without spending money on agency fees.',
        consequence: 'Price discounting erodes the premium brand halo Nike spent a decade building. Retailers dump inventory into discount outlets and brand equity collapses.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'Dan Wieden coined "Just Do It," inspired by the last words of convicted murderer Gary Gilmore ("Let’s do it"). Paired with inspiring everyday athletes, the campaign established Nike as a universal symbol of personal willpower, driving decades of global market dominance.',
    frameworkBridge: 'This is Kevin Lane Keller’s Brand Resonance Pyramid at its zenith. Great brands do not compete on bottom-tier product features or simple imagery; they ascend to the top tier of brand resonance, forging intense psychological bonds where consumers adopt the brand as an expression of their identity.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-051',
    protagonist: 'Steve Jones',
    roleTitle: 'Unit Leader & Undercover Influencer, LifeImage',
    momentLabel: '2009 · Suburban Atlanta, Georgia',
    title: 'Your Call: Stealth Word-of-Mouth Seeding',
    setup: 'It is 2009 in an affluent gated suburban enclave outside Atlanta. You are Steve Jones, leader of a fake nuclear family planted by stealth marketing agency LifeImage. You and your glamorous "wife" Kate and teenage "kids" live in a luxury mansion, driving luxury cars, wearing designer clothing, and using high-end sushi knives to subtly induce your wealthy neighbors into buying the products you display.',
    stakes: [
      'Overt sales pitches will expose your stealth operation and destroy neighbor trust.',
      'LifeImage HQ monitors your unit’s sales conversion metrics and demands weekly quotas.',
      'Neighbor Larry Symonds is taking on crippling credit card debt to match your lifestyle.',
      'The line between authentic human friendship and transactional exploitation is dissolving.'
    ],
    question: 'How do you seed product adoption among your suburban peer group?',
    options: [
      {
        id: 'A',
        label: 'Hand out printed product coupon catalogs during the neighborhood block barbecue',
        rationale: 'Directly provides commercial buying incentives to accelerate retail sales volume.',
        consequence: 'Neighbors immediately realize you are commercial pitchmen posing as friends. You are ostracized from the country club, and your stealth marketing experiment is ruined.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Refuse to show your luxury possessions to neighbors to preserve personal modesty',
        rationale: 'Maintains genuine personal friendships without commercializing human relationships.',
        consequence: 'Your sales numbers drop to zero. LifeImage HQ reassigns your unit to an undesirable territory and replaces you with aggressive stealth operatives.',
        verdict: 'partial'
      },
      {
        id: 'C',
        label: 'Demonstrate effortless lifestyle mastery using seeded products organically during social gatherings',
        rationale: 'Harnesses peer social proof and aspirational envy to trigger frictionless mimetic desire.',
        consequence: 'You invite neighbors for casual dinners where you effortlessly carve steaks with seeded cutlery and serve rare wines. Neighbors rush out to buy identical items, driving your regional sales index to record highs.',
        verdict: 'strong'
      },
      {
        id: 'D',
        label: 'Knock on neighbor doors at night wearing LifeImage corporate badges to sell vacuum cleaners',
        rationale: 'Converts stealth marketing into straightforward direct door-to-door retail selling.',
        consequence: 'Suburban security guards escort you off the premises for violating neighborhood soliciting bylaws. The gated community files a restraining order against your firm.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'Steve mastered organic stealth marketing by simply living aspirational moments with seeded products. However, the unchecked consumer envy drove his neighbor Larry to bankruptcy and suicide, forcing Steve to publicly confess the corporate deception.',
    frameworkBridge: 'This demonstrates Robert Cialdini’s Social Proof & Organic Seeding Flywheel. Consumers unconsciously calibrate their desires and purchases against aspirational peer cohorts. Organic, unannounced influencer seeding operates beneath defensive advertising skepticism, generating immense commercial velocity.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-052',
    protagonist: 'Scat',
    roleTitle: 'Marketing Graduate & Brand Strategist',
    momentLabel: '2013 · Los Angeles, California',
    title: 'Your Call: The "Fukk" Energy Drink Launch',
    setup: 'It is 2013 in Los Angeles. You are Scat, a broke marketing graduate. You have conceived an energy drink called "Fukk," an all-black matte can with raw, aggressive, subversive attitude. Energy drink beverage giant Kokats (Coca-Cola proxy) is dominated by six-million-dollar flavor formulas, but you know that in commodity carbonated sugar water, liquid taste is irrelevant: image, attitude, and perceived status arbitrage are the only things that matter.',
    stakes: [
      'The energy drink category is fiercely saturated by Red Bull and Monster Beverage.',
      'Formulating a proprietary, patent-protected flavor requires millions in food science capital.',
      'Beverage executives dismiss your concept as an unrefined, offensive profanity stunt.',
      'Rival executive Sneaky is plotting to steal your brand trademarks and pitch them to corporate boards.'
    ],
    question: 'How do you position your commodity beverage to capture market share?',
    options: [
      {
        id: 'A',
        label: 'Compete on laboratory taste tests by formulating a natural organic acai berry flavor',
        rationale: 'Relies on objective blind-taste test superiority to win discerning beverage critics.',
        consequence: 'Blind taste tests prove irrelevant; consumers cannot distinguish acai from cranberry. With no brand mystique or visual edge, the drink sits untouched on convenience store shelves.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Price the drink at fifty cents a can to undercut Red Bull drastically',
        rationale: 'Captures budget-conscious consumers through aggressive predatory retail price cutting.',
        consequence: 'Low pricing signals cheap, toxic chemical ingredients to teenagers. Convenience store owners refuse to stock low-margin inventory, driving the product into bankruptcy.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Market the beverage as a pediatric health tonic endorsed by national dentists',
        rationale: 'Positions the product in a totally uncontested clinical wellness niche.',
        consequence: 'Parents find carbonated pediatric tonics bizarre, while teenagers reject it as uncool. The contradictory positioning destroys all commercial market viability.',
        verdict: 'partial'
      },
      {
        id: 'D',
        label: 'Position the drink purely on provocative semiotics and subversive anti-corporate identity',
        rationale: 'Creates immense perceived value arbitrage by turning a commodity can into a badge of rebellion.',
        consequence: 'The sleek, provocative black can becomes an overnight viral sensation among youth seeking counter-cultural swagger. Major conglomerates launch a frantic multi-million-dollar bidding war to acquire the brand.',
        verdict: 'strong'
      }
    ],
    whatActuallyHappened: 'Scat recognized that in the beverage category, product formulation is a commodity; the brand semiotics are the product. By positioning "Fukk" as an edgy, anti-establishment lifestyle symbol, the drink triggered an industry acquisition bidding frenzy.',
    frameworkBridge: 'This is the Semiotics & Perceived Value Arbitrage Matrix in commodity marketing. When functional product differences approach zero, economic value decouples from physical unit cost and shifts entirely into cultural signifiers, brand mythologies, and social identity signaling.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-053',
    protagonist: 'Maurizio Gucci',
    roleTitle: 'Majority Shareholder & CEO, Gucci Group',
    momentLabel: '1989 · Florence, Italy',
    title: 'Your Call: Rescuing Gucci from Mass-Market Dilution',
    setup: 'It is 1989 in Florence, Italy. You are Maurizio Gucci, having won control of the fashion dynasty after bitter family legal wars. Under your uncle Aldo, Gucci aggressively expanded revenue by licensing the iconic double-G logo onto 22,000 mass-market products, including cheap canvas sneakers, coffee mugs, and duty-free keychains. While annual cash flow is high, elite fashion tastemakers now dismiss Gucci as a tacky, overexposed airport souvenir brand.',
    stakes: [
      'Canceling lucrative licensing contracts cuts millions in immediate annual licensing royalty cash flow.',
      'Your financial backers at Investcorp demand profitability and an end to family infighting.',
      'Over-licensing has destroyed brand exclusivity and haute couture runway credibility.',
      'Restoring luxury prestige requires expensive hiring of unknown visionary designers like Tom Ford.'
    ],
    question: 'How do you restructure Gucci’s brand architecture to restore luxury pricing power?',
    options: [
      {
        id: 'A',
        label: 'Terminate mass-market licenses, pull products from duty-free shops, and restore luxury scarcity',
        rationale: 'Restores pricing power and luxury exclusivity by enforcing Kapferer’s luxury brand anti-laws.',
        consequence: 'You slash wholesale licensing from 22,000 items to core leather goods, taking heavy short-term losses. You hire Tom Ford to reinvent runway glamour, catapulting Gucci back to the pinnacle of global luxury.',
        verdict: 'strong'
      },
      {
        id: 'B',
        label: 'Double down on mass licensing, putting the Gucci logo on umbrellas and flip-flops',
        rationale: 'Maximizes short-term licensing royalty cash flow across global supermarket retail channels.',
        consequence: 'Gucci becomes indistinguishable from cheap knockoffs at flea markets. High-net-worth luxury shoppers abandon the brand forever, destroying its enterprise valuation.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Keep current mass-market licensing while launching a separate budget sub-brand called "G-Line"',
        rationale: 'Attempts to capture both ultra-luxury shoppers and budget consumers simultaneously.',
        consequence: 'The budget sub-brand cannibalizes high-margin sales and further confuses brand positioning. Premium boutiques drop Gucci collections to make room for Prada.',
        verdict: 'partial'
      },
      {
        id: 'D',
        label: 'Sell all manufacturing tanneries and convert Gucci into a pure intellectual property holding shell',
        rationale: 'Eliminates all physical manufacturing capital overhead to collect passive IP royalties.',
        consequence: 'Quality collapses completely across licensed manufacturing plants. Counterfeiters flood the market and legal trademark disputes bankrupt the holding entity.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'Maurizio canceled thousands of tacky licensing deals, removed Gucci from discount duty-free shelves, and hired Dawn Mello and Tom Ford. Though Maurizio lost personal financial control to Investcorp, his unyielding commitment to luxury scarcity saved Gucci from permanent brand oblivion.',
    frameworkBridge: 'This is Kapferer’s Luxury Brand Anti-Laws & Scarcity Matrix in brand architecture. Traditional consumer marketing pursues volume, accessibility, and market share. Luxury marketing demands the exact opposite: deliberate scarcity, friction, and restricting distribution to maintain pricing power and prestige.',
    verification: 'verified'
  }
];
