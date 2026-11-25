import { DecisionPoint } from '@/types/decisionPoint';

export const FINANCE_DECISION_POINTS: DecisionPoint[] = [
  {
    lessonId: 'lms-063',
    protagonist: 'Mark Baum (Steve Eisman)',
    roleTitle: 'Managing Partner, FrontPoint Partners',
    momentLabel: '2007 · Las Vegas, Nevada',
    title: 'Your Call: Shorting the Synthetic CDO',
    setup: 'It is 2007 inside a luxury casino ballroom at the American Securitization Forum in Las Vegas. You are Mark Baum, head of hedge fund FrontPoint Partners. You have just interviewed a smirking CDO manager named Harding who admits that synthetic CDOs bundle credit default swaps on already toxic subprime bonds, multiplying financial leverage twenty-fold. You realize that Wall Street investment banks are completely blind to the impending collapse of the entire global financial system.',
    stakes: [
      'Shorting the housing market bleeds monthly insurance carrying costs from your fund.',
      'Parent bank Morgan Stanley is pressuring your fund to hedge your massive short positions.',
      'Rating agencies like Standard & Poor’s refuse to downgrade bonds despite escalating mortgage defaults.',
      'If the housing market remains solvent for twelve more months, your fund faces total liquidation.'
    ],
    question: 'How do you position your capital against Wall Street’s synthetic securitization engine?',
    options: [
      {
        id: 'A',
        label: 'Purchase credit default swaps on synthetic subprime CDOs to capture asymmetric convexity',
        rationale: 'Maximizes downside convexity where maximum loss is limited to premiums while upside is enormous.',
        consequence: 'You buy hundreds of millions in credit default swaps targeting BBB-rated synthetic tranches. When subprime defaults surge and the market freezes, your fund earns over $1 billion in profit for your investors.',
        verdict: 'strong'
      },
      {
        id: 'B',
        label: 'Close all short positions immediately and invest in AAA-rated collateralized debt obligations',
        rationale: 'Captures high fixed yields with the perceived safety of investment-grade ratings.',
        consequence: 'The AAA-rated CDOs default within eighteen months, wiping out your fund’s capital. FrontPoint closes in bankruptcy alongside Lehman Brothers.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Take out public billboard advertisements in Times Square warning homeowners about adjustable-rate mortgages',
        rationale: 'Seeks to reduce mortgage defaults through public consumer financial education.',
        consequence: 'The billboards are ignored by consumers and mocked by Wall Street analysts. You burn hundreds of thousands in advertising capital with zero portfolio impact.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Short the stocks of home construction companies while keeping credit markets unhedged',
        rationale: 'Targets equity price volatility rather than paying negative carrying costs on swaps.',
        consequence: 'Homebuilder stocks experience wild short squeezes before collapsing. The volatility triggers margin calls that force you out of your positions before the crash.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'Mark Baum and his team recognized that synthetic CDOs transformed a bad housing bubble into an existential financial catastrophe. They bought credit default swaps on the most toxic CDO tranches, holding their positions until the system broke and earning over $1 billion.',
    frameworkBridge: 'This illustrates the Asymmetric Payoff & Convexity Modeling Matrix in modern quantitative finance. Great capital allocators hunt for convex payoff structures where downside risk is strictly capped (premium paid) while upside payoff is non-linearly magnified upon systemic repricing.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-064',
    protagonist: 'John Tuld',
    roleTitle: 'Chairman & Chief Executive Officer, Investment Bank',
    momentLabel: '2008 · Manhattan, New York',
    title: 'Your Call: The 9:00 AM Fire Sale',
    setup: 'It is 2:30 AM on a Friday on the executive 43rd floor of a venerable Wall Street investment bank. You are John Tuld, CEO. Your risk analysts have confirmed that the firm’s mortgage-backed debt holdings exceed the entire market capitalization of the bank. If interest rates rise or volatility expands by just twenty-five percent, the firm is bankrupt. You have summoned your executive committee to decide whether to dump the toxic assets at sunrise.',
    stakes: [
      'The firm holds over $100 billion in illiquid, toxic mortgage-backed paper.',
      'Selling everything at once will destroy relationships with every counterparty on Wall Street.',
      'Waiting until Monday risks other banks catching on, leaving your assets completely untradable.',
      'Head of sales Sam Rogers warns that liquidating your portfolio will destroy the entire market.'
    ],
    question: 'How do you execute the bank’s capital survival strategy?',
    options: [
      {
        id: 'A',
        label: 'Hold the assets over the weekend and seek an emergency federal liquidity bridge',
        rationale: 'Protects the bank’s counterparty relationships while exploring government bailout options.',
        consequence: 'Over the weekend, market rumors leak and credit lines are slashed. By Monday morning, zero counterparties accept your paper and the bank files for Chapter 11 bankruptcy.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Liquidate toxic mortgage assets at the opening bell before counterparties recognize market illiquidity',
        rationale: 'Prioritizes survival by being first to sell before liquidity cascades into total market paralysis.',
        consequence: 'You offer heavy discounts to offload your toxic inventory before noon. While the fire sale burns market relationships and triggers industry panic, the bank survives with intact equity capital.',
        verdict: 'strong'
      },
      {
        id: 'C',
        label: 'Disclose your complete mathematical risk model publicly to warn Wall Street competitors',
        rationale: 'Acts with altruistic financial candor to prevent systemic interbank contagion.',
        consequence: 'Competitors dump their own toxic assets first, driving bids to zero. Your bank is left holding the entire toxic bag and collapses within twenty-four hours.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Sell only five percent of the mortgage assets to test market liquidity depth',
        rationale: 'Minimizes counterparty shock while probing bid-ask spreads for price discovery.',
        consequence: 'The small sale signals desperate distress to traders. Bids evaporate for the remaining ninety-five percent, leaving you trapped in an illiquid death spiral.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'John Tuld famously declared: "There are three ways to make a living in this business: be first, be smarter, or cheat. Now I don’t cheat, and although I’d like to think we’re rather smart, it’s a lot easier to just be first." The firm liquidated its positions by noon, surviving the crisis.',
    frameworkBridge: 'This is the Liquidity Cascade & Fire-Sale Run Model in institutional finance. In illiquid markets with asymmetric information, assets do not decline smoothly; they suffer catastrophic cliff-edge liquidity evaporation. Being first to sell captures remaining market depth before bids vanish.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-065',
    protagonist: 'Bud Fox',
    roleTitle: 'Junior Broker & Corporate Raider Apprentice',
    momentLabel: '1987 · Manhattan, New York',
    title: 'Your Call: The Blue Star Airlines Takeover',
    setup: 'It is 1987 in a luxury penthouse overlooking Central Park. You are Bud Fox, an ambitious Wall Street broker. You have convinced corporate raider Gordon Gekko to buy Blue Star Airlines, where your father has worked as a union machinist for twenty-four years. Gekko promised you he would expand the airline with modern jet routes. However, you just discovered that Gekko’s real plan is to terminate the union contracts, raid the $75 million employee pension fund, and liquidate the airline piece by piece.',
    stakes: [
      'Gekko is your multi-million-dollar mentor who controls your career and penthouse lifestyle.',
      'Liquidating Blue Star throws your father and thousands of loyal machinists onto the street.',
      'SOTP asset stripping generates guaranteed millions in arbitrage for Gekko and the raiders.',
      'Attempting to sabotage Gekko’s takeover risks insider trading arrest and financial ruination.'
    ],
    question: 'How do you intervene in the Blue Star Airlines leveraged buyout?',
    options: [
      {
        id: 'A',
        label: 'Help Gekko liquidate the airline and accept your multi-million-dollar buyout commission',
        rationale: 'Secures personal generational wealth by prioritizing ruthless capital market efficiency.',
        consequence: 'Gekko liquidates Blue Star, gutting the airline. Your father suffers a massive heart attack from grief, your community is destroyed, and you are trapped in an empty, soulless financial career.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Ask Gekko politely to honor his promise out of personal loyalty to your father',
        rationale: 'Appeals to Gekko’s personal generosity and mentor-apprentice relationship.',
        consequence: 'Gekko laughs in your face and tells you not to be naive about money. The liquidation proceeds on schedule while you are stripped of operational control.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Execute a hostile takeover to unlock value by liquidating real estate and pension assets',
        rationale: 'Unlocks maximum market value by executing a classic sum-of-the-parts corporate raid.',
        consequence: 'The buyout unbundles hangars, aircraft, and routes for maximum cash. While Wall Street raiders profit, the operational destruction creates severe union revolt and political backlash.',
        verdict: 'strong'
      },
      {
        id: 'D',
        label: 'Organize the union machinists to strike immediately and ground all operational flights',
        rationale: 'Disrupts flight schedules to lower the airline’s stock valuation before Gekko buys.',
        consequence: 'The wildcat strike grounds planes and burns operating reserves. Blue Star enters Chapter 7 liquidation anyway, costing every machinist their job with zero pension rescue.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'Bud Fox double-crossed Gekko: he formed an alliance with rival raider Sir Larry Wildman, used the unions to drive Blue Star’s stock down, and trapped Gekko into dumping his shares at a massive loss while Wildman bought the airline intact to save employee jobs.',
    frameworkBridge: 'This illustrates the Sum-of-the-Parts (SOTP) Liquidation Arbitrage Model in corporate finance. When a company’s operational cash flows trade at a discount to the liquidation value of its individual assets (planes, routes, real estate, overfunded pensions), raiders exploit valuation divergence through hostile LBOs.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-066',
    protagonist: 'Hank Paulson',
    roleTitle: 'United States Secretary of the Treasury',
    momentLabel: 'October 2008 · Washington D.C.',
    title: 'Your Call: The TARP Capital Injections',
    setup: 'It is October 13, 2008 in the historic Cash Room at the Treasury Department. You are Hank Paulson, Treasury Secretary. Following the collapse of Lehman Brothers and the bailout of AIG, the global interbank lending market has completely seized. You have gathered the CEOs of America’s nine largest financial institutions, including Jamie Dimon of JPMorgan, Lloyd Blankfein of Goldman Sachs, and Richard Kovacevich of Wells Fargo. Congress has approved $700 billion under TARP.',
    stakes: [
      'If healthy banks refuse capital, toxic banks will be stigmatized and run on Monday morning.',
      'Bank CEOs object to government equity warrants and dilution of existing shareholders.',
      'Credit markets have halted: corporations cannot roll over short-term commercial paper.',
      'Allowing another major bank to fail will trigger an immediate global economic depression.'
    ],
    question: 'How do you structure the emergency capitalization of the banking sector?',
    options: [
      {
        id: 'A',
        label: 'Offer voluntary capital infusions only to the weakest, most distressed investment banks',
        rationale: 'Conserves taxpayer funds by targeting only institutions facing imminent insolvency.',
        consequence: 'The market immediately identifies the participating banks as walking corpses. Depositors run on the subsidized banks on Monday morning, forcing immediate collapse.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Let all nine banks manage their own balance sheets without government interference',
        rationale: 'Upholds pure free-market capitalism and eliminates systemic moral hazard.',
        consequence: 'Interbank credit freezes entirely. Major corporations miss payroll, commercial paper defaults explode, and unemployment spikes toward Great Depression levels.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Nationalize all nine banks completely and convert them into federal public utilities',
        rationale: 'Secures total sovereign government control over national credit and lending.',
        consequence: 'Constitutional challenges and Wall Street lawsuits paralyze the banking sector. Foreign investors dump U.S. Treasuries, triggering a catastrophic dollar currency crisis.',
        verdict: 'partial'
      },
      {
        id: 'D',
        label: 'Mandate simultaneous federal TARP equity capital injections across all nine major Wall Street banks',
        rationale: 'Eliminates counterparty stigma by forcing healthy and weak banks to accept recapitalization collectively.',
        consequence: 'You force every CEO in the room to sign before leaving, injecting $125 billion into all nine banks simultaneously. The collective action eliminates stigma, unfreezes commercial credit, and stabilizes the financial system.',
        verdict: 'strong'
      }
    ],
    whatActuallyHappened: 'Paulson, Ben Bernanke, and Tim Geithner sat the nine bank CEOs down and told them none could leave until they signed agreements accepting federal capital. By forcing both healthy and troubled banks to take the money, they eliminated the deadly market stigma.',
    frameworkBridge: 'This is the Systemic Interbank Contagion & Capital Recapitalization Model in macro-finance. In a systemic credit panic, isolated capital injections identify weak players and accelerate bank runs. Only collective, mandatory capital infusions can break systemic coordination failures and restore interbank trust.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-067',
    protagonist: 'Nick Leeson',
    roleTitle: 'General Manager & Head Derivatives Trader, Barings Futures Singapore',
    momentLabel: '1995 · Singapore',
    title: 'Your Call: The Error Account 88888',
    setup: 'It is early 1995 on the trading floor of SIMEX in Singapore. You are Nick Leeson, star derivatives trader for Barings Bank, the 233-year-old British merchant bank that financed the Napoleonic Wars. You hold dual roles as head trader and head of back-office settlement. To conceal unauthorized trading losses made by junior clerks, you created a secret hidden ledger: Account 88888. The hidden losses have ballooned to £200 million, and a massive earthquake has just struck Kobe, Japan.',
    stakes: [
      'You control both trade execution and settlement reconciliation with zero independent oversight.',
      'The Kobe earthquake has triggered a violent plunge in the Nikkei 225 index.',
      'London management believes your trading profits are real and wire you millions in margin calls.',
      'Doubling down on long futures contracts to trade out of the hole risks total bank insolvency.'
    ],
    question: 'How do you handle the massive unhedged derivatives losses inside Account 88888?',
    options: [
      {
        id: 'A',
        label: 'Institute strict segregation of duties between trading execution and back-office clearing accounting',
        rationale: 'Establishes fundamental governance checks that prevent rogue concealment of derivatives losses.',
        consequence: 'By reporting the error account to Barings leadership, you expose the true operational deficit. While you face disciplinary and legal consequences, the bank survives and unhedged positions are liquidated before systemic insolvency.',
        verdict: 'strong'
      },
      {
        id: 'B',
        label: 'Double long Nikkei futures positions hoping the market rebounds after the earthquake',
        rationale: 'Takes an aggressive high-leverage gamble to trade out of the trading deficit.',
        consequence: 'The Japanese market continues falling precipitously. Losses compound to over £827 million—double Barings’ entire capital base—triggering the sudden collapse and sale of the 233-year-old bank for £1.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Fabricate forged audit confirmation letters from Citibank to reassure London auditors',
        rationale: 'Buys time with internal compliance auditors while hoping market prices recover.',
        consequence: 'Auditors discover the forged signatures within forty-eight hours. The criminal cover-up leads to immediate international arrest warrants and severe prison sentences.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Flee Singapore immediately on an international flight to Germany without telling anyone',
        rationale: 'Evades local Singaporean criminal prosecution by escaping the jurisdiction.',
        consequence: 'You leave a note reading "I\'m sorry." The bank collapses hours later, police arrest you at Frankfurt Airport, and you are extradited back to Singapore to serve six years in Changi Prison.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'Leeson doubled down on the Nikkei after the Kobe earthquake, betting the market would recover. It didn’t. His losses reached £827 million, bankrupting Barings Bank in 1995. ING acquired the historic institution for a symbolic £1.',
    frameworkBridge: 'This is the Segregation of Duties & Fraud Triangle Governance in institutional risk management. When operational controls fail to separate trade generation from settlement reconciliation, rogue traders possess both the opportunity and rationalization to conceal losses, generating fatal systemic insolvency.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-068',
    protagonist: 'Charles Ferguson',
    roleTitle: 'Investigative Economist & Documentary Director',
    momentLabel: '2010 · Washington D.C.',
    title: 'Your Call: Interrogating Academic Conflicts of Interest',
    setup: 'It is 2010 in a television interview studio in Washington D.C. You are Charles Ferguson, documentary filmmaker and political economist. You are interviewing prominent academic economists and former Federal Reserve board governors, including Columbia Business School Dean Glenn Hubbard and Harvard Economics Professor Larry Summers. You have uncovered that prominent faculty earned hundreds of thousands from Wall Street investment banks while authoring academic research papers praising unregulated financial derivatives.',
    stakes: [
      'Elite academic economists write regulatory whitepapers that guide federal financial policy.',
      'Professors conceal massive consulting fees paid by investment banks like Lehman Brothers and AIG.',
      'Challenging university deans on conflict of interest risks retaliation from academic establishments.',
      'The public assumes academic peer-reviewed research represents neutral, objective truth.'
    ],
    question: 'How do you expose systemic agency conflicts in economic governance?',
    options: [
      {
        id: 'A',
        label: 'Ask polite softball questions about general economic macro-trends to protect professional cordiality',
        rationale: 'Avoids uncomfortable personal confrontation with powerful academic gatekeepers.',
        consequence: 'The economists recite polished academic PR talking points. The documentary fails to expose the structural corruption behind the crash and has zero policy impact.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Restructure banking compensation with multi-year clawbacks to align executive risk with long-term solvency',
        rationale: 'Eliminates principal-agent misalignment by tying compensation directly to long-term risk duration.',
        consequence: 'By documenting how asymmetric fee structures rewarded short-term origination volume while transferring catastrophic tail risk to taxpayers, your work wins the Academy Award and spurs mandatory conflict disclosures.',
        verdict: 'strong'
      },
      {
        id: 'C',
        label: 'Accuse all academic economists of criminal conspiracy without presenting financial ledgers',
        rationale: 'Generates dramatic emotional confrontation for viral documentary viewership.',
        consequence: 'Interviewees walk out of the room and their legal teams file defamation injunctions. The lack of documented financial evidence discredits your film’s investigative standing.',
        verdict: 'partial'
      },
      {
        id: 'D',
        label: 'Advise university departments to eliminate economics courses entirely and teach only sociology',
        rationale: 'Eliminates free-market economic theory from university curriculums.',
        consequence: 'Universities dismiss the proposal as absurd. Wall Street continues recruiting finance graduates without any ethical governance safeguards.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'Ferguson confronted top academic economists on camera, asking Glenn Hubbard: "You have three minutes; give it your best shot." The resulting film, Inside Job, won the Academy Award and forced leading universities like Harvard and Columbia to institute mandatory conflict-of-interest disclosure policies.',
    frameworkBridge: 'This illustrates The Principal-Agent Problem & Asymmetric Fee Alignment Matrix. When agents collect upfront fees without retaining long-term risk exposure, they are economically incentivized to generate toxic volume. Aligning incentives requires clawbacks, skin-in-the-game, and radical fee transparency.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-069',
    protagonist: 'Henry Kravis',
    roleTitle: 'Founding Partner, Kohlberg Kravis Roberts & Co. (KKR)',
    momentLabel: '1988 · Manhattan, New York',
    title: 'Your Call: The RJR Nabisco Bidding War',
    setup: 'It is November 1988 in the Manhattan headquarters of KKR. You are Henry Kravis, pioneer of the leveraged buyout. RJR Nabisco CEO F. Ross Johnson has attempted to take his own company private with an insider bid of $75 per share, infuriating your firm by bypassing KKR. You have launched a competing bid to acquire the tobacco and food conglomerate, but the auction has devolved into an ego-driven bidding frenzy that has pushed bids above $100 per share.',
    stakes: [
      'RJR Nabisco is the largest corporate takeover in history; losing damages KKR’s prestige.',
      'Overpaying for the asset requires loading the company with over $20 billion in high-yield junk bonds.',
      'Tobacco cash flows are stable, but declining smoking rates threaten long-term debt servicing.',
      'First Boston and Morgan Stanley are submitting aggressive rival bids to win the advisory fees.'
    ],
    question: 'How do you structure your final bid to win the LBO without succumbing to the Winner’s Curse?',
    options: [
      {
        id: 'A',
        label: 'Bid $130 per share in cash to guarantee an unbeatable victory over rival raiders',
        rationale: 'Ensures absolute triumph in the largest LBO in Wall Street history at all costs.',
        consequence: 'The crushing debt load consumes 100% of RJR Nabisco’s operating cash flow. The company defaults on junk bond payments, plunging KKR into high-profile restructuring insolvency.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Withdraw from the auction entirely and let Ross Johnson steal the company for $75',
        rationale: 'Avoids all financial leverage risk by conceding the deal to corporate insiders.',
        consequence: 'KKR is perceived as a toothless buyout firm that backed down from an insider coup. Rival private equity firms poach your institutional pension fund LP investors.',
        verdict: 'partial'
      },
      {
        id: 'C',
        label: 'Establish disciplined valuation walk-away thresholds to avoid suffering private equity winner\'s curse',
        rationale: 'Balances competitive auction tactics with strict debt-coverage valuation boundaries.',
        consequence: 'You submit a structured bid of $109 per share combining cash and convertible debentures, narrowly beating Johnson’s bid. KKR captures the trophy without crossing the debt-service threshold.',
        verdict: 'strong'
      },
      {
        id: 'D',
        label: 'Demand that RJR Nabisco cancel the auction and award the company to KKR',
        rationale: 'Claims historical private equity entitlement over leveraged buyout transactions.',
        consequence: 'The special committee rejects your bizarre ultimatum and accepts Johnson’s bid. KKR is humiliated across the financial press.',
        verdict: 'weak'
      }
    ],
    whatActuallyHappened: 'KKR won the auction for RJR Nabisco with a bid of $109 per share ($25 billion total). While KKR won the trophy deal, the colossal debt load burdened the company for years, serving as the definitive case study in private equity bidding dynamics.',
    frameworkBridge: 'This is Auction Theory & The Winner’s Curse in Private Equity. In competitive multi-bidder auctions with common values, the winner is often the bidder who most severely overestimates the asset’s intrinsic worth. Capital allocators must establish disciplined walk-away price ceilings to prevent ruin.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-070',
    protagonist: 'Billy Ray Valentine',
    roleTitle: 'Commodities Trader & Former Street Hustler',
    momentLabel: '1983 · World Trade Center, New York',
    title: 'Your Call: Trading the Frozen Orange Juice Futures',
    setup: 'It is morning in 1983 on the commodities trading floor of the World Trade Center in New York. You are Billy Ray Valentine, alongside Louis Winthorpe III. You have outsmarted the corrupt Duke brothers (Mortimer and Randolph), intercepting the secret USDA crop estimate report before they could trade on it. The Dukes believe the report will show crop devastation from an orange frost, when in reality Florida orange groves survived completely unharmed.',
    stakes: [
      'The Duke brothers hold vast millions in trading capital and are buying futures aggressively.',
      'Taking a massive short position before the official crop report is read carries unlimited loss risk.',
      'The trading pit is in an hysterical speculative buying frenzy, driving prices to record peaks.',
      'You have less than twenty minutes before the Secretary of Agriculture reads the report live on television.'
    ],
    question: 'How do you execute your commodities futures short-selling strategy?',
    options: [
      {
        id: 'A',
        label: 'Buy call futures aggressively alongside the Duke brothers to ride the upward speculative wave',
        rationale: 'Rides short-term market momentum without opposing the wealthiest cartel in the pit.',
        consequence: 'When the official report reveals a bumper orange crop, prices crash limit-down instantly. Your long contracts are wiped out and you owe millions to the clearinghouse.',
        verdict: 'weak'
      },
      {
        id: 'B',
        label: 'Deliver the USDA report directly to the SEC and file a whistleblower complaint',
        rationale: 'Follows regulatory compliance channels to report commodity market insider manipulation.',
        consequence: 'SEC regulators take months to process the complaint. Meanwhile, the Duke brothers dump their positions and escape with millions while you remain penniless.',
        verdict: 'partial'
      },
      {
        id: 'C',
        label: 'Set fire to the trading exchange floor to halt market trading before the report',
        rationale: 'Physically interrupts financial settlement to freeze price discovery.',
        consequence: 'Fire alarms clear the floor and armed federal marshals arrest you for arson. You spend decades in federal prison while the market settles automatically.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Short frozen orange juice futures before the USDA crop report exposes bumper harvest',
        rationale: 'Capitalizes on market mispricing by shorting at the speculative peak ahead of the catalyst.',
        consequence: 'You sell short at the peak as the Dukes buy furiously. When the broadcast reveals a bumper crop, orange juice crashes from $1.42 to 29 cents; you buy back at the bottom, bankrupting the Dukes and making millions.',
        verdict: 'strong'
      }
    ],
    whatActuallyHappened: 'Valentine and Winthorpe waited until the Duke brothers drove prices to an artificial high, then sold short aggressively. When the real USDA report announced normal harvests, the market plummeted; Valentine and Winthorpe bought back their positions for pennies, bankrupting the Dukes.',
    frameworkBridge: 'This demonstrates Futures Short-Selling & Catalyst Arbitrage Model in commodities markets. When speculative manias drive asset prices to unsustainable peaks based on false rumors, disciplined traders take contrarian short positions ahead of definitive fundamental catalyst releases.',
    verification: 'verified'
  },
  {
    lessonId: 'lms-071',
    protagonist: 'Seth Davis',
    roleTitle: 'Trainee Broker, J.T. Marlin',
    momentLabel: '2000 · Long Island, New York',
    title: 'Your Call: The Medlake Synthetic Short Squeeze',
    setup: 'It is early 2000 in the executive bullpen of J.T. Marlin. You are Seth Davis. You have just opened an account for an everyday family man, Harry Reynard, convincing him to invest his entire $50,000 life savings into Medlake Industries. Senior partner Michael Brantley reveals the truth behind the firm’s trading desk: J.T. Marlin owns the entire synthetic float of Medlake, an empty pharmaceutical shell with no products, pumping the stock price to dump insider shares onto retail marks.',
    stakes: [
      'Harry Reynard will lose his home, marriage, and entire life savings when the stock crashes.',
      'Senior partners threaten you with physical violence and blacklisting if you alert your buyers.',
      'The firm restricts all retail sell orders, creating an artificial synthetic illiquid squeeze.',
      'FBI financial crimes investigators are secretly tapping the brokerage’s telephone lines.'
    ],
    question: 'How do you navigate the pump-and-dump market manipulation trap?',
    options: [
      {
        id: 'A',
        label: 'Halt synthetic pump-and-dump float manipulation and restrict retail sales to liquid exchange securities',
        rationale: 'Restores ethical market governance and limits customer exposure to fraudulent micro-cap shells.',
        consequence: 'You break the firm’s illegal restriction, execute Harry Reynard’s sell order before the collapse, and cooperate with FBI investigators to dismantle the criminal boiler room syndicate.',
        verdict: 'strong'
      },
      {
        id: 'B',
        label: 'Convince Harry Reynard to wire another $50,000 to average down his buying price',
        rationale: 'Maximizes personal trading commissions while protecting the firm’s pump-and-dump scheme.',
        consequence: 'Harry loses every dime, his marriage disintegrates, and he attempts suicide. The FBI raids the firm and arrests you as a primary co-conspirator, facing a twenty-year sentence.',
        verdict: 'weak'
      },
      {
        id: 'C',
        label: 'Quietly quit your job without alerting Harry Reynard or reporting fraud to regulators',
        rationale: 'Protects personal physical safety while avoiding confrontation with corrupt bosses.',
        consequence: 'Harry’s stock becomes worthless within forty-eight hours. The FBI identifies you as the broker of record on wiretap logs and indicts you regardless.',
        verdict: 'weak'
      },
      {
        id: 'D',
        label: 'Purchase shares of Medlake for your personal brokerage account to profit from the pump',
        rationale: 'Participates in insider price manipulation to generate personal trading windfalls.',
        consequence: 'Firm partners dump their insider shares before you can sell, leaving you holding worthless stock alongside your retail victims. You lose your personal savings.',
        verdict: 'partial'
      }
    ],
    whatActuallyHappened: 'Seth realized the full horror of the pump-and-dump scam after ruining Harry Reynard. Desperate to make amends, Seth attempted to execute a secret sell order for Harry, got arrested by the FBI, and agreed to cooperate to bring down J.T. Marlin’s corrupt partners.',
    frameworkBridge: 'This is the Micro-Cap Float Manipulation & Artificial Squeeze Model in fraudulent finance. By controlling thin public floats and artificially banning sell orders, rogue brokerages engineer synthetic price surges. Real market integrity requires uncompromised liquidity and immediate trade execution.',
    verification: 'verified'
  }
];
