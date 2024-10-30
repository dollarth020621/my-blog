// File models/UserFormModel.ts

interface UserForm {
    id: string;
    companyName: string;
    companyCode: any;
    createdAt: string;
    updatedAt: string;
    formName: string;
    isAnswer: boolean;
    expiration: [string, string];
    uid: string;
    email: string;
    fullName: string;
    language: string;
    password: string;
    usePass: string
}

class UserFormModel {
    id: string;
    companyName: string;
    companyCode: any;
    createdAt: string;
    updatedAt: string;
    formName: string;
    isAnswer: boolean;
    expiration?: [string, string];
    uid: string;
    email: string;
    fullName: string;
    language: string;
    password: string;
    usePass: string;

    constructor(
        id: string,
        companyName: string,
        companyCode: any,
        createdAt: string,
        updatedAt: string,
        formName: string,
        isAnswer: boolean,
        expiration: [string, string],
        uid: string,
        email: string,
        fullName: string,
        language: string,
        password: string,
        usePass: string
    ) {
        this.id = id;
        this.companyCode = companyCode;
        this.isAnswer = isAnswer;
        this.updatedAt = updatedAt;
        this.companyName = companyName;
        this.createdAt = createdAt;
        this.uid = uid;
        this.formName = formName;
        this.expiration = expiration;
        this.email = email;
        this.fullName = fullName;
        this.language = language;
        this.password = password;
        this.usePass = usePass
    }

    toFirestore(): UserForm {
        return {
            id: this.id,
            companyName: this.companyName,
            companyCode: this.companyCode,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            formName: this.formName,
            isAnswer: this.isAnswer,
            expiration: this.expiration,
            uid: this.uid,
            email: this.email,
            fullName: this.fullName,
            language: this.language,
            password: this.password,
            usePass: this.usePass
        };
    }
}


export default UserFormModel