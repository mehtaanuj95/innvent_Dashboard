from flask import Flask
from flask import render_template

app = Flask(__name__)
@app.route('/')
def hello_world():
    return render_template("dashboard-sales.html")

@app.route('/ward_details.html')
def load_ward_details():
    return render_template("ward_details.html")
