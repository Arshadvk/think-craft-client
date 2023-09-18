import { useState, useEffect } from "react";
import advisorAxios from "../axios/advisorAxios";
import studentAxios from "../axios/studentAxios";
import reviewerAxios from "../axios/reviewerAxios";
import { useErrorHandler } from "./ErrorHandler";
import { toast } from "react-toastify";

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
        if (user === "student") {
          response = await studentAxios.get("/profile");
        
        } else if (user === "advisor") {
          response = await advisorAxios.get("/profile");
        
        } else if (user === "reviewer") {
          console.log("userrrrr");
          response = await reviewerAxios.get("/profile");
         
        }

        setUserData(response.data);
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
        toast.success('Profile update successfully.');
      } else if (user === "reviewer") {
        response = await reviewerAxios.put("/edit-profile", { userData });
        toast.success('Profile update successfully.');
      } else if (user === "advisor") {
        response = await advisorAxios.put("/edit-profile", { userData }); 
         toast.success('Profile update successfully.');
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
  async function editPassword(user, value) {
    try {
      let response;
      if (user === "student") {
        response = await studentAxios.put("/update-password", { value });
        toast.success('password update successfully.');
      } else if (user === "reviewer") {
        response = await reviewerAxios.put("/update-password", { value });
        toast.success('password update successfully.');
      } else if (user === "advisor") {
        response = await advisorAxios.put("/update-password", { value }); 
         toast.success('password update successfully.');
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

  return { updateProfile , editPassword};
}

