"use client";

import { title } from "@/components/primitives";
import { Image } from "@heroui/image";
import { Button } from '@heroui/button';
import { addToast } from "@heroui/toast";

export default function A5Page() {
  const reason1Toast = () => {
    addToast({
      title: "Reason 1",
      description:
        "This button does nothing. But you can make it do something!",
      color: "danger",
    });}
  return (
    <div>
      <h1 className={title()}>A5: Defend the Fictional Villain</h1>
      <p>
        placeholder text
      </p>
      <Image
        alt="no-face"
        src="https://www.fortressofsolitude.co.za/wp-content/uploads/2021/04/spirited-away-no-face.jpg"
        width={200}
      />
      <p>example #1</p>
      <Image 
        alt="no-face"
        src="https://static0.colliderimages.com/wordpress/wp-content/uploads/2022/08/spiritedaway.jpg?q=49&fit=contain&w=2000&h=1000&dpr=2"
        width={200}
      />
      <div className="flex flex-wrap gap-3">
      <Button
        onClick={() => {reason1Toast}}
          
      >Reason #1</Button>
      <Button color="secondary">Reason #2</Button>
      <Button color="#">Reason #3</Button>
      <Button color="#">Reason #4</Button>
    </div>
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
