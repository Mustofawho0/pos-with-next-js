"use client";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAuthMutation } from "~/api/useAuthMutation";
// import { useZustandStores } from "~/zustandStores";
import { useZustandStores } from "~/zustandStores";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { loginSchema } from "~/supports/schema/loginSchema";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { users, createUsers } = useZustandStores();

  const handleAuthMutationSuccess = (data) => {
    // const res = await axios.get(`http://localhost:5000/users/${createUsers}`);
    createUsers({
      id: data[0].id,
      username: data[0].username,
      role: data[0].role,
    });
    if (data[0].role === "admin") {
      router.push("/dashboard");
      toast.success("Login Success");
    } else if (data[0].role === "superadmin") {
      toast.success("Login Success");
      router.push("/admin");
    }
    // console.log(users)
  };

  const handleAuthMutationError = () => {
    toast.error("Login Failed");
  };

  const { mutate, status } = useAuthMutation({
    onSuccess: handleAuthMutationSuccess,
    onError: handleAuthMutationError,
  });

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="w-[500px] flex flex-col justify-center items-center">
        <h1 className="py-3 text-xl font-light">
          Welcome,
          <span className="px-1  font-bold">Admin</span>
        </h1>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            const { username, password } = values;
            mutate({ username, password });
          }}
        >
          {({ dirty, isValid }) => {
            return (
              <div className="w-full">
                <Form>
                  <div className="flex flex-col gap-3 w-full">
                    <Field
                      autocomplete="off"
                      name="username"
                      className="input border border-black w-full py-3 px-3 rounded-md"
                      placeholder="Type your Username"
                    />
                    <ErrorMessage name="username" />
                    <Field
                      autocomplete="off"
                      name="password"
                      type="password"
                      className="input border border-black w-full py-3 px-3 rounded-md"
                      placeholder="Type your Password"
                    />
                    <ErrorMessage name="password" />
                    <p className="text-right pt-0 pb-5">Forgot Password?</p>
                    <button
                      type="submit"
                      disabled={!(dirty && isValid) || status === "pending"}
                      className="btn bg-black text-white w-full py-3 rounded-md"
                    >
                      Login to Account
                    </button>
                  </div>
                </Form>
              </div>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}
