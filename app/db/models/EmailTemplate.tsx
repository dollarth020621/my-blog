// File models/EmailTemplate.ts

interface TemplateData {
    link: string;
    memberName: string;
    memberEmail: string;
    formPassword: string;
    memberPassword: string;
    loginLink: string;
    expirationStart: string;
    expirationEnd: string;
    subject: string;
    formId: string;
}

interface Template {
    name: string;
    data: TemplateData;
}

interface EmailTemplate {
    to: string;
    template: Template;
}

class EmailTemplateModel {
    to: string;
    template: Template;

    constructor(
        memberEmail: string,
        templateName: string,
        link: string,
        loginLink: string,
        memberName: string,
        memberPassword: string,
        formPassword: string,
        startDate: string,
        endDate: string,
        subject: string,
        formId: string
    ) {
        this.to = memberEmail;
        this.template = {
            name: templateName,
            data: {
                link,
                memberName,
                memberEmail,
                formPassword,
                memberPassword,
                loginLink,
                expirationStart: startDate || '',
                expirationEnd: endDate || '',
                subject,
                formId
            },
        };
    }

    toFirestore(): EmailTemplate {
        return {
            to: this.to,
            template: {
                name: this.template.name,
                data: {...this.template.data},
            },
        };
    }
}

export default EmailTemplateModel;
