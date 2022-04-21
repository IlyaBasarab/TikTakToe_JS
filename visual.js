class Visual
{
 ShowField(field) {

    for (let i = 0; i < 3; i++) {
        let line = '';
        for (let j = 0; j < 3; j++) {
            if (field[i][j]!==2)
            {line += field[i][j] + ' ';}
            else
            {line += '_'+' ';}
        }
        console.log(line);
    }
}




GetSymbol( value)
{
    if (value == 1)
        return 'X';
    else if (value == 2)
        return '0';
    return '_';
}


}