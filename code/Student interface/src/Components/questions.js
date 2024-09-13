// questions.js

export const questions = {
    complaint: [
        {
            q: "Can you point to the tooth which is painful?",
            correctness: true,
            a: "Here it is",
            image:
                "https://firebasestorage.googleapis.com/v0/b/vitual-patient.appspot.com/o/Cases%2FC001%2FpointToothC001.jfif?alt=media&token=c2071e16-4945-4106-841c-34f5fe72265c",
            cat: "complaint",
            id: "1",
        },
        {
            q: "How many days have you had pain on the tooth?",
            cat: "complaint",
            image: "",
            correctness: true,
            a: "Three days",
            id: "2",
        },
        {
            a: "Yes. Sometimes get earache",
            cat: "complaint",
            q: "Does the pain radiate?",
            correctness: true,
            id: "3",
            image: "",
        },
        {
            image: "",
            a: "Yes. I had pain from time to time. But for the last three days I had continuous pain and could not sleep at night due to the pain",
            correctness: true,
            cat: "complaint",
            q: "Have you had any pain before?",
            id: "4",
        },
        {
            cat: "complaint",
            id: "5",
            correctness: false,
            q: "Have you got any restorations done on that tooth?",
            image: "",
            a: "No",
        },
        {
            correctness: true,
            q: "Do you have pain when biting on that tooth?",
            a: "Yes difficult to eat from that side",
            id: "6",
            image: "",
            cat: "complaint",
        },
        {
            image: "",
            a: "I bought some tablets from the pharmacy. But the pain did not reduce much",
            cat: "complaint",
            id: "7",
            q: "Have you taken any treatments before for the pain?",
            correctness: true,
        },
        {
            correctness: false,
            image: "",
            a: "Don't know",
            id: "8",
            q: "Is it on a molar tooth?",
            cat: "complaint",
        },
        {
            image: "",
            a: "No",
            q: "Do you have pain on percussion?",
            correctness: false,
            id: "9",
            cat: "complaint",
        },
        {
            q: "Can you point to the tooth which is painful?",
            correctness: true,
            a: "This is it",
            image:
                "https://firebasestorage.googleapis.com/v0/b/vitual-patient.appspot.com/o/Cases%2FC001%2FpointToothC001.jfif?alt=media&token=c2071e16-4945-4106-841c-34f5fe72265c",
            cat: "complaint",
            id: "10",
        },
        // More items would be here...
    ],
    plaque: [
        {
            image: "",
            cat: "plaque",
            a: "A normal toothbrush",
            q: "What is the brush type you use?",
            correctness: true,
            id: "11",
        },
        {
            correctness: true,
            cat: "plaque",
            id: "12",
            q: "Do you use toothpaste?",
            a: "Yes",
            image: "",
        },
        {
            id: "13",
            a: "I am not sure",
            image: "",
            cat: "plaque",
            q: "Do you know whether it contains fluoride?",
            correctness: true,
        },
        {
            correctness: true,
            a: "I brush with toothpaste ",
            q: "How do you clean your mouth?",
            image: "",
            id: "14",
            cat: "plaque",
        },
        {
            correctness: true,
            id: "15",
            image: "",
            cat: "plaque",
            q: "How many times do you brush per day?",
            a: "Two times. Sometimes miss during the night",
        },
        {
            correctness: true,
            id: "16",
            image: "",
            cat: "plaque",
            q: "Do you use any other tools other than the toothbrush to clean the mouth?",
            a: "no",
        },
        {
            cat: "plaque",
            a: "I am not sure",
            correctness: true,
            image: "",
            id: "17",
            q: "What is the bristle type of the toothbrush?",
        },
        {
            image: "",
            cat: "plaque",
            a: "A normal toothbrush",
            q: "What is the brush type you use?",
            correctness: true,
            id: "18",
        },
        // More items would be here...
    ],
    dhistory: [
        {
            image: "",
            a: "When hungry in between meals Eat biscuits with tea in the evening",
            cat: "dhistory",
            correctness: true,
            q: "When do you usually eat sugary or sweet foods?",
            id: "19",
        },
        {
            a: "Most of the days yes",
            cat: "dhistory",
            correctness: true,
            id: "21",
            q: "Do you eat sugary food/sweets daily?",
            image: "",
        },
        // More items would be here...
    ],
    // Other categories would be here...
    medicalH: [
        {
            q: "Are you attending a medical clinic?",
            a: "no",
            cat: "medicalH",
            correctness: true,
            id: "22",
            image: "",
        },
        {
            a: "no",
            id: "23",
            cat: "medicalH",
            q: "Do you have any allergies? ",
            image: "",
            correctness: true,
        },
        {
            image: "",
            id: "24",
            cat: "medicalH",
            correctness: true,
            q: "Are you taking regular drugs for any disease?",
            a: "no",
        },
        {
            q: "Have you had any operations or hospitalizations?",
            cat: "medicalH",
            correctness: true,
            image: "",
            id: "25",
            a: "no",
        },
    ],
    habits: [
        {
            id: "26",
            correctness: true,
            a: "no",
            cat: "habits",
            image: "",
            q: "Do you chew betel or areca nuts?",
        },
        {
            image: "",
            a: "no",
            cat: "habits",
            q: "Do you smoke or use any form of tobacco?",
            correctness: true,
            id: "27",
        },
        {
            image: "",
            a: "no",
            q: "Do you drink alcohol?",
            cat: "habits",
            id: "28",
            correctness: true,
        },
    ],
    shistory: [
        {
            cat: "shistory",
            id: "29",
            image: "",
            q: "Are you doing a job?",
            a: "Yes doing business. Have a grocery shop",
            correctness: true,
        },
    ],
    pretreate: [
        {
            q: "What dental treatments have you had before?",
            id: "30",
            cat: "pretreate",
            image: "",
            a: "Teeth cleaning and fillings. Could not attend a dental clinic for a long time",
            correctness: true,
        },
    ],
};