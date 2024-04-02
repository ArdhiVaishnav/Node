const fs = require('fs');

const addData = (regn, rno)=>{
    var data = [];
    var data_item = {regn, rno};

    try{
        var dataString = fs.readFileSync('data-data.json');
        data = JSON.parse(dataString);
    }
    catch(e){}

    var duplicatedata = data.filter((data_item)=>data_item.regn === regn);

    if(duplicatedata.length === 0){
        data.push(data_item);
        fs.writeFileSync('data-data.json', JSON.stringify(data));
    }
    else{
        console.log('Duplicate Regn Not allowed')
    }
}
module.exports = {addData};