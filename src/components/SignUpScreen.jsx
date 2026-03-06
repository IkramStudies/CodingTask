export default function SignUpScreen({ setScreen, formData, setFormData }) {
  const fields = [
    { label: "Full Name", name: "fullName", type: "text" },
    { label: "Phone number", name: "phoneNumber", type: "tel" },
    { label: "Email address", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
    { label: "Company name", name: "companyName", type: "text" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setScreen("profile");
  };

  return (
    <div className="h-full relative bg-white">
      {/* Back Button Container */}
      <div className="pt-6 px-6">
        <button
          onClick={() => setScreen("welcome")}
          className="text-gray-600 hover:text-[#6C25FF] transition-colors p-1 -ml-1"
          aria-label="Go back"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="p-6 pt-2 h-full">
        <h2 className="text-2xl font-bold text-[#1d1d1d] mb-8">
          Create your
          <br />
          PopX account
        </h2>

        <div className="space-y-6">
          {fields.map((field) => (
            <div
              key={field.name}
              className="relative border border-[#cbcbcb] rounded-md p-3 focus-within:border-[#6C25FF]"
            >
              <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-[#6C25FF] font-medium">
                {field.label}
                <span className="text-red-500">*</span>
              </label>
              <input
                required
                name={field.name}
                type={field.type}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={`Enter ${field.label.toLowerCase()}`}
                className="w-full outline-none text-sm text-[#1d1d1d] bg-transparent"
              />
            </div>
          ))}

          <div>
            <p className="text-sm font-medium mb-3 text-[#1d1d1d]">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>
            <div className="flex gap-6">
              {["Yes", "No"].map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="isAgency"
                    value={option}
                    checked={formData.isAgency === option}
                    onChange={handleChange}
                    className="w-4 h-4 accent-[#6C25FF]"
                    required
                  />
                  <span className="text-sm group-hover:text-[#6C25FF]">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-[calc(100%-3rem)] bg-[#6C25FF] text-white font-semibold py-3.5 rounded-md absolute bottom-8 left-6 shadow-md active:scale-[0.98] transition-all"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
