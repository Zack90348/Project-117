
from flask import Flask, render_template, url_for, request, jsonify
from sentiment_analysis import *

app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')
 
@app.route('/predict', methods=["POST"])
def predict_emotion():
    
    input_text = request.json.get("text")
    
    if not input_text:
        response = {
            "status":"error",
            "message":"Please enter some text"
        }
        return jsonify(response)
    else:
        predicted_emotion,predicted_emotion_url = predict(input_text)
        response = {
            "status":"success",
            "data":{
                "predicted_emotion":predicted_emotion,
                "predicted_emotion_url":predicted_emotion_url
            }
        }
        return jsonify(response)
               
        
       
app.run(debug=True)



    