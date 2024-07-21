import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import FooterImg from "../../assets/foter.png";

export const Footer = () => {
  return (
    <div className="container pt-[50px]">
      <img src={FooterImg} alt="" className="pb-[25px]" />
      <div className="bg-gray-900 text-white py-6 px-4  rounded-[25px]">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">All or Nothing</h2>
            <p>+94 099 4001</p>
            <p>+94 099 4001</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Biz haqimizda</h2>
            <p>Ish vaqti 11:00 - 23:00</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <a href="mailto:allornothing.uz@gmail.com" className="underline">
                allornothing.uz@gmail.com
              </a>
            </p>
            <p>Address: T.sh Moirobod tuman. Fidokor 10. 4a uy</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FontAwesomeIcon icon={faTelegram} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
