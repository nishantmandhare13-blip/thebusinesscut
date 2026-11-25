import { DecisionPoint } from '@/types/decisionPoint';

export const LEADERSHIP_DECISION_POINTS: DecisionPoint[] = [
  {
    lessonId: 'lms-080',
    protagonist: 'Juror 8 (Davis)',
    roleTitle: 'Architect & Dissenting Juror',
    momentLabel: '1957 · Manhattan Courtroom, New York',
    title: 'Your Call: The Lone Dissenting Vote',
    setup: 'It is a suffocatingly hot summer afternoon in a New York jury room. You are Juror 8, an architect. Eleven fellow jurors have just voted guilty in under five minutes, eager to send an impoverished teenager to the electric chair for murdering his father so they can attend an evening baseball game. You are the sole hand raised for not guilty, facing immediate collective anger and ridicule from eleven tired, aggressive men.',
    stakes: [
      'A unanimous guilty verdict sends a nineteen-year-old boy directly to the electric chair.',
      'Eleven aggressive men are shouting at you, demanding you conform to save them time.',
      'Conforming eliminates social tension but violates your personal moral conscience.',
      'Public defender counsel was court-appointed and barely cross-examined prosecution witnesses.'
    ],
    question: 'How do you cultivate psychological dissent without alienating the entire jury room?',
    options: [
      {
        id: 'A',
        label: 'Vote not guilty and demand an unhurried, evidence-based deliberation on reasonable doubt',
        rationale: 'Creates space for minority influence by refusing to rush capital punishment without inspection.',
        consequence: 'You calmly explain that you do not necessarily know if the boy is innocent, but refuse to send him to death without talking for an hour. Your calm, non-defensive posture forces jurors to re-examine flawed evidence.',
        verdict: 'strong'
      },
      {
        id: 'B',
        label: 'Change your vote to guilty so fellow jurors can catch their baseball game',
        rationale: 'Eliminates social conflict by bowing to overwhelming majority consensus.',
        consequence: 'The jury delivers a unanimous guilty verdict in ten minutes. The boy is executed in the electric chair, and systemic judicial reasonable doubt is never explored.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Scream insults at Juror 3 and accuse the entire jury of being prejudiced murderers',
        rationale: 'Uses aggressive moral condemnation to shame jurors into reconsidering their votes.',
        consequence: 'Jurors become defensive and dig in their heels. Emotional polarization hardens consensus against you, and constructive deliberation collapses.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Propose that the judge declare an immediate mistrial and dismiss the jury',
        rationale: 'Passes the moral burden of decision-making to an alternate future jury.',
        consequence: 'A mistrial forces a retrial where a new jury convicted the boy in minutes. Your opportunity to demand rigorous evidentiary analysis is lost.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'Juror 8 stood alone, bought an identical switchblade knife from the boy’s neighborhood to disprove the prosecution’s claim of uniqueness, and patiently deconstructed witness testimony until all twelve jurors voted not guilty.',
    frameworkBridge: 'This exemplifies Nemeth’s Minority Influence & Psychological Dissent Model in organizational leadership. Consistent, non-dogmatic minority dissent forces majorities out of lazy heuristic groupthink, compelling groups to process information deeply and arrive at superior, robust decisions.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-081',
    protagonist: 'Coach Herman Boone',
    roleTitle: 'Head Football Coach, T.C. Williams High School',
    momentLabel: '1971 · Alexandria, Virginia',
    title: 'Your Call: The Midnight Gettysburg Run',
    setup: 'It is 1971 at Gettysburg College pre-season camp. You are Herman Boone, the newly appointed Black head coach of the newly integrated T.C. Williams High School football team. Racial tension between Black and white players is explosive: athletes eat at separate tables, fight in dorm hallways, and refuse to block for each other on the practice field, while assistant coach Bill Yoast watches skeptically.',
    stakes: [
      'The school board will fire you at the first lost game to appease angry white parents.',
      'Racial fistfights in camp threaten team safety and destroy athletic cohesion.',
      'Assistant coach Bill Yoast has the support of white players and could easily replace you.',
      'Without authentic racial integration, the team faces guaranteed failure on the field.'
    ],
    question: 'How do you forge cross-cultural alignment and break racial divisions?',
    options: [
      {
        id: 'A',
        label: 'Separate the team into racially segregated squads and play them in alternate quarters',
        rationale: 'Avoids racial conflict by eliminating inter-racial contact on the field.',
        consequence: 'The segregated squads compete against each other with bitter hostility. The team falls apart during their first competitive match and community riots worsen.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Awaken the team at 3:00 AM to run to Gettysburg cemetery',
        rationale: 'Applies superordinate goal alignment by connecting shared human survival to historical sacrifice.',
        consequence: 'You run them through misty woods to the Gettysburg battlefield, reminding them that fifty thousand men died fighting the same racial hatred on this exact ground. The shared crucible breaks the racial wall, uniting them as Titans.',
        verdict: 'strong'
      },
      {
        id: 'C',
        label: 'Cancel camp football practices and hire a motivational psychologist to lecture in classrooms',
        rationale: 'Replaces physical athletic training with structured academic sensitivity workshops.',
        consequence: 'Players sit in cynical boredom during lectures. Physical fitness declines, and players resume fighting the moment they return to dorms.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Demote all white team captains and replace them exclusively with Black athletes',
        rationale: 'Asserts absolute racial authority to overturn historical institutional favoritism.',
        consequence: 'White players boycott practice and parents pull their sons from the school. The school board fires you for inciting community civil unrest.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'Coach Boone woke the team at 3:00 AM and ran them to the Gettysburg battlefield cemetery. His iconic speech—"If we don’t come together right now on this hallowed ground, we too will be destroyed"—ignited the brotherhood that carried the Titans to an undefeated championship.',
    frameworkBridge: 'This is Muzafer Sherif’s Robbers Cave & Superordinate Goal Alignment in organizational behavior. Deep-seated intergroup tribalism cannot be resolved through polite dialogue. Leaders must introduce compelling superordinate goals that require interdependent cooperation to overcome existential collective threats.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-082',
    protagonist: 'Walter "Robby" Robinson',
    roleTitle: 'Editor & Lead Reporter, Spotlight Team, The Boston Globe',
    momentLabel: '2001 · Boston, Massachusetts',
    title: 'Your Call: Confronting Past Institutional Complicity',
    setup: 'It is autumn 2001 in the Spotlight office in Boston. You are Robby Robinson, lifelong Bostonian and head of the Globe’s investigative team. Lawyer Mitchell Garabedian confronts you with an old Globe clipping from 1993: a story you personally edited detailing twenty abusive priests that was buried on page twenty-four and forgotten. You realize that you and the Globe’s local journalistic establishment were complicit in overlooking the Church’s crimes for years.',
    stakes: [
      'Admitting past newsroom neglect is deeply humiliating to your professional journalistic pride.',
      'The Globe’s veteran reporters are close personal friends with Church monsignors and judges.',
      'Blaming past editors deflects institutional guilt but preserves comfortable civic relationships.',
      'New editor Marty Baron demands systemic accountability regardless of historical embarrassment.'
    ],
    question: 'How do you lead your newsroom in confronting its own institutional blind spots?',
    options: [
      {
        id: 'A',
        label: 'Deny the 1993 clipping was ever received and blame low-level administrative clerks',
        rationale: 'Protects personal newsroom authority and avoids historical institutional liability.',
        consequence: 'Garabedian produces the original delivery receipt bearing your signature. Your journalistic integrity is shredded and your reporters lose faith in your moral leadership.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Spike the ongoing investigation to prevent the Globe’s historical complicity from surfacing',
        rationale: 'Protects the newspaper’s institutional reputation and preserves Catholic community ties.',
        consequence: 'Rival newspapers break the story of the Church cover-up and expose the Globe’s decades of silence. The Globe’s prestige is permanently crippled.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Acknowledge past institutional blindness and redirect Spotlight to investigate systemic chancery cover-ups',
        rationale: 'Overcomes defensive organizational blind spots by auditing historical failures and pursuing root causes.',
        consequence: 'You candidly admit to your team that the paper missed the story years ago. By taking ownership, you galvanize the team to investigate Cardinal Law’s office, uncovering the full global cover-up.',
        verdict: 'strong'
      },
      {
        id: 'D',
        label: 'Resign immediately as Spotlight editor to atone personally for past reporting failures',
        rationale: 'Demonstrates personal accountability through immediate executive departure.',
        consequence: 'Your sudden resignation decapitates the investigative desk during a crucial moment. The investigation stalls for months without your local Boston sourcing.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'Robby looked at the 1993 clipping and admitted with painful humility: "We had the story. We buried it." Taking responsibility for past newsroom complacency, he focused the team relentlessly on Cardinal Law, producing one of the most impactful journalistic investigations in history.',
    frameworkBridge: 'This is Institutional Blind-Spot Auditing & External Perspective Matrix. Organizations naturally develop systemic blind spots to protect comfortable local consensus. Exceptional leaders possess the psychological maturity to acknowledge past complicity and audit internal failures to drive systemic renewal.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-083',
    protagonist: 'Andrew Neiman',
    roleTitle: 'First-Year Jazz Drummer, Shaffer Conservatory',
    momentLabel: '2014 · New York City',
    title: 'Your Call: The Whiplash Rehearsal Crucible',
    setup: 'It is 2014 in the basement band room of Shaffer Conservatory in Manhattan. You are Andrew Neiman, an ambitious nineteen-year-old jazz drummer. Studio band conductor Terence Fletcher has hurled a steel chair at your head, slapped your face across tempos, and screamed insults about your parents because you were dragging by a fraction of a millisecond on Hank Levy’s "Whiplash." Your hands are bleeding onto the drumheads as Fletcher counts off the tempo.',
    stakes: [
      'Fletcher has the power to launch your career as a jazz great or blacklist you forever.',
      'Enduring physical and verbal abuse is causing severe psychological distress and alienation.',
      'Quitting the band confirms Fletcher’s accusation that you lack the grit to be "one of the greats."',
      'Fletcher believes that "there are no two words in the English language more harmful than good job."'
    ],
    question: 'How do you navigate high-performance accountability without surrendering psychological safety?',
    options: [
      {
        id: 'A',
        label: 'Internalize the toxic abuse, practice until hands bleed, and isolate from loved ones',
        rationale: 'Sacrifices physical and mental health to meet an abusive mentor’s sadistic standards.',
        consequence: 'You break up with your girlfriend, crash your car rushing to a concert, and physically assault Fletcher on stage. You are expelled from conservatory with shattered mental health.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Quit drumming immediately and abandon music to work as a convenience store clerk',
        rationale: 'Escapes toxic emotional abuse by terminating your lifelong artistic ambitions.',
        consequence: 'You escape Fletcher’s abuse but live with bitter regret and unfulfilled musical genius. You spend your life wondering what you might have achieved.',
        verdict: 'partial'
      },
      {
        id: 'C',
        label: 'Hire a personal lawyer to sue Terence Fletcher for workplace assault and verbal harassment',
        rationale: 'Holds the abusive conductor legally accountable for physical assault in the classroom.',
        consequence: 'Fletcher is dismissed from Shaffer, but conservative jazz circles brand you a litigious student. Doors in professional big bands close quietly across New York.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Reject abusive terror tactics to establish psychological safety while maintaining elite accountability',
        rationale: 'Recognizes that fear degrades fine motor performance and separates high standards from cruelty.',
        consequence: 'When Fletcher attempts to publicly humiliate you at Carnegie Hall, you take command of the kit, cues the band into Caravan, and deliver an awe-inspiring solo on your own terms, transforming from victim to master.',
        verdict: 'strong'
      }
    ],
    whatActuallyHappened: 'After being expelled and testifying anonymously against Fletcher, Andrew was ambushed by Fletcher on stage at Carnegie Hall. Instead of breaking, Andrew seized control of the band, drove into an electrifying performance of Caravan, and forced Fletcher to acknowledge his genius.',
    frameworkBridge: 'This is Amy Edmondson’s Psychological Safety & Performance Accountability Matrix. Fletcher operated in the "Anxiety Zone"—brutal standards without psychological safety—which triggers burnout, deception, and breakdown. True mastery requires high accountability paired with psychological safety to achieve the "Learning Zone."',
    verification: 'verified'
  },
  {
    lessonId: 'lms-084',
    protagonist: 'Nelson Mandela',
    roleTitle: 'President of South Africa',
    momentLabel: '1995 · Pretoria, South Africa',
    title: 'Your Call: The Springbok Emblem Dilemma',
    setup: 'It is 1995 in Pretoria, South Africa. You are Nelson Mandela, the first democratically elected Black president of South Africa after twenty-seven years in prison. The National Sports Council, dominated by your Black ANC comrades, has just voted unanimously to abolish the Springbok rugby emblem, viewing the green-and-gold jersey as a hated symbol of apartheid oppression. The 1995 Rugby World Cup is set to take place in South Africa in nine months.',
    stakes: [
      'Black South Africans cheer against the Springboks, celebrating every opposing team score.',
      'Afrikaners view the Springbok emblem as their sacred cultural soul; stripping it risks civil war.',
      'Your own ANC comrades view preserving the white emblem as an unforgivable political betrayal.',
      'Rebuilding the post-apartheid economy requires stopping white capital and skills flight.'
    ],
    question: 'How do you leverage the national rugby team to unite a fractured nation?',
    options: [
      {
        id: 'A',
        label: 'Embrace the Springbok rugby team as a unifying national symbol of racial reconciliation',
        rationale: 'Executes generosity arbitrage by restoring a symbol beloved by adversaries to build trust.',
        consequence: 'You personally address the sports council, meet with captain Francois Pienaar, and wear the green Springbok jersey at the final before 65,000 Afrikaners. When South Africa wins, the entire nation unites as one.',
        verdict: 'strong'
      },
      {
        id: 'B',
        label: 'Support your ANC comrades and ban the Springbok emblem and colors nationwide',
        rationale: 'Enforces democratic majority rule to erase symbols of white minority oppression.',
        consequence: 'Afrikaner military factions mobilize and racial violence escalates across rural provinces. Foreign investors pull capital and the dream of a peaceful Rainbow Nation is shattered.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Boycott the Rugby World Cup and direct all national sports funding exclusively to soccer',
        rationale: 'Prioritizes the majority Black sport while ignoring minority Afrikaner sports.',
        consequence: 'The international sporting community views the boycott as reverse apartheid. Deep racial polarization hardens, cementing social segregation.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Replace the Springbok animal emblem with a generic corporate soccer ball design',
        rationale: 'Seeks a neutral sterile corporate compromise that offends nobody.',
        consequence: 'Both Black and white citizens reject the bland corporate branding. The World Cup passes as a soulless athletic tournament with zero transformative cultural impact.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'Mandela risked his political capital by confronting his own party, demanding they retain the Springbok emblem. He befriended team captain Francois Pienaar, learned rugby rules, and wore the green-and-gold jersey to the World Cup final, unifying the nation in a historic moment.',
    frameworkBridge: 'This is Symbolic Leadership & Generosity Arbitrage (Heifetz / Bolman-Deal). Transformational leaders do not rely solely on transactional legislation. They use symbolic gestures—often giving adversaries the very cultural symbols they cherish most—to disarm fear and forge unified collective identity.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-085',
    protagonist: 'General Maximus Decimus Meridius',
    roleTitle: 'Commander of the Armies of the North, Roman Empire',
    momentLabel: '180 AD · Germania Border, Battle of Vindobona',
    title: 'Your Call: Leading the Northern Legions',
    setup: 'It is 180 AD in the freezing forests of Vindobona on the Germanic frontier. You are General Maximus Decimus Meridius, commanding the Roman legions Felix and Invicta. Emperor Marcus Aurelius watches from the hill above. Thousands of barbarian warriors are screaming defiance across the snowy treeline. Your legionaries are exhausted, shivering in the mud after three years of brutal winter campaigning.',
    stakes: [
      'A Roman defeat will collapse the northern frontier and unleash barbarian invasions on Rome.',
      'Roman soldiers will only charge terrifying Germanic tribes if their general shares their physical peril.',
      'Directing the battle safely from the imperial command tent distances you from front-line realities.',
      'Cavalry flanking maneuvers through dense pine forests risk being ambushed in boggy terrain.'
    ],
    question: 'How do you command your legions to break the Germanic barbarian line?',
    options: [
      {
        id: 'A',
        label: 'Remain on the imperial viewing hill with Marcus Aurelius and send tactical runners',
        rationale: 'Preserves high-level strategic detachment and protects the supreme commander from injury.',
        consequence: 'Without their general at their side, the shivering infantry waver against the ferocious barbarian charge. The front line collapses and the imperial legions are routed.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Lead the frontline cavalry charge into the Germanic forest alongside your infantry soldiers',
        rationale: 'Demonstrates servant leadership and front-line presence, inspiring unshakeable combat courage.',
        consequence: 'You rub mud onto your hands, declare "Strength and Honor," and personally lead the cavalry hammer into the enemy flank while artillery fires. Inspired by your presence, the legions achieve decisive victory.',
        verdict: 'strong'
      },
      {
        id: 'C',
        label: 'Order a full retreat back across the Danube River and await spring reinforcements',
        rationale: 'Conserves imperial troops to avoid fighting in freezing winter snow conditions.',
        consequence: 'Barbarian war parties swarm the retreating columns in the snow. Marcus Aurelius is humiliated and your military prestige is destroyed.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Rely exclusively on catapult flaming pots without engaging any infantry or cavalry',
        rationale: 'Minimizes Roman casualties by relying entirely on long-range siege artillery.',
        consequence: 'Artillery fire burns the forest canopy but leaves enemy shield walls intact. As ammunition runs out, the enemy counter-attacks your exhausted lines.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'Maximus fought on the frontline: walking among the shivering soldiers, speaking to archers, pet his war dog, and leading the decisive cavalry charge through the trees himself. His front-line presence earned him the fierce, unconditional devotion of every soldier in the empire.',
    frameworkBridge: 'This illustrates Robert Greenleaf’s Servant Leadership & Frontline Presence Matrix. Authentic leadership authority is not conferred by imperial titles or executive corner offices; it is earned on the frontlines by leaders who share the hardships, risks, and sacrifices of their operational teams.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-086',
    protagonist: 'Abraham Lincoln',
    roleTitle: '16th President of the United States',
    momentLabel: 'January 1865 · Washington D.C.',
    title: 'Your Call: Navigating the 13th Amendment Swamp',
    setup: 'It is January 1865 in the White House. You are Abraham Lincoln. The Civil War has claimed over six hundred thousand American lives. Confederate peace commissioners are approaching Hampton Roads seeking negotiations. You know that if peace is declared before the 13th Amendment abolishing slavery passes the House of Representatives, border states will reject the amendment and four million human beings will remain in chattel slavery forever.',
    stakes: [
      'You need twenty Democratic votes in the House, and Democrats are fiercely opposed to abolition.',
      'If Congress discovers Confederate envoys are in Washington, peace Democrats will kill the bill.',
      'Purchasing votes with federal postmaster patronage jobs compromises your pristine moral halo.',
      'Failing to pass the amendment before the war ends means slavery will legally survive the conflict.'
    ],
    question: 'How do you navigate the legislative swamp to abolish slavery permanently?',
    options: [
      {
        id: 'A',
        label: 'Rely purely on moral sermons to persuade racist border-state congressmen to vote yes',
        rationale: 'Maintains unblemished ethical purity without engaging in political patronage corruption.',
        consequence: 'Congressmen laugh off your moral speeches. The vote fails by thirteen votes, the war ends, and slavery remains permanently enshrined in the United States Constitution.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Welcome the Confederate peace commissioners immediately and abandon the 13th Amendment',
        rationale: 'Halts wartime bloodshed immediately by accepting a negotiated peace that preserves slavery.',
        consequence: 'The bloodshed stops temporarily, but slavery remains intact across eleven southern states. Decades of future slave rebellions and civil conflict follow.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Compromise pragmatically by navigating political swamps while keeping your true compass heading North',
        rationale: 'Synthesizes pure moral vision with dirty political mechanics to achieve transformative structural change.',
        consequence: 'You deploy W.N. Bilbo to distribute federal patronage jobs to lame-duck Democrats while stalling the Confederate envoys. The 13th Amendment passes by two votes, ending slavery forever.',
        verdict: 'strong'
      },
      {
        id: 'D',
        label: 'Dissolve Congress by military executive decree and declare slavery abolished by force',
        rationale: 'Uses dictatorial wartime powers to bypass congressional voting deadlock.',
        consequence: 'The Supreme Court and northern governors declare your actions tyrannical. Union soldiers mutiny and the United States fragments into irreversible military dictatorship.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'Lincoln used patronage appointments, backdoor lobbying, and deliberate ambiguity about Confederate peace commissioners to secure the necessary Democratic votes. The 13th Amendment passed on January 31, 1865, abolishing slavery in the United States forever.',
    frameworkBridge: 'This is Lincoln’s Compass & Swamp Navigation Model. Pure moral idealism is like a compass pointing true North; but if you walk blindly forward without minding the swamps, deserts, and chasms in your path, you will sink and drown. True leadership pairs moral clarity with pragmatic tactical compromise.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-087',
    protagonist: 'Al Harrison',
    roleTitle: 'Director, Space Task Group, NASA Langley',
    momentLabel: '1961 · Hampton, Virginia',
    title: 'Your Call: Knocking Down the Colored Bathroom Sign',
    setup: 'It is 1961 at NASA Langley Research Center. You are Al Harrison, director of the Space Task Group. The Soviet Union has just put Yuri Gagarin into orbit, humiliating America. Your lead mathematical genius, Katherine Johnson, disappears from her desk for forty-five minutes every afternoon. When you publicly confront her in front of forty white male engineers, she tearfully explains she must run half a mile across campus in rain and heels to use the only "Colored Women" bathroom.',
    stakes: [
      'America is losing the space race; orbital trajectory math calculations are months behind.',
      'Virginia is governed by strict Jim Crow state segregation laws that mandate separate facilities.',
      'Katherine Johnson is the only mathematician capable of calculating John Glenn’s orbital reentry math.',
      'Ignoring racial friction forces your best cognitive talent to waste valuable engineering hours.'
    ],
    question: 'How do you eliminate institutional friction to unlock your team’s cognitive surplus?',
    options: [
      {
        id: 'A',
        label: 'Instruct Katherine to hold her bladder until her daily shift ends at 5:00 PM',
        rationale: 'Enforces desk presence without challenging institutional segregation rules.',
        consequence: 'Katherine develops severe kidney complications and resigns from NASA. John Glenn’s orbital flight calculation is delayed, allowing the Soviets to dominate space.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Purchase a bicycle for Katherine so she can pedal across campus faster',
        rationale: 'Reduces transit latency without offending conservative white engineers.',
        consequence: 'Riding a bicycle in rain and heels remains humiliating and dangerous. The insulting compromise fails to address systemic institutional erasure, and team morale sinks.',
        verdict: 'partial'
      },
      {
        id: 'C',
        label: 'Form a committee to study the legal implications of municipal Virginia segregation laws',
        rationale: 'Avoids political conflict with local state government through bureaucratic delays.',
        consequence: 'The committee debates legalities for two years while the space program stalls. Katherine’s mathematical genius remains constrained by administrative inertia.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Physically dismantle racially segregated bathroom signs to eliminate operational friction for mathematicians',
        rationale: 'Destroys operational barriers immediately, establishing that mission performance supersedes prejudice.',
        consequence: 'You take a crowbar, march to the West Building, and smash down the "Colored Ladies" sign, declaring: "Here at NASA, we all pee the same color." Katherine returns to calculating orbital flight paths unimpeded.',
        verdict: 'strong'
      }
    ],
    whatActuallyHappened: 'Harrison took a crowbar and personally tore down the colored bathroom sign in the West Computing Group building, declaring that at NASA, everyone pees the same color and uses the nearest restroom. Katherine’s verified calculations enabled John Glenn to orbit Earth.',
    frameworkBridge: 'This demonstrates Cognitive Surplus Unlocking & Friction Elimination Matrix in leadership. Bureaucracy and institutional prejudice impose massive invisible friction on marginalized talent. Transformational leaders use executive authority to smash operational barriers and unlock total cognitive potential.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-088',
    protagonist: 'Billy Beane',
    roleTitle: 'General Manager, Oakland Athletics',
    momentLabel: '2002 · Oakland, California',
    title: 'Your Call: Burning the Boats with Art Howe',
    setup: 'It is mid-season 2002 in the Oakland Coliseum. You are Billy Beane. You have hired sabermetric analyst Peter Brand and signed undervalued players like Scott Hatteberg to play first base. However, veteran field manager Art Howe refuses to play your lineup, benching Hatteberg and starting traditional defensive first-baseman Carlos Peña every day. The team is ten games behind the division lead, and Howe knows he cannot be fired without paying his multi-million-dollar contract.',
    stakes: [
      'Art Howe’s insubordination is sabotaging your entire sabermetric organizational strategy.',
      'The A’s are in last place; the sports media is calling your analytics experiment an unmitigated disaster.',
      'Firing Art Howe requires owner approval and leaves the team with expensive dead payroll.',
      'You cannot order the manager how to manage his dugout during live games under union rules.'
    ],
    question: 'How do you force your field manager to adopt the analytical strategy?',
    options: [
      {
        id: 'A',
        label: 'Fire Art Howe and appoint Peter Brand as manager for the season',
        rationale: 'Places the sabermetric architect directly in charge of field tactics.',
        consequence: 'Owner Lew Wolff vetoes paying Howe’s buyout salary. Brand lacks clubhouse respect and players mutiny against an academic economist in the dugout.',
        verdict: 'partial'
      },
      {
        id: 'B',
        label: 'Trade away popular veteran players to force the manager to play sabermetric lineups',
        rationale: 'Executes Kotter’s change management by removing traditional fallback options.',
        consequence: 'You trade Carlos Peña to Detroit and Jeremy Giambi to Philadelphia, leaving Howe with zero first-basemen except Scott Hatteberg. Howe is forced to play Hatteberg, sparking the historic 20-game winning streak.',
        verdict: 'strong'
      },
      {
        id: 'C',
        label: 'Concede to Howe’s traditional lineups and abandon sabermetric recruitment for the year',
        rationale: 'Restores peace in the dugout and relies on traditional baseball wisdom to finish the year.',
        consequence: 'The team finishes in fourth place. Lew Wolff fires you at the end of the season and the Oakland A’s return to conventional big-payroll mediocrity.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Offer Art Howe a secret bonus for every game Hatteberg starts at first',
        rationale: 'Uses financial compensation to incentivize field manager compliance.',
        consequence: 'Howe leaks the secret bonus offer to the sports press. The resulting scandal leads to an MLB commissioner investigation that suspends you from baseball.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'Billy Beane went into the clubhouse and traded Carlos Peña to the Tigers and Jeremy Giambi to the Phillies: "I’m not paying you to manage the team you want, I’m paying you to manage the team you have." With no other options, Howe played Hatteberg, and the A’s made baseball history.',
    frameworkBridge: 'This is Kotter’s 8-Step Change Model & "Burning the Boats" Execution in organizational transformation. Legacy middle managers often undermine strategic pivots by retreating to comfortable legacy workflows. Senior leadership must eliminate historical fallbacks, forcing adoption of the new paradigm.',
    verification: 'verified'
  }
];
