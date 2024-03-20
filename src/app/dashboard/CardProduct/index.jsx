export const CardProduct = ({ name, price, image, description, category }) => {
  return (
    <>
      <div className="col-span-3">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt="Gambar" />
          </figure>
          <div className="px-3 py-3">
            <h1 className="text-lg font-bold">
              {name} ({category})
            </h1>
            <p>{description}</p>
            <p className="font-bold text-orange-500">Rp. {price}</p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </>
  );
};
