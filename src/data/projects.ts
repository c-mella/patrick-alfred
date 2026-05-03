export interface TeamMember {
  name: string
  role: string
  company: string
}

export interface Asset {
  src: string
  href?: string
  isExternal?: boolean
  isThumbnail?: boolean
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
  prev?: string
  next?: string
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
    homeImage: '/images/adidas.jpg',
    heroImage: '/images/adidas-hero.jpg',
    overview:
      "We developed the 'run with us' visual system for Adidas' inspirational B2C social campaign, which could be continued in-house and sustained without external creative.",
    outcome:
      'The campaign became popular, offering daily encouragement and inspiration for devoted runners and those seeking motivation to run more often. On average the posts received: 5,692 likes, 460 shares, and 176 comments per post.',
    team: [
      { name: 'Patrick Alfred', role: 'Visual Designer', company: 'Lux Design' },
      { name: 'Kelly Gagnon', role: 'Sr. Art Director', company: 'Lux Design' },
    ],
    assets: [{ src: '/images/fan-numbers.jpg' }, { src: '/images/numbers.jpg' }],
    prev: 'venn',
    next: 'grandma-museum',
  },
  {
    slug: 'waterproof',
    title: 'Waterproof',
    description:
      'A tool for measuring residential and commercial water consumption relative to state, county, and city recommendations.',
    year: '2015',
    tags: ['Mobile'],
    homeImage: '/images/waterproof-tile.jpg',
    heroImage: '/images/waterproof-hero.jpg',
    heroImageMobile: '/images/waterproof-hero-s.jpg',
    overview:
      'As California faces increasingly taxing droughts and stricter water regulations, Waterproof monitors personal water use in relation to city and state recommendations as well as average water use by neighbors at a block, city, and county level.',
    outcome:
      'For a city like San Francisco - where digital metering is standard - this project is a relatively simple arrangement of pre-existing data. Push notifications when water use nears recommended levels helps users relate their consumption to the larger conservation effort.',
    team: [{ name: 'Patrick Alfred', role: '', company: '' }],
    assets: [
      { src: '/images/daily_info.jpg' },
      { src: '/images/monthly.jpg' },
      { src: '/images/yearly.jpg' },
      { src: '/images/sources_coming.jpg' },
      { src: '/images/sources_going.jpg' },
      { src: '/images/ca_city.jpg' },
    ],
    prev: 'hpe',
    next: 'molekule',
  },
  {
    slug: 'rei',
    title: 'REI',
    description:
      'A retail corporation selling outdoor recreation gear, sporting goods, and clothing. REI has over 125 retail stores in over 30 states and sales exceeding $1.5 billion a year.',
    year: '2012',
    tags: ['Print'],
    homeImage: '/images/rei.jpg',
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
    assets: [{ src: '/images/rei_build.jpg' }, { src: '/images/rei_human.jpg' }],
    prev: 'molekule',
    next: 'poll-everywhere',
  },
  {
    slug: 'apple-red',
    title: 'Apple - Product (RED)',
    description:
      'Over a decade ago, Steve and other leaders at Apple decided to help create the first AIDS-free generation.',
    homeImage: '/images/red-home-tile.jpg',
    isLocked: true,
    isExternal: true,
  },
  {
    slug: 'grandma-museum',
    title: 'The Grandma Museum',
    description: '',
    year: '2013',
    tags: ['Web'],
    homeImage: '/images/grandma-museum.jpg',
    heroImage: '/images/grandma-museum-hero.jpg',
    heroImageMobile: '/images/grandma-museum-hero-s.jpg',
    overview:
      'I worked with Sarah Koik to concept and create The Grandma Museum: a digital archive of gifts from grandmothers to grandchildren. Visitors submit gifts they have received from their grandmothers which are displayed alongside Sarah\'s personal archive of over 100 gifts.',
    outcome:
      'We shot every item with a Nikon D800 and organized them into 12 categories. In 1 week, we had over 100k unique visitors and were featured on Buzzfeed, The Bold Italic, HOW magazine, Creative Review, and Under Consideration. Submissions came from Germany, Australia, England, and the US.',
    team: [
      { name: 'Patrick Alfred', role: 'Co-founder', company: '' },
      { name: 'Sarah Koik', role: 'Co-founder', company: '' },
    ],
    assets: [
      { src: '/images/grandma-museum-museum.jpg' },
      { src: '/images/grandma-museum-book.jpg' },
      { src: '/images/grandma-museum-jar.jpg' },
      { src: '/images/grandma-museum-stencil.jpg' },
      { src: '/images/grandma-museum-hohner.jpg' },
      { src: '/images/grandma-museum-glasses.jpg' },
      { src: '/images/grandma-museum-napkin.jpg' },
    ],
    prev: 'adidas',
    next: 'hpe',
  },
  {
    slug: 'apple-therockandsiri',
    title: 'Apple - The Rock & Siri',
    description:
      "When your day is as epic as The Rock's, you need a smarter way to take it on. With Siri, just say it and it's done.",
    homeImage: '/images/apple.jpg',
    isLocked: true,
    isExternal: true,
  },
  {
    slug: 'apple-accessibility',
    title: 'Apple - Accessibility',
    description:
      'The most powerful technology in the world is technology that everyone, including people with disabilities, can use.',
    homeImage: '/images/accessibility-tile.jpg',
    isLocked: true,
    isExternal: true,
  },
  {
    slug: 'venn',
    title: 'Venn',
    description: 'A social network aimed at increasing offline group/paired activities.',
    year: '2015',
    tags: ['Mobile'],
    homeImage: '/images/venn.jpg',
    heroImage: '/images/venn-hero.jpg',
    heroImageMobile: '/images/venn-hero-s.jpg',
    overview:
      'I was asked to design an interface that encouraged users to spend as little time within the application and more time in the real world.',
    outcome:
      'An iOS application that prided itself on its limited functionality. The design is intended to give the user an illusion of less screens than actually exist.',
    team: [
      { name: 'Patrick Alfred', role: 'Product Designer', company: 'In-house' },
    ],
    assets: [
      { src: '/images/venn-home2.jpg' },
      { src: '/images/venn-people.jpg' },
      { src: '/images/venn-ideas-mine.jpg' },
    ],
    prev: 'poll-everywhere',
    next: 'adidas',
  },
  {
    slug: 'disney',
    title: 'Disney +',
    description:
      'A subscription video on-demand streaming service owned and operated by The Walt Disney Company.',
    year: '2020',
    tags: ['B2C', 'Omni'],
    homeImage: '/images/home-tile-disney.png',
    heroImage: '/images/marquee-disney.png',
    heroImageMobile: '/images/marquee-disney.png',
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
        src: '/images/thumbnail-disney.jpg',
        href: 'https://drive.google.com/file/d/1wzF-iuS3YHoZckPcWDIRMOeq-aBGcKum/view',
        isExternal: true,
        isThumbnail: true,
      },
    ],
    prev: 'waterproof',
    next: 'rei',
  },
  {
    slug: 'hpe',
    title: 'Hewlett Packard Enterprise',
    description:
      "A market-leading company that's defining the next generation of infrastructure, software, and services for the New Style of IT.",
    year: '2015',
    tags: ['B2B', 'Web'],
    homeImage: '/images/hpe.jpg',
    heroImage: '/images/hpe-hero.jpg',
    heroImageMobile: '/images/hpe-hero-s.jpg',
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
      { src: '/images/pods.jpg' },
      { src: '/images/moonshot.jpg' },
      { src: '/images/servers.jpg' },
    ],
    prev: 'grandma-museum',
    next: 'waterproof',
  },
  {
    slug: 'molekule',
    title: 'Molekule',
    description:
      "After 20 years of research and development, Molekule, in partnership with the Environmental Protection Agency, introduced the world's first molecular air purifier.",
    year: '2016',
    tags: ['B2C', 'Web & Print'],
    homeImage: '/images/molekule.jpg',
    heroImage: '/images/molekule-hero.jpg',
    heroImageMobile: '/images/molekule-hero-s.jpg',
    overview:
      'After 20 years of research and development, Molekule, in partnership with the EPA, introduced the world\'s first molecular air purifier. I was responsible for all pre-launch design needs working with a brand identity by SF agency, Character.',
    outcome:
      'We created a beautiful website, direct mailers, white-papers, social ads, and an aggressive launch campaign to reveal the $800 product. Within 10 days, the entire first batch (1,500) sold out. By the time the product first shipped, Molekule sold out 4 pre-order batches.',
    team: [
      { name: 'Patrick Alfred', role: 'Sr. Visual Designer', company: 'Molekule' },
      { name: 'Peter Riering-Czekalla', role: 'CMO', company: 'Molekule' },
    ],
    assets: [
      { src: '/images/digital-mailer.jpg' },
      { src: '/images/mailer-1.jpg' },
      { src: '/images/mailer-2.jpg' },
      { src: '/images/whitepaper-1.jpg' },
      { src: '/images/whitepaper-2.jpg' },
      { src: '/images/whitepaper-3.jpg' },
      { src: '/images/whitepaper-4.jpg' },
    ],
    prev: 'waterproof',
    next: 'rei',
  },
  {
    slug: 'poll-everywhere',
    title: 'Poll Everywhere',
    description:
      'An audience response system with Keynote, PowerPoint, and Google Slides integrations. Using the web, audiences can abandon polling hardware in place of mobile phones.',
    year: '2017',
    tags: ['B2B', 'Web'],
    homeImage: '/images/poll-everywhere.jpg',
    heroImage: '/images/poll-everywhere-hero.jpg',
    heroImageMobile: '/images/poll-everywhere-hero-s.jpg',
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
      { src: '/images/homepage.jpg' },
      { src: '/images/vs.jpg' },
      { src: '/images/storytelling.jpg' },
      { src: '/images/components.jpg' },
    ],
    prev: 'rei',
    next: 'venn',
  },
  {
    slug: 'honda',
    title: 'Honda',
    description:
      'Since 1959, Honda has been the world\'s largest motorcycle manufacturer. Second largest automobile manufacturer in Japan, and eighth in the world.',
    year: '2015',
    tags: ['B2C', 'Web'],
    homeImage: '/images/honda-home.jpg',
    heroImage: '/images/honda-hero.jpg',
    heroImageMobile: '/images/honda-hero.jpg',
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
      { src: '/images/color-transmission.jpg' },
      { src: '/images/end-card.jpg' },
      { src: '/images/LED-headlights.jpg' },
      { src: '/images/power-tailgate.jpg' },
      {
        src: '/images/thumbnail-honda.jpg',
        href: 'https://vimeo.com/343330163',
        isExternal: true,
        isThumbnail: true,
      },
    ],
    prev: 'waterproof',
    next: 'rei',
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
