import { useState, useEffect } from "react";
import api from "../api"; // Assuming you have an api instance set up
import { useNavigate } from "react-router-dom";

const ProfileUpdate = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState(""); // New state for name
  const [lastname, setLastName] = useState(""); // New state for name
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(""); // State for error handling
  const [success, setSuccess] = useState(""); // State for success message
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch existing profile data on component mount
    const fetchProfile = async () => {
      try {
        const response = await api.get('api/userprofile/');
        const profileData = response.data;
        console.log("current data", profileData)
        setUsername(profileData.user.username);
        setEmail(profileData.user.email);
        setFirstName(profileData.firstname);
        setLastName(profileData.lastname);
        setAddress(profileData.address);
        setPhoneNumber(profileData.phone_number);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("user[email]", email);
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("address", address);
    formData.append("phone_number", phoneNumber);

    try {
      const response = await api.put("api/userprofile/", formData);
      setSuccess("Profile updated successfully!");
      console.log("Profile updated:", response.data);
      navigate("/profile"); 
    } catch (error) {
      console.error("Profile update error:", error);
      setError("An error occurred while updating the profile.");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white px-16 py-8 rounded-lg shadow-lg mt-10">
        <h1 className="text-2xl font-bold mb-6 text-center">Update Profile</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        
        <div className="mb-4">
          <label>Username:</label>
          <input
            className="w-full px-4 py-3 border rounded-lg"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>

        <div className="mb-4">
          <label>Email:</label>
          <input
            className="w-full px-4 py-3 border rounded-lg"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>

        <div className="mb-4">
          <label>Firstname:</label>
          <input
            className="w-full px-4 py-3 border rounded-lg"
            type="text"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Firstname"
          />
        </div>

        <div className="mb-4">
          <label>Lastname:</label>
          <input
            className="w-full px-4 py-3 border rounded-lg"
            type="text"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Lastname"
          />
        </div>

        <div className="mb-4">
          <label>Address:</label>
          <input
            className="w-full px-4 py-3 border rounded-lg"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
          />
        </div>

        <div className="mb-4">
          <label>Phone Number:</label>
          <input
            className="w-full px-4 py-3 border rounded-lg"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone Number"
          />
        </div>

        <button
          className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-lg focus:outline-none"
          type="submit"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileUpdate;
