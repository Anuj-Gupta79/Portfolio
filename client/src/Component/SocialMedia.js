import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const SocialMedia = () => {
  return (
    <div
      className="d-flex flex-column p-2 border"
      style={{
        width: "60px",
        marginTop: "200px",
        backgroundColor: "#e6e6e6",
        borderRadius: "5px",
        zIndex: "10",
      }}
    >
      <a href="https://www.linkedin.com/in/guptaanuj9/">
        <LinkedInIcon
          sx={{ color: "black" }}
          fontSize="large"
          style={{ margin: "5px" }}
        />
      </a>
      <a href="https://www.instagram.com/tas_1_1/">
        <InstagramIcon
          sx={{ color: "black" }}
          fontSize="large"
          style={{ margin: "5px" }}
        />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100080228711772">
        <FacebookIcon
          sx={{ color: "black" }}
          fontSize="large"
          style={{ margin: "5px" }}
        />
      </a>
      <a href="https://twitter.com/gupta_anuj89">
        <TwitterIcon
          sx={{ color: "black" }}
          fontSize="large"
          style={{ margin: "5px" }}
        />
      </a>
    </div>
  );
};

export default SocialMedia;
