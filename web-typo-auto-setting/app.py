from flask import Flask, send_from_directory, jsonify

app = Flask(__name__)

@app.route('/')
def serve_index():
    return send_from_directory('.', 'index.html')

@app.route('/style.css')
def serve_css():
    return send_from_directory('.', 'style.css')

@app.route('/script.js')
def serve_js():
    return send_from_directory('.', 'script.js')

# New route: translations JSON
@app.route('/translations.json')
def serve_translations():
    return send_from_directory('.', 'translations.json')

if __name__ == '__main__':
    app.run(debug=True, port=5000)