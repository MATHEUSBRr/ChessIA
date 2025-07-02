import io
from flask import Flask, request, jsonify
from flask_cors import CORS
import chess
import chess.engine
import chess.pgn
import os
import json
import atexit

app = Flask(__name__)
CORS(app)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STOCKFISH_PATH = os.path.join(BASE_DIR, "stockfish.exe")
OPENINGS_PATH = os.path.join(BASE_DIR, "aberturas.json")

with open(OPENINGS_PATH, 'r', encoding='utf-8') as f:
    OPENINGS = json.load(f)

def match_opening(fen_position):
    fen_board = fen_position.split(' ')[0]
    for opening in OPENINGS:
        opening_fen = opening['fen'].split(' ')[0]
        if fen_board == opening_fen:
            return opening['name']
    return "Abertura desconhecida"

# Abrir motor Stockfish uma vez só
engine = chess.engine.SimpleEngine.popen_uci(STOCKFISH_PATH)

@atexit.register
def close_engine():
    engine.quit()

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.get_json()
    fen = data.get("fen")
    depth = data.get("depth", 13) 

    if not fen:
        return jsonify({"error": "FEN não fornecida"}), 400

    try:
        board = chess.Board(fen)
        is_white_to_move = board.turn == chess.WHITE

        # Usa o motor já aberto
        result = engine.analyse(board, chess.engine.Limit(depth=depth))

        best_move = result.get("pv")[0].uci() if "pv" in result else None
        score = result["score"]

        pv_lines = []
        if "pv" in result:
            for move in result["pv"]:
                pv_lines.append(move.uci())

        analysis_score = score.white() if is_white_to_move else score.black()

        if analysis_score.is_mate():
            mate_in = analysis_score.mate()
            evaluation = None
        else:
            mate_in = None
            evaluation = analysis_score.score(mate_score=10000) / 100.0

        opening = match_opening(fen)

        return jsonify({
            "bestmove": best_move,
            "evaluation": evaluation,
            "mate_in": mate_in,
            "opening": opening,
            "turn": "white" if is_white_to_move else "black",
            "pv_lines": pv_lines
        })

    except Exception as e:
        return jsonify({"error": f"Erro ao analisar: {str(e)}"}), 500

