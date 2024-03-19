import HeaderDashboard from "~/components/core/HeaderDashboard";

const ProductPage = () => {
  return (
    <div>
      <HeaderDashboard
        breadcumbsLink="Dashboard / Product"
        title="Create Product"
      />
      <div className="px-14 py-10">
        <div className="w-full flex flex-col gap-3">
          <div className="flex gap-7">
            <div className="flex flex-col w-full">
              <label>Name</label>
              <input
                className="input border border-gray-300 w-full py-3 px-3 rounded-md"
                placeholder="Type Product Name"
              />
            </div>
            <div className="flex flex-col w-full">
              <label>Price</label>
              <input
                className="input border border-gray-300 w-full py-3 px-3 rounded-md"
                placeholder="Type Product Price"
              />
            </div>
          </div>
          <div className="flex gap-7">
            <div className="flex flex-col w-full">
              <label>Image Url</label>
              <input
                className="input border border-gray-300 w-full py-3 px-3 rounded-md"
                placeholder="Type Product Image"
              />
            </div>
            <div className="flex flex-col w-full">
              <label>Descrption</label>
              <input
                className="input border border-gray-300 w-full py-3 px-3 rounded-md"
                placeholder="Type Product Price"
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label>Category</label>
            <select className="input border border-gray-300 w-full py-3 px-3 rounded-md">
              <option>Choose Category</option>
              <option>Choose Category</option>
              <option>Choose Category</option>
            </select>
          </div>
          <button className="btn bg-orange-500 text-white w-full py-3 rounded-md hover:bg-black">
            Create Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
