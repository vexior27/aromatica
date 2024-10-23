export default function Button(price) {
   return (
      <button className="bg-white text-sm text-black transition rounded-md pt-1 pb-1 pl-5 pr-5 border border-black hover:bg-black hover:text-white hover:scale-110 active:scale-95">
        { price.value }
      </button>
   )
}