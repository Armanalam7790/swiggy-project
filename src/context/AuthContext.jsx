import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("swiggy_user");
    return saved ? JSON.parse(saved) : null;
  });

  const signup = (name, email, password) => {
    // Get existing users
    const users = JSON.parse(localStorage.getItem("swiggy_users") || "[]");

    // Check if email already exists
    if (users.find((u) => u.email === email)) {
      throw new Error("Email already registered. Please login.");
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("swiggy_users", JSON.stringify(users));

    const loggedIn = { name, email };
    setUser(loggedIn);
    localStorage.setItem("swiggy_user", JSON.stringify(loggedIn));
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("swiggy_users") || "[]");
    const found = users.find((u) => u.email === email && u.password === password);

    if (!found) {
      throw new Error("Invalid email or password.");
    }

    const loggedIn = { name: found.name, email: found.email };
    setUser(loggedIn);
    localStorage.setItem("swiggy_user", JSON.stringify(loggedIn));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("swiggy_user");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);