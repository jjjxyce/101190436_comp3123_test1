const fs = require("fs");

const createLogs = () => {
    const target = "./logs";
    if (!fs.existsSync(target)){
        fs.mkdir(target);
    }

    process.chdir(target);
    for (let i = 0; i < 10; i++){
        fs.writeFile(`log${i}.txt`, `log file number ${i}`, (error) =>
        error ? console.error(`log${i}.txt`) : console.log(`log${i}.txt`)

        );
    }

};

createLogs();