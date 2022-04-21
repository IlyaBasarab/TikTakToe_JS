let field = [
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2]
];




function WinComb() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (field[0][j] != 2 && field[0][j] == field[1][j] && field[i][j] == field[2][j]) {
                console.log(field[0][j] + ' wins')
                return 1;

            } else if (field[i][0] != 2 && field[i][0] == field[i][1] && field[i][j] == field[i][2]) {
                console.log(field[i][0] + ' wins')
                return 1;

            } else if (field[0][0] != 2 && field[0][0] == field[1][1] && field[i][j] == field[2][2]) {
                console.log(field[0][0] + ' wins')
                return 1;

            } else if (field[2][0] != 2 && field[2][0] == field[1][1] && field[2][0] == field[0][2]) {
                console.log(field[2][0] + ' wins')
                return 1;

            } else
                return 0;

        }
    }
}


function Entering(row,col,turn)
{
    if(field[row][col]==2) {
        if (turn % 2) {
            field[row][col] = '+'
        } else {
            field[row][col] = '0'
        }
    }
    else
    {

    }


}

function program() {
    let turn =1;

    ShowField();
    console.log('------');

    while (WinComb(field) != 1) {


        let entX = prompt('Enter row ')
        let entY = prompt( 'Enter column')
        let row=entX-1;
        let col=entY-1;
        Entering(row,col,turn);
        ShowField();
        console.log('------');

        turn++;
        if(turn==9)
        {
            console.log('Draw!');
        }
    }

}

program();