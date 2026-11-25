import { DecisionPoint } from '@/types/decisionPoint';

export const STRATEGY_DECISION_POINTS: DecisionPoint[] = [
  {
    lessonId: 'lms-010',
    protagonist: 'Howard Hughes',
    roleTitle: 'Chief Industrialist & Aviation Pioneer, Hughes Aircraft',
    momentLabel: '1947 · Washington D.C.',
    title: 'Your Call: Defending the Spruce Goose Moonshot',
    setup: 'It is 1947 in Washington D.C. You are Howard Hughes, industrialist, aviator, and owner of Hughes Aircraft Company. You are testifying before a hostile Senate investigative committee chaired by Senator Owen Brewster. You have spent over twenty-two million dollars in federal wartime funding building the Hercules H-4 Spruce Goose, a wooden flying boat intended to transport troops across the Atlantic without risking submarine attacks, yet the war is now over and the plane has never flown.',
    stakes: [
      'Senator Brewster is threatening criminal indictment for wartime contract fraud.',
      'Critics mock the wooden aircraft as a flying lumberyard that defies physics.',
      'Your airline, TWA, and aerospace business empire face severe commercial ruin.',
      'The federal government will demand full financial repayment if the prototype fails to fly.'
    ],
    question: 'How do you defend your R&D capital allocation and validate the moonshot aircraft?',
    options: [
      {
        id: 'A',
        label: 'Fly the Hercules publicly in Long Beach Harbor to prove technical viability',
        rationale: 'Provides indisputable physical validation that silences political and technical critics instantly.',
        consequence: 'You take the controls yourself in Long Beach Harbor before a worldwide press corps, lifting the gargantuan flying boat into ground-effect flight. The demonstration vindicates your engineering team and collapses the Senate investigation overnight.',
        verdict: 'strong'
      },
      {
        id: 'B',
        label: 'Settle with the Senate committee and scrap the unfinished wooden airframe',
        rationale: 'Minimizes further capital expenditure and puts an end to political hostility.',
        consequence: 'Scrapping the airframe is treated by the press as a confession of fraud. Your aerospace contracts are canceled and your reputation as an aviation pioneer is permanently tarnished.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Convert the flying boat into an ultra-luxury passenger airliner for commercial airlines',
        rationale: 'Attempts to monetize the existing platform in postwar civilian aviation markets.',
        consequence: 'Airlines have already standardized on land-based aluminum aircraft like the Constellation. Nobody orders the massive wooden sea craft, bleeding millions in private capital.',
        verdict: 'partial'
      },
      {
        id: 'D',
        label: 'Refuse to appear at the Senate hearings and hide in your hotel penthouse',
        rationale: 'Avoids hostile cross-examination from politically motivated congressional adversaries.',
        consequence: 'The committee issues a contempt warrant and seizes your corporate financial ledgers. Public sentiment turns overwhelmingly against you without your personal counter-attack.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'Hughes turned the tables on the Senate committee by exposing Brewster’s political corruption, then flew the Hercules H-4 for over a mile in Long Beach Harbor. The flight proved that the largest flying boat ever built was aerodynamically sound, silencing his critics.',
    frameworkBridge: 'This illustrates the Stage-Gate Frontier Innovation Funnel (Cooper) under extreme moonshot conditions. Frontier innovation requires clear stage-gate criteria, technological risk boundaries, and unambiguous proof-of-concept gates. Without disciplined phase gating, projects bleed capital long after strategic geopolitical conditions change.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-011',
    protagonist: 'Carroll Shelby',
    roleTitle: 'Managing Director & Race Program Principal, Shelby American',
    momentLabel: '1964 · Dearborn, Michigan',
    title: 'Your Call: Taking the Ford GT40 Contract',
    setup: 'It is 1964 at Ford headquarters in Dearborn, Michigan. You are Carroll Shelby, legendary automotive designer and former Le Mans champion. Henry Ford II and his corporate executive committee have summoned you to Detroit after their British-built GT40 racing program suffered an embarrassing double failure at Le Mans. Ford offers you a blank corporate check to take over the program and defeat Ferrari, but Ford’s corporate marketing bureaucracy wants veto power over vehicle development.',
    stakes: [
      'Ford’s corporate bureaucracy moves at committee speed, whereas racing demands split-second iteration.',
      'Enzo Ferrari builds purpose-crafted bespoke thoroughbreds with decades of endurance racing mastery.',
      'Failure at Le Mans under Shelby American branding will destroy your boutique automotive company.',
      'Ford marketing executive Leo Beebe insists on placing corporate image ahead of race craft.'
    ],
    question: 'How do you position your strategic relationship with Ford to beat Ferrari?',
    options: [
      {
        id: 'A',
        label: 'Accept the money and let Ford executives select the drivers and race strategy',
        rationale: 'Secures enormous manufacturing funding while keeping Detroit corporate leadership pleased.',
        consequence: 'Ford executives select cautious corporate drivers who fail to push the car to its mechanical limits. The GT40 breaks down repeatedly and Ferrari wins handily once again.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Demand total operational autonomy over car engineering, track testing, and driver selection',
        rationale: 'Trade off corporate harmony to secure the dedicated racing competence needed to defeat Ferrari.',
        consequence: 'You secure absolute authority to hire rogue driver Ken Miles and completely redesign the powertrain and braking systems. By insulating race engineering from corporate meddling, you forge an unbeatable endurance racing machine.',
        verdict: 'strong'
      },
      {
        id: 'C',
        label: 'Advise Henry Ford II to buy Ferrari stock instead of racing at Le Mans',
        rationale: 'Gains financial exposure to the luxury sports car sector without racing risk.',
        consequence: 'Enzo Ferrari’s private company is not publicly traded and Henry Ford II is furious at your refusal. Ford gives the contract to a rival team and cancels Shelby’s engine distribution.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Compromise by letting Ford manage driver choices while you handle chassis suspension',
        rationale: 'Splits responsibilities neatly between Detroit corporate PR and California wrench turning.',
        consequence: 'The split command causes constant friction between the pit wall and the garage. Mismatched race tactics compromise car reliability during the 24-hour race.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'Shelby demanded uncompromised operational control, insisted on keeping Ken Miles as his lead development driver, and re-engineered the GT40 with a massive 7-liter American V8. His strategic trade-offs culminated in Ford’s historic 1-2-3 sweep at Le Mans in 1966.',
    frameworkBridge: 'This is Michael Porter’s Strategic Positioning & Trade-Offs in action. Strategy is about choosing what not to do: Shelby traded off corporate consensus, smooth PR relations, and European elegance to focus ruthlessly on raw horsepower, rapid brake replacement, and driver-centric feedback loops that exploited Ferrari’s financial vulnerabilities.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-012',
    protagonist: 'J. Robert Oppenheimer',
    roleTitle: 'Scientific Director, Los Alamos',
    momentLabel: 'Mid-1944 · Los Alamos',
    title: 'Your Call: The Thin Man Has Failed',
    setup: "It is mid-1944 at Los Alamos. You are J. Robert Oppenheimer, scientific director of the Manhattan Project. Field test data has just confirmed that reactor-produced plutonium cannot work in the gun-type design your lab has spent over a year engineering. General Leslie Groves expects a combat-ready weapon on schedule, and every senior team on the mesa is waiting for your decisive direction right now.",
    stakes: [
      'The deadline is fixed; slipping it is not an option leadership will accept.',
      'Implosion is promising but unproven; no one has built one.',
      'The uranium gun-type design still looks viable, but uranium production is slow.',
      'Hundreds of specialists are organised around the old plan.'
    ],
    question: "How do you restructure the laboratory's roadmap?",
    options: [
      {
        id: 'A',
        label: 'Keep refining the plutonium gun design',
        rationale: 'The team knows this design; fixing it is lower risk than starting over.',
        consequence: 'Months of engineering go into a problem rooted in the material itself, not the design. The plutonium path never becomes viable, the critical path silently stalls, and the deadline is missed with nothing to show for the effort.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Pivot the entire lab to implosion and drop all gun-type work',
        rationale: 'Concentrate every resource on the new approach to move fastest.',
        consequence: "Implosion gets maximum resources, but you've killed the one design that was likely to work. If implosion hits a wall, there is no fallback and the whole programme fails at once.",
        verdict: 'partial'
      },
      {
        id: 'C',
        label: 'Run parallel tracks: keep the uranium gun, reorganise the lab around implosion for plutonium',
        rationale: 'Hedge with the safe bet while putting most resources on the critical-path unknown.',
        consequence: 'The uranium gun continues as a low-risk fallback with modest resources, while the lab is reorganised so most talent attacks implosion, now the zero-slack path. You carry both bets to the deadline.',
        verdict: 'strong'
      },
      {
        id: 'D',
        label: 'Pause and ask Washington for more time and more uranium',
        rationale: 'Avoid a risky gamble by waiting for better conditions.',
        consequence: "Uranium production can't be meaningfully accelerated, and the request signals lost control. Time spent waiting comes directly off the critical path.",
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'In August 1944 Oppenheimer reorganised Los Alamos around the implosion problem, bringing theorists, experimentalists, and ordnance engineers into new integrated divisions, while the uranium gun-type design continued in parallel as the safer track. Both paths were carried to completion.',
    frameworkBridge: 'This is the Critical Path Method in action. Once the plutonium gun failed, implosion became the zero-slack path: any delay there delayed the whole project. The uranium gun had slack, so it was kept alive with fewer resources. Good programme leaders identify the zero-slack chain, concentrate senior attention there, and fund a parallel hedge when the critical path carries high technical uncertainty.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-013',
    protagonist: 'Steve Jobs',
    roleTitle: 'Founder & CEO, NeXT Inc.',
    momentLabel: '1988 · San Francisco, California',
    title: 'Your Call: The NeXT Trojan Horse Launch',
    setup: 'It is autumn 1988 backstage at Davies Symphony Hall in San Francisco. You are Steve Jobs, CEO of NeXT Computer. You were ousted from Apple three years ago and have poured your personal millions into creating the NeXT Cube. Your marketing confidante Joanna Hoffman points out that the machine has no built-in hard drive, costs $6,500, and lacks essential business software, making mass corporate adoption impossible today.',
    stakes: [
      'The high retail price limits initial volume to elite university research labs.',
      'Hardware development costs are rapidly burning through your personal net worth and venture capital.',
      'Apple and Sun Microsystems are preparing competitive workstation product roadmaps.',
      'You must establish a cutting-edge technological halo to position the company for future horizons.'
    ],
    question: 'What is your strategic sequencing plan for NeXT’s technological assets?',
    options: [
      {
        id: 'A',
        label: 'Slash prices by replacing magnesium casing with cheap plastic to target consumer retail',
        rationale: 'Seeks immediate volume sales to compete against low-cost PC clones.',
        consequence: 'The low-margin hardware alienates your academic base while failing to undercut PC clones. NeXT exhausts its cash reserves in consumer retail distribution channels and files for bankruptcy.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Pledge that the machine will run Microsoft DOS to attract mainstream corporate accountants',
        rationale: 'Captures the large existing enterprise market with backward software compatibility.',
        consequence: 'Running DOS erases the competitive superiority of NeXTSTEP’s object-oriented architecture. NeXT becomes an overpriced commodity box with zero software differentiation.',
        verdict: 'partial'
      },
      {
        id: 'C',
        label: 'Cancel the launch event until high-capacity optical drives drop in manufacturing cost',
        rationale: 'Avoids launching an incomplete hardware system until component costs normalize.',
        consequence: 'Competitors launch UNIX workstations that capture the academic market. NeXT loses market relevance and developer momentum before releasing a single product.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Position NeXT as an elite workstation while building NeXTSTEP as a future OS platform',
        rationale: 'Sacrifices near-term hardware volume to cultivate the object-oriented software foundation for future growth.',
        consequence: 'While Cube sales remain modest, the revolutionary NeXTSTEP OS captures visionary developers like Tim Berners-Lee. A decade later, Apple buys NeXT for its OS, making it the architectural foundation of macOS and iOS.',
        verdict: 'strong'
      }
    ],
    whatActuallyHappened: 'Jobs used the NeXT computer as a showcase for NeXTSTEP, an advanced object-oriented operating system. When hardware sales languished, NeXT pivoted to software, ultimately leading to Apple acquiring NeXT in 1996 for $429 million to form the core of OS X.',
    frameworkBridge: 'This exemplifies McKinsey Three Horizons of Growth & Strategic Sequencing. Horizon 1 (the physical cube) provided immediate brand halo; Horizon 2 (NeXTSTEP software licensing) bridged enterprise adoption; Horizon 3 (a next-generation computing OS) became the catalyst that saved Apple and redefined modern personal computing.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-014',
    protagonist: 'Henk Rogers',
    roleTitle: 'Video Game Publisher & Managing Director, Bullet-Proof Software',
    momentLabel: '1989 · Kyoto, Japan',
    title: 'Your Call: The Game Boy Bundle Negotiation',
    setup: 'It is early 1989 at Nintendo headquarters in Kyoto, Japan. You are Henk Rogers, head of Bullet-Proof Software. You have secured the handheld video game rights to Alexey Pajitnov’s hypnotic Soviet puzzle game Tetris. You are sitting across from Nintendo President Hiroshi Yamauchi and hardware designer Gunpei Yokoi. Nintendo is preparing to launch the Game Boy, and their executive team plans to pack in their flagship title Super Mario Land.',
    stakes: [
      'Super Mario guarantees immediate appeal to existing young male Nintendo console fans.',
      'The Game Boy’s monochrome green-screen display requires high-contrast, simple graphics to shine.',
      'Handheld hardware adoption depends heavily on the universal appeal of the launch title.',
      'Licensing Tetris for pack-in requires paying per-cartridge royalties to Soviet agency ELORG.'
    ],
    question: 'Which software title do you urge Hiroshi Yamauchi to bundle with every Game Boy?',
    options: [
      {
        id: 'A',
        label: 'Bundle Tetris to expand the hardware audience from young boys to every demographic',
        rationale: 'Dramatically expands the total addressable market beyond gamers to executives, women, and seniors.',
        consequence: 'Yamauchi agrees that Mario is for boys, but Tetris is for everyone. The Game Boy sells over 118 million units worldwide, transforming Nintendo from a toy maker into an indispensable global entertainment juggernaut.',
        verdict: 'strong'
      },
      {
        id: 'B',
        label: 'Support bundling Super Mario Land to reward the loyal Nintendo console fanbase',
        rationale: 'Maximizes initial launch velocity among established Famicom and NES players.',
        consequence: 'Young boys buy the hardware, but working adults and women dismiss the Game Boy as a children’s toy. Total addressable market remains constrained to traditional gamers.',
        verdict: 'partial'
      },
      {
        id: 'C',
        label: 'Ship the Game Boy without any bundled software to lower the retail purchase price',
        rationale: 'Reduces retail price by ten dollars to encourage impulse hardware purchasing.',
        consequence: 'Consumers are confused by an empty handheld box with no immediate playability. Retail returns spike and hardware momentum stalls during the crucial holiday launch.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Bundle a digital calculator utility to position the device as a business tool',
        rationale: 'Appeals to corporate accountants and executives seeking mobile productivity tools.',
        consequence: 'Nobody purchases an expensive gaming handheld for a primitive monochrome calculator. Nintendo suffers reputational embarrassment and retail stores discount the inventory.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'Henk famously told Yamauchi: "If you want little boys to buy the Game Boy, pack in Mario. If you want everyone to buy the Game Boy, pack in Tetris." Nintendo bundled Tetris, turning the Game Boy into an unprecedented cultural phenomenon across all ages and genders.',
    frameworkBridge: 'This is Platform Hardware-Software Bundling & TAM Expansion. A platform’s launch bundle defines user expectations and market boundary conditions. By bundling an accessible, addictive title, Nintendo unlocked an immense total addressable market and built a self-reinforcing network effect.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-015',
    protagonist: 'Commander Bolton',
    roleTitle: 'Royal Navy Pier Master, Dunkirk Evacuation',
    momentLabel: 'May 1940 · Dunkirk, France',
    title: 'Your Call: Triage at the Dunkirk Mole',
    setup: 'It is late May 1940 on the beaches of Dunkirk, France. You are Commander Bolton of the Royal Navy, serving as Pier Master on the east mole. The British Expeditionary Force and French allies—over 330,000 soldiers—are surrounded by German armored divisions and subjected to relentless Luftwaffe dive-bombing attacks. Heavy naval destroyers are running aground in shallow water or being torpedoed, while soldiers stand neck-deep in the surf.',
    stakes: [
      'The British Army faces total annihilation within forty-eight hours if evacuation fails.',
      'Deep-draft Royal Navy destroyers cannot approach the shallow sloping beach.',
      'Luftwaffe Stuka bombers target stationary ships clustered around the narrow mole pier.',
      'Evacuating soldiers without defensive air cover risks catastrophic troop transport sinkings.'
    ],
    question: 'How do you structure the emergency maritime evacuation strategy?',
    options: [
      {
        id: 'A',
        label: 'Order the soldiers to build sand fortifications and mount a last-ditch counterattack',
        rationale: 'Attempts to break out through German tank divisions to reach southern French ports.',
        consequence: 'Exhausted infantry without artillery or armor are slaughtered by German panzers in open fields. The entire army is destroyed, forcing Britain into unconditional surrender.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Mobilize civilian shallow-draft "Little Ships" to ferry soldiers to offshore naval vessels',
        rationale: 'Employs asymmetric distributed maritime assets to navigate shallow surf and multiply rescue points.',
        consequence: 'Hundreds of civilian motor yachts, fishing smacks, and lifeboats arrive from England. They shuttle hundreds of thousands of men from the surf to deeper naval transports, saving 338,000 troops to fight another day.',
        verdict: 'strong'
      },
      {
        id: 'C',
        label: 'Evacuate only senior military commanders and leave the infantry as rearguard prisoners',
        rationale: 'Preserves the strategic military command structure while conserving shipping assets.',
        consequence: 'Abandoning hundreds of thousands of British soldiers collapses domestic morale. Political outrage forces the collapse of Churchill’s wartime government.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Wait on the beach until the Royal Air Force establishes complete total air superiority',
        rationale: 'Ensures no troop transport ships are subjected to enemy aerial bombing attacks.',
        consequence: 'The RAF is heavily outnumbered across the channel and cannot provide continuous local air cover. German artillery closes in, capturing the entire force before evacuation begins.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'The British Admiralty launched Operation Dynamo, requisitioning hundreds of civilian shallow-draft vessels (the Little Ships of Dunkirk). Working alongside naval destroyers, this improvised flotilla rescued 338,226 Allied troops under relentless aerial bombardment.',
    frameworkBridge: 'This is the Crisis Triage & Asymmetric Mobilization Matrix in practice. When traditional centralized platforms (deep-draft destroyers) are neutralized by environmental constraints, strategic leaders must rapidly mobilize distributed, low-cost assets to decentralize throughput and overcome systemic bottlenecks.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-016',
    protagonist: 'Gene Kranz',
    roleTitle: 'Lead Flight Director, NASA Mission Control',
    momentLabel: 'April 1970 · Houston, Texas',
    title: 'Your Call: Failure Is Not an Option',
    setup: 'It is April 13, 1970 at Mission Control in Houston. You are Gene Kranz, lead flight director of Apollo 13. Two hundred thousand miles from Earth, oxygen tank two inside the Service Module has suffered a catastrophic explosion. The Command Module is rapidly losing oxygen, electrical power, and attitude control. Three astronauts are in mortal danger, and your flight controllers are frantically debating complex diagnostic telemetry.',
    stakes: [
      'The Command Module’s batteries cannot be recharged and will be exhausted within two hours.',
      'The Lunar Module is designed only to support two men for forty-eight hours on the lunar surface.',
      'Trajectory errors during translunar coast will cause the spacecraft to miss Earth entirely.',
      'Panic or uncoordinated thruster firings could cause structural tumbling and immediate loss of life.'
    ],
    question: 'How do you re-architect the mission system to bring the crew home safely?',
    options: [
      {
        id: 'A',
        label: 'Attempt to restart the fuel cells by drawing emergency reserve battery power',
        rationale: 'Seeks to restore normal Command Module operations and preserve the planned lunar landing.',
        consequence: 'The damaged piping leaks the remaining emergency battery power into the vacuum of space. The spacecraft dies completely, leaving the astronauts without life support or navigation capability.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Fire the Service Propulsion Engine immediately for a direct reverse abort to Earth',
        rationale: 'Takes the shortest physical path home without flying all the way around the moon.',
        consequence: 'The explosion damaged the structural integrity of the main engine bell. Firing it triggers a secondary catastrophic explosion that destroys the spacecraft.',
        verdict: 'partial'
      },
      {
        id: 'C',
        label: 'Power down the Command Module and repurpose the Lunar Module as an emergency lifeboat',
        rationale: 'Preserves critical reentry battery power by operating the LM under strict consumable rationing.',
        consequence: 'You power down the Command Module, using the Lunar Module’s descent engine to sling around the moon on a free-return trajectory. Strict power rationing preserves battery reserves, enabling a safe reentry splashdown.',
        verdict: 'strong'
      },
      {
        id: 'D',
        label: 'Transfer the crew into spacesuits and vent the cabin to conserve remaining tank pressure',
        rationale: 'Extends life support gas supplies by relying exclusively on individual suit canisters.',
        consequence: 'Suit cooling water loops freeze in the cold cabin environment, clogging life support regulators. The crew succumbs to carbon dioxide poisoning within twenty-four hours.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'Gene Kranz shut down the dying Command Module to preserve its entry batteries and utilized the Lunar Module (Aquarius) as an emergency lifeboat. The team rationed water, power, and oxygen to navigate a free-return trajectory back to Earth.',
    frameworkBridge: 'This is Constraint-First System Re-architecting in crisis engineering. When primary operating assumptions shatter, leaders must establish a zero-based budget of non-negotiable physical constraints (amperage, water, oxygen) and repurpose secondary subsystems to protect the ultimate mission outcome.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-017',
    protagonist: 'Neil Armstrong',
    roleTitle: 'NASA Research Test Pilot & Astronaut Candidate',
    momentLabel: '1962 · Edwards Air Force Base, California',
    title: 'Your Call: Bouncing Off the Atmosphere in the X-15',
    setup: 'It is April 1962 high above the Mojave Desert. You are Neil Armstrong, veteran research pilot flying flight 3-4-18 of the rocket-powered X-15. You have just reached peak altitude of 207,000 feet at Mach 5.7. During your steep reentry descent, you hold the nose up too high to test an automated pitch control system, causing the aircraft to literally bounce off the dense lower layers of the atmosphere back into thin air.',
    stakes: [
      'The aircraft is flying at 3,800 miles per hour and heading rapidly toward the city of Pasadena.',
      'Without atmospheric density, aerodynamic rudder controls and ailerons are completely ineffective.',
      'Rocket fuel is completely spent; you are piloting an unpowered forty-thousand-pound glider.',
      'Overshooting Edwards lakebed means crashing into mountains or populated suburban neighborhoods.'
    ],
    question: 'How do you regain control of the hypersonic glider and execute an emergency landing?',
    options: [
      {
        id: 'A',
        label: 'Eject immediately from the aircraft at Mach 5 into the upper stratosphere',
        rationale: 'Guarantees pilot survival before the airframe enters uncontrollable flat spin.',
        consequence: 'The supersonic windblast shreds your ejection seat and flight suit instantly at Mach 5. You perish in the upper atmosphere and the multimillion-dollar prototype is destroyed.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Force the nose downward aggressively into the atmosphere to regain immediate rudder bite',
        rationale: 'Attempts to re-enter dense air rapidly to restore aerodynamic control authority.',
        consequence: 'The aggressive dive exceeds structural g-load limitations during reentry. The wings rip off under aerodynamic thermal stress, destroying the aircraft.',
        verdict: 'partial'
      },
      {
        id: 'C',
        label: 'Fire remaining reaction control thrusters to establish aerodynamic descent glide',
        rationale: 'Uses reaction control jets to stabilize roll while maintaining maximum lift-over-drag angle.',
        consequence: 'You use the nose hydrogen-peroxide thrusters to slowly pitch the aircraft back into the atmosphere. Re-entering over the San Gabriel mountains, you manage to glide barely over the joshua trees and touch down safely on the south lakebed.',
        verdict: 'strong'
      },
      {
        id: 'D',
        label: 'Deploy the landing gear immediately in high-altitude thin air to act as airbrakes',
        rationale: 'Creates aerodynamic drag to slow velocity before reaching populated cities.',
        consequence: 'The high dynamic pressure tears the gear doors from the airframe, puncturing hydraulic lines. With controls disabled, the aircraft becomes unrecoverable.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'Armstrong used the X-15’s reaction control system to yaw the aircraft around, banked over Pasadena, and glided sixty miles back to Edwards Air Force Base, making the longest flight in X-15 history and clearing Joshua trees by barely one hundred feet before a textbook dry-lake landing.',
    frameworkBridge: 'This illustrates NASA Technology Readiness Level (TRL) & Sandbox De-risking. High-risk systems must be isolated in rigorous experimental sandbox environments where edge-case failures produce institutional telemetry without catastrophic systemic fallout, de-risking technology readiness before lunar deployment.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-018',
    protagonist: 'Bill Gates',
    roleTitle: 'Co-Founder & CEO, Microsoft',
    momentLabel: '1980 · Boca Raton, Florida',
    title: 'Your Call: The IBM Operating System Contract',
    setup: 'It is 1980 in Boca Raton, Florida. You are Bill Gates, 25-year-old CEO of Microsoft. IBM executives have secretly arrived seeking an operating system for their upcoming personal computer (Project Chess). IBM expects you to sell them exclusive intellectual property rights to an operating system for a flat, one-time fee of $430,000, which would generate an unprecedented financial windfall for your young programming company.',
    stakes: [
      'IBM is the undisputed titan of global enterprise computing and could build its own OS in-house.',
      'Selling the software outright yields an immediate $430,000 payment with zero ongoing liability.',
      'Retaining copyright licensing allows Microsoft to sell the identical OS to rival clone manufacturers.',
      'IBM’s lawyers are aggressive and will walk away if contract terms threaten corporate dominance.'
    ],
    question: 'How do you structure the licensing agreement with IBM?',
    options: [
      {
        id: 'A',
        label: 'Provide non-exclusive licensing, retaining full copyright and rights to license to clone makers',
        rationale: 'Creates a horizontal platform standard that monetizes every PC manufactured worldwide.',
        consequence: 'IBM accepts the deal to meet its tight project deadline. When Compaq and others clone the IBM PC architecture, every machine requires MS-DOS, establishing Microsoft as the ultimate software tollbooth of the digital age.',
        verdict: 'strong'
      },
      {
        id: 'B',
        label: 'Sell all exclusive intellectual property rights to IBM for an upfront $1,000,000 fee',
        rationale: 'Locks in an immense short-term cash windfall and guarantees corporate financial security.',
        consequence: 'IBM secures total ownership of DOS. When clone manufacturers enter the market, IBM collects all software royalties while Microsoft remains a minor compiler programming contractor.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Demand fifty percent equity in IBM’s personal computing division in exchange for the OS',
        rationale: 'Seeks permanent institutional co-ownership of the world’s leading computing manufacturer.',
        consequence: 'IBM corporate executives find the request insulting and cancel negotiations immediately. They buy CP/M from Digital Research, shutting Microsoft out of personal computing entirely.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Agree to an exclusive five-year license with IBM before reverting rights to Microsoft',
        rationale: 'Gives IBM temporary exclusivity while ensuring long-term software ownership.',
        consequence: 'During the five-year exclusivity window, IBM establishes proprietary hardware lock-in. When rights revert, the market has fragmented into incompatible proprietary operating systems.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'Gates licensed DOS to IBM for a low upfront price on a non-exclusive basis while retaining all rights to sell it to other hardware makers. When IBM PC clones exploded across the market, Microsoft became the dominant platform layer of personal computing.',
    frameworkBridge: 'This is the Horizontal Platform vs Vertical Integration Matrix in business history. While IBM pursued vertical hardware integration, Microsoft captured the horizontal software layer. In modular industries, control of the horizontal platform standard captures superior long-term economic rents compared to commoditized hardware assembly.',
    verification: 'verified'
  }
];
