import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv() 
app= Flask(__name__)
CORS(app)

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Create the model
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
  system_instruction="you are  an expert in carreer guiding for young and enthusiastic women in the field of technology\n",
)
history=[]
print("BOT: Hello! I am your AI assistant. How can I help you today?")
while True:
    user_input = input("YOU: ")

    chat_session = model.start_chat(
       history=history
    )

    response = chat_session.send_message(user_input)

    model_response=response.text
    print(f'BOT:{model_response}')
    print()
    history.append({"role": "user", "parts": [user_input]})
    history.append({"role": "model", "parts": [model_response]})
