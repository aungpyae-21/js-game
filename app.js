const game = () => {
    let pScore = 0;
    let cScore = 0;

    //start game function
    const startGame = () =>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');
        const scoreScreen = document.querySelector('.score');

        playBtn.addEventListener('click',function() {
            introScreen.classList.add('fadeout');
            matchScreen.classList.add('fadein');
            scoreScreen.classList.add('fadein');
        });
    };
    const playGame = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.player-hand ,.computer-hand');

        hands.forEach((hand) => {
            hand.addEventListener("animationend" , function(){
                this.style.animation = "";
            });
        });

        const computerOptions=["rock", "paper", "scissors"];

        options.forEach((option) => {
            option.addEventListener('click' , function() {
                const computerNumbers = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNumbers];

                setTimeout(()=> {
                    compareHand(this.textContent, computerChoice);

                    playerHand.src = `./color-hand/${this.textContent}.png`;
                    computerHand.src = `./color-hand/${computerChoice}.png`;
                },2000)
               
                //animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }
    const compareHand = (playerChoice, computerChoice) => {
        const tie = document.querySelector('.tie');
        const playerWin = document.querySelector('.player-side h2');
        const computerWin = document.querySelector('.computer-side h2');
        //for tie
        if(playerChoice === computerChoice) {
            tie.classList.add('fadein');
            computerWin.classList.remove('fadein');
            playerWin.classList.remove('fadein');
            return;
        };

        //for rock
        if(playerChoice === "rock"){
            if(computerChoice ==="scissors"){
                playerWin.classList.add('fadein');
                tie.classList.remove('fadein');
                computerWin.classList.remove('fadein');
                pScore++;
                updateScore();
                return;
            }else{
                computerWin.classList.add('fadein');
                playerWin.classList.remove('fadein');
                tie.classList.remove('fadein');
                cScore++;
                updateScore();
                return;
            }
        }
        //for paper
        if(playerChoice === "paper"){
            if(computerChoice ==="rock"){
                playerWin.classList.add('fadein');
                tie.classList.remove('fadein');
                computerWin.classList.remove('fadein');
                pScore++;
                updateScore();
                return;
            }else{
                computerWin.classList.add('fadein');
                playerWin.classList.remove('fadein');
                tie.classList.remove('fadein');
                cScore++;
                updateScore();
                return;
            }
        }
        //for scissors
        if(playerChoice === "scissors"){
            if(computerChoice ==="paper"){
                playerWin.classList.add('fadein');
                tie.classList.remove('fadein');
                computerWin.classList.remove('fadein');
                pScore++;
                updateScore();
                return;
            }else{
                computerWin.classList.add('fadein');
                playerWin.classList.remove('fadein');
                tie.classList.remove('fadein');
                cScore++;
                updateScore();
                return;
            }
        }
    }

    playGame();
    startGame();
};
game();