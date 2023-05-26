const admin = require('firebase-admin');
const fs = require('fs');
const csvParser = require('csv-parser');
const files = require('./fileNames.json')

// Initialize Firebase Admin SDK with your service account key
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

files.forEach((file) => {
    const collectionPath = file;
    const csvFilePath = `./files/${file}.csv`
    
    // Read the CSV file
    fs.createReadStream(csvFilePath)
        .pipe(csvParser())
        .on('data', (data) => {
            db.collection(collectionPath)
                .add(data)
                .then((docRef) => {
                    console.log(`✅ ${file} created with ID: ${docRef.id}`);
                })
                .catch((error) => {
                    console.error(`❌ Error creating ${file}:`, error);
                });
        })
        .on('end', () => {
            console.log(`✅ ${file} Imported successfully!`);
        });
})

