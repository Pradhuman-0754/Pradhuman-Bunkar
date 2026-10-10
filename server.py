"""
BollyVoice AI - Local Development Server
Zero-dependency Python server with built-in ElevenLabs proxy & static file serving.
"""

import os
import sys
import json
import urllib.request
import urllib.error
import webbrowser
from http.server import HTTPServer, SimpleHTTPRequestHandler

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class BollyVoiceHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable CORS and caching headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', '*')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_POST(self):
        if self.path.startswith('/api/tts'):
            # Proxy request to ElevenLabs to bypass any client-side network limits
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length)
            
            try:
                data = json.loads(body.decode('utf-8'))
                voice_id = data.get('voice_id', 'pNInz6obpgDQGcFmaJgB')
                api_key = self.headers.get('xi-api-key') or data.get('api_key', 'sk_774f621bb8d7c89e6a2b682761b2da01681bec964ff02e3f')

                url = f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}"
                req_data = json.dumps({
                    'text': data.get('text', ''),
                    'model_id': 'eleven_multilingual_v2',
                    'voice_settings': data.get('voice_settings', {
                        'stability': 0.5,
                        'similarity_boost': 0.8
                    })
                }).encode('utf-8')

                req = urllib.request.Request(
                    url,
                    data=req_data,
                    headers={
                        'xi-api-key': api_key,
                        'Content-Type': 'application/json'
                    }
                )

                with urllib.request.urlopen(req) as resp:
                    audio_bytes = resp.read()
                    self.send_response(200)
                    self.send_header('Content-Type', 'audio/mpeg')
                    self.send_header('Content-Length', str(len(audio_bytes)))
                    self.end_headers()
                    self.wfile.write(audio_bytes)

            except urllib.error.HTTPError as e:
                err_body = e.read()
                self.send_response(e.code)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(err_body)
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'error': str(e)}).encode('utf-8'))
        else:
            self.send_error(404, "Endpoint not found")

def run():
    os.chdir(DIRECTORY)
    server_address = ('', PORT)
    httpd = HTTPServer(server_address, BollyVoiceHandler)
    url = f"http://localhost:{PORT}"
    print("=" * 60)
    print(f">> BollyVoice AI Server running at: {url}")
    print(f">> Voices loaded: Amitabh, Shah Rukh, Deepika, Priyanka, Salman")
    print(f">> Press Ctrl+C to stop.")
    print("=" * 60)
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down BollyVoice AI server...")
        httpd.server_close()

if __name__ == '__main__':
    run()
