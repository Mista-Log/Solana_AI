from django.shortcuts import render

# Create your views here.
import os
import google.generativeai as genai
from dotenv import load_dotenv
load_dotenv()


genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Create the model
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 40,
  "max_output_tokens": 8192,
  "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
  model_name="gemini-2.0-flash",
  generation_config=generation_config,
  system_instruction="Accept text prompts from users.\nProvide accurate Web3 and Solana-related responses using AI models trained on blockchain topics.\nFetch real-time data from the Solana blockchain, including:\nWallet balances\nRecent transactions\nSmart contract details\nStaking information\nNFT metadata (via Metaplex)\nIntegrate Solana’s RPC API for blockchain interactions.\nUse Web3 authentication (e.g., Phantom Wallet) for personalized responses.",
)

history = []

print("Bot: Hello, how can i help you today?")

while True:

  user_input = input("You: ")

  chat_session = model.start_chat(
    history=history
  )

  response = chat_session.send_message(user_input)

  model_response = response.text
  print(f'Bot: {model_response}')

  history.append({"role": "user", "parts": [user_input]})
  history.append({"role": "user", "parts": [model_response]})


# Run the chat