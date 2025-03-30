import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

// export const doctors = [
//     {
//         _id: 'doc1',
//         name: 'Dr. Richard James',
//         image: doc1,
//         speciality: 'General physician',
//         degree: 'MBBS',
//         experience: '4 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 50,
//         address: {
//             line1: '17th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc2',
//         name: 'Dr. Emily Larson',
//         image: doc2,
//         speciality: 'Gynecologist',
//         degree: 'MBBS',
//         experience: '3 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 60,
//         address: {
//             line1: '27th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc3',
//         name: 'Dr. Sarah Patel',
//         image: doc3,
//         speciality: 'Dermatologist',
//         degree: 'MBBS',
//         experience: '1 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 30,
//         address: {
//             line1: '37th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc4',
//         name: 'Dr. Christopher Lee',
//         image: doc4,
//         speciality: 'Pediatricians',
//         degree: 'MBBS',
//         experience: '2 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 40,
//         address: {
//             line1: '47th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc5',
//         name: 'Dr. Jennifer Garcia',
//         image: doc5,
//         speciality: 'Neurologist',
//         degree: 'MBBS',
//         experience: '4 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 50,
//         address: {
//             line1: '57th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc6',
//         name: 'Dr. Andrew Williams',
//         image: doc6,
//         speciality: 'Neurologist',
//         degree: 'MBBS',
//         experience: '4 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 50,
//         address: {
//             line1: '57th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc7',
//         name: 'Dr. Christopher Davis',
//         image: doc7,
//         speciality: 'General physician',
//         degree: 'MBBS',
//         experience: '4 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 50,
//         address: {
//             line1: '17th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc8',
//         name: 'Dr. Timothy White',
//         image: doc8,
//         speciality: 'Gynecologist',
//         degree: 'MBBS',
//         experience: '3 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 60,
//         address: {
//             line1: '27th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc9',
//         name: 'Dr. Ava Mitchell',
//         image: doc9,
//         speciality: 'Dermatologist',
//         degree: 'MBBS',
//         experience: '1 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 30,
//         address: {
//             line1: '37th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc10',
//         name: 'Dr. Jeffrey King',
//         image: doc10,
//         speciality: 'Pediatricians',
//         degree: 'MBBS',
//         experience: '2 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 40,
//         address: {
//             line1: '47th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc11',
//         name: 'Dr. Zoe Kelly',
//         image: doc11,
//         speciality: 'Gastroenterologist',
//         degree: 'MBBS',
//         experience: '4 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 50,
//         address: {
//             line1: '57th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc12',
//         name: 'Dr. Patrick Harris',
//         image: doc12,
//         speciality: 'Neurologist',
//         degree: 'MBBS',
//         experience: '4 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 50,
//         address: {
//             line1: '57th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc13',
//         name: 'Dr. Chloe Evans',
//         image: doc13,
//         speciality: 'General physician',
//         degree: 'MBBS',
//         experience: '4 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 50,
//         address: {
//             line1: '17th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc14',
//         name: 'Dr. Ryan Martinez',
//         image: doc14,
//         speciality: 'Gynecologist',
//         degree: 'MBBS',
//         experience: '3 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 60,
//         address: {
//             line1: '27th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
//     {
//         _id: 'doc15',
//         name: 'Dr. Amelia Hill',
//         image: doc15,
//         speciality: 'Dermatologist',
//         degree: 'MBBS',
//         experience: '1 Years',
//         about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
//         fees: 30,
//         address: {
//             line1: '37th Cross, Richmond',
//             line2: 'Circle, Ring Road, London'
//         }
//     },
// ]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Rajesh Sharma',
        image: doc1,
        speciality: 'General Physician',
        degree: 'MBBS, MD (Medicine)',
        experience: '12 Years',
        about: 'Dr. Sharma is a highly experienced general physician with expertise in diabetes, hypertension, and infectious diseases. He believes in holistic patient care and preventive medicine.',
        fees: 500,
        address: {
            line1: '12, Green Park Colony',
            line2: 'Near Metro Station, Delhi'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Priya Patel',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS, DGO, MD (Obstetrics & Gynecology)',
        experience: '9 Years',
        about: 'Dr. Patel specializes in women’s health, pregnancy care, and laparoscopic surgeries. She is known for her compassionate approach and patient-friendly consultations.',
        fees: 800,
        address: {
            line1: '45, Shivaji Nagar',
            line2: 'Pune, Maharashtra'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Vikram Singh',
        image: doc3,
        speciality: 'Cardiologist',
        degree: 'MBBS, DM (Cardiology)',
        experience: '15 Years',
        about: 'Dr. Singh is a senior cardiologist with expertise in angioplasty, pacemaker implantation, and heart failure management. He has worked in leading hospitals across India.',
        fees: 1200,
        address: {
            line1: 'Block C, Apollo Hospital',
            line2: 'Gurgaon, Haryana'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Ananya Reddy',
        image: doc4,
        speciality: 'Pediatrician',
        degree: 'MBBS, DCH, MD (Pediatrics)',
        experience: '7 Years',
        about: 'Dr. Reddy is a child specialist with expertise in neonatal care, vaccinations, and pediatric infections. She ensures a friendly and comforting environment for young patients.',
        fees: 600,
        address: {
            line1: '32, Rainbow Children’s Hospital',
            line2: 'Hyderabad, Telangana'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Arjun Mehta',
        image: doc5,
        speciality: 'Orthopedic Surgeon',
        degree: 'MBBS, MS (Orthopedics)',
        experience: '11 Years',
        about: 'Dr. Mehta specializes in joint replacements, sports injuries, and fracture management. He is known for his minimally invasive surgical techniques.',
        fees: 1500,
        address: {
            line1: 'Fortis Hospital, Bannerghatta Road',
            line2: 'Bengaluru, Karnataka'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Sneha Iyer',
        image: doc6,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD (Dermatology)',
        experience: '8 Years',
        about: 'Dr. Iyer treats skin, hair, and nail disorders with advanced dermatological procedures. She also specializes in cosmetic dermatology and laser treatments.',
        fees: 700,
        address: {
            line1: '56, Lokhandwala Complex',
            line2: 'Mumbai, Maharashtra'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Rohan Malhotra',
        image: doc7,
        speciality: 'Neurologist',
        degree: 'MBBS, DM (Neurology)',
        experience: '10 Years',
        about: 'Dr. Malhotra treats neurological disorders like epilepsy, stroke, and Parkinson’s disease. He is associated with top neurology institutes in India.',
        fees: 1000,
        address: {
            line1: 'Medanta Hospital, Sector 38',
            line2: 'Noida, Uttar Pradesh'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Kavita Joshi',
        image: doc8,
        speciality: 'ENT Specialist',
        degree: 'MBBS, MS (ENT)',
        experience: '14 Years',
        about: 'Dr. Joshi specializes in ear, nose, and throat disorders, including sinusitis, hearing loss, and tonsillitis. She is known for her precise diagnosis and treatment.',
        fees: 650,
        address: {
            line1: '22, Ruby Clinic',
            line2: 'Ahmedabad, Gujarat'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Aditya Kapoor',
        image: doc9,
        speciality: 'Psychiatrist',
        degree: 'MBBS, MD (Psychiatry)',
        experience: '6 Years',
        about: 'Dr. Kapoor provides mental health care for depression, anxiety, and addiction. He follows a patient-centered therapy approach along with medication management.',
        fees: 900,
        address: {
            line1: 'MindCare Clinic, MG Road',
            line2: 'Kolkata, West Bengal'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Nandini Desai',
        image: doc10,
        speciality: 'Oncologist',
        degree: 'MBBS, DM (Medical Oncology)',
        experience: '12 Years',
        about: 'Dr. Desai specializes in cancer treatment, including chemotherapy and immunotherapy. She works closely with patients for personalized cancer care.',
        fees: 1800,
        address: {
            line1: 'Tata Memorial Hospital',
            line2: 'Mumbai, Maharashtra'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Harish Verma',
        image: doc11,
        speciality: 'Urologist',
        degree: 'MBBS, MS, MCh (Urology)',
        experience: '13 Years',
        about: 'Dr. Verma treats kidney stones, prostate issues, and urinary infections. He is skilled in robotic and laparoscopic urological surgeries.',
        fees: 1100,
        address: {
            line1: 'Max Super Specialty Hospital',
            line2: 'Delhi'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Meera Banerjee',
        image: doc12,
        speciality: 'Endocrinologist',
        degree: 'MBBS, DM (Endocrinology)',
        experience: '9 Years',
        about: 'Dr. Banerjee specializes in diabetes, thyroid disorders, and hormonal imbalances. She provides comprehensive treatment plans for metabolic diseases.',
        fees: 850,
        address: {
            line1: 'Apollo Sugar Clinic',
            line2: 'Chennai, Tamil Nadu'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Sameer Khan',
        image: doc13,
        speciality: 'Pulmonologist',
        degree: 'MBBS, MD (Pulmonary Medicine)',
        experience: '10 Years',
        about: 'Dr. Khan treats respiratory diseases like asthma, COPD, and lung infections. He is experienced in critical care and sleep medicine.',
        fees: 950,
        address: {
            line1: 'KIMS Hospital',
            line2: 'Secunderabad, Telangana'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Anjali Gupta',
        image: doc14,
        speciality: 'Rheumatologist',
        degree: 'MBBS, DM (Rheumatology)',
        experience: '7 Years',
        about: 'Dr. Gupta specializes in arthritis, autoimmune diseases, and joint pain management. She focuses on improving patients’ quality of life through advanced treatments.',
        fees: 750,
        address: {
            line1: 'Artemis Hospital',
            line2: 'Gurgaon, Haryana'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Rohit Nair',
        image: doc15,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, DM (Gastroenterology)',
        experience: '11 Years',
        about: 'Dr. Nair treats digestive disorders, liver diseases, and performs endoscopic procedures. He is known for his expertise in advanced gastroenterology.',
        fees: 1300,
        address: {
            line1: 'Global Hospitals',
            line2: 'Mumbai, Maharashtra'
        }
    }
];