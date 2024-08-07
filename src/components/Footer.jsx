import { mainNavItems, socialLinks } from "./utils/data";
import {  useLocation,NavLink} from "react-router-dom";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  const userId =false
  const pathname = useLocation();
  const linkPreFix = "/customer_service";
  const socialIcons= [
    <AiFillInstagram key={1} />,
    <AiOutlineTwitter key={2} />,
    <img
      key={3}
      className="footer-logo"
      src="/tiktok.svg"
      alt="tiktok"
      height="18"
      width="16"
    />,
    <AiFillFacebook key={4} />,
    <AiFillYoutube key={5} />,
  ];

  const adminFooter = userId && pathname.includes("/admin");
  return adminFooter ? null : (
    <section className="w-full min-h-[70vh] bg-text-color text-background-color p-10 ">
      <footer className="flex flex-col justify-between items-center w-full h-full gap-10 ">
        <div className="footer-links w-full flex flex-col-reverse md:flex-row justify-between items-start gap-10 ">
          <div className="about-text w-full md:max-w-[50%] flex flex-col gap-3 ">
            <h2 className="text-[16px] ">About Us</h2>
            <p className="text-[12px]">
              Welcome to MJ Hostels, your premier app for booking the best hostels around the world. Our mission is to simplify the process of finding and reserving hostel accommodations, making it effortless and enjoyable for travelers. Whether you&apos;re a solo adventurer, a budget traveler, or someone looking to connect with like-minded people, MJ Hostels offers a diverse range of options to suit every need and preference
            </p>
            <p className="text-[12px]">
              At MJ Hostels, we understand that the right accommodation can make or break your travel experience. That&apos;s why we&apos;re ave curated a wide selection of hostels, each carefully chosen for its quality, comfort, and unique charm. Our user-friendly app provides detailed listings, complete with photos, amenities, and verified reviews from fellow travelers, ensuring you can make an informed decision with confidence..
            </p>
            <p className="text-[12px]">
              We pride ourselves on creating a seamless booking experience. From intuitive search features to secure payment options, MJ Hostels is designed with your convenience in mind. Our goal is to connect you with unique and affordable accommodations that not only meet your needs but also enhance your travel adventures, making every trip memorable and worry-free.
            </p>

            <p className="text-[12px]">
              Join the MJ Hostels community today and embark on a journey to discover the world&apos;s most comfortable and budget-friendly hostel stays. With MJ Hostels, you have a trusted partner in finding the perfect place to stay, no matter where your travels take you. Happy Booking!
            </p>
            <div className="social-links flex items-center gap-5">
              <img
                className="footer-logo"
                src="/logo.svg"
                alt="logo"
                height="20"
                width="28"
              />

              {socialLinks.map((social, i) => (
                <NavLink target="_blank" className="" key={i} to={social.path}>
                  {socialIcons[i]}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="flex justify-end items-start  min-w-fit gap-10 ">
            <div>
              <h3 className="text-[16px] mb-3">Links</h3>
              <ul className="flex flex-col gap-3 footer-navlinks">
                {mainNavItems.map((link, i) => (
                  <NavLink className="text-[12px] " key={i} to={`${link.path}`}>
                    {link.name}{" "}
                  </NavLink>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[16px] mb-3">Legal</h3>
              <ul className="flex flex-col gap-3 footer-navlinks ">
                <NavLink className="text-[12px] " to={`${linkPreFix}`}>
                  Refund{" "}
                </NavLink>
                <NavLink className="text-[12px] " to={`${linkPreFix}/returns`}>
                  {" "}
                  Returns{" "}
                </NavLink>
              </ul>
            </div>
          </div>
        </div>

        <div className="copy-right flex flex-col-reverse gap-10 md:flex-row justify-between w-full pt-8 border-t-2 border-background-color items-center">
          <span className="text-[12px]">
            © 2024 MJ Hostels. All Rights Reserved.
          </span>
          <span className="flex gap-3 footer-navlinks">
            <NavLink className="text-[12px] " to={`${linkPreFix}:faqs`}>
              FAQs
            </NavLink>
            <NavLink className="text-[12px]" to={`${linkPreFix}/contact_us`}>
              Contact Us
            </NavLink>
            <NavLink className="text-[12px]" to={`${linkPreFix}/privacy`}>
              Privacy Plolicy
            </NavLink>
            <NavLink className="text-[12px]" to={`${linkPreFix}/terms_of_use`}>
              Terms of Use
            </NavLink>
          </span>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
