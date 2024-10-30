import {db} from "../../config/firebase";
import {collection, doc} from "firebase/firestore";
import {INVITES_ANSWER_FORM} from "../../common/constants";

export const inviteAnswerFromColRef = () => {
    return collection(db, INVITES_ANSWER_FORM)
}

export const inviteAnswerFromDocRef = (inviteId) => {
    if (!inviteId)
        return null
    return doc(db, INVITES_ANSWER_FORM, inviteId)
}