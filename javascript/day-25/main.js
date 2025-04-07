fetch("https://api.github.com/users/aestheticsuraj234" , {
    method: "POST",
  
})
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.error("Error:", error);
}
)

// async / await syntax

async function fetchGithubUserData(){
try {
    const res = await fetch("https://api.github.com/users/aestheticsuraj234")
    const data = await res.json()
    console.log(data)
    
} catch (error) {
    console.error("Error:", error);
}
}

fetchGithubUserData()