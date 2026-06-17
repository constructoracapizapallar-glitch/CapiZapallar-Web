import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import fs from "fs";

// Leer .env.local manualmente para no depender de librerías extra
const envData = fs.readFileSync(".env.local", "utf-8");
const env = {};
envData.split("\n").forEach(line => {
  const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    let val = match[2] || '';
    if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
    env[match[1]] = val;
  }
});

const firebaseConfig = {
  apiKey: env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const usersToSeed = [
  { email: 'maestro@capired.cl', password: 'password123', role: 'maestro', name: 'Maestro Prueba' },
  { email: 'arquitecto@capired.cl', password: 'password123', role: 'profesional', name: 'Arquitecto Prueba' },
  { email: 'ingeniero@capired.cl', password: 'password123', role: 'profesional', name: 'Ingeniero Prueba' },
  { email: 'cliente@capired.cl', password: 'password123', role: 'cliente', name: 'Cliente Prueba' },
  { email: 'ferreteria@capired.cl', password: 'password123', role: 'ferreteria', name: 'Ferreteria Prueba' },
  { email: 'constructora@capired.cl', password: 'password123', role: 'constructora', name: 'Constructora Prueba' },
];

async function seed() {
  console.log("Iniciando inyección por consola...");
  for (const user of usersToSeed) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password);
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        email: user.email,
        role: user.role,
        name: user.name,
        isVerified: false,
        createdAt: new Date()
      });
      console.log(`✅ Creado: ${user.email} (${user.role})`);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        console.log(`⚠️ Ya existe: ${user.email}`);
      } else {
        console.error(`❌ Error con ${user.email}:`, error.message);
      }
    }
  }
  console.log("Proceso finalizado. Cierra este script (Ctrl+C).");
  process.exit(0);
}

seed();
