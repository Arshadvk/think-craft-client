import { useState, useEffect } from "react";
import advisorAxios from "../axios/advisorAxios";
import studentAxios from "../axios/studentAxios";
import reviewerAxios from "../axios/reviewerAxios";
import { useErrorHandler } from "./ErrorHandler";

export function useProfileDetails({ user, setUserData }) {
  const [isLoading, setIsLoading] = useState(true);
  const {
    studentAuthenticationHandler,
    advisorAutheticationHandler,
    reviewerAutheticationHandler,
  } = useErrorHandler();

  useEffect(() => {
    async function fetchProfile() {
      setIsLoading(true);

      try {
        let response;
        console.log("hello");
        console.log(user);
        if (user === "student") {
          response = await studentAxios.get("/profile");
        } else if (user === "advisor") {
          response = await advisorAxios.get("/profile");
        } else if (user === "reviewer") {
          console.log("userrrrr");
          response = await reviewerAxios.get("/profile");
        }

        setUserData(response.data.data);
      } catch (error) {
        if (user === "student") {
          studentAuthenticationHandler(error);
        } 
        if (user === "advisor") {
          advisorAutheticationHandler(error);
        } 
        if (user === "reviewer") {
          console.log("error" , error);
          
          reviewerAutheticationHandler(error);
        }
        console.error("Error fetching profile details:", error);
      }

      setIsLoading(false);
    }

    fetchProfile();
  }, [user]);

  return { isLoading };
}

export function useEditProfile() {
  const {
    studentAuthenticationHandler,
    advisorAutheticationHandler,
    reviewerAutheticationHandler,
  } = useErrorHandler();

  async function updateProfile(user, userData) {
    try {
      let response;
      if (user === "student") {
        response = await studentAxios.put("/edit-profile", { userData });
      } else if (user === "reviewer") {
        response = await reviewerAxios.put("/edit-profile", { userData });
      } else if (user === "advisor") {
        response = await advisorAxios.put("/edit-profile", { userData });
      }
      console.log(response);
    } catch (error) {
      if (user === "student") {
        studentAuthenticationHandler(error);
      } else if (user === "advisor") {
        advisorAutheticationHandler(error);
      } else if (user === "reviewer") {
        reviewerAutheticationHandler(error);
      }
    }
  }

  return { updateProfile };
}