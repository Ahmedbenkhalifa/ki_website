import React, { useEffect, useState } from "react";
import Carousel from "../../components/Carousel";
import { imagesCarousel } from "../../constants/imagesCarousel";
import About from "./sections/About";
import News from "./sections/News";
import Product from "./sections/Product";
import Testimonies from "./sections/Testimonies";
import Contact from "../../components/Contact";
import Publication from "./sections/Publication";
import axios from "axios";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [publishPosts, setPublishPosts] = useState([]);
  const getAllPublications = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("/api/publication/getPublishPost");
      setIsLoading(false);
      setPublishPosts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllPublications()
  }, []);
  return (
    <>
      <Carousel sx={{ mt: 8,mb:2}} >
        {imagesCarousel.map((elem, k) => (
          <a href={elem.link} key={k} target="_blank" rel="noreferrer"  id={"sectionAccueil"}>
            <img src={elem.img} alt={"img"+k} width={"100%"} height={"auto"} style={{minHeight:'170px',objectFit:'cover'}}/>
          </a>
        ))}
      </Carousel>
      <News/>
      <About/>
      <Product/>
      <Testimonies/>
      {!isLoading && publishPosts.length>0 &&<Publication publishPosts={publishPosts} />}
      <Contact/>
    </>
  );
};

export default Home;
