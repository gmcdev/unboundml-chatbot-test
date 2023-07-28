import { Prompt } from '@/types/prompt';
import { User } from '@/types/user';

import { usersCollection } from './collections';

import { doc, setDoc } from 'firebase/firestore';

export async function setPrompts(user: User, prompts: Prompt[]) {
  try {
    const usersRef = doc(usersCollection, user.userProfile.sub || '');
    await setDoc(usersRef, { prompts }, { merge: true });
  } catch (err) {
    console.error(err);
  }
}

// export async function getConversationsBy(user: User): Promise<Conversation[]> {
//   const userRef = doc(usersCollection, user.sub || '');

//   const userRef = doc(conversationsCollection, user.userProfile.sub || '');
//   await get(userRef, { userProfile: user }, { merge: true });

//   const userDoc = await getDoc(userRef);
//   return userDoc.data() as User;
// }