'TO FORMAT YOUGOV DATA AND MAKE IT USEABLE

Sub FormatTable():

Dim i, j, totalrows, outputrowtracker As Integer

'track row for outputting data
outputrowtracker = 25
totalrows = Cells(Rows.Count, 1).End(xlUp).Row

Cells(24, 1).Value = "Issue"
Cells(24, 2).Value = "Date"
Cells(24, 3).Value = "Percentage"

'Loop through rows
For i = 2 To totalrows

    'Loop through the columns
    For j = 2 To 163

        'PRINT THE FIRST VALUE IN ROW TO CELL 1, PRINT THE FIRST VALUE IN COLUMN TO CELL 2, PRINT CELL VALUE TO CELL 3
        Cells(outputrowtracker, 1).Value = Cells(i, 1).Value
        Cells(outputrowtracker, 2).Value = Cells(1, j).Value
        Cells(outputrowtracker, 3).Value = Cells(i, j).Value
        outputrowtracker = outputrowtracker + 1
        
    Next j

Next i

End Sub
