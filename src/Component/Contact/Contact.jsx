import { AiFillFacebook, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  return (
    <div
      id="contact"
      className="mb-28 scroll-mt-28  sm:mb-40 px-12 max-w-5xl mx-auto mt-20"
    >
      <h1 className="text-4xl font-bold capitalize mb-8 text-center">
        Contact Me
      </h1>
      <div className="flex gap-12 text-center justify-center">
        <div className=" shadow-lg shadow-cyan-500/50 w-24  flex justify-center p-2 rounded-md ">
          <a target="_blank" href="https://www.facebook.com/rboshri.mou/">
            {" "}
            <AiFillFacebook className=""></AiFillFacebook>
            <p>FaceBook</p>
          </a>
        </div>
        <div className=" shadow-lg shadow-cyan-500/50 w-24  flex justify-center p-2 rounded-md ">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/rabeya-boshri-mou/"
          >
            <AiFillLinkedin></AiFillLinkedin>
            <p>Linkedin</p>
          </a>
        </div>
        <div className=" shadow-lg shadow-cyan-500/50 w-24  flex justify-center p-2 rounded-md ">
          <a target="_blank" href="mailto:asheq.mou@gmail.com">
            <AiOutlineMail></AiOutlineMail>
            <p>Email</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
