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

## Background

### Limitations in Traditional Teaching Methods
- Traditional dental education methods require **significant tutor guidance** at each step, which can limit student independence.
- **Direct patient interaction** in a learning environment raises ethical concerns, especially with invasive procedures, and there is always the risk of mistakes affecting real patients.
- Traditional methods may not expose students to a wide variety of clinical scenarios, particularly **rare or complex cases**.

To address these limitations, previous batches from the **University of Peradeniya (UOP)** developed a **Virtual Patient Simulator (VPS)**.

---

### Overview of the Virtual Patient Simulator (VPS)
The **VPS** provides a web-based simulation environment, designed with four main phases:

1. **History Taking**
2. **Examination and Investigation**
3. **Diagnosis**
4. **Feedback**

#### Features of the VPS:
- **Interactive 3D model** with the following capabilities:
  - Extraoral and Intraoral views
  - Full dental room simulation
  - Dental instrument selection

However, the simulator also has certain limitations:
- Only a **single patient case** is available, limiting scenario variety.
- The **3D model** is directly tied to the single available patient case.
- **Dental chart marking** is limited to a single tooth.
- There is no **haptic device integration**, which limits the realism of tactile feedback during practice.

---

## Summary of Literature Review

| Area                            | Key Insights                                                                                                                                   | References                        |
|----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
| **Custom Case Creation**         | Development of an **interactive form-type interface** for teachers to create patient cases and the creation of a **question bank**.            | "Web-SP", "VOMC"                 |
| **Haptic Integration in VPS**    | Control of tool movements and tactile feedback, providing a more realistic experience.                                                         | "Simodont Dental Trainer", "DentSim System" |
| **Customizable 3D Oral Model**   | Customizing the **3D model** based on mapped dental case details to enhance scenario diversity.                                                | **Research Gap**                 |
| **Dental Chart Annotation & Verification of Responses** | Creating a **markable dental chart** and verifying student responses with correct answers.                                  | **Research Gap**                 |
| **Evaluating VPS’s Impact in Dental Training** | Gathering **feedback from students and tutors** to assess system effectiveness and group-based VR assessments.                      | "Evaluating Medical Student…"     |



---

### Our Solution

To overcome the limitations of previous simulators, we propose:

1. **Custom Patient Case Creation**: Developing a separate interface for tutors to create customized patient cases within the simulator.
2. **Semi-Automation of the 3D Model**: Modifying the 3D model to adapt to each unique case created by the tutor.
3. **Dental Chart Marking & Verification**: Developing a markable dental chart for students and checking their responses against the correct answers.
4. **Usability Evaluation**: Assessing the system’s usability from both the students’ and tutors’ perspectives, ensuring it improves learning outcomes.



## Technologies Used

<table>
  <tr>
    <td align="center" width="33%">
      <img src="./images/Blender.png" width="100px;" alt="Blender Logo"/><br />
      <b>Blender</b><br />
      Crafting 3D Models with Blender.
      <p>Blender was used to create detailed 3D models of teeth and dental environments for the simulation.</p>
    </td>
    <td align="center" width="33%">
      <img src="./images/unity.png" width="100px;" alt="Unity Logo"/><br />
      <b>Unity Game Engine</b><br />
      Simulator Development in Unity.
      <p>Unity Game Engine was used to develop the virtual patient simulator with real-time interactions.</p>
    </td>
    <td align="center" width="33%">
      <img src="./images/react.png" width="100px;" alt="React Logo"/><br />
      <b>ReactJS</b><br />
      Frontend Build with React JS.
      <p>ReactJS was utilized to create a dynamic and interactive frontend for both students and tutors.</p>
    </td>
  </tr>
  <tr>
    <td align="center" width="33%">
      <img src="./images/firebase.png" width="100px;" alt="Firebase Logo"/><br />
      <b>Firebase & Firestore</b><br />
      Database & Hosting on Firebase.
      <p>Firestore was used for database management, real-time data syncing, and hosting the application.</p>
    </td>
    <td align="center" width="33%">
      <img src="./images/node.png" width="100px;" alt="ExpressJS Logo"/><br />
      <b>ExpressJS</b><br />
      API Creation via Express JS.
      <p>ExpressJS was used to handle API requests and manage communication between the frontend and backend.</p>
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
