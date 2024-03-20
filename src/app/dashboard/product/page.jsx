"use client";

import HeaderDashboard from "~/components/core/HeaderDashboard";
import { useCreateProductPage } from "~/api/useCreateProduct";
import { Formik, Field, Form } from "formik";

const ProductPage = () => {
  const { onHandleCreateProduct } = useCreateProductPage();
  // console.log(onHandleCreateProduct)
  return (
    <div>
      <HeaderDashboard
        breadcumbsLink="Dashboard / Product"
        title="Create Product"
      />
      <Formik
        initialValues={{
          name: "",
          price: "",
          imageUrl: "",
          description: "",
          category: "",
        }}
        onSubmit={(value) => {
          onHandleCreateProduct(value);
        }}
      >
        <Form>
          <div className="px-14 py-10">
            <div className="w-full flex flex-col gap-3">
              <div className="flex gap-7">
                <div className="flex flex-col w-full">
                  <label>Name</label>
                  <Field
                    type="text"
                    name="name"
                    className="input border border-gray-300 w-full py-3 px-3 rounded-md"
                    placeholder="Type Product Name"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label>Price</label>
                  <Field
                    type="number"
                    name="price"
                    className="input border border-gray-300 w-full py-3 px-3 rounded-md"
                    placeholder="Type Product Price"
                  />
                </div>
              </div>
              <div className="flex gap-7">
                <div className="flex flex-col w-full">
                  <label>Image Url</label>
                  <Field
                    type="text"
                    name="imageUrl"
                    className="input border border-gray-300 w-full py-3 px-3 rounded-md"
                    placeholder="Type Product Image"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label>Descrption</label>
                  <Field
                    type="text"
                    name="description"
                    className="input border border-gray-300 w-full py-3 px-3 rounded-md"
                    placeholder="Type Product Price"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full">
                <label>Category</label>
                <Field
                  as="select"
                  name="category"
                  className="input border border-gray-300 w-full py-3 px-3 rounded-md"
                >
                  <option>Choose Category</option>
                  <option value="new">New</option>
                  <option value="second">Second</option>
                </Field>
              </div>
              <button
                type="submit"
                className="btn bg-orange-500 text-white w-full py-3 rounded-md hover:bg-black"
              >
                Create Product
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ProductPage;
