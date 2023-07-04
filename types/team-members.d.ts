export interface ITeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  email: string;
  linkedinUrl: string;
}

export interface ILangTeamMembers {
  en: ITeamMember[];
  hr: ITeamMember[];
}
