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

