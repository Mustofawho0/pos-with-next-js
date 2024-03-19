"use client";

import axios from "axios";
import { useCreateAdminMutation } from "~/api/useCreateAdminMutation";
// import { useZustandStores } from "~/zustandStores";
import { toast } from "react-toastify";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ValidasiRegister } from "~/supports/schema/registerSchema";
import { useState } from "react";
export default function RegisterPage() {
 const {onHandleCreateAdmin, isLoading} = useCreateAdminMutation()
 
  return (
    <>
      <div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
            role:""
          }}
          validationSchema={ValidasiRegister}
          onSubmit={async (value, {resetForm}) => {
            onHandleCreateAdmin(value, resetForm)
          }}
          >
          {/* console.log(value) */}
          {({ dirty, isValid }) => {
            return (
              <Form>
                <div className="flex flex-col items-center py-[50px] font-sans">
                  <p className="font-bold text-2xl font-sans tracking-wide pb-[5px]">
                    Register for Admin
                  </p>
                  <div className="flex flex-row gap-2 ">
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text font-bold">First Name</span>
                      </div>
                      <Field
                        type="text"
                        name="firstName"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs rounded-none border border-gray-300"
                      />
                      <ErrorMessage
                        name="firstName"
                        component={"div"}
                        className="text-sm text-red-500"
                      />
                    </label>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text font-bold">Last Name</span>
                      </div>
                      <Field
                        type="text"
                        name="lastName"
                        placeholder="Type here"
                        className="input input-bordered w-full max-w-xs rounded-none border border-gray-300"
                      />
                      <ErrorMessage
                        name="lastName"
                        component={"div"}
                        className="text-sm text-red-500"
                      />
                    </label>
                  </div>
                  <div className="flex flex-col items-center w-[438px] ">
                    <label className="form-control w-auto">
                      <div className="label ">
                        <span className="label-text font-bold w-[428px] ">
                          Email
                        </span>
                      </div>
                      <Field
                        type="text"
                        name="email"
                        placeholder="Type here"
                        className="input input-bordered rounded-none border border-gray-300"
                      />
                      <ErrorMessage
                        name="email"
                        component={"div"}
                        className="text-sm text-red-500"
                      />
                    </label>
                    <label className="form-control w-auto">
                      <div className="label">
                        <span className="label-text font-bold w-[428px]">
                          Username
                        </span>
                      </div>
                      <Field
                        type="text"
                        name="username"
                        placeholder="Type here"
                        className="input input-bordered rounded-none border border-gray-300"
                      />
                      <ErrorMessage
                        name="username"
                        component={"div"}
                        className="text-sm text-red-500"
                      />
                    </label>
                    <label className="form-control w-auto">
                      <div className="label">
                        <span className="label-text font-bold w-[428px]">
                          Password
                        </span>
                      </div>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Type here"
                        className="input input-bordered rounded-none border border-gray-300"
                      />
                      <ErrorMessage
                        name="password"
                        component={"div"}
                        className="text-sm text-red-500"
                      />
                    </label>
                    <label className="form-control w-auto">
                      <div className="label">
                        <span className="label-text font-bold w-[428px]">
                          Role
                        </span>
                      </div>
                      <Field
                        as="select"
                        // type="role"
                        name="role"
                        placeholder="Type here"
                        className="input input-bordered rounded-none border border-gray-300"
                      >
                        <option value="">Choose Role</option>
                        <option value="admin">ADMIN</option>
                        <option value="super_admin">SUPER_ADMIN</option>
                      </Field>
                      <ErrorMessage
                        name="role"
                        component={"div"}
                        className="text-sm text-red-500"
                      />
                    </label>
                    <button
                      className="btn bg-gray-700 text-white rounded-none hover:bg-red-400 my-6 w-[428px]"
                      type="submit"
                      disabled={!(dirty && isValid) || isLoading}
                    >
                      Register admin
                    </button>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}
