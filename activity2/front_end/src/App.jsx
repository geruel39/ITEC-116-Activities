import { useState } from "react";

function App() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [page, setPage] = useState("login"); // "login" | "register"

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.username || !form.password) {
      alert("Please fill in all fields");
      return;
    }
    if (page === "login") {
      alert(`Welcome back ${form.username}! (demo only)`);
    } else {
      alert(`Account created for ${form.username}! (demo only)`);
    }
    setForm({ username: "", password: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-4xl flex overflow-hidden">
        
        {/* LEFT SIDE - FORM */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          {page === "login" ? (
            <>
              <h1 className="text-3xl font-bold text-center mb-2">LOGIN</h1>
              <p className="text-center text-gray-500 mb-6">
                Welcome back! Please login to continue.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold text-center mb-2">REGISTER</h1>
              <p className="text-center text-gray-500 mb-6">
                Create your account and get started.
              </p>
            </>
          )}

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition"
          >
            {page === "login" ? "Login Now" : "Register Now"}
          </button>

          <p className="mt-6 text-center text-sm text-gray-600">
            {page === "login" ? (
              <>
                Don’t have an account?{" "}
                <span
                  onClick={() => setPage("register")}
                  className="text-purple-500 font-semibold cursor-pointer hover:underline"
                >
                  Register
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  onClick={() => setPage("login")}
                  className="text-purple-500 font-semibold cursor-pointer hover:underline"
                >
                  Login
                </span>
              </>
            )}
          </p>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="w-1/2 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
          <img
            src="/cover.png"
            alt="Cover"
            className="object-contain max-h-[400px] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
