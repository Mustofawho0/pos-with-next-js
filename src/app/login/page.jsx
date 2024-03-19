// "use client";

// import Image from "next/image";
// import axios from "axios";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import Link from "next/link";
// import { toast } from "react-toastify";
// import { ValidasiLogin } from "~/supports/schema/loginSchema";
// import { userContext } from "~/supports/context/useUserContext";
// import { useContext } from "react";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const nav = useRouter()
//   const { setUserData } = useContext(userContext);
//   const onHandleLogin = async (value, resetForm) => {
//     try {
//       let findData;

//       if (value.username.includes("@")) {
//         findData = await axios.get(
//           `http://localhost:5000/users?email=${value.username}&password=${value.password}`
//         );
//       } else {
//         findData = await axios.get(
//           `http://localhost:5000/users?username=${value.username}&password=${value.password}`
//         );
//       }
//       if (findData.data.length === 0) throw new Error("Admin not Found!");

//       toast.success("Login Success!");
//       setUserData;({
//         id : findData.data[0].id,
//         username : findData.data[0].username
//       })
//       nav.push("/dashboard")
//       resetForm();
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };
//   return (
//     <>
//       <Formik
//         initialValues={{
//           username: "",
//           password: "",
//         }}
//         validationSchema={ValidasiLogin}
//         onSubmit={(value, { resetForm }) => {
//           onHandleLogin(value, resetForm);
//         }}
//       >
//         <Form>
//           <div className="flex justify-center items-center flex-col pt-[150px]">
//             <div className="flex items-center justify-center text-2xl font-sans font-bold tracking-wider">
//               <p>Login</p>
//             </div>
//             <div className="flex justify-center mr-64 pr-4">
//               <p>Email or Username</p>
//             </div>
//             <div className="flex justify-center items-center pt-1 pb-2">
//               <Field
//                 name="username"
//                 className="border border-gray-500 shadow-sm  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1 w-[400px] py-1"
//                 type="text"
//               />
//             </div>
//             <ErrorMessage
//               name="username"
//               component={"div"}
//               className="text-sm text-red-500 flex justify-center"
//             />
//             <div className="flex justify-center mr-64 pr-20">
//               <p>Password</p>
//             </div>
//             <div className="flex justify-center items-center pt-1">
//               <Field
//                 name="password"
//                 className="border border-gray-500 shadow-sm  placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block sm:text-sm focus:ring-1 w-[400px] py-1"
//                 type="password"
//               />
//             </div>
//             <ErrorMessage
//               name="password"
//               component={"div"}
//               className="text-sm text-red-500 flex justify-center"
//             />
//             <div className="flex justify-center items-center pl-72 mr-3 pt-1">
//               <span className="text-blue-500">
//                 <a href="">Forgot Password?</a>
//               </span>
//             </div>
//             <div className="flex justify-center items-center pt-2">
//               <button
//                 type="submit"
//                 className="btn w-[400px] rounded-none bg-black text-white hover:bg-gray-600 text-xl tracking-wider"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </Form>
//       </Formik>
//     </>
//   );
// }
