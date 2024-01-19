let StartFunc = () => {
    console.log(`Listening in some local port : 7016`);
    console.log(`http server at http://localhost:7016`);

    if ("KS_SQLITE_PASSWORD" in process.env === false) {
        console.log("KS_SQLITE_PASSWORD not found in .env file")
    };

    process.env.UUID = uuidv4();
};

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

export { StartFunc };