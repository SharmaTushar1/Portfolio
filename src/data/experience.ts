export type Experience = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  location?: string;
  highlights: string[];
  learned?: string;
};

export type Education = {
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  learned: string;
};

export const education: Education = {
  institution: 'Jaipur Engineering College and Research Centre',
  degree: 'B.Tech, Computer Science and Engineering',
  location: 'Jaipur, Rajasthan',
  startDate: 'July 2019',
  endDate: 'August 2023',
  highlights: [
    'Participated in various hackathons and tech fests.',
    'Built a strong foundation in computer science fundamentals.',
    'Member of the college robotics tech group (Xananoids); built a maze-solving robot.',
    'Studied data structures and algorithms, object-oriented programming, and databases.',
  ],
  learned: 'Learned to combine theory with hands-on building—from algorithms to robotics—and to ship under time pressure in hackathons and team projects.',
};

export const experiences: Experience[] = [
  {
    company: 'C3.AI',
    role: 'Software Engineer',
    startDate: 'March 2025',
    endDate: 'Present',
    location: 'Bengaluru, Karnataka',
    highlights: [
      'Own and improve property appraisal applications: investigate and resolve critical data ingestion issues that directly reduce customer escalations and support ticket volume.',
      'Design and ship automation that replaces manual data pipelines—dramatically cutting ingestion time and freeing the team to focus on higher-impact work.',
      'Zero-downtime version upgrades of the property appraisal platform across multiple enterprise clients, coordinating releases and validation.',
      'Identify and fix data anomalies in energy management applications, improving data integrity and reliability for utility clients.',
      'Contribute to internal documentation and community. Help onboard new engineers and improve the team\'s efficiency and knowledge.',
    ],
    learned: 'How to operate in a large-scale, enterprise setting: data pipelines, release discipline, and being a reliable go-to for cross-team support.',
  },
  {
    company: 'InfraSingularity',
    role: 'Lead Developer',
    startDate: 'Sep 2023',
    endDate: 'March 2025',
    location: 'Remote',
    highlights: [
      'Lead end-to-end PWA and point-of-sale development for SkyPie, a hotel perk management product—driving major user growth and significantly improving retention.',
      'Build a custom Slack-integrated, real-time data tool that streamlines business operations and gives the team instant visibility into key metrics.',
      'Shipped an AI-powered agent that automates core product workflows, reducing operational overhead and improving the end-user experience.',
      'Architectured and implemented a robust user roles and authentication framework leveraging NestJS Guards for secure, role-based access control.',
      'Own reliability of critical protocol infrastructure: optimize node management and environments to maintain consistently high uptime.',
    ],
    learned: 'How to handle things at a 0->1 startup. How to wear multiple hats and ship things quickly. Leading product development from idea to ship, integrate AI into workflows, and keep critical infrastructure reliable with limited resources.',
  },
  {
    company: 'Thrillophilia',
    role: 'SDE Intern',
    startDate: 'Jan 2023',
    endDate: 'April 2023',
    location: 'Jaipur, Rajasthan',
    highlights: [
      'Deliver a call analysis application that improves customer satisfaction and helps support teams make better, data-driven decisions on every call.',
      'Implement automated failed-payment detection and recovery flows, reclaiming significant recurring revenue and reducing manual follow-up.',
      'Introduce Sentry for error monitoring and logging—reducing time-to-diagnosis and helping the team ship with higher confidence.',
    ],
    learned: 'How to ship user-facing and internal tools in a fast-paced product environment, and how observability and automation improve both revenue and developer experience.',
  },
  {
    company: 'hEGI',
    role: 'Frontend Engineer Intern',
    startDate: 'Feb 2022',
    endDate: 'April 2022',
    location: 'Remote',
    highlights: [
      'Ship a rich text editor and note-taking experience that meaningfully increases paid subscriptions and engagement.',
      'Redesign and implement the purchasing portal for online courses, leading to a strong uplift in course sales and conversion.',
    ],
    learned: 'How to design and ship frontend experiences that directly drive subscriptions and conversion, and how to work with rich text and e-commerce flows.',
  },
];
