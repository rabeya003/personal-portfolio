import { MdSimCardDownload } from "react-icons/md";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
const Banner = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div className="relative">
          <img
            src="https://i.ibb.co/QCrdK07/p-3-removebg-preview.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          {/*        <h2 className=" font-semibold text-gray-700 text-3xl">
            Rabeya Boshri
  </h2>*/}
        </div>
        <div className="lg:mr-32">
          <h1 className="text-5xl font-bold">Hello,I&apos;m Rabeya Boshri !</h1>
          <p className="py-6">
            A passionate frontend developer. With a creative flair and a love
            for crafting exceptional <br></br>user experiences, I specialize in
            building visually stunning and responsive websites.<br></br>{" "}
            Let&apos;s turn your web ideas into reality!
          </p>
          <div className="flex gap-2">
            <button className="bg-blue-200 shadow-lg shadow-cyan-500/50 w-24  flex justify-center p-2 rounded-md w-auto flex">
              Download CV{" "}
              <span>
                <MdSimCardDownload className="text-2xl"></MdSimCardDownload>
              </span>
            </button>
            <div className=" shadow-lg shadow-cyan-500/50 w-auto  flex justify-center p-2 rounded-lg">
              <a
                className="flex"
                target="_blank"
                href="https://www.linkedin.com/in/rabeya-boshri-mou/"
              >
                <AiFillLinkedin className=" text-2xl"></AiFillLinkedin>
              </a>
            </div>
            <div className=" shadow-lg shadow-cyan-500/50 w-auto  flex justify-center p-2 rounded-lg">
              <a
                className="flex"
                target="_blank"
                href="https://github.com/rabeya003"
              >
                <AiFillGithub className=" text-2xl"></AiFillGithub>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
