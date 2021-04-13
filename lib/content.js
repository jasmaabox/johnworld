const config = {
  'siteName': 'Johnworld',
};

const content = {
  'name': 'John Smith',
  'profileImg': '/profile.jpg',
  'description': `hi im john. im a new grad looking for exciting opportunities as a 
  professional front-end web developer. my hobbies include skydiving and reading rfcs.
  I also enjoy cats.`,
  'work': [
    {
      'startDate': '2012-01-03',
      'endDate': '2012-04-03',
      'title': 'Data Intern',
      'location': 'CAlifornia',
      'company': '██████',
      'description': `
      - Sorted and cleaned data in Microsoft Excel.
      - Participated in daily stand-ups and sit-downs as part of a jile team.
      - Poured coffee for boss which increased work efficacy by 30x.`,
    },
    {
      'startDate': '2012-01-03',
      'endDate': '2012-04-03',
      'title': 'Research Intern',
      'location': 'Connect 4',
      'company': 'Human rresearch Lab @ Yell university',
      'description': `
      - Worked with GANs to optimize protein folding and analyzed data with R and GeneFindr.
      - Increased folding productivity by 10x saving the human body $50,000.
      - Completely re-hauled the production web service and databases without prior notice because they were bad.`,
    },
  ],
  'projects': [
    {
      'name': 'Unsolicited Re-design of Goodreads mobile app',
      'description': `
      - Created extremely innovative mockup with the use of Microsoft powerpoint.
      - Experimented with lo-fi technologies such as cardboard, masking tape, and hammer.
      - Design increased user engagement metric by 10x.`,
      'projectURL': 'https://example.com',
      'repositoryURL': null,
    },
    {
      'name': 'LinkedIn Bot',
      'description': `
      - Automatically answers messages and spams recruiters on LinkedIn.
      - Used modern front-end technologies such as Prolog and Adobe coldfusion.`,
      'projectURL': 'https://example.com',
      'repositoryURL': null,
    },
  ],
  'social': {
    'github': 'https://github.com',
    'linkedin': 'https://linkedin.com',
    'facebook': 'https://facebook.com',
    'twitter': 'https://twitter.com',
  },
};

export { config, content };