import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
// import { SiGithub, SiTiktok, SiTwitter, SiYoutube } from "react-icons/si";
import CollapsibleExample from "../../components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";

export const SingerPage = () => {
  const [singerData, setSingerData] = useState(null);

  const fetchSingerData = async () => {
    try {
      const singerId = localStorage.getItem("singerId");
      const response = await axios.get(
        `http://localhost/Project/get_singer_details.php?singerId=${singerId}`
      );

      if (response.status !== 200) {
        throw new Error("Failed to fetch singer data");
      }

      const data = response.data;
      setSingerData(data.singer);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSingerData();
  }, []);

  return (
    <div className="random">
      <CollapsibleExample />
      <div className="min-h-screen bg-zinc-900 px-4 py-12 text-zinc-50">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{
            staggerChildren: 0.05,
          }}
          className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
        >
          <HeaderBlock singerData={singerData} />
          <AboutBlock singerData={singerData} />
        </motion.div>
        <Footer />
      </div>
    </div>
  );
};

const Block = ({ className, children, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-zinc-800 p-6",
        className
      )}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

const HeaderBlock = ({ singerData }) => (
  <Block className="col-span-12 row-span-2 md:col-span-6">
    <img
      src="https://api.dicebear.com/8.x/lorelei-neutral/svg?seed=John"
      alt="avatar"
      className="mb-4 size-14 rounded-full"
    />
    {singerData && (
      <div>
        <h1 className="mb-12 text-4xl font-medium leading-tight">
          {singerData.FirstName} {singerData.LastName}
        </h1>
        <p className="text-xl">ID: {singerData.singer_id}</p>
      </div>
    )}
    <a
      href="#"
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      Contact me
    </a>
  </Block>
);

const AboutBlock = ({ singerData }) => (
  <Block className="col-span-12 text-3xl leading-snug">
    {singerData && <p>{singerData.Description}</p>}
  </Block>
);

const Footer = () => {
  return (
    <footer className="mt-12">
      <p className="text-center text-zinc-400">
        Made with ❤️ by{" "}
        <a href="#" className="text-orange-500 hover:underline">
          GarGari
        </a>
      </p>
    </footer>
  );
};

export default SingerPage;
