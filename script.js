  // Variables de configuration du jeu
  const CONFIG = {
    COLS: 7,
    ROWS: 6,
    AI_DIFFICULTY: "medium", // Niveau de difficulté de l'IA ("easy", "medium", "hard")
  };

  // Variables globales
  let board = Array.from({ length: CONFIG.ROWS }, () => Array(CONFIG.COLS).fill(null));
  let currentPlayer = "player1"; // "player1" pour le joueur, "player2" pour l'ordinateur
  let player1Score = 0;
  let player2Score = 0;
  let gameInterval;
  let secondsElapsed = 0;

  // Initialisation du jeu
  function initGame() {
    createBoard();
    addEventListeners();
    resetTimer();
  }

  // Créer la grille de jeu
  function createBoard() {
    const gameBoard = document.getElementById("game-board");
    gameBoard.innerHTML = "";
    for (let row = 0; row < CONFIG.ROWS; row++) {
      for (let col = 0; col < CONFIG.COLS; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.row = row;
        cell.dataset.col = col;
        gameBoard.appendChild(cell);
      }
    }
  }

  // Ajouter les événements (utilisation de la délégation d'événements)
  function addEventListeners() {
    const gameBoard = document.getElementById("game-board");
    gameBoard.addEventListener("click", handlePlayerMove);  // Délégation d'événement
    document.getElementById("resetBtn").addEventListener("click", resetGame);
    document.getElementById("toggleThemeBtn").addEventListener("click", toggleTheme);
  }

  // Gestion du clic du joueur
  function handlePlayerMove(event) {
    const target = event.target;
    if (target.classList.contains("cell") && currentPlayer === "player1") {
      const col = parseInt(target.dataset.col);
      for (let row = CONFIG.ROWS - 1; row >= 0; row--) {
        if (!board[row][col]) {
          board[row][col] = currentPlayer;
          updateBoard();
          if (checkWin(row, col)) {
            player1Score++;
            updateScores();
            showNotification("Le joueur 1 a gagné !");
            return;
          }
          currentPlayer = "player2"; // Tour de l'ordinateur
          setTimeout(computerMove, 500); // L'ordinateur joue après un délai
          break;
        }
      }
    }
  }

  // Mettre à jour l'affichage de la grille
  function updateBoard() {
    const gameBoard = document.getElementById("game-board");
    for (let row = 0; row < CONFIG.ROWS; row++) {
      for (let col = 0; col < CONFIG.COLS; col++) {
        const cell = gameBoard.children[row * CONFIG.COLS + col];
        if (board[row][col]) {
          cell.classList.add(board[row][col]);
        } else {
          cell.classList.remove("player1", "player2");
        }
      }
    }
  }

  // Vérifier si un joueur a gagné
  function checkWin(row, col) {
    return (
      checkDirection(row, col, 1, 0) || // Horizontal
      checkDirection(row, col, 0, 1) || // Vertical
      checkDirection(row, col, 1, 1) || // Diagonale /
      checkDirection(row, col, 1, -1)   // Diagonale \
    );
  }

  // Vérifier les alignements dans une direction
  function checkDirection(row, col, dRow, dCol) {
    let count = 0;
    let player = board[row][col];
    for (let i = -3; i <= 3; i++) {
      let r = row + i * dRow;
      let c = col + i * dCol;
      if (r >= 0 && r < CONFIG.ROWS && c >= 0 && c < CONFIG.COLS && board[r][c] === player) {
        count++;
        if (count === 4) return true;
      } else {
        count = 0;
      }
    }
    return false;
  }

  // Afficher la notification
  function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.classList.add("show");
    setTimeout(() => {
      notification.classList.remove("show");
    }, 2000);
  }

  // Mise à jour des scores
  function updateScores() {
    document.getElementById("scorePlayer1").textContent = `Joueur 1: ${player1Score}`;
    document.getElementById("scorePlayer2").textContent = `Ordinateur: ${player2Score}`;
  }

  // Chronomètre avec requestAnimationFrame pour plus de fluidité
  function startTimer() {
    gameInterval = requestAnimationFrame(function updateTimer() {
      secondsElapsed++;
      document.getElementById("timer").textContent = `Temps : ${secondsElapsed}`;
      gameInterval = requestAnimationFrame(updateTimer);
    });
  }

  function resetTimer() {
    cancelAnimationFrame(gameInterval); // Annuler l'ancien intervalle
    secondsElapsed = 0;
    document.getElementById("timer").textContent = `Temps : ${secondsElapsed}`;
    startTimer();
  }

  // Mouvement de l'ordinateur
  function computerMove() {
    const col = getBestMove();
    for (let row = CONFIG.ROWS - 1; row >= 0; row--) {
      if (!board[row][col]) {
        board[row][col] = "player2";
        updateBoard();
        if (checkWin(row, col)) {
          player2Score++;
          updateScores();
          showNotification("L'ordinateur a gagné !");
          return;
        }
        currentPlayer = "player1";
        break;
      }
    }
  }

  // Choisir la meilleure colonne pour l'IA
  function getBestMove() {
    const availableCols = [];
    for (let col = 0; col < CONFIG.COLS; col++) {
      if (board[0][col] === null) availableCols.push(col);
    }
    return availableCols[Math.floor(Math.random() * availableCols.length)];
  }

  // Réinitialiser le jeu
  function resetGame() {
    board = Array.from({ length: CONFIG.ROWS }, () => Array(CONFIG.COLS).fill(null));
    currentPlayer = "player1";
    updateBoard();
    resetTimer();
    showNotification("Le jeu a été réinitialisé !");
  }

  // Basculer entre thème clair et sombre
  function toggleTheme() {
    document.body.classList.toggle("dark-mode");
  }

  // Lancer le jeu
  initGame();