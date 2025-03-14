import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.status === "success") {
        setSubscribed(true);
        setMessage(data.message);
        setEmail("");
      } else {
        setMessage("Subscription failed. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-transparent-70 rounded-3xl border-[0.5px] border-transparent-70 flex"
    >
      <input
        type="email"
        placeholder="Enter email address"
        className="outline-none px-4 text-[14px] bg-transparent text-base-white grow"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={loading || subscribed}
      />
      <button
        type="submit"
        className="bg-base-white text-base-black text-[14px] py-3 px-4 rounded-3xl hover:bg-gray-100 flex items-center justify-center min-w-[120px]"
        disabled={subscribed || loading}
      >
        {loading ? (
          <div className="w-5 h-5 border-2 border-gray-600 border-t-white rounded-full animate-spin"></div>
        ) : (
          <span className="block w-full text-center">
            {subscribed ? "Subscribed" : "Subscribe"}
          </span>
        )}
      </button>
      {message && (
        <p className="hidden text-center text-sm text-red-400">{message}</p>
      )}
    </form>
  );
}
