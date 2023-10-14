import api from "@/common/utils/api";

const login = async (userData) => {
  const response = await api().post("/api/authenticate", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  login,
};

export default authService;