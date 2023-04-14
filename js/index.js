const fun1 = () =>{
    alert("호출됐어요~");
}
//텍스트 입력시 top숫자 바꿔줘야함 !!
portfolio = () => {
    const portfoliobtn = document.getElementById("portfolio")
    window.scrollTo({ top:200, behavior:"smooth"});
}
resume = () => {
    window.scrollTo({ top:1000, behavior:"smooth"});
}
contact = () => {
    window.scrollTo({ top:3000, behavior:"smooth"});
}