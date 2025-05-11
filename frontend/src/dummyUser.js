<<<<<<< HEAD
const dummyUser = [
    {
        _id: "ObjectId",
        email: "abc@gmail.com",
        password: "123",
        role: "admin",
        name: "John Doe",
        location: "Lahore",
        balance: "0",
        rating: {
            value: 4.5,
            count: 28
        },
        billingInfo: {
            holderName: 'abc xyz',
            cardNumber: "5555555555554444",
            expiryDate: "11/27",
            cvc: "456",
            billingAddress: "456 Business Road, Karachi"
        },
        freelancerProfile: {
            title: "Software Engineer | MERN Stack",
            skills: ["React", "Node.js"],
            hourlyRate: 30,
            experienceLevel: "intermediate",
            bio: "SOFTWARE ENGINEERING STUDENT...",
            proposals: ["proposalId1", "proposalId2"],
            spent: 0,
            earned: 1200,
            workHistory: [
                {
                    title: "Frontend Developer",
                    company: "ABC Solutions",
                    startDate: "2021-01-01",
                    endDate: "2023-01-01",
                    description: "Built and maintained frontend applications using React."
                }
            ],
            education: [
                {
                    degree: "BS in Software Engineering",
                    institution: "FAST NUCES",
                    startDate: "2015-08-01",
                    endDate: "2019-06-01"
                }
            ],
            languages: [
                { name: "English", proficiency: "Fluent" },
                { name: "Urdu", proficiency: "Native" }
            ],
            projectsCatalog: []
        },
        clientProfile: {
            companyName: "Tech Innovate",
            jobsPosted: ["jobId1", "jobId2"],
            industry: "Tech & IT",
            companyWebsite: "https://techinnovate.com",
            description: "Lorem ipsum...",
            spent: 2000,
            earned: 0
        },
        createdAt: "2024-01-01T00:00:00Z"
    },
    /** 
* Paste one or more documents here
*/
    {
        "email": "client@ex.com",
        "password": "123",
        "role": "client",
        "name": "Alice Johnson",
        "location": "San Francisco, CA",
        "balance": 500,
        "rating": {
            "value": 4.8,
            "count": 10
        },
        "billingInfo": {
            "holderName": "Alice Johnson",
            "cardNumber": "4111111111111111",
            "expiryDate": "12/26",
            "cvc": "321",
            "billingAddress": "456 Elm St, San Francisco, CA"
        },
        "clientProfile": {
            "companyName": "Tech Solutions Inc.",
            "jobsPosted": [],
            "industry": "Software Development",
            "companyWebsite": "https://techsolutions.com",
            "description": "We build enterprise SaaS platforms."
        },
        "createdAt": {
            "$date": "2024-06-01T10:00:00.000Z"
        }
    },
    /** 
* Paste one or more documents here
*/
    {
        "email": "freelancer@ex.com",
        "password": "123",
        "role": "freelancer",
        "name": "Bob Martinez",
        "location": "Austin, TX",
        "balance": 1200,
        "rating": {
            "value": 4.9,
            "count": 25
        },
        "billingInfo": {
            "holderName": "Bob Martinez",
            "cardNumber": "5555555555554444",
            "expiryDate": "08/25",
            "cvc": "456",
            "billingAddress": "789 Oak Ave, Austin, TX"
        },
        "freelancerProfile": {
            "title": "Full-Stack Developer",
            "skills": [
                "JavaScript",
                "React",
                "Node.js",
                "MongoDB"
            ],
            "hourlyRate": 50,
            "experienceLevel": "senior",
            "bio": "Experienced full-stack developer with 8+ years of hands-on work.",
            "proposals": [],
            "workHistory": [
                {
                    "title": "Senior Developer",
                    "company": "WebWorks LLC",
                    "startDate": {
                        "$date": "2020-01-01T00:00:00.000Z"
                    },
                    "endDate": {
                        "$date": "2023-01-01T00:00:00.000Z"
                    },
                    "description": "Led frontend development and API integrations."
                }
            ],
            "education": [
                {
                    "degree": "BSc Computer Science",
                    "institution": "University of Texas",
                    "startDate": {
                        "$date": "2014-09-01T00:00:00.000Z"
                    },
                    "endDate": {
                        "$date": "2018-06-01T00:00:00.000Z"
                    }
                }
            ],
            "languages": [
                {
                    "name": "English",
                    "proficiency": "Fluent"
                },
                {
                    "name": "Spanish",
                    "proficiency": "Intermediate"
                }
            ],
            "projectsCatalog": [
                {
                    "title": "Task Manager App",
                    "description": "A full-stack productivity tool for managing tasks and deadlines.",
                    "technologies": [
                        "React",
                        "Node.js",
                        "MongoDB"
                    ]
                }
            ]
        },
        "createdAt": {
            "$date": "2024-07-15T14:30:00.000Z"
        }
    }
];


=======
const dummyUser = [
    {
        _id: "ObjectId",
        email: "abc@gmail.com",
        password: "123",
        role: "admin",
        name: "John Doe",
        location: "Lahore",
        balance: "0",
        rating: {
            value: 4.5,
            count: 28
        },
        billingInfo: {
            holderName: 'abc xyz',
            cardNumber: "5555555555554444",
            expiryDate: "11/27",
            cvc: "456",
            billingAddress: "456 Business Road, Karachi"
        },
        freelancerProfile: {
            title: "Software Engineer | MERN Stack",
            skills: ["React", "Node.js"],
            hourlyRate: 30,
            experienceLevel: "intermediate",
            bio: "SOFTWARE ENGINEERING STUDENT...",
            proposals: ["proposalId1", "proposalId2"],
            spent: 0,
            earned: 1200,
            workHistory: [
                {
                    title: "Frontend Developer",
                    company: "ABC Solutions",
                    startDate: "2021-01-01",
                    endDate: "2023-01-01",
                    description: "Built and maintained frontend applications using React."
                }
            ],
            education: [
                {
                    degree: "BS in Software Engineering",
                    institution: "FAST NUCES",
                    startDate: "2015-08-01",
                    endDate: "2019-06-01"
                }
            ],
            languages: [
                { name: "English", proficiency: "Fluent" },
                { name: "Urdu", proficiency: "Native" }
            ],
            projectsCatalog: []
        },
        clientProfile: {
            companyName: "Tech Innovate",
            jobsPosted: ["jobId1", "jobId2"],
            industry: "Tech & IT",
            companyWebsite: "https://techinnovate.com",
            description: "Lorem ipsum...",
            spent: 2000,
            earned: 0
        },
        createdAt: "2024-01-01T00:00:00Z"
    }
];


>>>>>>> 94b17bf0681ccd7648c14468b2742919ae96c24c
export default dummyUser;