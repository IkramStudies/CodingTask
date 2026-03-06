export default function ProfileScreen({ setScreen, userData }) {
  return (
    <div className="h-full flex flex-col bg-[#f7f8f9]">
      <header className="p-5 bg-white shadow-sm border-b border-gray-100">
        <h3 className="text-xl font-medium text-[#1d1d1d]">Account Settings</h3>
      </header>

      <div className="p-5 flex-grow">
        <div className="flex items-center gap-5 mb-8">
          {/* Avatar Section */}
          <div className="relative">
            <img
              src="https://i.pravatar.cc/150?u=marry"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border border-gray-200"
            />
            <div className="absolute bottom-1 right-1 bg-[#6C25FF] p-1.5 rounded-full border-2 border-white">
              <svg
                className="w-3.5 h-3.5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>

          {/* DYNAMIC CONTENT HERE */}
          <div className="overflow-hidden">
            <h4 className="font-bold text-[#1d1d1d] text-lg truncate">
              {userData.fullName || "Guest User"}
            </h4>
            <p className="text-sm text-[#1d1d1d] opacity-80 truncate">
              {userData.email || "No email provided"}
            </p>
          </div>
        </div>

        <p className="text-sm text-[#1d1d1d] leading-relaxed border-t border-dashed border-[#cbcbcb] pt-6 opacity-90">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>

      <button
        onClick={() => setScreen("signup")}
        className="m-6 text-xs text-[#6C25FF] font-bold self-start hover:underline"
      >
        LOGOUT
      </button>
    </div>
  );
}
