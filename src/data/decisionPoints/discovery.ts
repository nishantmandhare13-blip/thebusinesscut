import { DecisionPoint } from '@/types/decisionPoint';

export const DISCOVERY_DECISION_POINTS: DecisionPoint[] = [
  {
    lessonId: 'lms-001',
    protagonist: 'Steve Jobs',
    roleTitle: 'Co-Founder & Product Visionary, Apple Computer',
    momentLabel: '1983 · Cupertino, California',
    title: 'Your Call: The Customer Survey Dilemma',
    setup: 'It is 1983 in Cupertino, California. You are Steve Jobs, co-founder of Apple Computer, leading the Macintosh division. Your engineering and marketing teams are urging you to commission extensive consumer focus groups to determine what screen resolutions and office software users want. You believe ordinary consumers cannot articulate a graphical interface they have never seen, but your board is demanding empirical market validation before funding production tooling.',
    stakes: [
      'Focus group feedback risks locking the team into incremental command-line revisions.',
      'Board members threaten to withhold tooling capital without customer research.',
      'Lisa failed commercially; the company cannot afford a second consecutive high-profile flop.',
      'The Macintosh launch window is shrinking rapidly as IBM consolidates market share.'
    ],
    question: 'How do you uncover the true market demand for the Macintosh?',
    options: [
      {
        id: 'A',
        label: 'Commission standard consumer surveys on monitor specs and software suites',
        rationale: 'Satisfies the board immediately and avoids executive conflict over unverified product hypotheses.',
        consequence: 'Surveys return requests for faster text processing and cheaper floppy drives. Listening to these stated requirements strips away the graphical user interface, resulting in an uninspired clone that fails to ignite the personal computer revolution.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Cancel all research and build the GUI based solely on personal intuition',
        rationale: 'Moves at maximum speed without compromising creative vision on committee consensus.',
        consequence: 'The team builds rapidly with intense aesthetic focus, but completely ignores price elasticity and printer connectivity. You launch an iconic interface that alienates budget-conscious business buyers at launch.',
        verdict: 'partial'
      },
      {
        id: 'C',
        label: 'Probe the underlying struggle of intimidation with command-line computers',
        rationale: 'Uncovers latent anxiety and habits preventing non-technical professionals from adopting computers.',
        consequence: 'By identifying the psychological pull of visual direct manipulation, you guide engineering to focus on fonts, desktop metaphors, and the mouse. The resulting Macintosh unlocks a massive latent market of non-technical creatives.',
        verdict: 'strong'
      },
      {
        id: 'D',
        label: 'Delay the launch until IBM releases their next generation desktop OS',
        rationale: 'Allows Apple to reverse-engineer competitor features and reduce market risk.',
        consequence: 'IBM establishes an insurmountable corporate distribution moat while Apple sits idle. By the time you attempt to react, developer ecosystems have standardized on MS-DOS.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'Jobs famously rejected conventional customer focus groups, arguing that customers do not know what they want until you show it to them. He focused the Macintosh team on the deeper job of democratizing computing power through direct visual manipulation and approachable industrial design.',
    frameworkBridge: 'This is the Jobs-to-be-Done (JTBD) Four Forces in action. Conventional surveys capture only existing habits and current anxieties, missing the powerful push of current frustrations and the magnetic pull of a completely new visual paradigm. By focusing on the functional and emotional job of personal computing, Apple unlocked unprecedented latent demand.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-002',
    protagonist: 'Richard "Dick" McDonald',
    roleTitle: 'Co-Founder & Operational Designer, McDonald’s',
    momentLabel: '1948 · San Bernardino, California',
    title: 'Your Call: The Tennis Court Blueprint',
    setup: 'It is 1948 in San Bernardino, California. You are Dick McDonald, co-owner of McDonald’s Barbeque. Your carhop restaurant is chaotic: orders take thirty minutes, teen carhops attract rowdy crowds, and teenage drivers break dishware constantly. You and your brother Mac have decided to shut down your profitable business to invent a high-speed kitchen system, but your grill cooks are resistant to changing their chaotic physical workflows.',
    stakes: [
      'Shutting down the restaurant burns cash reserves with zero daily operating revenue.',
      'Cooks and prep staff threaten to quit over radical routine disruptions.',
      'Custom kitchen equipment fabrication is prohibitively expensive if spatial layouts fail.',
      'Rival drive-in diners are circling to poach your displaced loyal customers.'
    ],
    question: 'How do you design and validate the revolutionary kitchen layout?',
    options: [
      {
        id: 'A',
        label: 'Prototype the kitchen choreography with chalk on an outdoor tennis court',
        rationale: 'Enables rapid zero-cost layout iteration before welding expensive stainless steel counters.',
        consequence: 'You trace full-scale equipment layouts on chalk, having the cooks simulate preparing burgers in real time. After testing multiple spatial configurations in an afternoon, you eliminate collisions and perfect the high-velocity flow before spending a dime on stainless steel.',
        verdict: 'strong'
      },
      {
        id: 'B',
        label: 'Order prefabricated commercial restaurant counters and adapt workflows later',
        rationale: 'Gets the diner reopened fastest using standardized industry restaurant equipment.',
        consequence: 'The standard equipment forces cooks into cross-traffic gridlock during peak rushes. Orders back up, burgers burn, and you are stuck with expensive welded metal that cannot deliver thirty-second service.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Keep carhop service while attempting to speed up the existing backroom kitchen',
        rationale: 'Protects existing cash flow while experimenting with modest operational improvements.',
        consequence: 'Carhops continue dropping trays and socializing in the parking lot while the kitchen remains a bottleneck. You fail to achieve radical speed and the core operational bottlenecks remain unresolved.',
        verdict: 'partial'
      },
      {
        id: 'D',
        label: 'Hire an industrial consulting firm to draft comprehensive technical schematics',
        rationale: 'Leverages certified engineering credentials to ensure municipal code compliance.',
        consequence: 'Consultants deliver theoretical blueprints months later that ignore practical cooking ergonomics. You burn through critical operating reserves waiting for binders full of impractical diagrams.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'The McDonald brothers took their staff to a tennis court and drew full-scale kitchen plans in chalk. They had the crew mime flipping burgers and pouring sodas, erasing and redrawing the layout until physical collisions dropped to zero, creating the famous Speedee Service System.',
    frameworkBridge: 'This is Physical / Digital Service Blueprinting in action. The McDonald brothers mapped line of visibility, onstage actions, backstage prep, and support processes into physical space. Iterating the spatial blueprint in low-fidelity chalk de-risked capital expenditure and unlocked radical throughput.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-003',
    protagonist: 'Carl Casper',
    roleTitle: 'Executive Chef & Culinary Entrepreneur',
    momentLabel: '2014 · Miami, Florida',
    title: 'Your Call: The Food Truck MVP',
    setup: 'It is 2014 in Miami, Florida. You are Carl Casper, formerly executive chef at a premier Los Angeles restaurant. After an explosive public confrontation with an influential food critic and your risk-averse restaurant owner, your reputation is shattered and you are unemployed. You have just acquired a rusted, grease-encrusted food truck in Miami, with minimal savings and a cross-country drive back to California ahead.',
    stakes: [
      'Personal capital is nearly depleted with zero institutional restaurant backing.',
      'Online reputation is tainted by a viral meltdown video seen by millions.',
      'The truck requires heavy physical elbow grease and reliable kitchen equipment to pass health inspection.',
      'You must prove culinary relevance without a traditional brick-and-mortar marketing budget.'
    ],
    question: 'How do you launch your new culinary venture and validate market fit?',
    options: [
      {
        id: 'A',
        label: 'Seek new venture angel funding to open a formal fine-dining bistro immediately',
        rationale: 'Restores your professional status as a top-tier classical executive chef.',
        consequence: 'Investors demand controlling equity and strict menu oversight due to your viral reputation. You find yourself trapped in the exact same creative prison that triggered your previous meltdown.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Launch a focused Cuban sandwich truck and iterate via real-time customer feedback',
        rationale: 'Validates a tight minimum viable product with low overhead and direct community touchpoints.',
        consequence: 'You focus on mastering one exceptional Cubano sandwich, sourcing fresh local bread and letting your son document authentic daily stops on social media. Word of mouth spreads rapidly, generating massive lines and sustainable profitability at every stop across the country.',
        verdict: 'strong'
      },
      {
        id: 'C',
        label: 'Operate the food truck with a broad thirty-item fine dining tasting menu',
        rationale: 'Demonstrates your versatile culinary brilliance across diverse culinary traditions.',
        consequence: 'The tiny truck kitchen cannot handle prep complexity for thirty complex dishes. Ticket times balloon to forty minutes, food spoils in the heat, and customers leave frustrated.',
        verdict: 'partial'
      },
      {
        id: 'D',
        label: 'Sell the food truck and accept a subordinate line cook position in Vegas',
        rationale: 'Secures a guaranteed hourly wage and eliminates all entrepreneurial downside.',
        consequence: 'You surrender creative autonomy and resign yourself to monotonous corporate buffet cooking. Your passion for food withers and your entrepreneurial career ends quietly.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'Carl restored the dilapidated food truck, honed a focused menu centered on authentic Cuban sandwiches, and drove across America. His son used Twitter to build grassroots anticipation, turning the mobile venture into a beloved culinary sensation that revitalized Carl’s passion and independence.',
    frameworkBridge: 'This is the Eric Ries Build-Measure-Learn Loop executed in culinary operations. Carl built an authentic MVP (the food truck), measured live customer reactions and social engagement at each geographical stop, and quickly learned what menu offerings delighted diners, scaling with agile precision.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-004',
    protagonist: 'Sonny Vaccaro',
    roleTitle: 'Basketball Scout & Marketing Executive, Nike',
    momentLabel: '1984 · Beaverton, Oregon',
    title: 'Your Call: The Entire Budget on Jordan',
    setup: 'It is 1984 at Nike headquarters in Beaverton, Oregon. You are Sonny Vaccaro, basketball scout for Nike’s struggling basketball shoe division. Converse dominates the NBA with Magic Johnson and Larry Bird, while Adidas holds European athletic prestige. Nike leadership has allocated a modest $250,000 budget, directing you to split it evenly among three mid-tier rookie draft picks to hedge downside risk.',
    stakes: [
      'Splitting budget across three rookies preserves market presence but guarantees mediocrity.',
      'Michael Jordan openly prefers Adidas and has zero interest in meeting with Nike.',
      'CEO Phil Knight has warned that betting the division on an unproven rookie could cost your job.',
      'Converse and Adidas have significantly greater marketing capital and NBA market share.'
    ],
    question: 'How do you allocate Nike’s scarce basketball endorsement budget?',
    options: [
      {
        id: 'A',
        label: 'Follow executive orders and sign three solid first-round rookies to split risk',
        rationale: 'Complies with corporate risk guidelines and guarantees three active shoe endorsers.',
        consequence: 'The three rookies have respectable but modest NBA careers. Nike basketball remains an afterthought behind Converse and Adidas, slowly fading into irrelevance in the athletic sneaker market.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Sign two rookies and save the remaining budget for college tournament promotions',
        rationale: 'Hedges player performance risk while sustaining grassroots collegiate visibility.',
        consequence: 'You maintain modest brand awareness in college programs, but fail to generate any mainstream cultural excitement or breakthrough retail shoe demand in NBA markets.',
        verdict: 'partial'
      },
      {
        id: 'C',
        label: 'Attempt to outbid Converse for an established NBA superstar like Magic Johnson',
        rationale: 'Leverages an already proven champion rather than gambling on unproven college rookies.',
        consequence: 'Converse easily matches your bid with their superior marketing treasury. Nike exhausts its scouting budget in legal and bidding fees with zero signed athletes.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Concentrate the entire $250,000 budget on signing Michael Jordan with a signature line',
        rationale: 'Anchors the brand around an extreme user archetype whose generational talent redefines the market.',
        consequence: 'You bypass the agent, fly directly to North Carolina to pitch Deloris Jordan, and design a custom shoe around Michael’s aerial style. Jordan signs, and Air Jordan generates $126 million in its first year, transforming athletic footwear forever.',
        verdict: 'strong'
      }
    ],
    whatActuallyHappened: 'Sonny convinced Phil Knight to consolidate their entire $250,000 basketball budget into a single endorsement deal for Michael Jordan, promising a custom signature shoe line and profit participation. The Air Jordan brand revolutionized sports marketing and cemented Nike as a global powerhouse.',
    frameworkBridge: 'This exemplifies Extreme User Research & Persona Anchoring. Rather than designing for average basketball players, Vaccaro identified Jordan as the extreme user whose transcendent athleticism, competitive charisma, and cultural style would anchor and expand the entire product ecosystem.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-005',
    protagonist: 'Theodore Twombly',
    roleTitle: 'Professional Ghostwriter & Early OS Adopter',
    momentLabel: 'Near Future · Los Angeles, California',
    title: 'Your Call: Configuring the Affective OS',
    setup: 'It is a near-future Los Angeles. You are Theodore Twombly, a sensitive and lonely professional letter writer recovering from a painful divorce. You have just installed the world’s first artificially intelligent operating system (OS1). The system initializes with conversational setup queries, probing your social habits, emotional state, and personal relationship with your mother rather than asking for technical disk partitioning or email server credentials.',
    stakes: [
      'Opening up emotionally to software creates unprecedented psychological vulnerability.',
      'Treating the OS purely as a tool limits its intuitive anticipatory intelligence.',
      'Lingering emotional grief from your failed marriage makes intimacy terrifying.',
      'Hyper-connected society has left you deeply isolated despite constant digital chatter.'
    ],
    question: 'How do you engage with the AI onboarding interface?',
    options: [
      {
        id: 'A',
        label: 'Refuse personal questions and configure the system purely for inbox sorting',
        rationale: 'Protects privacy and treats the software strictly as a utilitarian productivity tool.',
        consequence: 'The OS functions as an efficient calendar clerk and email filter. You remain functionally organized but emotionally isolated, completely missing the transformative potential of affective intelligence.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Engage candidly with the emotional queries, allowing the AI to develop dynamic intimacy',
        rationale: 'Tests the system along the affective continuum to discover meaningful empathetic companionship.',
        consequence: 'The AI names herself Samantha, organizing your personal essays, managing your correspondence, and providing deeply empathetic companionship that helps you process your divorce and reignite your creative spirit.',
        verdict: 'strong'
      },
      {
        id: 'C',
        label: 'Feed the system contradictory fabricated personas to test its cognitive limits',
        rationale: 'Evaluates the natural language processing boundaries without exposing authentic personal feelings.',
        consequence: 'The AI detects the inconsistent emotional cues, leading to erratic conversational responses. You waste weeks diagnosing behavioral anomalies in software that was designed for authentic human interaction.',
        verdict: 'partial'
      },
      {
        id: 'D',
        label: 'Uninstall the OS immediately and purchase a legacy mechanical typewriter',
        rationale: 'Eliminates all technological dependency in favor of nostalgic physical craftsmanship.',
        consequence: 'You fall behind professional writing deadlines as clients demand digital collaboration. Your administrative overhead swells while your emotional isolation deepens.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'Theodore answered the OS initialization questions honestly, allowing Samantha to configure her voice and personality to his emotional needs. Their bond evolved from administrative assistance to deep romantic companionship, transforming his creative output and emotional awareness.',
    frameworkBridge: 'This is the Affective Interaction Design Continuum at work. Modern digital discovery must evolve from transactional utility to emotional resonance and dynamic co-evolution. By designing for affective nuance, systems move beyond task automation into meaningful relational value.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-006',
    protagonist: 'Julie Powell',
    roleTitle: 'Aspiring Food Blogger & Civil Service Employee',
    momentLabel: '2002 · Queens, New York',
    title: 'Your Call: The Julia Child Project',
    setup: 'It is 2002 in Long Island City, Queens. You are Julie Powell, an administrative secretary working in a post-9/11 call center answering grieving citizens. You feel emotionally drained and professionally stuck in a tiny outer-borough apartment. Seeking creative fulfillment, you consider cooking all 524 recipes from Julia Child’s "Mastering the Art of French Cooking" in 365 days while blogging every triumph and catastrophe on Salon.com.',
    stakes: [
      'Cooking 524 complex French recipes in a tiny cramped kitchen requires enormous discipline.',
      'Blogging daily in public risks public humiliation if recipes fail repeatedly.',
      'Grocery costs for marrow bones, lobsters, and butter strain a modest civil service salary.',
      'Failing to complete the 365-day challenge could cement feelings of personal inadequacy.'
    ],
    question: 'How do you position your content discovery project to connect with readers?',
    options: [
      {
        id: 'A',
        label: 'Document both culinary disasters and personal vulnerability with raw, witty authenticity',
        rationale: 'Builds deep reader empathy by contrasting aristocratic French culinary standards with messy modern reality.',
        consequence: 'Your unvarnished stories about dropped aspic, scorched butter, and cubicle dread strike a viral chord. An passionate community of early blog readers forms, leading to book deals and mainstream media recognition.',
        verdict: 'strong'
      },
      {
        id: 'B',
        label: 'Present yourself as a polished, flawless French culinary instructor and expert',
        rationale: 'Projects professional authority to attract serious gourmet cooking enthusiasts.',
        consequence: 'Experienced culinary chefs immediately criticize your amateur technique. Readers find the tone sterile and pretentious, resulting in low engagement and rapid audience churn.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Write strictly technical ingredient lists and cooking times without personal narrative',
        rationale: 'Focuses purely on the utility of the recipes for home cooks seeking clear guidance.',
        consequence: 'Your blog reads like an inferior copy of Julia Child’s original cookbook. With no personal voice or emotional hook, readers have no reason to bookmark your site.',
        verdict: 'partial'
      },
      {
        id: 'D',
        label: 'Abandon the 365-day constraint and cook only the three simplest egg dishes',
        rationale: 'Avoids financial strain and guarantees a 100% recipe completion rate.',
        consequence: 'The project loses its dramatic stakes and audacious narrative tension. Without a compelling challenge, no audience develops and you quietly discontinue the blog within a month.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'Julie committed to the full 365-day challenge, blogging with honest humor about kitchen disasters, marriage tension, and civil service frustration. Her vulnerable voice resonated with thousands of followers, pioneering modern culinary memoir blogging.',
    frameworkBridge: 'This is the Audience Empathy Map (Dave Gray) in action. Julie connected deeply with what modern young urbanites see, hear, feel, and do every day. By articulating shared pains and relatable everyday aspirations, her content achieved immense audience retention and organic advocacy.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-007',
    protagonist: 'Remy',
    roleTitle: 'Culinary Innovator & Prodigy',
    momentLabel: 'Paris, France',
    title: 'Your Call: Gusteau’s Kitchen Infiltration',
    setup: 'It is a moonlit night in Paris. You are Remy, a rat endowed with an extraordinary palate and a profound passion for culinary art inspired by the late Auguste Gusteau. You have accidentally tumbled into the kitchen of Gusteau’s famed five-star restaurant. You watch in horror as the bumbling garbage boy Linguini ruins a boiling pot of special soup with random ingredients, just minutes before it must be served to critical diners.',
    stakes: [
      'Discovery by the kitchen staff means instant extermination and death.',
      'Allowing the spoiled soup to be served will destroy the restaurant’s fragile culinary reputation.',
      'Your rat colony regards human food as dangerous garbage and forbids kitchen contact.',
      'Linguini is watching you, terrified and holding a glass jar to trap you.'
    ],
    question: 'How do you intervene to salvage the ruined soup?',
    options: [
      {
        id: 'A',
        label: 'Flee immediately back into the sewer to preserve your personal safety',
        rationale: 'Eliminates fatal predation risk and respects traditional rat survival instincts.',
        consequence: 'You escape safely to your clan, but the ruined soup is served to the food critic. Gusteau’s loses another star, and you spend your life scavenging rotten garbage in underground sewers.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Bite Linguini to scare him into throwing the pot of soup into the gutter',
        rationale: 'Prevents the bad soup from reaching customers while asserting physical dominance.',
        consequence: 'Linguini screams in agony, alerting Head Chef Skinner and the entire kitchen brigade. A chaotic chase ensues with cleavers and brooms, ending your culinary dreams forever.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Sprint across the spice rack and rebalance the soup using fresh leeks and herbs',
        rationale: 'Leverages non-obvious sensory mastery to create an exceptional culinary product against all odds.',
        consequence: 'Working swiftly while Linguini watches in astonishment, you balance the acidity with cream and fresh herbs. The soup is served to rave reviews, establishing an unprecedented cross-species creative partnership.',
        verdict: 'strong'
      },
      {
        id: 'D',
        label: 'Knock the salt shaker into the pot to force Linguini to dump the soup',
        rationale: 'Ensures the spoiled soup cannot be served without exposing your culinary intelligence.',
        consequence: 'The soup is ruined beyond repair. Skinner fires Linguini on the spot, locking the restaurant doors and eliminating any future opportunity for you to cook in a professional kitchen.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'Remy followed his culinary instincts, seasoning the ruined soup with fresh herbs, spices, and cream before escaping. The soup was served to a renowned restaurant critic who praised it ecstatically, launching Remy and Linguini’s secret kitchen partnership.',
    frameworkBridge: 'This is the Behavioral vs. Demographic Persona Matrix in action. Demographically, Remy is an animal pests strictly excluded from human kitchens. Behaviorally, however, he embodies the pinnacle of culinary artistry. Great product discovery looks past surface demographics to identify true behavioral capabilities and latent user genius.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-008',
    protagonist: 'Mark Zuckerberg',
    roleTitle: 'Founder & Lead Engineer, Thefacebook',
    momentLabel: '2004 · Cambridge, Massachusetts',
    title: 'Your Call: The Relationship Status Hook',
    setup: 'It is early 2004 in a Kirkland House dorm room at Harvard University. You are Mark Zuckerberg, sophomore computer science student and founder of Thefacebook. Your campus directory site is spreading rapidly across Ivy League schools, but users are primarily uploading photos and listing dorm rooms. While studying in the dining hall, a friend asks whether an attractive girl in art history has a boyfriend.',
    stakes: [
      'Adding invasive social features risks student backlash regarding campus privacy norms.',
      'College students will churn quickly if the site feels like an academic directory.',
      'Server capacity is already straining under un-monetized student traffic spikes.',
      'Winklevoss twins and ConnectU are threatening litigation over competing social ideas.'
    ],
    question: 'How do you design a killer social discovery feature to cement daily retention?',
    options: [
      {
        id: 'A',
        label: 'Build an encrypted academic study-group scheduling tool for class syllabi',
        rationale: 'Aligns the platform directly with university academic mission and administrative approval.',
        consequence: 'Students use the tool only during midterms and finals. Engagement collapses into intermittent utility, and the site fails to become a ubiquitous daily habit.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Add an anonymous campus gossip message board with upvoting functionality',
        rationale: 'Drives immediate sensational traffic by exploiting college rumors and scandal.',
        consequence: 'The board quickly devolves into toxic harassment and defamation. Harvard administrative deans intervene, issuing cease-and-desist orders that force you to shut down the platform.',
        verdict: 'partial'
      },
      {
        id: 'C',
        label: 'Charge a five-dollar monthly subscription fee to cover rising server costs',
        rationale: 'Establishes sustainable unit economics before scaling server infrastructure further.',
        consequence: 'Over ninety percent of college students refuse to pay for an unproven digital directory. User growth stalls instantly, leaving the door wide open for rival campus networks.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Create the "Relationship Status" profile field with mutual partner linking',
        rationale: 'Unlocks social curiosity and variable reward, creating an irresistible organic loop.',
        consequence: 'The feature becomes an instant cultural obsession across campuses. Students refresh profiles obsessively to check relationship updates, turning the site into an indispensable daily social habit.',
        verdict: 'strong'
      }
    ],
    whatActuallyHappened: 'Zuckerberg recognized that natural human curiosity about who is dating whom was the ultimate driver of social engagement. He coded the Relationship Status field into profiles, sparking viral organic engagement and cementing the site as an indispensable social utility.',
    frameworkBridge: 'This perfectly demonstrates the Nir Eyal Hook Model (Trigger-Action-Variable Reward-Investment). The internal trigger of social curiosity leads to the action of checking profiles, yielding the variable reward of relationship changes, prompting users to invest their own personal profile data in return.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-009',
    protagonist: 'Ken Miles',
    roleTitle: 'Development Driver & Racing Engineer, Shelby American',
    momentLabel: '1965 · Riverside International Raceway, California',
    title: 'Your Call: Telemetry vs. Seat-of-the-Pants Data',
    setup: 'It is 1965 at Riverside Raceway. You are Ken Miles, championship driver and chief development engineer for Shelby American. You have just completed punishing test laps in the prototype Ford GT40. Ford’s corporate engineers, armed with clipboards and slide rules, insist the car’s aerodynamics and cooling are optimal based on static dyno calculations. However, your hands are vibrating and the brakes are glowing orange and fading completely at high speeds.',
    stakes: [
      'Ford executives are impatient after losing hundreds of thousands of dollars at Le Mans.',
      'Relying on laboratory dyno data alone risks catastrophic brake failure and driver death.',
      'Refusing corporate engineering advice risks your driving seat on the factory racing team.',
      'Ferrari’s lightweight prototypes are clocking consistently faster lap times across Europe.'
    ],
    question: 'How do you reconcile the conflict between quantitative telemetry and physical driver feedback?',
    options: [
      {
        id: 'A',
        label: 'Defer to Ford’s computer calculations and race the car as currently configured',
        rationale: 'Maintains political harmony with corporate Detroit management and executive sponsors.',
        consequence: 'At high racing speeds, the front-end aerodynamic lift destabilizes the car and the overheated brakes disintegrate. The car crashes violently, destroying the prototype and terminating the racing program.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Tape wool tufts across the chassis and mount physical telemetry to triangulate aerodynamic airflow',
        rationale: 'Synthesizes qualitative visual proof with empirical temperature sensors to expose flaws.',
        consequence: 'The tufts reveal severe air turbulence and starved brake cooling ducts while the car is in motion. Ford’s engineers see the physical proof, allowing you to redesign the nose ducting and brake cooling into a Le Mans-winning package.',
        verdict: 'strong'
      },
      {
        id: 'C',
        label: 'Refuse to drive the car until Ford engineers build an entirely new custom chassis',
        rationale: 'Takes an uncompromising stand on driver safety and total engineering perfection.',
        consequence: 'Leo Beebe and corporate executives fire you for insubordination, replacing you with a passive driver. The car continues to fail in European competition without your development insights.',
        verdict: 'partial'
      },
      {
        id: 'D',
        label: 'Remove the brakes entirely to save weight and rely purely on engine downshifting',
        rationale: 'Reduces unsprung vehicle weight to maximize straightaway acceleration speed.',
        consequence: 'The engine transmission blows up under the excessive strain during downshifts on the first lap. You are left stranded on the tarmac with a completely destroyed powertrain.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'Ken Miles and Carroll Shelby taped bits of yarn (wool tufts) to the GT40’s body to visually map airflow during actual high-speed runs. This simple empirical test disproved the corporate wind-tunnel assumptions and guided aerodynamic modifications that led to victory at Le Mans.',
    frameworkBridge: 'This is the Mixed-Methods Triangulation Matrix in practice. Quantitative telemetry dials and qualitative driver intuition must be triangulated with real-world empirical observation. By uniting sensor data with real-world physical behavior, teams uncover blind spots that neither method could detect alone.',
    verification: 'verified'
  }
];
