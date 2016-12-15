var canvas = document.getElementById("canvas");
canvas.width = 375;
canvas.height = 600;
var context = canvas.getContext("2d");
context.fillStyle = "#ebebeb"
context.fillRect(0, 0, canvas.width, canvas.height)



drewblackground(context);



function qipaomy(cxt, x, y, w, h, r) {      //�ҵ�����
    cxt.beginPath();
    cxt.moveTo(x - r, y);
    cxt.arc(x, y, r, Math.PI, Math.PI * 3 / 2);
    cxt.lineTo(x + w, y - r);
    cxt.arc(x + w, y, r, Math.PI * 3 / 2, Math.PI * 2);
    cxt.lineTo(x + w + r, y + r + 12);
    cxt.lineTo(x + w + r + 6, y + r + 12 + 3);
    cxt.lineTo(x + w + r, y + r + 12 + 6);
    cxt.lineTo(w + x + r, h + y - r);
    cxt.lineTo(x + w + r, y + h);
    cxt.arc(x + w, y + h, r, 0, Math.PI * 0.5);
    cxt.lineTo(x, y + h + r);
    cxt.arc(x, y + h, r, Math.PI * 0.5, Math.PI);
    cxt.closePath();

    cxt.lineWidth = 1
    cxt.strokeStyle = '#9edb5d'
    cxt.stroke()
    cxt.fillStyle = '#a4ea5c'
    cxt.fill()
}

function qipaoy(cxt, x, y, w, h, r) {              //��������
    cxt.beginPath();
    cxt.moveTo(x - r, y);
    cxt.arc(x, y, r, Math.PI, Math.PI * 3 / 2);
    cxt.lineTo(x + w, y - r);
    cxt.arc(x + w, y, r, Math.PI * 3 / 2, Math.PI * 2);
    cxt.lineTo(x + w + r, y + h);
    cxt.arc(x + w, y + h, r, 0, Math.PI * 0.5);
    cxt.lineTo(x, y + h + r);
    cxt.arc(x, y + h, r, Math.PI * 0.5, Math.PI);
    cxt.lineTo(x - r, y + r + 12);
    cxt.lineTo(x - 6 - r, y + r + 12 + 3);
    cxt.lineTo(x - r, y + r + 12 + 6);
    cxt.closePath();

    cxt.lineWidth = 1
    cxt.strokeStyle = '#fafafa'
    cxt.stroke()
    cxt.fillStyle = '#ffffff'
    cxt.fill()
}

function drewblackground(cxt) {
    cxt.beginPath();                                                    //�м䱳��
    var grd = cxt.createLinearGradient(375 / 2, 0, 375 / 2, 63)
    grd.addColorStop(0.0, '#221f25');
    grd.addColorStop(1.0, '#454545');
    cxt.fillStyle = grd;
    cxt.fillRect(0, 0, 375, 63);

    var bar = new Image()       //�Ϸ�����
    bar.src = "./shang.png"
    bar.onload = function () {
        cxt.drawImage(bar, 0, 0);
    }

    var back = new Image()          //���ϽǷ��ؼ�
    back.src = './jian.png'
    back.onload = function () {
        cxt.drawImage(back, -1, 24)
    }

    var person = new Image()                //���Ͻ�����
    person.src = './person.png'
    person.onload = function () {
        cxt.drawImage(person, 336, 28)
    }

    var xia = new Image()                //�������
    xia.src = './xia.png'
    xia.onload = function () {
        cxt.drawImage(xia, 0, 552)
    }


}
function mymessage(cxt, msg, y) {                     //�ҵ���Ϣ
            cxt.beginPath()    // �����ұߵ�ͷ��
    var myHead = new Image()
    myHead.src="./myhead.png"
    myHead.onload = function() {
        // �ұߵ�ͷ�����ϽǶ���x:375-6-40
        cxt.drawImage(myHead, 375 - 6 - 40, y-3)
    }

    var mseglength = cxt.measureText(msg).width
    n=mseglength/200;
    if(mseglength<217){                                                              //�ж������Ƿ񳬹�13����
    qipaomy(cxt, 375 - 40 - 10 - 4 - mseglength - 24, y, mseglength + 24, 40, 5);}
    else {qipaomy(cxt, 375 - 40 - 10 - 4-240, y, 240, 40+12*n, 5);}                  //�������һ��
    cxt.beginPath();
    cxt.font = '16px STHeitisc-Light'
    cxt.textBaseline = "top";
    cxt.fillStyle = "black";
    if(mseglength<217){
    cxt.fillText(msg, 375 - 40 - 10 - 4 - mseglength - 24 + 12, y + 12);}
    else {longtext(context,375-40-10-4-228,y+12,msg)}                        //ͨ��longtext����
    console.log(mseglength)


}

function hismessage(cxt, msg, y) {                //������Ϣ
    cxt.beginPath()    // ������ߵ�ͷ��
    var hisHead = new Image()
    hisHead.src="./hishead.png"
    hisHead.onload = function() {
        cxt.drawImage(hisHead, 6, y-3)
    }

    var mseglength = cxt.measureText(msg).width
    n=mseglength/200;
    if(mseglength<217){
    qipaoy(cxt, 40 + 10 + 4, y, mseglength + 24, 40, 5);}
    else {qipaoy(cxt, 40 + 10 + 4, y, 240, 40+12*n, 5);}
    cxt.beginPath();
    cxt.font = '16px STHeitisc-Light'
    cxt.textBaseline = "top";
    cxt.fillStyle = "black";
    if(mseglength<217){
    cxt.fillText(msg, 40 + 10 + 4 + 12, y + 12);}
    else {longtext(context,40+10+4+12,y+12,msg)}
}

function longtext(context,x,y,msg){             //д������
    var text = "";
    var sum =0;
    var stringLength = msg.length;              //������ӵĳ���
    var newText=msg.split("");                   // �������ַ����ָ�Ϊ���ַ���
    for(var i=0;i<=stringLength;i++)             //forѭ����i<���ӳ�����i++
    {
        if(sum==13)                               //��sum=13ʱ�����text
        {
            context.fillText(text,x,y)
            y=y+20;
            text="" ;
            sum=0;
        }
        text=text+newText[0];                     //text=ÿ�������
        sum++;                                    //ÿһ��ѭ��sum+1
        newText.shift();

    }

}


function generate(context) {                            //����
    var hisName = document.getElementById('hisName')
    console.log(hisName.value)
    context.beginPath();
    context.font = 'lighter 18px STHeitiSC-Light'
    context.textAlign = 'center'
    context.textBaseline = 'button'
    context.fillStyle = '#ffffff'
    context.fillText(hisName.value, 75, 50)


    context.textAlign = 'left'  // �����ı��̶���Ϊ���Ͻ�



    var chk = new Array(7)
    var select = new Array(7);
    var content = new Array(7);

    var dis=0;

    for (var i = 1; i < 8; i++) {
        if (i == 1) {
            dis = 20 + 43 + 16;
        } else {
            dis = dis + 20 + 40+20*n;
            console.log(n)
        }

        chk[i] = document.getElementById('chk' + i)
        select[i] = document.getElementById('select' + i)
        content[i] = document.getElementById('cnt' + i)


        if (chk[i].checked) {
            var index = select[i].selectedIndex
            if (index == 0) {
                mymessage(context, content[i].value, dis)
            } else {
                hismessage(context, content[i].value, dis)
            }

        }
    }
}
