from flask import Flask, send_from_directory, render_template

app = Flask(__name__)

# Rota para a página inicial onde o botão de download estará
@app.route('/')
def home():
    return render_template('index.html')

# Rota para o download do CV
@app.route('/download-cv')
def download_cv():
    return send_from_directory('static', 'Vinicius-Santos-CV.pdf', as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)
