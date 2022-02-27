import { useState } from 'react';
import './App.css';
import SingleQuestion from './components/Questions';
import data from '../src/data/data'

function App() {

  const [questions, setQuestions] = useState(data)

  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {
            questions.map((question) => {
              return <SingleQuestion key={question.id} {...question} />
            })
          }
        </section>
      </div>
    </main>
  );
}

export default App;
