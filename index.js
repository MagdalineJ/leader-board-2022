

// changing bg color when mouse is hoovered
function bgChange(titleID,sectionID){
    const titles=document.getElementById(titleID);
titles.style.color='green';
document.getElementById(sectionID).style.backgroundColor='rgba(45,207,16,0.1)';

}
// changing bg color as default
function bgDefault(titleID,sectionID){
    const titles=document.getElementById(titleID);
    titles.style.color='rgb(97, 50, 208)';
    document.getElementById(sectionID).style.backgroundColor='white';
    
}

// creating and managing a list
document.getElementById('btn-id').addEventListener('click',function(){
   

         const newList= document.createElement('li');
        // console.log(newList)
       
            let input=document.getElementById('input-field').value;
          

            

            if((input=="JavaScript Complete Guide 2022") ||( input=="PhotoShop Complete Guide 2022")){
                newList.innerText=input;
                const orderedList=document.getElementById('list');

            // console.log(orderedList
            if(orderedList.childElementCount<3 ){
                      orderedList.appendChild(newList);
                document.getElementById('input-field').value='';
            }else {
                document.getElementById('input-field').value='you have been already enrolled!!!';
                document.getElementById('input-field').style.color="red";
                document.getElementById('btn-id').setAttribute('disabled','disabled');
           
            }
        }
})