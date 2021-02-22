import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDGQwrqa3_ik1WykfzvVGBkXwkKxwhM0Xk',
  authDomain: 'planner-7aa54.firebaseapp.com',
  projectId: 'planner-7aa54',
  storageBucket: 'planner-7aa54.appspot.com',
  messagingSenderId: '205336116197',
  appId: '1:205336116197:web:1ec3f8fcf73d474ee2cd0c',
};

export default firebase.initializeApp(firebaseConfig);
