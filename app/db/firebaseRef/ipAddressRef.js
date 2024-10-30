import {db} from "../../config/firebase";
import {collection, doc} from "firebase/firestore";
import {IP_ADDRESS} from "../../common/constants";

export const ipAddressColRef = () => {
    return collection(db, IP_ADDRESS)
}

export const ipAddressDocRef = (companyCode) => {
    if (!companyCode)
        return null
    return doc(db, IP_ADDRESS, companyCode)
}