from flask import Flask, send_from_directory
import os

app = Flask(__name__)

@app.route('/download_cv')
def download_cv():
    cv_path = os.path.join(app.root_path, 'static', 'ViniciusSantos-CV.pdf')
    return send_from_directory(directory=os.path.dirname(cv_path), path=os.path.basename(cv_path), as_attachment=True)

# if __name__ == '__main__':
#     # Verifique se o Flask está usando o certificado e a chave correta
#     app.run(host='0.0.0.0', port=5000, ssl_context=('/home/ubuntu/cloudflare/cloudflare.crt', '/home/ubuntu/cloudflare/cloudflare.key'))
