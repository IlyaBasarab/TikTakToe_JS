class Cell
{
    rowIdx;
    colIdx;
    elem;

 constructor(rowIdx, colIdx,elem)
{
    this.rowIdx = rowIdx;
    this.colIdx = colIdx;
    this.elem = elem;
}

ToString()
{
    return "["+rowIdx +","+colIdx +"]= " +elem + '\n';
}
}