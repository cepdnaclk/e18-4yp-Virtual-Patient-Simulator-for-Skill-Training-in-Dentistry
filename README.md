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
## 3. Obtain the Web API Key

1. Open the [Firebase Console](https://console.firebase.google.com/).  
2. Select your project (e.g., `vps-2k25-app`).  
3. In the left sidebar, go to **Project Settings → General**.  
4. Scroll down to the **Your apps** section.  
5. Under your registered **Web App**, copy the value labeled **Web API Key**.  


### Configure the Backend

1. Add the following environment variable in .env under code/Backend/functions/config/.:
   ```env
   FIREBASE_WEB_API_KEY=your_copied_key_here
   ```

###  Summary
- Get the **Web API Key** from Firebase Console.  
- Add it to `.env` under `code/Backend/functions/config/`.  
- Backend automatically injects it into the **Identity Toolkit API** requests for login.  

---

## 4. Enable Required Services

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

## 5. Service Account Setup

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

## 6. Assign IAM Roles

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

## 7. Trigger Deployment

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

## 8. After Deployment

- Firebase will generate a URL such as:  

```
https://<your-project-id>.cloudfunctions.net/api
```

- All backend endpoints (e.g., `/api/teacher`, `/api/teethDetails`) will now be live.  
- You can verify them in your browser or with Postman.  

---


# Frontend Deployment Guide (Tutor & Student Interfaces)

This document provides **step-by-step deployment guidelines** for the **Tutor** and **Student** interfaces of the Virtual Patient Simulator project.  
⚡ The GitHub workflows and Firebase configuration files are **already set up** — you just need to **update site IDs and secrets**.

---

## 1. Firebase Hosting Setup

You must create **two Hosting sites** inside your Firebase project (`vps-2k25-app`):

- **Tutor Hosting Site** → `vps-2k25-app-tutor`  
- **Student Hosting Site** → `vps-2k25-app-student`

📌 Go to **Firebase Console → Hosting → Add Site** and create them with the above IDs.

---

## 2. Firebase Configuration File (`firebase.json`)

The following `firebase.json` is already configured.  
You only need to make sure the hosting **targets** match the site IDs created above:

```json
{
  "functions": {
    "runtime": "nodejs22",
    "region": "us-central1",
    "gen": "2",
    "source": "code/Backend/functions"
  },
  "hosting": [
    {
      "target": "tutor",
      "site": "vps-2k25-app-tutor",
      "public": "code/Tutor_interface/dist",
      "ignore": [
        "firebase.json",
        "**/.*",
        "**/node_modules/**"
      ]
    },
    {
      "target": "student",
      "site": "vps-2k25-app-student",
      "public": "code/Student_interface/build",
      "ignore": [
        "firebase.json",
        "**/.*",
        "**/node_modules/**"
      ],
      "headers": [
        {
          "source": "/unity/**",
          "headers": [
            {
              "key": "Cross-Origin-Opener-Policy",
              "value": "same-origin"
            },
            {
              "key": "Cross-Origin-Embedder-Policy",
              "value": "require-corp"
            }
          ]
        }
      ]
    }
  ]
}
```

---

## 3. GitHub Secrets (Required)

In your repository settings (`Settings → Secrets and variables → Actions`), add:

- `FIREBASE_SERVICE_ACCOUNT_VPS_2K25_APP` → JSON from Firebase service account  
- `GITHUB_TOKEN` → Already provided automatically by GitHub  

These are required for the workflows to authenticate and deploy.

---

## 4. Tutor Interface Deployment Workflow

This workflow is already created under `.github/workflows/deploy-tutor.yml`:

```yaml
name: Deploy to Firebase Hosting on merge - Tutor
on:
  push:
    branches:
      - main
    paths:
      - 'code/Tutor_interface/**'
  workflow_dispatch:
jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: ./code/Tutor_interface
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm run build
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: ${{ secrets.GITHUB_TOKEN }}
          firebaseServiceAccount: ${{ secrets.FIREBASE_SERVICE_ACCOUNT_VPS_2K25_APP }}
          channelId: live
          projectId: vps-2k25-app
          target: tutor
```

---

## 5. Student Interface Deployment Workflow

This workflow is already created under `.github/workflows/deploy-student.yml`:

```yaml
name: Deploy Student Interface
on:
  push:
    branches:
      - main
    paths:
      - 'code/Student_interface/**'
  workflow_dispatch:
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: ./code/Student_interface
    steps:
      - uses: actions/checkout@v4
      - run: npm install --legacy-peer-deps && npm run build
        env:
          CI: false
      - uses: FirebaseExtended/action-hosting-deploy@v0
        with:
          repoToken: ${{ secrets.GITHUB_TOKEN }}
          firebaseServiceAccount: ${{ secrets.FIREBASE_SERVICE_ACCOUNT_VPS_2K25_APP }}
          channelId: live
          projectId: vps-2k25-app
          target: student
```

---

## 6. Student Interface – Additional Configuration


1. **Google OAuth Client ID**  
   Update the **Google Client ID** in:

   ```
   code/Student_interface/src/Components/SignIn/index.js
   ```

2. Update Backend URL

 Make sure to update the backend base URL which was generated from Backend deployment

 ```
 code/Student_interface/src/config.js.
 ```



---

## ✅ Summary for Outsiders

- Create two hosting sites:  
  `vps-2k25-app-tutor` and `vps-2k25-app-student`.  
- Update the hosting `site` values in `firebase.json`.  
- Add the Firebase service account key to GitHub secrets.  
- Tutor and Student deployment workflows are already set up.  
- Student interface requires Google Client ID update 

---


### Links

- [Project Repository](https://github.com/cepdnaclk/e18-4yp-Virtual-Patient-Simulator-for-Skill-Training-in-Dentistry)
- [Project Page](https://cepdnaclk.github.io/e18-4yp-Virtual-Patient-Simulator-for-Skill-Training-in-Dentistry)
- [Department of Computer Engineering](http://www.ce.pdn.ac.lk/)
- [University of Peradeniya](https://eng.pdn.ac.lk/)


test