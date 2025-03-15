import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setIsError(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      setIsError(true);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      console.log("Response Status:", response.status);

      const data = await response.json();
      console.log("Response Data:", data)

      if (response.ok && data.status === "success") {
        setSubscribed(true);
        setMessage(data.message || "Successfully subscribed!");
        setIsError(false);
        setEmail("");
      } else {
        setMessage(data.message || "Subscription failed. Try again.");
        setIsError(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="z-20 flex flex-col gap-2">
      <form
        onSubmit={handleSubmit}
        className="bg-transparent-70 rounded-3xl border-[0.5px] border-transparent-70 flex"
      >
        <input
          type="email"
          placeholder="Enter email address"
          className="outline-none px-4 text-[14px] bg-transparent text-base-white min-w-[220px] w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading || subscribed}
        />
        <button
          type="submit"
          className="bg-base-white text-base-black text-[14px] py-3 px-4 rounded-3xl hover:bg-gray-100 min-w-[106px]"
          disabled={subscribed || loading}
        >
          {loading ? (
            <CircularProgress size={15} thickness={3} color="inherit" />
          ) : (
            <span className="block w-full text-center">
              {subscribed ? "Subscribed" : "Subscribe"}
            </span>
          )}
        </button>
      </form>
      {message && (
        <p
          className={`uppercase text-center text-[14px] ${
            isError ? "text-error" : "text-base-white"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
