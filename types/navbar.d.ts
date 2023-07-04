export interface ISocial {
  name: string;
  href: string;
  icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
}

export interface IMore {
  name: string;
  href: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
}

export interface IProjects {
  name: string;
  description: string;
  href: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
}

export interface ILangProjects {
  en: IProjects[];
  hr: IProjects[];
}

export interface ILangMore {
  en: IMore[];
  hr: IMore[];
}

export interface ILangNavigation {
  en: {
    home: string;
    projects: string;
    more: string;
    news: string;
    contact: string;
    blog: string;
  };
  hr: {
    home: string;
    projects: string;
    more: string;
    news: string;
    contact: string;
    blog: string;
  };
}
