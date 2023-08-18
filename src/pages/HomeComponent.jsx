import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";
import { useEffect, useState } from "react";
import { useContext } from "react";
import ScrollContext from "../context/ScrollContext";
import {
  BiLogoReact,
  BiLogoRedux,
  BiLogoBootstrap,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoNodejs,
  BiLogoMongodb,
} from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { AiFillApi, AiOutlineFundProjectionScreen } from "react-icons/ai";
import { Progress } from "antd";
import { SiExpress, SiMysql, SiNestjs } from "react-icons/si";

const HomeComponent = () => {
  let { scrollTopData } = useContext(ScrollContext);
  const [lineNumber, setLineNumber] = useState({
    num1: 0,
    num2: 0,
    num3: 0,
    num4: 0,
    num5: 0,
    num6: 0,
    num7: 0,
    num8: 0,
    num9: 0,
    num10: 0,
    num11: 0,
  });
  useEffect(() => {
    setTimeout(() => {
      setLineNumber({
        num1: 80,
        num2: 85,
        num3: 90,
        num4: 90,
        num5: 50,
        num6: 70,
        num7: 80,
        num8: 80,
        num9: 40,
        num10: 70,
        num11: 70,
      });
    }, 200);
  }, []);
  return (
    <>
      <div className="h-full w-full" id='home'>
        <div className="flex lg:min-h-[500px] bg-cover bg-no-repeat bg-center w-full bg-[url('https://picsum.photos/id/24/4855/300')]">
          <div className="w-full">
            <div className="w-[80%] m-auto">
              <div className="lg:w-[12%] lg:py-2 sm:py-1 sm:w-[32%] sm:gap-[0.3rem] flex  justify-between md:w-[24%] md:py-2">
                <BsFacebook size={20} />
                <BsTwitter size={20} />
                <BsGithub size={20} />
                <BsLinkedin size={20} />
                <BsInstagram size={20} />
              </div>
            </div>

            <div className="flex items-center w-full h-full">
              <div className="w-[80%] m-auto">
                <p className="font-mono lg:text-2xl sm:text-sm">Hello, I am</p>
                <p className="font-mono lg:text-6xl sm:text-2xl">
                  Darshan Gohil
                </p>
                <p className="font-mono lg:text-2xl sm:text-sm">
                  MERN Stack | Developer{" "}
                </p>
                <div className="flex mt-2">
                  <button className="bg-[#8896e3] lg:h-[40px] lg:w-[90px] text-center lg:p-1 border rounded-3xl border-[#5e72e4] hover:border-white sm:h-[30px] sm:w-[80px] sm:mb-[25px]">
                    Click
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <div className="w-full sticky top-0 z-10">
          <header className="flex w-full h-[100px] bg-[#5e72e4] shadow-lg shadow-[#b1b6d6]">
            <nav className="w-full">
              <div className="w-full justify-center items-center flex h-full">
                <a className="m-2 text-white" href={"#home"}>
                  <span className="text-white sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
                    Home
                  </span>
                </a>
                <span className="text-white sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
                  <a className="m-2" href={"#about"}>
                    About Us
                  </a>
                </span>
                {/* <span className="text-white sm:text-sm md:text-lg lg:text-xl xl:text-2xl  mr-2">
                  <a className="m-2" href={"#contact"}>
                    Contact Us
                  </a>
                </span> */}
                <span className="text-white" id='about'>
                  {scrollTopData < 194 ? (
                    <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                      Darshan Gohil
                      <span className="sm:text-xs md:text-xs lg:text-xs xl:text-xs block">
                        Mern stack | Developer
                      </span>
                    </p>
                  ) : (
                    <p className="sm:text-xl md:text-2xl lg:text-3xl xl:text4-xl xl:font-bold sm:font-bold md:font-bold lg:font-bold">
                      Darshan Gohil
                      <span className="block sm:text-xs md:text-xs lg:text-xs xl:text-xs sm:font-normal md:font-normal lg:font-normal xl:font-normal">
                        Mern stack | Developer
                      </span>
                    </p>
                  )}
                </span>
              </div>
            </nav>
          </header>
        </div>
        <div className="flex flex-wrap w-full min-h-[400px] border-b-2 xl:gap-[40px] lg:gap-[40px] sm:gap-[20px] md:pl-[110px] md:pt-[40px] xl:p-[30px] p-[30px]" >
          <div className="xl:w-[495px] lg:w-[699px] md:w-[562px] sm:w-[462px] xl:border-r-2 p-3">
            <div className="pb-4">
              <p className="text-bold text-2xl">Who I am?</p>
              <span className="block w-[40px] h-[2px] bg-red-600 mt-2"></span>
            </div>
            <p>A web Developer Located in Ahmedabad</p>
            <p className="text-sm text-gray-500">details Description here</p>
          </div>

          <div className="xl:[495px] lg:w-[440px] md:w-[562px] sm:w-[462px] xl:border-r-2 p-3">
            <div className="pb-4">
              <p className="text-bold text-2xl">Personal Info</p>
              <span className="block w-[90px] h-[2px] bg-red-600 mt-2"></span>
            </div>
            <p className="text-blod text-sm">
              Birthdate:<span className=" ml-2 text-gray-500">11/03/1997</span>
            </p>
            <p className="text-blod text-sm">
              Email:
              <span className=" ml-2 text-gray-500">
                ddarshangohil@gmail.com
              </span>
            </p>
            <p className="text-blod text-sm">
              Phone:
              <span className=" ml-2 text-gray-500">(+91) 888-888-8888</span>
            </p>
            <p className="text-blod text-sm">
              Skype:<span className=" ml-2 text-gray-500">Skype Id</span>
            </p>
          </div>
          <div className="xl:w-[440px] lg:w-[430px] md:w-[562px] sm:w-[462px] p-3">
            <div className="pb-4">
              <p className="text-bold text-2xl">My Expertise</p>
              <span className="block w-[30px] h-[2px] bg-red-600 mt-2"></span>
            </div>
            <div className="w-full flex-row">
              <div className="flex">
                <div className="w-[25px]">
                  <CgWebsite size={25} color="#41aedb" />
                </div>
                <div className="ml-3 text-xl">Web Development</div>
              </div>
              <div className="flex">
                <div className="w-[25px]">
                  <AiFillApi size={25} color="#764abc" />
                </div>
                <div className="ml-3 text-xl">API Development</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full min-h-[1000px] p-10">
          <div className="w-[90%]  mx-auto  p-2">
            <p className="text-bold text-2xl xl:ml-[32px] lg:ml-[32px] sm:mb-4">
              <span className="text-[#6250db]">My</span> Resume
            </p>
            <div className="flex flex-wrap w-full min-h-[800px] xl:gap-[40px] lg:gap-[40px] sm:gap-[20px]  xl:p-[30px] p-[30px] sm:p-0 sm:pl-0">
              <div className="xl:w-[376px] lg:w-[500px] md:w-[562px] sm:w-[245px] border border-blue-400 p-3">
                <div className="pb-4">
                  <p className="text-bold text-2xl">Experience</p>
                  <span className="block w-[40px] h-[2px] bg-red-600 mt-2"></span>
                </div>
                <div className="p-2">
                  <p className="text-xl text-[#6250db]">2022 - Present</p>
                  <p className="text-sm font-normal text-gray-700">React Js</p>
                  <p>Description role deatils</p>
                </div>
                <div className="p-2">
                  <p className="text-xl text-[#6250db]">2020 - 2022</p>
                  <p className="text-sm font-normal text-gray-700">
                    Mern Stack
                  </p>
                  <p>Description role deatils</p>
                </div>
              </div>
              <div className="xl:w-[376px] lg:w-[500px] md:w-[562px] sm:w-[245px] border border-blue-400 p-3">
                <div className="pb-4">
                  <p className="text-bold text-2xl">Education</p>
                  <span className="block w-[40px] h-[2px] bg-red-600 mt-2"></span>
                </div>
              </div>
              <div className="flex-row">
                <div className="xl:w-[376px] lg:w-[500px] md:w-[562px] sm:w-[245px] border border-blue-400 p-3">
                  <div className="pb-4">
                    <p className="text-bold text-2xl">Skills</p>
                    <span className="block w-[40px] h-[2px] bg-red-600 mt-2"></span>
                  </div>
                  <div className="pb-4">
                    <div className="flex">
                      <BiLogoHtml5 size={30} color="#e34c26" />{" "}
                      <div className="text-gray-600">&</div>{" "}
                      <BiLogoCss3 size={30} color="#2965f1" />
                      &nbsp;(HTML & CSS)
                    </div>
                    <div>
                      <Progress percent={lineNumber.num1} showInfo={false} />
                    </div>
                  </div>
                  <div className="pb-4">
                    <div className="flex">
                      <BiLogoJavascript size={30} color="#f0db4f " />{" "}
                      &nbsp;(Javascript)
                    </div>
                    <div>
                      <Progress percent={lineNumber.num2} showInfo={false} />
                    </div>
                  </div>
                  <div className="pb-4">
                    <div className="flex">
                      <BiLogoReact size={30} color="#7cc5d9 " />
                      &nbsp;(React Js)
                    </div>
                    <div>
                      <Progress percent={lineNumber.num3} showInfo={false} />
                    </div>
                  </div>
                  <div className="pb-4">
                    <div className="flex">
                      <BiLogoRedux size={30} color="#764abc" /> &nbsp;(Redux)
                    </div>
                    <div>
                      <Progress percent={lineNumber.num4} showInfo={false} />
                    </div>
                  </div>
                  <div className="pb-4">
                    <div className="flex">
                      <BiLogoTailwindCss size={30} color="#3490dc " />{" "}
                      &nbsp;(Tailwind CSS)
                    </div>
                    <div>
                      <Progress percent={lineNumber.num5} showInfo={false} />
                    </div>
                  </div>
                  <div className="pb-4">
                    <div className="flex">
                      <BiLogoBootstrap size={30} color="#563d7c" />{" "}
                      &nbsp;(Bootstrap)
                    </div>
                    <div>
                      <Progress percent={lineNumber.num6} showInfo={false} />
                    </div>
                  </div>
                  <div className="pb-4">
                    <div className="flex">
                      <BiLogoNodejs size={30} color="#3c873a" /> &nbsp;(Node Js)
                    </div>
                    <div>
                      <Progress percent={lineNumber.num7} showInfo={false} />
                    </div>
                  </div>
                  <div className="pb-4">
                    <div className="flex">
                      <SiExpress size={30} /> &nbsp;(Express Js)
                    </div>
                    <div>
                      <Progress percent={lineNumber.num8} showInfo={false} />
                    </div>
                  </div>
                  <div className="pb-4">
                    <div className="flex">
                      <SiNestjs size={30} color="#e0234e" /> &nbsp;(NestJs)
                    </div>
                    <div>
                      <Progress percent={lineNumber.num9} showInfo={false} />
                    </div>
                  </div>
                  <div className="pb-4">
                    <div className="flex">
                      <SiMysql size={30} /> &nbsp;(MySQL)
                    </div>
                    <div>
                      <Progress percent={lineNumber.num10} showInfo={false} />
                    </div>
                  </div>
                  <div className="pb-4">
                    <div className="flex">
                      <BiLogoMongodb size={30} color="#4DB33D" />{" "}
                      &nbsp;(Mongodb)
                    </div>
                    <div>
                      <Progress percent={lineNumber.num11} showInfo={false} />
                    </div>
                  </div>
                </div>
                <div className="xl:w-[376px] lg:w-[500px] md:w-[562px] sm:w-[245px] border border-blue-400 p-4 mt-5">
                  <div className="pb-4">
                    <p className="text-bold text-2xl">Languages</p>
                    <span className="block w-[40px] h-[2px] bg-red-600 mt-2"></span>
                  </div>
                  <div className="pb-4">
                    <span className="flex">English</span>
                    <span>
                      <Progress percent={80} showInfo={false} />
                    </span>
                  </div>
                  <div className="pb-4">
                    <span className="flex">Hindi</span>
                    <span>
                      <Progress percent={80} showInfo={false} />
                    </span>
                  </div>
                  <div className="pb-4">
                    <span className="flex">Gujarati</span>
                    <span>
                      <Progress percent={90} showInfo={false} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b-2"></div>
        <div className="flex w-full min-h-[200px] m-auto justify-center items-center shadow-lg shadow-[#b1b6d6] mb-10 ">
          <div className="flex">
            <AiOutlineFundProjectionScreen
              size={50}
              className="mr-2"
              color="#6250db"
            />{" "}
            <div className="border-r-2 border-[#5e72e4]"></div>
            <div className="flex-row">
              <div className="ml-2 text-4xl text-[#6250db]">15</div>
              <div className="ml-2 text-[#747474]">Project Finished</div>
            </div>
          </div>
        </div>
        {/* <div className="border-b-2"></div>
        <div className="flex w-full min-h-[500px] m-auto justify-center items-center" id='contact'>
          <div className="xl:w-[600px] ">
            <div className="pb-4">
              <p className="text-bold text-2xl text-[#6250db]">Contact</p>
              <span className="block w-[40px] h-[2px] bg-red-600 mt-2"></span>
            </div>

            <form className="p-6 xl:w-[600px] lg:w-[500px] md:w-[562px] sm:w-[245px] flex shadow-lg shadow-[#b1b6d6] justify-center items-center min-h-[400px]">
              <div className="flex flex-col">
                <div className="flex flex-col xl:pb-4 md:pb-2 sm:px-10 xl:px-2 md:px-0">
                  <label className="xl:px-2">
                    Email<p className="inline-block text-red-600">*</p>
                  </label>
                  <input
                    type="email"
                    className="border border-blue-400 rounded-sm p-2 hover:border-blue-900 hover:border-2"
                    placeholder="Email*"
                    name="email"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="sm:pl-[40px] xl:pl-[10px] md:pl-[0px]">
                    Message<p className="inline-block text-red-600">*</p>
                  </div>
                  <div className="flex flex-col sm:pl-[40px] md:pl-[0px] xl:pl-[10px]">
                    <textarea
                      className="border border-blue-400 rounded-sm p-2 hover:border-blue-900 hover:border-2 xl:w-[216px] xl:h-[41px] sm:w-[203px] sm:h-[50px]"
                      placeholder="Message*"
                      name="email"
                    />
                    <br />
                    <div className="pt-4">
                      <button className="xl:w-[222px] lg:w-[222px] md:w-[206px] sm:w-[206px] h-[40px] rounded-md bg-blue-500 text-white hover:bg-blue-900">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default HomeComponent;
