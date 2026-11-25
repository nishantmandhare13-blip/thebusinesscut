import { DecisionPoint } from '@/types/decisionPoint';

export const NEGOTIATION_DECISION_POINTS: DecisionPoint[] = [
  {
    lessonId: 'lms-089',
    protagonist: 'James B. Donovan',
    roleTitle: 'Insurance Defense Attorney & Special Presidential Envoy',
    momentLabel: 'February 1962 · East Berlin & Glienicke Bridge',
    title: 'Your Call: The Two-for-One Prisoner Exchange',
    setup: 'It is a freezing February night in 1962 in divided Berlin. You are James B. Donovan, an independent American insurance lawyer. You are negotiating a perilous Cold War spy exchange: convicted Soviet KGB colonel Rudolf Abel for downed American U-2 spy plane pilot Francis Gary Powers. However, the East German Stasi has separately arrested an innocent American graduate student, Frederic Pryor, and the CIA orders you to abandon Pryor and exchange Abel exclusively for Powers.',
    stakes: [
      'The CIA and White House care only about Powers and order you to drop Pryor.',
      'East German negotiator Vogel demands sovereign diplomatic recognition from the United States.',
      'Soviet negotiator Schischkin insists on completing the Abel exchange at Glienicke Bridge.',
      'If you blink or fracture the negotiations, both Americans face years in communist labor camps.'
    ],
    question: 'How do you structure the multi-party prisoner exchange at the bridge?',
    options: [
      {
        id: 'A',
        label: 'Insist firmly on a linked two-for-one prisoner exchange across East and West Berlin',
        rationale: 'Links separate negotiating tracks to leverage Abel’s value to the Soviets against East German pride.',
        consequence: 'You inform East German lawyer Vogel that if Pryor is not released at Checkpoint Charlie, Abel will not cross Glienicke Bridge. The Soviets force East Germany to comply, freeing both Americans simultaneously.',
        verdict: 'strong'
      },
      {
        id: 'B',
        label: 'Follow CIA orders to abandon Pryor and exchange Abel solely for pilot Powers',
        rationale: 'Complies with national security directives and secures the high-value military pilot.',
        consequence: 'Powers is returned safely, but Frederic Pryor spends decades forgotten in a brutal East German prison. Your moral standing and principled negotiation reputation are permanently compromised.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Offer $500,000 of your personal savings to East German officials to buy Pryor’s release',
        rationale: 'Uses personal monetary bribery to bypass complex geopolitical diplomatic disputes.',
        consequence: 'East German officials view the cash bribe as an insult to socialist sovereignty. They terminate negotiations and move Pryor to a maximum-security prison.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Release Rudolf Abel immediately on the West Berlin side as a gesture of goodwill',
        rationale: 'Demonstrates unilateral diplomatic trust to encourage reciprocal Soviet concessions.',
        consequence: 'The Soviets welcome Abel back and immediately cancel all prisoner transfers. The United States loses its sole piece of leverage with zero prisoners returned.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'Donovan refused to leave Pryor behind, defying CIA instructions. He told the East Germans that it was "all or none": no Pryor at Checkpoint Charlie meant no Abel at the bridge. The Soviets pressured East Germany to yield, releasing both Powers and Pryor.',
    frameworkBridge: 'This is Harvard Principled Negotiation: BATNA & ZOPA Multi-Party Linkage in international diplomacy. Donovan expanded the Zone of Possible Agreement (ZOPA) by linking two separate bilateral negotiations, leveraging Soviet urgency to force compliance from a recalcitrant secondary party.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-090',
    protagonist: 'Michael Clayton',
    roleTitle: 'Senior Fixer & Special Counsel, Kenner, Bach & Ledeen',
    momentLabel: '2007 · Manhattan, New York',
    title: 'Your Call: Confronting Karen Crowder',
    setup: 'It is 2007 inside a Midtown Manhattan corporate convention hall. You are Michael Clayton, the premier fixer for high-powered law firm Kenner, Bach & Ledeen. Your firm has spent six years defending agrochemical giant U/North in a multi-billion-dollar toxic pesticide class action. Senior partner Arthur Edens discovered an internal U/North memo proving the company knew the pesticide was carcinogenic, and U/North chief counsel Karen Crowder had Arthur assassinated.',
    stakes: [
      'Karen Crowder believes Arthur’s murder looked like a natural manic-depressive suicide.',
      'Crowder just hired hitmen who blew up your car, assuming you were killed in the explosion.',
      'U/North has just finalized an $80 million settlement with class-action plaintiffs.',
      'Walking into Crowder’s private executive suite without leverage means physical assassination.'
    ],
    question: 'How do you confront Karen Crowder to extract full corporate accountability?',
    options: [
      {
        id: 'A',
        label: 'Accept an $80,000 annual consulting retainer from Crowder to bury Arthur’s memo permanently',
        rationale: 'Secures personal financial stability to pay off loan-shark gambling debts.',
        consequence: 'Crowder agrees to pay you, but you remain an accessory to murder and corporate cover-up. Living as a corrupt legal fixer destroys your soul.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Tape Karen Crowder’s private bribery confession to corner U/North into total settlement',
        rationale: 'Creates absolute information asymmetry and an unassailable trap using a hidden microphone.',
        consequence: 'You confront Crowder, demanding $10 million while she incriminates herself on audio tape. As she agrees, police detectives and federal agents swarm the hallway to arrest her.',
        verdict: 'strong'
      },
      {
        id: 'C',
        label: 'Shoot Karen Crowder in the convention center hallway to avenge Arthur Edens',
        rationale: 'Delivers immediate personal vigilante justice for Arthur’s contract murder.',
        consequence: 'Convention center security guards shoot you dead on the spot. U/North frames you as a deranged gunman and covers up the toxic pesticide memo forever.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Leak Arthur’s unauthenticated memo to a tabloid newspaper without audio proof',
        rationale: 'Alerts the public to U/North’s crimes while avoiding direct personal danger.',
        consequence: 'U/North’s high-powered PR machine dismisses the document as the delusions of a bipolar lawyer. The court approves the settlement and the truth remains hidden.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'Clayton confronted Crowder, taunting her: "I\'m not the guy you kill, Karen. I\'m the guy you buy." When Crowder offered him $10 million to bury the memo, Clayton revealed his cell phone was on a live open line to federal prosecutors, leading to her immediate arrest.',
    frameworkBridge: 'This is the Information Asymmetry & Asymmetric Entrapment Matrix in high-stakes legal negotiation. Clayton created the illusion of a corrupt, desperate negotiator looking for a buyout, baiting Crowder into a verbal confession that irreversibly collapsed her legal defense.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-091',
    protagonist: 'Don Vito Corleone',
    roleTitle: 'Head of the Corleone Family',
    momentLabel: '1945 · Long Island, New York',
    title: 'Your Call: The Bandleader Johnny Fontane Contract',
    setup: 'It is 1945 in the dark, wood-paneled office of the Corleone compound. You are Don Vito Corleone. Your godson, famous singer Johnny Fontane, weeps in front of you. A powerful Hollywood bandleader holds Fontane under an exclusive five-year personal service contract, taking eighty percent of his earnings and refusing to release him to star in a breakout movie role, despite offers of generous cash buyouts.',
    stakes: [
      'The bandleader holds an ironclad, legally binding commercial contract in New York state courts.',
      'Civil litigation will take three years, destroying Fontane’s peak career movie window.',
      'Civil court remedies cannot breach the bandleader’s stubborn personal obstinacy.',
      'Refusing to help your godson damages your reputation as an all-powerful protector in the community.'
    ],
    question: 'How do you structure the negotiation to secure Fontane’s immediate contract release?',
    options: [
      {
        id: 'A',
        label: 'File a civil breach-of-contract lawsuit in New York State Supreme Court',
        rationale: 'Follows traditional civil dispute resolution through established state courts.',
        consequence: 'The court takes four years to hear the case, ruling that the bandleader’s contract is legally binding. Johnny Fontane’s youthful voice fades and his career is over.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Offer the bandleader five times the contract’s market value in cash compensation',
        rationale: 'Attempts to buy contract freedom through generous financial concessions.',
        consequence: 'The bandleader smells desperation, rejects the cash, and demands fifty percent of Fontane’s future movie earnings. You are trapped in extortionate terms.',
        verdict: 'partial'
      },
      {
        id: 'C',
        label: 'Structure an asymmetric coercive offer that makes refusal more costly than total compliance',
        rationale: 'Employs an unrefusable coercive alternative that renders resistance impossible.',
        consequence: 'You dispatch Luca Brasi with a signed release form and a certified check for $10,000, promising the bandleader that either his signature or his brains will be on the contract. He signs immediately.',
        verdict: 'strong'
      },
      {
        id: 'D',
        label: 'Tell Johnny Fontane to accept his fate and sing in provincial nightclubs',
        rationale: 'Avoids engaging in illegal coercive criminal threats against a prominent citizen.',
        consequence: 'Fontane becomes an alcoholic has-been. The neighborhood loses respect for the Corleone family’s power to protect its people.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'Vito Corleone made the bandleader "an offer he couldn’t refuse." Luca Brasi held a gun to his head while Corleone assured him that either his brains or his signature would be on the contract. The bandleader signed for $1,000.',
    frameworkBridge: 'This is The Asymmetric "Godfather Offer" & Fiduciary Dilemma Model in power negotiations. When standard economic concessions fail, power dynamics shift to asymmetric alternatives where the counterparty’s BATNA is transformed into catastrophic negative utility, guaranteeing compliance.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-092',
    protagonist: 'Erin Brockovich',
    roleTitle: 'Legal Researcher, Masry & Vititoe',
    momentLabel: '1993 · Hinkley, California',
    title: 'Your Call: Confronting Pacific Gas & Electric',
    setup: 'It is 1993 in the desert town of Hinkley, California. You are Erin Brockovich, an unemployed single mother of three turned file clerk at a small law firm. You have discovered that Pacific Gas & Electric (PG&E) has contaminated the groundwater of over six hundred residents with toxic hexavalent chromium, causing deadly cancers, while telling residents they used harmless chromium. PG&E’s corporate defense lawyers arrive offering a quick, insulting nuisance settlement of $250,000.',
    stakes: [
      'PG&E is a multi-billion-dollar corporate titan with unlimited legal defense resources.',
      'Masry & Vititoe is a tiny two-partner personal injury firm that is going into debt on this case.',
      'Securing a binding arbitration agreement requires unanimous consent from 634 sick residents.',
      'Corporate lawyers dismiss you as an uneducated, provocatively dressed file clerk.'
    ],
    question: 'How do you negotiate against PG&E’s corporate legal team?',
    options: [
      {
        id: 'A',
        label: 'Accept the $250,000 corporate settlement and split the proceeds among 600 sick residents',
        rationale: 'Guarantees immediate financial payout for clients without taking litigation risk.',
        consequence: 'Each sick resident receives barely $400, which cannot cover a single doctor visit. PG&E continues polluting groundwater and clients remain impoverished.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Hand the legal case over to a giant corporate class-action firm in California',
        rationale: 'Leverages institutional corporate litigation capital to fight PG&E.',
        consequence: 'The giant firm buries the case in class-action paper filings for fifteen years. Most of the sick Hinkley residents die of cancer before seeing a penny.',
        verdict: 'partial'
      },
      {
        id: 'C',
        label: 'Threaten corporate lawyers with physical violence unless they sign a blank settlement check',
        rationale: 'Uses personal intimidation to force corporate concessions.',
        consequence: 'Corporate lawyers file emergency restraining orders and report your firm to the California State Bar. You are barred from the courtroom.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Leverage personal community relationships to present binding direct medical evidence against PG&E',
        rationale: 'Combines complete factual information asymmetry with deep community trust to destroy corporate defenses.',
        consequence: 'You recite every plaintiff’s family medical history from memory, serve the corporate lawyers tap water from Hinkley, and present internal memos. PG&E settles for $333 million—the largest toxic tort payout in U.S. history.',
        verdict: 'strong'
      }
    ],
    whatActuallyHappened: 'Erin visited all 634 families personally, memorized their medical charts, and gained their trust. When PG&E’s lawyers offered a lowball settlement, Erin stunned them with her encyclopedic recall of every plaintiff and internal PG&E memos, forcing a historic $333 million arbitration award.',
    frameworkBridge: 'This illustrates the Information Asymmetry & Direct Relationship Leverage Model in high-stakes negotiations. Corporate bureaucracies rely on abstract legal distancing. Ground-level researchers who possess deep emotional trust and flawless command of primary facts neutralize corporate legal leverage.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-093',
    protagonist: 'Lt. Daniel Kaffee',
    roleTitle: 'Judge Advocate General Corps Defense Counsel, US Navy',
    momentLabel: '1992 · Naval Courtroom, Washington D.C.',
    title: 'Your Call: Cross-Examining Colonel Jessep',
    setup: 'It is 1992 in a naval courtroom in Washington D.C. You are Lt. Daniel Kaffee, a plea-bargaining navy lawyer with zero courtroom trial experience. You are defending two young Marines accused of murdering Private Santiago at Guantanamo Bay. You know the Marines acted under an illegal "Code Red" order issued by base commander Colonel Nathan R. Jessep, but you have zero physical evidence or witness documentation to prove it.',
    stakes: [
      'If you accuse Jessep of perjury without proof, you face court-martial and professional disbarment.',
      'Jessep is a celebrated combat hero destined for the National Security Council.',
      'The Marines face life imprisonment in Fort Leavenworth if you fail to prove the Code Red.',
      'Jessep possesses an arrogant narcissistic ego that scorns civilian lawyers.'
    ],
    question: 'How do you structure the cross-examination of Colonel Jessep?',
    options: [
      {
        id: 'A',
        label: 'Provoke Colonel Jessep’s arrogant hubris on cross-examination to elicit the Code Red admission',
        rationale: 'Traps a narcissistic counterparty by cornering him in a logical contradiction between his absolute command and Santiago’s danger.',
        consequence: 'You highlight that if his orders are always followed, Santiago was never in danger. Trapped by his own ego, Jessep explodes: "You can\'t handle the truth! You\'re damn right I ordered the Code Red!" winning the acquittal.',
        verdict: 'strong'
      },
      {
        id: 'B',
        label: 'Rest your case without calling Colonel Jessep to the witness stand to avoid court-martial',
        rationale: 'Protects your legal career and avoids challenging a decorated commanding officer.',
        consequence: 'Without Jessep’s testimony, the jury convicts both Marines of premeditated murder. They are sentenced to life imprisonment while Jessep is promoted to the Pentagon.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Accept a plea bargain that sends the Marines to prison for involuntary manslaughter',
        rationale: 'Guarantees a capped sentence and eliminates trial risk for your clients.',
        consequence: 'The Marines reject the plea, insisting they followed lawful orders with honor. You alienate your clients and lose their trust completely.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Call junior clerk corporals to testify that they overheard rumors about a Code Red',
        rationale: 'Introduces secondhand testimony without directly attacking the commanding colonel.',
        consequence: 'The prosecutor objects to inadmissible hearsay, and the judge sustains the objection. Your defense runs out of witness credibility.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'Kaffee baited Jessep by contrasting his claim of absolute discipline with his claim that Santiago was in danger. Enraged by the implication that his orders weren’t absolute, Jessep roared: "You’re damn right I ordered the Code Red!" The confession led to Jessep’s immediate arrest.',
    frameworkBridge: 'This is The Narcissistic Ego Trap & Contradiction Squeeze in hostile negotiation. When dealing with narcissistic counterparties, direct factual attacks trigger defensive stonewalling. Strategists exploit the counterparty’s pathological need to project absolute supremacy to force fatal concessions.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-094',
    protagonist: 'Abraham Lincoln',
    roleTitle: '16th President of the United States',
    momentLabel: 'January 1865 · Washington D.C.',
    title: 'Your Call: Whips and Postmasters for Abolition',
    setup: 'It is January 1865 in the White House in Washington D.C. You are Abraham Lincoln. The 13th Amendment abolishing slavery has passed the Senate but faces imminent defeat in the House of Representatives. You need twenty Democratic votes to secure the required two-thirds constitutional majority. Lame-duck Democrats who lost their reelection bids are bitter, anxious about their post-congressional livelihoods, and deeply hostile to immediate abolition.',
    stakes: [
      'Every day the vote is delayed brings Confederate peace envoys closer to Washington.',
      'Lame-duck congressmen have no electoral incentives to vote for a controversial amendment.',
      'Conservative Republicans like Preston Blair demand you prioritize immediate peace talks.',
      'Radical Republicans like Thaddeus Stevens will pull their votes if you compromise civil rights.'
    ],
    question: 'How do you engineer a bipartisan voting coalition to pass the 13th Amendment?',
    options: [
      {
        id: 'A',
        label: 'Publish an open letter attacking the morality of all Democratic congressmen in the press',
        rationale: 'Uses public shaming to force opposition congressmen into moral alignment.',
        consequence: 'Democrats unite in fury against presidential bullying. They vote unanimously against the amendment, killing the bill permanently.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Deploy patronage jobs and target lame-duck Democrats to assemble a bipartisan voting coalition',
        rationale: 'Employs pragmatic transaction structuring by trading postmaster and tax appointments for critical votes.',
        consequence: 'Your lobbyists target vulnerable lame-duck Democrats with federal patronage jobs and postmaster appointments. You flip critical votes across party lines, passing the amendment by two votes.',
        verdict: 'strong'
      },
      {
        id: 'C',
        label: 'Wait until the newly elected Republican Congress convenes in December to hold the vote',
        rationale: 'Relies on a safe Republican majority in the next legislative session.',
        consequence: 'By December, the war has ended and southern states are readmitted under white supremacist legislatures. The political window closes and the amendment is lost.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Offer Confederate leaders permanent state-level slavery in exchange for signing the amendment',
        rationale: 'Seeks a negotiated compromise to secure Southern signature on federal legislation.',
        consequence: 'Thaddeus Stevens and Radical Republicans denounce the compromise as treason. Your coalition fractures and your presidency is crippled.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'Lincoln deployed lobbyists W.N. Bilbo and Robert Latham to offer lucrative federal jobs (customs inspectors, postmasters) to defeated Democratic congressmen. This pragmatic transactional maneuvering secured the final votes on January 31, 1865.',
    frameworkBridge: 'This is the Legislative Vote-Whip & Coalition Assembly Engine in political stakeholder negotiation. High-stakes strategic initiatives cannot rely solely on ideological alignment. Leaders must map individual stakeholder pain points and trade fungible currency (patronage, resources) to assemble winning coalitions.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-095',
    protagonist: 'John Tuld',
    roleTitle: 'Chief Executive Officer, Investment Bank',
    momentLabel: '2008 · Manhattan, New York',
    title: 'Your Call: Eric Dale’s Golden Handcuffs',
    setup: 'It is 6:00 AM on a Friday inside the executive boardroom of your investment bank. You are John Tuld. In three hours, your trading desks will dump $100 billion of toxic mortgage assets onto unsuspecting Wall Street counterparties. However, your fired head of risk, Eric Dale, has returned to the building and is threatening to speak to regulators or the press, which would immediately freeze trading and bankrupt the firm.',
    stakes: [
      'If Eric Dale speaks to the SEC or reporters before 4:00 PM, trading desks will be halted.',
      'Dale is furious about being abruptly fired after nineteen years of loyal service.',
      'Threatening Dale physically risks immediate whistleblower retaliation and criminal exposure.',
      'Keeping Dale silent requires structured severance packages with strict non-disclosure terms.'
    ],
    question: 'How do you negotiate Eric Dale’s absolute silence during the liquidation?',
    options: [
      {
        id: 'A',
        label: 'Have security guards escort Dale out of the building into the street without compensation',
        rationale: 'Asserts corporate authority and avoids negotiating with a terminated employee.',
        consequence: 'Dale walks straight to the offices of the Wall Street Journal and the SEC. Regulators freeze trading before the opening bell, and the firm collapses into bankruptcy.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Promote Eric Dale to Chief Executive Officer and cancel the asset liquidation',
        rationale: 'Pacifies the risk manager by handing over total corporate governance control.',
        consequence: 'The toxic assets remain on the balance sheet. Over the weekend, the market collapses and the bank enters liquidation anyway.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Offer multi-million-dollar golden handcuffs to enforce silence until the market liquidation completes',
        rationale: 'Uses reputational containment and overwhelming financial incentives to align self-interest with silence.',
        consequence: 'You offer Dale $1.4 million in severance and health insurance to sit quietly in an office doing nothing until the closing bell. Realizing resistance is futile, Dale takes the money and remains silent.',
        verdict: 'strong'
      },
      {
        id: 'D',
        label: 'Threaten to sue Dale for stealing the firm’s proprietary models on a USB drive',
        rationale: 'Uses legal intimidation to suppress whistleblower communications.',
        consequence: 'Dale hires a defense attorney who files an emergency public injunction, publicly revealing the toxic debt model and halting the morning fire sale.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'Tuld sat with Eric Dale and offered him an enormous financial severance package just to sit in an office and say nothing until trading ended: "You’ve done very well here, Eric. Don’t walk away from it now." Dale accepted the golden handcuffs, preserving the bank’s execution window.',
    frameworkBridge: 'This illustrates Reputational Containment & Golden Handcuffs Negotiation in crisis management. When an alienated stakeholder possesses existential whistleblower leverage, legal threats backfire. Leaders must deploy structured financial incentives that make compliance far more lucrative than defiance.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-096',
    protagonist: 'Robert Bilott',
    roleTitle: 'Corporate Defense Partner, Taft Stettinius & Hollister',
    momentLabel: '1999 · Cincinnati, Ohio & Parkersburg, West Virginia',
    title: 'Your Call: The DuPont Document Discovery Dump',
    setup: 'It is 1999 in Cincinnati, Ohio. You are Robert Bilott, a corporate defense attorney who spent eight years defending chemical conglomerates. A West Virginia cattle farmer named Wilbur Tennant whose cows are dying from bloated organs and black teeth convinces you to investigate chemical titan DuPont. In response to your federal subpoena, DuPont’s defense lawyers dump 110,000 unindexed documents across hundreds of cardboard boxes into your office, aiming to drown you in paper.',
    stakes: [
      'DuPont has unlimited legal budgets and hopes attrition will bankrupt your billable hours.',
      'Your senior law partners are pressuring you to drop the unprofitable, career-ending case.',
      'The document dump is completely unindexed, intentionally obscuring critical toxicological reports.',
      'Tennant is running out of money, his family is ostracized, and his cows continue dying.'
    ],
    question: 'How do you structure your discovery strategy against DuPont’s legal attrition warfare?',
    options: [
      {
        id: 'A',
        label: 'Burn the boxes and accept a confidential $50,000 nuisance settlement from DuPont',
        rationale: 'Protects law firm profitability and terminates an awkward conflict with chemical clients.',
        consequence: 'Tennant’s farm is destroyed, the town continues drinking toxic drinking water, and your reputation as a serious litigator is permanently compromised.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Hire temporary summer interns to scan the documents into a searchable optical character database',
        rationale: 'Automates document review using modern computational text retrieval.',
        consequence: 'Handwritten chemical formulas and cursive lab notes are misread by primitive scanners. Critical internal toxic memos are lost in unsearchable digital files.',
        verdict: 'partial'
      },
      {
        id: 'C',
        label: 'File an emergency motion demanding DuPont re-index all 110,000 pages at their expense',
        rationale: 'Attempts to use judicial discovery orders to force the counterparty to organize the files.',
        consequence: 'The federal judge rules that DuPont complied with the letter of the law by producing the documents as kept in ordinary course. You lose three months in procedural hearings.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Catalog hundreds of thousands of DuPont chemical documents chronologically to expose PFOA toxicity',
        rationale: 'Neutralizes the attrition dump by constructing an unshakeable chronological timeline of corporate concealment.',
        consequence: 'You spend months reading every invoice, discovering secret reports on C8 (PFOA), proving DuPont poisoned drinking water for decades. The discovery sparks landmark federal lawsuits, forcing DuPont into a $671 million settlement.',
        verdict: 'strong'
      }
    ],
    whatActuallyHappened: 'Bilott painstakingly organized every page chronologically by hand, piecing together decades of internal memos that proved DuPont knew PFOA caused birth defects and cancer in animals but continued dumping it into the Ohio River. His relentless discovery triggered a historic settlement.',
    frameworkBridge: 'This is Chronological Document Discovery & Attrition Counter-Strategy in complex litigation. Incumbents use "document dumps" to bury incriminating facts under frictional volume. Tenacious investigators counter by organizing data chronologically, reconstructing internal decision arcs that expose bad faith.',
    verification: 'verified'
  }
];
