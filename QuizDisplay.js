import React from 'react';


export default function QuizDisplay({ quiz }) {
return (
<div>
<h3>{quiz.title}</h3>
{quiz.questions.map((q, index) => (
<div key={index} style={{ padding: 12, marginBottom: 12, backgroundColor: '#fff', borderRadius: 6, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
<p><strong>{index + 1}. {q.question}</strong></p>
{q.options && q.options.length > 0 && (
<ul>
{q.options.map((opt, i) => <li key={i}>{opt}</li>)}
</ul>
)}
<p style={{ color: 'green' }}><em>Answer: {q.answer}</em></p>
</div>
))}
</div>
);
}