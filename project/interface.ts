export interface ISubject {
    title: string,
    lesson: number,
    description? : string,
    id: string

}

export interface Teachers {
    id: string,
    name:  {
        firstName: string,
        lastName: string
    }

    dateOfBirth: string,

    emails:
        { 
            email: string,
            primary: boolean
        }[]
    

    phones: 
        {
            phone: string,
            primary: boolean
        }[]
    

    sex: string,

    Subjects: [
        {
            subject: string,
        }
    ]
    description?: string
    
}

export interface Pupils {
    id: string;
    name: {
        firstName: string,
        lastName: string
    }

    dateOfBirth: string;
    sex: string;

    emails: [
    {
        email: string,
        primary: boolean
    }
]

    Phones:[ 
    {   
        phone: string,
        primary: boolean
    } 
]
    description?: string
}

export interface Groups {
    room: number;
    pupil: Pupils[];
    id: number;
}

export interface Records {
        pupilId: string,
        teacherId: string,
        subjectId: string,
        lesson: number,
        mark: number
}

export interface Gradebooks {
    id: string,
    records: Records[]
}


