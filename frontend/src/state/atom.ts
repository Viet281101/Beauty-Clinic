import { atom } from 'jotai';

/**
 * State stores the current page
 * @type {Atom<string>}
 */
export const currentPageAtom = atom<string>("Home1");
export const currentUsernameAtom = atom<string | null>(null);
