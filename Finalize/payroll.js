function myFuntion() {
    var name = document.getElementById("employeeName").value;
    document.getElementById("eName").innerHTML = name;
    var sal = document.getElementById("dailySalary").value;
    document.getElementById("eDSalary").innerHTML = sal;
    var day = document.getElementById("daysOfWork").value;
    document.getElementById("eDays").innerHTML = day;
    var all = 500;
    document.getElementById("eAllow").innerHTML = all;
    let x = sal * day;
    let y = x + all;
    document.getElementById("tSalary").innerHTML = y;

    var sss = document.getElementById("sss").value;
    document.getElementById("eSSS").innerHTML = sss;
    var bir = document.getElementById("bir").value;
    document.getElementById("eBir").innerHTML = bir;
    var pag = 100;
    document.getElementById("ePag").innerHTML = pag;

    let a = sss*1 ;
    let b = bir*1 ;
    let c = pag*1 ;
    let z = a + b + c;
    document.getElementById("tDed").innerHTML = z;

    let N = y - z;
    document.getElementById("netPay").innerHTML = N;
}