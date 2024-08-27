import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(null); // Initial state is null
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    auth().catch(() => {
      setIsAuthorized(false);
      setLoading(false);
    });
  }, []);

  const refreshToken = async () => {
    const refreshToken = Cookies.get(REFRESH_TOKEN);
    try {
      const res = await api.post("/api/token/refresh/", {
        refresh: refreshToken,
      });
      if (res.status === 200) {
        Cookies.set(ACCESS_TOKEN, res.data.access); // Set token with expiry
        setIsAuthorized(true);
      } else {
        setIsAuthorized(false);
      }
    } catch (error) {
      setIsAuthorized(false);
    }
    setLoading(false); // Ensure loading is set to false after attempting refresh
  };

  const auth = async () => {
    const token = Cookies.get(ACCESS_TOKEN);
    if (!token) {
      setIsAuthorized(false);
      setLoading(false);
      return;
    }
    const decoded = jwtDecode(token);
    const tokenExpiration = decoded.exp;
    const now = Date.now() / 1000;

    if (tokenExpiration < now) {
      await refreshToken();
    } else {
      setIsAuthorized(true);
      setLoading(false);
    }
  };

  console.log('isAuthorized:', isAuthorized);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthorized ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

