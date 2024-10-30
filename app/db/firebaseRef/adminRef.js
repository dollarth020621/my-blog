import {db} from "../../config/firebase";
import {collection, doc} from "firebase/firestore";
import {ADMIN} from "../../common/constants";

export const adminColRef = () => {
    return collection(db, ADMIN)
}

export const adminDocRef = (adminId) => {
    if (!adminId)
        return null
    return doc(db, ADMIN, adminId)
}