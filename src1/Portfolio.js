// import React from 'react';
// import { Link } from 'react-router-dom';

// const Portfolio = () => {
//     return (
//         <>
//             <div className="my-4 py-4" id='portfolio'>
//                 <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Products</h2>
//                 <div className='flex justify-center'>
//                     <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
//                 </div>

//                 <div className="px-4" data-aos="fade-down" data-aos-delay="600">
//                     <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">                            
//                         <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
//                             <div className="m-2 text-justify text-sm">
//                                 <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Cybersecurity Products</h4>
//                                 <p className="text-md font-medium leading-5 h-auto md:h-48">
//                                     Our Business Management System is a robust and easily scalable system that streamlines business operations, increase efficiency, and ultimately drive growth and profitability for your business.
//                                     With features such as employee management, finance control, and many more modules to effectively manage all aspects of a business.
//                                     All data is stored in the cloud and as such it is easily accessible from all devices and from any location.
//                                 </p>
//                                 <div className="flex justify-center my-4">
//                                     <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
//                                         Schedule Demo
//                                         <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
//                             <div className="m-2 text-justify text-sm">
//                                 <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">IT Products</h4>
//                                 <p className="text-md font-medium leading-5 h-auto md:h-48">
//                                     Our all encompassing School Management Portal is the only solution needed for any institution.
//                                     The School Management Portal (SMP) is a tool that can help educational institutions of all kinds manage their administrative tasks, automate processes, and streamline communication between teachers, students, parents, and administrators. 
//                                     The software can be used to manage all aspects of school operations, including student enrollment, attendance, grades, schedules, and more.
//                                 </p>
//                                 <div className="flex justify-center my-4">
//                                     <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
//                                         Schedule Demo
//                                         <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
//                                     </Link>
//                                 </div>
                                
//                                 {/* <ul className="border-t border-gray-300 py-8 space-y-6">
//                                     <li className="flex items-center space-x-2 px-8">
//                                         <span className="bg-blue-600 rounded-full p-1">
//                                             <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
//                                                 <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
//                                             </svg>
//                                         </span>
//                                         <span className="text-gray-600 capitalize">Free Setup Guidance</span>
//                                     </li>
//                                 </ul> */}
//                             </div>
//                         </div>

//                         <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
//                             <div className="m-2 text-justify text-sm">
//                             <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12"> Network Security Products</h4>
//                                 <p className="text-md font-medium leading-5 h-auto md:h-48">
//                                     The Payroll Management System automates the process of employee payments for businesses and organizations of different sizes. It helps to ensure that your employees get paid accurately and on time, while also reducing the time and effort required to manage payroll manually, with this system in place, you enjoy benefits such as: 
//                                     increased accuracy in employee payments. It can also integrate into an existing management system through well-structured APIs.
//                                 </p>
//                                 <div className="flex justify-center my-4">
//                                     <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
//                                         Schedule Demo
//                                         <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>

//                         <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
//                             <div className="m-2 text-justify text-sm">
//                                 <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Mobility</h4>
//                                 <p className="text-md font-medium leading-5 h-auto md:h-48">
//                                     Our event management system helps to manage different types of events, whether weddings, burials or any kind of event. With an easily customizable menu, you get to define your user experience and make your event fully customizable and memorable.
//                                     With use cases already recorded for quite a number of events, we can assure you of a stress-less event mangement platform.
//                                 </p>
//                                 <div className="flex justify-center my-4">
//                                     <Link to="/get-demo" className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl">
//                                         Schedule Demo
//                                         <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>                    
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Portfolio;
import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className="my-4 py-4" id="portfolio">
            <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Products</h2>
            <div className="flex justify-center">
                <div className="w-24 border-b-4 border-blue-900 mb-8"></div>
            </div>

            <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
                        <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Cybersecurity Products</h4>
                            <p className="text-md font-medium leading-5 h-auto md:h-48">
                                Protect your organization with advanced cybersecurity solutions.
                            </p>
                            <div className="flex justify-center my-4">
                                <Link
                                    to="/cyber-security"
                                    className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                                >
                                    View Products
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                        <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">IT Products</h4>
                            <p className="text-md font-medium leading-5 h-auto md:h-48">
                                Streamline your operations with our IT product solutions.
                            </p>
                            <div className="flex justify-center my-4">
                                <Link
                                    to="/it-products"
                                    className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                                >
                                    View Products
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                        <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Security Surveillance Products</h4>
                            <p className="text-md font-medium leading-5 h-auto md:h-48">
                                Secure your network with cutting-edge security solutions.
                            </p>
                            <div className="flex justify-center my-4">
                                <Link
                                    to="/network-security"
                                    className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                                >
                                    View Products
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                        <div className="m-2 text-justify text-sm">
                            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">Mobility</h4>
                            <p className="text-md font-medium leading-5 h-auto md:h-48">
                            Empower your business with our tailored mobility solutions. Our products enable seamless communication, collaboration, and productivity on the go. From mobile devices to secure connectivity and cloud services, we help your team stay connected and efficient anywhere, ensuring that your business remains agile and competitive in a rapidly evolving digital world.
                            </p>
                            <div className="flex justify-center my-4">
                                <Link
                                    to="/mobility"
                                    className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                                >
                                    View Products
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
