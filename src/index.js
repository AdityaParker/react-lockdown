import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

// function Greetings(){
//   return <div>
//     <ComponentOne/>
//     <ComponentTwo/>
//   </div>
  
// }

// const Greetings=()=>{
//   return React.createElement('h1',{},'Hello Budd.')
// }

// nesting of components


// const ComponentOne=()=>{
//   return <h1>Hello Aditya!</h1>
// }

// const ComponentTwo=()=>{
//   return <p>This is another component!</p>
// }



// projectOne 


const BookList=()=>{
return <>
 <Nav/>
<section className="bookList">
 
 <Book></Book>
 <Book></Book>
 <Book></Book>
 <Book></Book>
 <Book></Book>
 <Book></Book>
 <Book></Book>

</section>
</>
}

const Book=()=>{
return <article className="book">
   <Image/>
   <Title/>
   <Author/>
</article>
}

const Nav=()=>{

  return <nav style={{padding:'3rem',fontSize:'3rem',color:'blue',background:'black',textAlign:'center'}}>
    React-Project #1
  </nav>
}
const Image=()=><img src="https://images-eu.ssl-images-amazon.com/images/I/71aFt4%2BOTOL._AC_UL200_SR200,200_.jpg" alt=""/>


const Title=()=><h2>The Alchemist Paperback – 17 October 2005</h2>

const Author=()=><h5 style={{color:'#f00',letterSpacing:'.25rem'}}>by Paulo Coelho  (Author)</h5>

ReactDom.render(<BookList/>,document.getElementById('root'));
