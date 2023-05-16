var tBody = document.getElementById('tblBody');
var trEle = tBody.rows;
var firstRow = trEle[0].cells;
var cellRow = firstRow[3];


var scours = [];
// lay bang diem
function getScours() {
    var tdScours = document.querySelectorAll('#tblBody .td-scores');
    //duyet danh sach mang
    for (var i = 0; i < tdScours.length; i++) {
        // lay tuung con diem mots
        var score = Number(tdScours[i].innerHTML);
        //them phan tu vao mang
        scours.push(score);
    }
}
getScours();

function overFive() {
    var result = '';
    // lay tung diem trong mang
    for (var i = 0; i < scours.length; i++) {    
        if(scours[i]>5){
            //lay ten sinh vien
            var name = document.getElementById('tblBody').rows[i].cells[2].innerHTML;
            
            result += name + ' ' + scours[i] + '<br>';
        }    
    }
    document.getElementById('dsDiemHon5').innerHTML = result;
}
document.getElementById('btnSVDiemHon5').onclick = overFive;

function xeploai(score) {
    if(score>8 && score<=10) {
        return 'gioi';
    }else if(score<=8 && score>6){
        return 'kha';
    }else if (score<=6 && score>5){
        return 'trung binh';
    }else if (score<=5 && score>0){
        return 'yeu';
    }else{return ''}
}

function countStudent() {
    var count = 0;
    for (var i = 0; i < scours.length; i++) {
        var result = xeploai(scours[i]); 
        if(result =='gioi'){
            count++;
        }
    }
    document.getElementById('soSVGioi').innerHTML = count;
}
document.getElementById('btnSoSVGioi').onclick = countStudent;
// debugger;

function maxScours() {
    var max = scours[0];
    var indexMax = 0
    for (var i = 0; i < scours.length; i++) {
        if(scours[i]> max) {
            max = scours[i];
            indexMax = i;
        }
    }
    var name = document.getElementById('tblBody').rows[indexMax].cells[2].innerHTML;   
    document.getElementById('svGioiNhat').innerHTML = max + ' ' + name;
}
document.getElementById('btnSVCaoDiemNhat').onclick = maxScours;

function minScours() {
    var min = scours[0];
    var indexMin = 0;
    for (var i = 0; i < scours.length; i++) {
        if(scours[i]< min) {
            min = scours[i];
            indexMin = i;
        }
    }
    var name = document.getElementById('tblBody').rows[indexMin].cells[2].innerHTML;   
    document.getElementById('svYeuNhat').innerHTML = min + ' ' + name;
}
document.getElementById('btnSVThapDiemNhat').onclick = minScours;
function upScours() {
    // vi loi~ khi chay code tim kim truoc nen fix lai
    var scoursCoppy = [];
    for (var i = 0; i < scours.length; i++) {
        scoursCoppy.push(scours[i]) 
    }
    var result = scoursCoppy.sort(function(a,b){
        return a-b;
    })
    document.getElementById('dtbTang').innerHTML = result;
}
document.getElementById('btnSapXepTang').onclick = upScours;
