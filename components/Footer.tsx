import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
        <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
          <div className="flex flex-col justify-start items-start gap-6">
            <Image
              src="/logo.svg"
              alt="Car rental"
              width={118}
              height={18}
              className="object-contain"
            />
            <p className="text-base text-gray-700">
              Car rental 2023 <br />
              All rights reserved &copy;.
            </p>
          </div>
          <div className="footer__links">
            {footerLinks.map((item) => (
              <div className="footer__link" key={item.title}>
                <h3 className="font-bold">{item.title}</h3>
                {item.links.map((link) => (
                  <Link
                    href={link.url}
                    key={link.title}
                    className="text-gray-500 hover:text-blue-500"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
          <p>@2023 Car Rental. All rights reserved</p>
          <div className="footer__copyrights-link">
            <Link href="/" className="text-gray-500 hover:text-blue-500">
              Privacy Policy
            </Link>
            <Link href="/" className="text-gray-500 hover:text-blue-500">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
