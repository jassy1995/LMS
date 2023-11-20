import { FiArrowRight } from "react-icons/fi";
import { GiSoundWaves } from "react-icons/gi"
import { BiPlay } from "react-icons/bi"
import { BsArrowRightShort } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import { weekly_courses } from "../lib/util"

export default function Home() {
    const responsiveness = `px-6 xs:px-14 sm:px-20 md:px-32`;
    return (
        <div className='flex flex-col px-0 sm:px-0 md:px-12 pt-0 md:pt-12 h-screen overflow-y-auto relative'>
            <div className="hidden md:flex flex-col p-4 bg-[#FDBE00] w-32 h-27 font-bold absolute top-[228px] right-[390px] z-50 hover:cursor-pointer">
                <FiArrowRight className="text-md" />
                <span className="mt-4">Join <br /> The class</span>
            </div>
            <div className={`bg-[#1A1A1A] md:h-[735px] w-full md:w-[86%] z-10 pt-6 pb-8 lg:pb-0 ${responsiveness}`}>
                <nav className="flex justify-between items-center w-full">
                    <p className="text-[#1A1A1A] bg-white font-black rounded-full flex justify-center items-center w-7 h-7">c</p>
                    <ul className="uppercase hidden sm:flex items-center space-x-10 md:space-x-20 text-[#767676] lg:mr-[64px]">
                        <li className="hover:text-white cursor-pointer">explore</li>
                        <li className="hover:text-white cursor-pointer">mentors</li>
                        <li className="hover:text-white cursor-pointer">blog</li>
                        <li className="hover:text-white cursor-pointer">community</li>
                    </ul>
                    <MdMenu className="sm:hidden block text-white w-7 h-7" />
                </nav>
                <div className="flex space-x-3 items-center mt-10">
                    <span className="w-[2px] text-slate-400">|</span>
                    <span className='uppercase text-white'>feature class</span>
                </div>
                <div className="flex flex-col xxmd:flex-row justify-between space-y-10 xxmd:space-y-0 space-x-0 xxmd:space-x-3">
                    <h1 className="text-6xl text-white font-bold max-w-lg mt-4">The role of User Interface Designer</h1>
                    <div className="flex md:hidden flex-row xxmd:flex-col space-x-5 xxmd:space-x-0 items-center p-4 bg-[#FDBE00] w-64 xxmd:w-32 h-27 font-bold z-50 hover:cursor-pointer xxmd:rounded-none rounded-lg">
                        <span><FiArrowRight className="text-md font-bold xxmd:font-normal" /></span>

                        <span className="mt-4 hidden xxmd:block">Join <br /> The class</span>
                        <span className="block xxmd:hidden font-normal text-[18px] leading-[27px] capitalize" style={{ fontWeight: 500 }}>Join The class</span>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row space-y-[50px] space-x-0 sm:space-y-0 xxmd:space-y-0  sm:space-x-[50px]  xxmd:space-x-[150px] mt-[50px] xxmd:mt-[40px]">
                    <div className="w-full sm:w-[306px] h-[250px] bg-gradient-to-r from-[#868dad] to-[#b4b9d3] flex justify-center items-end xxmd:rounded-none rounded-lg">
                        <img className="w-[236px] z-10 object-cover" src="https://clipart-library.com/images_k/woman-transparent-png/woman-transparent-png-5.png" alt="" />
                    </div>
                    <div className="flex flex-col space-y-5 sm:space-y-0 justify-between flex-1 xxmd:rounded-none rounded-lg pb-6 sm:pb-0">
                        <div className="flex flex-col w-full">
                            <div className="flex space-x-3 items-center">
                                <span className="w-[2px] text-slate-400">|</span>
                                <span className='uppercase text-white'>about</span>
                            </div>
                            <p className="w-auto sm:w-[300px] pl-3 text-[#767676]">We believe in the power of learning to transform lives. We are empowering individuals to thrive in the digital age</p>
                        </div>
                        <div className="bg-[#242424] w-full flex items-center space-x-5 xxmd:rounded-none rounded-lg">
                            <div className="bg-gradient-to-r from-[#868dad] to-[#b4b9d3] w-[140px] h-[117px] flex justify-center items-end xxmd:rounded-none rounded-tl-lg rounded-bl-lg">
                                <img className="w-[110px] object-cover" src="https://clipart-library.com/images_k/woman-transparent-png/woman-transparent-png-5.png" alt="" />
                            </div>
                            <div className="flex items-center">
                                <GiSoundWaves className="text-[#AA821D] w-10  h-20" />
                                <GiSoundWaves className="text-[#3D3D3D] w-10  h-20" />
                                <GiSoundWaves className="text-[#3D3D3D] w-10  h-20" />
                                <GiSoundWaves className="text-[#3D3D3D] w-10  h-20 hidden xs:block" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex w-[100%]">
                    <div className="w-[306px] leading-5 capitalize pt-2 bg-green-5004">
                        {/* <div className="flex-1 leading-5 capitalize pt-2 bg-green-500"> */}
                        <h1 className="m-0 text-white">Karen William</h1>
                        <small className="text-[#717171]">senior designer</small>
                    </div>
                    {/* <div className="w-[150px] relative bg-red-80 flex-col justify-en items-e"> */}
                    <div className="w-[150px] relative bg-red-80 flex-col bg-blue-4003">
                        <div className="w-[150px] h-[117px] bg-gradient-to-r from-[#868dad] to-[#b4b9d3] flex justify-center items-end">
                            <img className="w-[110px] object-cover" src="https://clipart-library.com/images_k/woman-transparent-png/woman-transparent-png-5.png" alt="" />
                        </div>
                        <div className="flex flex-col pt-2">
                            <h1 className="text-white leading-5 capitalize">watch trailer</h1>
                            <small className="text-[#717171]">2 mins</small>
                        </div>
                        <span className="bg-white absolute right-0 bottom-[47px] inline-flex justify-between items-center z-20">
                            <BiPlay className="w-9 h-8" />
                        </span>
                    </div>
                    <div className="flex flex-col capitalize pt-2 bg-red-8009 lg:pl-8 flex-1">
                        <h1 className="text-white leading-5">Testimonial</h1>
                        <small className="text-[#717171]">tom hope</small>
                    </div>
                </div>
                <div className="block md:hidden mt-12">
                    <h1 className="text-white font-bold text-3xl md:text-4xl pb-2">Popular Courses this week</h1>
                    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
                        {
                            weekly_courses?.map((r, i) => (
                                <div key={i} className="flex flex-col space-y-3 shadow-lg bg-[#242424] rounded-md border border-slate-700 transition ease-in-out delay-150 hover:-translate-y-1 duration-700 cursor-pointer">
                                    <img src={r.image} alt="" className="w-full h-32 object-cover rounded-t" />
                                    <div className="flex flex-col space-y-1 p-2">
                                        <small className="text-[#8a8888] text-[10px] font-normal">{r.caption}</small>
                                        <h1 className="text-[16px] text-white font-normal leading-5">{r.title}</h1>
                                        <p className="text-[12px] text-[#8a8888] font-normal leading-5">{r.description}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
            <div className="bg-[#FFFFFF]  text-white absolute top-0 right-12 z-20 py-4 w-[25%] h-[92%] font-bold text-xl leading-6 hidden md:block">
                <h1 className="text-[#010101] px-10">Popular Courses this week</h1>
                <div className="flex px-10 mt-5">
                    <div className="w-1/2 flex flex-col">
                        <div className="flex flex-col mb-6">
                            <img src="../../course-img-5.jpeg" alt="" className="w-full h-[80px] object-cover" />
                            <div className="flex flex-col space-y-1">
                                <small className="text-[#8a8888] text-[10px] font-normal">clock design</small>
                                <h1 className="text-[12px] text-black font-bold leading-4">Create an attractive product photograph</h1>
                                <p className="text-[12px] text-[#8a8888] font-normal leading-4">Transform your product photography</p>
                            </div>
                        </div>
                        <div className="flex flex-col pr-10 mb-6">
                            <img src="../../cousre-img-2.jpeg" alt="" className="w-full h-[80px] object-cover" />
                            <div className="flex flex-col space-y-1">
                                <small className="text-[#8a8888] text-[10px] font-normal">phone design</small>
                                <h1 className="text-[12px] text-black font-bold leading-4">User Interface design</h1>
                                <p className="text-[12px] text-[#8a8888] font-normal leading-4">Transform your product photography</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 pt-10">
                        <div className="flex flex-col pl-10 mb-6">
                            <img src="../../course-img-4.jpeg" alt="" className="w-full h-[80px] object-cover" />
                            <div className="flex flex-col space-y-1">
                                <small className="text-[#8a8888] text-[10px] font-normal">coffee design</small>
                                <h1 className="text-[12px] text-black font-bold leading-4">Create beautiful loto art</h1>
                                <p className="text-[12px] text-[#8a8888] font-normal leading-4">Transform your product photography</p>
                            </div>
                        </div>
                        <div className="flex flex-col mb-6">
                            <img src="../../course-img-3.avif" alt="" className="w-full h-[80px] object-cover" />
                            <div className="flex flex-col space-y-1">
                                <small className="text-[#8a8888] text-[10px] font-normal">clock design</small>
                                <h1 className="text-[12px] text-black font-bold leading-4">Productive class: How to manage products</h1>
                                <p className="text-[12px] text-[#8a8888] font-normal leading-4">Transform your product photography</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#F5F6F8] py-4 pb-6 px-10">
                    <h1 className="text-[#010101] mb-3">Discover Our Courses</h1>
                    <div className="flex flex-col space-y-2">
                        <div className="flex justify-between items-center border-b py-2 w-full bg-red-509 space-x-8">
                            <div className="flex items-center space-x-8">
                                <span className="font-normal text-sm text-[#8a8888]">01</span>
                                <div className="flex flex-col">
                                    <h1 className="font-bold text-sm text-black">Graphic design</h1>
                                    <small className="font-normal text-sm text-[#8a8888]">new design</small>
                                </div>
                            </div>
                            <BsArrowRightShort className="text-black" />
                        </div>
                        <div className="flex justify-between items-center py-3 w-full bg-red-509 space-x-8">
                            <div className="flex items-center space-x-8">
                                <span className="font-normal text-sm text-[#8a8888]">02</span>
                                <div className="flex flex-col">
                                    <h1 className="font-bold text-sm text-black">Graphic design</h1>
                                    <small className="font-normal text-sm text-[#8a8888]">new design</small>
                                </div>
                            </div>
                            <BsArrowRightShort className="text-black" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
