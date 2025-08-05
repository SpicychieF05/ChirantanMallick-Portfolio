export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;

      // Validate input
      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          error:
            "Missing required fields: name, email, and message are required",
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          error: "Invalid email format",
        });
      }

      // Here you would typically:
      // 1. Send email using a service like SendGrid, Resend, or EmailJS
      // 2. Store in database
      // 3. Send notification

      // For now, just log and return success
      console.log("Contact form submission:", { name, email, message });

      return res.status(200).json({
        success: true,
        message: "Thank you for your message! I will get back to you soon.",
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Contact form error:", error);
      return res.status(500).json({
        success: false,
        error: "Internal server error. Please try again later.",
      });
    }
  }

  // Method not allowed
  res.status(405).json({
    success: false,
    error: "Method not allowed. Use POST to submit contact form.",
  });
}
