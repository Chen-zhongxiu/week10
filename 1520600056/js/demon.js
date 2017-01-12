/**
 * Created by Administrator on 2016/11/8 0008.
 */
// canvas ��ʼ��
var canvas = document.getElementById("canvas");
canvas.width = 375;
canvas.height = 667;
var context = canvas.getContext("2d");
context.fillStyle = "#ebebeb";
context.fillRect(0, 0, canvas.width, canvas.height);
drawBackGround(context);

function generate(cxt) {
    // idΪhisName���ı������
    var hisName = document.getElementById('hisName');
    cxt.beginPath();
    // ״̬���϶Է����ǳ�
    cxt.font = '20px ����';
    cxt.textAlign = 'center';
    cxt.textBaseline = 'top';
    cxt.fillStyle = '#ffffff';
    // hisName.valueΪ'hisName'���ı�����������
    cxt.fillText(hisName.value, 187, 32);

    // �����ı��̶���Ϊ���Ͻ�
    cxt.textAlign = 'left';
    var chk = new Array(8);
    var select = new Array(8);
    var content = new Array(8);

    // ���ݵ��߿���ϱ߾�
    var dis = 0;

    for (var i = 1; i <9; i++) {
        // idΪchk1~chk7�ĸ�ѡ�����
        chk[i] = document.getElementById('chk' + i);
        // idΪselect1~select7������ѡ������
        select[i] = document.getElementById('select' + i);
        // idΪcnt1~cnt7����������
        content[i] = document.getElementById('cnt' + i);
        if (i == 1) {
            dis = 20 + 43 + 16;//��һ�����ݵ�y��220px��״̬�� + 40px�ı߾�
        } else {
            dis = dis + (Math.ceil(cxt.measureText(content[i - 1].value).width / (16 * 13)) * (16 + 5)) + 2 * 12 + 20;
            //֮������ݵ�y��֮ǰ�����ݵ�y + ǰһ�����ݸ߶� + 38px�����ݼ��
            //dis = dis + (Math.ceil(cxt.measureText(content[i - 1].value).width / (52 * 13)) * (52 + 17)) + 2 * 36 + 38;
        }

            // ��ѡ�򱻹�ѡʱ
            if (chk[i].checked) {
                // ����ѡ����ѡ������ֵ 0���ң�1���Է�
                var index = select[i].selectedIndex;
                if (index == 0) {
                    drawMyMessage(cxt, content[i].value, dis)
                } else {
                    drawHisMessage(cxt, content[i].value, dis)
                }
            }
        }
    }

    /**
     * ���Ʊ���
     * @param  {[type]} cxt [description]
     * @return {[type]}
     */
    function drawBackGround(cxt) {
        // ״̬������
        cxt.beginPath();
        var grd = cxt.createLinearGradient(0, 0, 0, 63);
        grd.addColorStop(0.0, '#221f25');
        grd.addColorStop(1.0, '#454545');
        cxt.fillStyle = grd;
        cxt.fillRect(0, 0, 375, 63);

        //���챳��
        cxt.beginPath();
        var img = new Image();
        img.src = "image/background.jpg";
        img.onload = function () {
            cxt.drawImage(img, 0, 63, 375, 556)
        }

        // ����״̬��
        cxt.beginPath();
        var bar = new Image();
        bar.src = './image/bar.png';
        bar.onload = function () {
            cxt.drawImage(bar, 5, 0)
        };

        // �����
        cxt.beginPath();
        var inputbar = new Image();
        inputbar.src = './image/inputbar.png';
        inputbar.onload = function () {
            cxt.drawImage(inputbar, 0, 619)
        };

        // ���Ͻǵķ��ذ�ť
        cxt.beginPath();
        var back = new Image();
        back.src = './image/back.png';
        back.onload = function () {
            cxt.drawImage(back, 0, 16)
        };

        // ���Ͻǵĸ������İ�ť
        cxt.beginPath();
        var person = new Image();
        person.src = './image/person.png';
        person.onload = function () {
            cxt.drawImage(person, 336, 16)
        };

        // �������Ͻǵġ�΢�š�
        cxt.beginPath();
        cxt.font="16px ����"
        //cxt.font = 'lighter 16px Heiti SC';
        cxt.fillStyle = '#FFFFFF';
        cxt.fillText("΢��", 24, 46);
    }

    /**
     * ������ɫ����
     * @param  {[type]} cxt [����]
     * @param  {[type]} x   [�������ϽǶ���x]
     * @param  {[type]} y   [�������ϽǶ���y]
     * @param  {[type]} w   [���ݿ��]
     * @param  {[type]} h   [���ݸ߶�]
     * @param  {[type]} r   [����Բ�ǰ뾶]
     * @return {[type]}     []
     */
    function drawMyChat(cxt, x, y, w, h, r) {
        cxt.beginPath();
        cxt.moveTo(x + r, y);// A��
        cxt.lineTo(x + w - r, y);// B��
        cxt.arc(x + w - r, y + r, r, 1.5 * Math.PI, 2 * Math.PI);
        cxt.lineTo(x + w, y + r + 12);
        cxt.lineTo(x + w + 6, y + r + 12 + 3);
        cxt.lineTo(x + w, y + r + 12 + 6);
        cxt.lineTo(x + w, y + h - r);// F��
        cxt.arc(x + w - r, y + h - r, r, 0, 0.5 * Math.PI);
        cxt.lineTo(x + r, y + h);// D��
        cxt.arc(x + r, y + h - r, r, 0.5 * Math.PI, Math.PI);
        cxt.lineTo(x, y + r); // G��
        cxt.arc(x + r, y + r, r, Math.PI, 1.5 * Math.PI);

        cxt.lineWidth = 1;
        cxt.strokeStyle = '#9edb5d';
        cxt.stroke();
        cxt.fillStyle = '#a4ea5c';
        cxt.fill();
    }

    /**
     * ���ư�ɫ����
     * @param  {[type]} cxt [����]
     * @param  {[type]} x   [�������ϽǶ���x]
     * @param  {[type]} y   [�������ϽǶ���y]
     * @param  {[type]} w   [���ݿ��]
     * @param  {[type]} h   [���ݸ߶�]
     * @param  {[type]} r   [����Բ�ǰ뾶]
     * @return {[type]}     []
     */
    function drawHisChat(cxt, x, y, w, h, r) {
        cxt.beginPath();
        cxt.moveTo(x + r, y); // A��
        cxt.lineTo(x + w - r, y);// B��
        cxt.arc(x + w - r, y + r, r, 1.5 * Math.PI, 2 * Math.PI);
        cxt.lineTo(x + w, y + h - r);// F��
        cxt.arc(x + w - r, y + h - r, r, 0, 0.5 * Math.PI);
        cxt.lineTo(x + r, y + h);// D��
        cxt.arc(x + r, y + h - r, r, 0.5 * Math.PI, Math.PI);
        cxt.lineTo(x, y + r + 12 + 6);
        cxt.lineTo(x - 6, y + r + 12 + 3);
        cxt.lineTo(x, y + r + 12);
        cxt.lineTo(x, y + r); // G��
        cxt.arc(x + r, y + r, r, Math.PI, 1.5 * Math.PI);

        cxt.lineWidth = 1;
        cxt.strokeStyle = '#fafafa';
        cxt.stroke();
        cxt.fillStyle = '#ffffff';
        cxt.fill();
    }

    /**
     * �����ı����������ұߵ���ɫ����
     * @param  {[type]} cxt [����]
     * @param  {[type]} msg [�ı�����]
     * @param  {[type]} y   [�������ϽǶ���y]
     * @return {[type]}     []
     */
    function drawMyMessage(cxt, msg, y) {
        cxt.beginPath();
        // �����ұߵ�ͷ��
        var myHead = new Image();
        myHead.src = document.getElementById('imgHead1').src;
        myHead.onload = function () {
            cxt.drawImage(myHead, 375 - 6 - 40, y, 40, 40);
        };

        cxt.beginPath();
        cxt.font = '18px ����';
        // �õ��ı��Ŀ��
        var msgLength = cxt.measureText(msg).width;
        // ���ݵĿ�ȣ�msgLength+24;�������ϽǶ���x���꣺375-40-10-4-(msgLength+24)
        // ���ݸ߶��趨Ϊ1�����֣�h=40;����Բ�ǰ뾶�̶�Ϊ5
        var count = parseInt(msgLength / (18 * 13)) * (18 + 5)//������Ϣ���ȼ������ݵĶ���߶�

        drawMyChat(cxt, 375 - 40 - 10 - 4 - 2 * 12 - (msgLength >= 18 * 13 ? 18 * 13 : msgLength), y, (msgLength >= 18 * 13 ? 18 * 13 : msgLength) + 2 * 12, 40 + count, 5);
        cxt.fillStyle = 'black'
        cxt.textBaseline = 'top';
        cxt.fillStyle = 'black';
        // �����ڱ߾�Ϊ12�������ı���x��y Ҫ�����ݵĻ�����+12
        drawText(cxt, msg, 375 - 40 - 10 - 4 - 12 - (msgLength >= 18 * 13 ? 18 * 13 : msgLength), y + 12)

    }

    /**
     * �����ı����������ұߵ���ɫ����
     * @param  {[type]} cxt [����]
     * @param  {[type]} msg [�ı�����]
     * @param  {[type]} y   [�������ϽǶ���y]
     * @return {[type]}     [description]
     */
    function drawHisMessage(cxt, msg, y) {
        cxt.beginPath();
        // ������ߵ�ͷ��
        var hisHead = new Image();
        hisHead.src = document.getElementById('imgHead2').src;
        hisHead.onload = function () {
            cxt.drawImage(hisHead, 6, y, 40, 40);// ��ߵ�ͷ�����ϽǶ���x:6
        };

        cxt.beginPath();
        //cxt.font = '18px STHeitiSC-Light';
        cxt.font='18px ����';
        var msgLength = cxt.measureText(msg).width;
        var count = parseInt(msgLength / (18 * 13)) * (18 + 5)//������Ϣ���ȼ������ݵĶ���߶�
        drawHisChat(cxt, 40 + 10 + 4, y, (msgLength >= 18 * 13 ? 18 * 13 : msgLength) + 2 * 12, 40 + count, 5);
        cxt.textBaseline = 'top';
        cxt.fillStyle = 'black';

        drawText(cxt, msg, 40 + 10 + 4 + 12, y + 12)

    }
    /**
     * ����ı����ı�ÿ�еĳ���Ϊ ��52 * 12.5���� ��52 * 13�� ����
     * @param cxt   [����]
     * @param msg   [�ı���Ϣ]
     * @param x     [�ı������Ͻ�����X]
     * @param y     [�ı������Ͻ�����Y]
     */
    function drawText(cxt, msg, x, y) {
        var linewidth = 18 * 12.5;//�ı����п�Ϊ 52*12.5 ����
        var text = "";
        var msgLength = cxt.measureText(msg).width;
        var newtext = msg.split("");
        cxt.beginPath()
        cxt.font = '18px ����';
        cxt.textBaseline = 'top'
        cxt.fillStyle = 'black'

        for (var i = 0; i <= msgLength; i += 13) {
            if (cxt.measureText(text).width >= linewidth)//��text�Ŀ�ȴ��ڵ����еĳ���ʱ�����text
            {
                cxt.fillText(text, x, y);
                y = y + 18 + 5;//�ı���СΪ18px���ټ����м��5px
                text = "";//��ʼ��text
            }
            if (newtext[0] == null) {//��newtext[0]Ϊ��ʱ������������û����Ϣ�����������Ϣ������ѭ��
                cxt.fillText(text, x, y)
                break;
            }

            var text = text + newtext[0];//����ֺ��newtext�������θ�ֵ��text
            newtext.shift();//ɾ��newtext����ĵ�һ��Ԫ��
        }
    }
