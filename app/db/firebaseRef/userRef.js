import {db} from "../../config/firebase";
import {collection, doc, updateDoc} from "firebase/firestore";
import {USER} from "../../common/constants";

export const userColRef = () => {
    return collection(db, USER)
}

export const userDocRef = (userId) => {
    if (!userId)
        return null
    return doc(db, USER, userId)
}

export const userDeleteRef = (id) => {
    return updateDoc(userDocRef(id), {isDeleted: true});
}

export const userDraftAnswerDocRef = (userId, formId) => {
    if (!userId && !formId) return null;
    let path = USER + "/" + userId + "/draft-answer/" + formId;
    return doc(db, path);
}

export const userFormDocRef = (userId, formId) => {
    if (!formId || !userId)
        return null
    return doc(db, USER, userId, 'forms', formId)
}

export const userFormCollRef = (userId) => {
    if (!userId)
        return null
    return collection(db, USER, userId, 'forms')
}

export const userPasswordCollRef = (userId) => {
    if (!userId)
        return null
    return collection(db, USER, userId, 'passwordHistory')
}

export const userPasswordDocRef = (userId, passwordId) => {
    if (!passwordId || !userId)
        return null
    return doc(db, USER, userId, 'passwordHistory', passwordId)
}

export const userCompaniesCollRef = (userId) => {
    if (!userId)
        return null
    return collection(db, USER, userId, 'companies')
}


export const userCompaniesDocRef = (userId, companiesId) => {
    if (!companiesId || !userId)
        return null
    return doc(db, USER, userId, 'companies', companiesId)
}

