import React, { useState } from "react"
import data from "./data"
function App() {
  const [count, setCount] = useState(0)
  const [paragraphs, setParagraphs] = useState([])

  const handleChange = (e) => {
    const value = parseInt(e.target.value)
    setCount(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setParagraphs(data.slice(0, count))
  }

  return (
    <div>
      <main>
        <header className="title">
          <h1>lorem ipsum project setup</h1>
        </header>
        <section className="section-center">
          <h3>How many paragraphs of ipsum would you like?</h3>
          <form onSubmit={handleSubmit} className="lorem-form">
            <label htmlFor="paragraphCount">Paragraph Count</label>
            <input
              onChange={handleChange}
              id="paragraphCount"
              name="paragraphCount"
              type="number"
              min="0"
              max="10"
              value={count}
            />
            <button onClick={handleSubmit} className="btn">
              Generate Paragraphs
            </button>
          </form>
        </section>
        <article className="section-center">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
      </main>
    </div>
  )
}

export default App
