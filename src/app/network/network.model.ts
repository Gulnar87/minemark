export interface Root {
    team: Team[];
    advisors: Advisors[]
}

export interface Team {
    name: string;
    profession: string;
    bio: string;
    pic: string;
    alt: string;

}

export interface Advisors {
    name: string;
    profession: string;
    pic: string;
    bio: string;
    linkToPage: string;
    alt: string;
}