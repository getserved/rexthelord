
export const cv = {
  state: {
    cv: {
      name: 'JIN MENG',
      title: 'Front End Developer',
      mobile: '0423337006',
      mail: 'getserved06@gmail.com',
      summary: 'Versatile Analyst Programmer versed in J2EE/PHP and UI/UX engineering. Self-directed leader who fosters a collaborative and supportive team environment. Analytical Programmer possesses strong knowledge of Web Developing. Quickly masters new software packages and up-to-date technologies.',
      skills: [
            {name: 'Vue/React/Angular', level: 5},
            {name: 'HTML/JS/JQUERY/CSS/SCSS', level: 5},
            {name: 'J2EE/Java', level: 5}
      ],
      workHistories: [
            { title: 'Front End Developer',
              subtitle: 'News Corp',
              location: 'Sydney',
              startDate: 'Oct 2018',
              endDate: 'Jan 2020',
              descriptions: [
                      'Created eye catching and functional digital design concepts across various platforms to strengthen company brand and identity.',
                      'Pinpointed user experience issues to devise targeted suggestions for creating cohesive user experience.',
                      'Accomplished 80+websites by Vue.js and developed 4 templates for different visual effects.',
                      'Template and develop widgets in sales-oriented CMS, utilizing VUEX and Firebase.',
                      'Researched new technologies, software packages and visual components for use in website projects.'
              ]
            },
            { title: 'Programmer Analyst',
              subtitle: 'FXPlus Trading Acadamy',
              location: 'Sydney',
              startDate: 'Nov 2017',
              endDate: 'Aug 2018',
              descriptions: [
                      'Utilizing cutting-edge technologies HTML5/Bootstrap4/Scss/OPENGL/React.js/Angular to design and implement a various of applications',
                      'Designed intuitive UI/UX using knowledge of HTML5/Bootstrap4/Scss/OPENGL/React.js/Angular.',
                      'Designed Landing pages for Fintech using Bootstrap4/Scss/Jquery/Three.js/OpenGL Animation.',
                      'Leading Front-end developing on ROR based Blockchain Exchange Platform Project.'
              ]
            },
            { title: 'Programmer Analyst',
              subtitle: 'TKL Health DD',
              location: 'Sydney',
              startDate: 'Jun 2017',
              endDate: 'Nov 2017',
              descriptions: [
                      'Developed on WebView-based hybrid mobile & web application.',
                      'Server management including Load Balance, log tracing, database connection fixing.',
                      'Performance Optimizing in Alicloud Server.'
              ]
            },
            { title: 'Programmer Analyst',
              subtitle: 'Onsemi Ltd',
              location: 'Hong Kong',
              startDate: 'Feb 2014',
              endDate: 'Jun 2016',
              descriptions: [
                      'Largely reduce the volume of the Javascript file by substitution of 70% codes. • Establish prototype inner framework for reusing extendable and flexible utilities.',
                      'Customization. Collect User Requirements, promptly find solution and initiate prototype, Agile Development, Full testing and Documentation. Over 10 critical heavy customizations, 50+ new features and interactions done.',
                      'Developed Single-Sign- On by Spnego protocol, embed Authentication and Restful webservice by Restlet and Runtime import list by middleware.'
              ]
            },
            { title: 'Senior Programmer',
              subtitle: 'iOne Financial Press Limited',
              location: 'Hong Kong',
              startDate: 'Jul 2010',
              endDate: 'Sep 2013',
              descriptions: [
                      'Develop enterprise management and collaboration systems by Struts2 (J2EE framework).',
                      'Transaction Management System',
                      'Purchase Order System',
                      'Job Collaboration System',
                      'Image Search System',
                      'Use Hibernate Search (based on Lucene Search Engine) for text search and LIRE(Lucene Image Retrieval) for image search. Support dynamic search by text/image combination and search upon results. Support batch image/keywords updates.',
                      'Dramatically improve processing time for 80% by one-click solution for 4-filetype transformation and typesetting format transformation.'

              ]
            },
            { title: 'Front End Developer',
              subtitle: 'Lottery Predict software',
              location: 'Beijing, China',
              startDate: 'Jul 2008',
              endDate: 'Feb 2009',
              descriptions: [
                      'Develop Client/Server based algorithm-based lottery prediction software.',
                      'Java SWT based Client. For cross-platform solution.',
                      '100+ algorithm and 30+ types of table implemented. 7600+ variable combinations.',
                      'Implement Double cached slide table & Customizable Search Tools.'
              ]
            }
        ],
        education: [
            {
              title: 'Master of Science',
              subtitle: 'The Hong Kong University Of Science & Technology',
              location: 'Hong Kong',
              startDate: 'Sep 2009',
              endDate: 'Jun 2010',
              descriptions: [
                      'Main projects in AI (Artificial Intelligence) especially in Active Learning. Directed by Qiang YANG (Top Expert in Data Mining Field).',
                      'Compare various Cluster and non-Cluster algorithms in Active Learning Competition 2010'
              ]
            },
            {
              title: 'Queen Mary London & BUPT Beijing',
              subtitle: 'Bsc & Beng',
              location: 'Beijing, China',
              startDate: 'Sep 2005',
              endDate: 'Jun 2009',
              descriptions: [
                      'Awarded College Scholarship (two out of all) by Final Design \'Strategy-based Game AI Platform\''
              ]
            }
        ],
        languages: [
          {name: 'Certified English Level (PTE: Score 84)', level: 5},
          {name: 'Native Speaker of Mandarin', level: 5},
          {name: 'Excellent Command in Cantonese', level: 4}
        ]
    }
  },
  getters: {
    cvHeader: state => {
      return {
        name: state.cv.name,
        title: state.cv.title,
        summary: state.cv.summary
      }
    },
    cvInfo: state => {
      return {
        mobile: state.cv.mobile,
        mail: state.cv.mail
      }
    },
    cvSkills: state => {
      return state.cv.skills
    },
    cvWorkHistories: state => {
      return state.cv.workHistories
    },
    cvEducation: state => {
      return state.cv.education
    },
    cvLanguages: state => {
      return state.cv.languages
    }
  }
}
