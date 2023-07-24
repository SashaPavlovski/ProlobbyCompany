import axios from "axios";

//Sends the user's ID to check if he has permission to log in
export const GetRolesAsync = async (userID) => {
  try {
    let result = await axios.get(
      `http://localhost:7251/api/roles/roles/${userID}`
    );
    if (result.status === 200) {
      return result.data;
    } else {
      alert(result.data);
      return {};
    }
  } catch (error) {
    alert("We encountered a problem, please contact the system administrator");
  }
};
