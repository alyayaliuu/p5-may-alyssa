"use client";
import {Image} from "@heroui/image";

import { useState } from "react";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { Button } from "@heroui/button";

import { title, subtitle } from "@/components/primitives";
import ConfettiButton from "@/components/confettiButton";

export default function Home() {
  const [spinning, setSpinning] = useState(false);

  const spinButton = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 1500);
  };

  return (
    // <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
    //   <div className="inline-block max-w-xl text-center justify-center">
    //     <span className={title()}>Discount&nbsp;</span>
    //     <span className={title({ color: "violet" })}>Time Machine&nbsp;</span>
    //     <br />
    //     <span className={title()}>Wholesale</span>
    //     <div className={subtitle({ class: "mt-4" })}>
    //       A project template for YOU to make your own!
    //     </div>
    //   </div>

    //   <div className="flex gap-3">
    //     <ConfettiButton />

    //     <div className={spinning ? "animate-spin" : ""}>
    //       <Button radius="full" variant="ghost" onPress={spinButton}>
    //         Spin
    //       </Button>
    //     </div>
    //   </div>

    //   <div className="mt-8">
    //     <Snippet hideCopyButton hideSymbol variant="bordered">
    //       <span>
    //         Get started by editing <Code color="primary">app/page.tsx</Code>
    //       </span>
    //     </Snippet>
    //   </div>
    // </section>
    <div>
      <Image
        alt="no-face"
        src="https://www.fortressofsolitude.co.za/wp-content/uploads/2021/04/spirited-away-no-face.jpg"
        width={200}
      />
      <Image 
        alt="no-face"
        src="https://static0.colliderimages.com/wordpress/wp-content/uploads/2022/08/spiritedaway.jpg?q=49&fit=contain&w=2000&h=1000&dpr=2"
        width={200}
      />
      <Image 
        alt="no-face"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ndriGC9gYffWInuUP96nAEA64qd2khDXUg&s"
        width={200}
      />
      <Image 
        alt="no-face"
        src="https://static0.srcdn.com/wordpress/wp-content/uploads/2019/02/Spirited-Away-No-Face-Miyazaki-Stuido-Ghibli.jpg?q=50&fit=crop&w=825&dpr=1.5"
        width={200}
      />
      <Image 
        alt="no-face"
        src="https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/30d62d9b-925c-40cb-816d-533e6bdea7f3/hayao-miyazaki-reveals-the-true-identity-of-no-face-in-spirited-away.jpg"
        width={200}
      />
      <Image 
        alt="no-face"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX5OBu3qH9glEGzGqJUfGmsueTYxuX9NmmRw&s"
        width={200}
      />
    </div>
  );
}
