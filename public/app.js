

document.getElementById('fetch-btn').addEventListener('click',()=>{
    fetch('/Header').then(response=>
        {if(!response.ok){
            throw new Error('Network Response was not okay');
        }
        return response.json();
   }   )
   .then(
    data=>{
        const output=`
       <ul>
                        <li><strong>IP Address:</strong> ${data.ipAddress}</li>
                        <li><strong>Language:</strong> ${data.language}</li>
                        <li><strong>Software:</strong> ${data.software}</li>
                    </ul>`
        document.getElementById('output').innerHTML=output;

    }
   )
   .catch(error=>{
    document.getElementById('output').textContent=`Error Fetching the data:${error.message}`;

   });
});