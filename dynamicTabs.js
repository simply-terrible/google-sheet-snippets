function onOpen() {
    var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
    for (var i = 1; i < sheets.length ; i++ ) {
        var sheet = sheets[i];
        var val0 = sheet.getRange('B1').getValue();
        var val1 = sheet.getRange('C1').getValue();
        var condition = sheet.getRange('E1').getValue();
        var date0 = Utilities.formatDate(new Date(val0), "GMT", "MM/dd/yy");
        var date1 = Utilities.formatDate(new Date(val1), "GMT", "MM/dd/yy");
        var sheetName = (date0 + '-' + date1 + ' ' + condition)
        Logger.log(sheetName);
        if(sheet.getName() !== sheetName) sheet.setName(sheetName)
        Logger.log(condition);
        if(condition !== 'SW:ed') sheet.setTabColor("8B0000")
        if(condition == 'SW:ed') sheet.setTabColor("008b00 ")
        }       
    }

    function onEdit() {
    var sheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
    for (var i = 1; i < sheets.length ; i++ ) {
        var sheet = sheets[i];
        var val0 = sheet.getRange('B1').getValue();
        var val1 = sheet.getRange('C1').getValue();
        var condition = sheet.getRange('E1').getValue();
        var date0 = Utilities.formatDate(new Date(val0), "GMT", "MM/dd/yy");
        var date1 = Utilities.formatDate(new Date(val1), "GMT", "MM/dd/yy");
        var sheetName = (date0 + '-' + date1 + ' ' + condition)
        Logger.log(sheetName);
        if(sheet.getName() !== sheetName) sheet.setName(sheetName)
        Logger.log(condition);
        if(condition !== 'SW:ed') sheet.setTabColor("8B0000")
        if(condition == 'SW:ed') sheet.setTabColor("008b00 ")
        }       
    }