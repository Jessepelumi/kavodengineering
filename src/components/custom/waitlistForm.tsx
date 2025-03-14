// import { useState } from "react";

// export default function WaitlistForm() {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [subscribed, setSubscribed] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("Thank you for subscribing!");

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setMessage("Please enter a valid email address.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const response = await fetch(
//         "https://script.google.com/macros/s/AKfycbwM-beL5Rj-HNOnRUz_5pHIQopiieu5aEX9bZHXhlyq8sWDuj931pZHd7IxHN9sHytCog/exec",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ email }),
//         }
//       );

//       const data = await response.json();
//       setMessage(data.message || "Successfully Subscribed!");
//     } catch (error) {
//       console.error("Error:", error);
//       setMessage("An error occurred. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-transparent-70 rounded-3xl border-[0.5px] border-transparent-70"
//     >
//       <input
//         type="email"
//         placeholder="Enter email address"
//         className="outline-none px-6 text-[14px] bg-transparent text-base-white grow"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//         disabled={loading || subscribed}
//       />
//       <button
//         type="submit"
//         className="bg-base-white text-base-black text-[14px] py-3 px-6 rounded-3xl hover:bg-gray-100"
//         disabled={subscribed}
//       >
//         {loading ? (
//           <div className="w-5 h-5 border-2 border-gray-600 border-t-white rounded-full animate-spin"></div>
//         ) : subscribed ? (
//           "Subscribed"
//         ) : (
//           "Subscribe"
//         )}
//       </button>
//     </form>
//   );
// }

//import { useState } from "react";

export default function WaitlistForm() {
  return (
    <div className="bg-transparent-70 rounded-3xl border-[0.5px] border-transparent-70">
      <input
        type="email"
        placeholder="Enter email address"
        className="outline-none px-6 text-[14px] bg-transparent text-base-white grow"
      />
      <button className="bg-base-white text-base-black text-[14px] py-3 px-6 rounded-3xl hover:bg-gray-100">
        Subscribe
      </button>
    </div>
  );
}
