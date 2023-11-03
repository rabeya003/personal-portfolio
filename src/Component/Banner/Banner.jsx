import { MdSimCardDownload } from "react-icons/md";
const Banner = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <img
          src="https://i.ibb.co/QCrdK07/p-3-removebg-preview.png"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="lg:mr-32">
          <h1 className="text-5xl font-bold">Hello,I&apos;m Rabeya !</h1>
          <p className="py-6">
            A passionate frontend developer. With a creative flair and a love
            for crafting exceptional <br></br>user experiences, I specialize in
            building visually stunning and responsive websites.<br></br>{" "}
            Let&apos;s turn your web ideas into reality!
          </p>
          <button className="btn btn-primary flex">
            Download CV{" "}
            <span>
              <MdSimCardDownload className="text-2xl"></MdSimCardDownload>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
