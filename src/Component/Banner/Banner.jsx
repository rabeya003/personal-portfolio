import { MdSimCardDownload } from "react-icons/md";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
const pdf = "./Cv-of-Rabeya.pdf";
const Banner = () => {
  const downloadPDF = () => {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = pdf;

    iframe.onload = () => {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      const downloadLink = doc.createElement("a");
      downloadLink.href = pdf;
      downloadLink.download = "Cv-of-Rabeya.pdf";
      doc.body.appendChild(downloadLink);
      downloadLink.click();
      doc.body.removeChild(downloadLink);
      iframe.remove();
    };

    document.body.appendChild(iframe);
  };
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <div className="relative">
          <img
            src="https://i.ibb.co/MCvrdRC/32268.jpg"
            className="max-w-sm rounded-lg shadow-2xl w-60"
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
            <button
              className="bg-blue-200 shadow-lg shadow-cyan-500/50 w-24  flex justify-center p-2 rounded-md w-auto flex"
              onClick={downloadPDF}
            >
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
