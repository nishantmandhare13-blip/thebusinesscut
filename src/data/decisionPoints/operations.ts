import { DecisionPoint } from '@/types/decisionPoint';

export const OPERATIONS_DECISION_POINTS: DecisionPoint[] = [
  {
    lessonId: 'lms-072',
    protagonist: 'Ed Smylie',
    roleTitle: 'Crew Systems Division Chief, NASA Johnson Space Center',
    momentLabel: 'April 1970 · Houston, Texas',
    title: 'Your Call: The Square-Peg-in-a-Round-Hole Filter',
    setup: 'It is April 1970 inside an engineering conference room at NASA in Houston. You are Ed Smylie, chief of crew systems. Two hundred thousand miles away, the Apollo 13 astronauts are suffocating inside the Lunar Module. The LM’s round lithium hydroxide canisters are exhausted, and carbon dioxide levels have reached dangerous toxic thresholds. There are plenty of spare square canisters in the Command Module, but the two spacecraft systems were built by different defense contractors with completely incompatible docking geometries.',
    stakes: [
      'Carbon dioxide poisoning will cause delirium and fatal asphyxiation within six hours.',
      'Astronauts possess only flight manuals, plastic bags, gray duct tape, and suit hoses.',
      'Any prototype built in Houston must be replicable by exhausted astronauts in zero gravity.',
      'Incorrect seal integrity will vent toxic cabin gases back into the astronauts’ faces.'
    ],
    question: 'How do you design an emergency filtration adapter using only onboard supplies?',
    options: [
      {
        id: 'A',
        label: 'Fabricate an adapter connecting square canisters to round sockets using manual space cabin materials',
        rationale: 'Creates an operational bricolage bridge connecting incompatible physical architectures.',
        consequence: 'You dump flight manual covers, cardboard, plastic suit bags, and gray duct tape onto the table. Your team builds a functioning adapter, radios the instructions to the crew, and reduces cabin CO2 to safe levels.',
        verdict: 'strong'
      },
      {
        id: 'B',
        label: 'Order the astronauts to smash plastic housings with a hammer to force a fit',
        rationale: 'Relies on physical deformation to force mismatched components into round sockets.',
        consequence: 'The brittle plastic cracks, spilling chemical lithium hydroxide granules into the cabin atmosphere. The corrosive dust severely burns the astronauts’ eyes and lungs.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Instruct the crew to hyperventilate into space suits to scrub carbon dioxide internally',
        rationale: 'Uses internal suit filtration to conserve cabin atmospheric canisters.',
        consequence: 'Suit scrubbers clog within three hours under elevated breathing rates. The astronauts lose consciousness from hypercapnia.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Reroute the Lunar Module descent engine coolant lines to condense gas into liquid ice',
        rationale: 'Attempts cryogenic gas separation using propulsion plumbing.',
        consequence: 'Plumbing valves freeze shut and burst under cryogenic temperatures. The lander loses descent engine pressurization, ruining attitude control.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'Ed Smylie dumped all the materials available to the astronauts onto a table: cardboard, duct tape, plastic bags, and hoses. His team designed an improvised adapter dubbed the "mailbox," talked the crew through building it, and saved the astronauts’ lives.',
    frameworkBridge: 'This is Constraint-Based Operational Bricolage & Interface Bridge in extreme systems operations. When standard operating procedures face incompatible interfaces, operations leaders cannot manufacture new parts. They must inventory available environmental materials and engineer improvised bridge architectures to prevent systemic collapse.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-073',
    protagonist: 'Captain Richard Phillips',
    roleTitle: 'Master, Maersk Alabama',
    momentLabel: 'April 2009 · Gulf of Aden, Indian Ocean',
    title: 'Your Call: Somali Pirate Skiff Approach',
    setup: 'It is dawn in April 2009 off the coast of Somalia. You are Captain Richard Phillips, commanding the unarmed container ship Maersk Alabama. Radar shows a high-speed pirate skiff armed with automatic weapons closing rapidly on your stern. Your ship is carrying thousands of tons of commercial food aid. International maritime protocols recommend fire hoses and evasive maneuvering, but the pirates are hooking a boarding ladder onto the stern rail.',
    stakes: [
      'The merchant crew is completely unarmed under international maritime law.',
      'Once armed pirates reach the navigation bridge, the entire crew is hostage for ransom.',
      'The pirate skiff is faster than the heavy cargo ship’s maximum cruising speed.',
      'The engine room has a fortified steel citadel with independent food and communications.'
    ],
    question: 'How do you execute the ship’s anti-piracy defensive protocol?',
    options: [
      {
        id: 'A',
        label: 'Surrender the bridge immediately and negotiate a cash ransom with pirate skiff leaders',
        rationale: 'Minimizes physical violence by cooperating with hijackers’ monetary demands.',
        consequence: 'The pirates anchor the vessel off Eyl, holding the crew hostage for months in tortuous conditions. The multi-million-dollar ransom emboldens further regional maritime hijackings.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Lock the crew in the fortified engine room citadel and disable ship power',
        rationale: 'Executes high-reliability citadel defense to prevent pirates from operating the vessel.',
        consequence: 'You order the crew into the engine room citadel, kill ship power, and lock down steering. Stranded in an unpowered dark ship in the blazing heat, the pirates cannot control the vessel, enabling navy intervention.',
        verdict: 'strong'
      },
      {
        id: 'C',
        label: 'Arm the deck crew with emergency distress flares to fight the boarding party',
        rationale: 'Attempts armed physical defense using improvised pyrotechnic weapons.',
        consequence: 'Distress flares are vastly outmatched by AK-47 assault rifles. Crew members are shot on deck and the pirates execute retaliatory beatings on the bridge.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Maneuver the ship in tight circles to capsize the skiff with wake wash',
        rationale: 'Uses hydrodynamic wake turbulence to swamp the lightweight fiberglass skiff.',
        consequence: 'The tight rudder turns bleed ship velocity, allowing the second pirate skiff to hook the ladder easily. The ship loses maneuverability and is boarded.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'Phillips ordered the crew to lock themselves inside the fortified engine room while he remained on the bridge. The crew killed the ship’s main generator, cutting power and plunging the ship into darkness, preventing the pirates from taking the ship to the Somali coast.',
    frameworkBridge: 'This is High-Reliability Operational Resilience & Citadel Defense in crisis supply chain logistics. When external security layers fail, high-reliability operations rely on hardened safe citadels and intentional systems shutdown to deny hostile agents operational control of strategic assets.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-074',
    protagonist: 'Mark Watney',
    roleTitle: 'Botanist & Mechanical Engineer, Ares 3 Mission',
    momentLabel: 'Sol 18 · Acidalia Planitia, Mars',
    title: 'Your Call: The Martian Caloric Burn Rate',
    setup: 'It is Sol 18 inside the Hab on Acidalia Planitia, Mars. You are Mark Watney, astronaut botanist mistakenly left behind after an emergency evacuation. You calculate your consumables: you have 400 meals intended for a thirty-day mission. The next NASA rescue mission (Ares 4) will not land at Schiaparelli Crater for four years—approximately 1,400 days. Without immediate intervention, you will starve to death on Sol 400.',
    stakes: [
      'The Martian environment is dead soil devoid of nitrogen, bacteria, and liquid water.',
      'You need 1,500 calories per day to maintain physical strength and cognitive focus.',
      'Making water requires extracting hydrogen from rocket fuel and burning it, risking massive explosion.',
      'Every missed agricultural harvest accelerates the irreversible starvation deadline.'
    ],
    question: 'How do you engineer a closed-loop food and water supply chain on Mars?',
    options: [
      {
        id: 'A',
        label: 'Fast immediately by consuming only 300 calories per day to extend existing rations',
        rationale: 'Conserves existing food supplies without taking risky agricultural gambles.',
        consequence: 'Extreme starvation causes rapid muscle atrophy, organ degradation, and cognitive delirium. You lose the physical capability to maintain the Hab and collapse within two months.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Radio Houston and wait for them to launch an unproven high-speed resupply rocket',
        rationale: 'Relies entirely on external supply-chain replenishment from Earth.',
        consequence: 'NASA rushes an uninspected rocket that explodes ninety seconds after launch. With no backup crops planted in the Hab, you run out of food and perish alone.',
        verdict: 'partial'
      },
      {
        id: 'C',
        label: 'Calculate strict daily caloric rationing and fertilize Martian soil with hydrazine water',
        rationale: 'Transforms an open-loop consumable inventory into a regenerative closed-loop agricultural supply chain.',
        consequence: 'You ration your meals, decompose hydrazine rocket fuel to manufacture water, and fertilize Martian regolith with composted human waste. You plant Thanksgiving potatoes, yielding enough calories to survive until rescue.',
        verdict: 'strong'
      },
      {
        id: 'D',
        label: 'Eat the emergency vitamin nutrient paste exclusively to save cooking heating energy',
        rationale: 'Conserves Hab electrical heater power by consuming raw medical pastes.',
        consequence: 'Vitamin paste lacks complex carbohydrates and fats. Severe malnutrition leads to scurvy and metabolic shock within seventy Sols.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'Watney famously announced: "I’m going to have to science the shit out of this." He calculated his exact daily caloric deficit, converted hydrazine rocket fuel into water, fertilized Martian soil with freeze-dried crew waste, and grew potatoes inside the Hab to survive until Ares 4 rescued him.',
    frameworkBridge: 'This exemplifies Inventory Burn Rate & Closed-Loop Regenerative Supply Chain operations. When supply chains are cut off by geographic isolation, operations managers must convert linear consumable burn rates into regenerative circular loops, unlocking life-saving operational runway.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-075',
    protagonist: 'Mike Williams',
    roleTitle: 'Chief Electronics Technician, Deepwater Horizon',
    momentLabel: 'April 2010 · Gulf of Mexico',
    title: 'Your Call: The Negative Pressure Test Bypass',
    setup: 'It is the evening of April 20, 2010 on the Deepwater Horizon offshore drilling rig. You are Mike Williams, chief electronics technician. The Macondo well is six weeks behind schedule and millions over budget. BP company men Donald Vidrine and Robert Kaluza order the rig to bypass a $128,000 cement bond log evaluation. A negative pressure test shows abnormal pressure on the drill pipe, but BP officials dismiss it as a "bladder effect."',
    stakes: [
      'The well contains explosive high-pressure methane gas under thousands of pounds of pressure.',
      'BP executives are threatening to replace contractors who question drilling schedule delays.',
      'A defective cement barrier allows combustible hydrocarbons to breach the subsea wellhead.',
      'The blowout preventer’s blind shear rams have defective hydraulic backup batteries.'
    ],
    question: 'How do you respond to the anomalous negative pressure test reading?',
    options: [
      {
        id: 'A',
        label: 'Accept the BP representative’s "bladder effect" theory and pump displacement seawater immediately',
        rationale: 'Complies with customer instructions to keep the drilling project moving forward.',
        consequence: 'Methane gas surges up the riser unchecked, engulfing the rig in fire. Eleven workers die, the rig sinks, and millions of barrels of oil pollute the Gulf.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Disconnect the electrical alarm sirens in the control shack to stop the annoying buzzing',
        rationale: 'Eliminates auditory distraction while senior drilling supervisors debate the test.',
        consequence: 'The explosion occurs without warning, trapping sleeping crew members in their bunks. Evacuation becomes chaotic and casualties multiply.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'File an anonymous safety report to the Coast Guard hotline using satellite internet',
        rationale: 'Escalates safety concerns to federal authorities without risking immediate personal termination.',
        consequence: 'Coast Guard inspectors take forty-eight hours to schedule a flight out to the rig. The blowout occurs that same evening while the report sits unread.',
        verdict: 'partial'
      },
      {
        id: 'D',
        label: 'Halt drilling operations and run a comprehensive cement bond log before displacing mud',
        rationale: 'Enforces strict negative testing protocol to prevent normalization of deviance from triggering catastrophe.',
        consequence: 'You stop the well, refuse to displace the heavy drilling mud, and demand a mechanical cement evaluation. The acoustic log reveals the shattered cement shoe, preventing the largest offshore disaster in history.',
        verdict: 'strong'
      }
    ],
    whatActuallyHappened: 'BP managers ignored the abnormal negative pressure test and dismissed the cement evaluation to save time. Minutes later, high-pressure gas breached the well, triggering a catastrophic blowout that destroyed the rig and killed eleven men.',
    frameworkBridge: 'This is Normalization of Deviance & Negative Testing Protocol in safety-critical operations. Under intense schedule and budget pressure, organizations rationalize away negative test anomalies as harmless flukes. Rigorous operational engineering demands treating failed negative tests as proof of systemic compromise.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-076',
    protagonist: 'Yuri Orlov',
    roleTitle: 'International Defense Logistics Broker',
    momentLabel: '1992 · Odessa, Ukraine',
    title: 'Your Call: The Cargo Ship Inspection',
    setup: 'It is 1992 in the Black Sea port of Odessa. You are Yuri Orlov, international arms logistics specialist. Following the collapse of the Soviet Union, you have purchased thousands of Kalashnikov assault rifles and gunship helicopters from corrupt Ukrainian generals. You are aboard your cargo ship, the Kristol, sailing through international waters when an Interpol naval cutter commanded by Jack Valentine signals you to heave to for an immediate maritime inspection.',
    stakes: [
      'Being caught with undocumented military weaponry means life imprisonment in federal penitentiaries.',
      'Interpol holds jurisdiction if weapons match cargo manifest bills of lading in international waters.',
      'Painting over shipping names while underway requires dangerous rigging on rolling ocean swells.',
      'Your buyers in West Africa will assassinate your family if the weapons shipment is confiscated.'
    ],
    question: 'How do you manipulate supply-chain provenance to evade naval maritime inspection?',
    options: [
      {
        id: 'A',
        label: 'Re-flag maritime cargo vessels and forge dual transshipment manifests through neutral ports',
        rationale: 'Exploits global supply-chain jurisdictional gaps and transshipment laundering to conceal cargo origin.',
        consequence: 'You quickly paint the ship’s hull name from "Kristol" to "Kono," register under a French flag of convenience, and forge shipping manifests. Interpol boards, finds no legal discrepancy, and departs frustrated.',
        verdict: 'strong'
      },
      {
        id: 'B',
        label: 'Fire rocket-propelled grenades from the cargo deck to sink the approaching Interpol cutter',
        rationale: 'Uses lethal force to prevent law enforcement agents from boarding the vessel.',
        consequence: 'The naval cutter calls in international naval air support. A fighter jet sinks your cargo vessel with a guided missile, killing your entire crew.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Dump the entire $20 million cargo of Kalashnikov rifles into the ocean depths',
        rationale: 'Destroys physical evidence before inspectors board the cargo hold.',
        consequence: 'Interpol finds an empty hold, but your African warlord buyers execute your brother in retaliation for losing the munitions shipment.',
        verdict: 'partial'
      },
      {
        id: 'D',
        label: 'Surrender quietly to Interpol and offer to become an informant against Ukrainian generals',
        rationale: 'Seeks federal immunity by turning state’s evidence against foreign military contacts.',
        consequence: 'Corrupt foreign intelligence operatives poison your food in jail to silence you before trial. Your family is left destitute and unprotected.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'Yuri had his crew paint over the ship’s name on the hull while underway, hoisted a French flag, and produced forged manifests showing agricultural equipment. Agent Valentine boarded the vessel but was forced to release it due to legal jurisdictional loopholes.',
    frameworkBridge: 'This is the Global Supply-Chain Provenance & Transshipment Audit Matrix. Illicit and grey-market logistics exploit gaps between national jurisdictions, flag states, and transshipment documentation. Supply-chain integrity requires cryptographic provenance and immutable chain-of-custody tracking.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-077',
    protagonist: 'Chesley "Sully" Sullenberger',
    roleTitle: 'Captain, US Airways Flight 1549',
    momentLabel: 'January 2009 · Cockpit over Manhattan',
    title: 'Your Call: Overriding the QRH Checklist',
    setup: 'It is 3:28 PM in the cockpit of Flight 1549. You are Captain Chesley "Sully" Sullenberger. At 2,800 feet over the Bronx, double bird strikes have destroyed both turbofan engines and extinguished all electrical thrust. First Officer Jeff Skiles immediately pulls out the Quick Reference Handbook (QRH) dual-engine failure checklist, which contains three pages of diagnostic steps designed for engine restart attempts at thirty thousand feet.',
    stakes: [
      'The QRH checklist requires three minutes to execute step-by-step.',
      'You are descending at fifteen feet per second and will impact terrain in 150 seconds.',
      'Blindly following rule-based checklists burns altitude without establishing landing orientation.',
      'Standard operating procedure dictates attempting engine relights before planning ditching.'
    ],
    question: 'How do you balance rule-based checklists with heuristic crisis override?',
    options: [
      {
        id: 'A',
        label: 'Follow the QRH checklist step-by-step from page one without looking outside',
        rationale: 'Adheres strictly to FAA-certified airline operating manuals to maintain legal compliance.',
        consequence: 'You are on step four of page one when the unpowered aircraft impacts a residential neighborhood in Queens. The checklist consumes all cognitive latency and everyone dies.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Override standard high-altitude QRH checklists and rely on knowledge-based water ditching heuristics',
        rationale: 'Transitions from rigid rule-based behavior to expert knowledge-based cognitive crisis management.',
        consequence: 'You engage the APU auxiliary power immediately, assign Skiles to run critical engine restarts, and focus your attention entirely on flying the airplane to a survivable landing on the Hudson River.',
        verdict: 'strong'
      },
      {
        id: 'C',
        label: 'Close your eyes and recite passenger emergency prayers over the cabin intercom',
        rationale: 'Seeks spiritual solace during an unprecedented dual catastrophic engine failure.',
        consequence: 'With nobody flying the aircraft, the plane stalls and enters an unrecoverable flat spin over the Bronx, crashing with zero survivors.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Hand flight controls to the first officer while you read the Airbus flight manual',
        rationale: 'Delegates aircraft maneuvering to junior pilots to research technical procedures.',
        consequence: 'The first officer lacks multi-engine glider experience and over-controls the sidestick. The aircraft bleeds airspeed and stalls into the river at an extreme angle.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'Sully instinctively broke protocol: he turned on the Auxiliary Power Unit (APU) immediately—a step buried on page three of the manual—which kept flight control computers operational, and focused on flying the aircraft rather than finishing an irrelevant checklist.',
    frameworkBridge: 'This is Rasmussen’s Skill-Rule-Knowledge (SRK) Decision Framework in operational ergonomics. In routine environments, workers operate on skill and rules. In novel, time-compressed catastrophes, rigid rule-based checklists become fatal bottlenecks; operators must transition to knowledge-based heuristic overrides.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-078',
    protagonist: 'Richard "Dick" McDonald',
    roleTitle: 'Co-Founder & Operational Architect, McDonald’s',
    momentLabel: '1948 · San Bernardino, California',
    title: 'Your Call: Unbundling the Drive-In Menu',
    setup: 'It is autumn 1948 in San Bernardino, California. You are Dick McDonald. Your drive-in restaurant has twenty-five menu items, including barbecued ribs, pork chops, and tamales. Carhops spend twenty minutes taking customized orders, kitchens are choked with dirty dishware, and wait times are intolerable. While reviewing your sales ledger, you discover that eighty-seven percent of your sales volume comes from three items: hamburgers, fries, and milkshakes.',
    stakes: [
      'Cutting popular items like barbecue ribs risks alienating loyal local customers.',
      'Carhops will strike and quit if you transition to self-service walk-up windows.',
      'Menu complexity causes inventory waste, kitchen bottlenecks, and slow order cycle times.',
      'Fast throughput is the only path to high-margin, low-cost restaurant profitability.'
    ],
    question: 'How do you optimize your kitchen cycle time and queueing throughput?',
    options: [
      {
        id: 'A',
        label: 'Add thirty additional menu items including steaks and pizzas to satisfy every customer taste',
        rationale: 'Maximizes customer variety to increase average ticket spending size.',
        consequence: 'Kitchen ticket times balloon to forty-five minutes. Orders are constantly mixed up, food spoils in storage, and customers abandon your drive-in out of frustration.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Hire twenty additional teenage carhops on roller skates to deliver food faster',
        rationale: 'Accelerates front-of-house delivery without altering kitchen operational processes.',
        consequence: 'Roller-skating carhops collide in the parking lot, dropping expensive glass plates. Labor costs explode while the kitchen bottleneck remains unaddressed.',
        verdict: 'partial'
      },
      {
        id: 'C',
        label: 'Eliminate low-volume menu items to focus exclusively on high-velocity burgers and fries',
        rationale: 'Applies Little’s Law by drastically reducing work-in-progress complexity to collapse cycle times.',
        consequence: 'You slash the menu to nine items, replace glass plates with paper bags, and eliminate carhops. Customers receive orders in thirty seconds, creating the revolutionary Speedee Service System.',
        verdict: 'strong'
      },
      {
        id: 'D',
        label: 'Keep the 25-item menu but demand that cooks work double shifts with zero breaks',
        rationale: 'Forces staff to work through operational bottlenecks through sheer human endurance.',
        consequence: 'Exhausted cooks walk off the line during the lunch rush. Kitchen equipment catches fire, health inspectors shut you down, and staff quit en masse.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'The McDonald brothers ruthlessly cut their 25-item menu down to just burgers, cheeseburgers, fries, sodas, and pie. They eliminated carhops, introduced paper wrapping, and standardized cooking, dropping ticket cycle times from thirty minutes to thirty seconds.',
    frameworkBridge: 'This illustrates Little’s Law & Menu Complexity Reduction Matrix in queueing theory. Cycle time is directly proportional to work-in-progress (WIP) inventory and task complexity. By radically reducing menu variance, operational leaders collapse queue latency and unlock exponential throughput.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-079',
    protagonist: 'Ken Miles',
    roleTitle: 'Development Driver & Race Engineer, Shelby American',
    momentLabel: '1966 · Circuit de la Sarthe, Le Mans, France',
    title: 'Your Call: The Quick-Change Brake Caliper',
    setup: 'It is 2:00 AM during the 1966 24 Hours of Le Mans. You are Ken Miles, driving the Ford GT40 Mk II. You are battling Ferrari at 210 mph down the Mulsanne Straight. At the end of the straight, you brake from 200 to 30 mph, heating brake rotors to glowing orange temperatures of 1,500 degrees Fahrenheit. Traditional brake pad replacements take twenty to thirty minutes in the pits, which will forfeit the race to Ferrari.',
    stakes: [
      'Brake rotor thermal stress can cause explosive disc cracking at two hundred miles per hour.',
      'Traditional pit-stop brake servicing costs twenty laps, guaranteeing defeat to Ferrari.',
      'Ferrari’s lightweight cars generate less kinetic energy and require fewer pad changes.',
      'Phil Remington has engineered a modular quick-change brake assembly, but race officials may object.'
    ],
    question: 'How do you optimize brake replacement operations during pit stops?',
    options: [
      {
        id: 'A',
        label: 'Drive the entire 24 hours on the original brake rotors without changing pads',
        rationale: 'Avoids spending any pit-stop time on mechanical maintenance to stay ahead.',
        consequence: 'At 4:00 AM, the worn brake pads wear down to bare metal, shattering the front rotor into shards. Your car spins out at 180 mph, ending your race and risking your life.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Pour buckets of cold water over glowing brake rotors to cool them down',
        rationale: 'Uses rapid thermal cooling to prevent brake overheating during pit stops.',
        consequence: 'Thermal shock cracks the glowing cast-iron rotors immediately upon water contact. The car is rendered undriveable and retires on the spot.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Pull into the garage for twenty minutes every four hours for full mechanical rebuilds',
        rationale: 'Follows traditional endurance racing maintenance protocols to ensure total safety.',
        consequence: 'Ferrari cars maintain continuous track pace while your car sits in the garage. Ferrari takes a fifteen-lap lead and coasts to victory.',
        verdict: 'partial'
      },
      {
        id: 'D',
        label: 'Pre-assemble complete brake assemblies in quick-change pods for rapid pit-stop replacement',
        rationale: 'Applies SMED principles to convert internal setup time into external modular assembly swaps.',
        consequence: 'Phil Remington’s quick-change assembly swaps the entire caliper and rotor in under sixty seconds. The team defends the innovation to race officials, allowing Ford to sweep 1-2-3 at Le Mans.',
        verdict: 'strong'
      }
    ],
    whatActuallyHappened: 'Shelby mechanic Phil Remington designed a modular quick-change brake system where entire rotor and caliper units were pre-assembled and swapped in minutes. When Ferrari protested, team director Carroll Shelby pointed to the rulebook: replacement of parts was allowed.',
    frameworkBridge: 'This is Shingo’s SMED (Single-Minute Exchange of Die) & Modular Swapping in industrial operations. High-performance throughput requires separating internal setup (actions done while line is stopped) from external setup (pre-assembling modular sub-units offline), slashing changeover time by 95%.',
    verification: 'verified'
  }
];
