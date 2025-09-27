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

# Deployment Guideline

## Backend (Firebase Cloud Functions)

The backend is designed to be deployed as **Firebase Cloud Functions**, which ensures scalability, security, and seamless integration with Firebase services. Institutions can fork the repository and deploy the backend into their own Firebase project with minimal effort.

---

### 1. Prerequisites
- Install **Node.js LTS** (v18 or later recommended).  
- Install the Firebase CLI:  
  ```bash
  npm install -g firebase-tools
  ```
- Create a Firebase project in the [Firebase Console](https://console.firebase.google.com).  
- Enable the following services in your Firebase project:
  - Firestore Database  
  - Cloud Storage  
  - Authentication (configure allowed institutional email domains)  

---

### 2. Project Setup
1. Clone the backend repository:
   ```bash
   git clone <your-backend-repo-url>
   cd code/Backend
   ```

2. Initialize Firebase in this folder:
   ```bash
   firebase login
   firebase init
   ```
   - Choose **Functions** and **Firestore**.  
   - Select your Firebase project.  
   - Use **JavaScript** (not TypeScript), since the provided codebase is written in JS.  

---

### 3. Move Code into Functions
- Place your backend code inside the `functions/` directory, for example:
  ```
  functions/index.js
  functions/routes/dentalCases.js
  functions/config/db.js
  ```

- Adapt Express for Firebase Functions in `functions/index.js`:
  ```js
  const functions = require("firebase-functions");
  const express = require("express");
  const app = express();

  // Import routes
  const dentalRoutes = require("./routes/dentalCases");
  app.use("/cases", dentalRoutes);

  // Export as a Firebase Function
  exports.api = functions.https.onRequest(app);
  ```

- Install dependencies inside `functions/`:
  ```bash
  cd functions
  npm install express firebase-admin
  ```

---

### 4. Service Account Setup
1. In Firebase Console, navigate to:  
   `Project Settings > Service Accounts > Generate new private key`.  
2. Download the JSON key and save it as:  
   ```
   functions/serviceAccountKey.json
   ```
3. Update `functions/config/db.js` with your project bucket:
   ```js
   const admin = require("firebase-admin");
   const serviceAccount = require("./serviceAccountKey.json");

   admin.initializeApp({
     credential: admin.credential.cert(serviceAccount),
     storageBucket: "gs://<your-project-id>.appspot.com",
   });

   const db = admin.firestore();
   const bucket = admin.storage().bucket();

   module.exports = { admin, db, bucket };
   ```

---

### 5. Deploy Backend
Deploy with:
```bash
firebase deploy --only functions
```

After deployment, Firebase will provide a base URL like:
```
https://<project-id>.cloudfunctions.net/api
```

All backend endpoints (e.g., `/cases/get`, `/cases/store`) will now be live.


\section{Student Interface -- Deployment Guide}

This section explains how to deploy the \textbf{Student Interface} of the Virtual Patient Simulator using Firebase Hosting and GitHub Actions.

\subsection{Prerequisites}
Before deployment, ensure you have:
\begin{itemize}
    \item A Firebase Project created in the \href{https://console.firebase.google.com/}{Firebase Console}.
    \item A forked GitHub repository of this project.
    \item A Firebase Service Account key (JSON file) downloaded.
    \item Node.js (v18 or later) installed for optional local testing.
    \item The Firebase CLI installed globally:
\begin{verbatim}
npm install -g firebase-tools
\end{verbatim}
\end{itemize}

\subsection{Firebase Setup}
\begin{enumerate}
    \item Go to \textbf{Firebase Console $\rightarrow$ Project Settings $\rightarrow$ Service Accounts}.
    \item Click \textbf{Generate new private key}.
    \item Copy the JSON content.
    \item In your GitHub repository, go to \textbf{Settings $\rightarrow$ Secrets and variables $\rightarrow$ Actions}.
    \item Add a new secret:
    \begin{itemize}
        \item Name: \texttt{FIREBASE\_SERVICE\_ACCOUNT}
        \item Value: Paste the full JSON content.
    \end{itemize}
    \item In the repository root, edit the \texttt{.firebaserc} file to include your Firebase project ID:
\begin{verbatim}
{
  "projects": {
    "default": "your-project-id"
  }
}
\end{verbatim}
Replace \texttt{your-project-id} with the Firebase project ID from your console.
\end{enumerate}

\subsection{Configuration Files}
At the \textbf{repository root}, the following files are included:
\begin{itemize}
    \item \textbf{firebase.json} -- Defines Firebase Hosting targets for both Tutor and Student interfaces.
    \item \textbf{.firebaserc} -- Stores the Firebase project ID.
\end{itemize}

The Student interface is linked to the hosting target \texttt{student}, pointing to:
\begin{verbatim}
"public": "code/Student interface/build"
\end{verbatim}

\subsection{GitHub Actions Workflow}
Deployment is automated via GitHub Actions. The workflow file is located at:
\begin{verbatim}
.github/workflows/deploy-student.yml
\end{verbatim}

Each push to the \texttt{main} branch will:
\begin{enumerate}
    \item Install dependencies inside \texttt{code/Student interface}.
    \item Build the React app (\texttt{npm run build}).
    \item Deploy the build output to Firebase Hosting.
\end{enumerate}

\subsection{Unity WebGL Integration}
\begin{itemize}
    \item Download the Unity WebGL build from 
    \href{https://drive.google.com/drive/folders/1mfb-epyvyAzI5n1tKlxAJOfGY8D86R7B?usp=drive_link}{this link}.
    \item Copy the downloaded folder into:
\begin{verbatim}
code/Student interface/public
\end{verbatim}
    \item Update the \texttt{useUnityContext} function in:
\begin{verbatim}
src/Components/UI/resources/ThreeD.js
\end{verbatim}
    to point to the correct Unity files location.
\end{itemize}

\subsection{Authentication Setup}
\begin{itemize}
    \item Update the Google Client ID in:
\begin{verbatim}
src/Components/SignIn/index.js
\end{verbatim}
    with the Client ID from your Firebase Project
    (Authentication $\rightarrow$ Sign-in method $\rightarrow$ Google).
    \item Restrict Firebase Authentication to your institutional email domain in the Firebase Console.
\end{itemize}

\subsection{Optional Local Deployment}
For local testing before pushing:
\begin{verbatim}
cd code/Student\ interface
npm install
npm run build
firebase deploy --only hosting:student
\end{verbatim}
Ensure the Firebase CLI is installed and you are logged in with:
\begin{verbatim}
firebase login
\end{verbatim}

\subsection{Accessing the Application}
After deployment, Firebase will provide a hosting URL such as:
\begin{verbatim}
https://your-project-id.web.app
\end{verbatim}
Use this link to access the deployed Student Interface.



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