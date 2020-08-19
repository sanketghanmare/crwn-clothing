import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyBAAjWWle3uXGu3kfO_Q4Ug0_diFqmldXM",
        authDomain: "crwn-db-f8c6b.firebaseapp.com",
        databaseURL: "https://crwn-db-f8c6b.firebaseio.com",
        projectId: "crwn-db-f8c6b",
        storageBucket: "crwn-db-f8c6b.appspot.com",
        messagingSenderId: "156176591661",
        appId: "1:156176591661:web:1d858a0c6dd5eedaeec1a4",
        measurementId: "G-1Z91WT523B"

};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
    const collectionRef = firestore.collection('users')
    const snapShot = await userRef.get()
    const collectionSnapShot = await collectionRef.get();
    console.log({collection: collectionSnapShot.docs.map(doc => doc.data())});

  if (!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try {
          await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
          })
      } catch (err) {
          console.log('Error creating user', err.message);
      }
  }
  return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
}

firebase.initializeApp(config)
export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const {title, items} = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
        console.log(transformedCollection)
    })

    return transformedCollection.reduce((accumalator, collection) => {
        accumalator[collection.title.toLowerCase()] = collection;
        return accumalator
    }, {})
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;











