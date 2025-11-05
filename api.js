// Base URL for your FastAPI server
const baseUrl = "http://127.0.0.1:8000";

// ✅ Generate Quiz
export async function generateQuizApi({ file, text, quiz_type, num_questions }) {
  const url = `${baseUrl}/api/quizzes/generate`;
  const formData = new FormData();

  if (file) formData.append("file", file);
  if (text) formData.append("text", text);

  formData.append("quiz_type", quiz_type);
  formData.append("num_questions", num_questions);

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.statusText}`);
  }

  const result = await response.json();
  return result.quiz_id;
}

// ✅ Fetch Quiz Details
export async function fetchQuizApi(quizId) {
  const url = `${baseUrl}/api/quizzes/${quizId}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch quiz");
  }

  return await response.json();
}
