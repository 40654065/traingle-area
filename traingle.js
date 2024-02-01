function ans()
{
    let a =parseFloat(document.getElementById('base').value);
    let b =parseFloat(document.getElementById('height').value);

    let c=parseFloat(0.5*a*b);

    document.getElementById('disp').innerText="The area of traingle is:" +c;
}
