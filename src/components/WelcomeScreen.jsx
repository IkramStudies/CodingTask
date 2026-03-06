export default function WelcomeScreen({ setScreen }) {
  return (
    <div className="flex flex-col justify-end h-full p-6 pb-12 transition-all">
      <h1 className="text-3xl font-bold text-[#1d1d1d] mb-3">
        Welcome to PopX
      </h1>
      <p className="text-[#6c6c6c] text-lg mb-8 leading-snug">
        Lorem ipsum dolor sit amet,
        <br />
        consetetur adipiscing elit.
      </p>
      <button
        onClick={() => setScreen("signup")}
        className="w-full bg-[#6C25FF] text-white font-semibold py-4 rounded-md mb-4 shadow-lg active:scale-[0.98] transition-all"
      >
        Create Account
      </button>
      <button
        onClick={() => setScreen("login")}
        className="w-full bg-[#6C25FF26] text-[#1d1d1d] font-semibold py-4 rounded-md active:scale-[0.98] transition-all"
      >
        Already Registered? Login
      </button>
    </div>
  );
}
