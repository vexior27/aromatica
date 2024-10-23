import Button from "./Button";

export default function Card(props) {
   return (
      <div className="w-1/4 bg-white h-card rounded-md cursor-pointer font-figtree hover:scale-105 transition ease-in duration-150">
         <div className="card__img-container h-3/5 overflow-hidden relative flex items-center justify-center">
            <img src={props.img} className="absolute h-full p-5" />
         </div>
         <div className="card__info p-5">
            <h1 className="text-2xl font-bold">{props.name}</h1>
            <h2 className="text-md">{props.prod}</h2>
         </div>
         <div className="card__btn gap-2 flex items-start w-full pl-5">
            {Object.keys(props.btn).map((price) => (
               <Button value={price} />
            ))}
         </div>
      </div>
   );
}
