export interface TeamMember {
  name: string
  role: string
  company: string
}

export interface Asset {
  src?: string
  href?: string
  isExternal?: boolean
  isThumbnail?: boolean
  vimeoId?: string
  vimeoTitle?: string
}

export interface Project {
  slug: string
  title: string
  description: string
  year?: string
  tags?: string[]
  homeImage: string
  heroImage?: string
  heroImageMobile?: string
  overview?: string
  outcome?: string
  team?: TeamMember[]
  assets?: Asset[]
  isLocked?: boolean
  isExternal?: boolean
}

export const projects: Project[] = [
  {
    slug: 'adidas',
    title: 'Adidas',
    description:
      'A german multinational corporation, the largest sportwear manufacturer in Europe and the second biggest in the world.',
    year: '2012',
    tags: ['B2C', 'Social'],
    homeImage: '/assets/images/adidas.jpg',
    heroImage: '/assets/images/adidas-hero.jpg',
    overview:
      "We developed the 'run with us' visual system for Adidas' inspirational B2C social campaign, which could be continued in-house and sustained without external creative.",
    outcome:
      'The campaign became popular, offering daily encouragement and inspiration for devoted runners and those seeking motivation to run more often. On average the posts received: 5,692 likes, 460 shares, and 176 comments per post.',
    team: [
      { name: 'Patrick Alfred', role: 'Visual Designer', company: 'Lux Design' },
      { name: 'Kelly Gagnon', role: 'Sr. Art Director', company: 'Lux Design' },
    ],
    assets: [{ src: '/assets/images/fan-numbers.jpg' }, { src: '/assets/images/numbers.jpg' }],
  },
  {
    slug: 'waterproof',
    title: 'Waterproof',
    description:
      'A tool for measuring residential and commercial water consumption relative to state, county, and city recommendations.',
    year: '2015',
    tags: ['Mobile'],
    homeImage: '/assets/images/waterproof-tile.jpg',
    heroImage: '/assets/images/waterproof-hero.jpg',
    heroImageMobile: '/assets/images/waterproof-hero-s.jpg',
    overview:
      'As California faces increasingly taxing droughts and stricter water regulations, Waterproof monitors personal water use in relation to city and state recommendations as well as average water use by neighbors at a block, city, and county level.',
    outcome:
      'For a city like San Francisco - where digital metering is standard - this project is a relatively simple arrangement of pre-existing data. Push notifications when water use nears recommended levels helps users relate their consumption to the larger conservation effort.',
    team: [{ name: 'Patrick Alfred', role: '', company: '' }],
    assets: [
      { src: '/assets/images/daily_info.jpg' },
      { src: '/assets/images/monthly.jpg' },
      { src: '/assets/images/yearly.jpg' },
      { src: '/assets/images/sources_coming.jpg' },
      { src: '/assets/images/sources_going.jpg' },
      { src: '/assets/images/ca_city.jpg' },
    ],
  },
  {
    slug: 'rei',
    title: 'REI',
    description:
      'A retail corporation selling outdoor recreation gear, sporting goods, and clothing. REI has over 125 retail stores in over 30 states and sales exceeding $1.5 billion a year.',
    year: '2012',
    tags: ['Print'],
    homeImage: '/assets/images/rei.jpg',
    overview:
      "Bill Bernbach said \"familiarity breeds apathy.\" This is truest when comparing outdoor recreational advertising. REI wanted a print ad that wasn't the same man on a mountain we so commonly see.",
    outcome:
      "It's not extreme mountain climbing that people shop REI, it's the experience of a return to nature, albeit brief, and vacation from the dense cities that consume most our time.",
    team: [
      {
        name: 'Patrick Alfred',
        role: 'Visual Designer',
        company: 'Square Tomato Advertising',
      },
    ],
    assets: [{ src: '/assets/images/rei_build.jpg' }, { src: '/assets/images/rei_human.jpg' }],
  },
  {
    slug: 'apple-red',
    title: 'Apple - Product (RED)',
    description:
      'Over a decade ago, Steve and other leaders at Apple decided to help create the first AIDS-free generation.',
    year: '2017',
    tags: ['B2C', 'Web & Retail'],
    isLocked: true,
    homeImage: '/assets/images/red-home-tile.jpg',
    heroImage: '/assets/images/product-red-hero.jpg',
    heroImageMobile: '/assets/images/product-red-hero.jpg',
    overview:
      "Over a decade ago, Steve and other leaders at Apple decided to help create the first AIDS-free generation. They answered the call of Bono and Bobby Shriver, who started (RED) with a very specific goal: to make it easy for people and businesses to join the fight against AIDS.",
    outcome:
      "Design for promotional materials released on Dec 1, World AIDS Day. On Dec 1, Apple campus, apple.com, the App Store, and all Apple retail stores turned (RED). For 2017, I designed all materials for all things (RED).",
    team: [
      { name: 'Patrick Alfred', role: 'Sr. Visual Designer', company: 'Kettle NYC/Apple' },
    ],
    assets: [
      { src: '/assets/images/red-homepage.jpg' },
      { src: '/assets/images/product-red.png' },
      { src: '/assets/images/red-storefront.jpg' },
      { src: '/assets/images/red-interior.jpg' },
      { src: '/assets/images/red-infinite-loop.jpg' },
    ],
  },
  {
    slug: 'grandma-museum',
    title: 'The Grandma Museum',
    description: '',
    year: '2013',
    tags: ['Web'],
    homeImage: '/assets/images/grandma-museum.jpg',
    heroImage: '/assets/images/grandma-museum-hero.jpg',
    heroImageMobile: '/assets/images/grandma-museum-hero-s.jpg',
    overview:
      'I worked with Sarah Koik to concept and create The Grandma Museum: a digital archive of gifts from grandmothers to grandchildren. Visitors submit gifts they have received from their grandmothers which are displayed alongside Sarah\'s personal archive of over 100 gifts.',
    outcome:
      'We shot every item with a Nikon D800 and organized them into 12 categories. In 1 week, we had over 100k unique visitors and were featured on Buzzfeed, The Bold Italic, HOW magazine, Creative Review, and Under Consideration. Submissions came from Germany, Australia, England, and the US.',
    team: [
      { name: 'Patrick Alfred', role: 'Co-founder', company: '' },
      { name: 'Sarah Koik', role: 'Co-founder', company: '' },
    ],
    assets: [
      { src: '/assets/images/grandma-museum-museum.jpg' },
      { src: '/assets/images/grandma-museum-book.jpg' },
      { src: '/assets/images/grandma-museum-jar.jpg' },
      { src: '/assets/images/grandma-museum-stencil.jpg' },
      { src: '/assets/images/grandma-museum-hohner.jpg' },
      { src: '/assets/images/grandma-museum-glasses.jpg' },
      { src: '/assets/images/grandma-museum-napkin.jpg' },
    ],
  },
  {
    slug: 'apple-therockandsiri',
    title: 'Apple - The Rock & Siri',
    description:
      "When your day is as epic as The Rock's, you need a smarter way to take it on. With Siri, just say it and it's done.",
    year: '2017',
    tags: ['B2C', 'Web'],
    isLocked: true,
    homeImage: '/assets/images/apple.jpg',
    heroImage: '/assets/images/siri-hero.jpg',
    heroImageMobile: '/assets/images/siri-hero-s.jpg',
    overview:
      "From concept to execution, my team worked with TBWA\\Media Arts Lab to promote the use of Siri by one of the world's most beloved Siri users — Dwayne 'The Rock' Johnson.",
    outcome:
      'A 3:45 video was created with The Rock to demonstrate the power of Siri. With a homepage banner on apple.com, a takeover on Apple\'s Siri page, as well as social promotion, the film generated over 14 million views in the first month.',
    team: [
      { name: 'Patrick Alfred', role: 'Sr. Visual Designer', company: 'Kettle NYC/Apple' },
      { name: 'Evan Walker',    role: 'Sr. Art Director',    company: 'Kettle NYC/Apple' },
    ],
    assets: [
      { src: '/assets/images/apple 3.png' },
      { src: '/assets/images/apple 2.png' },
      { src: '/assets/images/siri-ios.jpg' },
      {
        src: '/assets/images/thumbnail-siri.jpg',
        href: 'https://www.youtube.com/watch?v=ufBLI6bB9sg',
        isExternal: true,
        isThumbnail: true,
      },
    ],
  },
  {
    slug: 'apple-accessibility',
    title: 'Apple - Accessibility',
    description:
      'The most powerful technology in the world is technology that everyone, including people with disabilities, can use. To work, create, communicate, stay in shape, and be entertained.',
    year: '2017',
    tags: ['B2C', 'Web'],
    isLocked: true,
    homeImage: '/assets/images/accessibility-tile.jpg',
    heroImage: '/assets/images/accessibility-hero.jpg',
    heroImageMobile: '/assets/images/accessibility-hero-s.jpg',
    overview:
      "Apple's industry-leading devotion to accessibility has been an inspiration and valuable component to the Apple name. I was asked to design an updated accessibility site that communicated the product accessibility features.",
    outcome:
      'A 27 page site detailing all accessibility features for Mac, iPad, iPhone, Apple Watch, and Apple TV.',
    team: [
      { name: 'Patrick Alfred', role: 'Sr. Visual Designer', company: 'Kettle NYC/Apple' },
      { name: 'Shannon Ling',   role: 'Visual Designer',     company: 'Kettle NYC/Apple' },
    ],
    assets: [
      { src: '/assets/images/acc-mac.jpg' },
      { src: '/assets/images/acc-ipad.jpg' },
      { src: '/assets/images/acc-iphone.jpg' },
      { src: '/assets/images/acc-watch.jpg' },
      { src: '/assets/images/acc-tv.jpg' },
    ],
  },
  {
    slug: 'venn',
    title: 'Venn',
    description: 'A social network aimed at increasing offline group/paired activities.',
    year: '2015',
    tags: ['Mobile'],
    homeImage: '/assets/images/venn.jpg',
    heroImage: '/assets/images/venn-hero.jpg',
    heroImageMobile: '/assets/images/venn-hero-s.jpg',
    overview:
      'I was asked to design an interface that encouraged users to spend as little time within the application and more time in the real world.',
    outcome:
      'An iOS application that prided itself on its limited functionality. The design is intended to give the user an illusion of less screens than actually exist.',
    team: [
      { name: 'Patrick Alfred', role: 'Product Designer', company: 'In-house' },
    ],
    assets: [
      { src: '/assets/images/venn-home2.jpg' },
      { src: '/assets/images/venn-people.jpg' },
      { src: '/assets/images/venn-ideas-mine.jpg' },
    ],
  },
  {
    slug: 'disney',
    title: 'Disney +',
    description:
      'A subscription video on-demand streaming service owned and operated by The Walt Disney Company.',
    year: '2020',
    tags: ['B2C', 'Omni'],
    homeImage: '/assets/images/home-tile-disney.png',
    heroImage: '/assets/images/marquee-disney.png',
    heroImageMobile: '/assets/images/marquee-disney.png',
    overview:
      'A member of the prototyping and motion team, I was responsible for motion design within the Disney+ interface as well as video editing for in-app preview trailers and pre-purchase video marketing materials.',
    outcome:
      'A day after its launch, Disney announced that the streaming service had already signed up more than 10 million subscribers.',
    team: [
      {
        name: 'Patrick Alfred',
        role: 'Sr. Motion Designer',
        company: 'The Walt Disney Company',
      },
      {
        name: 'Brian Ziffer',
        role: 'Director of Motion and Prototyping',
        company: 'The Walt Disney Company',
      },
    ],
    assets: [
      {
        src: '/assets/images/thumbnail-disney.jpg',
        href: 'https://drive.google.com/file/d/1wzF-iuS3YHoZckPcWDIRMOeq-aBGcKum/view',
        isExternal: true,
        isThumbnail: true,
      },
    ],
  },
  {
    slug: 'hpe',
    title: 'Hewlett Packard Enterprise',
    description:
      "A market-leading company that's defining the next generation of infrastructure, software, and services for the New Style of IT.",
    year: '2015',
    tags: ['B2B', 'Web'],
    homeImage: '/assets/images/hpe.jpg',
    heroImage: '/assets/images/hpe-hero.jpg',
    heroImageMobile: '/assets/images/hpe-hero-s.jpg',
    overview:
      "My team was responsible for the creation and launch of HPE.com. A hard launch date was set in preparation of Meg Whitman's formal announcement at HP's 2015 London Keynote.",
    outcome:
      "Whitman claimed the launch of HPE to be the biggest thing Hewlett Packard had done since founding Silicon Valley in 1939. We delivered the 90+ page site in 6 months making headlines in every major business publication.",
    team: [
      {
        name: 'Patrick Alfred',
        role: 'Sr. Visual Designer',
        company: 'Publicis/Razorfish',
      },
      {
        name: 'Brian Ziffer',
        role: 'Sr. Art Director',
        company: 'Publicis/Razorfish',
      },
    ],
    assets: [
      { src: '/assets/images/pods.jpg' },
      { src: '/assets/images/moonshot.jpg' },
      { src: '/assets/images/servers.jpg' },
    ],
  },
  {
    slug: 'molekule',
    title: 'Molekule',
    description:
      "After 20 years of research and development, Molekule, in partnership with the Environmental Protection Agency, introduced the world's first molecular air purifier.",
    year: '2016',
    tags: ['B2C', 'Web & Print'],
    homeImage: '/assets/images/molekule.jpg',
    heroImage: '/assets/images/molekule-hero.jpg',
    heroImageMobile: '/assets/images/molekule-hero-s.jpg',
    overview:
      'After 20 years of research and development, Molekule, in partnership with the EPA, introduced the world\'s first molecular air purifier. I was responsible for all pre-launch design needs working with a brand identity by SF agency, Character.',
    outcome:
      'We created a beautiful website, direct mailers, white-papers, social ads, and an aggressive launch campaign to reveal the $800 product. Within 10 days, the entire first batch (1,500) sold out. By the time the product first shipped, Molekule sold out 4 pre-order batches.',
    team: [
      { name: 'Patrick Alfred', role: 'Sr. Visual Designer', company: 'Molekule' },
      { name: 'Peter Riering-Czekalla', role: 'CMO', company: 'Molekule' },
    ],
    assets: [
      { src: '/assets/images/digital-mailer.jpg' },
      { src: '/assets/images/mailer-1.jpg' },
      { src: '/assets/images/mailer-2.jpg' },
      { src: '/assets/images/whitepaper-1.jpg' },
      { src: '/assets/images/whitepaper-2.jpg' },
      { src: '/assets/images/whitepaper-3.jpg' },
      { src: '/assets/images/whitepaper-4.jpg' },
    ],
  },
  {
    slug: 'poll-everywhere',
    title: 'Poll Everywhere',
    description:
      'An audience response system with Keynote, PowerPoint, and Google Slides integrations. Using the web, audiences can abandon polling hardware in place of mobile phones.',
    year: '2017',
    tags: ['B2B', 'Web'],
    homeImage: '/assets/images/poll-everywhere.jpg',
    heroImage: '/assets/images/poll-everywhere-hero.jpg',
    heroImageMobile: '/assets/images/poll-everywhere-hero-s.jpg',
    overview:
      "I was responsible for creating an identity system, brand strategy, user experience, and UI for the launch of a new site and UI cleanup for Poll Everywhere's flagship web application, iOS/Android apps, and 3rd party integrations.",
    outcome:
      'Complete rebrand: documentation of a component-based design system, introduction of design tokens to define color, buttons, and typographic styles, and marketing strategy for communications that convert.',
    team: [
      {
        name: 'Patrick Alfred',
        role: 'Sr. Product Designer/Art Director',
        company: 'In-house',
      },
    ],
    assets: [
      { src: '/assets/images/homepage.jpg' },
      { src: '/assets/images/vs.jpg' },
      { src: '/assets/images/storytelling.jpg' },
      { src: '/assets/images/components.jpg' },
    ],
  },
  {
    slug: 'honda',
    title: 'Honda',
    description:
      'Since 1959, Honda has been the world\'s largest motorcycle manufacturer. Second largest automobile manufacturer in Japan, and eighth in the world.',
    year: '2015',
    tags: ['B2C', 'Web'],
    homeImage: '/assets/images/honda-home.jpg',
    heroImage: '/assets/images/honda-hero.jpg',
    heroImageMobile: '/assets/images/honda-hero.jpg',
    overview:
      "The flagship feature of Honda Helper is an ability to mirror screens between a remote web user and a Honda Specialist - while simultaneously sharing navigational and UI control. Honda Helper's success hinged on the simplicity of its navigational pathways and UI, which were my responsibilities as a designer on the team.",
    outcome:
      'The success from Honda brought additional interest to the product and the tech. Publicis continues to sell the technology to a number of high profile retail clients.',
    team: [
      {
        name: 'Patrick Alfred',
        role: 'Sr. Visual Designer',
        company: 'Publicis/Razorfish',
      },
      {
        name: 'Borfang Su',
        role: 'Creative Director',
        company: 'Publicis/Razorfish',
      },
    ],
    assets: [
      { src: '/assets/images/color-transmission.jpg' },
      { src: '/assets/images/end-card.jpg' },
      { src: '/assets/images/LED-headlights.jpg' },
      { src: '/assets/images/power-tailgate.jpg' },
      {
        src: '/assets/images/thumbnail-honda.jpg',
        href: 'https://vimeo.com/343330163',
        isExternal: true,
        isThumbnail: true,
      },
    ],
  },
  {
    slug: 'apple-vision-pro',
    title: 'Apple Vision Pro x Disney+',
    description:
      'Translating Disney+ UI into headset-ready designs for the then-unreleased Vision Pro in collaboration with Apple.',
    year: '2024',
    tags: ['D2C', 'Streaming/AR/VR'],
    homeImage: '/assets/images/avp-disneyplus-hero.jpg',
    heroImage: '/assets/images/avp-disneyplus-hero.jpg',
    heroImageMobile: '/assets/images/avp-disneyplus-hero.jpg',
    overview:
      "Translating Disney+ UI into headset ready designs for the then unreleased Vision Pro in collaboration with Apple. Introduction of additional spatial, parallax, and environmental immersive viewing environments specific to the new device.",
    outcome:
      "Bob Iger and Tim Cook jointly announced the availability of Disney+ on Vision Pro at the 2024 WWDC as a core selling point of the new hardware. My team, in addition to delivering designs for the Vision Pro experience, contributed demo videos to support Iger's announcement at WWDC as well as additional press materials.",
    team: [
      { name: 'Patrick Alfred', role: 'Design Manager',          company: 'The Walt Disney Company' },
      { name: 'Ilma Bilic',     role: 'Sr. Product Designer',    company: 'The Walt Disney Company' },
      { name: 'Daniel Baker',   role: 'Exec. Product Manager',   company: 'Walt Disney' },
    ],
    assets: [
      { vimeoId: '1188707087', vimeoTitle: 'Disney+ Apple Vision Pro — Press' },
      { vimeoId: '1188706815', vimeoTitle: 'AVP Star Wars Only' },
      { vimeoId: '1188706322', vimeoTitle: 'Disney at WWDC 2023' },
      { src: '/assets/images/AVP-old-animation-building.png' },
      { src: '/assets/images/AVP-glendale-02.png' },
    ],
  },
  {
    slug: 'pixar',
    title: 'Pixar',
    description:
      'Each Disney pillar brand has a home hub on Disney+. The Pixar brand page was redesigned to convert passive browsing into active playback.',
    year: '2024',
    tags: ['D2C', 'Streaming'],
    homeImage: '/assets/images/pixar-tile-02.jpg',
    heroImage: '/assets/images/pixar-hero.jpg',
    heroImageMobile: '/assets/images/pixar-hero.jpg',
    overview:
      "Each Disney pillar brand has a home hub on Disney+. The Pixar brand relies heavily on its content rather than studio branding itself. This page was initially launched with a Pixar Animation Studio Bumper. My hypothesis was that exposing the stories and content earlier would convert to higher playback.",
    outcome:
      "Immediate and sustained 7+% page play conversion attributed solely to the creative refresh. Hypothesis was wildly on point as life and storytelling was brought into a studio which epitomizes it. Character forward intro video uniting multiple film titles in a single swirling motion followed by refreshed resolve creative.",
    team: [
      { name: 'Patrick Alfred',  role: 'Design Manager',              company: 'The Walt Disney Company' },
      { name: 'Diana Torres',    role: 'Sr. Motion Designer',         company: 'The Walt Disney Company' },
      { name: 'Dom Gianneschi', role: 'Principal Product Designer',  company: 'Walt Disney' },
      { name: 'Andy Dryfus',    role: 'Studio Partner',              company: 'Pixar Animation' },
    ],
    assets: [
      { src: '/assets/images/Pixar-Video-Thumbnail.png', isThumbnail: true },
      { src: '/assets/images/pixar-brand-page-layout.png' },
      { src: '/assets/images/pixar-toystory30th-thumbnail.jpg', isThumbnail: true },
    ],
  },
  {
    slug: 'lucasfilm',
    title: 'Lucasfilm',
    description:
      'Disney+ is home to the full Lucasfilm library — Star Wars, Indiana Jones, and beyond. A brand refresh brought the galaxy to life on screen.',
    year: '2023',
    tags: ['D2C', 'Streaming'],
    homeImage: '/assets/images/disney-100-hero.jpg',
    heroImage: '/assets/images/disney-100-hero.jpg',
    heroImageMobile: '/assets/images/disney-100-hero.jpg',
    overview:
      "A yearlong company-wide celebration to honor '100 years of wonder' and the founding of The Walt Disney Company. Changing the app startup animation across all platforms for Disney+ with animated Disney 100 creative was one of many contributions to the celebration.",
    outcome:
      "Special activations, tie-ins, and moments that highlighted what has made Disney so special to so many over the last 100 years. Special collections, feature films, short films, parks activations, cinema re-releases, and broadcast debut of Once Upon a Studio as part of ABC's The Wonderful World of Disney: Disney's 100th Anniversary Celebration!",
    team: [
      { name: 'Patrick Alfred', role: 'Design Manager',      company: 'The Walt Disney Company' },
      { name: 'Diana Torres',   role: 'Sr. Motion Designer', company: 'The Walt Disney Company' },
      { name: 'Gina Gordon',    role: 'Sr. Visual Designer', company: 'Walt Disney' },
    ],
    assets: [
      { src: '/assets/images/disney100-horizontal-thumbnail.png', isThumbnail: true },
      { src: '/assets/images/disney100-vertical-thumbnail.png',   isThumbnail: true },
      { src: '/assets/images/disney100-lottie-layers-thumbnail.png', isThumbnail: true },
      { src: '/assets/images/disney100-particles-thumbnail.png' },
      { src: '/assets/images/Once-Upon-A-Studio-Thumbnail.jpg' },
    ],
  },
  {
    slug: 'disney-100',
    title: 'Disney 100',
    description:
      "A yearlong company-wide celebration to honor '100 years of wonder' and the founding of The Walt Disney Company.",
    year: '2023',
    tags: ['D2C', 'Streaming'],
    homeImage: '/assets/images/disney100-tile.png',
    heroImage: '/assets/images/disney-100-hero.jpg',
    heroImageMobile: '/assets/images/disney-100-hero.jpg',
    overview:
      "A yearlong company-wide celebration to honor '100 years of wonder' and the founding of The Walt Disney Company. Changing the app startup animation across all platforms for Disney+ with animated Disney 100 creative was one of many contributions to the celebration.",
    outcome:
      "Special activations, tie-ins, and moments that highlighted what has made Disney so special to so many over the last 100 years. Special collections, feature films, short films, parks activations, cinema re-releases, and broadcast debut of Once Upon a Studio as part of ABC's The Wonderful World of Disney: Disney's 100th Anniversary Celebration!",
    team: [
      { name: 'Patrick Alfred', role: 'Design Manager',      company: 'The Walt Disney Company' },
      { name: 'Diana Torres',   role: 'Sr. Motion Designer', company: 'The Walt Disney Company' },
      { name: 'Gina Gordon',    role: 'Sr. Visual Designer', company: 'Walt Disney' },
    ],
    assets: [
      { src: '/assets/images/disney100-horizontal-thumbnail.png', isThumbnail: true },
      { src: '/assets/images/disney100-vertical-thumbnail.png',   isThumbnail: true },
      { src: '/assets/images/disney100-lottie-layers-thumbnail.png', isThumbnail: true },
      { src: '/assets/images/disney100-particles-thumbnail.png' },
      { src: '/assets/images/Once-Upon-A-Studio-Thumbnail.jpg' },
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export const footerProjects = [
  [
    { slug: 'adidas', label: 'Adidas', isLocked: false },
    { slug: 'waterproof', label: 'Waterproof', isLocked: false },
    { slug: 'rei', label: 'REI', isLocked: false },
  ],
  [
    { slug: 'apple-therockandsiri', label: 'Apple - The Rock & Siri', isLocked: true },
    { slug: 'grandma-museum', label: 'The Grandma Museum', isLocked: false },
    { slug: 'apple-accessibility', label: 'Apple - Accessibility', isLocked: true },
  ],
  [
    { slug: 'hpe', label: 'Hewlett Packard Enterprise', isLocked: false },
    { slug: 'venn', label: 'Venn', isLocked: false },
    { slug: 'poll-everywhere', label: 'Poll Everywhere', isLocked: false },
  ],
  [
    { slug: 'molekule', label: 'Molekule', isLocked: false },
    { slug: 'apple-red', label: 'Apple - Product (RED)', isLocked: true },
    { slug: 'honda', label: 'Honda', isLocked: false },
  ],
]
