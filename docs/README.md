---
layout: home
permalink: index.html

# Please update this with your repository name and title
repository-name: eYY-4yp-project-template
title:
---

[comment]: # "This is the standard layout for the project, but you can clean this and use your own template"

# Enhancing Virtual Patient Simulation in Dentistry With Custom Case Creation and Evaluate The System Effectiveness

#### Team

- E/18/013, R.Abilash, [email](mailto:e18013@eng.pdn.ac.lk)
- E/18/115, A.Gowsigan, [email](mailto:e18115@eng.pdn.ac.lk)
- E/18/203, K.G.A.S.Madhusanka, [email](mailto:e18203@eng.pdn.ac.lk)

#### Supervisors

- Prof. Roshan G. Ragel, [email](mailto:roshanr@eng.pdn.ac.lk)
- Dr. Upul Jayasinghe, [email](mailto:upuljm@eng.pdn.ac.lk)
- Dr. D Leuke Bandara, [email](mailto:dhanulb@dental.pdn.ac.lk)
- Dr. Dilrukshi Gamage, [email](mailto:dgs@ucsc.cmb.ac.lk)

#### Table of content

<!--
1. [Abstract](#abstract)
2. [Related works](#related-works)
3. [Methodology](#methodology)
4. [Experiment Setup and Implementation](#experiment-setup-and-implementation)
5. [Results and Analysis](#results-and-analysis)
6. [Conclusion](#conclusion)
7. [Publications](#publications)
8. [Links](#links)
-->

1. [Project Summary](#project-summary)
2. [Related works](#related-works)
3. [Conclusion](#conclusion)
4. [Publications](#publications)
5. [Links](#links)

---

<!-- 
DELETE THIS SAMPLE before publishing to GitHub Pages !!!
This is a sample image, to show how to add images to your page. To learn more options, please refer [this](https://projects.ce.pdn.ac.lk/docs/faq/how-to-add-an-image/)
![Sample Image](./images/sample.png) 
-->


## Project Summary

This project focuses on enhancing virtual patient simulations used in dental education by introducing a custom case creation feature. The main objective is to provide tutors with a user-friendly portal that allows them to design unique clinical cases, enabling students to interact with a diverse range of dental scenarios. The system combines ReactJS for the frontend, Firebase for data management, and Unity for 3D modeling, creating a seamless experience for both tutors and students.

By automating the generation of 3D models based on case data, the system offers an interactive learning environment, improving critical skills such as history taking, diagnosis, and treatment planning. The project was evaluated through user testing involving both students and tutors, yielding positive feedback on usability and educational effectiveness. This innovation aims to bridge the gap in dental simulators by offering customizable and scalable solutions for teaching and learning complex dental scenarios.

---

## Objectives
- Introduce a tutor portal for creating custom dental cases.
- Automate 3D model generation based on patient case data.
- Improve the usability and learning outcomes of virtual patient simulations.

---

## Technologies Used

<table>
  <tr>
    <td align="center" width="50%">
      <img src="./images/sample.png" width="100px;" alt="ReactJS Logo"/><br />
      <b>ReactJS</b><br />
      ReactJS was used to build the frontend, ensuring an interactive and dynamic user interface.
    </td>
    <td align="center" width="50%">
      <img src="https://your-repo-url/images/redux-logo.png" width="100px;" alt="Redux Logo"/><br />
      <b>Redux</b><br />
      Redux was used for managing the global state across the application, especially for managing student and tutor data.
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <img src="https://your-repo-url/images/firebase-logo.png" width="100px;" alt="Firebase Logo"/><br />
      <b>Firebase</b><br />
      Firebase services such as Firestore Database, Cloud Storage, and Authentication were used to handle data storage, user authentication, and media hosting.
    </td>
    <td align="center" width="50%">
      <img src="https://your-repo-url/images/unity-logo.png" width="100px;" alt="Unity Game Engine Logo"/><br />
      <b>Unity Game Engine</b><br />
      Unity Game Engine was employed to build the 3D model of the virtual patient, offering a realistic environment for the dental simulation.
    </td>
  </tr>
</table>


---

## Methodology
The simulator is divided into two main sections:
- **Student View:** Allows dental students to assess virtual patients, covering stages such as history taking, examination, investigation, and diagnosis.
- **Tutor View:** Enables tutors to create cases by marking digital dental charts, defining questions, and automating 3D model customization based on patient data.

---

## System Architecture
The system architecture consists of:
- A web interface (ReactJS)
- Unity-based 3D simulation engine
- Firebase for database management and user authentication

---

## Evaluation
The system was tested with **10 students** and **8 tutors** from the Faculty of Dental Sciences, University of Peradeniya. The feedback collected through pre- and post-questionnaires highlighted significant improvements in both usability and educational effectiveness.

---

## Future Directions
- Integration of **haptic feedback** for enhanced realism.
- Expanding case libraries with **AI-assisted custom case creation**.
- Incorporating **VR technologies** for immersive learning experiences.

---

## Conclusion
This project presents a comprehensive approach to virtual patient simulations in dentistry, offering both customizability and automation. The tutor interface and case library ensure a dynamic and broad learning environment for students, while real-time feedback mechanisms help improve performance.

## Publications
[//]: # "Note: Uncomment each once you uploaded the files to the repository"

<!-- 1. [Semester 7 report](./) -->
<!-- 2. [Semester 7 slides](./) -->
<!-- 3. [Semester 8 report](./) -->
<!-- 4. [Semester 8 slides](./) -->
<!-- 5. Author 1, Author 2 and Author 3 "Research paper title" (2021). [PDF](./). -->


## Links

- [Project Repository](https://github.com/cepdnaclk/e18-4yp-Virtual-Patient-Simulator-for-Skill-Training-in-Dentistry)
- [Project Page](https://cepdnaclk.github.io/e18-4yp-Virtual-Patient-Simulator-for-Skill-Training-in-Dentistry)
- [Department of Computer Engineering](http://www.ce.pdn.ac.lk/)
- [University of Peradeniya](https://eng.pdn.ac.lk/)

[//]: # "Please refer this to learn more about Markdown syntax"
[//]: # "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
