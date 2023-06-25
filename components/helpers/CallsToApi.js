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