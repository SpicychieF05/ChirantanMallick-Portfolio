export default function Experience() {
  return (
    <div>
      <h2>Experience</h2>

      {/* Most basic test possible */}
      <div>
        <h3>Basic Image Test</h3>
        <img
          src="https://res.cloudinary.com/dlxybta5a/image/upload/v1754429355/AWS-Forge-certificate_dcdub1.jpg"
          alt="AWS Certificate"
          width="300"
          height="200"
          onLoad={() => console.log("✅ Basic image loaded!")}
          onError={(e) => {
            console.error("❌ Basic image failed");
            console.log("Error event:", e);
          }}
        />
      </div>

      {/* Test with inline styles only */}
      <div style={{ marginTop: "20px" }}>
        <h3>Inline Styles Test</h3>
        <img
          src="https://res.cloudinary.com/dlxybta5a/image/upload/v1754429355/AWS-Forge-certificate_dcdub1.jpg"
          alt="AWS Certificate"
          style={{
            width: "300px",
            height: "200px",
            display: "block",
            border: "2px solid green",
          }}
          onLoad={() => console.log("✅ Inline styles image loaded!")}
          onError={() => console.error("❌ Inline styles image failed")}
        />
      </div>

      {/* Test placeholder image */}
      <div style={{ marginTop: "20px" }}>
        <h3>Placeholder Test</h3>
        <img
          src="https://via.placeholder.com/300x200/0066cc/ffffff?text=TEST+IMAGE"
          alt="Test"
          width="300"
          height="200"
          onLoad={() => console.log("✅ Placeholder loaded!")}
          onError={() => console.error("❌ Placeholder failed")}
        />
      </div>
    </div>
  );
}
