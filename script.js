function addmore()
{
    document.getElementById('error').innerHTML="";
    let name= document.getElementById('name').value;
    if(name=='')
    {
        document.getElementById('error').innerHTML="please enter value";
    }
    else{
        let box=document.getElementById('box');
        let li=document.createElement('li');
        li.textContent= name;
        let a= document.createElement('a');
        a.textContent="x";
        a.href="javascript:void(0)";
        a.className="remove";
        li.appendChild(a);
        let pos=box.firstElementChild;
        // console.log(pos);
        if(pos==null)
        {
            box.appendChild(li);
        }
        else{
            box.insertBefore(li,pos);
        }
        
    }
    document.getElementById('name').value="";
}
// addd
let bn= document.querySelector('ul');
bn.addEventListener('click',function(e)
{
    let box= document.getElementById('box');
    // console.log(e.target);
    let li= e.target.parentNode;
    // let li=e.target.firstElementChild;
    box.removeChild(li);
});
//addd ss
