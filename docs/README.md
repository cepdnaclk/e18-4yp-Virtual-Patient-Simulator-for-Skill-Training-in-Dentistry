---
layout: home
permalink: index.html

# Please update this with your repository name and title
repository-name: eYY-4yp-project-template
title:
---

[comment]: # "This is the standard layout for the project, but you can clean this and use your own template"

# Enhancing Virtual Patient Simulation in Dentistry With Custom Case Creation and Evaluate The System Effectiveness

---

#### Team

- E/18/013, R.Abilash, [email](mailto:e18013@eng.pdn.ac.lk)
- E/18/115, A.Gowsigan, [email](mailto:e18115@eng.pdn.ac.lk)
- E/18/203, K.G.A.S.Madhusanka, [email](mailto:e18203@eng.pdn.ac.lk)

#### Supervisors

- Prof. Roshan G. Ragel, [email](mailto:roshanr@eng.pdn.ac.lk)
- Dr. Upul Jayasinghe, [email](mailto:upuljm@eng.pdn.ac.lk)
- Dr. D Leuke Bandara, [email](mailto:dhanulb@dental.pdn.ac.lk)
- Dr. Dilrukshi Gamage, [email](mailto:dgs@ucsc.cmb.ac.lk)

#### Table of Content

1. [Project Summary](#project-summary)
2. [Background](#background)
   - [Limitations in Traditional Teaching Methods](#limitations-in-traditional-teaching-methods)
   - [Overview of the VPS](#overview-of-the-vps)
   - [Features of the VPS](#features-of-the-vps)
3. [Related Works](#related-works)
4. [Summary of Literature Review](#summary-of-literature-review)
5. [Our Solution](#our-solution)
6. [Methodology](#methodology)
   - [System Architecture](#system-architecture)
   - [Data Flow and Synchronization](#data-flow-and-synchronization)
   - [Key Features of the System Architecture](#key-features-of-the-system-architecture)
7. [Technologies Used](#technologies-used)
8. [System Evaluation](#system-evaluation)
   - [Participants](#participants)
   - [Data Collection](#data-collection)
   - [Data Analysis](#data-analysis)
9. [Results & Discussion](#results--discussion)
   - [Student Evaluation Results](#student-evaluation-results)
   - [Tutor Evaluation Results](#tutor-evaluation-results)
   - [Comparative Results](#comparative-results)
10. [Discussion](#discussion)
11. [Conclusion](#conclusion)
12. [Use of AI Tools](#use-of-ai-tools)
13. [Publications](#publications)
14. [Links](#links)



<!-- 
DELETE THIS SAMPLE before publishing to GitHub Pages !!!
This is a sample image, to show how to add images to your page. To learn more options, please refer [this](https://projects.ce.pdn.ac.lk/docs/faq/how-to-add-an-image/)
![Sample Image](./images/sample.png) 
-->


## Project Summary

---

This project focuses on enhancing virtual patient simulations used in dental education by introducing a custom case creation feature. The main objective is to provide tutors with a user-friendly portal that allows them to design unique clinical cases, enabling students to interact with a diverse range of dental scenarios. The system combines ReactJS for the frontend, Firebase for data management, and Unity for 3D modeling, creating a seamless experience for both tutors and students.

By automating the generation of 3D models based on case data, the system offers an interactive learning environment, improving critical skills such as history taking, diagnosis, and treatment planning. The project was evaluated through user testing involving both students and tutors, yielding positive feedback on usability and educational effectiveness. This innovation aims to bridge the gap in dental simulators by offering customizable and scalable solutions for teaching and learning complex dental scenarios.


## Background
---
### Limitations in Traditional Teaching Methods
- Traditional dental education methods require significant tutor guidance at each step, which can limit student independence.
- Direct patient interaction in a learning environment raises ethical concerns, especially with invasive procedures, and there is always the risk of mistakes affecting real patients.
- Traditional methods may not expose students to a wide variety of clinical scenarios, particularly rare or complex cases.

To address these limitations, previous batches from the University of Peradeniya (UOP) developed a Virtual Patient Simulator (VPS).

<br>

### Overview of the VPS
The VPS provides a web-based simulation environment, designed with four main phases:
1. History Taking
2. Examination and Investigation
3. Diagnosis
4. Feedback

<br>

### Features of the VPS
- Interactive 3D model with the following capabilities:
  - Extraoral and Intraoral views
  - Full dental room simulation
  - Dental instrument selection

However, the simulator also has certain limitations:
- Only a single patient case is available, limiting scenario variety.
- The 3D model is directly tied to the single available patient case.
- Dental chart marking is limited to a single tooth.
- There is no haptic device integration, which limits the realism of tactile feedback during practice.

## Related Works
---

Several important works in the field of dental education have significantly influenced the development of this VPS:

1. **Traditional Teaching in Dental Education**  
   Traditional methods, including didactic lectures, textbooks, and mannequin-based training, have been limited by their passive nature and ethical concerns regarding live patient interactions. These methods fail to expose students to a broad spectrum of clinical scenarios, leading to the development of VPS to bridge the gap between theoretical learning and practical experience.

2. **Simulators for Dental Education**  
   Various simulators, including Haptic Feedback Simulators, VR Simulators, and AR Simulators, have been introduced to enhance dental education.  
   - **Haptic Feedback Simulators**, such as PerioSim, provide real-time tactile feedback, helping students improve their fine motor skills and manual dexterity.
   - **VR Simulators** like VirTeaSy Dental immerse students in a fully digital environment for procedural training, though they lack tactile feedback.
   - **AR Simulators** like DentSim offer hybrid approaches, combining real and virtual elements to provide contextual, real-time feedback during procedures.

3. **Custom Case Creation in VPS**  
   Some simulators, such as the Virtual Oral Medicine Clinic (VOMC), offer custom patient case creation capabilities. These simulators allow students to interact with virtual patients across various stages of patient assessment. However, they often lack immersive 3D models or haptic feedback.  
   - Web-SP is another simulator that facilitates the creation of patient cases but lacks 3D interactive elements, focusing primarily on text and image-based learning.

4. **Technologies Used in Simulators**  
   Simulators frequently leverage technologies such as Unity and WebGL for 3D model development and rendering.  
   - **Unity** is a powerful game engine that supports interactive, real-time 3D environments.  
   - **WebGL** allows for rendering 3D models directly within web browsers, making simulations more accessible.

5. **Digital Dental Charting**  
   Digital dental charting systems offer significant improvements over traditional paper-based methods, with user-friendly platforms that reduce examination time and minimize misunderstandings. Digital solutions also provide real-time diagnostic data, enhancing the educational value for dental students.

This research builds upon these foundations by addressing the limitations of existing simulators and incorporating custom case creation, semi-automated 3D models, and more immersive learning environments for dental students.


## Summary of Literature Review
---

| Area                            | Key Insights                                                                                                                                   | References                        |
|----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
| **Custom Case Creation**         | Development of an interactive form-type interface for teachers to create patient cases and the creation of a **question bank**.            | "Web-SP", "VOMC"                 |
| **Haptic Integration in VPS**    | Control of tool movements and tactile feedback, providing a more realistic experience.                                                         | "Simodont Dental Trainer", "DentSim System" |
| **Customizable 3D Oral Model**   | Customizing the 3D model based on mapped dental case details to enhance scenario diversity.                                                | **Research Gap**                 |
| **Dental Chart Annotation & Verification of Responses** | Creating a markable dental chart and verifying student responses with correct answers.                                  | **Research Gap**                 |
| **Evaluating VPS’s Impact in Dental Training** | Gathering feedback from students and tutors to assess system effectiveness and group-based VR assessments.                      | "Evaluating Medical Student…"     |


<br>


## Our Solution
---

To overcome the limitations of previous simulators, we propose:

1. **Custom Patient Case Creation**: Developing a separate interface for tutors to create customized patient cases within the simulator.
2. **Semi-Automation of the 3D Model**: Modifying the 3D model to adapt to each unique case created by the tutor.
3. **Dental Chart Marking & Verification**: Developing a markable dental chart for students and checking their responses against the correct answers.
4. **Usability Evaluation**: Assessing the system’s usability from both the students’ and tutors’ perspectives, ensuring it improves learning outcomes.


## Methodology
---

The existing web-based virtual patient simulator system was initially designed for a single user: Student, who interacted with the simulator through the student's view front end of the application. To enhance the simulator with custom patient case creation, a separate portal was developed for tutors. With this enhancement, the system now supports two main user roles: Student and Tutor. Usability tests were conducted with participants from both groups to evaluate the system’s overall effectiveness, ease of use, and user satisfaction.

<br>

### System Architecture

The overall architecture of the VPS is designed to ensure seamless interaction between the tutor and student interfaces, while efficiently managing the backend processes that support the system. The VPS system is composed of three main components: the Tutor Interface, Student Interface, and Backend Infrastructure.

#### 1. **Tutor Interface**
The Tutor Interface is built using React and allows tutors to create custom dental case scenarios, which include:
- **Patient history**
- **Examination questions**
- **Instructions**
- **Dental chart annotations**

When tutors create or update a case, the interface communicates with the backend to store the input data. This ensures that the information is readily available for student use. 

<table>
  <!-- First row: No Images-3, image width 300px each -->
  <tr>
    <td align="center" width="33%">
      <img src="./images//tutorInterface/signin.png" width="300px" alt="SignIn"/><br />
      <b>SignIn</b><br />
    </td>
    <td align="center" colspan="2" width="67%">
      <img src="./images/tutorInterface/basic1.png" width="300px;" alt="Basic Case Details"/>
      <img src="./images/tutorInterface/basic2.png" width="300px;" alt="Basic Case Details"/><br />
      <b>Basic Case Details</b><br />
    </td>
  </tr>
  
  <!-- Second row: No Images-3, image width 300px each -->
  <tr>
    <td align="center" colspan="3">
      <img src="./images/tutorInterface/history1.png" width="300px;" alt="History Taking 1"/>
      <img src="./images/tutorInterface/history2.png" width="300px;" alt="History Taking 2"/>
      <img src="./images/tutorInterface/history3.png" width="300px;" alt="History Taking 2"/><br />
      <b>History Taking</b><br />
    </td>
  </tr>

  <tr>
    <td align="center" colspan="3">
      <img src="./images/tutorInterface/exmination1.png" width="300px;" alt="Examination 1"/>
      <img src="./images/tutorInterface/exmination2.png" width="300px;" alt="Examination 2"/>
      <img src="./images/tutorInterface/exmination3.png" width="300px;" alt="Examination 2"/><br />
      <b>Examination</b><br />
    </td>
  </tr>
  
  <!-- Third row: No Images-4, image width 225px each (900px total) -->
  <tr>
    <td align="center" colspan="2" width="50%">
      <img src="./images/tutorInterface/dentalchart1.png" width="225px;" alt="Dental Char"/>
      <img src="./images/tutorInterface/dentalchart2.png" width="225px;" alt="Dental Char"/><br />
      <b>Dental Chart</b><br />
    </td>
    <td align="center" colspan="2" width="50%">
      <img src="./images/tutorInterface/preview1.png" width="225px;" alt="Preview"/>
      <img src="./images/tutorInterface/preview2.png" width="225px;" alt="Preview"/><br />
      <b>Preview</b><br />
    </td>
  </tr>
</table>

<br />
Tutors can enter detailed dental conditions and case-specific information through form-based inputs, which are then stored in the Firestore Database. The backend processes this information and generates custom data that will later be displayed in the student’s interface.

#### 2. **Backend Infrastructure**
The Backend Infrastructure is the core of the VPS, powered by Firebase Cloud Functions and Node.js. It handles all data transactions, such as:
- **Data storage**: Saves custom cases created by tutors in the Cloud Firestore database.
- **Data retrieval**: Fetches stored case data for students when they select a case.
- **Real-time updates**: Ensures any modifications made by tutors (like adding a new case or updating existing cases) are reflected instantly for students.

The backend facilitates smooth communication between the tutor and student interfaces. For instance, when a tutor creates or updates a case, the data is stored in Cloud Firestore and becomes available for students to access in real-time.

#### 3. **Student Interface**
The Student Interface, also built using React, allows students to:
- View a list of available dental cases.
- Select a case to interact with.
- Engage with the virtual 3D dental model, powered by Unity and WebGL.


<table>
  <tr>
    <td align="center" width="25%">
      <img src="./images/studentInterface/signin.png" width="250px;" alt="SignIn"/><br />
      <b>SignIn</b><br />
    </td>
    <td align="center" width="25%">
      <img src="./images/studentInterface/caseselection.png" width="250px;" alt="Case Selection"/><br />
      <b>Case Selection</b><br />
    </td>
    <td align="center" width="25%">
      <img src="./images/studentInterface/historytaking.png" width="250px;" alt="History Taking"/><br />
      <b>History Taking</b><br />
    </td>
    <td align="center" width="25%">
      <img src="./images/studentInterface/instractions.png" width="250px;" alt="Instructions"/><br />
      <b>Instructions</b><br />
    </td>
  </tr>
  <tr>
    <td align="center" colspan="4">
      <img src="./images/studentInterface/exmination1.png" width="225px;" alt="Examination 1"/>
      <img src="./images/studentInterface/exmination3.png" width="225px;" alt="Examination 2"/>
      <img src="./images/studentInterface/mirror.png" width="225px;" alt="Examination 3"/>
      <img src="./images/studentInterface/examination5.png" width="225px;" alt="Examination 4"/><br />
      <b>Examinations</b><br />
    </td>
  </tr>
  <tr>
    <td align="center" width="25%">
      <img src="./images/studentInterface/tooltray.png" width="250px;" alt="Tool Tray"/><br />
      <b>Tool Tray</b><br />
    </td>
    <td align="center" width="25%">
      <img src="./images/studentInterface/dental%20hart.png" width="250px;" alt="Dental Chart"/><br />
      <b>Dental Chart</b><br />
    </td>
    <td align="center" width="25%">
      <img src="./images/studentInterface/feedback.png" width="250px;" alt="Feedback"/><br />
      <b>Feedback</b><br />
    </td>
    <td align="center" width="25%">
      <img src="./images/studentInterface/clinic.png" width="250px;" alt="Dental Clinic"/><br />
      <b>Dental Clinic</b><br />
    </td>
  </tr>
</table>

<br />
Once a student selects a dental case from the interface, the system fetches the case data (such as patient history, examination questions, and dental chart details) from the Firestore Database through the backend. This data is then displayed to the student in a structured format, guiding them through the history taking, examination, investigation, and diagnosis phases.

The 3D model of the patient dynamically updates based on the selected case’s details (e.g., tooth conditions, dental chart markings). Using Unity WebGL, the model is rendered directly within the student’s browser, offering real-time interaction and visualization of the dental conditions outlined by the tutor. Students can rotate, zoom, and interact with the 3D model using virtual dental tools, providing a hands-on learning experience.

<br>

### Data Flow and Synchronization

The system architecture ensures that data flows smoothly between the tutor and student interfaces, and that all interactions are synchronized in real-time. Key components of this flow include:
1. **Tutor Case Creation**: Tutors input case details via the React-based tutor interface. This data is sent to the backend, where it is processed and stored in the Firestore database.
2. **Backend Processing**: The backend handles all communication between the interfaces and the database. It processes tutor-created cases and ensures that case data is available for students in real-time.
3. **Student Interaction**: Students access the system through the student interface, where they can select and interact with custom cases. The backend retrieves the case data and displays it to the student. The Unity-based 3D model is dynamically updated based on the case’s dental chart details, providing an immersive and interactive learning experience.

<br>

### Key Features of the System Architecture
- **Real-Time Data Synchronization**: Any updates made by tutors are instantly available to students, ensuring that both interfaces remain up-to-date without delays.
- **Scalability**: The use of Firebase ensures that the system can scale efficiently to handle multiple users (students and tutors) simultaneously, while managing data across a cloud-based infrastructure.
- **Cross-Platform Accessibility**: The Unity WebGL integration allows students to access the 3D simulation from any modern web browser, without requiring specialized hardware or plugins.
- **Immersive 3D Learning**: The use of Unity allows students to interact with a detailed 3D model, enabling hands-on learning experiences that closely mimic real-world clinical environments.

<br>

### Technologies Used

---

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


<br>

## System Evaluation

---

The evaluation of the system was conducted in two phases: one focusing on the Students' View usability test with dental students, and the other focusing on the Tutors' View usability test with dental tutors. To measure user engagement and satisfaction, we conducted a user study involving undergraduates and tutors from the Faculty of Dental Sciences, University of Peradeniya.

<p align="center">
    <img src="./images/usability.png" alt="Usability Test" width= "60%">
</p>


### Participants

- **Students**: A total of 10 undergraduate dental students participated, including students from the 5th, 7th, and 9th semesters.
- **Tutors**: Eight dental tutors, actively engaged in the academic program, were involved in evaluating the tutor interface.

Informed consent was obtained from all participants before taking part in the study.


<br>

### Data Collection

#### Student
- **Pre-questionnaire**: Focused on gathering students' familiarity with dental simulators, experience with online educational tools, and computer proficiency.
- **VPS Interaction**: Students logged into the VPS portal, explored the interface, and worked through a clinical case.
- **Observations**: The research team monitored student interactions, noting any challenges or difficulties they faced.
- **Post-questionnaire**: After completing the task, students provided feedback on their satisfaction with the VPS, ease of use, and how the system impacted their learning experience.

#### Tutors
- **Pre-questionnaire**: Collected demographic information, familiarity with computers, and experience with creating digital patient cases.
- **VPS Interaction**: Tutors were guided through creating a custom patient case using the VPS tutor portal.
- **Observations**: The research team observed any issues or challenges tutors experienced while interacting with the system.
- **Post-questionnaire**: Tutors gave feedback on the system’s usability, intuitiveness, and overall satisfaction with the patient case creation process.

<br>

### Data Analysis
- **Quantitative Analysis**: Pre- and post-questionnaire data were analyzed statistically to compare user performance before and after interacting with the VPS.
- **Interaction Logs**: Reviewed to identify patterns in user behavior and engagement with the system.
- **Qualitative Analysis**: Feedback from observation notes and open-ended questionnaire responses was thematically analyzed to highlight common challenges, usability issues, and areas for improvement.

<br>



## Results & Discussion

---

### Student Evaluation Results

#### Pre-Questionnaire Results

A total of 10 students (5 females and 5 males) participated in the study. The pre-questionnaire responses provided information on their demographics, proficiency with computers, and previous experience using virtual patient simulators. Out of the 10 students, only 3 had prior exposure to the VPS, while the remaining 7 had never used it before. Additionally, none of the participants had experience with other online simulators for educational purposes.

- **Computer Proficiency**: The students rated their proficiency with computers at an average of 3.5 on a 5-point Likert scale, indicating a moderate to high level of comfort with using technology.
- **Frequency of Using Web-Based Learning**: The average score of 3.8 suggests that students regularly engage with web-based platforms for learning, highlighting their familiarity with digital learning tools.
- **Familiarity with Web Navigation**: An average rating of 3.3 points to a moderate level of familiarity with navigating web-based interfaces, leaving room for improvements in user experience design.


#### Post-Questionnaire Results

Following their interaction with the VPS, all students completed a post-questionnaire to assess the system's usability. The results, averaged on a 5-point Likert scale (1 = Poor, 5 = Excellent), are as follows:

<p align="center">
    <img src="./images/studentRatings.png" alt="Usability Test" width="60%">
</p>

These results indicate that while students generally found the system straightforward and the instructions clear, there were some difficulties in navigating the interface and using the 3D model. The high rating for graphical quality suggests that the visuals were well-received, although the interface and controls could benefit from further refinement to improve user-friendliness.

<br>

### Tutor Evaluation Results

#### Pre-Questionnaire Results

Eight tutors (5 females and 3 males) participated in the study. The pre-questionnaire gathered details on their experience with digital tools and creating case-based scenarios. Out of the 8 tutors, only 2 had previously used online tools for case creation, and 3 had prior experience with digital dental charting tools.

- **Computer Proficiency**: Tutors rated their computer proficiency at an average of 3.25, indicating a moderate familiarity with digital tools.
- **Usage of Digital Tools for Teaching**: An average rating of 3.25 suggests that tutors were reasonably comfortable using digital tools for educational activities, although there was room for further improvement.
- **Frequency of Creating Online Dental Teaching Materials**: The average score of 2.25 indicates that most tutors infrequently created online teaching materials, relying more on traditional teaching methods.

#### Post-Questionnaire Results

After using the VPS tutor portal, the tutors provided feedback on the system's usability. The average scores on a 5-point Likert scale were as follows:

<p align="center">
    <img src="./images/tutorRatings.png" alt="Usability Test" width="60%">
</p>

These high ratings indicate that tutors found the VPS tutor portal easy to navigate and effective for creating patient cases. However, with a small sample size, further studies with more participants would provide a more comprehensive understanding of its usability.

<br>

### Comparative Results

#### Student Results
A Kruskal-Wallis test was conducted to analyze whether various factors such as proficiency, gender, academic semester, and web navigation familiarity had any impact on the time students took to complete tasks within the VPS system. The test results showed no significant differences based on any of these factors, indicating that these variables did not substantially influence task completion times.

| Factor                         | P-Value | Significant Difference (Threshold = 0.05)                            |
|---------------------------------|---------|----------------------------------------------------------------------|
| Proficiency Level (1-5)         | 0.142   | No significant difference in completion time based on proficiency.    |
| Gender (Male, Female)           | 0.462   | No significant difference in completion time based on gender.         |
| Academic Semester (5th-9th)     | 0.421   | No significant difference in completion time based on academic level. |
| Web Navigation Familiarity (1-5)| 0.097   | No significant difference in completion time based on web navigation familiarity. |

<br>

#### Tutor Results
Two statistical tests were used to evaluate the tutor results: the **Mann–Whitney U Test** and the **Kruskal-Wallis Test**. These tests were applied to determine whether factors such as previous experience with digital tools and teaching activities had an impact on tutors’ overall satisfaction and usability ratings of the VPS tutor interface.

The **Mann–Whitney U Test** compared the previous experience of tutors with digital tools and their ratings of the system's usability. The results indicated no significant difference in user satisfaction based on prior experience with digital dental charting or online case-based scenario creation.

| Factor 1                                         | Factor 2                                                             | P-Value | Significant Difference (Threshold = 0.05)           |
|--------------------------------------------------|----------------------------------------------------------------------|---------|-----------------------------------------------------|
| Experience with digital dental charting (Yes, No) | User-friendliness of tutor interface digital dental chart (1-5)    | 0.617   | No significant difference                           |
| Experience with case-based scenario creation (Yes, No) | Overall satisfaction with custom case creation (1-5)                | 0.508   | No significant difference                           |

<br>

The **Kruskal-Wallis Test** further analyzed whether factors such as years of experience in the dental field, computer proficiency, and familiarity with digital teaching tools influenced the tutors’ overall satisfaction with the VPS system. Similar to the results from the student evaluations, no significant differences were found, meaning that these factors did not heavily impact overall satisfaction.

| Factor                                                | P-Value | Significant Difference (Threshold = 0.05)                                  |
|-------------------------------------------------------|---------|----------------------------------------------------------------------------|
| Experience in the dental field (Less than 1 year, 1-5 years, 5-10 years, 10+ years) | 0.097   | No significant difference based on years of experience in dentistry. |
| Proficiency in using computers (1-Poor to 5-Excellent)                      | 0.378   | No significant difference based on computer proficiency.                    |
| Familiarity with digital tools for teaching (1-Poor to 5-Excellent)          | 0.143   | No significant difference based on familiarity with digital teaching tools. |


<br>

## Discussion
---

The results from both student and tutor evaluations indicate that the VPS is generally well-received, with high satisfaction ratings for usability and design. Both groups found the system intuitive and effective, though some students reported issues with screen navigation and controls.

### Areas for Improvement
- **Scrolling**: Some students found excessive scrolling during the history-taking phase to be cumbersome. Redesigning the layout to minimize scrolling could improve the user experience.
- **Confusing Layout**: Both students and tutors mentioned initial confusion with the interface. A more intuitive design, along with onboarding guides or tutorial videos, could help ease this learning curve.
- **Navigation Issues**: Some users experienced difficulty navigating between screens, suggesting that the transitions between different parts of the interface could be made smoother and more intuitive.

### Implications of VPS
The VPS offers a significant improvement in dental education by allowing students to practice clinical scenarios in a risk-free environment. It provides tutors with a flexible platform to create patient cases, including rare and complex cases that students may not encounter in traditional training. With improvements to the user interface and navigation, the VPS has the potential to greatly enhance the learning experience for dental students.

### Future Directions
Future versions of the VPS could benefit from the following enhancements:
- **Haptic Feedback**: Introducing haptic devices to simulate tactile sensations, providing a more realistic learning experience.
- **VR Integration**: Developing a virtual reality component would offer a more immersive environment for students, allowing them to interact with a fully 3D dental clinic.
- **AI-Powered Case Creation**: Automating parts of the case creation process through AI could reduce the burden on tutors and enable more dynamic patient scenarios.


## Conclusion
---

This project presents a significant enhancement to an existing web-based VPS by introducing the ability to create custom patient cases and automating the adaptation of 3D models based on each case. These improvements provide dental students with a more diverse set of clinical scenarios and a more immersive, interactive learning experience.

The evaluation of the system from both students' and tutors' perspectives highlighted its effectiveness in enhancing student learning and tutor engagement. The results also identified areas where the system could be further refined, particularly in user experience and interface design, offering valuable insights for future improvements.

By introducing customizable patient cases and enhancing the simulation environment, this project marks an important step toward advancing the role of virtual simulation tools in dental education. The findings from this study emphasize the need for continuous development in educational technology to better meet the evolving demands of both students and educators.


## Use of AI Tools
---

During the development and execution of this research project, several AI tools were utilized to enhance various aspects of the process. These tools played a significant role in content refinement, coding assistance, and discovery of related research.

| **AI Tool**         | **Application in Research**                                                                 |
|---------------------|---------------------------------------------------------------------------------------------|
| **ChatGPT, Gemini & Bing Chat** | Assisted with code finding and debugging, rewriting, grammar checking, summarizing content, generating research ideas, and structuring presentations. |
| **Consensus**        | Used to discover and summarize related research papers.                                      |
| **DALL·E**           | Employed for generating images for presentations and websites.                               |
| **GitHub Copilot**   | Provided coding assistance and debugging support during the development of the simulator.    |
| **Grammarly & QuillBot** | Assisted with grammar and spelling checks to ensure clarity and accuracy in the final manuscript. |


<br />
These AI tools were used to support various research and development tasks, improving the overall quality of the project and streamlining the workflow.


## Publications
---
[//]: # "Note: Uncomment each once you uploaded the files to the repository"

1. [Proceedings of Peradeniya University International Research Sessions (iPURSE) 2024, Sri Lanka](https://scholar.google.com/citations?view_op=view_citation&hl=en&user=9nBn4b0AAAAJ&sortby=pubdate&citation_for_view=9nBn4b0AAAAJ:pyW8ca7W8N0C)


### Slides
---
1. [Semester 7 slides](https://docs.google.com/presentation/d/1TYdonSyNd2ezDAwQ_YaSkcrKgtWFNq1o/edit?usp=sharing&ouid=115971192923283924772&rtpof=true&sd=true)
2. [Semester 8 slides](https://docs.google.com/presentation/d/1dZMc1u2n7EHOmE8TE5IMNI6cqE0p9DHo/edit?usp=sharing&ouid=115971192923283924772&rtpof=true&sd=true)


## Links
---
- [Project Repository](https://github.com/cepdnaclk/e18-4yp-Virtual-Patient-Simulator-for-Skill-Training-in-Dentistry)
- [Project Page](https://cepdnaclk.github.io/e18-4yp-Virtual-Patient-Simulator-for-Skill-Training-in-Dentistry)
- [Department of Computer Engineering](http://www.ce.pdn.ac.lk/)
- [University of Peradeniya](https://eng.pdn.ac.lk/)

[//]: # "Please refer this to learn more about Markdown syntax"
[//]: # "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
