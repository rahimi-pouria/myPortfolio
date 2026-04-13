<template>
    <div class="d-flex gap-3">
      <custom-tabs :tab-list="headerLinks" title-item-class="title-tab"  v-model="activeTab">
        <template #tab-0>
          <div class="d-flex content-tab">
            <about-us />
          </div>
        </template>
        <template #tab-1>
          <div class="d-flex flex-column gap-5 content-tab">
            <skills />
            <my-work-experience />
            <my-project />
          </div>
        </template>
        <template #tab-2>
          <div class="d-flex flex-wrap content-tab gap-2 w-100">
            <demos
                v-for="(item) in videoMyProjects"
                :key="item.id"
                custom-Class-Wrapper="video-wrapper anime-card"
                custom-class-video-tittle="video-title"
                custom-class-video="main-video"
                :videoTitle="item.title"
                :videoSrc="item.videoSrc"
                :sub-Title-Video="item.subtitle"
                :video-Description="item.description"
                custom-class-video-description="description-video"
            />
          </div>
        </template>
        <template #tab-3>
          <div class="d-flex content-tab">
            <generic
                title="achievements"
                description="I’m Pouria Rahimy, a passionate Full-Stack Developer and Software Engineer with a strong focus on modern web technologies. I specialize in building clean, scalable, and high-performance applications using JavaScript frameworks such as Vue, Nuxt, React, and Next. I am also the creator of CrossUI, a fully customizable UI component framework designed to work across multiple JavaScript environments. My goal with CrossUI is to help developers speed up their workflow while maintaining flexibility and performance. Throughout my career, I have worked on dynamic front-end architectures, custom UI/UX components, reusable design systems, and interactive web applications. I believe in writing clean code, building reusable structures, and continuously improving my skills. My long-term mission is to create software that makes life easier, contributes to innovation, and helps businesses grow."
                :img-src="planing"
                custom-class-img="d-flex w-50"
                custom-Class-Wrapper-Text="d-flex flex-column"
                :professional-Profile="achievements"
                custom-class-image-wrapper="d-flex justify-center align-items-center"/>
          </div>
        </template>
        <template #tab-4>
          <div class="d-flex content-tab">
            <generic
                title="The Story of My Career Path"
                description="I’m Pouria Rahimy, a passionate Full-Stack Developer and Software Engineer with a strong focus on modern web technologies. I specialize in building clean, scalable, and high-performance applications using JavaScript frameworks such as Vue, Nuxt, React, and Next. I am also the creator of CrossUI, a fully customizable UI component framework designed to work across multiple JavaScript environments. My goal with CrossUI is to help developers speed up their workflow while maintaining flexibility and performance. Throughout my career, I have worked on dynamic front-end architectures, custom UI/UX components, reusable design systems, and interactive web applications. I believe in writing clean code, building reusable structures, and continuously improving my skills. My long-term mission is to create software that makes life easier, contributes to innovation, and helps businesses grow."
                :img-src="pouria"
                custom-class-img="d-flex w-50"
                custom-Class-Wrapper-Text="d-flex flex-column"
                :professional-Profile="personalDescription"
                custom-class-image-wrapper="d-flex justify-center align-items-center"/>
          </div>
        </template>
      </custom-tabs>
    </div>
</template>

<script setup lang="ts">
//@ts-ignore
  import CustomTabs from "~/components/bootstrap/customTabs.vue";
  import { ref } from "vue";
  import AboutUs from "~/components/bootstrap/content/aboutUs.vue";
  import Skills from "~/components/bootstrap/content/skills.vue";
  import MyWorkExperience from "~/components/bootstrap/content/myWorkExperience.vue";
  import MyProject from "~/components/bootstrap/content/myProject.vue";
  import Demos from "~/components/bootstrap/content/demos.vue";
  import createProject  from "~/assets/video/createProject.mp4"
  import formBuilder from "~/assets/video/frameWork.mp4"
  import website from "~/assets/video/websiteCrossUi.mp4"
  import showComponent from "~/assets/video/showComponentCrossui.mp4"
  import Generic from "~/components/bootstrap/content/generic.vue";
  import pouria from "~/public/img/pouria.png"
  import planing from "~/assets/img/jpg/planning-achievements-text-composition-vector.jpg"
  const activeTab = ref(false)


  interface headerLinksType {
    id: number;
    link: string;
    title: string;
    icon: string;
  }

  interface videoMyProjectsType {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    videoSrc: string
  }

  const personalDescription = ref([
    {
      id: 1,
      title: 'The Genesis of a Coder: My Journey into Programming',
      description: 'My journey into the world of programming officially began in 2021. Eager to dive in, I started by mastering the fundamentals, with a particular focus on JavaScript and the powerful React.js library.\n' +
          '\n' +
          'This foundational knowledge quickly paved the way for my first real-world experience: an internship at a company where I was welcomed as a trainee. During this period, fueled by my passion and the skills I was acquiring, I even recreated the iconic marble game from the Squid Game series using React. It was a fun challenge that truly solidified my understanding of the library’s capabilities.\n' +
          '\n' +
          'I successfully completed my internship, emerging from the experience not just as a trainee, but as a ready-to-contribute professional, eager to make my mark in the tech industry.'
    },
    {
      id: 2,
      title: "From Zero to Code: My Journey into Professional Programming at Bamdad Digital Marketing",
      description: "My professional journey in programming commenced with joining Bamdad Digital Marketing Company in May 2022 (Ordibehesht 1401). Initially, as a technical assessment for my candidacy, I was tasked with developing a puzzle game using React.js, despite the company’s team primarily utilizing Vue.js. This challenge not only demonstrated my commitment to rapid learning and adaptability to diverse technologies but also led to my collaboration with the company. At Bamdad, I served as a programmer, playing a key role in the development and design of a website dedicated to analyzing and reporting YouTubers’ revenues. This educational and informational platform assisted YouTubers in tracking their monthly earnings. It was also at Bamdad that I gained my first experience implementing a complete project using Vue.js, significantly contributing to the project’s objectives"
    },
    {
      id: 3,
      title: 'Cryptocurrency Price Analysis Specialist | Trader 4 Project',
      description: 'Further expanding my practical experience, I collaborated on a project basis with Trader 4. This engagement focused on the intricate domain of cryptocurrency price analysis and prediction. My responsibilities spanned both the development of the public-facing website and the enhancement of the internal admin panel, ensuring a comprehensive approach to the project’s success'
    },
    {
      id: 4,
      title: 'Innovative Developer | Creator of the Cross UI Framework',
      description: 'In 2023 (1402), I joined Vesta Information Technology Company as a developer. During the initial three-month probation period, I was tasked with coding and project implementation to assess my performance. In my second week at the company, the Technical Manager identified the need for a “Form Builder.” Although the company’s primary project was developed using Vue.js, the existing form builder available in npm packages was written in React.js. By thoroughly analyzing the React.js form builder’s source code and understanding its architecture, I successfully replicated a similar structure within the Vue.js environment. This achievement led to the signing of a three-year contract with the company before the probation period concluded.\n' +
          '\n' +
          'The core projects at Vesta Information Technology Company included the development of Learning Management Systems (LMS) and Transportation Management Systems (TMS), encompassing diverse user panels such as Admin, Teacher, and Student. These systems were successfully implemented and deployed for prominent governmental organizations, including the Tehran Municipality, Imam Hussein University, and Bank Maskan.\n' +
          '\n' +
          'Some time later, driven by the increasing demand for accelerated front-end development, the Technical Manager expressed a desire for a solution that could match the high-speed development efficiency of the back-end for front-end tasks, thereby enabling faster project delivery. This challenge sparked the idea for the Cross UI framework in my mind. I conceptualized and developed Cross UI as a comprehensive personal framework, designed to address development needs across front-end, back-end, and mobile domains, transforming the initial concept into a proficient product.'
    }
  ])

const achievements = ref([
  {
    id: 1,
    title: 'Game Design Innovation: From Concept to Implementation',
    description: 'Squid Game (Early Programming Learning):\n' +
        '\n' +
        'Objective: Design and implement a game inspired by the Squid Game series.\n' +
        'Challenges & Achievements:\n' +
        'Complex Situation Analysis: Understanding and implementing challenging game mechanics.\n' +
        'Advanced Algorithmic Thinking: Designing efficient algorithms for game rules and player movements.\n' +
        'Multiplayer Game Design: Creating a two-player mode that offers an enjoyable and competitive experience.\n' +
        'Deep Game Programming Learning: Gaining practical experience in coding for game development during the early stages of learning.\n' +
        'Puzzle Game (for Bamdad Company Recruitment):\n' +
        '\n' +
        'Objective: Develop a puzzle game as part of the recruitment process.\n' +
        'Challenges & Achievements:\n' +
        'Array Manipulation: Implementing game logic effectively using array data structures.\n' +
        'Memory & Index Management: Precisely guiding elements within the array and enabling movement via clicks to empty indices.\n' +
        'Algorithmic Optimization: Intelligently finding empty slots and correctly arranging elements to solve the puzzle.\n' +
        'User Experience Focus: Ensuring game mechanics are clear and intuitive for the user.'
  },
  {
    id: 2,
    title: "Achievement Title: Metronic Template Architectural Overhaul for Full-Scale Website Development",
    description: "At Pishro Fanavar Company, I spearheaded a significant architectural modification initiative for the Metronic template, transforming its application scope from primarily admin dashboards to encompass comprehensive website design. Responding to a strategic business objective proposed by the company’s management, which aimed to leverage Metronic’s robust component library for client-facing websites, I successfully re-architected the template’s core structure. This involved developing innovative solutions to integrate and utilize Metronic’s advanced UI components and theming capabilities for dynamic website creation. The enhanced template now facilitates the development of modern, responsive, and visually engaging websites, significantly expanding our design toolkit. The complete codebase and technical documentation for this project are accessible in my dedicated GitHub repository.\n" +
        "\n" +
        "Key Highlights of this Achievement:\n" +
        "\n" +
        "Strategic Initiative Execution: Successfully translated a high-level management concept into a tangible, functional solution.\n" +
        "Advanced Front-End Engineering: Demonstrated expertise in deep template customization, structural re-engineering, and component integration.\n" +
        "Business Value Creation: Expanded the utility of a key development resource, enabling more efficient and sophisticated website development.\n" +
        "Technical Articulation: Provided a shareable and verifiable record of the accomplishment through a GitHub repository."
  },
  {
    id: 3,
    title: 'Development of a Comprehensive Google Chrome Extension: Integrated Weather, YouTube Feed, and Google Search',
    description: 'As a personal project, I developed a comprehensive Google Chrome extension designed to enhance user experience by providing seamless access to key information and functionalities. This extension integrates the following features:\n' +
        '\n' +
        'Real-time Weather Updates: Delivers up-to-date weather information based on the user’s location.\n' +
        'YouTube New Releases Feed: Displays recently uploaded videos from YouTube within a convenient panel, enabling quick access to the latest content.\n' +
        'Integrated Google Search: Connects directly to Google Search, allowing users to perform searches directly through the extension without navigating to a new tab.\n' +
        'By consolidating these essential features, this extension empowers users to navigate the web more efficiently and access their required information with increased speed and convenience.'
  },
  {
    id: 4,
    title: 'Innovative Developer | Creator of the Cross UI Framework',
    description: 'In 2023 (1402), I joined Vesta Information Technology Company as a developer. During the initial three-month probation period, I was tasked with coding and project implementation to assess my performance. In my second week at the company, the Technical Manager identified the need for a “Form Builder.” Although the company’s primary project was developed using Vue.js, the existing form builder available in npm packages was written in React.js. By thoroughly analyzing the React.js form builder’s source code and understanding its architecture, I successfully replicated a similar structure within the Vue.js environment. This achievement led to the signing of a three-year contract with the company before the probation period concluded.\n' +
        '\n' +
        'The core projects at Vesta Information Technology Company included the development of Learning Management Systems (LMS) and Transportation Management Systems (TMS), encompassing diverse user panels such as Admin, Teacher, and Student. These systems were successfully implemented and deployed for prominent governmental organizations, including the Tehran Municipality, Imam Hussein University, and Bank Maskan.\n' +
        '\n' +
        'Some time later, driven by the increasing demand for accelerated front-end development, the Technical Manager expressed a desire for a solution that could match the high-speed development efficiency of the back-end for front-end tasks, thereby enabling faster project delivery. This challenge sparked the idea for the Cross UI framework in my mind. I conceptualized and developed Cross UI as a comprehensive personal framework, designed to address development needs across front-end, back-end, and mobile domains, transforming the initial concept into a proficient product.'
  },
  {
    id: 5,
    title: 'Dynamic Form Builder Implementation in Vue.js with Customization, Live Preview, and JSON Export Capabilities',
    description: 'Engineered a robust and flexible Form Builder using Vue.js, enabling users to design custom forms with diverse functionalities tailored to their specific needs and preferences. Key capabilities include:\n' +
        '\n' +
        'Intuitive Design & Customization: Allows for the creation of any form type through a user-friendly interface, featuring drag-and-drop field reordering.\n' +
        'Granular Field Configuration: Provides individual settings and customization options for each form field, including input types, validation rules, styling, and default values.\n' +
        'Live Preview: Offers real-time visualization of the form as it is being designed.\n' +
        'JSON Export: Enables the export of the complete form structure as a JSON file, facilitating seamless integration with backend systems and reusability.\n' +
        'This Form Builder was developed as a personal project to significantly enhance the speed and ease of creating complex forms.'
  },
  {
    id: 6,
    title: 'Design and Development of the Cross UI Framework: A Modular, Multi-Framework Solution for Full-Stack Development',
    description: 'In response to a critical business need identified by the company’s CTO, I conceptualized and developed the “Cross UI” framework. This framework is designed to standardize development processes and enhance team productivity through modularity and cross-framework compatibility.\n' +
        '\n' +
        'Key Features and Accomplishments:\n' +
        '\n' +
        'Reusable Componentry: Created a rich library of frontend (web & mobile) components and backend modules, designed for reusability across diverse JavaScript and CSS frameworks.\n' +
        'Multi-Framework Support: Architected to allow developers to select their preferred JavaScript (Vue.js, React.js, Nuxt.js, Next.js, React Native) and CSS (Bootstrap-Vue, Bootstrap-React, Element Plus, Material Design) frameworks during installation.\n' +
        'Automated Setup & Configuration: Implemented an intelligent installation process that automatically handles all necessary dependencies and imports based on developer selections, eliminating the need for manual initial setup.\n' +
        'Pre-built Utilities: Provided a suite of ready-to-use methods for server request handling, validation, and alert notifications, significantly accelerating development workflows.\n' +
        'Automated Testing & State Management: Integrated mechanisms for automated testing and store generation, contributing to code quality and optimization.\n' +
        'Robust, Conflict-Free Architecture: Designed the architecture and design patterns to ensure seamless interoperability and prevent conflicts between different frameworks and dependencies.\n' +
        'Clean and Optimized Coding: Adhered to Clean Code principles and performance optimization across all framework components.\n' +
        'This framework empowers development teams to focus on business logic and design implementation, leading to faster and higher-quality software delivery.'
  }
])

  const headerLinks = ref<headerLinksType[]>([
    {
      id: 1,
      title: 'home',
      link: '/',
      icon: ''
    },
    {
      id: 2,
      title: 'my resume',
      link: '/',
      icon: ''
    },
    {
      id: 3,
      title: 'demo projects',
      link: '/',
      icon: ''
    },
    {
      id: 4,
      title: 'achievements',
      link: '/',
      icon: ''
    },
    {
      id: 5,
      title: 'about me',
      link: '/',
      icon: ''
    },
  ])

const videoMyProjects = ref<videoMyProjectsType[]>([
  {
    id: 1,
    title: 'How to create a project with Cross UI',
    subtitle: 'Simple, fast, and cross-platform UI development.',
    description: 'Cross UI is a framework designed to help you build cross-platform user interfaces efficiently. In this video, I’ll show you how to create your first project step by step—setup, structure, and a quick example so you can start building right away.',
    videoSrc: createProject
  },
  {
    id: 2,
    title: 'CrossUI Framework Overview',
    subtitle: 'A Fast, Flexible Toolkit for Rapid Project Delivery\n' + '\n',
    description: 'This video showcases the official CrossUI website and documentation, where you can learn how to work with the framework step by step. CrossUI is designed to help you build projects quickly and deliver them to clients in minimal time, with a smooth and efficient development experience.',
    videoSrc: website
  },
  {
    id: 3,
    title: 'Form Builder Demo',
    subtitle: 'Create and Customize Forms in Minutes\n' + '\n',
    description: 'This video showcases a standalone Form Builder where you can visually design and customize forms with ease. It provides a smooth, intuitive workflow that helps you build professional forms quickly and deliver your projects faster.',
    videoSrc: formBuilder
  },
  {
    id: 4,
    title: 'CrossUI Login Form Component',
    subtitle: 'A Fully Detailed Login Page Made with CrossUI\n' + '\n',
    description: 'In this video, you’ll see one of the CrossUI UI components used to build my login form. It displays all key details clearly and completely, showing how the page looks and works. The login form is built with the CrossUI framework, so you can create structured, professional UI faster.',
    videoSrc: showComponent
  },
])

</script>

<style scoped lang="scss">
  .title-tab{
    color: white;
  }
  .circle-header{
    border: 1px solid #8b8b8b;
    height: 45px;
    width: 115px;
    border-radius: 20px;
    color: #ffffff !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>