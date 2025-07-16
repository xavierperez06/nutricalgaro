import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-primary-color-700 flex flex-col text-white">
      <div className="flex flex-wrap justify-between gap-5 px-6 py-10 max-md:flex-col sm:px-16">
        <div className="flex flex-col items-center justify-center gap-6">
          <Image
            src={"/assets/images/LogoFooter.png"}
            alt="Nutricalgaro Logo"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>

        <div className="flex w-full flex-1 flex-wrap gap-20 md:justify-end">
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
