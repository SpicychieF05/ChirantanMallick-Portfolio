const DirectImageTest = () => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#0f172a",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1>Direct Image Test</h1>

      <div style={{ marginBottom: "20px" }}>
        <h2>Profile Image:</h2>
        <img
          src="https://res.cloudinary.com/dlxybta5a/image/upload/v1754429079/Chirantan-mallick-hero-image_sdw6ld.jpg"
          alt="Profile"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            border: "2px solid white",
          }}
          onLoad={() => console.log("✅ Profile image loaded")}
          onError={(e) => {
            console.error("❌ Profile image failed");
            e.currentTarget.style.border = "2px solid red";
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Certificate Image:</h2>
        <img
          src="https://res.cloudinary.com/dlxybta5a/image/upload/v1754429355/AWS-Forge-certificate_dcdub1.jpg"
          alt="Certificate"
          style={{
            width: "200px",
            height: "150px",
            objectFit: "cover",
            border: "2px solid white",
          }}
          onLoad={() => console.log("✅ Certificate image loaded")}
          onError={(e) => {
            console.error("❌ Certificate image failed");
            e.currentTarget.style.border = "2px solid red";
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Project Image:</h2>
        <img
          src="https://res.cloudinary.com/dlxybta5a/image/upload/v1754429205/salaryscope-project_aivyxb.png"
          alt="Project"
          style={{
            width: "200px",
            height: "150px",
            objectFit: "cover",
            border: "2px solid white",
          }}
          onLoad={() => console.log("✅ Project image loaded")}
          onError={(e) => {
            console.error("❌ Project image failed");
            e.currentTarget.style.border = "2px solid red";
          }}
        />
      </div>

      <div style={{ marginTop: "30px" }}>
        <a href="/" style={{ color: "#64ffda", textDecoration: "underline" }}>
          Back to Home
        </a>
        {" | "}
        <a
          href="/my-side"
          style={{ color: "#64ffda", textDecoration: "underline" }}
        >
          Go to My-Side
        </a>
      </div>
    </div>
  );
};

export default DirectImageTest;
