"use client";

import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link';

const services = [
  {
    num: "01",
    title: "JavaScript | React | Node",
    desc: "Hitesh Choudhary | Akshay Saini | Piyush Garg",
    href: "",
  },
  {
    num: "02",
    title: "Java | Spring Boot",
    desc: "Engineering Digest | Telusko | Smart Programming",
    href: "",
  },
  {
    num: "03",
    title: "MySQL | MongoDB | Redis",
    desc: "CampusX | Engineering Digest | techTFQ  | Piyush Garg",
    href: "",
  },
  {
    num: "04",
    title: "Python",
    desc: "Hitesh Choudhary",
    href: "",
  },
  {
    num: "05",
    title: "AI | ML |DL",
    desc: "CampusX",
    href: "",
  },

  {
    num: "06",
    title: "DSA ",
    desc: "Shradha Khapra | take U Forward",
    href: "",
  },

  {
    num: "07",
    title: "Docker | AWS ",
    desc: "Piyush Garg | TechWorld with Nana",
    href: "",
  },

  {
    num: "08",
    title: "NEXT.JS  | GraphQL",
    desc: "Piyush Garg | Hitesh Choudhary",
    href: "",
  },
];

import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        {/* Heading for creators */}
        <div className='text-center mb-8'>
          {/* <p className='text-white font-semibold text-2xl'>
            Skills acquired from leading industry creators
          </p> */}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          {services.map((service, index) => {
            return (
              <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent
                group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                  {/* <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link> */}
                </div>
                <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>
                  {service.title}
                </h2>
                <p className='text-white/60'>{service.desc}</p>

                <div className='border-b border-white/20 w-full'></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
