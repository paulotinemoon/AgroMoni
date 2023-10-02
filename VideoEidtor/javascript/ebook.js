












//////////////////////////////////////
// THIS FUNCTION IS FOR COMMENT AREA//
let commentsBtn=document.querySelector('.ebook--button')
commentsBtn.addEventListener('click',showComments)
function showComments(){
    const getTextArea=document.querySelector('.ebook--txtArea')
    const get_Name_Input=document.querySelector('.text-nameInputComment1')
    const get_email_Input=document.querySelector('.text-email-InputComment2')

    // show those who commented in the webpage!!!!!!
    let getComments = document.querySelector(".EBOOK--COMMENTS")
    let createNewElement=document.createElement('p')
    let getComments2=document.querySelector(".EBOOK--COMMENTS2")
    getComments2.append(createNewElement)


    const inputName=get_Name_Input.value
    const inputEmail=get_email_Input.value

    const textAreaComments=getTextArea.value
    createNewElement.innerText=textAreaComments
    const checkComments= getComments.innerHTML=inputName+"\n"+ inputEmail
   
    // if(checkComments===""){
    //     getComments.innerHTML="PLS,enter a comment!!!"
    //     console.log("pls,enter comment!!!")
    // }
    // else{
    //     getComments.innerHTML+=inputName+"\n"+ inputEmail + "\n"+ textAreaComments
    // }
    console.log(getComments2)
}