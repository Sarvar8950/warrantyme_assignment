import React from 'react'
import "./Body.css"

export default function Body() {
  const [limit, setlimit] = React.useState(20)
  const [category, setcategory] = React.useState("world")
  const [news, setnews] = React.useState([])

  React.useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=43f5e353de3b4ec793eba604ef3712f3&pageSize=${limit%100}`)
      .then(res => res.json())
      .then(res =>{ 
        setnews(res.articles)})
  }, [])

  function fetchnews() {
    fetch(`https://newsapi.org/v2/everything?q=${category}&apiKey=43f5e353de3b4ec793eba604ef3712f3&pageSize=${limit%100}`)
      .then(res => res.json())
      .then(res =>{ 
        setnews(res.articles)})
  }
  return (
    <div>
      <h1>New App</h1>
      <div className="fildes">
        <input type="number" placeholder='max limit is 100' onChange={e => setlimit(e.target.value)} />
        <input type="text" placeholder='search' onChange={e => setcategory(e.target.value)}/>
        <select onChange={e => setcategory(e.target.value)}>
          <option value="world">World</option>
          <option value="breaking-news">Breaking News</option>
          <option value="nation">Nation</option>
          <option value="business">Business</option>
          <option value="technology">Technology</option>
          <option value="sports">Sports</option>
          <option value="science">Science</option>
          <option value="health">Health</option>
        </select>
        <button onClick={fetchnews}>Search</button>
      </div>
      <div className="data">
        {
          news.map((ele) => {
            return (<div key={ele.url} className="card">
              <div className="image">
                <img src={ele.urlToImage} alt="news image" />
              </div>
              <div className="details">
                <p className="name">
                  Name : {ele.title}
                </p>
                <p className="disc">
                  Discription : {ele.description}
                </p>
                <p className="author">
                  Author : {ele.author}
                </p>
              </div>
            </div>)
          })
        }
      </div>
    </div>
  )
}
