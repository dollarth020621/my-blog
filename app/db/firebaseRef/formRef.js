import {db} from "../../config/firebase";
import {collection, doc} from "firebase/firestore";
import {FORM} from "../../common/constants";

export const formColRef = () => {
    return collection(db, FORM)
}

export const formDocRef = (formId) => {
    if (!formId)
        return null
    return doc(db, FORM, formId)
}

export const formAnswerDocRef = (formId, answerId) => {
    if (!formId || !answerId)
    return null
    return doc(db, FORM, formId, 'answers', answerId)
}

export const formAnswerCollRef = (formId) => {
    if (!formId)
        return null
    return collection(db, FORM, formId, 'answers')
}

export const useFormAnswerDocRef = (formId, answerId) => {
    if (!answerId && !formId) return null;
    let path = FORM + "/" + formId + "/answers/" + answerId;
    return doc(db, path);
}
