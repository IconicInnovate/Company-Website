from flask import Flask, request, render_template, redirect, url_for, flash
from flask_mail import Mail, Message
import os

app = Flask(__name__)
app.secret_key = 'your_secret_key'

# Mail Configuration
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_USERNAME')

mail = Mail(app)

@app.route('/')
def home():
    return render_template("iconicHousing.html")

@app.route('/contact', methods=['POST'])
def contact():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')

    msg = Message("Message from Iconic Housing Website",
                  recipients=["alabielisha68@gmail.com"])
    msg.body = f"""
    You have received a new message from the contact form on your website.

    Name: {name}
    Email: {email}
    Message: {message}
    """

    try:
        mail.send(msg)
        return redirect(url_for('thank_you'))
    except Exception as e:
        flash("Message sending failed. Please try again later.")
        return redirect(url_for('home'))

@app.route('/thank')
def thank_you():
    return render_template("thank.html")

if __name__ == "__main__":
    app.run(debug=True)
