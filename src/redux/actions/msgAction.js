// import { getMessage } from "../reducers/msgSlice";
// import { useDispatch } from "react-redux";

// export const msgAction = (requestData) => {
//   const dispatch = useDispatch();

//   return fetch("http://localhost:3000/messages/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(requestData),
//   })
//     .then((res) => res.json())
//     .then((result) => dispatch(getMessage(result)))
//     .catch((err) => console.error(err.message));
// };
