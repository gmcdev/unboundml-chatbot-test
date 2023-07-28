import { Conversation } from '@/types/chat';
import { User } from '@/types/user';

import { conversationsCollection } from './collections';

import { UserProfile } from '@auth0/nextjs-auth0/client';
import { doc, getDoc, getDocs, setDoc } from 'firebase/firestore';

// export async function getConversationsBy(user: User): Promise<Conversation[]> {
//   const userRef = doc(usersCollection, user.sub || '');

//   const userRef = doc(conversationsCollection, user.userProfile.sub || '');
//   await get(userRef, { userProfile: user }, { merge: true });

//   const userDoc = await getDoc(userRef);
//   return userDoc.data() as User;
// }
