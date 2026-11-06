exports.create = (req, res) => {

    const { fullName, email, programme } = req.body;

    console.log("Application received:", {
        fullName,
        email,
        programme
    });

    res.send(`Thank you, ${fullName}.`);

};