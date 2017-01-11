/**
 * Created by ���� on 2016/12/23.
 */
// canvas ��ʼ��
var canvas = document.getElementById("canvas")
canvas.width = 375
canvas.height = 667
var context = canvas.getContext("2d")
context.fillStyle = "#ebebeb"
context.fillRect(0, 0, canvas.width, canvas.height)
drawBackGround(context)

/**
 * �����ť���ɽ���
 * @param  {[type]} cxt [����]
 * @return {[type]}
 */
function generate(cxt) {
    // �õ�HTML��idΪhisName���ı������
    var hisName = document.getElementById('hisName')
    cxt.beginPath()
    // ����״̬���϶Է����ǳ�
    cxt.font = 'lighter 18px STHeitiSC-Light'
    // �ı�ˮƽ����
    cxt.textAlign = 'center'
    cxt.textBaseline = 'top'
    cxt.fillStyle = '#ffffff'
    // hisName.valueΪ'hisName'���ı�����������
    cxt.fillText(hisName.value, 187, 32)

    // �����ı��̶���Ϊ���Ͻǣ�������������ı���
    cxt.textAlign = 'left'
    var chk = new Array(7)
    var select = new Array(7)
    var content = new Array(7)

    // ���ݵ��߿���ϱ߾�
    var dis = 0

    for (var i = 1; i < 8; i++) {
        if (i == 1) {
            // ��һ�����ݵ�y��״̬����20+43���ټ�16
            dis = 20 + 43 + 16
        } else {
            // ֮������ݵ�y��֮ǰ��y�����Ͼ���20���ټ����ݵĸ߶�40
            dis = dis + 20 + 40
        }

        // ��� 7 �鹲 21 �� html �ı�ǩ����
        // �õ�idΪchk1~chk7�ĸ�ѡ�����
        chk[i] = document.getElementById('chk' + i)
        // �õ�idΪselect1~select7������ѡ������
        select[i] = document.getElementById('select' + i)
        // �õ�idΪcnt1~cnt7����������
        content[i] = document.getElementById('cnt' + i)

        // �����ѡ�򱻹���
        if (chk[i].checked) {
            // �õ�����ѡ����ѡ������ֵ
            // 0���ң�1���Է�
            var index = select[i].selectedIndex
            if (index == 0) {
                drawMyMessage(cxt, content[i].value, dis)
            } else {
                drawHisMessage(cxt, content[i].value, dis)
            }
        }
    }
    drawtime(context)
}


/**
 * ���Ʊ���
 * @param  {[type]} cxt [description]
 * @return {[type]}
 */
function drawBackGround(cxt) {
    // ����״̬������
    cxt.beginPath()
    var grd = cxt.createLinearGradient(0, 0, 0, 63)
    grd.addColorStop(0.0, '#221f25')
    grd.addColorStop(1.0, '#454545')
    cxt.fillStyle = grd
    cxt.fillRect(0, 0, 375, 63)

    // ���Ƶ���״̬��
    var bar = new Image()
    bar.src = './image/bar1.png'
    bar.onload = function() {
        cxt.drawImage(bar, 5, 0)
    }

    // ���������
    var inputbar = new Image()
    inputbar.src = './image/inputbar.png'
    inputbar.onload = function() {
        cxt.drawImage(inputbar, 0, 619)
    }

    // �������ϽǷ��ذ�ť
    var back = new Image()
    back.src = './image/back.png'
    back.onload = function() {
        cxt.drawImage(back, 0, 16)
    }

    // �������ϽǸ������İ�ť
    var person = new Image()
    person.src = './image/person.png'
    person.onload = function() {
        cxt.drawImage(person, 336, 16)
    }

    // �������Ͻǵġ�΢�š�
    cxt.beginPath()
    cxt.font = '16px Arial'
    cxt.fillStyle = '#ffffff'
    cxt.fillText('Wechat', 24, 46)
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
    cxt.beginPath()
    cxt.moveTo(x + r, y) // A��
    cxt.lineTo(x + w - r, y) // B��
    cxt.arc(x + w - r, y + r, r, 1.5 * Math.PI, 2 * Math.PI)
    cxt.lineTo(x + w, y + r + 12)
    cxt.lineTo(x + w + 6, y + r + 12 + 3)
    cxt.lineTo(x + w, y + r + 12 + 6)
    cxt.lineTo(x + w, y + h - r) // F��
    cxt.arc(x + w - r, y + h - r, r, 0, 0.5 * Math.PI)
    cxt.lineTo(x + r, y + h) // D��
    cxt.arc(x + r, y + h - r, r, 0.5 * Math.PI, Math.PI)
    cxt.lineTo(x, y + r); // G��
    cxt.arc(x + r, y + r, r, Math.PI, 1.5 * Math.PI)

    cxt.lineWidth = 1
    cxt.strokeStyle = '#9edb5d'
    cxt.stroke()
    cxt.fillStyle = '#a4ea5c'
    cxt.fill()
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
    cxt.beginPath()
    cxt.moveTo(x + r, y) // A��
    cxt.lineTo(x + w - r, y) // B��
    cxt.arc(x + w - r, y + r, r, 1.5 * Math.PI, 2 * Math.PI)
    cxt.lineTo(x + w, y + h - r) // F��
    cxt.arc(x + w - r, y + h - r, r, 0, 0.5 * Math.PI)
    cxt.lineTo(x + r, y + h) // D��
    cxt.arc(x + r, y + h - r, r, 0.5 * Math.PI, Math.PI)
    cxt.lineTo(x, y + r + 12 + 6)
    cxt.lineTo(x - 6, y + r + 12 + 3)
    cxt.lineTo(x, y + r + 12)
    cxt.lineTo(x, y + r); // G��
    cxt.arc(x + r, y + r, r, Math.PI, 1.5 * Math.PI)

    cxt.lineWidth = 1
    cxt.strokeStyle = '#fafafa'
    cxt.stroke()
    cxt.fillStyle = '#ffffff'
    cxt.fill()
}

/**
 * �����ı����������ұߵ���ɫ����
 * @param  {[type]} cxt [����]
 * @param  {[type]} msg [�ı�����]
 * @param  {[type]} y   [�������ϽǶ���y]
 * @return {[type]}     []
 */
function drawMyMessage(cxt, msg, y) {

    cxt.beginPath()
    // �����ұߵ�ͷ��
    var myHead = new Image()
    myHead.src = document.getElementById('imgHead1').src;
    // myHead.src = './image/face1.png'
    myHead.onload = function() {
        // �ұߵ�ͷ�����ϽǶ���x:375-6-40
        cxt.drawImage(myHead, 375 - 6 - 40, y)
    }

    cxt.beginPath()
    cxt.font = '16px STHeitiSC-Light'
    // �õ��ı��Ŀ�ȣ�ע���ȵ����ú�������ȥ������ȣ�
    var msgLength = cxt.measureText(msg).width
    // �����ı��Ŀ�ȿ��Լ�������ݵĿ�ȣ�msgLength+24
    // ͬʱ���Եõ��������ϽǶ���x���꣺375-40-10-4-(msgLength+24)
    // ���ݸ߶��趨Ϊ1�����֣�h=40
    // ����Բ�ǰ뾶�̶�Ϊ5
    drawMyChat(cxt, 375 - 40 - 10 - 4 - msgLength - 24,
        y, msgLength + 24, 40, 5)
    // �ı���ֱ��������Ϊtop��Ĭ��Ϊbottom)
    // �Ա�ʹ�ı��Ĺ̶���(x,y)ҲΪ���Ͻǣ�ͬ����һ���������Ͻǣ�
    cxt.textBaseline = 'top'
    cxt.fillStyle = 'black'
    // �����ڱ߾�Ϊ12�������ı���x��y Ҫ�����ݵĻ�����+12
    cxt.fillText(msg, 375 - 40 - 10 - 4 - msgLength -
        24 + 12, y + 12)
}

/**
 * �����ı����������ұߵ���ɫ����
 * @param  {[type]} cxt [����]
 * @param  {[type]} msg [�ı�����]
 * @param  {[type]} y   [�������ϽǶ���y]
 * @return {[type]}     [description]
 */
function drawHisMessage(cxt, msg, y) {

    cxt.beginPath()
    // ������ߵ�ͷ��
    var hisHead = new Image()
    hisHead.src = document.getElementById('imgHead2').src;
    // hisHead.src = './image/face2.png'
    hisHead.onload = function() {
        // ��ߵ�ͷ�����ϽǶ���x:6
        cxt.drawImage(hisHead, 6, y)
    }

    cxt.beginPath()
    cxt.font = '16px STHeitiSC-Light'
    var msgLength = cxt.measureText(msg).width
    drawHisChat(cxt, 40 + 10 + 4, y, msgLength + 24, 40, 5)
    cxt.textBaseline = 'top'
    cxt.fillStyle = 'black'
    cxt.fillText(msg, 40 + 10 + 4 + 12, y + 12)
}
function drawtime(cxt)
{
    var Hour = document.getElementById('hour');
    var Minute = document.getElementById('minute');
    var Time = document.getElementById('time')
    cxt.beginPath();
    cxt.font="12px Arial";
    cxt.textAlign='center';
    cxt.fillStyle='white';
    cxt.fillText(Hour.value+":"+ Minute.value+" "+ Time.value,187,0);
}
