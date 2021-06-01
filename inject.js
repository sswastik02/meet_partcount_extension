function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function lognames(s) {
    names=[]
    x=document.getElementsByClassName(s)
    for(var i=0;i<x.length;i++){
        names.push(x[i].innerHTML)
    }
    return names
}

function check(names) {
    x=document.getElementsByClassName('ZjFb7c')
    for(var i=0;i<x.length;i++) {
        for(var j=0;j<names.length;j++){
            if(x[i].innerHTML == names[j]){
                names.splice(j,1)
            }
        }
    }
    return names
}
(function() {
    var x='';
    var names=check(['swastik sarkar','srishti sarkar'])
    for(var i=0;i<names.length;i++) {
        x+=names[i]+' ';
    }
    
    
	// just place a div at top right
	div = document.createElement('div');
    div.style.backgroundColor='rgba(0,0,245,0.05)';
    div.style.backdropFilter='saturate(100%) contrast(45%) brightness(130%) blur(10px)';
	div.style.border='1px solid #fff';
    div.style.borderRadius='15px';
    div.style.boxShadow='0 0 1rem 0 rgba(0,0,0,0.2)';
    div.style.width='50vw';
    div.style.height='250px'
    div.style.zIndex=999;
    div.style.position='absolute';
    div.style.top='20px';
    div.style.left='50vw';
    div.style.transform='translateX(-50%)';
    
    X= document.createElement('div');
    X.style.fontWeight='15px';
    X.style.fontSize='15px';
    X.style.top = '10px';
    X.style.position='relative';
    X.style.left='95%';
    X.style.fontColor='white';
    X.innerHTML='X';
    X.style.cursor='pointer'

    nameList=document.createElement('div')
    nameList.style.position='relative';
    nameList.style.top='90%'
    nameList.style.fontColor='#191970';
    nameList.style.top='60%'
    nameList.style.left='10px'
    nameList.style.color='#191970'

    logn=document.createElement('button')
    logn.onclick= ()=> {
        // click on participant list gmeet
        document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.rG0ybd.xPh1xb.P9KVBf.LCXT6 > div.TqwH9c > div.SZfyod > div > div > div:nth-child(2) > span > button").click()
        chrome.storage.sync.set({'names':lognames('ZjFb7c')}, async ()=>{
            console.log('recorded')
            console.log(lognames('ZjFb7c'))
            await sleep(500)
            // wait for function to log names
            document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.rG0ybd.xPh1xb.P9KVBf.LCXT6 > div.TqwH9c > div.SZfyod > div > div > div:nth-child(2) > span > button").click()
        })
 }
    logn.innerHTML='RECORD'
    logn.style.width='40vw'
    logn.style.height='20px'
    logn.style.position='relative'
    logn.style.left='50%'
    logn.style.top='25%'
    logn.style.transform='translate(-50%,-50%)'
    logn.style.background='transparent'
    logn.style.border='2px solid #191970'
    logn.style.cursor='pointer'
    logn.style.color='#191970'
    
    chk=document.createElement('button')
    chk.onclick= ()=> {
        document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.rG0ybd.xPh1xb.P9KVBf.LCXT6 > div.TqwH9c > div.SZfyod > div > div > div:nth-child(2) > span > button").click()
        chrome.storage.sync.get('names',async (data) =>{
            nameList.innerHTML=check(data.names)
            await sleep(500)
            document.querySelector("#ow3 > div.T4LgNb > div > div:nth-child(9) > div.crqnQb > div.rG0ybd.xPh1xb.P9KVBf.LCXT6 > div.TqwH9c > div.SZfyod > div > div > div:nth-child(2) > span > button").click()
        })
        
    }
chk.innerHTML='CHECK'
chk.style.width='40vw'
chk.style.height='20px'
chk.style.position='relative'
chk.style.left='50%'
chk.style.top='60%'
chk.style.transform='translate(-50%,-50%)'
chk.style.background='transparent'
chk.style.border='2px solid #191970'
chk.style.cursor='pointer'
chk.style.color='#191970'
    


    div.appendChild(chk)
    div.appendChild(logn)
    div.appendChild(X);
    div.appendChild(nameList)
    
    document.body.appendChild(div);
    X.addEventListener('click',(()=> {
        document.body.removeChild(div);
    }))

})();