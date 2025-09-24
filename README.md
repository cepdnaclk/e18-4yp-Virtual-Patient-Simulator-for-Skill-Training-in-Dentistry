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

## Deployment Guideline

### Backend (Firebase Cloud Functions)

The backend is designed to be deployed as \textbf{Firebase Cloud Functions}, which ensures scalability, security, and seamless integration with Firebase services. Institutions can fork the repository and deploy the backend into their own Firebase project with minimal effort.

\subsection*{1. Prerequisites}
\begin{itemize}
  \item Install \textbf{Node.js LTS} (v18 or later is recommended).  
  \item Install the Firebase CLI:  
\begin{verbatim}
npm install -g firebase-tools
\end{verbatim}
  \item Create a Firebase project in the \href{https://console.firebase.google.com}{Firebase Console}.  
  \item Enable the following services in Firebase:  
    \begin{itemize}
      \item Firestore Database  
      \item Cloud Storage  
      \item Authentication (configure allowed institutional email domains)  
    \end{itemize}
\end{itemize}

\subsection*{2. Project Setup}
\begin{enumerate}
  \item Clone the backend repository:
\begin{verbatim}
git clone <your-backend-repo-url>
cd Backend
\end{verbatim}

  \item Initialize Firebase in this folder:
\begin{verbatim}
firebase login
firebase init
\end{verbatim}
  Choose \texttt{Functions} and \texttt{Firestore}, then select your Firebase project.  
  Use \texttt{JavaScript} (not TypeScript), since the provided codebase is written in JS.
\end{enumerate}

\subsection*{3. Move Code into Functions}
\begin{itemize}
  \item Place your existing backend code inside the \texttt{functions/} directory, e.g.:  
\begin{verbatim}
functions/index.js
functions/routes/dentalCases.js
functions/config/db.js
\end{verbatim}

  \item Adapt Express for Firebase Functions in \texttt{functions/index.js}:
\begin{verbatim}
const functions = require("firebase-functions");
const express = require("express");
const app = express();

// Import routes
const dentalRoutes = require("./routes/dentalCases");
app.use("/cases", dentalRoutes);

// Export as a Firebase Function
exports.api = functions.https.onRequest(app);
\end{verbatim}

  \item Install dependencies inside \texttt{functions/}:
\begin{verbatim}
cd functions
npm install express firebase-admin
\end{verbatim}
\end{itemize}

\subsection*{4. Service Account Setup}
\begin{enumerate}
  \item In Firebase Console, navigate to:  
  \texttt{Project Settings > Service Accounts > Generate new private key}.  
  \item Download the JSON key and save it as:  
  \texttt{functions/serviceAccountKey.json}  
  \item Update \texttt{functions/config/db.js} with your project bucket:
\begin{verbatim}
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://<your-project-id>.appspot.com",
});

const db = admin.firestore();
const bucket = admin.storage().bucket();

module.exports = { admin, db, bucket };
\end{verbatim}
\end{enumerate}

\subsection*{5. Deploy Backend}
\begin{verbatim}
firebase deploy --only functions
\end{verbatim}

After deployment, Firebase provides a base URL like:  
\texttt{https://<project-id>.cloudfunctions.net/api}  

All backend endpoints (e.g., \texttt{/cases/get}, \texttt{/cases/store}) are now live.


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