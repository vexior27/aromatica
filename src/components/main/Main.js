import { useEffect, useState } from "react";

import Card from "./Card";

export default function Main() {
   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch("././data.json");
            if (!response.ok) {
               throw new Error("Błąd pobierania danych!");
            }
            const jsonData = await response.json();
            setData(jsonData);
         } catch (err) {
            console.error("Fetch error: ", err);
         }
      };
      fetchData();
   }, []);
   
   return (
      <div className="main w-2/3 bg-gray-50 h-auto ml-auto mr-auto mt-10 rounded-md flex flex-wrap gap-10 items-start justify-center pt-10">
         {
            data.map((element, index) => (
               <Card key={index} name={element.name} prod={element.producer} img={element.image_url} btn={element.price}/>
            ))
         }
      </div>
   );
}
