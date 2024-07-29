import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="py-20 h-screen flex md:flex-col flex-col-reverse md:justify-between justify-end gap-20 md:gap-0">
        <div className="hidden md:block container">
          <div className="grid md:grid-cols-5 grid-cols-1 gap-5">
            <h1 className="col-start-4 col-span-2 text-8xl">ASHIRVAD</h1>
            <h1 className="col-start-2 col-span-2 text-8xl">SATAPATHY</h1>
          </div>
        </div>
        <div className="container">
          <div className="grid md:grid-cols-5 grid-cols-1 gap-5">
            <p className="col-start-4 text-xs text-muted-foreground leading-snug tracking-wide">
              Partnering with visionaries to craft tailored, adaptive solutions that turn bold ideas into cutting-edge tech realities.
            </p>
          </div>
        </div>
        <div className="container grid md:grid-cols-5 grid-cols-1 gap-5">
          <div className="md:col-span-3 md:mb-20 mt-10">
            <p className="mb-5 md:hidden">Hello World 👋 I am Ashirvad Satapathy</p>
            <h1 className="font-medium  text-3xl text-muted-foreground leading-snug tracking-wide">Helping founders to build impactful, empathic product experiences</h1>
          </div>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}
