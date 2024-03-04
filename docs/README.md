---
layout: home
permalink: index.html

# Please update this with your repository name and title
repository-name: eYY-4yp-project-template
title:
---

[comment]: # "This is the standard layout for the project, but you can clean this and use your own template"

# Virtual Patient Simulator for Skill Training in Dentistry

#### Team

- E/18/013, R.Abilash, [email](mailto:e18013@eng.pdn.ac.lk)
- E/18/115, A.Gowsigan, [email](mailto:e18115@eng.pdn.ac.lk)
- E/18/203, K.G.A.S.Madhusanka, [email](mailto:e18203@eng.pdn.ac.lk)

#### Supervisors

- Prof. Roshan G. Ragel, [email](mailto:roshanr@eng.pdn.ac.lk)
- Dr. Upul Jayasinghe, [email](mailto:upuljm@eng.pdn.ac.lk)
- Dr. D Leuke Bandara, [email](mailto:dhanulb@dental.pdn.ac.lk)
- Dr. Titus Jayarathna, [email](mailto:titus@eng.pdn.ac.lk)

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

1. [Abstract](#abstract)
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


## Abstract

In modern dental education, Virtual Patient Simulators (VPS) have gained popularity due to limitations associated with traditional teaching methods. These limitations include tutor dependency, ethical dilemmas, and scenario constraints. However, existing patient simulators still face challenges such as high installation and maintenance costs, technological requirements, and a lack of effective feedback mechanisms.To address these issues, previous batches from the Computer Engineering Department of the University of Peradeniya have developed a web-based virtual patient simulator for skill training in dentistry. This simulator features an interactive 3D model, including extra-oral and intra-oral views, a dental room, and instrument selection. Despite its strengths, the system has limitations related to custom case creation and the integration of haptic feedback. Our project aims to enhance this existing virtual patient simulator by enabling tutors to create custom patient cases covering a wide range of clinical scenarios and integrating haptic sensations with the system. These advancements to the system will improve the effectiveness of teaching and learning outcomes for both tutors and students, providing a more realistic experience within the simulator.

## Related Works
<img width="1721" alt="Screenshot 2024-03-01 at 12 01 34" src="https://github.com/cepdnaclk/e18-4yp-Virtual-Patient-Simulator-for-Skill-Training-in-Dentistry/assets/74037052/3ab26b35-26c5-467b-98b5-66777a222703">


### VIRTUAL PATIENT SIMULATOR: DEVELOPED BY UOP
Addressing the prevalent limitations of currently available simulators, students from the Computer Engineering Department of the University of Peradeniya have developed a web-based virtual patient simulator for dental skill training. This simulator, designed specifically for dental students, provides a virtual environment for dental education and overcomes common constraints found in many simulators, such as the need for prior installation and high-end technology. Its web-based nature allows easy access from any location. The simulator’s design is divided into four main phases, encompassing the three primary stages of patient assessment in dental education: History Taking, Examination and Investigation, and Diagnosis. The final phase introduces a feedback mechanism that assists students in identifying their mistakes, thereby enabling them to enhance their performance in subsequent sessions and promoting self-study. 
A notable feature of the simulator is its interactive 3D model. This model provides both extraoral and intraoral views, a selection of dental instruments, and a view of a dental room. The interactive learning environment allows students to manipulate the model and observe it from various angles, offering a more realistic representation of human anatomy and enhancing the learning experience. Despite these advantages, the current simulator has several potential limitations. For instance, it only offers a single patient case, limiting the student’s ability to gain a wide range of clinical experiences. The available 3D model is directly linked with the existing patient case, which poses a challenge when attempting to add more scenarios to the simulator. Additionally, dental chart marking is only available for a single tooth, which is insufficient for students to gain comprehensive knowledge about dental chart marking. Lastly, the current simulator lacks the integration of haptic sensation, which could potentially enhance the realism and interactivity of the simulation. The main idea of this paper is to enhance this simulator by addressing these limitations and improving the effectiveness of the teaching and learning experiences in dental education.

### CUSTOM CASE CREATION IN VIRTUAL PATIENT SIMULATORS
The field of dental education encompasses a wide array of clinical scenarios. While some scenarios are common and frequently encountered in everyday practice, others are more complex and rare. A comprehensive dental education should equip students with knowledge and understanding of both these common and rare cases. However, just as traditional methods often fail to expose students to a broad range of clinical scenarios, most available simulators also fall short in this aspect. This limitation reduces the learning outcomes for students due to the lack of a feature for creating custom patient cases. Although a few simulators do allow tutors to create custom patient cases, they come with their own set of
limitations. One such simulator is the Virtual Oral Medicine Clinic (VOMC), which provides the ability to create custom patient cases. This simulator effectively showcases the dentist-patient interaction across various stages of patient assessment, including History Taking, Clinical Examinations, Investigations, and Treatment Planning. Additionally, the VOMC includes a Self-Assessment Tool, a valuable resource that enables students to evaluate their understanding and performance. Despite these impressive features, the VOMC has its limitations. It lacks a 3D model, which could provide a more realistic and immersive learning experience. Furthermore, it does not offer haptic feedback, a feature that could potentially enhance the interactivity of the simulation and provide a more tactile learning experience. Web-Based Patient Simulation (Web-SP) is another simulator that allows for the creation of custom patient cases allowing a wide range of scenarios to be explored, enhancing the breadth of learning experiences for students. This simulator offers a unique set of features, including a web-based simulation environment that is easily accessible and user-friendly. The Web-SP also maintains a question bank for History Taking, eliminating the need for educators to repeatedly input questions into the database, thereby saving time and effort. However, like the VOMC, the Web-SP also has its limitations. It only converts the cases into text and image views, lacking the interactive element of a 3D model. A significant gap in the current landscape of virtual patient simulators is the lack of custom patient case creation with a 3D model. This limitation is evident in both the VOMC and the Web-SP. Addressing this gap could involve automating the generation of 3D models based on tutor input to create comprehensive patient cases. This would not only enhance the realism of the simulators but also provide a more immersive and interactive learning experience for students. The development of such a feature could significantly advance the field of virtual patient simulators in dental education, providing students with a more comprehensive and realistic learning tool.

### VIRTUAL HAPTIC-BASED SIMULATORS
Considering the field of dental education, integration of the haptic-based virtual simulators has become one of the most promising technologies and one that may fill the gap between theoretical instruction and provisional practical implementation. Though visual aids like 3D Imaging greatly improve how students understand things, lack of touch as feedback has been one weakness identified. Words, whether written or spoken, however, are unable to do justice to the fine sense of touch observed via oral operations. Addressing this shortcoming, haptic-based simulators have emerged as a critical solution, providing an all-inclusive learning environment that closely simulates clinical settings in reality. Such simulators are beneficial for allowing the practical execution of clinical skills. Research further shows that haptic-back systems are both cost-effective and low maintenance, with the other edge that their haptic devices rarely require replacements. All of these characteristics make haptic-based simulators an appealing asset to dental courses, allowing the learners to land up with the best learning environment, as they get a tactile imitation of the practical clinical practices. 
#### A. DentSim 
In dentistry, the leading computer-assisted dental simulator is DentSim, which makes use of a multi-sensorial learning approach that integrates visual, auditory, and practical inputs. Its haptic device comes with a handpiece and a phantom head prepared for further augmentation with an optical tracking camera that captures and reflects motions onto a computer screen. This model allows assessing students’ operational efficiency in end-most practices in tooth preparation, such as angles of the handpiece positioning, depth control, wall angle, and retention techniques. One of the most important benefits that the system brings to dental education is the instant feedback offered when the procedure is displayed on the screen. intra-oral procedures can thus be perfected by refining the technique. Apart from minimizing the time involved in clinical training, with DentSim, this training process becomes highly time-effective as compared to its traditional classroom-based variant.

#### B. Simodont Dental Trainer
The development of the Moog Simodont Dental Trainer marks a major step forward in dental instruction as a student gains haptic feedback along with virtual learning. Through simulating the feel of different dental procedures, including drilling and filling among others, the simulator enables students to practice, and perfect their skills while at the same time avoiding risks associated with the various procedures. One of the strengths of Moog Simodont is its high accuracy in imitating real-life situations, improving students’ psychomotor skills and clinical decision-making. Yet, the simulator has its limitations. it does not provide easy access to the outside world. Additionally, even though the Moog Simodont is a very effective system of technical skills training there are no patient interaction elements so it cannot provide true clinical context. The Moog Simodont, on the other hand, focuses only on the haptic part of dental procedures.

#### C. Periosim Haptics
The Periosim Haptics is a simulation to help out in the curricula of periodontology being trained by providing spot-on advanced feedback. Notably, it sets apart itself from all the other versions of the surgical simulator with the ability to replicate tactile characteristics of different gum tissues thus creating a training environment in which dental students can practice periodontal procedures without any risks to their health. The simulator contributes to mastering such critical skills as it gives the necessary feedback and this helps remember the required level of accuracy for effective periodontal treatment. Although Periosim Haptics provides considerable development advantages over its counterparts, in the form of improved learners’ confidence and skill mastery, Its high initial and ongoing costs are an obvious barrier to popularity. In comparison to wider dental training initiatives, Periosim Haptics limits itself to periodontology and provides unmatched realism in mimicking gum-tissue interaction. The incorporation of such specially trained simulators may serve to enhance dental education platforms by expanding the scope of applicable training pictures and considerably boosting their educative value.

### DENTAL CHART
A dental chart is a tool for dentists and dental hygienists that facilitates a proper recording of the health status of human teeth and gums. It particularly involves periodontal charting, a stage where they record and measure the space between each tooth in millimeters. That is the dentist making a graph during a dental visit. It has a visual nature to communicate the details of a patient’s oral health. A dental chart is a graphical tool, which is a part of dental health documentation that lists all essential parameters about oral health. The dental hygienist, who looks into the mouth during the examination, typically makes the dental chart. In the process of investigating teeth, the hygienist collects information to understand the condition of the teeth and gums and records the important findings on the chart. While this chart may have other formats, the main idea of this is to visualize and show the inside of the mouth. These are some Conditions and issues marked in the dental chart.

* Tooth decay
* Any missing teeth
* The state of gum pockets is expressed by the presence of bleeding or gum recession.
* Any abnormalities in teeth structure
* Any damage in teeth.
* Crowns, Bridges, Implants, and Fillings
* Movement in teeth
* Bleeding gums

To provide patients with clear communication and to avoid all confusion during check-ups, both dentists and their assistants must use one type of notation or the same symbols of the chart. This method will provide us with the possibility to correctly recognize and record all the details of each tooth. There are three main notations for dental charts that are frequently used. Universal Numbering notation (American Dental Association), FDI World Dental Federation notation (FDI World Dental Federation), and Palmer Notation (Phinney and Halstead, 2004). These systems, on the other hand, are designed for aim to detail the different conditions but point to a few problems like misunderstandings between dentists and assistants and lack of interactive visuals. Apart from other problems with the present process of storing dental records are their loss or damage, lengthy times to retrieve information, the need for more space to store, difficult-to-read or smeared handwriting, inconsistent notes or comments, serious tasks of management, and complex report-generating. Digital dental charting in replacement for paper-based ones can considerably reduce the time spent during a dental examination with easy-to-understand and user-friendly platforms. This not only decreases the chance of misunderstandings between a dentist and his assistant but also provides dependable and accurate dental records, which, in turn, encourages the forming and implementation of an electronic dental information system. As for the program for digital dental charts, the digital marking and data storage in the database appear to be the leading ones. There are also some different marking solutions applied. In one case, any adaptation or edits done to the tooth’s surface are noted by shading its surface back. An improved tooth will have one of its surfaces(s) shaded. Together with applying a tooth surface alteration, we could also input the so-called tooth score. The condition of the unevenness of the surface and the position of the tooth are both described. Once updates have been made, the dental chart of the patient can be displayed in the chart format along with the score of the tooth appearing in a box beside it. In another case can concentrate on charting systems that are easy to handle and allow users to navigate through them. By swiftly shifting the watch of the mouse to a tooth and clicking the mouse one can visualize an enlarged view of that tooth that is used for easy identification and documentation. The tooth tooltip on the side provides quick reading access for the diagnostics or treatment information. It allows the dental staff to understand rapidly patients’ oral health without wasting time on records searching. The module provides information for dentists about the tooth highlighting the affected tooth or a certain part within a tooth, no matter the area it is found, including the teeth at the back, front, and beside. A modification to the record can be done with one more click on that square. This is a guarantee of the accuracy of the data relating to the patient. The user interface area includes a list of control commandments such as diagnosis, treatment, and condition labels which are sent directly to the chart through a simple click. The section of this chapter provides diagnosing and treatment conditions as per ICD-10 codes for achieving global and standardized recognition of diagnoses. Regarding the database structure for the digital dental chart, in a case, it incorporates a relational database model with three primary entities: Patient, Tooth, and test. The patient class contains the information about the patient therefore Tooth
class has the information of each tooth. Teeth are categorized into types with either four or five surfaces, named from a list of seven possible surfaces: labial, mesial, distal, lingual, buccal, and occlusal. Specifically, incisors have 2 surfaces; the labial
surfaces are those of the cheek or the lips lip touching, the mesial is facing the midline of the face, distal is in opposite with mesial, palatal, and lingual surfaces both face the tongue (palatal for upper teeth and lingual for lower teeth), buccal is
the space adjacent to the cheek and occlusal is the surface for teeth with five surfaces. In the database table each tooth’s surfaces are specifically
recorded in at least twelve columns or attributes, they are visit ID, date of visit, patient ID, tooth ID, and specific surfaces
such as buccal, palatal, mesial, distal, occlusal, lingual, labial, and a score which is used to indicate the conditions of the
tooth during a dentist visit. VisitID is the primary key that the entity itself has this feature and PatientID is the foreign key that connects back to the Patient entity featured.
Another system [23] has an advanced algorithm to detect gaps in the teeth through the use of dental records. Thus such an algorithm works like a detective, it figures out each patient’s teeth by examining dental records counts missing teeth, and decides about the nature of tooth loss by criteria.
Whether the teeth are naturally missing, an extraction, or disease is the cause, the software has categorized these so that the one responsible determines what is the direct leading factor. Through this classifying, the dentist instantly has access to all the patient’s information about his dental history, thus, the dental doctor can conveniently create a satisfactory remedy for the dental problem with less effort by not manually sorting out and allocating the teeth, which are missing. Nevertheless, these methods have some set of restrictions. This technique is based only on selecting color filling to denote the different areas while leaving the contents of the image
without annotations. Moreover, among all kinds of dental charting systems available for dentists to input data, no one currently aims at providing a feature for dental students who want to practice charting and compare their marked charts with the correct ones.

### EVALUATING THE IMPACT OF VPS ON DENTAL TRAINING
Measuring is a key component of a virtual patient simulator and it is critical for evaluating student gains. Different scholars utilize several techniques to appraise the progress including simulations, and they are on the lookout for the quality of education impact. In a system, the evaluation was done with a complex method technique which is a scientific mix way methods using both qualitative and quantitative data. It involved four measures: the researcher’s observations and analysis memos, in-service class photos, peer tutor evaluation, and exit interviews. These measures were used to assess student engagement across
three dimensions: flow abilities, captivation, and significance. These secondary data were concurrently triangulated to ensure
a broad-based learning experience of virtual patient simulation (VPS). This style of evaluation, therefore, resulted in a detailed, multidimensional assessment of the educational program and pursued the issue of both highlighting the areas of success and discovering which areas needed improvement. Evaluation in another project [25] was conducted simultaneously by both performance ratio measurement and self-assessment by the students through a VR simulator named DENTIFY. Students had several practical sessions where lab
work and technical abilities were mastered. Measuring their outcome through months, the results have shown progress
in skills like fine motor skills and work done in a short time. Additionally, they filled in the self-evaluation papers that measured students’ perception of their learning course
and the development of their tools. Through a hybrid of both performance observation and self-completed assessments that analyze the purpose of the simulator in the education process, effectiveness was found. In another system, the evaluation was carried out using a virtual objective structured clinical examination (OSCE) before and after the intervention. This method assessed students’ improvement in skills through two phases. Additionally, students’ perceptions of the usefulness of the interventions were evaluated through an online questionnaire and focus group discussions. The study used both quantitative data from pre- and post-test OSCE scores and qualitative feedback from students to assess the effectiveness of the educational interventions.

<!--
## Methodology
-->

<!--
## Experiment Setup and Implementation
-->

<!--
## Results and Analysis
-->

## Conclusion

This research project has aimed to enhance an existing virtual patient simulator for dental education by introducing custom patient case creation with the automation of the 3D model and integrating haptic feedback with the simulator. The enhancements are expected to significantly improve the learning experience for dental students by providing a diverse range of patient cases and a more immersive and realistic simulation environment. The ability to automate patient cases and the 3D model guided by tutors’ input using a web front-end will increase the diversity and complexity of cases available for student learning and it will allow for a more personalized and realistic simulation experience.

This custom case creation feature will allow for the inclusion of rare dental conditions, thereby enriching the learning content. Furthermore, the integration of a haptic device will provide tactile feedback, enhancing the realism of the simulations and mirroring the complexities of actual clinical practice. In addition to these technical enhancements, the project will evaluate the effectiveness of the enhanced simulator from both the students’ and tutors’ perspectives. This evaluation will provide valuable insights into the simulator’s strengths and areas for improvement, as well as its impact on student learning and satisfaction. It will also inform future development efforts
and best practices for using virtual patient simulators in dental education.

In conclusion, the proposed enhancements to the virtual patient simulator promise to significantly improve dental education by providing a diverse range of patient cases and a more immersive and realistic learning experience. The literature reviewed underscores the potential benefits of such simulators in dental education and supports the need for continued research and development in this area. This project represents a significant step towards leveraging technology to enhance dental education, and it is anticipated that the findings will contribute to the ongoing evolution of teaching methodologies in the field.

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
