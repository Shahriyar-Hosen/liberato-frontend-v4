/* eslint-disable prettier/prettier */
/* eslint-disable tailwindcss/no-custom-classname */

export function Header({ heading }: { heading: string }) {
  return (
    <>
      <h2>
        Next.js 13 <small>(app directory)</small> - i18next
        <hr />
      </h2>
      <h1>{heading}</h1>
      <a className="github" href="//github.com/i18next/i18next">
        <i className="typcn typcn-social-github-circular" />
      </a>
    </>
  );
}
