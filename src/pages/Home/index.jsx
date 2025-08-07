import MyImage from "../../../public/assets/images/hazem.png";
import MenuButton from "../../components/MenuButton";
import { useMenuStore } from "../../store/useMenuStore";
import { PATHS } from "../../constant/paths";
import Button from "../../components/Button";

const Home = () => {
  const { isMenuOpen } = useMenuStore();
  return (
    <section className="style__section fade-in" id="home">
      <MenuButton />
      {!isMenuOpen && (
        <div className="flex flex-col-reverse lg:flex-row lg:justify-around lg:items-center w-full lg:gap-0 gap-14 lg:pr-[4rem]">
          <div className="flex flex-col items-center justify-between text-center gap-4">
            <p className="text-lg font-semibold leading-7 m-0">👋 Hello, I'm</p>
            <h1 name="nameH1" className="text-4xl lg:text-5xl font-bold leading-tight tracking-wide m-0" >
              Hazem Badran
            </h1>
            <h2 className="text-sm lg:text-base font-normal leading-6 text-gray-600 m-0">
              React.js & React Native Specialist | Product-minded Developer.
            </h2>
            <Button id="btnAboutMe" stylee="btn__secondary" name="nameAbout" navigateTo={PATHS.ABOUT.ROOT}>
              More About Me
            </Button>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex bg-[#E8F9FF] shadow-lg rounded-full p-2">
              <img
                src={MyImage}
                alt="profile-img"
                className="w-48 h-48 rounded-full object-cover select-none"
                loading="eager"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
  
export default Home;