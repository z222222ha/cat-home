"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CATS } from "@/config/cats";
import { useTheme } from "next-themes";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const ScrollingCats = ({ id }: { id: string }) => {
  const { theme } = useTheme();
  return (
    <section
      id={id}
      className="w-full px-0 pt-8 md:px-6 md:pt-10 lg:px-0 lg:pt-16"
    >
      {/* <h2 className="text-center mb-10">Cats</h2> */}

      <Marquee
        direction="left"
        autoFill
        // gradient
        // gradientColor="rgb(248,251,253)"
        // gradientWidth={100}
      >
        {CATS.map((item, index) => (
          <div className="mx-6 text-gray-500" key={index}>
            <Card className="w-300 h-400">
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>des</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={400}
                  priority={true}
                  style={{
                    objectFit: "cover", // cover, contain, none
                    objectPosition: "center", // left, center, right, top, center, bottom
                    borderRadius: "8px", // 0, 50%, 100%
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // 0 0 10px rgba(0, 0, 0, 0.1)
                    width: "300px",
                    height: "400px",
                    // filter: "grayscale(100%)", // grayscale(100%)
                  }}
                  className={`hover:filter-none transition-all duration-300 cursor-pointer text-gray-500`}
                />
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ScrollingCats;
