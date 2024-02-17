import sogang from "../assets/sogang_logo.png";
import sogangPhoto from "../assets/sogangphoto_logo.png";

const Footer = () => {
  return (
    <div className="flex h-fit flex-col flex-wrap items-center space-x-4 p-4 xl:flex-row">
      <div className="flex items-center space-x-8">
        <div
          className="h-[50px] w-[100px] bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${sogang}")` }}
        ></div>
        <div
          className="h-[15px] w-[60px] bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${sogangPhoto}")` }}
        ></div>
      </div>
      <div className="pretendard flex-grow text-center text-xs font-light leading-normal xl:text-right">
        <p>
          <a href="https://instagram.com/sogangphoto" target={"_blank"}>
            @sogangphoto
          </a>
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
