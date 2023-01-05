var guid_codes = ['PENET-DEL-INTER-FIJO-POR','PENET-DEL-INTER-FIJO-51614', 'PENET-NACIO-DEL-INTER-FIJO', 'ACCES-A-INTER-FIJO-23248', 'VELOC-PROME-DE-BAJAD-DE','ACCES-A-INTER-FIJO-POR', 'BANDA-ANCHA-Y-BANDA-ANGOS', 'INGRE-POR-LA-OPERA-DEL']

    function importCSVFromUrl() {
      for (let i = 0; i < guid_codes.length; i++){
        //Requesting data
        var response = UrlFetchApp.fetch('https://api.datosabiertos.enacom.gob.ar/api/v2/datastreams/'+guid_codes[i]+'/data.csv/?auth_key=lHHW1u5YkVRPTnFqLpkSju8NF6Ygabewn8tkibw4');
        var csvraw = response.getContentText()
        var contents = Utilities.parseCsv(csvraw);
        
        //Activating and renaming sheet
        SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
        var ss = SpreadsheetApp.getActive();
        sheet = ss.insertSheet();
        SpreadsheetApp.getActiveSpreadsheet().renameActiveSheet(guid_codes[i])
        var final_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(guid_codes[i]);

        //Saving data
        final_sheet.getRange(1, 1, contents.length, contents[0].length).setValues(contents);
        
        //Simple verification of progress:
        console.log(i)
      //Imports a CSV file at a URL into the Google Sheet
    }}


