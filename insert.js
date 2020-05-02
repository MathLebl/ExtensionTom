const origin = document.querySelector('html').innerHTML;
console.log(origin)
const contentRight = '<div style="height:800px; width:30%; margin-top:100px; margin: 10px; border:1px solid blue; border-radius:20px; position:fixed; right: 0px"><iframe src="https://www.sofoot.com/" width=100% height=100%></iframe></div>'



const content = '<div style="display:flex; position:relative">' + '<div style="width:70%;">' + origin + '</div>' + contentRight + '</div>'


document.body.innerHTML = content;

