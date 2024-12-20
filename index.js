
import inquirer from 'inquirer';
import qr from"qr-image"
import fs from "fs"

inquirer
  .prompt([{
    message : "Type your URL here:",
    name: "URL"
  },
])
  .then((answers) => 
 {
   const url=answers.URL
    
     var qr_svg = qr.image(url);
     qr_svg.pipe(fs.createWriteStream('qr_myimage.png'));


fs.writeFile("msg.txt", url, err => {
    if (err) {
      console.error(err);
    } else {
      console.log("The file has been saved");
    }
 
  })
})
  .catch((error) => {
    if (error.isTtyError) {
     
    } else {
      
    }
  });