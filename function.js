const search=prompt("search now")
// Function to find members by blood group and last_donate
const bloodGroup=(blood)=>{
   const bloodMember= blood_Donatio.filter((data)=>
   data.blood_group=== blood ||
   data.last_donate ===blood ||
   data.cell===blood
   )
   return bloodMember;

}

