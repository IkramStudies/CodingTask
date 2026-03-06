import React, { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import SignUpScreen from "./components/SignUpScreen";
import LoginScreen from "./components/LoginScreen";
import ProfileScreen from "./components/ProfileScreen";

export default function App() {
  // 1. Starts at "welcome" screen
  const [screen, setScreen] = useState("welcome");

  // 2. Initialize with empty strings so the user HAS to fill them
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    companyName: "",
    isAgency: "Yes",
  });

  // Helper to handle logout and clear data
  const handleLogout = () => {
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      companyName: "",
      isAgency: "Yes",
    });
    setScreen("welcome");
  };

  return (
    <div className="min-h-screen bg-[#e5e5e5] flex justify-center items-center p-4">
      {/* Mobile Frame */}
      <div className="w-full max-w-[375px] h-[700px] bg-white shadow-2xl overflow-hidden relative border border-gray-300 rounded-[40px]">
        {/* WELCOME SCREEN - This shows first */}
        {screen === "welcome" && <WelcomeScreen setScreen={setScreen} />}

        {/* SIGNUP SCREEN */}
        {screen === "signup" && (
          <SignUpScreen
            setScreen={setScreen}
            formData={formData}
            setFormData={setFormData}
          />
        )}

        {/* LOGIN SCREEN */}
        {screen === "login" && (
          <LoginScreen
            setScreen={setScreen}
            formData={formData}
            setFormData={setFormData}
          />
        )}

        {/* PROFILE SCREEN - Shows the data from the state */}
        {screen === "profile" && (
          <ProfileScreen setScreen={handleLogout} userData={formData} />
        )}
      </div>
    </div>
  );
}
