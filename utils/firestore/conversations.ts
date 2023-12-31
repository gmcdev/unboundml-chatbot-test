import { Conversation } from '@/types/chat';
import { User } from '@/types/user';

import { usersCollection } from './collections';

import { doc, getDoc, setDoc } from 'firebase/firestore';

export async function setConversations(
  user: User,
  conversations: Conversation[],
) {
  try {
    const usersRef = doc(usersCollection, user.userProfile.sub || '');
    await setDoc(usersRef, { conversations }, { merge: true });
  } catch (err) {
    console.error(err);
  }
}

export async function getConversations(user: User): Promise<Conversation[]> {
  try {
    const usersRef = doc(usersCollection, user.userProfile.sub || '');
    const userDoc = await getDoc(usersRef);
    return userDoc.data()?.conversations || [];
  } catch (err) {
    console.error(err);
  }
  return [];
}
