export default function LoginScreen({ setScreen, formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd validate credentials here.
    // For this assignment, we just navigate to the profile.
    setScreen("profile");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 h-full animate-fadeIn">
      <h2 className="text-2xl font-bold text-[#1d1d1d] mb-3 mt-4">
        Signin to your
        <br />
        PopX account
      </h2>
      <p className="text-[#6c6c6c] text-lg mb-8 leading-snug">
        Lorem ipsum dolor sit amet,
        <br />
        consetetur adipiscing elit.
      </p>

      <div className="space-y-6 mb-8">
        {/* Email Address Input */}
        <div className="relative border border-[#cbcbcb] rounded-md p-3 focus-within:border-[#6C25FF]">
          <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-[#6C25FF] font-medium">
            Email Address
          </label>
          <input
            required
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            className="w-full outline-none text-sm text-[#1d1d1d] bg-transparent"
          />
        </div>

        {/* Password Input */}
        <div className="relative border border-[#cbcbcb] rounded-md p-3 focus-within:border-[#6C25FF]">
          <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-[#6C25FF] font-medium">
            Password
          </label>
          <input
            required
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="w-full outline-none text-sm text-[#1d1d1d] bg-transparent"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-[#6C25FF] text-white font-semibold py-3.5 rounded-md shadow-md active:scale-[0.98] transition-all"
      >
        Login
      </button>
    </form>
  );
}
