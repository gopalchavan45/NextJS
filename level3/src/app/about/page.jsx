import React from "react";
import { MonteCarlo, Roboto } from "next/font/google";
import Image from "next/image";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
const robotoo = MonteCarlo({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
const page = () => {
  return (
    <div>
      <h1 className={roboto.className}>About is here</h1>
      <h1 className={robotoo.className}>About is here</h1>
      <Image src="https://asset.autocarindia.com/static/news/images/20251226_102202_9e4bef96.jpg?w=728&q=75" alt="trip" width={700} height={700}/>
      <Image src="https://images.hindustantimes.com/auto/img/2023/07/14/1600x900/Triumph_Speed_400_1688569095352_1689331122461.png" alt="trip" width={700} height={700}/>
    </div>
  );
};

export default page;
