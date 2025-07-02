 // SVG das peças de xadrez
        const pieceSVGs = {
            'K': `<svg viewBox="0 0 45 45"><g fill="#fff" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 11.63V6M20 8h5"/><path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" fill="#fff"/><path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z"/><path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0"/></g></svg>`,
            'Q': `<svg viewBox="0 0 45 45"><g fill="#fff" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM24.5 7.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM16 8.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM33 9a2 2 0 1 1-4 0 2 2 0 1 1 4 0z"/><path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-13.5V25L7 14l2 12z"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/><path d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0" fill="none"/></g></svg>`,
            'R': `<svg viewBox="0 0 45 45"><g fill="#fff" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5"/><path d="M34 14l-3 3H14l-3-3"/><path d="M31 17v12.5H14V17" stroke-dasharray="1,1"/><path d="M31 29.5l1.5 2.5h-20l1.5-2.5"/><path d="M11 14h23" fill="none" stroke-linejoin="miter"/></g></svg>`,
            'B': `<svg viewBox="0 0 45 45"><g fill="#fff" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g fill="#fff"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/></g><path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" stroke-linejoin="miter"/></g></svg>`,
            'N': `<svg viewBox="0 0 45 45"><g fill="#fff" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/><path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 .01-4.21 2.94-6 4-1.23 1.74-1.22 4-.94 6.25.91 1.04 3.1 2.33 4.94.94 1.56-.47 1.47-.67 2.88-.38 2.51.81 4.81 0 5.94-2.38 1.36-1.41.42-3.87.61-4.62-.44-1.31-4.57-3.87-6.31-3.75-.69-.15-2.06-1.06-.62-1.94 1.1-.71 3.65-.38 4.56-1.62.72-1.25 1.09-2.84 1.06-4.44-.16-2.31.16-2.33-.25-2.69z"/><circle cx="13.5" cy="29.5" r="1" fill="#000"/><circle cx="15" cy="15.5" r=".5" fill="#000"/></g></svg>`,
            'P': `<svg viewBox="0 0 45 45"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38-1.95 1.12-3.28 3.21-3.28 5.62 0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#fff" stroke="#000" stroke-width="1.5" stroke-linecap="round"/></svg>`,
            'k': `<svg viewBox="0 0 45 45"><g fill="#000" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22.5 11.63V6M20 8h5"/><path d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5" fill="#000" stroke="#fff"/><path d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z"/><path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0"/></g></svg>`,
            'q': `<svg viewBox="0 0 45 45"><g fill="#000" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g fill="#000"><path d="M8 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM24.5 7.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM16 8.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM33 9a2 2 0 1 1-4 0 2 2 0 1 1 4 0z"/></g><path d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-13.5V25L7 14l2 12z"/><path d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"/><path d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0" fill="none" stroke="#fff"/></g></svg>`,
            'r': `<svg viewBox="0 0 45 45"><g fill="#000" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 39h27v-3H9v3zM12.5 32l1.5-2.5h17l1.5 2.5h-20zM12 36v-4h21v4H12z"/><path d="M14 29.5v-13h17v13H14z"/><path d="M14 16.5L11 14h23l-3 2.5H14zM11 14V9h4v2h5V9h5v2h5V9h4v5H11z" fill="#000"/><path d="M12 35.5h21m-20-4h19m-18-2h17m-17-13h17M11 14h23" fill="none" stroke="#fff" stroke-width="1" stroke-linejoin="miter"/></g></svg>`,
            'b': `<svg viewBox="0 0 45 45"><g fill="#000" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><g fill="#000"><path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.35.49-2.32.47-3-.5 1.35-1.46 3-2 3-2z"/><path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z"/><path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z"/></g><path d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5" stroke="#fff" stroke-linejoin="miter"/></g></svg>`,
            'n': `<svg viewBox="0 0 45 45"><g fill="#000" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21"/><path d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 .01-4.21 2.94-6 4-1.23 1.74-1.22 4-.94 6.25.91 1.04 3.1 2.33 4.94.94 1.56-.47 1.47-.67 2.88-.38 2.51.81 4.81 0 5.94-2.38 1.36-1.41.42-3.87.61-4.62-.44-1.31-4.57-3.87-6.31-3.75-.69-.15-2.06-1.06-.62-1.94 1.1-.71 3.65-.38 4.56-1.62.72-1.25 1.09-2.84 1.06-4.44-.16-2.31.16-2.33-.25-2.69z"/><circle cx="13.5" cy="29.5" r="1" fill="#fff"/><circle cx="15" cy="15.5" r=".5" fill="#fff"/></g></svg>`,
            'p': `<svg viewBox="0 0 45 45"><path d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38-1.95 1.12-3.28 3.21-3.28 5.62 0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z" fill="#000" stroke="#fff" stroke-width="1.5" stroke-linecap="round"/></svg>`
        };

        // Estado do jogo completo
        let gameState = {
            board: null,
            currentPlayer: 'white',
            selectedSquare: null,
            validMoves: [],
            moveHistory: [],
            gameStatus: 'playing',
            moveNumber: 1,
            lastMove: null,
            pendingPromotion: null,
            vsAI: false,
            humanColor: null,
            isThinking: false,

            castlingRights: {
                whiteKingSide: true,
                whiteQueenSide: true,
                blackKingSide: true,
                blackQueenSide: true
            },
            enPassantTarget: null,
            halfMoveClock: 0
        };

        // Posição inicial do xadrez
        const initialBoard = [
            ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
            ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
            ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
        ];

        function initGame() {
            gameState.vsAI = false;
            gameState.humanColor = null;
            gameState.isThinking = false;
            gameState.board = JSON.parse(JSON.stringify(initialBoard));
            createBoard();
            updateGameInfo();
            updateMoveList();
            attachEventListeners();
        }

        // Criar o tabuleiro visual
        function createBoard() {
            const boardElement = document.getElementById('chessBoard');
            boardElement.innerHTML = '';

            for (let row = 0; row < 8; row++) {
                for (let col = 0; col < 8; col++) {
                    const square = document.createElement('div');
                    const squareName = getSquareName(row, col);
                    
                    square.className = `square ${(row + col) % 2 === 0 ? 'light' : 'dark'}`;
                    square.dataset.row = row;
                    square.dataset.col = col;
                    square.dataset.square = squareName;
                    
                    const piece = gameState.board[row][col];
                    if (piece) {
                        const pieceElement = document.createElement('div');
                        pieceElement.className = 'piece';
                        pieceElement.innerHTML = pieceSVGs[piece];
                        square.appendChild(pieceElement);
                    }
                    
                    square.addEventListener('click', () => handleSquareClick(row, col));
                    boardElement.appendChild(square);
                }
            }
        }
        
        // Converter coordenadas para nome da casa 
        function getSquareName(row, col) {
            const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
            const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];
            return files[col] + ranks[row];
        }

        // Converter nome da casa para coordenadas
        function getSquareCoords(squareName) {
            const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
            const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];
            const col = files.indexOf(squareName[0]);
            const row = ranks.indexOf(squareName[1]);
            return { row, col };
        }

        function handleSquareClick(row, col) {
            if (gameState.vsAI) {
                if (gameState.isThinking) return;
                if (gameState.currentPlayer !== gameState.humanColor) return;
            }
            if (gameState.pendingPromotion) return;

            const piece = gameState.board[row][col];
            const sq = getSquareName(row, col);

            if (gameState.selectedSquare) {
                const ok = gameState.validMoves.some(m => m.to === sq);
                if (ok) {
                makeMove(gameState.selectedSquare, sq);
                } else {
                clearSelection();
                if (piece && isPieceOwnedByCurrentPlayer(piece)) {
                    selectSquare(row, col);
                }
                }
            } else {
                if (piece && isPieceOwnedByCurrentPlayer(piece)) {
                selectSquare(row, col);
                }
            }
        }

        // Verificar se a peça pertence ao jogador atual
        function isPieceOwnedByCurrentPlayer(piece) {
            const isWhitePiece = piece === piece.toUpperCase();
            return (gameState.currentPlayer === 'white' && isWhitePiece) ||
                   (gameState.currentPlayer === 'black' && !isWhitePiece);
        }

        function selectSquare(row, col) {
            gameState.selectedSquare = getSquareName(row, col);
            gameState.validMoves = getValidMoves(row, col);
            updateBoard();
        }

        function clearSelection() {
            gameState.selectedSquare = null;
            gameState.validMoves = [];
            updateBoard();
        }

        // Atualizar visualização do tabuleiro
        function updateBoard() {
            const squares = document.querySelectorAll('.square');
            squares.forEach(square => {
                square.classList.remove('selected', 'valid-move', 'last-move');
                
                if (gameState.selectedSquare && square.dataset.square === gameState.selectedSquare) {
                    square.classList.add('selected');
                }
                
                if (gameState.validMoves.some(move => move.to === square.dataset.square)) {
                    square.classList.add('valid-move');
                }

                if (gameState.lastMove && 
                    (square.dataset.square === gameState.lastMove.from || 
                     square.dataset.square === gameState.lastMove.to)) {
                    square.classList.add('last-move');
                }
            });
        }

        // Obter jogadas válidas para uma peça
        function getValidMoves(row, col) {
            const piece = gameState.board[row][col];
            if (!piece) return [];

            const moves = [];
            const pieceType = piece.toLowerCase();

            switch (pieceType) {
                case 'p':
                    moves.push(...getPawnMoves(row, col, piece));
                    break;
                case 'r':
                    moves.push(...getRookMoves(row, col, piece));
                    break;
                case 'n':
                    moves.push(...getKnightMoves(row, col, piece));
                    break;
                case 'b':
                    moves.push(...getBishopMoves(row, col, piece));
                    break;
                case 'q':
                    moves.push(...getQueenMoves(row, col, piece));
                    break;
                case 'k':
                    moves.push(...getKingMoves(row, col, piece));
                    break;
            }

            // Filtrar jogadas que deixam o rei em xeque
            return moves.filter(move => !isMoveLeavingKingInCheck(move, piece));
        }

        // #region Movimento e regras do Peão
        function getPawnMoves(row, col, piece) {
        const moves = [];
        const isWhite = piece === piece.toUpperCase();
        const direction = isWhite ? -1 : 1;
        const startRow = isWhite ? 6 : 1;
        const enPassantRow = isWhite ? 3 : 4;

        // Movimento para frente (um passo)
        if (isValidPosition(row + direction, col) && !gameState.board[row + direction][col]) {
            moves.push({
                from: getSquareName(row, col),
                to: getSquareName(row + direction, col),
                piece: piece
            });

            // Movimento duplo inicial (dois passos)
            if (row === startRow && !gameState.board[row + 2 * direction][col]) {
                moves.push({
                    from: getSquareName(row, col),
                    to: getSquareName(row + 2 * direction, col),
                    piece: piece,
                    isDoubleStep: true
                });
            }
        }

        // Capturas diagonais normais
        for (const dcol of [-1, 1]) {
            const targetRow = row + direction;
            const targetCol = col + dcol;
            if (isValidPosition(targetRow, targetCol)) {
                const targetPiece = gameState.board[targetRow][targetCol];
                if (targetPiece && isOpponentPiece(piece, targetPiece)) {
                    moves.push({
                        from: getSquareName(row, col),
                        to: getSquareName(targetRow, targetCol),
                        piece: piece,
                        capture: targetPiece
                    });
                }
            }
        }

        // Captura en passant
        if (gameState.enPassantTarget) {
            const epCoords = getSquareCoords(gameState.enPassantTarget);
            if (row === enPassantRow && Math.abs(col - epCoords.col) === 1 && epCoords.row === row + direction) {
                const adjacentPiece = gameState.board[row][epCoords.col];
                if (
                    adjacentPiece &&
                    isOpponentPiece(piece, adjacentPiece) &&
                    (adjacentPiece === 'p' || adjacentPiece === 'P') // opcional: garante que seja peão
                ) {
                    moves.push({
                        from: getSquareName(row, col),
                        to: gameState.enPassantTarget,
                        piece: piece,
                        capture: adjacentPiece,
                        isEnPassant: true
                    });
                }
            }
        }

        return moves;
    }
    // #endregion

        //#region Movimento das peças

        // Jogadas da torre
        function getRookMoves(row, col, piece) {
            const moves = [];
            const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

            for (const [drow, dcol] of directions) {
                for (let i = 1; i < 8; i++) {
                    const newRow = row + i * drow;
                    const newCol = col + i * dcol;

                    if (!isValidPosition(newRow, newCol)) break;

                    const targetPiece = gameState.board[newRow][newCol];
                    
                    if (!targetPiece) {
                        moves.push({
                            from: getSquareName(row, col),
                            to: getSquareName(newRow, newCol),
                            piece: piece
                        });
                    } else {
                        if (isOpponentPiece(piece, targetPiece)) {
                            moves.push({
                                from: getSquareName(row, col),
                                to: getSquareName(newRow, newCol),
                                piece: piece,
                                capture: targetPiece
                            });
                        }
                        break;
                    }
                }
            }

            return moves;
        }

        // Jogadas do cavalo
        function getKnightMoves(row, col, piece) {
            const moves = [];
            const knightMoves = [
                [-2, -1], [-2, 1], [-1, -2], [-1, 2],
                [1, -2], [1, 2], [2, -1], [2, 1]
            ];

            for (const [drow, dcol] of knightMoves) {
                const newRow = row + drow;
                const newCol = col + dcol;

                if (isValidPosition(newRow, newCol)) {
                    const targetPiece = gameState.board[newRow][newCol];
                    
                    if (!targetPiece || isOpponentPiece(piece, targetPiece)) {
                        moves.push({
                            from: getSquareName(row, col),
                            to: getSquareName(newRow, newCol),
                            piece: piece,
                            capture: targetPiece
                        });
                    }
                }
            }

            return moves;
        }

        // Jogadas do bispo
        function getBishopMoves(row, col, piece) {
            const moves = [];
            const directions = [[1, 1], [1, -1], [-1, 1], [-1, -1]];

            for (const [drow, dcol] of directions) {
                for (let i = 1; i < 8; i++) {
                    const newRow = row + i * drow;
                    const newCol = col + i * dcol;

                    if (!isValidPosition(newRow, newCol)) break;

                    const targetPiece = gameState.board[newRow][newCol];
                    
                    if (!targetPiece) {
                        moves.push({
                            from: getSquareName(row, col),
                            to: getSquareName(newRow, newCol),
                            piece: piece
                        });
                    } else {
                        if (isOpponentPiece(piece, targetPiece)) {
                            moves.push({
                                from: getSquareName(row, col),
                                to: getSquareName(newRow, newCol),
                                piece: piece,
                                capture: targetPiece
                            });
                        }
                        break;
                    }
                }
            }

            return moves;
        }

        // Jogadas da rainha
        function getQueenMoves(row, col, piece) {
            return [...getRookMoves(row, col, piece), ...getBishopMoves(row, col, piece)];
        }
// #endregion

        // #region Movimento do rei e regras do roque
        // Jogadas do rei 
        function getKingMoves(row, col, piece) {
            const moves = [];
            const directions = [
                [-1, -1], [-1, 0], [-1, 1],
                [0, -1],           [0, 1],
                [1, -1],  [1, 0],  [1, 1]
            ];

            // Movimentos normais do rei (um quadrado em qualquer direção)
            for (const [drow, dcol] of directions) {
                const newRow = row + drow;
                const newCol = col + dcol;

                if (isValidPosition(newRow, newCol)) {
                    const targetPiece = gameState.board[newRow][newCol];

                    if (!targetPiece || isOpponentPiece(piece, targetPiece)) {
                        moves.push({
                            from: getSquareName(row, col),
                            to: getSquareName(newRow, newCol),
                            piece: piece,
                            capture: targetPiece || null
                        });
                    }
                }
            }

            const isWhite = piece === 'K'; //'K' = Rei branco 'k' = Rei preto
            const backRank = isWhite ? 7 : 0;
            const enemyColor = isWhite ? 'black' : 'white';

            if (row === backRank && col === 4) { 
                // Roque curto (lado do rei)
                if (gameState.castlingRights[isWhite ? 'whiteKingSide' : 'blackKingSide']) {
                    if (!gameState.board[backRank][5] && !gameState.board[backRank][6]) {
                        if (!isSquareAttacked(backRank, 4, enemyColor) &&
                            !isSquareAttacked(backRank, 5, enemyColor) &&
                            !isSquareAttacked(backRank, 6, enemyColor)) {
                            
                            moves.push({
                                from: getSquareName(row, col),
                                to: getSquareName(backRank, 6),
                                piece: piece,
                                castle: 'king'
                            });
                        }
                    }
                }

                // Roque longo (lado da rainha)
                if (gameState.castlingRights[isWhite ? 'whiteQueenSide' : 'blackQueenSide']) {
                    if (!gameState.board[backRank][1] && 
                        !gameState.board[backRank][2] &&
                        !gameState.board[backRank][3]) {
                        
                        if (!isSquareAttacked(backRank, 2, enemyColor) &&
                            !isSquareAttacked(backRank, 3, enemyColor) &&
                            !isSquareAttacked(backRank, 4, enemyColor)) {

                            moves.push({
                                from: getSquareName(row, col),
                                to: getSquareName(backRank, 2),
                                piece: piece,
                                castle: 'queen'
                            });
                        }
                    }
                }
            }

            return moves;
        }

        function isValidPosition(row, col) {
            return row >= 0 && row < 8 && col >= 0 && col < 8;
        }

        function isOpponentPiece(piece1, piece2) {
            const isWhite1 = piece1 === piece1.toUpperCase();
            const isWhite2 = piece2 === piece2.toUpperCase();
            return isWhite1 !== isWhite2;
        }
