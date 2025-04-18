"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
            <Card>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={210}
                  height={280}
                  priority={true}
                  style={{
                    objectFit: "cover", // cover, contain, none
                    objectPosition: "center", // left, center, right, top, center, bottom
                    borderRadius: "8px", // 0, 50%, 100%
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // 0 0 10px rgba(0, 0, 0, 0.1)
                    width: "210px",
                    height: "280px",
                    // filter: "grayscale(100%)", // grayscale(100%)
                  }}
                  className={`hover:filter-none transition-all duration-300 cursor-pointer text-gray-500`}
                />
              </CardContent>
            </Card>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ScrollingCats;
