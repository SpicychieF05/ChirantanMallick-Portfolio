const ImageTest = () => {
  const testImages = [
    {
      name: "AWS Certificate",
      url: "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429355/AWS-Forge-certificate_dcdub1.jpg",
    },
    {
      name: "Profile Image",
      url: "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429079/Chirantan-mallick-hero-image_sdw6ld.jpg",
    },
    {
      name: "Project Image",
      url: "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429205/salaryscope-project_aivyxb.png",
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>React Image Test</h1>
      {testImages.map((img, index) => (
        <div
          key={index}
          style={{
            margin: "20px 0",
            border: "1px solid #ccc",
            padding: "10px",
          }}
        >
          <h3>{img.name}</h3>
          <p style={{ fontSize: "12px", wordBreak: "break-all" }}>{img.url}</p>
          <img
            src={img.url}
            alt={img.name}
            style={{
              width: "200px",
              height: "150px",
              objectFit: "cover",
              border: "2px solid #ddd",
            }}
            onLoad={() => console.log(`✅ ${img.name} loaded successfully`)}
            onError={(e) => {
              console.error(`❌ ${img.name} failed to load:`, img.url);
              e.currentTarget.style.border = "2px solid red";
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageTest;
