

export async function getLatestRepos(token:string | undefined){

    try{
        if(token){
        const response = await
         fetch('https://api.github.com/users/DikshantAgarwal/repos?sort=updated',{
            headers:{
                Authorization:`token ${token}`,
                Accept: 'application/vnd.github+json'
            }
        });
        const data = await response.json()
        console.log(data);
        return data.splice(0,6);
    }

    }
    catch(error){
          console.error(error);  
    }
}