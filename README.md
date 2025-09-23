___
# Virtual patient simulator for skill training in dentistry
___
### Introduction
This project focuses on enhancing virtual patient simulations used in dental education by introducing a custom case creation feature. The main objective is to provide tutors with a user-friendly portal that allows them to design unique clinical cases, enabling students to interact with a diverse range of dental scenarios. The system combines ReactJS for the front end, Firebase for data management, and Unity for 3D modeling, creating a seamless experience for both tutors and students.

By automating the generation of 3D models based on case data, the system offers an interactive learning environment, improving critical skills such as history taking, diagnosis, and treatment planning. The project was evaluated through user testing involving both students and tutors, yielding positive feedback on usability and educational effectiveness. This innovation aims to bridge the gap in dental simulators by offering customizable and scalable solutions for teaching and learning complex dental scenarios.

For more Details Visit: [Project Page](https://cepdnaclk.github.io/e18-4yp-Virtual-Patient-Simulator-for-Skill-Training-in-Dentistry/)
 

#### Team

- E/18/013, R.Abilash, [email](mailto:e18013@eng.pdn.ac.lk)
- E/18/115, A.Gowsigan, [email](mailto:e18115@eng.pdn.ac.lk)
- E/18/203, K.G.A.S.Madhusanka, [email](mailto:e18203@eng.pdn.ac.lk)

#### Supervisors

- Prof. Roshan G. Ragel, [email](mailto:roshanr@eng.pdn.ac.lk)
- Dr. Upul Jayasinghe , [email](mailto:upuljm@eng.pdn.ac.lk)
- Dr. D Leuke Bandara , [email](mailto:dhanulb@dental.pdn.ac.lk)
- Dr. Titus Jayarathna , [email](mailto:titus@eng.pdn.ac.lk)


---

## How to Run the Code

### 1. Run Tutor Interface
- Navigate to the `code/TutorInterface` directory:
  ```bash
  cd code/TutorInterface
  ```
- Install dependencies:
  ```bash
  npm install
  ```
- Start the development server:
  ```bash
  npm run dev
  ```
- **Important:** Make sure to update the backend base URL in `src/config.js`.

### 2. Run Backend
- Navigate to the `code/backend` directory:
  ```bash
  cd code/backend
  ```
- Install dependencies:
  ```bash
  npm install
  ```
- Start the backend server:
  ```bash
  npm start
  ```
- **Important:** Make sure to update the `storageBucket` in `db.js`.

### 3. Run Student Interface
- Download the Unity WebGL file from this [URL](https://drive.google.com/drive/folders/1mfb-epyvyAzI5n1tKlxAJOfGY8D86R7B?usp=drive_link).
- Copy the downloaded folder and paste it into `student/public`.
  
Then, follow these steps:
- Navigate to the `code/student` directory:
  ```bash
  cd code/student
  ```
- Install dependencies:
  ```bash
  npm install
  ```
- Start the development server:
  ```bash
  npm start
  ```
- **Important:** Update the `useUnityContext` function in `src/Components/UI/resources/ThreeD.js` according to the Unity files location.
- **Important:** Update the Google client ID in `src/Components/SignIn/index.js`.

---


### Links

- [Project Repository](https://github.com/cepdnaclk/e18-4yp-Virtual-Patient-Simulator-for-Skill-Training-in-Dentistry)
- [Project Page](https://cepdnaclk.github.io/e18-4yp-Virtual-Patient-Simulator-for-Skill-Training-in-Dentistry)
- [Department of Computer Engineering](http://www.ce.pdn.ac.lk/)
- [University of Peradeniya](https://eng.pdn.ac.lk/)


test