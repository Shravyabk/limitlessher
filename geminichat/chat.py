import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
from dotenv import load_dotenv
import threading

# Load environment variables
load_dotenv()

# Configure Gemini
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Set up model config
generation_config = {
    "temperature": 0.7,
    "top_p": 0.95,
    "top_k": 40,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
    model_name="gemini-1.5-pro",
    generation_config=generation_config,
    system_instruction="you are an expert in career guiding for young and enthusiastic women in the field of technology\n",
)

# Shared history
history = []

# ----------------- Flask Setup -----------------
app = Flask(__name__)
CORS(app)

@app.route('/chat', methods=['POST'])
def chat_endpoint():
    data = request.get_json()
    user_input = data.get("message", "")

    if not user_input.strip():
        return jsonify({"response": "Please enter a valid question."})

    chat_session = model.start_chat(history=history)
    response = chat_session.send_message(user_input)
    model_response = response.text

    # Append to history
    history.append({"role": "user", "parts": [user_input]})
    history.append({"role": "model", "parts": [model_response]})

    return jsonify({"response": model_response})

# ----------------- Terminal Bot Loop -----------------
def terminal_chat():
    print("BOT: Hello! I am your AI assistant. How can I help you today?")
    while True:
        user_input = input("YOU: ")

        chat_session = model.start_chat(history=history)
        response = chat_session.send_message(user_input)
        model_response = response.text

        print(f"BOT: {model_response}\n")

        # Append to history
        history.append({"role": "user", "parts": [user_input]})
        history.append({"role": "model", "parts": [model_response]})

# ----------------- Run Both Flask and Terminal -----------------
if __name__ == "__main__":
    # Run the terminal chatbot in a thread
    threading.Thread(target=terminal_chat, daemon=True).start()

    # Start the Flask API
    app.run(debug=True, port=5000)
