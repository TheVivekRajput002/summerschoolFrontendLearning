import { getTopPerformers } from "@/api/leaderboardapi";
import { getWorkshopsStats, getUpcomingWorkshops } from "@/api/workshopapi";
import { CarouselMenu } from "@/components/CarouselMenu";
import { FeatureCard } from "@/components/featureCard";
import HeroSection from "@/components/HeroSection";
import Updated_HeroSection from "@/components/Updated_HeroSection";
import { Leaderboard } from "@/components/LeaderBoard";
import { WorkshopCard } from "@/components/WorkshopCard";
import React, { useState, useEffect } from "react";
import About from "@/components/About";
import FeedbackSection from "@/components/FeedbackSection";
import Updated_FeedbackSection from "@/components/Updated_FeedbackSection";
import StartLearning from "@/components/StartLearning";
import bg from '@/assets/images/bg.jpg'
import Updated_Loader from "@/components/Updated_Loader";

const Home = () => {
  const [workshops, setWorkshops] = useState([]);
  const [workshopStats, setWorkshopStats] = useState([]);
  const [topPerformer, setTopPerformer] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getWorkshopsStats();
        console.log(data.data);
        setWorkshopStats(data.data);
      } catch (error) {
        console.error("Error fetching workshop stats:", error);
      }
    };

    const fetchTopPerformers = async () => {
      try {
        const data = await getTopPerformers();
        setTopPerformer(data.data.top_three);
        console.log(data.data.top_three);
      } catch (error) {
        console.error("Error fetching top performers:", error);
      }
    };

    const fetchWorkshops = async () => {
      try {
        const data = await getUpcomingWorkshops(5);
        setWorkshops(data.data);
      } catch (err) {
        console.error("Error fetching upcoming workshops:", err);
      } finally {
        setLoading(false); // loading sirf yahan handle kar rahe
      }
    };

    fetchStats();
    fetchTopPerformers();
    fetchWorkshops();
  }, []);

  if (loading) return <Updated_Loader />;

  return (
    <>
      <div className="bgg-blackk overflow-y-scroll w-[100vw] mx-auto px-10">
        <div className="h-[100vh] pt-18">
          <Updated_HeroSection />
        </div>

        {/* <StartLearning /> */}

        <div className="">
          <HeroSection {...workshopStats} />
        </div>

        <div className="mt-5">
          <About />
        </div>

        <div className="p-4">
          <h1
            className="text-3xl md:text-5xl lg:text-6xl text-gray-400 font-medium font-rosario text-center m-2 pb-10"
            data-aos-duration="700"
          >
            UPCOMING WORKSHOPS
          </h1>

          <CarouselMenu
            items={workshops.map((workshop) => (
              <WorkshopCard key={workshop.id} workshop={workshop} />
            ))}
          />
        </div>
        <div className="p-4 my-10">
          {/* Leaderboard component here */}
          <h1
            className="text-3xl md:text-5xl lg:text-6xl text-gray-400 font-medium font-rosario text-center m-2 pb-10"
            data-aos-duration="700"
          >
            LEADERS OF SUMMER SCHOOL
          </h1>
          <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance p-2 m-2 mb-4"></h1>
          <Leaderboard
            users={topPerformer}
            title="Top Performers"
            maxRanks={5}
          />
        </div>

        <div>
          <h1
            className="text-3xl md:text-5xl lg:text-6xl text-gray-400 font-medium font-rosario text-center m-2 pb-10"
            data-aos-duration="700"
          >
            FEATURES
          </h1>

          {/*<h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance p-2 m-2 mb-4'></h1>*/}
          <FeatureCard isLoggedIn={false} />
          {/* <Updated_FeatureCard isLoggedIn={false} /> */}
        </div>
        {/*<h1 className="text-3xl md:4xl lg:8xl font-foreground font-bold my-4">Features Card</h1>*/}

        <FeedbackSection />
        {/* <Updated_FeedbackSection /> */}
      </div>

      <style jsx>{`
      .bgg-blackk {
    background-size: cover;
    background-image: url(${bg});
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
}



/* Hides scrollbar but allows scrolling */
::-webkit-scrollbar {
    display: none;
}

html {
    scrollbar-width: none;
}

body {
    -ms-overflow-style: none;
}
      `}</style>

    </>
  );
};

export default Home;