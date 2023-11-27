import { DM_Sans } from "next/font/google";
import Wrapper from "@/components/Wrapper/Wrapper";
import Category from "@/components/Category/Category";
import Destination from "@/components/Destination/Destination";
import HowToBook from "@/components/Destination/HowToBook";
import Marquee from "react-fast-marquee";
import FooterCard from "@/components/Footer/FooterCard";
import Image from "next/image";

const dmSan = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

export default function Home() {
  return (
    <div className={`${dmSan.className}`}>
      <div className="bg-orange-50 py-[0.5rem] md:py-[1rem] lg:py-[1.5rem]">
        <div className="relative space-y-[1.5rem] px-[1rem] md:px-[2rem] md:flex md:justify-between md:items-center md:space-y-0 lg:px-[4rem] lg:max-w-[1700px] lg:mx-auto">
          <div className="flex items-center">
            <h1 className="text-[#000] text-[1.5rem] md:text-[1.5rem] lg:text-[1.75rem]">
              MKS
            </h1>
            <a
              href=""
              className="ml-auto md:hidden px-[0.5rem] py-[0.3rem] rounded-[0.3rem]"
            >
              Bookings
            </a>
          </div>
          {/* add flex to shwo it */}
          <nav className="absolute hidden top-[2rem] left-[0] w-[100%] z-[2] flex-col md:flex  md:flex-row md:space-x-[1rem] md:items-center md:relative md:top-0 md:left-0 md:w-[auto]">
            <a href="" className=" p-[0.5rem] lg:px-[1rem] ">
              Destination
            </a>
            <a href="" className=" p-[0.5rem] lg:px-[1rem] ">
              Hotels
            </a>
            <a href="" className="p-[0.5rem] lg:px-[1rem] ">
              Flights
            </a>
            <a href="" className="p-[0.5rem] lg:px-[1rem] ">
              Bookings
            </a>
            <a href="" className="p-[0.5rem] lg:px-[1rem] ">
              Login
            </a>
            <a href="" className="border-1 rounded-[0.3rem] p-[0.5rem]">
              Sign up
            </a>
            <a href="" className="p-[0.5rem] lg:px-[1rem] ">
              EN
            </a>
          </nav>
        </div>
      </div>

      <header className="bg-orange-50 py-[1.5rem] md:py-[2.5rem] lg:py-[3.5rem]">
        <Wrapper>
          <div className="md:grid md:grid-cols-2 lg:[grid-template-columns:1fr_1.5fr]">
            <div className="">
              <h1 className="text-[1rem] font-[600] text-green-700">
                BEST DESTINATION AROUND THE WORLD
              </h1>
              <p className="flex flex-col text-[1.7rem] font-[900] md:text-[3rem] lg:text-[4rem]">
                <span>Travel, enjoy</span>
                <span>and live a new</span>
                <span className="border-">and full life</span>
              </p>

              <p className="max-w-[400px] mt-[1rem]">
                Built Wicked longer admire do barton vanity itself do in it.
                Preferred to sportsmen it engrossed listening. Park gate sell
                they west hard for the.
              </p>

              <div className="flex space-x-[1.5rem] mt-[1rem] items-start">
                <button className=" px-[1rem] py-[0.5rem] bg-yellow-300 rounded-[0.3rem] md:px-[1.5rem] md:py-[1rem] font-[500]">
                  Find out more
                </button>

                <button className="font-[500] space-x-[0.7rem] flex items-center px-[1rem] py-[0.5rem] bg-yellow-300 rounded-[0.3rem] md:px-[1.5rem] md:py-[0.8rem]">
                  <span className="flex justify-center items-center rounded-full  h-[20px] w-[20px] md:h-[30px] md:w-[30px] bg-green-400">
                    <span className="play"></span>
                  </span>
                  <span>Play Demo</span>
                </button>
              </div>
            </div>
            <div className="mt-[1.5rem] overflow-hidden md:mt-[0] relative">
              <Image
                src="/aeroplane.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt="aeroplane"
              />
            </div>
          </div>
        </Wrapper>
      </header>

      <section className="">
        <Wrapper className="py-[2rem] md:py-[3rem] space-y-[3rem] lg:py-[4rem]">
          <div className="text-center space-y-1">
            <h1 className="font-[700] uppercase text-gray-500">Category</h1>
            <h3 className="font-[700] text-[1.3rem] md:text-[1.7rem] lg:text-[2.5rem]">
              We Offer Best Services
            </h3>
          </div>

          <div className="flex flex-col justify-center items-center space-y-[2.5rem] md:space-y-0 md:grid md:grid-cols-2 md:[grid-gap:2rem] lg:grid-cols-4">
            <Category
              image="/weather.png"
              title="Calculated Weather"
              text="built Wicked loger admire do barton vanity itself do in it."
            />
            <Category
              image="/aeroIcon.png"
              title="Best Flights"
              text="Engrossed listening Park gate sell they west hard for this."
            />
            <Category
              image="/microphone.png"
              title="Calculated Weather"
              text="Barton vanity itself do in it. Prefered to men it engrossed listening."
            />
            <Category
              image="/setting.png"
              title="Customization"
              text="We deliver outscored aviation services miltary customers"
            />
          </div>
        </Wrapper>
      </section>

      <section>
        <Wrapper className="py-[2rem] md:py-[3rem] space-y-[3rem] lg:py-[4rem]">
          <div className="text-center space-y-1">
            <h1 className="font-[700] uppercase text-gray-500">Top Selling</h1>
            <h3 className="font-[700] text-[1.3rem] md:text-[1.7rem] lg:text-[2.5rem]">
              Top Destinations
            </h3>
          </div>

          <div className="flex flex-col justify-center items-center space-y-[2.5rem] md:space-y-0 md:grid md:grid-cols-3 md:[grid-gap:2rem]">
            <Destination
              image="/rome.jpg"
              text="Rome, Italy"
              amount="5.42"
              days="10"
            />
            <Destination
              image="/london.jpg"
              text="London, Uk"
              amount="4.2"
              days="12"
            />
            <Destination
              image="/europe.jpg"
              text="Full Europe"
              amount="28"
              days="1"
            />
          </div>
        </Wrapper>
      </section>

      <section>
        <Wrapper className="py-[2rem] md:py-[3rem] space-y-[3rem] lg:py-[4rem]">
          <div className="md:grid md:grid-cols-2 md:items-center md:[grid-gap:2rem]">
            <div className="text-center space-y-1">
              <h1 className="font-[700] text-left uppercase text-gray-500">
                Easy and Fast
              </h1>
              <h3 className="flex flex-col font-[700] text-[1.3rem] text-left md:text-[1.7rem] lg:text-[2.5rem]">
                <span>Book Your Next Trip</span>
                <span> In 3 Easy Steps</span>
              </h3>

              <div className="py-[1rem] max-w-[500px] space-y-[1.7rem]">
                <HowToBook
                  color="y"
                  title="Choose Destination"
                  text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
          dolorum veritatis."
                />
                <HowToBook
                  color="g"
                  title="Make Payment"
                  text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
          dolorum veritatis."
                />
                <HowToBook
                  color="b"
                  title="Reach Airport on Selected Date"
                  text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
          dolorum veritatis."
                />
              </div>
            </div>

            <div className=" bg-blue-600 rounded-[0.5rem] overflow-hidden">
              <Image
                src="/rome.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt="rome"
              />
            </div>
          </div>
        </Wrapper>
      </section>

      <section>
        <Wrapper className="py-[2rem] md:py-[3rem] space-y-[3rem] lg:py-[4rem] md:grid md:grid-cols-2 md:space-y-0">
          <div className="text-center space-y-1 md:text-left md:max-w-[400px]">
            <h1 className="font-[700] uppercase text-gray-500">TESTIMONIALS</h1>
            <h3 className="font-[700] text-[1.3rem] md:text-[1.7rem] lg:text-[2.5rem]">
              What People Say About Us.
            </h3>
          </div>

          <div className="space-y-[1.5rem] text-center max-w-[400px] mx-auto md:max-w-[450px] md:text-left">
            <div className="flex justify-center rounded-full  md:justify-start md:mx-[0]">
              <Image
                src="/man.jpg"
                width={100}
                height={100}
                objectFit="100%"
                className="rounded-[1rem]"
                alt="rome"
              />
            </div>
            <div className="space-y-[0.5rem] text-gray-700">
              <p className="">{`"On the working talking painted pasture yet its express parties use. Sure last upon hw same as knew next. Of believed or diverted no."`}</p>

              <div>
                <h1 className="font-[500] text-[1.1rem]">Mike taylor</h1>
                <p className="text-[0.9rem]">Lahore, Pakistan</p>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      {/* slider */}
      <div>
        <Wrapper className="py-[2rem] md:py-[3rem] lg:py-[4rem]">
          <div className="font-[500] md:text-[1.5rem lg:md:text-[2rem] lg:text-[2.5rem]">
            <Marquee autoFill={true}>
              <div className="mr-[2rem] md:mr-[3rem] lg:mr-[10rem]">axon</div>
              <div className="mr-[2rem] md:mr-[3rem] lg:mr-[10rem]">
                JetStarX
              </div>
              <div className="mr-[2rem] md:mr-[3rem] lg:mr-[10rem]">
                Expedia
              </div>
              <div className="mr-[2rem] md:mr-[3rem] lg:mr-[10rem]">Qantas</div>
              <div className="mr-[2rem] md:mr-[3rem] lg:mr-[10rem]">
                Alitalia
              </div>
            </Marquee>
          </div>
        </Wrapper>
      </div>

      <section>
        <Wrapper className="py-[2rem] md:py-[3rem] space-y-[3rem] lg:py-[4rem]">
          <div className="relative flex flex-col justify-center items-center bg-gray-300 px-[2rem] py-[2.5rem] rounded-t-[2rem] rounded-b-[1rem] space-y-[2rem] md:py-[3rem] lg:py-[5rem]">
            <h1 className="max-w-[600px] text-center font-[600] text-gray-800 text-[1.3rem] md:text-[1.5rem]  lg:text-[1.7rem]">
              Subscribe to get information, latest news and other interesting
              offers about Jadoo
            </h1>

            <div className="space-x-[1rem]">
              <input
                type="text"
                className="py-1 rounded-[0.5rem] bg-white md:py-[1rem] md:w-[300px]"
              />
              <button className="font-[500] px-1 py-1 1 rounded-[0.5rem] bg-red-400 md:py-[1rem] md:px-[1rem]">
                Subscribe
              </button>
            </div>
          </div>
        </Wrapper>
      </section>

      <footer>
        <Wrapper className="py-[2rem] space-y-[1.5rem] md:py-[3rem] md:grid md:grid-cols-5 md:space-y-[0] [grid-gap:1rem] lg:py-[4rem]">
          <div>
            <h1 className="text-[1.5rem] font-[700] lg:text-[1.75rem]">MKS</h1>
            <h1>Book your trip in minutes</h1>
          </div>

          <FooterCard title="Company" list={["About", "Careers", "Mobile"]} />
          <FooterCard
            title="Contact"
            list={["Help/FAQ", "Press", "Affilates"]}
          />
          <FooterCard
            title="More"
            list={["Airline Fees", "Airline", "Low fare tips"]}
          />

          <button className="font-[600] text-[1.1rem]">Discover our App</button>
        </Wrapper>
      </footer>
    </div>
  );
}
