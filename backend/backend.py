from flask import Flask, send_from_directory
import os

app = Flask(__name__)

# Rota para servir o CV
@app.route('/download_cv')
def download_cv():
    # Caminho para o arquivo do CV
    cv_path = os.path.join(app.root_path, 'static', 'Vinicius-Santos-CV.pdf')
    return send_from_directory(directory=os.path.dirname(cv_path), path=os.path.basename(cv_path), as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)
