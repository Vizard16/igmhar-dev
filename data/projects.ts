import { url } from "inspector";

export const projects = [
  {
    id: "autonomous-robot",
    title: "Mobile Autonomous Roomba with ML Pathing",
    category: "Robotics",
    image: "/images/projects/Roomba.jpeg",
    projectInfo: [
      "Designed and developed a mobile autonomous robot (Roomba-style) software capable of navigating complex environments with machine learning-based path planning.",
      "Integrated ROS2 with Arduino for motor control and real-time LIDAR mapping.",
      "Implemented reinforcement learning techniques to optimize pathing in dynamic environments.",
      "Successfully created a fully autonomous mobile robot capable of navigating complex environments.",
    ],
    client: "Ender Industrial",
    role: "Team Lead / Software Engineer",
    technologies:
      "ROS2, Arduino, Raspberry Pi, Python, C++, Machine Learning, LIDAR, SLAM, Nav2, Gazebo, Rviz, React, TypeScript",
    industry: "Robotics",
    date: "March-June 2024",
    details: {
      images: [
        "/images/projects/Roomba.jpeg",
        "/images/projects/mechatronics_architecture.jpeg",
        "/images/projects/open_roomba.jpeg",
        "/images/projects/ROS2.jpeg",
        "/images/projects/Team_roomba.jpeg",
        "/images/projects/expo-roomba.jpeg",
        "/images/projects/EsquematicoRoomba.png",
      ],
    },

    urls: [
      {
        icon: "fab fa-github",
        name: "GitHub Repo of Raspberry Pi code",
        link: "https://github.com/Vizard16/RoombaRasp",
      },
      {
        icon: "fab fa-github",
        name: "GitHub Repo of User code",
        link: "https://github.com/Vizard16/Roomba",
      },
      {
        icon: "fa-solid fa-file",
        name: "Research Paper 2024",
        link: "https://drive.google.com/file/d/1NF-DHHo_ZJCKpiAKqsGjQ1vo92AKGYrO/view?usp=drive_link",
      },
      {
        icon: "fa-solid fa-file",
        name: "Technical Poster 2024",
        link: "https://drive.google.com/file/d/1LOE-XLF4ejuPmyMPiLVhUyBbGtjJlkX2/view?usp=sharing",
      },
      {
        icon: "fa-solid fa-briefcase",
        name: "Presentation of the project",
        link: "https://docs.google.com/presentation/d/121lnaXHdp2k1CjscocDnoBtl8WwwO-0o/edit?slide=id.p1#slide=id.p1",
      },
      {
        icon: "fa-brands fa-youtube",
        name: "Video explaining all the functionalities of the robot",
        link: "https://youtu.be/SePXfnya6YA",
      },
      {
        icon: "fa-brands fa-youtube",
        name: "Robot Gazebo simulation video",
        link: "https://youtu.be/04XDhsdJZJI",
      },
    ],
  },
  {
    id: "assembly-system",
    title: "Automated Piston-Oriented Assembly System",
    category: "Robotics",
    image: "/images/projects/Ciberphysics22.png",
    projectInfo: [
      "Developed an entirely automated control of a manufacturing process of a piston assembly",
      "Programmed mobile robots routes using a Mobile Robot Omron LD-60 AGV,",
      "Implemented a user-friendly HMI for real-time monitoring and control.",
      "Programmed cognex vision system for quality assurance and part verification.",
      "Programmed and develop Technomatix process simulate digital twin of the entire assembly line.",
      "Applied mechatronic design principles to improve assembly speed and reduce error.",
    ],
    client: "Manchester Robotics / Tecnológico de Monterrey",
    role: "Team Lead / Software Engineer",
    technologies:
      "Omron Robots, UR collaborative robots, Cognex, C++, Technomatix, PLC, HMI",
    industry: "Robotics",
    date: "2023",
    details: {
      images: [
        "/images/projects/Ciberphysics22.png",
        "/images/projects/Omronteam.jpeg",
        "/images/projects/PS_ciber.png",
      ],
    },
    urls: [
      {
        icon: "fa-brands fa-youtube",
        name: "Video demonstration of the project",
        link: "https://youtu.be/P4SYQE-Q6xw",
      },
      {
        icon: "fa-brands fa-youtube",
        name: "Video demonstration of the digital twin",
        link: "https://drive.google.com/file/d/1D6JvaiZBlYdFnmmhzMM_efQnz8Hd0u-o/view",
      },
      {
        icon: "fa-solid fa-file",
        name: "Technical Report 2023",
        link: "https://docs.google.com/document/d/1-R5qbY1L7U8lVcIkf6yNncKggK0Ck_MYOUQlz2qzQtk/edit?usp=sharing",
      },
      {
        icon: "fa-solid fa-briefcase",
        name: "Presentation of the project",
        link: "https://www.canva.com/design/DAF1ksMctkc/XkHT743A_ehyzJS57Y1aOw/edit?utm_content=DAF1ksMctkc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      },
    ],
  },
  {
    id: "pick-place",
    title: "Mobile Robot + Robotic Arm Pick & Place",
    category: "Robotics",
    image: "/images/projects/ciberfisicos2.jpg",
    projectInfo: [
      "Built a hybrid system software with a mobile robot and robotic arm to automate pick-and-place tasks, comunicating with each other with ROS topics.",
      "Implemented ROS navigation stack and PID precise controller for the robot to reach its target with odometry plane.",
      "Integrated xArm kinematics with trajectory planning to ensure precision placement.",
    ],
    client: "Manchester Robotics / Tecnológico de Monterrey",
    role: "Team Lead / Software Engineer",
    technologies:
      "ROS, Python, Arduino, C++, xArm, PID Control, Rviz simulation, Odometry",
    industry: "Robotics",
    date: "2023",
    details: {
      images: [
        "/images/projects/ciberfisicos2.jpg",
        "images/projects/dashgo+xarm.jpeg",
        "images/projects/TeamDashgo.jpeg",
      ],
    },
    urls: [
      {
        icon: "fab fa-github",
        name: "GitHub Repo",
        link: "https://github.com/Vizard16/ROS_DashgoB1.git",
      },
      {
        icon: "fa-solid fa-file",
        name: "Description Paper 2023",
        link: "https://docs.google.com/document/d/1LPw2zzyljdlFDqEOrjGglVK60QhnjYhGRL5HMVeR5Jg/edit?tab=t.0",
      },
      {
        icon: "fa-brands fa-youtube",
        name: "Explanatory video of all the functionalities of the robot",
        link: "https://www.youtube.com/watch?v=P-fUD5amX28",
      },
      {
        icon: "fa-brands fa-youtube",
        name: "Trajectory video test of the robot",
        link: "https://www.youtube.com/watch?v=ResQEGeZidI",
      },
    ],
  },
  {
    id: "packaging-process",
    title: "Semi-Automated Packaging Process",
    category: "Industrial Automation",
    image: "/images/projects/SemiAutomated.png",
    projectInfo: [
      "Developed a semi-automated control of a packaging process with the materials of the construction of a holonomic robot.",
      "Enabled operator-machine collaboration by integrating HMI and PLC systems.",
      "Develop digital twin of the packaging process in real time using Tecnomatix Process Simulate.",
      "Reduced manual labor requirements while maintaining quality assurance.",
    ],
    client: "SIEMENS / Manchester Robotics",
    role: "Software Developer / PLC Programmer",
    technologies: "PLC Siemens, HMI, Sensors, Actuators, CAD, Python",
    industry: "Automation",
    date: "2023",
    details: {
      images: [
        "/images/projects/SemiAutomated.png",
        "/images/projects/Pickandplace.png",
        "/images/projects/Pickandplacereal.jpeg",
        "/images/projects/Picknplaceteam.jpeg",
      ],
    },
  },
  {
    id: "tractor-cab",
    title: "Precise Temperature Control of Tractor Cabs",
    category: "Industrial Automation",
    image: "/images/projects/CabinReal.png",
    projectInfo: [
      "Developed a temperature regulation system for tractor cabins with precise sensor-actuator feedback.",
      "Implemented PID controllers for HVAC system control.",
      "Validated performance for user use cases.",
    ],
    client: "John Deere",
    role: "Control Systems Engineer, Electronics Designer",
    technologies: "C++, PID, Arduino, SolidWorks",
    industry: "Agriculture Automation",
    date: "2022",
    details: {
      images: [
        "/images/projects/CabinReal.png",
        "/images/projects/Circuits-heater.png",
        "/images/projects/Heatercabin.png",
      ],
    },
    urls: [
      {
        icon: "fa-solid fa-file",
        name: "Description Paper 2022",
        link: "https://drive.google.com/file/d/100FNx_8ieJEwoyNb8S-u2V4SKkYgdypF/view?usp=sharing",
      },
      {
        icon: "fa-brands fa-youtube",
        name: "Video demonstration of the project",
        link: "https://www.youtube.com/watch?v=UH4zeADmeHA",
      },
    ],
  },
  {
    id: "electroplating",
    title: "Automatic Electroplating Project",
    category: "Industrial Automation",
    image: "/images/projects/Electroplateado.png",
    projectInfo: [
      "Automated an electroplating process with embedded systems and precision control.",
      "Developed Arduino-based control systems for voltage and current regulation.",
      "Developed Labview HMI for real-time monitoring and adjustments.",
      "Designed circuit layouts and optimized current control for material coating.",
      "Enhanced safety and consistency of industrial plating operations.",
    ],
    client: "Tecnológico de Monterrey",
    role: "Software Developer / Embedded Systems Engineer",
    technologies: "Labview, Arduino, PID Control, Embedded Systems",
    industry: "Automation",
    date: "2022",
    details: {
      images: [
        "/images/projects/Electroplateado.png",
        "/images/projects/Electroplating.png",
      ],
    },
    urls: [
      {
        icon: "fa-solid fa-file",
        name: "Description Paper 2022",
        link: "https://docs.google.com/document/d/1bi3jif_WNyGJ7cVfV3_iRx__49ulI-aw/edit?usp=sharing&ouid=108531436177214090631&rtpof=true&sd=true",
      },
      {
        icon: "fa-brands fa-youtube",
        name: "Video demonstration of the project",
        link: "https://www.youtube.com/watch?v=dAr9wRrG7sI",
      },
    ],
  },
  {
    id: "robotic-arm-opencv",
    title: "Robotic Arm with Face Tracking",
    category: "Robotics",
    image: "/images/projects/FaceTrackerRobot.jpeg",
    projectInfo: [
      "Project made for helping discapacitated people. Built a robotic arm capable of moving based on detected face positions using OpenCV.",
      "Integrated servo control with real-time video tracking.",
      "Demonstrated human-robot interaction with adaptive movements.",
    ],
    client: "Shibaura Institute of Technology, Tokyo, Japan",
    role: "Robotics Engineer",
    technologies: "OpenCV, Python, Arduino, Servo Control, PID Control",
    industry: "Robotics",
    date: "2023",
    details: {
      images: [
        "/images/projects/FaceTrackerRobot.jpeg",
        "/images/projects/facetracking.png",
        "/images/projects/JapanTeam.jpeg",
      ],
    },
    urls: [
      {
        icon: "fab fa-github",
        name: "GitHub Repo",
        link: "https://github.com/Vizard16/RobotServo-ArduinoControl-OpenCV",
      },
      {
        icon: "fa-brands fa-youtube",
        name: "Video demonstration of the project",
        link: "https://www.youtube.com/watch?v=TdQBC3y2Qks",
      },
    ],
  },
  {
    id: "emotion-detector",
    title: "Emotion Detector (Rust + WASM)",
    category: "Personal Projects",
    image: "/images/projects/rustimage.png",
    projectInfo: [
      "Developed a built-in web app of emotion detector using Rust and WebAssembly.",
      "Vectorized emotion datasets and trained logistic regression classifiers using LINFA library.",
      "Enabled deployment directly on browsers for real-time emotion inference without the need of preload the model.",
    ],
    client: "Personal Project",
    technologies: "Rust, WASM, Machine Learning, linfa, Svelte",
    industry: "AI",
    date: "2024",
    details: {
      images: [
        "/images/projects/rustimage.png",
        "/images/projects/joyrust.png",
        "/images/projects/angryrust.png",
        "/images/projects/Sadrust.png",
        "/images/projects/Simple.png",
      ],
    },
    urls: [
      {
        icon: "fab fa-github",
        name: "GitHub Repo",
        link: "https://github.com/Vizard16/RustMood",
      },
      {
        icon: "fa-solid fa-briefcase",
        name: "Link of the web app",
        link: "https://rust-mood.vercel.app/",
      },
    ],
  },

  {
    id: "medical-appointments",
    title: "CSS Medical Records App",
    category: "Work Experience",
    image: "/images/projects/CSS5.png",
    projectInfo: [
      "Developed and maintained software React Typescript app for saving medical records.",
      "Designed and implemented full-stack modules for nationwide electronic health records.",
      "Designed workflows and user interfaces for login, medical staff and patients.",
      "Programmed backend services with NestJS and SQL Server for secure data handling.",
      "Supported Panama's Social Security Fund (CSS) initiative to digitize the medical history of the country.",
    ],
    client: "Social Security Fund of Panama (CSS)",
    role: "Full-Stack Developer",
    technologies: "React, NestJS, TypeScript, SQL Server, Docker",
    industry: "HealthTech",
    date: "2024 - Present",
    details: {
      images: [
        "/images/projects/CSS5.png",
        "/images/projects/CSS1.png",
        "/images/projects/CSS2.png",
        "/images/projects/CSS4.png",
      ],
    },
  },

  {
    id: "textile-app",
    title: "Textile Fabric Business Web App",
    category: "Personal Projects",
    image: "/images/projects/LogInMT.png",
    projectInfo: [
      "Built a web application to manage textile inventory and sales for a local business.",
      "Implemented modern UI/UX with scalable backend APIs.",
      "Enabled real-time inventory tracking and order processing.",
      "Improved operational efficiency and customer management.",
    ],
    client: "Harvard CS50 course project",
    technologies: "HTML, CSS, JavaScript, SQLite, Flask",
    industry: "Business Software",
    date: "2023",
    details: {
      images: [
        "/images/projects/LogInMT.png",
        "/images/projects/IndexMT.png",
        "/images/projects/Capture-Release.png",
      ],
    },
    urls: [
      {
        icon: "fab fa-github",
        name: "GitHub Repo",
        link: "/https://github.com/Vizard16/CS50-Final-project",
      },
      {
        icon: "fa-brands fa-youtube",
        name: "Video demonstration of the project",
        link: "https://youtu.be/pM2l0K85PSE",
      },
    ],
  },
  {
    id: "line-following-robot",
    title: "Omnidirectional Line-Following Robot",
    category: "Robotics",
    image: "/images/projects/Holonomic robot.png",
    projectInfo: [
      "Developed an omnidirectional line-following robot using Mecanum wheels.",
      "Implemented PID control algorithms for precise movement and path tracking.",
      "Fastest robot in the competition, completing the course in 29 seconds.",
    ],
    client: "Smart Factory Tec de Monterrey",
    role: "Control Systems Engineer, Software Developer",
    technologies: "Arduino, C++, Sensors, Actuators, PID control",
    industry: "Robotics",
    date: "2023",
    details: {
      images: [
        "/images/projects/Holonomic robot.png",
        "/images/projects/holonomicrobotreal.png",
      ],
    },
    urls: [
      {
        icon: "fa-solid fa-file",
        name: "File describing the project",
        link: "https://drive.google.com/file/d/13c_AM_v15C5C_fRGRTMbFICxOkvlrsXj/view?usp=sharing",
      },
      {
        icon: "fa-brands fa-youtube",
        name: "Video demonstration of the project",
        link: "https://youtu.be/5iM-EXHix70",
      },
    ],
  },

  {
    id: "letterbox-bot",
    title: "Letterbotxd Discord Bot",
    category: "Personal Projects",
    image: "/images/projects/discordbot.png",
    projectInfo: [
      "Automated movie tracking and interaction with the famous page Letterboxd API.",
      "Developed a real fetching from the letterboxd website to make the API.",
      "Developed a Discord bot to fetch and display movie data, ratings, and reviews.",
      "Processed movie metadata and enabled smart recommendations.",
    ],
    client: "Personal Project",
    technologies: "APIs, Python, Node.js",
    industry: "Entertainment",
    date: "2024",
    details: {
      images: [
        "/images/projects/discordbot.png",
        "/images/projects/Letterboxd-bot.png",
        "/images/projects/discordbot2.png",
      ],
    },
    urls: [
      {
        icon: "fab fa-github",
        name: "GitHub Repo",
        link: "https://github.com/Vizard16/LetterBox-Bot.git",
      },
    ],
  },
  {
    id: "yolo-detection",
    title: "YOLO Object Detection",
    category: "Personal Projects",
    image: "/images/projects/YOLOv5.png",
    projectInfo: [
      "Developed custom object detection pipelines with YOLO.",
      "Trained and deployed models for real-time detection using OpenCV for objects and images.",
    ],
    client: "Personal Project",
    technologies: "YOLO, Python, OpenCV, Machine Learning",
    industry: "Computer Vision",
    date: "2023",
    details: {
      images: ["/images/projects/YOLOv5.png", "/images/projects/yoloimage.png"],
    },
  },
  {
    id: "ros-arduino",
    title: "ROS Arduino Bridge",
    category: "Robotics",
    image: "/images/projects/rosbridge.jpg",
    projectInfo: [
      "Implemented a bridge between ROS and Arduino for motor and sensor control.",
      "Enabled real-time communication for robotics platforms.",
      "Made it to work open loop and closed loop control systems.",
    ],
    client: "Ender Industrial",
    technologies: "ROS2, Arduino, C++, Python, PID Control, Raspberry Pi",
    industry: "Robotics",
    date: "2024",
    details: {
      images: [
        "/images/projects/rosbridge.jpg",
        "/images/projects/Ros-arduino-bridge.png",
        "/images/projects/Ros-arduino-bridge2.png",
      ],
    },
    urls: [
      {
        icon: "fab fa-github",
        name: "GitHub Repo",
        link: "https://github.com/Vizard16/ROSArduinoBridge.git",
      },
    ],
  },
  {
    id: "manufacturing-cell",
    title: "Manufacturing Cell Simulation",
    category: "Industrial Automation",
    image: "/images/projects/WeldingCell.jpeg",
    projectInfo: [
      "Created a simulation of a manufacturing welding cell with digital twin concepts.",
      "Simulated robotic arms, conveyors, and sensors for optimized layouts.",
    ],
    client: "Abb Robotics",
    role: "Simulation Engineer",
    technologies:
      "Abb RobotStudio, Path Planning, Simulation, Robotics Kinematics",
    industry: "Industrial Automation",
    date: "2023",
    details: {
      images: [
        "/images/projects/WeldingCell.jpeg",
        "/images/projects/weldingcell2.png",
      ],
    },
    urls: [
      {
        icon: "fa-solid fa-file",
        name: "File of the project",
        link: "https://drive.google.com/file/d/1_ksGXJuambdlXcJdZ2L1_gLGxiUHcxfV/view?usp=sharing",
      },
      {
        icon: "fa-brands fa-youtube",
        name: "Video demonstration of the project",
        link: "https://www.youtube.com/watch?v=49_3t-YWi9g",
      },
    ],
  },
  {
    id: "manchester-challenges",
    title: "Manchester Robotics Challenges",
    category: "Robotics",
    image: "/images/projects/manchester-1.png",
    projectInfo: [
      "Completed robotics challenges including SLAM, PID, and MPC control implementations.",
      "Simulated navigation and control tasks using ROS and Gazebo.",
      "Completed courses on various robotics topics and implemented them in ROS as challenges, including SLAM using Kalman filters and sensor fusion",
    ],
    client: "Manchester Robotics",
    role: "Software Engineer",
    technologies: "ROS, Python, Control Theory, SLAM, Gazebo, Rviz",
    industry: "Robotics",
    date: "2024",
    details: {
      images: [
        "/images/projects/manchester-1.png",
        "/images/projects/manchester1.png",
        "/images/projects/manchester2.png",
        "/images/projects/manchester-2.png",
      ],
    },
    urls: [
      {
        icon: "fab fa-github",
        name: "GitHub Repo",
        link: "https://github.com/Vizard16/Manchester-Robotics-Challenges.git",
      },
      {
        icon: "fab fa-youtube",
        name: "Videos of challenge",
        link: "https://www.youtube.com/watch?v=1INptIcA8As&t=11s",
      },
      {
        icon: "fab fa-youtube",
        name: "Videos of challenge",
        link: "https://www.youtube.com/watch?v=akDkFLPZqys",
      },
    ],
  },
  {
    id: "patients-app",
    title: "Patients Appointment Management App",
    category: "Personal Projects",
    image: "/images/projects/hismed1.jpeg",
    projectInfo: [
      "Won contest for making an app to manage medical appointments and records.",
      "Developed and maintained a React Native app for medical appointment registration.",
      "Designed and implemented full-stack modules for nationwide electronic health records.",
      "Supported Panama's Social Security Fund (CSS) initiative to digitize the medical history of the country.",
    ],
    client: "Social Security Fund of Panama (CSS)",
    role: "App Developer",
    technologies: "React Native, NestJS, TypeScript, SQL Server, Expo, Docker",
    industry: "HealthTech",
    date: "2025",
    details: {
      images: [
        "/images/projects/hismed1.jpeg",
        "/images/projects/hismed2.jpeg",
        "/images/projects/hismed3.jpeg",
        "/images/projects/hismed4.jpeg",
      ],
    },
    urls: [
      {
        icon: "fab fa-github",
        name: "GitHub Repo of User code",
        link: "https://github.com/Vizard16/Roomba",
      },
      {
        icon: "fa-solid fa-file",
        name: "Research Paper 2024",
        link: "https://docs.google.com/document/d/1kuZNBZn3RK8jU_YNuWhPBqh34vadPYLo-JOuqVYzrKk/mobilebasic",
      },

      {
        icon: "fa-solid fa-briefcase",
        name: "Presentation of the project",
        link: "https://drive.google.com/file/d/17ynh-mhw396r6c9fsIRZN4sm5AEcZ-aW/view?usp=sharing",
      },
    ],
  },
  {
    id: "waste-classifier",
    title: "AI Waste Classification System",
    category: "Personal Project",
    image: "/images/projects/waste-classifier-1.png",
    projectInfo: [
      "Developed an intelligent waste classification system using YOLO object detection and OpenCV for real-time waste sorting.",
      "Trained custom YOLO models on Google Colab using a curated dataset of different waste types (plastic, paper, glass, organic, metal).",
      "Implemented computer vision preprocessing with OpenCV for image enhancement and object detection optimization.",
      "Achieved high accuracy with 95% in classifying waste materials to support automated recycling systems.",
      "Created a complete pipeline from data collection to model deployment for practical waste management applications.",
    ],
    client: "Environmental Tech Initiative",
    role: "AI Developer",
    technologies:
      "YOLO, OpenCV, Python, Google Colab, TensorFlow, Pytorch, Computer Vision, Deep Learning, Data Augmentation",
    industry: "Environmental Technology",
    date: "2025",
    details: {
      images: [
        "/images/projects/waste-classifier-1.png",
        "/images/projects/waste-classifier-2.png",
        "/images/projects/waste-classifier-3.png",
      ],
    },
    urls: [
      {
        icon: "fab fa-github",
        name: "GitHub Repository",
        link: "https://github.com/Vizard16/Garbage-Classifier-",
      },
    ],
  },

  {
    id: "banorte-bot",
    title: "AI Chatbot for Banorte",
    category: "Personal Projects",
    image: "/images/projects/banorte1.png",
    projectInfo: [
      "Designed an intelligent chatbot for banking services with NLP capabilities.",
      "Automated common queries to improve customer service efficiency.",
      "Integrated financial data access and security workflows.",
    ],
    client: "Banorte",
    role: "Software Developer",
    technologies: "AI, Python, NLP, OpenAI APIs",
    industry: "FinTech",
    date: "2023",
    details: {
      images: [
        "/images/projects/banorte1.png",
        "/images/projects/banorte-2.jpeg",
      ],
    },
    urls: [
      {
        icon: "fa-solid fa-briefcase",
        name: "Presentation of the project",
        link: "https://drive.google.com/file/d/17ynh-mhw396r6c9fsIRZN4sm5AEcZ-aW/view?usp=sharing",
      },
      {
        icon: "fa-solid fa-file",
        name: "Paper describing the project",
        link: "https://docs.google.com/document/d/1kuZNBZn3RK8jU_YNuWhPBqh34vadPYLo-JOuqVYzrKk/mobilebasic",
      },
    ],
  },
];
