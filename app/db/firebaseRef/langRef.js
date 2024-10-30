import {collection, doc} from "firebase/firestore";
import {db} from "../../config/firebase";
import {LANG} from "../../common/constants";

export const langColRef = () => {
    return collection(db, LANG)
}

export const langDocRef = (langId) => {
    if (!langId)
        return null;
    return doc(db, LANG, langId)
}
