const { response } = require("express")

document.getElementById('fetch-btn').addEventListener('click',()=>{
    fetch('/Header').then(response=>
        {if(!response.ok){
            throw new Error('Network Response was not okay');
        }
        return response.json();
   }   )
   .then(
    data=>{
        const output=`Ip Address:${data.ipAddress} 
        Language:${data.language}
        Software:${data.software}`;
        document.getElementById('output').textContent=output;

    }
   )
   .catch(error=>{
    document.getElementById('output').textContent=`Error Fetching the data:${error.message}`;

   });
});