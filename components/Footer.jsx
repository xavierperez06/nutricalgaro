import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-col text-white bg-primary-color-700">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6 sm:items-center">
          <Image
            src={"/assets/images/LogoFooter.png"}
            alt="Nutricalgaro Logo"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        <div className="flex-1 w-full flex md:justify-end flex-wrap gap-20">
          {footerLinks.map((link) => (
            <div key={link.title} className="flex flex-col gap-6">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link key={item.title} href={item.url}>
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
