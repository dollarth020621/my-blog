import {collection, deleteDoc, doc} from "firebase/firestore";
import {db} from "../../config/firebase";
import {GROUPS} from "../../common/constants";

export const groupColRef = () => {
    return collection(db, GROUPS)
}
export const groupsDocRef = (groupId) => {
    if (!groupId)
        return null
    return doc(db, GROUPS, groupId)
}

export const groupMemberCollRef = (groupId) => {
    if (!groupId)
        return null
    return collection(db, GROUPS, groupId, 'members')
}

export const groupMemberDocRef = (groupId, memberId) => {
    if (!groupId || !memberId)
        return null
    return collection(db, GROUPS, groupId, 'members', memberId)
}

export const groupDeleteRef = (groupId) => {
    return deleteDoc(groupsDocRef(groupId));
}
export const groupMembersDeleteRef = (groupId, memberId) => {
    return deleteDoc(groupMemberDocRefs(groupId, memberId));
}

export const groupMemberDocRefs = (groupId, memberId) => {
    if (!memberId && !groupId) return null;
    let path = GROUPS + "/" + groupId + "/members/" + memberId;
    return doc(db, path);
}
