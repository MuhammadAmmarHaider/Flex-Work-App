const posts = [
    {
      id: '1',
      title: "Senior Front-End Developer for E-Commerce Site",
      postedTime: "2 hours ago",
      location: "Remote",
      type: "Ongoing project",
      roleType:'Front End Development',
      budget: {
        amount: 45,
        paymentType: "Hourly",
        experienceLevel: "Senior"
      },
      estimatedDuration: "6+ months",
      workload: "More than 20 hrs/week",
      description: "We're looking for a front-end developer to build a responsive e-commerce site using React, Redux, and Material-UI. Your role will involve optimizing performance, creating reusable components, and ensuring a smooth user experience.",
      skills: [
        "React",
        "Redux",
        "JavaScript",
        "Material-UI",
        "HTML/CSS"
      ],
      client: {
        paymentVerified: true,
        clientRating: 4.9,
        clientSpent: "10k+",
        clientLocation: "USA"
      },
      proposalsRange: "15 to 25"
    },
    {
      id: '2',
      title: "Python Developer for Data Science Project",
      postedTime: "3 hours ago",
      location: "Remote",
      type: "One-time project",
      roleType:'Data Science Development',
      budget: {
        amount: 100,
        paymentType: "Fixed-price",
        experienceLevel: "Intermediate"
      },
      estimatedDuration: "1 month",
      workload: "Full-time",
      description: "We need a Python developer with experience in data science to assist in building machine learning models for a recommendation system. The project will involve data cleaning, feature engineering, and model evaluation.",
      skills: [
        "Python",
        "Machine Learning",
        "Data Science",
        "Pandas",
        "NumPy",
        "TensorFlow"
      ],
      client: {
        paymentVerified: true,
        clientRating: 2,
        clientSpent: "3k+",
        clientLocation: "UK"
      },
      proposalsRange: "5 to 15"
    },
    {
      id: '3',
      title: "Mobile App Developer for Health & Fitness App",
      postedTime: "5 hours ago",
      location: "On-site",
      type: "Contract",
      roleType:'Mobile App Deveopment',
      budget: {
        amount: 60,
        currency: "USD",
        paymentType: "Hourly",
        experienceLevel: "Expert"
      },
      estimatedDuration: "4+ months",
      workload: "Full-time",
      description: "We are looking for an experienced mobile app developer to build a health and fitness app that integrates with wearables. The app should track workouts, nutrition, and provide personalized health recommendations.",
      skills: [
        "React Native",
        "iOS Development",
        "Android Development",
        "Wearable Devices",
        "UI/UX"
      ],
      client: {
        paymentVerified: true,
        clientRating: 4.5,
        clientSpent: "8k+",
        clientLocation: "Canada"
      },
      proposalsRange: "20 to 30"
    },
    {
      id: '4',
      title: "DevOps Engineer for Cloud Infrastructure Setup",
      postedTime: "1 day ago",
      location: "Remote",
      type: "Ongoing project",
      roleType:'Cloud Deployment',
      budget: {
        amount: 50,
        currency: "USD",
        paymentType: "Hourly",
        experienceLevel: "Senior"
      },
      estimatedDuration: "3+ months",
      workload: "Full-time",
      description: "We need an experienced DevOps engineer to help set up and manage our cloud infrastructure. This includes creating CI/CD pipelines, configuring Kubernetes clusters, and automating deployment processes.",
      skills: [
        "DevOps",
        "Kubernetes",
        "CI/CD",
        "Docker",
        "AWS",
        "GCP",
        "Azure",
        "Bash",
        "Python"
      ],
      client: {
        paymentVerified: false,
        clientRating: 3.6,
        clientSpent: "7k+",
        clientLocation: "Australia"
      },
      proposalsRange: "10 to 15"
    }
  ];
export default posts;