import {collection, doc} from "firebase/firestore";
import {db} from "../../config/firebase";
import {RESULT} from "../../common/constants";


export const resultCollRef = () => {
    return collection(db, RESULT)
}

export const resultDocRef = (resultId) => {
    if (!resultId)
        return null
    return doc(db, RESULT, resultId)
}
