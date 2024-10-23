import facebook from '../assets/images/icon_facebook.svg';
import linkedin from '../assets/images/icon_linkedin.svg';
import youtube from '../assets/images/icon_youtube.svg';
import instagram from '../assets/images/icon_instagram.svg';

export const Footer = () => {
    return (
      <footer className= "flex flex-row justify-between m-12">

        <p className="text-light">©2024 Cookinando</p>

        <div className= "flex flex-row space-x-6">
          <a href = "https://www.facebook.com/"> <img className="h-7 mt-0.5" src={facebook} alt="Logo de Facebook"/></a>
          <a href = "https://www.linkedin.com/"> <img className="h-8" src={linkedin} alt="Logo de Linkedin" /> </a>
          <a href = "https://www.youtube.com/"> <img className="h-5 mt-1.5" src={youtube} alt="Logo de Youtube" /> </a>
          <a href = "https://www.instagram.com/"> <img className="h-7 mt-0.5" src={instagram} alt="Logo de Instagram" /> </a>
        </div>
        
      </footer>
    );
  };
  
