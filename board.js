class Board {


board = new Cell[3, 3];

EmptyCellsBoard() {
        for (let i = 0; i < GetRowCount(); i++)
        {
            for (let j = 0; j < GetColCount(); j++)
            {
                this.board[i, j] = new Cell();
                this.board[i,j].rowIdx=i;
                this.board[i,j].colIdx=j;
                this.board[i,j].elem=0;
            }
        }
    }

SetElement(row,col, element) {
  this.board [row, col].rowIdx = row;
  this.board[row,col].colIdx = col;
  this.board [row, col].elem = element;
}

}

function GetElem(row,col)
{
    return this.board[row, col].elem;
}

function GetRowCount()
{
    return this.board.GetLength(0);
}

function GetColCount()
{
    return board.GetLength(1);
}

function IsEmpty(row,col)
{
    try {
        return board[row, col].elem == 0;
    } catch (Exception)
    {
        return false;
    }

}

function IsBoardFull()
{
    try {
        for (let i = 0; i < GetRowCount();i++)
        {
            for (let j = 0; j < GetColCount(); j++
        )
            {
                if (IsEmpty(i, j))
                    return false;
            }
        }

        return true;
    } catch (ArgumentException)
    {
    }
    return true;


}

function WinnerCheck()
{

    for (let i = 0;i < GetRowCount();i++)
        {
            if (GetElem(0, i) == GetElem(1, i) && GetElem(1, i) == GetElem(2, i)) {
                return GetElem(1, i);
            }
        }

        for (let j = 0; j < GetColCount();j++)
        {

            if (GetElem(j, 0) == GetElem(j, 1) && GetElem(j, 1) == GetElem(j, 2)) {
                return GetElem(j, 1);
            }
        }

        if (GetElem(0, 0) == GetElem(1, 1) && GetElem(1, 1) == GetElem(2, 2)) {
            return GetElem(0, 0);
        } else if (GetElem(2, 0) == GetElem(1, 1) && GetElem(1, 1) == GetElem(0, 2)) {
            return GetElem(2, 0);
        }

   return 0;
}

function GetWinnerCell(winnerPlayer)
{
        let winCell = new Cell(3, 3, 3);
        row = new Cell[3];
        col = new Cell[3];
        line1 = new Cell[3];
        line2 = new Cell[3];
        let check = 0;

        while (check != 4) {

            if (check == 0) {
                for (let i = 0; i < GetRowCount(); i++) {
                    row[0] = board[i, 0];
                    row[1] = board[i, 1];
                    row[2] = board[i, 2];
                    Array.Sort(row, new CellComp());
                    if (row[0].elem == 0 && row[1].elem == winnerPlayer && row[2].elem == winnerPlayer) {
                        winCell = row[0];
                        return winCell;
                    }
                }

                check++;


            } else if (check == 1) {


                for (let j = 0; j < GetColCount(); j++) {
                    col[0] = board[0, j];
                    col[1] = board[1, j];
                    col[2] = board[2, j];

                    Array.Sort(col, new CellComp());
                    if (col[0].elem == 0 && col[1].elem == winnerPlayer && col[2].elem == winnerPlayer) {
                        winCell = col[0];
                        return winCell;
                    }
                }
                check++;

            } else if (check == 2) {
                line1[0] = board[0, 0];
                line1[1] = board[1, 1];
                line1[2] = board[2, 2];
                Array.Sort(line1, new CellComp());
                if (line1[0].elem == 0 && line1[1].elem == winnerPlayer && line1[2].elem == winnerPlayer) {
                    winCell = line1[0];
                    return winCell;
                } else
                    check++;
            } else if (check == 3) {
                line2[0] = board[2, 0];
                line2[1] = board[1, 1];
                line2[2] = board[0, 2];
                Array.Sort(line2, new CellComp());
                if (line2[0].elem == 0 && line2[1].elem == winnerPlayer && line2[2].elem == winnerPlayer) {
                    winCell = line2[0];
                    return winCell;
                } else
                    check = 4;
            }
        }

        return winCell;

}