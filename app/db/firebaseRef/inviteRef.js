import {db} from "../../config/firebase";
import {collection, doc} from "firebase/firestore";
import {INVITES} from "../../common/constants";

export const inviteColRef = () => {
    return collection(db, INVITES)
}

export const inviteDocRef = (inviteId) => {
    if (!inviteId)
        return null
    return doc(db, INVITES, inviteId)
}