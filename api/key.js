module.exports = (req, res) => {
    res.status(200).json({
      secretCode: "nazilacrash",
      description: "PREMIUM KEY",
      lastUpdated: "2025-04-20",
      author: "Nazila",
      status: "Active",
      license: "MIT",
      version: "1.0.0"
    });
  };