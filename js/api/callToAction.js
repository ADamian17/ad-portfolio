import db from '../firebase/firebase';

export const createContact = async (data) => {
  try {
    const res = await db.collection('contacts').add(data)
    console.log({res});
  } catch (error) {
    return console.log({error});
  }
};
