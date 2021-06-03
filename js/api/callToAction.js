import db from '../firebase/firebase';

export const createContact = async (data) => {
  try {
    const res = await db.collection('contacts').add(data)
    return res;
  } catch (error) {
    return console.log({error});
  }
};
