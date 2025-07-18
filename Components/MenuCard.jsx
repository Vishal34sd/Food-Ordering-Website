import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const CDN_URL = import.meta.env.VITE_CDN_URL;
const SWIGGY_MENU_API = import.meta.env.VITE_SWIGGY_MENU_API;
import NewMenuEachCard from "../Components/body/NewMenuEachCard"

const MenuCard = () => {
  const { resId } = useParams();

  const [resMenu, setResMenu] = useState([]);
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    if (resId) {
      fetchMenu();
    }
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const resData = await fetch(`${SWIGGY_MENU_API}${resId}`);
      const json = await resData.json();
      console.log(json); 

      // Get Restaurant Info (dynamic)
      const restaurantInfo = json.data.cards.find(
        (card) => card.card?.card?.info
      )?.card.card.info;

      if (restaurantInfo) {
        setResInfo({
          name: restaurantInfo.name,
          imageId: restaurantInfo.cloudinaryImageId,
          rating :  restaurantInfo.avgRating ,
          area :  restaurantInfo.locality
        });
      }

      
      const regularCards =
        json.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      const itemCardsWrapper = regularCards?.find(
        (c) => c.card?.card?.itemCards
      );

      const itemCards = itemCardsWrapper?.card?.card?.itemCards || [];
      setResMenu(itemCards);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  return (
    <div
      style={{
        width: "90%",
        maxWidth: "1200px",
        margin: "auto",
        padding: "20px",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "#dcdcdc",
        color: "#333",
      }}
    >
      <header
        style={{
          textAlign: "center",
          padding: "2rem 0",
        }}
      >
        <img
          src={
            resInfo?.imageId
              ? CDN_URL + resInfo.imageId
              : "https://via.placeholder.com/250"
          }
          alt="Restaurant"
          style={{
            width: "250px",
            height: "250px",
            borderRadius: "3px",
            objectFit: "cover",
            border: "5px solid #060606ff",
            marginBottom: "1rem",
          }}
        />
        <h1
          style={{
            fontSize: "2.5rem",
            color: "#0c0c0cff",
          }}
        >
          {resInfo?.name || "Loading..."}
        </h1>
        <h3 style={{color: "#0c0c0cff", marginTop:"8px"}}>{resInfo?.rating}⭐</h3>        
        <h3 style={{color: "#0c0c0cff"}}>Outlet: {resInfo?.area}</h3>        

      </header>

      <section>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2rem",
            color: "#ff6600",
            marginBottom: "1.5rem",
          }}
        >
         Flavors to Explore 
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection : "column",
            gap: "1.5rem",
            paddingBottom: "2rem",
            backgroundColor : "#dcdcdc"
          }}
        >
          {resMenu.length > 0 ? (
            resMenu.map((item) => (
              <NewMenuEachCard key={item.card.info.id} data={item} />
            ))
          ) : (
            <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>
              Loading Menu...
              Please wait !!
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default MenuCard;
