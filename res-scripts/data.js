const certInfo = {
    0 : {"title": "Harvard CS50 Web Programming Course",
        "desc":"A CS50 web development course, covering web technologies including HTML and CSS, Git, Python, Django, SQL management, and Javascript. Certification ivolved submitting 4 focused projects as well as a Final Project.",
        "url": "./res-images/certifications/CS50W Course Cert.JPG"},
    
    1 : {"title": "Responsive Web Design",
        "desc":"An fCC course covering web design with HTML and CSS, visual design, accessibility, responsive media queries, Flexbox layouts, and more. Certification required completing 5 projects covering skills learned.",
        "url": "./res-images/certifications/Responsive Web Design Cert.JPG"},

    2 : {"title": "Front End Libraries",
        "desc":"An fCC course introducing various popular front-end libraries, including BootStrap, FontAwesome, jQuery, SASS, React paired with Redux, and more. Certification required completing 5 projects covering skills rturned.",
        "url": "./res-images/certifications/Front End Developement Libraries.JPG"},
    
    3 : {"title": "JavaScript Algorithms and Data Structures",
        "desc":"An fCC course covering Javascript, covering basic algorithms, data structures, Objects, new ES6 implementations, RegEx, and its integration with Web Design . Certification required completing 5 scripting projects.",
        "url": "./res-images/certifications/JavaScript Algorithms and Data Structures.JPG"},

    4 : {"title": "Back End Development and APIs",
        "desc":"An fCC course covering backend web development and API usage, particularly with Node.js utilizing NPM, Express, MongoDB with Mongoose. Certification required completion of 5 backend microservice projects.",
        "url": "./res-images/certifications/Back End Development and APIs cert.JPG"},
    
    5 : {"title": "Quality Assurance",
        "desc":"An fCC course covering testing practices with Chai/Mocha, advances Node.js Sockets, OAuth and Passport session authentication, middleware, and more. Certification required completion of 5 Node projects.",
        "url": "./res-images/certifications/Quality Assurance Cert.JPG"},
        
    6 : {"title": "Relational Database Scripting",
        "desc":"An fCC course covering SQL with Postgres, table manipulations, queries, data generation, and manipulation with bash Scripting in Linux. Certification required creation of 5 SQL databases and 3 bash programs.",
        "url": "./res-images/certifications/Relational Database Cert.JPG"},
    
    7 : {"title": "Data Visualization",
        "desc":"An fCC course regarding the use of D3.js for various representations of data, retreiving and handling data, and API and AJAX requests. Certification required creation of 5 different graphing projects.",
        "url": "./res-images/certifications/Data Visualization Cert.JPG"},
        
    8 : {"title": "Information Security",
        "desc":"An fCC course site security, utilizing HelmentJS for Node, data hashing, Python for penitration testing, and tools such as Nmap and port scanning. Certification required completion of 5 backend applications.",
        "url": "./res-images/certifications/Information Security Cert.JPG"},
    
    9 : {"title": "Scientific Computing with Python",
        "desc":"An fCC course in utilizing Python for various tasks, including python data structures, SQLite databases, XML/JSON, Object Oriented programming, various automated web scraping, and more. Certification required creating 5 Python applications.",
        "url": "./res-images/certifications/Scientific Computing with Python Cert.JPG"},

    10 : {"title": "Data Analysis with Python",
        "desc":"An fCC course involving Python for data analysis, utilizing Jupyter notebooks, NumPy, MatPlotLib, and Pandas to process and plot vast amounts of data. Certification required writing 5 apps to analyse various data sets.",
        "url": "./res-images/certifications/Data Analyst Cert.JPG"},
    
    11 : {"title": "Machine Learning with Python",
        "desc":"An fCC course regarding Machine Learning with Python, Tensorflow, and Neural Networks for image analysis, classification, language models, and more. Certification required writing 5 applications using learning models for various tasks.",
        "url": "./res-images/certifications/Machine Learning with Python Cert.JPG"}
}

const projInfo =  {
    "proj-front" : {
        0 : {"title": "React-Redux Calculator",
        "desc":"A simple calculator with equation bar, created using React with Redux, utilizing Javascript. Submitted as a certification project. ",
        "image": "./res-images/projects/calculator.jpg",
        "link": "https://codepen.io/kinome79/full/popNNVV"},
        1 : {"title": "Session-Break Timer",
        "desc":"A Pomodoro Timer created using React with Redux in Javascript. It will alternate between session and break times, with animated time remaining bar. Submitted as a certification project. ",
        "image": "./res-images/projects/timer.jpg",
        "link": "https://codepen.io/kinome79/full/eYyvXEP"},
        2 : {"title": "Drum Machine",
        "desc":"A drum machine that plays 9 sounds each from two soundsets, written with Javascript. Uses both keyboard and mouse inputs. Submitted as a certification project. ",
        "image": "./res-images/projects/drum.jpg",
        "link": "https://codepen.io/kinome79/full/qBpaebp"},
        3 : {"title": "Weather App",
        "desc":"A weather site that makes various API call for data written with Javascript. It utilizes local storage for site locations, has animated radar map, and celsius/farenheit conversion.",
        "image": "./res-images/projects/weather.jpg",
        "link": "http://www.gojta.com/weather/"},
        4 : {"title": "D3 Cloropleth Map",
        "desc":"An education map generated completely with D3 visualization in Javascript, and JSON Retreived Data. Features mouse-over information pane and color value representations. Submitted as a certification project.",
        "image": "./res-images/projects/choropleth.jpg",
        "link": "https://codepen.io/kinome79/full/bGavJay"},
        5 : {"title": "D3 Bar Chart",
        "desc":"A GDP bar chart generated completely with D3 visualization in Javascript, and JSON Retreived Data. Features mouse-over information pane and color value representations. Submitted as a certification project.",
        "image": "./res-images/projects/bar.jpg",
        "link": "https://codepen.io/kinome79/full/xxpXPva"},
        6 : {"title": "Scatter Plot Graph",
        "desc":"A scatter plot regarding cyclist doping generated completely with D3 visualization in Javascript, and JSON Retreived Data. Features mouse-over information pane and color value representations. Submitted as a certification project.",
        "image": "./res-images/projects/scatterplot.jpg",
        "link": "https://codepen.io/kinome79/full/zYpPqrQ"},
        7 : {"title": "Heat Map Plot",
        "desc":"A heat plot of global temperatures generated completely with D3 visualization in Javascript, and JSON Retreived Data. Features mouse-over information pane and color value representations. Submitted as a certification project.",
        "image": "./res-images/projects/heatmap.jpg",
        "link": "https://codepen.io/kinome79/full/yLppOYj"},
        8 : {"title": "Treemap Diagram",
        "desc":"Boxoffice earnings plotted as treemap completely with D3 visualization in Javascript, and JSON Retreived Data. Features mouse-over information pane and color value representations. Submitted as a certification project.",
        "image": "./res-images/projects/treemap.jpg",
        "link": "https://codepen.io/kinome79/full/XWVqoMb"},
        9 : {"title": "Technical Documentation",
        "desc":"A simple technical documentation page completed with only html and CSS. An early project created and used as a submission as a certification project.",
        "image": "./res-images/projects/techpage.jpg",
        "link": "https://codepen.io/kinome79/full/LYOJavz"}
    },
    "proj-back" : { },
    "proj-data" : { },
    "proj-other" : { }
}