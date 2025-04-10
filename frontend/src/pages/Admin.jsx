import React, { useEffect, useState } from "react";
import { databases } from "../appwrite/config";
import Navbar from "../components/navbar";
import HomeSidebar from "../components/HomeSidebar";
import HomeSection from "../Sections/HomeSection";
import ThemesSection from "../Sections/ThemesSection";
// import HomeSection from "../Sections/Home";

const Home = () => {
  const [customisation, setCustomisation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    try {
      const response = await databases.listDocuments(
        import.meta.env.VITE_DATABASE_ID,
        import.meta.env.VITE_COLLECTION_ID_CUSTOMISATION
      );
      setCustomisation(response.documents);
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to load data.");
    } finally {
      setLoading(false);
    }
  };
  console.log(import.meta.env.VITE_PROJECT_ID);
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="flex">
        <HomeSidebar />
        {/* <div>
          <h2>Customisation List</h2>
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {!loading &&
            customisation.map((custom) => (
              <div key={custom.$id}>{custom.body}</div>
            ))}
        </div> */}
        {/* <HomeSection/> */}
        <ThemesSection/>
      </div>
    </div>
  );
};

export default Home;
