// In this lecture, we learn about stream and buffer

const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/data.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/outputData.txt`);

// ourReadStream.on('data', (data) => {
//     ourWriteStream.write(data);
// });

ourReadStream.pipe(ourWriteStream);