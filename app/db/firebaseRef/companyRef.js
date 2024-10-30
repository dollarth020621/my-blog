import {db} from "../../config/firebase";
import {collection, doc} from "firebase/firestore";
import {COMPANIES} from "../../common/constants";

export const companyColRef = () => {
    return collection(db, COMPANIES)
}

export const companyDocRef = (companyCode) => {
    if (!companyCode)
        return null
    return doc(db, COMPANIES, companyCode)
}