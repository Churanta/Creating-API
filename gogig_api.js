import mysql2 from 'mysql2';
import express from 'express';

const connection = mysql2.createConnection({
    host: "localhost",
    database: "gogig",
    user: "root",
    password: "Kanasona!23"
});

const app = express();

const PORT = 5000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`SERVER : http://localhost:${PORT}`);
    connection.connect((err) => {
        if (err) throw err;
        console.log("Database Connected");
    });
});

app.post("/add-user", (req, res) => {
    const {
        userId,
        name,
        phone,
        email,
        gender,
        dob,
        languages,
        location,
        devices,
        maritalStatus,
        differentlyAbled,
        workExperience,
        industriesWorked,
        lastCompany,
        lastRole,
        personalIncomeRange,
        householdIncomeRange,
        whatsappNotification,
        currentStatus,
        highestQualification,
        fieldOfStudy,
        yearOfPassing,
        collegeName,
        availability,
        workLocation,
        travelPreference,
        availabilityTimeline,
        modeOfCommunication,
        skillSets
    } = req.body;

    const sql_query = `
        INSERT INTO UserDetails (
            userId,
            name,
            phone,
            email,
            gender,
            dob,
            languages,
            location,
            devices,
            maritalStatus,
            differentlyAbled,
            workExperience,
            industriesWorked,
            lastCompany,
            lastRole,
            personalIncomeRange,
            householdIncomeRange,
            whatsappNotification,
            currentStatus,
            highestQualification,
            fieldOfStudy,
            yearOfPassing,
            collegeName,
            availability,
            workLocation,
            travelPreference,
            availabilityTimeline,
            modeOfCommunication,
            skillSets
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
        userId,
        name,
        phone,
        email,
        gender,
        dob,
        languages,
        location,
        devices,
        maritalStatus,
        differentlyAbled,
        workExperience,
        industriesWorked,
        lastCompany,
        lastRole,
        personalIncomeRange,
        householdIncomeRange,
        whatsappNotification,
        currentStatus,
        highestQualification,
        fieldOfStudy,
        yearOfPassing,
        collegeName,
        availability,
        workLocation,
        travelPreference,
        availabilityTimeline,
        modeOfCommunication,
        skillSets
    ];

    connection.query(sql_query, values, (error, result) => {
        if (error) throw error;
        console.log("Record added successfully!");
        res.status(201).json({ message: "Record added successfully!" });
    });
});
