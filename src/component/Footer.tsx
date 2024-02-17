import sogang from "../assets/sogang_logo.png";
import sogangPhoto from "../assets/sogangphoto_logo.png";

const Footer = () => {
  return (
    <div className="hidden h-fit flex-wrap items-center space-x-4 p-4 xl:flex">
      <div
        className="h-[50px] w-[100px] bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${sogang}")` }}
      ></div>
      <div
        className="h-[15px] w-[100px] bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${sogangPhoto}")` }}
      ></div>
      <div className="pretendard flex-grow text-right text-xs font-light leading-normal">
        <p>
          @sogangphoto
          <br />
          Designed by KoEun | Developed by HyeonSeok, Koeun
          <br />
          ©SogangPhoto. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
