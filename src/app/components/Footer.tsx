import React from "react";

const Footer = () => {
  return (
<div className=" inter py-10 px-6 bg-gradient-to-b from-pink-50 to-white md:px-12 lg:px-20">

       <div className="flex w-full items-center  justify-between mb-12 space-x-8  border-b border-gray-200"></div>
    <div className="  flex flex-col md:flex-row justify-between items-start gap-10">

        {/* Logo Section */}
        <div className="flex-shrink-0">
          <img
            src="/Group.png"
            alt="Logo"
            className="-p-8"
          />
        </div>

        {/* Links Section */}
        <div className="flex flex-1 -ml-8 justify-around flex-wrap text-sm">
          <div>
            <h3 className="text-lg font-semibold mb-4">INFOS PRATIQUES</h3>
            <ul className="space-y-2  text-gray-600">
              <li className="hover:text-teal-500 transition-colors">
                À propos
              </li>
              <li className="hover:text-teal-500 transition-colors">
                Livraisons & Reprises
              </li>
              <li className="hover:text-teal-500 transition-colors">
                Mode d&apos;emploi
              </li>
              <li className="hover:text-teal-500 transition-colors">F.A.Q</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">LÉGAL</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-teal-500 transition-colors">
                Mentions légales
              </li>
              <li className="hover:text-teal-500 transition-colors">CGU</li>
              <li className="hover:text-teal-500 transition-colors">CGV</li>
              <li className="hover:text-teal-500 transition-colors">
                Politique de confidentialité
              </li>
            </ul>
          </div>

          <div >
            <h3 className="text-lg font-semibold mb-4">MON COMPTE</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-teal-500 transition-colors">
                Accéder à mon compte
              </li>
              <li className="hover:text-teal-500 transition-colors">
                Ma liste d&apos;envie
              </li>
              <li className="hover:text-teal-500 transition-colors">
                Créer un compte
              </li>
              <li className="hover:text-teal-500 transition-colors">
                Mot de passe oublié
              </li>
            </ul>
          </div>  
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-4">NOUS SUIVRE</h3>
          <div className="flex">
            <a
              href="#"
              className="p-2  transition-colors"
            >
              <img className="hover:bg-teal-500" src="/Frame 117.png"/>
            </a>
            <a
              href="#"
              className="p-2  transition-colors"
            >
              <img className="hover:bg-teal-500" src="/Frame 117 (1).png"/>
            </a>
            <a
              href="#"
              className="p-2   transition-colors"
            >
            <img className="hover:bg-teal-500" src="/Frame 117.png"/>
            </a>
          </div>
        </div>
    </div>
</div>
  );
};

export default Footer;
