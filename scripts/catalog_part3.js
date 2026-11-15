// Part 3: Subject 6 (Brand, lms-046..053), Subject 7 (Entrepreneurship, lms-054..062), Subject 8 (Finance, lms-063..071)
const LESSONS_PART3 = [
  // ==========================================
  // SUBJECT 6: Marketing and brand (lms-046..lms-053)
  // ==========================================
  {
    id: 'lms-046',
    filmTitle: 'Thank You for Smoking',
    releaseYear: 2005,
    tmdbMovieId: 9388,
    subject: 'Marketing and brand',
    topicTags: ['Framing Theory', 'Crisis Communications', 'Narrative Positioning', 'PR Strategy'],
    lessonTitle: 'Framing Theory & Narrative Positioning in Hostile PR: Nick Naylor’s Playbook',
    learningObjective: 'Master Framing Theory to re-anchor public debates and defend controversial product categories against hostile scrutiny.',
    difficulty: 'Advanced',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'Nick Naylor, chief lobbyist for the Academy of Tobacco Studies, appears on a daytime television talk show alongside a teenage boy dying of cancer, a health advocate, and a hostile studio audience. Rather than defending the health effects of smoking, Naylor flips the frame: he argues that the anti-tobacco lobby wants the boy to die for fundraising, while tobacco companies want him alive and healthy as a customer, successfully disarming the panel.',
    sceneTimestampRef: 'Approx. 00:08:30 (Instructor verified)',
    conceptExplanation: 'When marketing products under intense public or regulatory scrutiny (e.g. social media algorithms, sugary beverages, defense tech, crypto), directly defending the harmful symptom guarantees defeat. Product marketers must apply "Framing Theory"—redefining the fundamental terms of the debate from health/harm to personal liberty, individual agency, and consumer choice.',
    framework: {
      name: 'Framing Theory & Narrative Reframing Matrix (Lakoff / Kahneman)',
      description: 'Framework mapping how linguistic choices, metaphors, and context alter decision outcomes.',
      keySteps: [
        'Identify the Hostile Frame (e.g. "Your product causes harm and addiction").',
        'Reject the Premise: Never debate within the opponent’s rhetorical coordinates.',
        'Introduce the Meta-Frame: Pivot to higher-order values (Personal Liberty, Consumer Freedom, Parental Responsibility).',
        'Demonstrate Absurdity of Opponent’s Extreme: Show how regulating this product logically leads to banning cheese or skiing.'
      ],
      templateSnippet: 'Hostile Frame: [Harm / Addiction] -> Pivot: [Who decides? Government or Free Adults?] -> Reframed Issue: [Defending personal liberty].'
    },
    discussionQuestions: [
      'Why is attempting to refute a negative statistic within the opponent’s frame counter-productive in public relations?',
      'How do modern tech companies use Nick Naylor’s framing techniques when testifying before congressional committees?',
      'What are the ethical boundaries of framing when public health or consumer safety is genuinely at stake?'
    ],
    practicalAssignment: {
      title: 'Crisis Communications Narrative Reframing Playbook',
      prompt: 'Scenario: Your consumer AI companion product is accused by investigative journalists of causing teenage social isolation. Construct a crisis communications messaging grid that reframes the debate from "technology isolates teens" to "technology provides an accessible safety valve for marginalized youth."',
      deliverables: ['Hostile vs Reframed narrative comparison table', '3 media interview Q&A pivot scripts', 'Ethical red lines and internal guardrails'],
      rubric: [
        { criteria: 'Framing sophistication', maxPoints: 10, description: 'Shifts coordinates to higher-order values without sounding evasive.' },
        { criteria: 'Linguistic discipline', maxPoints: 10, description: 'Pivots smoothly from attack to positive vision in under 20 seconds.' },
        { criteria: 'Ethical integrity', maxPoints: 5, description: 'Acknowledges real safety commitments without conceding false premises.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'According to Framing Theory, what happens when you repeat your opponent’s negative frame to deny it (e.g. "I am not a crook")?',
        options: [
          'The audience is convinced by your rational denial',
          'You inadvertently activate and reinforce the opponent’s negative mental frame in the audience’s brain',
          'It clears your company of civil liability in court',
          'It lowers your customer acquisition costs'
        ],
        correctOptionIndex: 1,
        explanation: 'George Lakoff proved that denying an existing frame ("Don’t think of an elephant") firmly reinforces that exact frame in listeners’ minds.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Naylor explains to his son: "If you argue correctly, you’re never wrong." The goal is not to convince the opponent, but to win the undecided audience.',
      teachingNotes: 'Compare to political campaign debate prep and Big Tech antitrust hearings.',
      commonStudentPitfalls: ['Confusing clever spin with substantive policy reform; framing wins the press cycle, but doesn’t fix a broken product']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-047',
    filmTitle: 'Barbie',
    releaseYear: 2023,
    tmdbMovieId: 346698,
    subject: 'Marketing and brand',
    topicTags: ['Subversive Marketing', 'Brand Modernization', 'Nostalgia Extensions', 'Cultural Relevance'],
    lessonTitle: 'Subversive Brand Modernization: Mattel and the Barbie Renaissance',
    learningObjective: 'Examine how self-deprecating satire and cultural commentary revitalize stagnant legacy brand equity.',
    difficulty: 'Intermediate',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'The trailer and opening scenes boldly tackle decades of feminist criticism against Barbie. Mattel leadership explicitly allows the film to mock their corporate board as an all-male out-of-touch bureaucracy in grey suits, while placing Barbie in an existential crisis over cellulite, death, and patriarchal contradictions.',
    sceneTimestampRef: 'Approx. 00:12:10 (Instructor verified)',
    conceptExplanation: 'Legacy brands facing cultural stagnation often make the fatal mistake of defensive brand policing: strictly protecting pristine corporate guidelines and ignoring legitimate generational critiques. Mattel CEO Ynon Kreiz recognized that revitalizing Barbie required "subversive brand modernization": inviting renowned cultural critics (Greta Gerwig) to parody the brand’s flaws, thereby disarming cynics and turning a toy line into a \$1.4 billion cultural phenomenon.',
    framework: {
      name: 'Subversive Brand Modernization & Irony Arbitrage',
      description: 'Framework allowing legacy brands to reclaim cultural relevance by co-opting and satirizing their own historical critiques.',
      keySteps: [
        'Audit Brand Baggage: Catalogue the most toxic or outdated customer associations with absolute honesty.',
        'Surrender Corporate Sanctity: Permit external creators to openly mock corporate flaws on a global stage.',
        'Embrace Dual-Audience Irony: Appeal simultaneously to nostalgic lovers and cynical skeptics ("If you love Barbie, this movie is for you. If you hate Barbie, this movie is for you").',
        'Execute Coordinated Merchandising Flywheel: Translate cultural buzz into hundreds of co-branded product partnerships.'
      ],
      templateSnippet: 'Brand Vulnerability: [Outdated impossible beauty standards] -> Subversive Pivot: [Existential, self-aware feminist satire] -> Outcome: [Universal cultural relevance].'
    },
    discussionQuestions: [
      'Why are corporate legal and brand teams instinctively terrified of self-deprecating satire?',
      'How did Mattel turn the tagline "If you hate Barbie, this movie is for you" into a massive commercial asset?',
      'What are the risks of a legacy brand attempting irony if the underlying product fails to evolve?'
    ],
    practicalAssignment: {
      title: 'Subversive Brand Revitalization Blueprint',
      prompt: 'Select an aging, culturally out-of-touch consumer brand (e.g. McDonald’s, Harley-Davidson, Victoria’s Secret). Formulate a subversive modernization campaign that directly addresses its primary cultural criticism with self-awareness and irony.',
      deliverables: ['Brand baggage and cultural criticism audit', 'Subversive campaign concept and tagline', 'Co-branded partnership expansion plan (3 brand collabs)'],
      rubric: [
        { criteria: 'Cultural courage', maxPoints: 10, description: 'Directly addresses authentic consumer cynicism without defensive PR gloss.' },
        { criteria: 'Strategic irony', maxPoints: 10, description: 'Balances self-deprecation with undeniable commercial appeal.' },
        { criteria: 'Ecosystem leverage', maxPoints: 5, description: 'Translates brand awareness into multi-channel product revenue.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why was Mattel’s willingness to portray its own corporate executives as bumbling villains effective brand strategy in Barbie?',
        options: [
          'It lowered Mattel’s corporate state taxes in California',
          'It demonstrated radical self-awareness, preempting cynical criticism and proving the brand was modern enough to laugh at itself',
          'The actors were actual Mattel board members acting for free',
          'It was required by the Screen Actors Guild contract'
        ],
        correctOptionIndex: 1,
        explanation: 'Self-aware satire disarms cynicism; by mocking its own flaws first, a brand renders external attacks toothless.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Highlight the contrast between Mattel’s 1990s defensive litigation and its 2023 IP-licensing empire under Ynon Kreiz.',
      teachingNotes: 'Discuss "Barbenheimer" as an organic earned-media phenomenon that amplified the box office.',
      commonStudentPitfalls: ['Assuming that self-deprecation alone works without top-tier creative execution and product quality']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-048',
    filmTitle: 'The Truman Show',
    releaseYear: 1998,
    tmdbMovieId: 37165,
    subject: 'Marketing and brand',
    topicTags: ['Product Placement', 'Native Advertising', 'Contextual Merchandising', 'Influencer Marketing'],
    lessonTitle: 'Hyper-Native Product Placement: Invisible Merchandising in The Truman Show',
    learningObjective: 'Analyze the mechanics and consumer psychology of contextual, in-universe product placement and influencer native advertising.',
    difficulty: 'Foundational',
    durationMinutes: 25,
    format: 'Case Study',
    sceneDescription: 'During an emotional marital argument in their kitchen, Truman’s wife Meryl suddenly turns toward an invisible camera, smiles artificially, and holds up a canister of cocoa: "Why don’t I make you some of this new Mococoa drink? All natural cocoa beans from the upper slopes of Mount Nicaragua, no artificial sweeteners!" Later, Truman’s best friend Marlon sits on a bridge holding a recognizable six-pack of Penn Pavio beer with the label perfectly angled toward the lens.',
    sceneTimestampRef: 'Approx. 00:38:15 (Instructor verified)',
    conceptExplanation: 'Traditional banner ads and 30-second commercial interruptions suffer from extreme ad blindness and ad-blocker usage. The Truman Show foretold modern influencer marketing and native social video: commercial monetization woven directly into the fabric of daily domestic life. However, when the product pitch feels unprompted or disrupts emotional authenticity, the illusion shatters and user trust collapses.',
    framework: {
      name: 'Native Placement Seamlessness vs Intrusion Index',
      description: 'Framework measuring the trade-off between commercial visibility and contextual narrative immersion.',
      keySteps: [
        'Audit Contextual Fit: Does the product naturally belong in the user’s lived environment?',
        'Evaluate Narrative Friction: Does the endorsement interrupt the primary emotional experience?',
        'Determine Creator Alignment: Does the host genuinely use and endorse the tool in real life?',
        'Calculate Trust Decay: Monitor user sentiment for signs that aggressive placement is destroying authentic connection.'
      ],
      templateSnippet: 'Placement: [Mococoa drink] -> Context: [High-stakes domestic argument] -> Intrusion Score: [10/10: Total immersion break] -> Result: [Truman suspects reality is fake].'
    },
    discussionQuestions: [
      'Why did Meryl’s product placement commercials trigger Truman’s realization that his world was artificial?',
      'How does modern creator sponsorship on YouTube/TikTok balance commercial disclosure with natural storytelling?',
      'What are the ethical implications of immersive native advertising when viewers cannot discern entertainment from sponsored commerce?'
    ],
    practicalAssignment: {
      title: 'Contextual Native Placement Integration Strategy',
      prompt: 'Select a lifestyle or productivity SaaS product. Design a native product placement campaign within a popular streaming documentary or top podcast series. Create guidelines that ensure high brand recall without triggering the cringe and alienation depicted in The Truman Show.',
      deliverables: ['Contextual placement scene concept', 'Organic integration script (under 45 seconds)', 'Brand safety and audience authenticity guardrails'],
      rubric: [
        { criteria: 'Contextual naturalness', maxPoints: 10, description: 'Product belongs seamlessly in the narrative environment.' },
        { criteria: 'Recall efficacy', maxPoints: 10, description: 'Value proposition is clear without breaking the fourth wall awkwardly.' },
        { criteria: 'Transparency ethics', maxPoints: 5, description: 'Complies with FTC sponsorship disclosure guidelines.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why did the product placement in The Truman Show feel creepy and alarming to Truman?',
        options: [
          'The products were past their expiration dates',
          'The placements abruptly hijacked genuine human emotional moments with rehearsed corporate sales pitches, exposing the synthetic nature of his reality',
          'The commercials were broadcast in black and white',
          'Meryl mispronounced the brand names'
        ],
        correctOptionIndex: 1,
        explanation: 'Forced commercial interruptions during intimate moments break psychological immersion, destroying audience trust.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Examine Christof’s business model: the 24/7 show had no commercials; all revenue came from catalog product placement ("Everything on the show is for sale").',
      teachingNotes: 'Connect this to Instagram native shoppable feeds and sponsored TikTok creator content.',
      commonStudentPitfalls: ['Assuming native advertising means being sneaky; transparency actually enhances long-term conversion']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-049',
    filmTitle: 'Crazy People',
    releaseYear: 1990,
    tmdbMovieId: 11456,
    subject: 'Marketing and brand',
    topicTags: ['Radical Candor', 'Truth in Advertising', 'Counter-Intuitive Positioning', 'Brand Trust'],
    lessonTitle: 'Radical Candor & Counter-Intuitive Truth-in-Advertising: The Honest Ad Playbook',
    learningObjective: 'Evaluate how extreme honesty and disarming transparency create brand differentiation in cynical, ad-saturated markets.',
    difficulty: 'Foundational',
    durationMinutes: 25,
    format: 'Case Study',
    sceneDescription: 'Advertising executive Emory Leeson suffers a mental breakdown from years of writing deceptive marketing slogans. He begins designing brutally honest print ads: "Volvo: Yes, they’re boxy, but they’re good," "Metpath Medical Labs: We deliver bad news," and "Jaguar: For men who’d like hand-jobs from women they hardly know." When the ads are accidentally published, sales skyrocket because consumers find the honesty refreshing and trustworthy.',
    sceneTimestampRef: 'Approx. 00:26:10 (Instructor verified)',
    conceptExplanation: 'Modern consumers suffer from acute cynicism toward marketing puffery ("the best", "revolutionary", "all-natural"). When a brand utilizes "Radical Candor"—openly admitting its flaws, limitations, or unglamorous aspects—it triggers intense cognitive surprise and trust. By telling the absolute truth about a minor negative, the brand’s claims about its core positives become exponentially more believable.',
    framework: {
      name: 'Two-Sided Persuasion & Defect Admitting Matrix',
      description: 'Psychological framework proving that admitting a small flaw significantly increases belief in primary product claims.',
      keySteps: [
        'Identify the Obvious Flaw / Trade-off (e.g. boxy aesthetics, bitter taste, high price).',
        'State the Flaw Openly in the Headline: "Avis is only No. 2. So we try harder." / "Listerine: The taste you hate twice a day."',
        'Anchor the Primary Core Benefit: Connect the flaw directly to the reason for excellence (boxy = safer; bitter = kills germs).',
        'Measure Trust Multiplier: Track conversion improvements against standard one-sided promotional claims.'
      ],
      templateSnippet: 'Flaw Admission: [Yes, we are 30% more expensive] -> Direct Rationale: [Because we use titanium rather than plastic] -> Consumer Verdict: [Unshakeable trust].'
    },
    discussionQuestions: [
      'Why does admitting a product flaw make consumers believe the rest of your marketing claims more readily?',
      'What are real-world marketing campaigns that leveraged radical honesty to capture market share (e.g. Avis, Listerine, Patagonia)?',
      'When is radical candor dangerous or inappropriate for a brand (e.g. safety-critical systems, healthcare diagnostics)?'
    ],
    practicalAssignment: {
      title: 'Radical Candor Ad Campaign Concept',
      prompt: 'Select a product burdened by an obvious, well-known negative consumer perception (e.g. IKEA flat-pack assembly frustration, high cost of enterprise software, bitter taste of health tonic). Write 3 brutally honest ad headlines and body copy that turn this defect into an undeniable badge of honor.',
      deliverables: ['Three radical candor print/digital ad concepts', 'Body copy explaining the strategic benefit behind the flaw', 'Customer trust and recall measurement plan'],
      rubric: [
        { criteria: 'Authentic bravery', maxPoints: 10, description: 'Ad admits a genuine consumer frustration without sugarcoating.' },
        { criteria: 'Strategic bridge', maxPoints: 10, description: 'Directly links the acknowledged flaw to a superior core benefit.' },
        { criteria: 'Tone calibration', maxPoints: 5, description: 'Humorous, confident, and disarming rather than apologetic or weak.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'In consumer psychology, what is the "Two-Sided Argument" effect in advertising?',
        options: [
          'Publishing an ad in two different languages simultaneously',
          'Acknowledging a minor product drawback or trade-off, which dramatically increases the credibility of the primary positive claims',
          'Selling two competing products from the same corporate holding company',
          'Splitting marketing budgets equally between Google and Facebook'
        ],
        correctOptionIndex: 1,
        explanation: 'Research demonstrates that two-sided messages disarm consumer skepticism because consumers perceive the advertiser as honest and objective.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Reference iconic classic campaigns like DDB’s "Think Small" and "Lemon" for Volkswagen Beetle, and Patagonia’s "Don’t Buy This Jacket."',
      teachingNotes: 'Discuss how social media customer reviews made radical candor mandatory: customers will post the flaws anyway.',
      commonStudentPitfalls: ['Insulting the customer or the product without connecting the flaw to a compensating strength']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-050',
    filmTitle: 'Art & Copy',
    releaseYear: 2009,
    tmdbMovieId: 24707,
    subject: 'Marketing and brand',
    topicTags: ['Emotional Branding', 'Brand Resonance', 'Iconic Slogans', 'Cultural Moats'],
    lessonTitle: 'Emotional Branding and Brand Resonance: "Just Do It" and "Think Different"',
    learningObjective: 'Analyze how high-level emotional branding transcends utilitarian product features to build durable cultural moats.',
    difficulty: 'Intermediate',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'Legendary advertising copywriter Dan Wieden reflects on creating Nike’s "Just Do It" campaign, inspired by the final words of death-row inmate Gary Gilmore ("Let’s do it"). Wieden, along with Lee Clow (creator of Apple’s "1984" and "Think Different"), explains how great campaigns stop talking about shoe treads or computer megahertz, and instead articulate fundamental human identity and aspirational values.',
    sceneTimestampRef: 'Approx. 00:41:30 (Instructor verified)',
    conceptExplanation: 'Commodity features can be copied by rivals within weeks. Brand moats cannot. As products mature from functional utility to mass-market ubiquity, marketing must ascend the Brand Resonance Pyramid: transitioning from describing technical specifications (cushioning, clock speed) to embodying emotional payoffs and self-actualization. Nike does not sell shoes; it sells the heroic triumph over self-doubt.',
    framework: {
      name: 'Kevin Lane Keller’s Brand Resonance Pyramid',
      description: 'Framework tracking brand evolution across Salience, Performance/Imagery, Judgments/Feelings, and Resonance.',
      keySteps: [
        'Tier 1 - Brand Salience: Deep, broad brand awareness (Who are you?).',
        'Tier 2 - Performance & Imagery: Functional meeting of customer needs and brand personality (What are you?).',
        'Tier 3 - Judgments & Feelings: Emotional response, warmth, excitement, and perceived quality (What about you?).',
        'Tier 4 - Brand Resonance: Intense, active psychological loyalty, community, and personal identity (What about you and me?).'
      ],
      templateSnippet: 'Feature Level: [Shoe air cushioning] -> Emotional Level: [Overcoming physical fatigue] -> Resonance Level: [I am an athlete: Just Do It].'
    },
    discussionQuestions: [
      'Why do technical founders frequently struggle with emotional branding, dismissing it as "fluff"?',
      'How did Apple’s "Think Different" campaign succeed in 1997 when the company had virtually no new products ready to ship?',
      'When is emotional branding premature for an early-stage startup that has not yet nailed basic product utility?'
    ],
    practicalAssignment: {
      title: 'Brand Resonance Pyramid Architecture Audit',
      prompt: 'Select a B2B or B2C tech product that is currently stuck competing on commoditized features. Map out its 4-tier Brand Resonance Pyramid. Develop an overarching emotional brand anthem and campaign manifesto that shifts its positioning from technical utility to core human identity.',
      deliverables: ['Four-tier Brand Resonance Pyramid diagram', '150-word brand manifesto / anthem script', 'Guidelines for brand voice and visual tone'],
      rubric: [
        { criteria: 'Resonance depth', maxPoints: 10, description: 'Ascends from utilitarian specs to genuine emotional identity.' },
        { criteria: 'Manifesto power', maxPoints: 10, description: 'Copy is evocative, memorable, and free of corporate buzzwords.' },
        { criteria: 'Strategic fit', maxPoints: 5, description: 'Emotional promise aligns credibly with underlying product capabilities.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'At the top of Keller’s Brand Resonance Pyramid, what characterizes the "Resonance" tier?',
        options: [
          'High coupon discount redemption rates',
          'Intense psychological attachment, active community engagement, and personal identity alignment where the customer views the brand as a reflection of themselves',
          'Compliance with trademark registration laws in the European Union',
          'The lowest Customer Acquisition Cost across search ads'
        ],
        correctOptionIndex: 1,
        explanation: 'Brand Resonance represents the pinnacle of relationship marketing: customers feel profound behavioral and emotional kinship with the brand.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Highlight Steve Jobs’ internal 1997 speech to Apple employees: "To me, marketing is about values. This is a very complicated world, it’s a very noisy world, and we’re not going to get the chance to get people to remember us for computer specs."',
      teachingNotes: 'Pair with Simon Sinek’s "Start With Why" (The Golden Circle).',
      commonStudentPitfalls: ['Writing emotional copy that has zero connection to what the product actually enables users to achieve']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-051',
    filmTitle: 'The Joneses',
    releaseYear: 2009,
    tmdbMovieId: 28874,
    subject: 'Marketing and brand',
    topicTags: ['Stealth Marketing', 'Social Proof', 'Peer Influencers', 'Conspicuous Consumption'],
    lessonTitle: 'Stealth Word-of-Mouth Marketing & Peer Social Proof: The Joneses Playbook',
    learningObjective: 'Examine the psychological mechanics of peer social proof and stealth influencer demonstration in affluent consumer subcultures.',
    difficulty: 'Intermediate',
    durationMinutes: 30,
    format: 'Case Study',
    sceneDescription: 'Steve and Kate Jones move into an ultra-wealthy suburban gated community with their two teenage children. To their neighbors, they appear to be the perfect, glamorous American family. In reality, they are undercover corporate marketing employees deployed by LifeImage, an agency that plants living stealth product testers to casually showcase luxury golf clubs, frozen gourmet meals, and sports cars to neighbors.',
    sceneTimestampRef: 'Approx. 00:19:15 (Instructor verified)',
    conceptExplanation: 'Peer social proof is the most potent driver of discretionary consumer spending. When people see peers—not paid celebrities on billboards—casually using a product in their natural environment, defense mechanisms vanish. While LifeImage’s deceptive covert method raises grave ethical and regulatory issues, the underlying dynamic explains modern organic seeding, developer advocacy, and creator gifting programs.',
    framework: {
      name: 'Robert Cialdini’s Social Proof & Organic Seeding Flywheel',
      description: 'Framework measuring peer observation, status mimicry, and organic referral velocity.',
      keySteps: [
        'Identify Micro-Influencers with Organic Social Centrality (Neighborhood leaders, open-source maintainers).',
        'Seed High-Visibility Artifacts: Provide products that can be displayed naturally during everyday activities.',
        'Trigger Unsolicited Mimicry: Neighbors/colleagues observe ease of use and inquire organically ("Where did you get that?").',
        'Maintain Ethical Disclosure Guardrails: Ensure regulatory compliance (FTC influencer guidelines) to prevent trust backlash.'
      ],
      templateSnippet: 'Peer Observation: [Neighbor sees Steve hit 300-yard drive with club] -> Aspirational Mimicry: [Orders identical club online that afternoon].'
    },
    discussionQuestions: [
      'Why is informal recommendation from a peer perceived as infinitely more trustworthy than corporate marketing?',
      'Where is the ethical line between seeding products with authentic community leaders and running deceptive stealth marketing?',
      'How does conspicuous consumption in affluent communities drive competitive spending epidemics (keeping up with the Joneses)?'
    ],
    practicalAssignment: {
      title: 'Ethical Peer Seeding & Social Proof Campaign',
      prompt: 'Scenario: You are launching a premium ergonomics keyboard or professional specialty tool. Design an organic product seeding campaign targeting 50 influential community members. Detail the seeding criteria, the conversation trigger moments, and explicit FTC compliance disclosure mechanisms.',
      deliverables: ['Target seeding persona and selection criteria', 'Organic conversation trigger mechanics', 'FTC disclosure and brand ethics protocol'],
      rubric: [
        { criteria: 'Influencer identification', maxPoints: 10, description: 'Focuses on genuine community practitioners rather than broad celebrity influencers.' },
        { criteria: 'Social proof mechanics', maxPoints: 10, description: 'Product usage is visible and naturally stimulates peer curiosity.' },
        { criteria: 'Ethical compliance', maxPoints: 5, description: '100% compliant with truth-in-advertising and endorsement guidelines.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'In social psychology, what makes peer social proof uniquely powerful in driving purchase decisions?',
        options: [
          'Peers offer the lowest interest rate financing',
          'Humans reduce cognitive uncertainty by observing the behavioral choices of people they perceive as similar to themselves or aspirational',
          'It is legally required by retail trade associations',
          'Peers receive 100% commissions on all referred sales'
        ],
        correctOptionIndex: 1,
        explanation: 'Cialdini’s social proof principle establishes that individuals look to similar peers to guide their own behavior, especially under ambiguity.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Highlight the tragic climax: the neighbor bankrupts himself trying to match the Joneses’ lifestyle, leading to suicide. Ethical responsibility must frame this case.',
      teachingNotes: 'Compare to modern B2B Developer Relations (DevRel) seeding tools to influential GitHub repository owners.',
      commonStudentPitfalls: ['Ignoring FTC endorsement disclosure rules in modern digital marketing']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-052',
    filmTitle: 'Syrup',
    releaseYear: 2013,
    tmdbMovieId: 102651,
    subject: 'Marketing and brand',
    topicTags: ['Image Arbitrage', 'Brand Positioning', 'Saturated Markets', 'Perceived Value'],
    lessonTitle: 'Image Arbitrage: Brand Positioning in Saturated Beverage Categories',
    learningObjective: 'Analyze how image arbitrage, packaging semiotics, and artificial scarcity create high margins in commoditized categories.',
    difficulty: 'Foundational',
    durationMinutes: 25,
    format: 'Case Study',
    sceneDescription: 'Recent marketing graduate Scat comes up with an idea for a new energy soda: "Fpresse" (short for "Free Press"). He realizes that in beverage marketing, the liquid in the can is identical sugar water costing 3 cents; the entire product is the image, the can design, the matte black finish, and the premium \$5 price point that signals elite lifestyle exclusivity.',
    sceneTimestampRef: 'Approx. 00:14:40 (Instructor verified)',
    conceptExplanation: 'In hyper-saturated consumer packaged goods (CPG) categories where chemical product differentiation is near-zero (sodas, bottled water, perfume, vodka), the product is not the physical fluid—the product is the semiotic narrative encoded in the package. Strategic marketers execute "image arbitrage": investing minimal marginal cost into physical formulation while capturing 90% gross margins through cultural positioning, packaging design, and pricing psychology.',
    framework: {
      name: 'Semiotics & Perceived Value Arbitrage Matrix',
      description: 'Framework measuring the gap between physical production cost and consumer perceived willingness-to-pay driven by brand semiotics.',
      keySteps: [
        'Deconstruct Physical Commodity Base Cost (Liquid, aluminum can, bottling labor = \$0.15).',
        'Identify Target Subculture Aspiration (Streetwear exclusivity, extreme athletics, minimalist luxury).',
        'Encode Semiotic Signals: Matte black tactile finishes, minimalist typography, provocative naming.',
        'Set Counter-Intuitive Premium Pricing: Price 3x above incumbents (Veblen Good effect) to signal superior status.'
      ],
      templateSnippet: 'Physical Cost: [\$0.20 COGS] + Semiotic Narrative: [Matte black can, sold only at high-end venues] -> Retail Price: [\$6.00] -> Gross Margin: [96.6%].'
    },
    discussionQuestions: [
      'Why do consumers willingly pay \$5 for canned water (like Liquid Death) when tap water is virtually free?',
      'How does packaging texture and industrial design alter the perceived taste and quality of identical liquids?',
      'What are the vulnerabilities of a brand built entirely on image arbitrage if cultural fashion shifts overnight?'
    ],
    practicalAssignment: {
      title: 'CPG Image Arbitrage Concept & P&L Model',
      prompt: 'Select a pure commodity product (e.g. table salt, plain sparkling water, white athletic socks). Design a premium brand identity, packaging concept, and retail pricing strategy that commands a 400% price premium over mass-market store brands. Model the unit economics.',
      deliverables: ['Brand naming and semiotic design concept', 'Unit economic waterfall (COGS vs Retail Margin vs Marketing Spend)', 'Target subculture positioning rationale'],
      rubric: [
        { criteria: 'Semiotic ingenuity', maxPoints: 10, description: 'Brand identity transforms mundane commodity into a high-status cultural artifact.' },
        { criteria: 'Unit economics', maxPoints: 10, description: 'Accurately models gross margins, channel cuts, and CAC.' },
        { criteria: 'Cultural resonance', maxPoints: 5, description: 'Identifies an authentic lifestyle subculture ripe for disruption.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'In marketing economics, what defines a "Veblen Good"?',
        options: [
          'A product subsidized by the government for low-income families',
          'A good for which demand increases as the price increases, because higher price signals exclusive status and luxury prestige',
          'A digital file that can be copied with zero marginal cost',
          'A product sold exclusively in duty-free airport shops'
        ],
        correctOptionIndex: 1,
        explanation: 'Veblen goods defy standard demand curves: high prices enhance their status appeal, increasing consumer desirability.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Examine Liquid Death’s multi-hundred-million-dollar valuation: it is standard canned water packaged with heavy metal aesthetics.',
      teachingNotes: 'Compare to Rory Sutherland’s work on Alchemy and behavioral perception in marketing.',
      commonStudentPitfalls: ['Assuming consumers make purely rational, functional decisions in lifestyle categories']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-053',
    filmTitle: 'House of Gucci',
    releaseYear: 2021,
    tmdbMovieId: 644495,
    subject: 'Marketing and brand',
    topicTags: ['Luxury Architecture', 'Brand Dilution', 'Licensing Hazards', 'Exclusivity Management'],
    lessonTitle: 'Luxury Brand Architecture: Dilution Risks of Licensing Mass Market Goods',
    learningObjective: 'Understand how indiscriminate licensing and mass-market distribution erode luxury brand equity and pricing power.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Case Study',
    sceneDescription: 'Patrizia Reggiani walks through New York’s Canal Street and discovers cheap knockoff Gucci coffee mugs, keychains, and imitation leather bags being sold on street tables. Confronting Maurizio Gucci, she learns that the family had previously signed hundreds of cheap international licensing deals to generate quick cash, severely diluting the maison’s aristocratic exclusivity.',
    sceneTimestampRef: 'Approx. 01:12:30 (Instructor verified)',
    conceptExplanation: 'Luxury brands derive enterprise value from scarcity, aristocratic heritage, and uncompromising craftsmanship. In the 1970s and 80s, Gucci (and Pierre Cardin) fell into the classic "Licensing Trap": selling licensing rights to external manufacturers for quick royalty fees on cheap commodity items (lighters, ashtrays, mugs). While short-term cash surged, long-term brand equity was devastated, requiring Tom Ford and Domenico De Sole to buy back licenses and restore ruthless scarcity.',
    framework: {
      name: 'Kapferer’s Luxury Brand Anti-Laws & Scarcity Matrix',
      description: 'Framework governing luxury brand management and the preservation of pricing power.',
      keySteps: [
        'Anti-Law 1: Forget about positioning; luxury is identity, not a comparison to rivals.',
        'Anti-Law 2: Keep non-enthusiasts out; do not pander to mass-market convenience.',
        'Anti-Law 3: Make it difficult to buy; create artificial waiting lists and limited distribution doors.',
        'Strict License Termination: Terminate all low-tier licenses and buy back third-party production rights immediately.'
      ],
      templateSnippet: 'Brand Dilution State: [Gucci logo on cheap mugs at \$15] -> Restoration Action: [Cancel 80% of licenses + Re-anchor on runway haute couture].'
    },
    discussionQuestions: [
      'Why are executive boards consistently tempted by licensing deals despite the obvious danger of brand dilution?',
      'How did Domenico De Sole and Tom Ford successfully rescue Gucci from near-bankruptcy in the 1990s?',
      'What are tech software equivalents of "brand dilution through indiscriminate distribution"?'
    ],
    practicalAssignment: {
      title: 'Luxury Brand De-Licensing & Restructuring Plan',
      prompt: 'Scenario: A storied European heritage brand has fallen into distress after licensing its name across 150 mass-market product lines (sunglasses, polyester ties, perfumes, cheap luggage). Develop a 3-year turnaround strategy to buy back licenses, contract distribution, and restore its luxury prestige.',
      deliverables: ['License rationalization schedule (what gets terminated first)', 'Financial cash-flow gap bridge during licensing shutdown', 'Haute couture brand re-anchoring roadmap'],
      rubric: [
        { criteria: 'Scarcity discipline', maxPoints: 10, description: 'Aggressively slashes revenue-diluting licenses despite short-term pain.' },
        { criteria: 'Financial viability', maxPoints: 10, description: 'Solves the cash-flow gap while buying back third-party rights.' },
        { criteria: 'Prestige restoration logic', maxPoints: 5, description: 'Follows established luxury brand management principles.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'According to luxury brand management expert Jean-Noël Kapferer, what happens when a luxury brand increases distribution to mass-market retail outlets?',
        options: [
          'Brand equity increases as more people become familiar with the logo',
          'The brand destroys its primary value driver—scarcity and aspirational exclusivity—causing high-end consumers to abandon the brand',
          'Manufacturing costs drop to zero',
          'Counterfeit products become illegal automatically'
        ],
        correctOptionIndex: 1,
        explanation: 'Luxury is defined by exclusivity; making a luxury brand universally available destroys the social distinction that justifies its premium price.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Pierre Cardin licensed his name to over 800 products, permanently destroying his luxury status. Gucci narrowly escaped this fate through radical restructuring.',
      teachingNotes: 'Compare to Ferrari capping annual car production to maintain waitlists and secondary market premiums.',
      commonStudentPitfalls: ['Treating luxury goods like standard consumer products where volume growth is always positive']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },

  // ==========================================
  // SUBJECT 7: Entrepreneurship and business models (lms-054..lms-062)
  // ==========================================
  {
    id: 'lms-054',
    filmTitle: 'The Founder',
    releaseYear: 2016,
    tmdbMovieId: 361743,
    subject: 'Entrepreneurship and business models',
    topicTags: ['Business Model Pivot', 'Real Estate Franchising', 'Cash Flow Architecture', 'Economic Engines'],
    lessonTitle: 'The Business Model Pivot: Franchising Real Estate as the True Cash Cow',
    learningObjective: 'Analyze how pivoting from product-margin royalties to underlying real estate leasing unlocks scalable franchise economics.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Case Study',
    sceneDescription: 'Ray Kroc is on the verge of bankruptcy. Despite McDonald’s restaurants booming across the Midwest, Kroc’s contract gives him a measly 1.4% of restaurant gross sales, barely covering his travel overhead. Financial consultant Harry Sonneborn reviews Kroc’s books and delivers the historic epiphany: "You don’t build an empire off a 1.4% cut of a 15-cent hamburger. You’re not in the burger business. You’re in the real estate business."',
    sceneTimestampRef: 'Approx. 01:07:20 (Instructor verified)',
    conceptExplanation: 'Entrepreneurs frequently mistake their customer-facing artifact (the burger, the software code) for their true economic engine. Kroc established the Franchise Realty Corporation: buying or leasing the land beneath the restaurant and sub-leasing it to franchisees with a built-in markup and revenue clause. This transformed McDonald’s from a fragile food company into one of the largest commercial real estate holders in the world.',
    framework: {
      name: 'Business Model Canvas & Economic Engine Pivot',
      description: 'Framework mapping customer relationships, key resources, and underlying revenue architectures.',
      keySteps: [
        'Diagnose Margin Fragility: Analyze why the primary product unit economics fail to support enterprise scale.',
        'Identify Hidden Structural Assets: Pinpoint assets with perpetual leverage (Real estate, data infrastructure, platform APIs).',
        'Execute the Structural Pivot: Decouple revenue from operational restaurant labor and attach it to landlord equity.',
        'Enforce Franchisee Alignment: Use real estate ownership as ultimate control leverage (landlords can evict non-compliant operators).'
      ],
      templateSnippet: 'Old Engine: [1.4% royalty on \$0.15 burger = Insolvency] -> New Engine: [Own physical real estate + Collect fixed rent + % revenue = Cash Cow].'
    },
    discussionQuestions: [
      'Why did the McDonald brothers’ original contract prevent Ray Kroc from renegotiating his food royalty percentages?',
      'How did owning the physical real estate give Kroc total governance power over disobedient franchisees?',
      'What are modern software equivalents of discovering that your true business model is not software sales, but financial transaction rails or developer hosting?'
    ],
    practicalAssignment: {
      title: 'Business Model Canvas Pivot & Economic Engine Architecture',
      prompt: 'Select a startup currently struggling with low software or service margins (e.g. food delivery platform, shared coworking space, hardware IoT). Design an economic engine pivot that attaches revenue to an underlying financial, data, or platform asset.',
      deliverables: ['Before and After Business Model Canvas', 'Unit economic margin comparison model', 'Risk and capital structure transition plan'],
      rubric: [
        { criteria: 'Structural ingenuity', maxPoints: 10, description: 'Pivots from commoditized transaction to high-leverage defensible asset.' },
        { criteria: 'Financial viability', maxPoints: 10, description: 'Demonstrates mathematically how cash flow and margins stabilize.' },
        { criteria: 'Governance control', maxPoints: 5, description: 'New model provides built-in compliance and quality enforcement leverage.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What was Harry Sonneborn’s pivotal insight that saved Ray Kroc from bankruptcy in The Founder?',
        options: [
          'McDonald’s should start selling pizza and tacos',
          'Kroc was not in the food-service business; he was in the real estate business, and should own the land beneath every franchise to collect rental cash flows and control operators',
          'Kroc should shut down all Midwest stores and move to Florida',
          'He should cut hamburger meat with soy protein'
        ],
        correctOptionIndex: 1,
        explanation: 'Purchasing and leasing the physical land provided predictable rental income and gave Kroc absolute contractual control over franchisees.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Sonneborn’s phrase: "You own the land. You have the lease. If they violate standards, you cancel the lease and kick them out." Real estate provided both cash flow and quality control.',
      teachingNotes: 'Compare to how Apple makes massive margins on the App Store 30% take-rate rather than pure hardware assembly.',
      commonStudentPitfalls: ['Focusing on Kroc’s moral betrayal of the McDonald brothers rather than the corporate finance architecture']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-055',
    filmTitle: 'Joy',
    releaseYear: 2015,
    tmdbMovieId: 284293,
    subject: 'Entrepreneurship and business models',
    topicTags: ['Hardware Scale', 'Patent Defense', 'Supply Chain Financing', 'IP Enforcement'],
    lessonTitle: 'Manufacturing Scale & Patent Enforcement for Solo Hardware Inventors',
    learningObjective: 'Master supply chain financing, manufacturing tooling ownership, and intellectual property defense under predatory partner pressures.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Executive Simulation',
    sceneDescription: 'Facing bankruptcy after an unscrupulous California manufacturer claims ownership of her mop molds and secretly charges her inflated fabrication fees, Joy Mangano flies to Dallas. She confronts the CEO, uncovers that the manufacturer forged patent claims, and exposes that she holds the prior art and primary patent rights, forcing him to repay her fraudulent fees.',
    sceneTimestampRef: 'Approx. 01:42:15 (Instructor verified)',
    conceptExplanation: 'Solo hardware and physical product entrepreneurs face brutal supply-chain vulnerabilities: injection mold tooling extortion, patent hold-up, and contract manufacturer IP theft. Entrepreneurs must retain physical ownership of custom manufacturing tooling (steel molds), register airtight utility patents with clean assignment chains, and audit supplier billing records with forensic rigor.',
    framework: {
      name: 'Hardware Supply-Chain & IP Protection Framework',
      description: 'Framework safeguarding proprietary tooling, manufacturing rights, and patent defensibility against supplier predation.',
      keySteps: [
        'Secure Tooling Ownership Contractually: Contractually establish that custom dies and molds remain exclusive customer property.',
        'File Comprehensive Utility Patents with Prior Art Searches: Protect the mechanical mechanism, not just the aesthetic design.',
        'Conduct Forensic Supply Chain Audits: Regularly cross-reference raw plastic resin invoices against finished unit billing.',
        'Exercise Direct Founder Confrontation: When supplier fraud occurs, bypass intermediaries and confront the ultimate financial principal.'
      ],
      templateSnippet: 'Tooling Risk: [Supplier claims mold ownership] -> Legal Defense: [Invoiced tool fabrication receipts + Utility patent registration] -> Leverage: [Prosecution of criminal fraud].'
    },
    discussionQuestions: [
      'Why do contract manufacturers frequently attempt to claim ownership of specialized custom tooling and molds?',
      'How did Joy Mangano discover that her California supplier was colluding with a Texas patent holder to double-charge her?',
      'What are software equivalents of contract manufacturers attempting to hold a client’s proprietary assets hostage?'
    ],
    practicalAssignment: {
      title: 'Contract Manufacturing Master Services Agreement (MSA) Audit',
      prompt: 'Review a standard hardware contract manufacturing agreement. Identify 3 critical legal and operational trapdoors regarding tooling ownership, minimum order volume liabilities, and intellectual property assignment. Redraft the clauses to fully protect the startup.',
      deliverables: ['Tooling ownership clause redline', 'IP assignment and prior-art indemnification clause', 'Supplier audit rights and billing transparency protocol'],
      rubric: [
        { criteria: 'Legal precision', maxPoints: 10, description: 'Explicitly locks tooling ownership and prevents manufacturer IP poaching.' },
        { criteria: 'Audit teeth', maxPoints: 10, description: 'Grants unannounced physical inspection and raw material ledger audit rights.' },
        { criteria: 'Commercial balance', maxPoints: 5, description: 'Maintains terms that reputable manufacturers will realistically agree to sign.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'In physical product manufacturing, why is retaining explicit ownership of production molds and tooling vital for a startup?',
        options: [
          'Molds are made of pure silver and count as cash reserves on balance sheets',
          'If the supplier owns the molds, they can hold your production hostage, hike prices arbitrarily, or manufacture knockoffs for your competitors',
          'Tooling ownership exempts the company from state sales taxes',
          'Molds can be redeemed for airline travel miles'
        ],
        correctOptionIndex: 1,
        explanation: 'Custom molds are the physical heart of manufacturing; if a supplier owns them, they possess total operational hold-up power over your business.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Examine Joy’s climactic meeting in Texas: she did her homework, examined the original patent drawings, and caught the Texas businessman in an outright fraud.',
      teachingNotes: 'Compare to modern hardware startups manufacturing in Shenzhen and protecting IP via split-supplier assembly.',
      commonStudentPitfalls: ['Assuming that having a patent automatically protects you without the willingness and capital to legally enforce it']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-056',
    filmTitle: 'WeCrashed',
    releaseYear: 2022,
    tmdbMovieId: 154699,
    subject: 'Entrepreneurship and business models',
    topicTags: ['Valuation Arbitrage', 'Tech Multiples', 'Governance Breakdown', 'Charismatic Leadership'],
    lessonTitle: 'Valuation Arbitrage: Tech Multiples on Traditional Real Estate Arbitrage',
    learningObjective: 'Evaluate the structural dangers of dressing up capital-intensive traditional businesses in tech multiple valuations.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Case Study',
    sceneDescription: 'Adam Neumann pitches SoftBank founder Masayoshi Son in New York. Instead of describing WeWork as an office leasing sublease broker, Neumann proclaims WeWork is a "physical social network" and an "exponential tech ecosystem," commanding a \$47 billion valuation despite burning billions in negative operating cash flow.',
    sceneTimestampRef: 'Approx. Ep. 4, 00:32:15 (Instructor verified)',
    conceptExplanation: 'Traditional real estate companies trade at 1-2x revenue or 10-15x EBITDA multiples due to heavy asset liabilities and cyclical lease exposure. WeWork achieved valuation arbitrage by labeling long-term commercial leases as "community-as-a-service," convincing venture capitalists to value them at 20x tech software multiples. When financial markets demand IPO transparency, synthetic tech narratives decouple from balance-sheet debt realities.',
    framework: {
      name: 'Software vs Asset-Heavy Unit Economics Reality Check',
      description: 'Framework deconstructing whether a business possesses genuine software economics or capital-intensive liabilities.',
      keySteps: [
        'Analyze Marginal Cost of Replication: Does adding customer N cost \$0 (software) or \$10,000 (office lease)?',
        'Inspect Asset-Liability Duration Mismatch: Are liabilities long-term (15-year leases) while revenues are short-term (30-day memberships)?',
        'Strip Out Narrative Jargon: Replace "community tech platform" with GAAP operational terminology ("commercial subleasing broker").',
        'Calculate Contribution Margin & Unlevered Cash Flow: What is the true sustainable return on invested capital (ROIC)?'
      ],
      templateSnippet: 'Narrative Multiple: [40x ARR on "Tech Community"] vs Asset Reality: [15-year fixed lease liability + 30-day churnable revenue = Bankruptcy Risk].'
    },
    discussionQuestions: [
      'Why did top-tier venture capitalists and investment bankers accept WeWork’s "tech platform" narrative for nearly a decade?',
      'What is the fundamental asset-liability mismatch of subleasing long-term commercial space on month-to-month contracts?',
      'How can an independent board of directors maintain fiduciary governance in the presence of an intoxicating, charismatic founder?'
    ],
    practicalAssignment: {
      title: 'Tech-Multiple Sanity Check & Valuation Audit',
      prompt: 'Select a heavily hyped startup that claims to be a "tech company" but relies primarily on physical assets or human labor (e.g. ghost kitchens, tech-enabled trucking, quick-commerce delivery). Conduct a financial teardown proving whether it deserves a software multiple or a traditional service multiple.',
      deliverables: ['Marginal cost and gross margin comparison table', 'Asset-liability duration mismatch analysis', 'Defensible normalized valuation range'],
      rubric: [
        { criteria: 'Financial skepticism', maxPoints: 10, description: 'Distinguishes genuine software gross margins from disguised labor/leasing COGS.' },
        { criteria: 'Liability duration analysis', maxPoints: 10, description: 'Evaluates liquidity risks during macroeconomic downturns.' },
        { criteria: 'Valuation rigor', maxPoints: 5, description: 'Applies realistic industry peer multiples.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What was the fatal structural asset-liability mismatch in WeWork’s business model?',
        options: [
          'They invested all cash reserves in cryptocurrency',
          'They signed 10-to-15 year non-cancellable commercial lease liabilities with landlords, while collecting revenue from members on flexible 30-day cancellable agreements',
          'They refused to provide internet connectivity in office spaces',
          'The Federal Reserve banned shared office spaces'
        ],
        correctOptionIndex: 1,
        explanation: 'During an economic downturn, members cancel short-term agreements instantly while WeWork remains contractually obligated to pay decades of fixed lease debt.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Examine Scott Galloway’s early S-1 teardown: "WeWork is not a tech company. It is a commercial real estate company that leases desks."',
      teachingNotes: 'Compare WeWork’s governance collapse with Theranos and FTX.',
      commonStudentPitfalls: ['Confusing high top-line revenue growth with durable, cash-generative unit economics']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-057',
    filmTitle: 'The Dropout',
    releaseYear: 2022,
    tmdbMovieId: 105658,
    subject: 'Entrepreneurship and business models',
    topicTags: ['Clinical Validation', 'Fraud vs Vision', 'Silicon Valley Hype', 'Regulatory Boundaries'],
    lessonTitle: 'The "Fake It Till You Make It" Chasm vs. Clinical Verification Realities',
    learningObjective: 'Examine the catastrophic legal and ethical boundary where software "move fast and break things" collides with life-critical physical realities.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Case Study',
    sceneDescription: 'Elizabeth Holmes and Sunny Balwani prepare to demonstrate the Edison blood testing machine to Walgreens executives in Palo Alto. Knowing the Edison cannot reliably perform blood tests and frequently malfunctions, they lock the room, secretly dilute blood samples, and run tests off-camera on commercial third-party Siemens analyzers.',
    sceneTimestampRef: 'Approx. Ep. 5, 00:36:15 (Instructor verified)',
    conceptExplanation: 'In consumer software, "fake it till you make it" (deploying clickable mockups, concierge MVPs, or manual wizard-of-oz backends) is standard lean methodology. However, applying this mindset to healthcare, biotechnology, or safety-critical engineering constitutes criminal fraud and reckless endangerment. Product leaders must understand that biological physics cannot be debugged with optimistic software sprints.',
    framework: {
      name: 'Concierge Prototype vs Fraud Boundary Matrix',
      description: 'Framework defining legal and ethical limits of minimum viable testing across regulated industries.',
      keySteps: [
        'Classify Industry Safety Threshold: Is human health, physical safety, or life at risk? (High-Risk Regulated vs Low-Risk Software).',
        'Verify Technological Truth: Are test results generated by the proprietary product or secretly outsourced to incumbents?',
        'Enforce Clinical / Independent Verification: Mandatory peer-reviewed double-blind testing before commercial deployment.',
        'Protect Internal Dissent: Provide safe whistleblower channels for lab scientists and engineers reporting test fabrication.'
      ],
      templateSnippet: 'Permitted Lean MVP: [Manual concierge booking for travel app] vs Criminal Fraud: [Faking diagnostic medical lab results on patients].'
    },
    discussionQuestions: [
      'Why did seasoned statesmen and military generals on Theranos’ board fail to verify the underlying medical technology?',
      'How does the cultural myth of Steve Jobs contribute to dangerous hubris among frontier tech founders?',
      'What are the legal responsibilities of software engineers and lab scientists when they realize a company is faking customer demonstrations?'
    ],
    practicalAssignment: {
      title: 'Whistleblower Escalation & Verification Protocol',
      prompt: 'Scenario: You are Head of Product at an AI medical diagnostics startup. You discover your company’s sales team is demonstrating diagnostic accuracy rates that rely on human doctors secretly grading scans behind the scenes without FDA disclosure. Draft an internal board escalation memo and remediation plan.',
      deliverables: ['Board escalation memorandum detailing regulatory exposure', 'Immediate testing halt and customer disclosure protocol', 'Whistleblower protection and compliance audit plan'],
      rubric: [
        { criteria: 'Fiduciary clarity', maxPoints: 10, description: 'Accurately documents legal liability (FDA, SEC, wire fraud).' },
        { criteria: 'Patient safety prioritization', maxPoints: 10, description: 'Immediately quarantines unverified clinical outputs.' },
        { criteria: 'Actionable remediation', maxPoints: 5, description: 'Proposes legitimate path to clinical validation or orderly wind-down.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why is the Silicon Valley mantra "fake it till you make it" catastrophic when applied to biotechnology and medical diagnostics?',
        options: [
          'Patents cannot be granted for medical devices',
          'Software bugs cause minor annoyance, but false medical diagnostic results lead to lethal misdiagnoses, unnecessary chemotherapy, or fatal medical neglect',
          'Biotechnology companies are not allowed to hire software developers',
          'Venture capitalists refuse to invest in medical companies'
        ],
        correctOptionIndex: 1,
        explanation: 'In healthcare, technological failure directly endangers human life; faking clinical capability is criminal fraud, not agile prototyping.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'John Carreyrou’s "Bad Blood" book and investigation proved that Theranos was running patient tests on modified Siemens machines. Contrast vision with fraud.',
      teachingNotes: 'Discuss Tyler Shultz and Erika Cheung as role models of professional integrity under intense legal intimidation.',
      commonStudentPitfalls: ['Viewing Holmes as merely a visionary who ran out of time, rather than confronting the active deception of patients']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-058',
    filmTitle: 'Glengarry Glen Ross',
    releaseYear: 1992,
    tmdbMovieId: 9504,
    subject: 'Entrepreneurship and business models',
    topicTags: ['Lead Economics', 'Sales Pipeline', 'Funnel Exhaustion', 'Incentive Design'],
    lessonTitle: 'Lead Generation Economics: Fresh Leads vs. Exhausted Funnels',
    learningObjective: 'Analyze how sales lead quality and pipeline freshness dictate outbound conversion economics and salesperson morale.',
    difficulty: 'Intermediate',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'Corporate trainer Blake delivers the infamous "Coffee is for closers" motivational tirade to real estate salesmen Shelly Levene, Dave Moss, and George Aaronow. Blake introduces a sales contest: 1st prize is a Cadillac Eldorado, 2nd prize is a set of steak knives, 3rd prize is you’re fired. The salesmen plead for the fresh, qualified "Glengarry leads," but are told the Glengarry leads are locked in the manager’s safe until they close the exhausted, recycled phonebook leads.',
    sceneTimestampRef: 'Approx. 00:08:45 (Instructor verified)',
    conceptExplanation: 'Many executives blame outbound sales teams for low conversion rates ("they just aren’t closing hard enough") when the true systemic failure is upstream lead quality and funnel exhaustion. Forcing reps to call stale, recycled leads who lack intent, purchasing authority, or budget destroys team morale, elevates CAC, and incentivizes fraudulent desperation. Pipeline health is governed by lead qualification and recency.',
    framework: {
      name: 'BANT Lead Qualification & Pipeline Decay Curve',
      description: 'Framework measuring Budget, Authority, Need, and Timeline, along with lead decay half-life.',
      keySteps: [
        'Audit Lead Freshness / Decay Half-Life: Inbound lead conversion drops by 8x after the first 60 minutes.',
        'Apply BANT Filtering: Budget (Can they afford it?), Authority (Can they sign?), Need (Is there pain?), Timeline (Will they buy in 90 days?).',
        'Avoid Funnel Recycling: Quarantine dead leads; do not contaminate active sales capacity with repeatedly rejected prospects.',
        'Align Incentive Structures: Design bonuses that reward sustainable customer fit rather than desperate high-pressure closes.'
      ],
      templateSnippet: 'Lead Decay: [Fresh Inbound: 25% close rate] vs [Recycled 2-Year Lead: 0.4% close rate] -> Action: [Automate enrichment before assigning reps].'
    },
    discussionQuestions: [
      'Why does Blake’s zero-sum sales contest ("1st prize Cadillac, 3rd prize fired") drive the salesmen to commit burglary and theft?',
      'How does modern marketing automation (HubSpot, Marketo) automate the qualification of "Glengarry leads"?',
      'What are the hidden enterprise costs of forcing sales reps to call exhausted, uninterested prospect lists?'
    ],
    practicalAssignment: {
      title: 'Lead Scoring & Inbound Routing Playbook',
      prompt: 'Design an automated lead scoring matrix for an enterprise B2B SaaS product. Define specific behavioral signals (e.g. visited pricing page, downloaded whitepaper, company size > 50) that graduate a lead from Marketing Qualified (MQL) to Sales Qualified (SQL).',
      deliverables: ['Lead scoring point rubric (0 to 100 points)', 'SLA for sales rep outreach based on score', 'Lead retirement and recycling policy'],
      rubric: [
        { criteria: 'Scoring precision', maxPoints: 10, description: 'Points reflect genuine buying intent, not superficial vanity clicks.' },
        { criteria: 'Speed-to-lead SLA', maxPoints: 10, description: 'Enforces rapid contact for high-intent prospects within 15 minutes.' },
        { criteria: 'Pipeline hygiene', maxPoints: 5, description: 'Prevents reps from hoarding or wasting time on dead prospects.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why were the "Glengarry leads" so desperately coveted by the salesmen in Glengarry Glen Ross?',
        options: [
          'They were printed on expensive gold-leaf paper',
          'They contained contact information of qualified, high-intent individuals who had actively requested real estate investment information, unlike the cold, exhausted phonebook lists',
          'They were signed by the Governor of Illinois',
          'The leads included free Cadillac car keys'
        ],
        correctOptionIndex: 1,
        explanation: 'Qualified inbound leads with budget and intent convert at exponentially higher rates than cold, repeatedly rejected names.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'David Mamet’s play is the definitive tragedy of predatory sales culture and toxic incentive design.',
      teachingNotes: 'Compare to modern RevOps pipeline velocity equations: Velocity = (Opportunities x Win Rate x Deal Size) / Sales Cycle Length.',
      commonStudentPitfalls: ['Admiring Blake’s abusive motivational speech without realizing it destroyed the entire branch’s operational viability']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-059',
    filmTitle: 'The Pursuit of Happyness',
    releaseYear: 2006,
    tmdbMovieId: 1402,
    subject: 'Entrepreneurship and business models',
    topicTags: ['Bootstrapping', 'Human Capital', 'Opportunity Cost', 'Time Allocation'],
    lessonTitle: 'Bootstrapping Resilience: Opportunity Cost & Human Capital Allocation',
    learningObjective: 'Master time-and-motion efficiency and extreme focus when bootstrapping a venture under severe capital distress.',
    difficulty: 'Foundational',
    durationMinutes: 30,
    format: 'Case Study',
    sceneDescription: 'Chris Gardner, evicted and homeless with his young son in San Francisco, competes against 19 other interns for a single full-time stockbroker position at Dean Witter Reynolds. Having only 6 hours a day while peers have 9 (because he must race to stand in line at the homeless shelter by 5:00 PM), Gardner optimizes every second: he doesn’t hang up the phone receiver between calls to save 8 minutes a day, and drinks no water to avoid bathroom breaks.',
    sceneTimestampRef: 'Approx. 01:18:10 (Instructor verified)',
    conceptExplanation: 'When capital reserves reach absolute zero, an entrepreneur’s only remaining assets are time, cognitive focus, and human capital. Gardner’s extreme time-and-motion optimization is a masterclass in personal unit economics: eliminating micro-latencies, ruthlessly cold-calling high-net-worth pension decision-makers directly (bypassing low-tier gatekeepers), and out-executing competitors with 10x the resources.',
    framework: {
      name: 'Time-and-Motion Micro-Efficiency & High-Leverage Prospecting',
      description: 'Framework measuring return on invested time (ROIT) during high-scarcity bootstrapping.',
      keySteps: [
        'Calculate Total Productive Hours: Eliminate all administrative friction and micro-delays.',
        'Target High-Yield Anchors: Skip low-margin prospects; call the CEO directly (Walter Ribbon).',
        'Eliminate Context Switching: Maintain a single unbroken workflow state during outbound execution.',
        'Sustain Psychological Resilience: Treat daily rejection as a purely mathematical conversion funnel.'
      ],
      templateSnippet: 'Available Time: [6 hours vs 9 hours peer baseline] -> Micro-Optimization: [Keep receiver off hook = +8 min call time] -> Targeting: [Pension executives].'
    },
    discussionQuestions: [
      'How did Gardner compensate for having 33% less working time than his rival internship candidates?',
      'Why was taking the risk of calling pension executive Walter Ribbon directly superior to calling through the standard list?',
      'What are modern software founder equivalents of Gardner’s relentless time-and-motion optimization?'
    ],
    practicalAssignment: {
      title: 'Solo Founder High-Scarcity Time Allocation Audit',
      prompt: 'Scenario: You are bootstrapping a software product with only 15 hours a week while working a full-time job. Construct a strict time-allocation audit that eliminates all low-yield administrative tasks and focuses 80% of your time on customer-facing validation and core code delivery.',
      deliverables: ['Weekly 15-hour calendar time-block schedule', 'Explicit list of 5 tasks you will refuse to do', 'High-leverage outreach protocol targeting top 10 enterprise decision-makers'],
      rubric: [
        { criteria: 'Scarcity discipline', maxPoints: 10, description: 'Every allocated hour directly drives revenue or user validation.' },
        { criteria: 'Micro-latency elimination', maxPoints: 10, description: 'Eliminates busywork (polishing logos, tweaking CSS) in favor of high-yield tasks.' },
        { criteria: 'Emotional sustainability', maxPoints: 5, description: 'Realistic schedule that avoids total health burnout.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why did Chris Gardner avoid hanging up the telephone receiver between cold calls at Dean Witter?',
        options: [
          'The office phone was mechanically broken',
          'Not hanging up saved approximately 8 minutes of physical dialing latency per day, allowing him to make more calls in his limited 6-hour window',
          'The phone company charged reconnection fees per call',
          'His manager ordered him to never disconnect'
        ],
        correctOptionIndex: 1,
        explanation: 'Under extreme time constraints, eliminating tiny seconds of mechanical friction compounds into meaningful productive capacity.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Gardner went on to found Gardner Rich & Co. Highlight his realization that calling the biggest prospective accounts took the same time as calling small ones, but with 100x the payoff.',
      teachingNotes: 'Use this to teach return on invested time (ROIT) and Pareto’s 80/20 rule.',
      commonStudentPitfalls: ['Confusing busywork with productive output; Gardner focused strictly on revenue-producing conversations']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-060',
    filmTitle: 'Chocolat',
    releaseYear: 2000,
    tmdbMovieId: 392,
    subject: 'Entrepreneurship and business models',
    topicTags: ['Sensory Differentiation', 'Disrupting Local Cartels', 'Personalization', 'Behavioral Economics'],
    lessonTitle: 'Disrupting Local Cartels Through Sensory Differentiation & Customization',
    learningObjective: 'Examine how sensory product customization and empathetic customer diagnosis disrupt entrenched cultural monopolies.',
    difficulty: 'Foundational',
    durationMinutes: 25,
    format: 'Case Study',
    sceneDescription: 'Vianne Rocher arrives in a rigid, traditional French village governed by the pious, moralistic Mayor (the Comte de Reynaud). She opens a chocolaterie directly across from the church during Lent. Rather than offering a standard menu, Vianne invites customers to spin a small Mayan ceramic dial, observing their facial reactions to diagnose their unstated emotional longings, and custom-blends exotic chocolates with chili and spices.',
    sceneTimestampRef: 'Approx. 00:22:40 (Instructor verified)',
    conceptExplanation: 'Monopolies and conservative cartels maintain control through rigid conformity, standardized pricing, and moralistic shame. Challengers succeed not by attacking the incumbent head-on, but by offering deeply personalized, sensory experiences that satisfy suppressed customer desires. Vianne’s chocolaterie succeeds through experiential personalization: turning a commodity food item into an emotional, therapeutic indulgence.',
    framework: {
      name: 'Experiential Customization & Incumbent Bypass Model',
      description: 'Framework measuring personalized sensory diagnosis against rigid standardized incumbent offerings.',
      keySteps: [
        'Identify Entrenched Cultural Taboo / Cartel Restriction (Lenten fasting, rigid social conformity).',
        'Create Sensory Delight Contrast: Deliver an experience vastly richer than bland incumbent commodities.',
        'Deploy Empathetic Customer Diagnosis: Observe subtle non-verbal cues to recommend personalized configurations.',
        'Build Inclusive Safe Havens: Welcoming marginalized community members (Armande, Josephine) creates passionate local advocates.'
      ],
      templateSnippet: 'Incumbent Offer: [Standardized, moralistic restriction] -> Challenger Offer: [Bespoke sensory personalization] -> Community Payoff: [Unshakeable emotional loyalty].'
    },
    discussionQuestions: [
      'Why did the Comte de Reynaud view Vianne’s chocolate shop as an existential threat to his town’s social order?',
      'How does Vianne’s interactive "guessing wheel" mirror modern algorithmic recommendation engines and personalized onboarding?',
      'What are software equivalents of breaking through conservative enterprise procurement through delightful sensory design?'
    ],
    practicalAssignment: {
      title: 'Personalized Onboarding Recommendation Flow',
      prompt: 'Select a product category currently dominated by rigid, one-size-fits-all incumbents (e.g. retirement investment planning, workplace mental health, specialty nutrition). Design an empathetic, interactive 3-step diagnostic onboarding flow that personalizes the product experience based on emotional and behavioral cues.',
      deliverables: ['3-step diagnostic onboarding wireframe/flowchart', 'Personalization logic engine rules', 'Sensory delight touchpoint specification'],
      rubric: [
        { criteria: 'Diagnostic empathy', maxPoints: 10, description: 'Diagnoses underlying human friction rather than asking dry survey questions.' },
        { criteria: 'Personalization value', maxPoints: 10, description: 'Recommended solution delivers immediate, tangible differentiation.' },
        { criteria: 'Experience elegance', maxPoints: 5, description: 'Feels welcoming, delightful, and non-judgmental.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'How did Vianne determine which chocolate formulation to recommend to each individual villager?',
        options: [
          'She reviewed their confidential bank statements',
          'She had them spin a decorative Mayan dial and observed their unconscious facial reactions and non-verbal cues to diagnose their latent tastes and emotional longings',
          'She handed them a 50-question printed survey',
          'She gave everyone identical dark chocolate bars'
        ],
        correctOptionIndex: 1,
        explanation: 'Vianne practiced empathetic observational diagnosis: using sensory prompts to bypass conscious social defense mechanisms.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Highlight the climax: the Comte breaks into her shop to destroy the window display, accidentally tastes the chocolate, and collapses in weeping sensory joy.',
      teachingNotes: 'Connect this to how challenger fintechs (Monzo, Revolut) broke stodgy banking cartels through delightful UX and instant micro-gratification.',
      commonStudentPitfalls: ['Treating the story as mere fairy-tale romance rather than analyzing the market disruption of an entrenched monopoly']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-061',
    filmTitle: 'Flash of Genius',
    releaseYear: 2008,
    tmdbMovieId: 15301,
    subject: 'Entrepreneurship and business models',
    topicTags: ['Patent Infringement', 'Solo Inventor', 'IP Hold-Up', 'Trade Secret Misappropriation'],
    lessonTitle: 'Independent IP Theft: The Intermittent Windshield Wiper Patent Battle',
    learningObjective: 'Examine corporate intellectual property theft, reverse-engineering, and the legal battle to defend patent validity against corporate giants.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Case Study',
    sceneDescription: 'College professor and inventor Robert Kearns demonstrates his novel intermittent windshield wiper to Ford Motor Company executives. Ford engineers had spent millions trying to build an intermittent wiper and failed. Months later, Ford abruptly cancels partnership talks with Kearns, claims the technology is unpatentable obvious prior art, and introduces Kearns’ exact capacitor-transistor circuit design into all Ford production vehicles.',
    sceneTimestampRef: 'Approx. 00:32:10 (Instructor verified)',
    conceptExplanation: 'Large corporations frequently engage in "efficient infringement": calculating that stealing an independent inventor’s patent and dragging them through decades of federal litigation costs less than paying licensing royalties. Kearns’ historic legal battle proves that a non-obvious combination of existing standard components (capacitors, resistors) constitutes genuine patentable novelty, but defending it requires absorbing catastrophic personal and financial toll.',
    framework: {
      name: 'Patent Non-Obviousness & Non-Disclosure Agreement (NDA) Enforcement',
      description: 'Legal framework establishing patent validity under 35 U.S.C. 103 and protecting confidential trade disclosures.',
      keySteps: [
        'Establish Non-Obvious Combination: Prove that combining known electrical components produces unexpected synergistic results.',
        'Execute Ironclad Bi-Directional NDAs: Never demonstrate hardware prototypes without signed confidentiality and non-use covenants.',
        'Document Clean Prior Art Chains: Preserve contemporaneous lab notebooks with witnessed dates and signatures.',
        'Anticipate "Efficient Infringement" Playbooks: Prepare legal litigation financing before pitching multi-billion dollar incumbents.'
      ],
      templateSnippet: 'Incumbent Defense: ["Resistors and capacitors already existed"] -> Court Ruling: ["Words in a dictionary already exist, but combining them into a novel poem is copyrightable invention"].'
    },
    discussionQuestions: [
      'Why do massive corporations calculate that infringing an independent patent is cheaper than signing a licensing contract?',
      'How did Kearns convince the jury that combining off-the-shelf resistors and capacitors was a patentable "flash of genius"?',
      'What are modern software equivalents of corporate giants reverse-engineering and incorporating indie startup features (e.g. Apple "sherlocking" third-party apps)?'
    ],
    practicalAssignment: {
      title: 'Startup IP Disclosure Safeguard Policy',
      prompt: 'Scenario: Your hardware/software startup is invited to demonstrate proprietary predictive algorithms to a massive enterprise incumbent. Draft an IP Disclosure Safeguard Policy specifying what technical details may be demonstrated, what must remain black-box, and the mandatory NDA protective clauses required before the meeting.',
      deliverables: ['Pre-meeting IP disclosure risk checklist', 'Black-box demonstration protocol', 'Non-use and reverse-engineering prohibition clause'],
      rubric: [
        { criteria: 'Trade secret protection', maxPoints: 10, description: 'Demonstrates functional capability without revealing underlying secret sauce.' },
        { criteria: 'Legal enforceability', maxPoints: 10, description: 'Clauses clearly forbid reverse-engineering and internal derivative development.' },
        { criteria: 'Commercial realism', maxPoints: 5, description: 'Policy is practical enough to allow sales demos to proceed.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What was Robert Kearns’ famous courtroom analogy explaining why his intermittent wiper was patentable even though it used standard resistors and transistors?',
        options: [
          'He compared it to a recipe for baking bread',
          'He compared it to Charles Dickens writing "A Tale of Two Cities": Dickens didn’t invent words, but his specific combination of words created an original work of genius',
          'He compared it to a winning hand in poker',
          'He claimed the electrical parts were imported from outer space'
        ],
        correctOptionIndex: 1,
        explanation: 'Kearns argued that nearly all inventions combine known elements; the synergistic novelty lies in the non-obvious combination.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Kearns spent 30 years fighting Ford and Chrysler, eventually winning over \$30 million in damages. Emphasize the emotional cost of litigation.',
      teachingNotes: 'Compare Kearns’ case to contemporary tech patent wars (e.g. Masimo vs Apple over pulse oximetry sensors in the Apple Watch).',
      commonStudentPitfalls: ['Assuming an NDA guarantees security without realizing litigation against a corporate giant takes millions of dollars']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-062',
    filmTitle: 'Burnt',
    releaseYear: 2015,
    tmdbMovieId: 258480,
    subject: 'Entrepreneurship and business models',
    topicTags: ['Brigade System', 'Unit Economics', 'Operational Excellence', 'Quality Control'],
    lessonTitle: 'The Kitchen Brigade System: Unit Economics of Fine Dining Operations',
    learningObjective: 'Analyze the Brigade de Cuisine operational structure and unit economic margin management in high-velocity, high-quality production.',
    difficulty: 'Intermediate',
    durationMinutes: 30,
    format: 'Case Study',
    sceneDescription: 'Chef Adam Jones attempts to earn his third Michelin star at the Langham Hotel in London. During a dinner rush, Jones enforces brutal discipline on his kitchen brigade: timing sauce reductions to the second, throwing out entire pans of over-cooked halibut, and screaming at chefs for 1-millimeter plating misalignments, causing ticket times to crash and the dining room to stall.',
    sceneTimestampRef: 'Approx. 00:36:40 (Instructor verified)',
    conceptExplanation: 'Fine dining operations operate on razor-thin net margins (often 3-5%) burdened by exorbitant ingredient costs, high labor intensity, and zero tolerance for error. Auguste Escoffier’s "Brigade de Cuisine" is the original modular agile production line: separating meat (rôtisseur), fish (poissonnier), sauces (saucier), and pastry (pâtissier). When leadership manages purely through toxic intimidation rather than psychological safety, scrap rates multiply and overall throughput collapses.',
    framework: {
      name: 'Escoffier Brigade System & High-Precision Throughput Matrix',
      description: 'Framework measuring station specialization, handoff latency, and scrap-rate cost impact.',
      keySteps: [
        'Deconstruct Assembly into Specialized Stations (Saucier, Poissonnier, Entremetier).',
        'Establish Real-Time Lead-Time Synchronization: The fish and sauce must finish at the identical second.',
        'Calculate Scrap-Rate Cost Multiplication: One thrown-out plate burns 3 hours of kitchen labor and margin.',
        'Transition from Intimidation to Synchronized Flow: Ergonomic trust and rhythm outperform abusive micro-management.'
      ],
      templateSnippet: 'Throughput Bottleneck: [Saucier delay of 45s] -> Cascading Scrap: [Halibut over-cooks on pass] -> Unit Cost Surge: [+42% food waste].'
    },
    discussionQuestions: [
      'Why do high-end service businesses with stellar reputations often struggle with catastrophic financial failure and bankruptcy?',
      'How did Adam Jones’ toxic screaming during service increase food waste and plate rejection rates?',
      'What are software engineering analogies for the Kitchen Brigade system and the "Expediter" at the pass?'
    ],
    practicalAssignment: {
      title: 'High-Precision Service Station & Unit Economic Audit',
      prompt: 'Select a high-touch, low-margin service business (e.g. specialty coffee chain, boutique digital agency, high-end medical clinic). Map out the operational station dependencies, calculate scrap/re-work cost per failure, and design a synchronized handoff protocol that reduces cycle times without degrading quality.',
      deliverables: ['Station handoff dependency flowchart', 'Cost-of-scrap unit economic calculation', 'Psychological safety and synchronization protocol'],
      rubric: [
        { criteria: 'Operational synchronization', maxPoints: 10, description: 'Handoffs are timed to eliminate queue bottlenecks.' },
        { criteria: 'Scrap-rate analysis', maxPoints: 10, description: 'Accurately quantifies the true financial cost of re-work.' },
        { criteria: 'Culture design', maxPoints: 5, description: 'Replaces toxic pressure with structured, predictable communication rails.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What is the primary operational function of the "Expediter" (Aboyeur) in Escoffier’s Kitchen Brigade system?',
        options: [
          'To wash dishes and sweep floors',
          'To stand at the pass, coordinate timing across all specialized cooking stations, inspect finished plates for quality, and ensure the entire table’s order arrives together',
          'To negotiate food wholesale prices with suppliers',
          'To pour wine for VIP guests'
        ],
        correctOptionIndex: 1,
        explanation: 'The expediter acts as the chief systems integrator and quality gatekeeper, synchronizing dependent tasks across disparate stations.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Jones only succeeds when he learns to trust his sous chef Helene and stops trying to cook every dish himself. Delegation beats solo heroic tyranny.',
      teachingNotes: 'Compare the expediter at the pass to a Release Train Engineer in Agile or an air traffic controller.',
      commonStudentPitfalls: ['Glamorizing abusive chef behavior as "passion" rather than analyzing it as catastrophic operational inefficiency']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },

  // ==========================================
  // SUBJECT 8: Finance and unit economics (lms-063..lms-071)
  // ==========================================
  {
    id: 'lms-063',
    filmTitle: 'The Big Short',
    releaseYear: 2015,
    tmdbMovieId: 318846,
    subject: 'Finance and unit economics',
    topicTags: ['Credit Default Swaps', 'Asymmetric Risk', 'Securitization', 'Short Selling'],
    lessonTitle: 'Credit Default Swaps (CDS): The Asymmetric Risk-Reward Profile',
    learningObjective: 'Master the mechanics of synthetic derivatives, credit default swaps (CDS), and asymmetric risk-reward payoffs.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Framework Deep Dive',
    sceneDescription: 'Eccentric hedge fund manager Dr. Michael Burry walks into Goldman Sachs and Deutsche Bank requesting a custom synthetic instrument: Credit Default Swaps on subprime mortgage bonds. The investment bankers laugh at him, believing mortgage bonds are bulletproof, and eagerly sell him hundreds of millions in CDS contracts, viewing his monthly premium payments as free money.',
    sceneTimestampRef: 'Approx. 00:14:15 (Instructor verified)',
    conceptExplanation: 'A Credit Default Swap (CDS) is financial insurance against debt default. The buyer pays a modest ongoing premium (e.g. 1-2% annually); if the underlying bond defaults, the seller must pay the full par value (100%). Burry structured an "asymmetric bet": finite, capped downside (the monthly insurance premiums) against mathematically explosive upside (a 20x to 50x payout when the housing market cracked).',
    framework: {
      name: 'Asymmetric Payoff & Convexity Modeling Matrix',
      description: 'Framework evaluating investment structures where potential upside vastly exceeds maximum possible loss.',
      keySteps: [
        'Calculate Maximum Downside Exposure: Capped insurance premium / upfront option premium.',
        'Verify Structural Catalysts: Identify non-correlated macro factors that will trigger default (Adjustable Rate Mortgage resets in 2007).',
        'Model Carrying Costs & Liquidity Runway: Ensure fund cash reserves can survive negative cash drag while waiting for payoff.',
        'Evaluate Counterparty Solvency: Will the institution on the other side of the contract remain solvent to pay the claim?'
      ],
      templateSnippet: 'Downside: [Fixed 1.5% annual premium burn] vs Upside: [100% principal payout on \$1.3B bond pool] -> Asymmetric Ratio: [35:1].'
    },
    discussionQuestions: [
      'Why were major Wall Street investment banks so eager to sell CDS protection on mortgage bonds to Michael Burry?',
      'How does "carrying cost" (the monthly premium burn) create immense psychological and LP pressure on short-sellers?',
      'What happens to a financial derivative contract if the counterparty selling the insurance (like AIG) goes bankrupt?'
    ],
    practicalAssignment: {
      title: 'Asymmetric Option Payoff Modeling & Runway Analysis',
      prompt: 'Scenario: You run a corporate venture fund. Design an asymmetric hedging strategy or strategic option to protect your enterprise against an impending technological obsolescence (e.g. quantum decryption cracking your cybersecurity protocols). Model the premium carrying costs and payoff triggers.',
      deliverables: ['Asymmetric option payoff model (Downside vs Upside)', 'Carrying cost burn schedule over 3 years', 'Counterparty solvency and settlement risk mitigation plan'],
      rubric: [
        { criteria: 'Asymmetry rigor', maxPoints: 10, description: 'Demonstrates mathematically capped downside with non-linear upside.' },
        { criteria: 'Carrying cost feasibility', maxPoints: 10, description: 'Ensures the ongoing premium does not drain operational cash.' },
        { criteria: 'Counterparty risk evaluation', maxPoints: 5, description: 'Directly addresses systemic settlement and default risks.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What constitutes an "asymmetric risk-reward profile" in investment finance?',
        options: [
          'An investment where the chances of winning and losing are exactly 50/50',
          'A structure where the potential upside is exponentially larger than the strictly limited, capped downside loss',
          'A transaction where all interest payments are tax-exempt',
          'A mortgage backed exclusively by commercial real estate'
        ],
        correctOptionIndex: 1,
        explanation: 'Asymmetry means the potential profit vastly outweighs the maximum possible loss, creating positive expected value under low probability.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Burry’s investors tried to sue him and pull their money before the housing crash; being early and holding illiquid short positions looks identical to being wrong.',
      teachingNotes: 'Compare CDS to venture capital power-law investing: losing 1x on 9 investments but making 50x on 1 winner.',
      commonStudentPitfalls: ['Ignoring the timing risk: if Burry had run out of cash 6 months earlier, he would have gone bankrupt before the payoff']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-064',
    filmTitle: 'Margin Call',
    releaseYear: 2011,
    tmdbMovieId: 50348,
    subject: 'Finance and unit economics',
    topicTags: ['Fire Sale Liquidity', 'First-Mover Advantage', 'Market Illiquidity', 'Reputational Capital'],
    lessonTitle: 'Fire Sale Liquidity: Being First to Clear When the Market Turns Illiquid',
    learningObjective: 'Examine the brutal game theory of liquidity fire-sales: why being first to liquidate toxic assets survives, while destroying market reputation.',
    difficulty: 'Advanced',
    durationMinutes: 45,
    format: 'Executive Simulation',
    sceneDescription: 'CEO John Tuld addresses his executive committee at 2:00 AM on the 43rd floor. Looking down over Manhattan, Tuld declares: "There are three ways to make a living in this business: be first, be smarter, or cheat. Now, I don’t cheat, and although I like to think we have some pretty smart people here, it sure is a hell of a lot easier to just be first." Tuld orders the firm to dump all toxic mortgage securities starting at 9:00 AM before the rest of the Street realizes they are worthless.',
    sceneTimestampRef: 'Approx. 00:54:15 (Instructor verified)',
    conceptExplanation: 'When a market asset class faces structural collapse and liquidity evaporation, traditional holding strategies are suicidal. Tuld understands the brutal reality of market illiquidity: the first firm out the door takes a modest haircut (10-15%); the second firm takes a 40% haircut; the last firm goes bankrupt (Lehman Brothers). Dumping toxic assets at any price preserves survival cash, but permanently burns counterparty trust and reputational capital.',
    framework: {
      name: 'Liquidity Cascade & Fire-Sale Run Model',
      description: 'Game-theoretic model evaluating the prisoner’s dilemma of asset liquidation in collapsing markets.',
      keySteps: [
        'Recognize Market Evaporation Point: When bid-ask spreads blow out, the market is no longer pricing risk; it is dying.',
        'Execute Preemptive Clearing (Be First): Liquidate inventory immediately at market open, discounting aggressively to ensure 100% clearance.',
        'Incentivize Trading Floor Execution: Offer astronomical trader bonuses (e.g. \$1.4M for dumping \$100M) to overcome moral hesitation.',
        'Calculate Post-Fire-Sale Reputational Cost: Quantify the permanent damage to counterparty relationships.'
      ],
      templateSnippet: 'Liquidate at 9:00 AM: [Sell @ \$0.85 on dollar -> Capital intact] vs Hold until 2:00 PM: [Bids drop to \$0.20 -> Firm insolvent].'
    },
    discussionQuestions: [
      'Why did John Tuld decide to destroy his firm’s relationship with every trading partner on Wall Street in a single morning?',
      'How does the Prisoner’s Dilemma explain why financial panics unfold with such terrifying speed once the first firm sells?',
      'What are corporate tech equivalents of a "fire sale" when a core product line or token ecosystem collapses?'
    ],
    practicalAssignment: {
      title: 'Emergency Liquidation & Counterparty Risk Simulation',
      prompt: 'Scenario: Your crypto treasury or enterprise credit portfolio holds \$50M in collateral that is decaying by 5% every hour. As CFO, formulate an emergency liquidation plan. Specify your execution timeline, discount tiers, trader incentive compensation, and public statement.',
      deliverables: ['Hour-by-hour emergency liquidation execution timeline', 'Discount pricing waterfall schedule', 'Counterparty communication and legal disclosure memo'],
      rubric: [
        { criteria: 'Decisiveness and speed', maxPoints: 10, description: 'Clears inventory before market freezes entirely.' },
        { criteria: 'Trader incentive design', maxPoints: 10, description: 'Aligns execution compensation directly with speed and volume dumped.' },
        { criteria: 'Reputational containment', maxPoints: 5, description: 'Manages post-event regulatory and partner relationships.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'In John Tuld’s philosophy in Margin Call, why was "being first" superior to "being smarter"?',
        options: [
          'Being first required less software engineering talent',
          'When an asset class turns illiquid, the first seller captures the remaining buyers before prices crater to zero, guaranteeing firm survival regardless of intelligence',
          'Early sales are exempt from SEC capital gain taxes',
          'The Federal Reserve reimburses all early morning trades'
        ],
        correctOptionIndex: 1,
        explanation: 'In illiquid panics, buyers vanish rapidly; only the first seller can dump positions before the market discovers the collapse.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Tuld’s quote: "If you’re first out the door, that’s not called panicking." Contrast Sam Rogers’ moral revulsion with Tuld’s cold Darwinian survival instinct.',
      teachingNotes: 'Compare to Lehman Brothers’ failure to raise capital vs Goldman Sachs and Morgan Stanley converting to bank holding companies.',
      commonStudentPitfalls: ['Assuming that holding onto assets until market recovery is always the noble choice; in illiquid leverage, you die before recovery']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-065',
    filmTitle: 'Wall Street',
    releaseYear: 1987,
    tmdbMovieId: 10673,
    subject: 'Finance and unit economics',
    topicTags: ['Leveraged Buyouts', 'Asset Stripping', 'Pension Funds', 'Shareholder Value'],
    lessonTitle: 'Leveraged Buyouts (LBOs) and Asset Stripping Economics: The Blue Star Raid',
    learningObjective: 'Analyze the financial mechanics of Leveraged Buyouts (LBOs), junk-bond debt loading, and asset-stripping arbitrage.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Case Study',
    sceneDescription: 'Corporate raider Gordon Gekko convinces young stockbroker Bud Fox to help him acquire Blue Star Airlines, promising to expand the carrier and negotiate concessions with the pilots’ union (led by Bud’s father Carl Fox). Once the stock is secured, Bud discovers Gekko’s secret operational plan: dismantle the airline, fire the workers, sell off the hangars and plane fleet for scrap, and plunder the \$80 million overfunded corporate pension fund.',
    sceneTimestampRef: 'Approx. 01:28:15 (Instructor verified)',
    conceptExplanation: 'A Leveraged Buyout (LBO) uses high-yield debt (junk bonds) secured by the target company’s own assets to fund the acquisition. In asset stripping, the raider discovers that the "sum of the parts" (plane fleet, real estate hangars, overfunded pension assets) is worth significantly more in liquidation than the company’s enterprise valuation as an ongoing operating entity. Financial engineering exploits the delta between operating value and liquidation salvage value.',
    framework: {
      name: 'Sum-of-the-Parts (SOTP) Liquidation Arbitrage Model',
      description: 'Financial valuation framework calculating whether dismantling a firm yields higher cash than continuing operations.',
      keySteps: [
        'Calculate Enterprise Operating Value: Market Cap + Debt - Cash (Discounted future cash flows).',
        'Appraise Discrete Asset Liquidation Values (Fleet, real estate, slots, pension surplus).',
        'Model LBO Debt Service Load: Determine if operating cash flow can service 80% leverage debt.',
        'Execute Arbitrage Strategy: Liquidate discrete assets to repay acquisition debt and pocket the residual equity dividend.'
      ],
      templateSnippet: 'Operating Market Value: [\$150M] vs Liquidation SOTP: [Fleet: \$120M + Real Estate: \$60M + Pension Surplus: \$80M = \$260M] -> Raider Profit: [\$110M].'
    },
    discussionQuestions: [
      'Why do financial raiders target mature, cash-generating companies with overfunded pension funds?',
      'How does loading a company with 80-90% debt alter its ability to survive an economic recession or fuel price spike?',
      'What are the ethical responsibilities of financial engineers toward long-tenured employees whose pensions are plundered?'
    ],
    practicalAssignment: {
      title: 'Sum-of-the-Parts (SOTP) Valuation & LBO Feasibility Model',
      prompt: 'Select an undervalued public industrial or retail corporation. Build a Sum-of-the-Parts (SOTP) valuation model breaking down its distinct divisions and physical real estate assets. Evaluate whether a private equity sponsor could execute a profitable LBO and asset-strip strategy.',
      deliverables: ['SOTP asset breakdown and valuation table', 'LBO debt capitalization structure (Equity vs Senior Debt vs Subordinated)', 'Operating turnaround vs Liquidation scenario analysis'],
      rubric: [
        { criteria: 'Valuation rigor', maxPoints: 10, description: 'Accurately values physical assets, liabilities, and pension obligations.' },
        { criteria: 'Debt service feasibility', maxPoints: 10, description: 'Tests interest coverage ratios under 3 economic scenarios.' },
        { criteria: 'Strategic depth', maxPoints: 5, description: 'Compares value creation via operational improvement vs mere financial engineering.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'In an asset-stripping Leveraged Buyout (LBO), how does a corporate raider typically fund the acquisition?',
        options: [
          'By using 100% of their own personal cash reserves',
          'By borrowing heavily using high-yield junk bonds secured by the target company’s own physical assets and future cash flows',
          'Through municipal government infrastructure grants',
          'By selling advertising sponsorships on television'
        ],
        correctOptionIndex: 1,
        explanation: 'In an LBO, the debt used to acquire the firm is placed onto the target company’s balance sheet, paid down using its own cash flow or asset sales.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Examine Gekko’s "Greed is good" Teldar Paper speech: he attacks corporate management for owning zero stock and wasting corporate jet budgets.',
      teachingNotes: 'Compare Gekko to real 1980s raiders like Carl Icahn, T. Boone Pickens, and Michael Milken’s Drexel Burnham Lambert.',
      commonStudentPitfalls: ['Ignoring that some LBO targets genuinely had bloated, incompetent corporate bureaucracies that destroyed shareholder capital']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-066',
    filmTitle: 'Too Big to Fail',
    releaseYear: 2011,
    tmdbMovieId: 64188,
    subject: 'Finance and unit economics',
    topicTags: ['Systemic Contagion', 'TARP Bailouts', 'Equity Warrants', 'Interbank Lending'],
    lessonTitle: 'Systemic Contagion & Capital Injections: The TARP Equity Warrants',
    learningObjective: 'Understand how systemic counterparty contagion operates across interbank lending and how government equity injections restore market liquidity.',
    difficulty: 'Advanced',
    durationMinutes: 45,
    format: 'Executive Simulation',
    sceneDescription: 'Treasury Secretary Hank Paulson and Fed Chairman Ben Bernanke summon the CEOs of the nine largest Wall Street banks (including Jamie Dimon, Lloyd Blankfein, and John Thain) into a conference room at the Treasury Department. Paulson informs them that under the Troubled Asset Relief Program (TARP), the US government is forcing all nine banks to accept \$125 billion in direct preferred stock capital injections to prevent a catastrophic run on the banking system.',
    sceneTimestampRef: 'Approx. 01:14:20 (Instructor verified)',
    conceptExplanation: 'In interconnected financial networks, insolvency at one node (Lehman Brothers) triggers systemic contagion: interbank lending freezes because banks do not know which counterparty is holding toxic assets. Paulson’s mandatory capital injection illustrates systemic game theory: healthy banks (JPMorgan) were forced to take capital alongside weak banks (Citigroup) to eliminate the "stigmatization signaling" that would cause depositors to run on the weaker institutions.',
    framework: {
      name: 'Systemic Interbank Contagion & Capital Recapitalization Model',
      description: 'Framework measuring network interconnectedness, counterparty exposure, and non-stigmatized capital injection.',
      keySteps: [
        'Map Network Interconnectedness: Track gross notional derivatives and short-term repo funding lines.',
        'Measure Contagion Velocity: Monitor TED spread and interbank lending freeze rates.',
        'Eliminate Signaling Stigmatization: Mandate collective recapitalization across all tier-1 institutions simultaneously.',
        'Structure Government Equity Upside: Require non-voting preferred stock plus equity warrants to protect taxpayers.'
      ],
      templateSnippet: 'Stigmatization Trap: [If only weak banks take aid -> Depositors panic] -> Mandatory Collective Aid: [All 9 banks take \$125B simultaneously -> Confidence restored].'
    },
    discussionQuestions: [
      'Why did Hank Paulson insist that healthy banks like JPMorgan and Wells Fargo accept billions in government capital that they didn’t want?',
      'How does the TED spread (difference between interbank lending rates and risk-free Treasury bills) measure panic in the financial system?',
      'Did TARP create an irreversible moral hazard by establishing that large financial institutions will always be bailed out?'
    ],
    practicalAssignment: {
      title: 'Systemic Crisis Liquidity Intervention Plan',
      prompt: 'Scenario: A critical ecosystem of 12 multi-sided platforms faces catastrophic failure after the collapse of their shared clearinghouse. As regulatory crisis czar, design a mandatory liquidity stabilization facility. Formulate the capital injection terms, equity warrants, and executive compensation restrictions.',
      deliverables: ['Mandatory collective liquidity injection term sheet', 'Equity warrant structure and taxpayer return model', 'Executive compensation clawback and moral hazard restrictions'],
      rubric: [
        { criteria: 'Systemic stabilization', maxPoints: 10, description: 'Restores liquidity while preventing counterparty bank runs.' },
        { criteria: 'Taxpayer / Sponsor protection', maxPoints: 10, description: 'Warrants ensure public captures healthy upside when recovery occurs.' },
        { criteria: 'Moral hazard governance', maxPoints: 5, description: 'Restricts executive bonuses and share buybacks during stabilization.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why did the US Treasury force all nine major banks to accept TARP capital simultaneously in October 2008?',
        options: [
          'To convert the United States into a socialist economy',
          'To avoid "stigmatizing" the weaker banks; if only distressed banks took capital, the public would immediately withdraw funds from them, accelerating bank runs',
          'To spend the Treasury’s annual budget before the presidential election',
          'The Federal Reserve lacked authority to send wire transfers to individual banks'
        ],
        correctOptionIndex: 1,
        explanation: 'Mandatory collective acceptance eliminated market signaling: investors could not single out and destroy weak banks because all banks took funds.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'TARP actually returned a net profit of over \$15 billion to US taxpayers through dividends, warrant sales, and repayments, despite fierce public backlash.',
      teachingNotes: 'Compare TARP to the Bank Term Funding Program (BTFP) created during the Silicon Valley Bank failure of 2023.',
      commonStudentPitfalls: ['Confusing liquidity crises (running out of cash today) with insolvency crises (liabilities exceeding assets permanently)']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-067',
    filmTitle: 'Rogue Trader',
    releaseYear: 1999,
    tmdbMovieId: 10986,
    subject: 'Finance and unit economics',
    topicTags: ['Rogue Trading', 'Internal Controls', 'Derivatives Arbitrage', 'Error Accounts'],
    lessonTitle: 'Unhedged Derivatives and Concealed Losses: The Barings Error Account 88888',
    learningObjective: 'Analyze internal control breakdowns, segregation of duties, and loss-concealment spirals in futures and options trading.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Case Study',
    sceneDescription: 'Nick Leeson, general manager of Barings Bank’s futures operation in Singapore, executes massive unhedged futures bets on the Nikkei 225. Whenever his junior traders make mistakes or his own market bets lose money, Leeson exploits a catastrophic lack of internal oversight: he controls both the front-office trading desk and the back-office settlement operations, allowing him to hide hundreds of millions in losses inside an un-monitored error account (88888).',
    sceneTimestampRef: 'Approx. 00:38:20 (Instructor verified)',
    conceptExplanation: 'Barings Bank—the 233-year-old financial institution that financed the Napoleonic Wars and held the accounts of Queen Victoria—was brought down by a single 28-year-old trader in Singapore. Leeson’s disaster is the textbook case study in the breakdown of internal corporate governance: violating the "Segregation of Duties." When the individual executing high-risk transactions also controls the accounting reconciliations, catastrophic fraud is inevitable.',
    framework: {
      name: 'Segregation of Duties & Fraud Triangle Governance',
      description: 'Framework enforcing institutional separation between execution, settlement, and compliance auditing.',
      keySteps: [
        'Mandate Strict Segregation of Duties: Never allow the trading desk to manage or approve settlement ledgers.',
        'Eliminate Un-Audited Error Accounts: Institute daily automated reconciliation of suspense and error accounts.',
        'Track Hidden Margin Calls: Audit external exchange margin calls directly from third-party clearinghouses.',
        'Address the Loss-Chasing Gambler’s Fallacy: Enforce hard stop-loss liquidations that cannot be overridden by desk managers.'
      ],
      templateSnippet: 'Control Breach: [Trader manages front desk + back office] -> Fraud Mechanism: [Conceals \$1.4B losses in Account 88888] -> Outcome: [Collapse of 233-year-old bank].'
    },
    discussionQuestions: [
      'Why did Barings senior executives in London continue sending hundreds of millions in margin cash to Leeson without asking for trade details?',
      'How does the cognitive bias of "loss chasing" (doubling down on losing bets to break even) drive rogue traders into financial ruin?',
      'What are software engineering and IT equivalents of violating the "Segregation of Duties" principle?'
    ],
    practicalAssignment: {
      title: 'Internal Financial Controls & Fraud Prevention Audit',
      prompt: 'Scenario: Your fintech startup processes \$100M monthly in crypto or fiat payments. Audit your operational workflow for Segregation of Duties vulnerabilities. Identify 2 potential points where an employee could conceal transaction errors and design automated dual-key authorization controls.',
      deliverables: ['Segregation of duties workflow diagram', 'Automated error account reconciliation policy', 'Multi-signature dual-authorization control specification'],
      rubric: [
        { criteria: 'Vulnerability identification', maxPoints: 10, description: 'Pinpoints single-points-of-failure where execution and audit overlap.' },
        { criteria: 'Dual-key control logic', maxPoints: 10, description: 'Mandates independent approval for all balance write-offs or manual transfers.' },
        { criteria: 'Third-party reconciliation', maxPoints: 5, description: 'Reconciles directly against external bank/clearinghouse APIs.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What was the fatal operational governance failure that allowed Nick Leeson to destroy Barings Bank single-handedly?',
        options: [
          'Barings lacked internet connectivity in Singapore',
          'Leeson was appointed head of both the front-office trading desk and the back-office settlement operations, allowing him to hide losses and report fake profits without independent verification',
          'The Bank of England ordered all British banks to speculate on Japanese futures',
          'Barings used paper trading ledgers instead of computers'
        ],
        correctOptionIndex: 1,
        explanation: 'Failing to separate front-office trading from back-office reconciliation allowed Leeson to doctor accounts and settle his own fraudulent trades.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Leeson’s losses reached £827 million (\$1.4 billion), twice Barings’ available capital. The bank was sold to ING for £1.00.',
      teachingNotes: 'Compare to contemporary crypto collapses (FTX’s lack of an independent CFO or accounting board).',
      commonStudentPitfalls: ['Viewing Leeson as an isolated villain rather than analyzing Barings London leadership’s willful blindness because they wanted his fake bonuses']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-068',
    filmTitle: 'Inside Job',
    releaseYear: 2010,
    tmdbMovieId: 44048,
    subject: 'Finance and unit economics',
    topicTags: ['Principal-Agent Problem', 'Incentive Alignment', 'Securitization Food Chain', 'Moral Hazard'],
    lessonTitle: 'Agency Conflict and Incentive Mismatch in the Securitization Food Chain',
    learningObjective: 'Examine the Principal-Agent problem and asymmetric incentive structures across the financial securitization food chain.',
    difficulty: 'Advanced',
    durationMinutes: 40,
    format: 'Case Study',
    sceneDescription: 'Director Charles Ferguson interviews academic economists, Wall Street executives, and credit rating agency officials. The documentary deconstructs the "Securitization Food Chain": local mortgage brokers wrote predatory loans because they immediately sold them to investment banks; investment banks bundled them into CDOs and sold them to pension funds; rating agencies gave them AAA ratings because they were paid by the banks issuing them; and executives collected cash bonuses based on short-term volume with zero clawbacks when the bonds blew up.',
    sceneTimestampRef: 'Approx. 00:21:40 (Instructor verified)',
    conceptExplanation: 'The 2008 financial crisis was the ultimate manifestation of the Principal-Agent Problem. In traditional banking, the lender holds the loan to maturity and absorbs the risk of default, creating strong underwriting discipline. In the "Originate-to-Distribute" securitization model, every intermediary collects an upfront transaction fee and passes the default risk down the chain to someone else. When short-term incentives reward volume over long-term solvency, systemic moral hazard guarantees collapse.',
    framework: {
      name: 'The Principal-Agent Problem & Asymmetric Fee Alignment Matrix',
      description: 'Framework mapping incentive mismatches and moral hazard across multi-layered value chains.',
      keySteps: [
        'Map Value Chain Intermediaries: Originator -> Aggregator -> Rating Agency -> Institutional Investor.',
        'Analyze Fee Structures: Are fees collected upfront on transaction volume, or tied to long-term performance?',
        'Identify Information Asymmetry: Does the seller possess material risk data that the buyer cannot verify?',
        'Implement Mandatory Risk Retention (Skin in the Game): Enforce laws requiring originators to retain 5% of all securitized assets.'
      ],
      templateSnippet: 'Traditional Model: [Lender retains loan = High underwriting rigor] vs Originate-to-Distribute: [Upfront fee + Risk offloaded = Toxic loan proliferation].'
    },
    discussionQuestions: [
      'Why did credit rating agencies like Moody’s and S&P assign AAA ratings to toxic subprime CDOs?',
      'How does an upfront cash bonus structure without clawback provisions incentivize executives to take existential corporate risks?',
      'What are modern software and platform equivalents of the "Originate-to-Distribute" moral hazard model?'
    ],
    practicalAssignment: {
      title: 'Incentive Alignment & Clawback Policy Design',
      prompt: 'Scenario: Your fintech marketplace connects retail investors with alternative debt investments. Formulate an executive compensation and partner incentive framework that eliminates Principal-Agent conflicts. Include mandatory risk-retention ("skin in the game") and 3-year performance clawback clauses.',
      deliverables: ['Stakeholder incentive alignment matrix', 'Executive compensation clawback policy specification', 'Mandatory platform risk-retention requirement'],
      rubric: [
        { criteria: 'Agency conflict resolution', maxPoints: 10, description: 'Directly aligns originator compensation with 36-month loan performance.' },
        { criteria: 'Clawback enforceability', maxPoints: 10, description: 'Includes escrow holding periods and legal clawback triggers for fraud or default.' },
        { criteria: 'Marketplace sustainability', maxPoints: 5, description: 'Preserves attractive incentives for top performers while eliminating toxic volume.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'In financial economics, what is the core flaw of the "Originate-to-Distribute" model?',
        options: [
          'It increases the cost of paper printing in mortgage offices',
          'Lenders offload the default risk to third parties immediately, destroying their incentive to perform careful underwriting and verify borrower solvency',
          'It forces banks to hold 100% of deposits in physical gold',
          'The Federal Reserve banned secondary debt markets'
        ],
        correctOptionIndex: 1,
        explanation: 'When lenders don’t hold the risk of default, they maximize upfront origination fees by issuing low-quality, fraudulent loans without consequence.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Highlight Ferguson’s blistering interviews with Columbia and Harvard economics professors who wrote pro-deregulation papers funded by investment banks without disclosing conflicts of interest.',
      teachingNotes: 'Connect to Nassim Taleb’s concept of "Skin in the Game" and Dodd-Frank risk-retention rules.',
      commonStudentPitfalls: ['Assuming market actors are irrational; they were acting completely rationally according to their broken fee incentives']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg',
    featured: true
  },
  {
    id: 'lms-069',
    filmTitle: 'Barbarians at the Gate',
    releaseYear: 1993,
    tmdbMovieId: 10839,
    subject: 'Finance and unit economics',
    topicTags: ['Mega-LBO', 'RJR Nabisco', 'Bidding Wars', 'Winner’s Curse'],
    lessonTitle: 'RJR Nabisco: The Mechanics and Bidding Dynamics of Mega-LBOs',
    learningObjective: 'Analyze the auction dynamics, debt structuring, and "Winner’s Curse" in multi-billion dollar private equity bidding wars.',
    difficulty: 'Advanced',
    durationMinutes: 45,
    format: 'Executive Simulation',
    sceneDescription: 'RJR Nabisco CEO F. Ross Johnson decides to take the conglomerate private in a \$17 billion management buyout (MBO). Believing no one can compete with management, Johnson is stunned when Henry Kravis and George Roberts of Kohlberg Kravis Roberts (KKR) enter the fray with junk-bond financing from Drexel Burnham Lambert. A savage auction erupts between management, KKR, and First Boston, bidding the final acquisition price to an unprecedented \$25 billion (\$109 per share).',
    sceneTimestampRef: 'Approx. 01:22:10 (Instructor verified)',
    conceptExplanation: 'The 1988 buyout of RJR Nabisco was the quintessential mega-LBO of Wall Street history. It demonstrates the "Winner’s Curse" in competitive auctions: in an emotionally charged bidding war between ego-driven titans, the winning bidder often overpays because their financial model requires heroic, unrealistic operational cuts and asset sales to service the astronomical junk-bond debt load.',
    framework: {
      name: 'Auction Theory & The Winner’s Curse in Private Equity',
      description: 'Framework evaluating competitive bidding dynamics, debt coverage limits, and overpayment risks.',
      keySteps: [
        'Establish Objective Standalone DCF Valuation (True fundamental value: \$75-80/share).',
        'Model Debt-Service Ceiling: Calculate maximum leverage before debt service consumes 100% of operating cash flow.',
        'Diagnose Auction Escalation Traps: Identify emotional ego triggers (Johnson vs Kravis) that decouple bids from financial reality.',
        'Enforce Bidding Discipline: Establish an unbending walk-away threshold before the auction begins.'
      ],
      templateSnippet: 'Initial MBO Bid: [\$75/share = \$17B] -> Auction Escalation: [Bids reach \$109/share = \$25B] -> Debt Load: [\$20B in junk bonds] -> Outcome: [Severe restructuring required].'
    },
    discussionQuestions: [
      'Why did F. Ross Johnson’s initial low-ball bid of \$75 per share spark outrage and invite hostile private equity bidders into the process?',
      'How does the "Winner’s Curse" manifest in corporate M&A auctions when multiple private equity sponsors compete?',
      'What are the dangers of funding 90% of a corporate acquisition with high-yield junk bonds?'
    ],
    practicalAssignment: {
      title: 'LBO Bidding Strategy & Walk-Away Boundary Model',
      prompt: 'Scenario: Your private equity firm is participating in an auction for an enterprise SaaS or consumer conglomerate currently trading at \$40 per share. Build an LBO valuation model determining the maximum debt-servicing capacity and establish a non-negotiable walk-away price to avoid the Winner’s Curse.',
      deliverables: ['LBO financial model and debt-service coverage waterfall', 'Sensitivity analysis table (Exit Multiple vs EBITDA growth)', 'Written walk-away price policy and board memo'],
      rubric: [
        { criteria: 'Debt service realism', maxPoints: 10, description: 'Interest coverage ratio (ICR) remains strictly above 2.0x in downside case.' },
        { criteria: 'Auction discipline', maxPoints: 10, description: 'Defines an objective walk-away price grounded in return hurdles (IRR > 20%).' },
        { criteria: 'Operational feasibility', maxPoints: 5, description: 'Avoids assuming unrealistic post-deal cost-cutting fantasies.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'In auction theory and M&A finance, what is the "Winner’s Curse"?',
        options: [
          'The winning bidder is forced to pay all corporate taxes for the losing bidders',
          'In a competitive auction with incomplete information, the winning bidder is the one with the most optimistic valuation, meaning they almost certainly overpaid relative to fundamental intrinsic value',
          'The company’s CEO is legally mandated to resign within 30 days',
          'The target company’s stock automatically declines by 50% upon announcement'
        ],
        correctOptionIndex: 1,
        explanation: 'The Winner’s Curse dictates that winning an intense auction often means you bid higher than all other rational market participants, resulting in overpayment.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'KKR won the prize, but RJR Nabisco proved to be a mediocre financial return for KKR because the debt burden severely limited operational flexibility.',
      teachingNotes: 'Bryan Burrough and John Helyar’s book "Barbarians at the Gate" is widely considered the greatest business narrative ever written.',
      commonStudentPitfalls: ['Assuming that winning the auction equals winning the investment; the investment is only won when cash is returned to LPs upon exit']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-070',
    filmTitle: 'Trading Places',
    releaseYear: 1983,
    tmdbMovieId: 1621,
    subject: 'Finance and unit economics',
    topicTags: ['Commodities Futures', 'Information Arbitrage', 'Insider Trading', 'Market Cornering'],
    lessonTitle: 'Commodities Futures Arbitrage: The Frozen Concentrated Orange Juice Report',
    learningObjective: 'Examine commodities futures contracts, crop estimate reports, and the mechanics of short-selling information arbitrage.',
    difficulty: 'Intermediate',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'On the trading floor of the World Trade Center commodities exchange, Billy Ray Valentine and Louis Winthorpe intercept the classified USDA crop estimate report from corporate spy Clarence Beeks. Knowing that the winter frost caused zero crop damage and orange yields will be plentiful, they watch the corrupt Duke brothers buy up Frozen Concentrated Orange Juice (FCOJ) futures, driving prices to an artificial high of \$1.42. Valentine and Winthorpe aggressively short-sell the market at its peak, and when the real report airs showing normal crops, prices collapse to \$0.29, making them a fortune while bankrupting the Dukes.',
    sceneTimestampRef: 'Approx. 01:42:30 (Instructor verified)',
    conceptExplanation: 'Commodities futures markets are zero-sum environments where leveraged contracts amplify price volatility based on forward supply-and-demand catalysts. Winthorpe and Valentine executed a classic "short-squeeze reversal": letting an uninformed buyer inflate market prices on false rumors, shorting into the frenzy at the peak, and closing their short positions at the bottom. This scene was so influential it directly inspired the "Eddie Murphy Rule" in the 2010 Dodd-Frank Wall Street Reform Act, which banned insider trading on non-public government reports.',
    framework: {
      name: 'Futures Short-Selling & Catalyst Arbitrage Model',
      description: 'Framework measuring forward supply forecasts, leveraged margin requirements, and short-reversal execution.',
      keySteps: [
        'Identify Asymmetric Information Catalyst: Verify ground-truth crop report data before public market absorption.',
        'Observe Market Manipulation / Squeeze: Let the speculative buyers drive prices to unsustainable highs.',
        'Execute Staged Short Positions: Sell leveraged futures contracts at peak euphoria without consuming 100% margin.',
        'Buy to Cover at Maximum Panic: Buy back contracts at market bottom when the true government report crashes speculative demand.'
      ],
      templateSnippet: 'False Rumor Price: [\$1.42 / Contract] -> Action: [Sell Short 5,000 contracts] -> Truth Revealed: [Price drops to \$0.29] -> Action: [Buy to cover -> \$5.6M profit].'
    },
    discussionQuestions: [
      'How does short-selling a futures contract work when the seller does not own physical oranges?',
      'Why did the Commodities Futures Trading Commission (CFTC) introduce the "Eddie Murphy Rule" into federal law following this film?',
      'What are modern financial equivalents of trading ahead of government crop or economic data releases?'
    ],
    practicalAssignment: {
      title: 'Commodities Futures Market Catalyst Analysis',
      prompt: 'Select a physical commodity (e.g. natural gas, wheat, lithium). Analyze how a specific weather anomaly or geopolitical supply shock impacts futures price curves (contango vs backwardation). Model the financial leverage and margin call risk of taking an unhedged futures position.',
      deliverables: ['Commodity supply-demand catalyst profile', 'Futures forward curve analysis (Contango/Backwardation)', 'Margin call stress test model under 20% price swing'],
      rubric: [
        { criteria: 'Market mechanics', maxPoints: 10, description: 'Accurately explains futures contract settlement, margin calls, and leverage.' },
        { criteria: 'Catalyst analysis', maxPoints: 10, description: 'Demonstrates deep understanding of forward supply expectations.' },
        { criteria: 'Risk management', maxPoints: 5, description: 'Includes strict stop-loss rules to prevent margin liquidation.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'Why did the real-world Dodd-Frank Wall Street Reform Act of 2010 include Section 746, colloquially nicknamed the "Eddie Murphy Rule"?',
        options: [
          'It gave actors tax exemptions on film royalties',
          'It made it illegal to use misappropriated, non-public government agency information to trade in the commodities futures markets, closing the loophole depicted in Trading Places',
          'It banned the trading of orange juice futures contracts',
          'It mandated that all Wall Street trading floors hire equal numbers of comedians'
        ],
        correctOptionIndex: 1,
        explanation: 'Prior to Dodd-Frank, insider trading laws did not explicitly ban trading commodities based on leaked government agency reports; Section 746 closed this loophole.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'CFTC Chairman Gary Gensler explicitly testified before Congress referencing the movie when explaining why commodities insider trading needed reform.',
      teachingNotes: 'Use this to teach margin calls, leverage, and the mechanics of shorting.',
      commonStudentPitfalls: ['Confusing the stock market with commodities futures, which operate on standardized physical delivery contracts']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  },
  {
    id: 'lms-071',
    filmTitle: 'Boiler Room',
    releaseYear: 2000,
    tmdbMovieId: 10078,
    subject: 'Finance and unit economics',
    topicTags: ['Pump and Dump', 'Synthetic Illiquidity', 'Micro-Cap Stocks', 'Market Manipulation'],
    lessonTitle: 'Pump-and-Dump Micro-Cap Manipulation: Synthetic Float Illiquidity',
    learningObjective: 'Deconstruct the financial engineering and structural mechanics behind pump-and-dump stock manipulation schemes.',
    difficulty: 'Advanced',
    durationMinutes: 35,
    format: 'Case Study',
    sceneDescription: 'Seth Davis discovers that the high-flying pharmaceutical stock his brokerage firm (J.T. Marlin) is aggressively hyping—Medlake Financial / Medlake Labs—is a complete shell company with zero revenue, zero FDA drug trials, and no real offices. Davis realizes the senior partners bought up 80% of the restricted shares for pennies, used their cold-calling army to artificially pump the stock price from \$3 to \$97, and secretly dumped their own shares while legally preventing retail buyers from selling.',
    sceneTimestampRef: 'Approx. 01:14:10 (Instructor verified)',
    conceptExplanation: 'Micro-cap "pump and dump" operations rely on controlling the synthetic float of an illiquid security. By cornering the tradable shares and deploying an aggressive outbound telemarketing boiler room, fraudsters manufacture artificial demand. Simultaneously, brokers refuse customer sell orders (claiming "the system is down" or "don’t be a quitter"), trapping retail buyers in an artificially inflated asset while insiders liquidate at peak valuation.',
    framework: {
      name: 'Micro-Cap Float Manipulation & Artificial Squeeze Model',
      description: 'Forensic framework diagnosing predatory liquidity traps and fraudulent trading operations.',
      keySteps: [
        'Corner the Tradable Float: Insiders secretly acquire 70-85% of outstanding micro-cap shares.',
        'Manufacture Hype Narrative: Fabricate proprietary patents, revolutionary cures, or imminent acquisitions.',
        'High-Pressure Demand Generation: Deploy high-velocity outbound calls to retail investors.',
        'Enforce One-Way Liquidity Trap: Prevent retail selling through broker refusal while insiders liquidate proprietary holdings.'
      ],
      templateSnippet: 'Float Cornered: [85% restricted] -> Outbound Demand Surge: [Price \$3 -> \$97] -> Insiders Dump: [Retail left holding zero-value shell stock].'
    },
    discussionQuestions: [
      'Why do micro-cap stocks with low public float make market manipulation mathematically easy compared to large-cap stocks like Apple?',
      'How did modern meme stock volatility and cryptocurrency "rug pulls" replicate the 1990s boiler room playbook?',
      'What automated surveillance telemetry should stock exchanges and regulators use to detect coordinated float manipulation?'
    ],
    practicalAssignment: {
      title: 'Forensic Market Surveillance & Fraud Detection Audit',
      prompt: 'Scenario: You are a compliance officer at a financial brokerage or crypto exchange. Design an automated algorithmic surveillance alert that flags coordinated pump-and-dump manipulation patterns based on order-book depth, account clustering, and abnormal bid-ask spreads.',
      deliverables: ['Algorithmic surveillance trigger rule definitions', 'Account clustering detection schema', 'Regulatory suspension and trading halt protocol'],
      rubric: [
        { criteria: 'Detection accuracy', maxPoints: 10, description: 'Identifies float concentration and one-way trading velocity abnormalities.' },
        { criteria: 'False positive mitigation', maxPoints: 10, description: 'Distinguishes genuine organic news catalysts from coordinated manipulation.' },
        { criteria: 'Regulatory compliance', maxPoints: 5, description: 'Complies with SEC / FINRA market abuse reporting regulations.' }
      ]
    },
    knowledgeCheck: [
      {
        question: 'What is the primary mechanism that allows a "pump and dump" operator to drive a penny stock from \$3 to \$97 rapidly?',
        options: [
          'High corporate dividend payouts',
          'Controlling the majority of the illiquid tradable float and manufacturing artificial demand through aggressive sales calls while blocking retail sell orders',
          'Federal Reserve quantitative easing',
          'Upgrades from major credit rating agencies'
        ],
        correctOptionIndex: 1,
        explanation: 'Controlling an illiquid float means minimal buying volume can spike prices exponentially; once pumped, insiders dump their shares onto retail victims.'
      }
    ],
    instructorGuidance: {
      answerKeySummary: 'Seth’s customer Harry Reynard lost his entire life savings (\$50,000) and family home. This drives home the human cost of predatory financial fraud.',
      teachingNotes: 'Compare to modern decentralized crypto rug-pulls and Telegram pump groups.',
      commonStudentPitfalls: ['Failing to understand the concept of "float": a stock can have 10M shares, but if only 100k trade freely, it is easily manipulated']
    },
    verificationStatus: 'verified',
    status: 'published',
    posterPath: '/5qpU9sF9n8V9B7H4g1v0W0L7f8K.jpg'
  }
];

module.exports = { LESSONS_PART3 };
