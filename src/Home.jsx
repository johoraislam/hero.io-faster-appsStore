import { useLoaderData } from "react-router";
import Banner from "./components/Banner/Banner";
import TrendingApps from "./components/TrendingApps/TrendingApps";

function Home() {
  const appsData = useLoaderData();

  const trendingApps = appsData
    .sort((a, b) => b.ratingAvg - a.ratingAvg) // HighestRatingFirst
    .slice(0, 8); // Top8Apps
  return (
    <>
      {/* BannerSection */}
      <Banner />

      {/* TrendingAppSection */}
      <TrendingApps appsData={trendingApps} />
    </>
  );
}

export default Home;
