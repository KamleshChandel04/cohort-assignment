// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs").promises;

async function readFileContentAndWriteContent() {
    try {
        // Read the file content
        let fileData = await fs.readFile("log.txt", "utf-8");

        // Remove extra spaces
        let cleanedData = fileData.trim().replace(/\s+/g, ' ');

        // Write the cleaned content back to the file
        await fs.writeFile("log.txt", cleanedData);

        console.log("File cleaning done");
    } catch (error) {
        console.error("Error:", error);
    }
}

readFileContentAndWriteContent();
