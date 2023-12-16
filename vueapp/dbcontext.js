// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js'
import { getFirestore, collection, query, getDocs, onSnapshot } from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkI4ijNhi0HTywQwsDC-JpfoPXutuR4kA",
    authDomain: "nchu7716.firebaseapp.com",
    databaseURL: "https://nchu7716-default-rtdb.firebaseio.com",
    projectId: "nchu7716",
    storageBucket: "nchu7716.appspot.com",
    messagingSenderId: "517749311036",
    appId: "1:517749311036:web:0038f07f73b75379e3a539"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

async function GetEmployees() {
    const empsquery = query(collection(db, 'employees'));
    const snapshot = await getDocs(empsquery);
    let emps = [];
    snapshot.forEach((doc) => {
        const raw = {
            id: doc.id,
            data: doc.data()
        };
        emps.push(raw);
    });
    return emps;
}

async function GetRecords() {
    const empsquery = query(collection(db, 'records'));
    const snapshot = await getDocs(empsquery);
    let emps = [];
    snapshot.forEach((doc) => {
        const raw = {
            id: doc.id,
            data: doc.data()
        };
        emps.push(raw);
    });
    return emps;
}

function ListeningRecordCollection(callback = () => { }) {
    const unsubscribe = onSnapshot(collection(db, "records"), (snapshot) => {
        snapshot.docChanges().forEach((change) => {
            if (change.type === "added") {
                callback(change.doc.data());
            }
        });
    });
}

export { GetEmployees, ListeningRecordCollection };