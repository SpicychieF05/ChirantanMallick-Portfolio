import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function SimpleExperience() {
  const testCerts = [
    {
      title: "AWS Certificate",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429355/AWS-Forge-certificate_dcdub1.jpg",
    },
    {
      title: "Google Certificate",
      image:
        "https://res.cloudinary.com/dlxybta5a/image/upload/v1754429363/Google-Gen-Ai-Certificate_hhqwjr.jpg",
    },
  ];

  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#0f172a",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "white", marginBottom: "30px" }}>
        Simple Certificate Test
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {testCerts.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
            style={{
              backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: "12px",
              padding: "10px",
              aspectRatio: "4/3",
              overflow: "hidden",
            }}
          >
            <div
              style={{ color: "white", marginBottom: "10px", fontSize: "14px" }}
            >
              <Award
                size={16}
                style={{ display: "inline", marginRight: "5px" }}
              />
              {cert.title}
            </div>
            <img
              src={cert.image}
              alt={cert.title}
              style={{
                width: "100%",
                height: "calc(100% - 30px)",
                objectFit: "cover",
                borderRadius: "8px",
                border: "2px solid #334155",
              }}
              onLoad={() => {
                console.log(`✅ SIMPLE: ${cert.title} loaded successfully`);
              }}
              onError={(e) => {
                console.error(
                  `❌ SIMPLE: ${cert.title} failed to load:`,
                  cert.image
                );
                e.currentTarget.style.border = "2px solid red";
                e.currentTarget.style.backgroundColor = "#dc2626";
              }}
            />
          </motion.div>
        ))}
      </div>

      <div style={{ marginTop: "40px", color: "white" }}>
        <h2>Manual Image Test:</h2>
        <img
          src="https://res.cloudinary.com/dlxybta5a/image/upload/v1754429355/AWS-Forge-certificate_dcdub1.jpg"
          alt="Direct test"
          style={{
            width: "300px",
            height: "200px",
            objectFit: "cover",
            marginTop: "10px",
          }}
          onLoad={() => console.log("✅ DIRECT: Image loaded")}
          onError={() => console.error("❌ DIRECT: Image failed")}
        />
      </div>
    </div>
  );
}
