const fs = require("fs");

const removeLogs = () =>{
    const target = "./logs";
    if (fs.existsSync(target)){
        process.chdir(target);
        fs.readdir(process.cwd(), (error, files) => {
            files.forEach((file) => {
                fs.unlink(file, (error) =>
                error ? console.error (`Error Deleting a File '${file}'`) : console.log(`Deleting files...'${file}'`)
                );

            });

        });

    }

};

removeLogs();
