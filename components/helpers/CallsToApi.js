export const HandleRandomNews = async (setdatardm , url) => {
    const url1 = url
    const options1 = {headers :{
                      'x-api-key' : '81faba4f6f24441693888487f61060c1'},
                      'sortBy':'popularity'
                      }

    const res = await fetch(url1 , options1)
                          .then((res)=>{return res.json()})
                          .then((res)=>{setdatardm(res.articles)})
  }


// https://newsapi.org/v2/top-headlines?country=ar&apiKey=81faba4f6f24441693888487f61060c1

 /*const prueba = () =>{
     fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=81faba4f6f24441693888487f61060c1`)
                 .then((res)=>{return res.json()})
                 .then((res)=>{console.log(res)})
                 .catch((err)=>{console.log(err)})
 }
prueba()*/

// https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=81faba4f6f24441693888487f61060c1