import { ReactNode } from "react";

export interface SocialLink {
  name: string;
  link: string;
  icon: ReactNode;
}

export function SocialLinks({ links }: { links: SocialLink[] }) {
  return (
    <div className="flex space-x-1 justify-center md:justify-start mt-2 pl-1">
      {links.map((social) => (
        <button
          key={social.name}
          onClick={() => window.open(social.link, "_blank")}
          className="hover:scale-105 transition-transform duration-200 p-2"
          aria-label={`Visit our ${social.name} page`}
        >
          {social.icon}
        </button>
      ))}
    </div>
  );
}
