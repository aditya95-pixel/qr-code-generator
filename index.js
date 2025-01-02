/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import { createWriteStream } from 'fs';
inquirer
  .prompt([
    {
        name: 'url',
        message: 'Enter URL:',
        type: 'input'
    }
  ])
  .then((answers) => {
        var qr_png=qr.image(answers.url, { type: 'png' });
        qr_png.pipe(createWriteStream('qr_img1.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
    } else {
    }
});

