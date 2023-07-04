import {
  BriefcaseIcon,
  BuildingOfficeIcon,
  ComputerDesktopIcon,
  InformationCircleIcon,
  MapIcon,
  MegaphoneIcon,
  NewspaperIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
import { ILangMore, ILangProjects, ILangNavigation } from 'types/navbar';

export const more: ILangMore = {
  en: [
    { name: 'About', href: '/about', icon: InformationCircleIcon },
    { name: 'Partners', href: '/about#partners', icon: BuildingOfficeIcon },
    { name: 'Press', href: '/about#press', icon: NewspaperIcon },
    { name: 'Team', href: '/about#team', icon: BriefcaseIcon },
  ],
  hr: [
    { name: 'O nama', href: '/about', icon: InformationCircleIcon },
    { name: 'Partneri', href: '/about#partners', icon: BuildingOfficeIcon },
    { name: 'Novinari', href: '/about#press', icon: NewspaperIcon },
    { name: 'Tim', href: '/about#team', icon: BriefcaseIcon },
  ],
};

export const projects: ILangProjects = {
  en: [
    {
      name: 'LiberatoMap',
      description:
        ' LiberatoMap is a complete tool that delivers architectural and spatial accessibility information for people with disabilities.',
      href: 'liberato-map',
      icon: MapIcon,
    },
    {
      name: 'LiberatoTalk',
      description:
        'Education, conferences, and lectures in support of the creation of a society that is more inclusive and prosperous.',
      href: 'liberato-talk',
      icon: MegaphoneIcon,
    },
    {
      name: 'LiberatoTech',
      description:
        'Technical culture and the advancement of technology abilities are the goals of LiberatoTech.',
      href: 'liberato-tech',
      icon: ComputerDesktopIcon,
    },
    {
      name: 'DisCloud',
      description:
        'Interactive panel fully adapted to people with disabilities, powered by the sun.',
      href: '/projects/discloud',
      icon: Squares2X2Icon,
    },
  ],
  hr: [
    {
      name: 'LiberatoMap',
      description:
        'LiberatoMap je sveobuhvatna platforma koja pruža informacije o arhitektonskoj i prostornoj pristupačnosti za osobe s invaliditetom.',
      href: 'liberato-map',
      icon: MapIcon,
    },
    {
      name: 'LiberatoTalk',
      description:
        'Edukacije, konferencije i predavanja u korist razvitka inkluzivnijeg i uspješnijeg društva',
      href: 'liberato-talk',
      icon: MegaphoneIcon,
    },
    {
      name: 'LiberatoTech',
      description:
        'Edukacije usmjerena prema tehničkoj kulturi i razvijanju tehnoloških vještina',
      href: 'liberato-tech',
      icon: ComputerDesktopIcon,
    },
    {
      name: 'DisCloud',
      description:
        'Interaktivni panel u potpunosti prilagođen osobama s invaliditetom, napajan putem sunca.',
      href: 'discloud',
      icon: Squares2X2Icon,
    },
  ],
};

export const navigation: ILangNavigation = {
  en: {
    home: 'Home',
    news: 'News',
    projects: 'Projects',
    blog: 'Blog',
    more: 'More',
    contact: 'Contact',
  },
  hr: {
    home: 'Početna',
    news: 'Novosti',
    projects: 'Projekti',
    blog: 'Blog',
    more: 'Više',
    contact: 'Kontakt',
  },
};
