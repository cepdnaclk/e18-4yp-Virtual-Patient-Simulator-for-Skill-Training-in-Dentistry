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

# Backend Deployment Guide (Firebase Cloud Functions)

This guide explains how to deploy the **Backend** of the Virtual Patient Simulator into your own Firebase project.  
Follow all steps in order — no prior Firebase or Google Cloud knowledge is needed.

---

## 1. Prerequisites

1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).  
2. Link the project to a **Google Cloud Billing account**:
   - Go to **Firebase Console → Project Settings → Billing**.  
   - Upgrade to the **Blaze (Pay as you go)** plan.  
   - Without this step, backend deployment will fail.  
3. Fork this GitHub repository into your own organization.  
4. Ensure Node.js (v18+) is installed if you want to test locally.  

---

## 2. Configure Firebase Project ID

Before deployment, update the Firebase configuration files in the repository:

- In `.firebaserc`:
  ```json
  {
    "projects": {
      "default": "your-firebase-project-id"
    }
  }
  ```

- In `firebase.json`, leave as-is (already prepared).  

📌 Replace `your-firebase-project-id` with the **Project ID** from your Firebase Console (**Project Settings → General → Project ID**).

---

## 3. Enable Required Services

Firebase runs on Google Cloud, so some services must be enabled before deployment.

### How to enable
1. Go to **Firebase Console → Project Settings → Service Accounts → Manage Service Accounts**.  
   (This link takes you directly to Google Cloud Console for the same project.)  
2. In the left sidebar, click **APIs & Services → Library**.  
3. Enable the following APIs (search each one and click "Enable"):

- `cloudfunctions.googleapis.com`  
- `cloudbuild.googleapis.com`  
- `artifactregistry.googleapis.com`  
- `firebaseextensions.googleapis.com`  
- `eventarc.googleapis.com`  
- `run.googleapis.com`  
- `cloudbilling.googleapis.com` (already enabled when you link billing)

---

## 4. Service Account Setup

The backend uses a **service account** for authentication.  

1. Go to **Firebase Console → Project Settings → Service Accounts**.  
2. Click **Generate new private key** → a JSON file will download.  
3. Open the file in any text editor (e.g., Notepad).  
4. Copy the **entire JSON content**.  
5. In your forked GitHub repository:
   - Go to **Settings → Secrets and variables → Actions → New Repository Secret**.  
   - Add:
     - **Name:** `FIREBASE_SERVICE_ACCOUNT`  
     - **Value:** paste the JSON content.  

---

## 5. Assign IAM Roles

Still in Google Cloud Console:

1. Go to **IAM & Admin → IAM**.  
2. Find the service account you just created.  
3. Click **Edit principal → Add roles**.  
4. Add the following roles:
   - **Firebase Admin**  
   - **Cloud Functions Admin**  
   - **Service Account User**  
   - **Artifact Registry Administrator**  

These roles are the minimum required for deployment.

---

## 6. Trigger Deployment

The repository already contains a GitHub Actions workflow at:

```
.github/workflows/deploy-backend.yml
```

Deployment runs automatically when you:

- Push a change to any file under `code/Backend/` **OR**  
- Trigger manually from **GitHub → Actions → Deploy Backend → Run workflow**

The workflow will:

1. Authenticate with Firebase using the service account.  
2. Install dependencies in `code/Backend/functions`.  
3. Set up an Artifact Registry cleanup policy.  
4. Deploy your backend as Firebase Cloud Functions.  

---

## 7. After Deployment

- Firebase will generate a URL such as:  

```
https://<your-project-id>.cloudfunctions.net/api
```

- All backend endpoints (e.g., `/api/teacher`, `/api/teethDetails`) will now be live.  
- You can verify them in your browser or with Postman.  

---


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