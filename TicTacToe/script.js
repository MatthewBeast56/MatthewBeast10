var a=0;
var b=0;
var c=0;
var d=0;
var e=0;
var f=0;
var g=0;
var h=0;
var i=0;
var whose_move=1;
var temp='';
var ok=0;
var who_won=0;
var count_player_wins=0;
var count_computer_wins=0;
var count_ties=0;

function Reset()
{
whose_move=1;
a=0;
b=0;
c=0;
d=0;
e=0;
f=0;
g=0;
h=0;
i=0;
temp='';
ok=0;
who_won=0;
count_player_wins=0;
count_computer_wins=0;
count_ties=0;
document.getElementById('player').value=0;
document.getElementById('computer').value=0;
document.getElementById('ties').value=0;
document.getElementById('A').src="blank.jpg";
document.getElementById('B').src="blank.jpg";
document.getElementById('C').src="blank.jpg";
document.getElementById('D').src="blank.jpg";
document.getElementById('E').src="blank.jpg";
document.getElementById('F').src="blank.jpg";
document.getElementById('G').src="blank.jpg";
document.getElementById('H').src="blank.jpg";
document.getElementById('I').src="blank.jpg";
}

function playAgain()
{
whose_move=1;
a=0;
b=0;
c=0;
d=0;
e=0;
f=0;
g=0;
h=0;
i=0;
temp='';
ok=0;
who_won=0;
document.getElementById('A').src="blank.jpg";
document.getElementById('B').src="blank.jpg";
document.getElementById('C').src="blank.jpg";
document.getElementById('D').src="blank.jpg";
document.getElementById('E').src="blank.jpg";
document.getElementById('F').src="blank.jpg";
document.getElementById('G').src="blank.jpg";
document.getElementById('H').src="blank.jpg";
document.getElementById('I').src="blank.jpg";
}

function help()
{
alert("Welcome to Tic-Tac-Toe! Player plays as the O's and AI plays as the X's. Select the square you want to put your variable into by clicking them.You cannot occupy a square that is already occupied. The first player to get three squares in a row wins. Good Luck!!");
}
function check_win()
{
if((a==1)&&(b==1)&&(c==1))who_won=1;
if((a==1)&&(d==1)&&(g==1))who_won=1;
if((g==1)&&(h==1)&&(i==1))who_won=1;
if((c==1)&&(f==1)&&(i==1))who_won=1;
if((a==1)&&(e==1)&&(i==1))who_won=1;
if((c==1)&&(e==1)&&(g==1))who_won=1;
if((d==1)&&(e==1)&&(f==1))who_won=1;
if((b==1)&&(e==1)&&(h==1))who_won=1;

if((a==2)&&(b==2)&&(c==2))who_won=2;
if((a==2)&&(d==2)&&(g==2))who_won=2;
if((g==2)&&(h==2)&&(i==2))who_won=2;
if((c==2)&&(f==2)&&(i==2))who_won=2;
if((a==2)&&(e==2)&&(i==2))who_won=2;
if((c==2)&&(e==2)&&(g==2))who_won=2;
if((d==2)&&(e==2)&&(f==2))who_won=2;
if((b==2)&&(e==2)&&(h==2))who_won=2;

if((a!=0)&&(b!=0)&&(c!=0)&&(d!=0)&&(e!=0)&&(f!=0)&&(g!=0)&&(h!=0)&&(i!=0)&&(who_won==0))who_won=3;
}

function process()
{
check_win();
if(who_won==1)
{
alert("Player won!");
count_player_wins++;
document.getElementById('player').value=count_player_wins;
playAgain();
}
if(who_won==2)
{
alert("Computer won!");
count_computer_wins++;
document.getElementById('computer').value=count_computer_wins;
playAgain();
}
if(who_won==3)
{
alert("It is a tie!");
count_ties++;
document.getElementById('ties').value=count_ties;
playAgain();
}
}

function check_Space()
{
if((temp=="A")&&(a==0))
{
ok=1;
if(whose_move==1)a=1;
if(whose_move==2)a=2;
}
if((temp=="B")&&(b==0))
{
ok=1;
if(whose_move==1)b=1;
if(whose_move==2)b=2;
}
if((temp=="C")&&(c==0))
{
ok=1;
if(whose_move==1)c=1;
if(whose_move==2)c=2;
}
if((temp=="D")&&(d==0))
{
ok=1;
if(whose_move==1)d=1;
if(whose_move==2)d=2;
}
if((temp=="E")&&(e==0))
{
ok=1;
if(whose_move==1)e=1;
if(whose_move==2)e=2;
}
if((temp=="F")&&(f==0))
{
ok=1;
if(whose_move==1)f=1;
if(whose_move==2)f=2;
}
if((temp=="G")&&(g==0))
{
ok=1;
if(whose_move==1)g=1;
if(whose_move==2)g=2;
}
if((temp=="H")&&(h==0))
{
ok=1;
if(whose_move==1)h=1;
if(whose_move==2)h=2;
}
if((temp=="I")&&(i==0))
{
ok=1;
if(whose_move==1)i=1;
if(whose_move==2)i=2;
}
}
function computer_winning_move()
{
	if((a==2)&&(b==2)&&(c==0)&&(temp==""))temp="C";
	if((a==0)&&(b==2)&&(c==2)&&(temp==""))temp="A";
	if((a==2)&&(b==0)&&(c==2)&&(temp==""))temp="B";
	if((a==2)&&(d==2)&&(g==0)&&(temp==""))temp="G";
	if((a==2)&&(d==0)&&(g==2)&&(temp==""))temp="D";
	if((a==0)&&(d==2)&&(g==2)&&(temp==""))temp="A";
	if((g==2)&&(h==2)&&(i==0)&&(temp==""))temp="I";
	if((g==2)&&(h==0)&&(i==2)&&(temp==""))temp="H";
	if((g==0)&&(h==2)&&(i==2)&&(temp==""))temp="G";
	if((c==2)&&(f==2)&&(i==0)&&(temp==""))temp="I";
	if((c==2)&&(f==0)&&(i==2)&&(temp==""))temp="F";
	if((c==0)&&(f==2)&&(i==2)&&(temp==""))temp="C";
	if((d==2)&&(e==2)&&(f==0)&&(temp==""))temp="F";
	if((d==2)&&(e==0)&&(f==2)&&(temp==""))temp="E";
	if((d==0)&&(e==2)&&(f==2)&&(temp==""))temp="D";
	if((b==2)&&(e==2)&&(h==0)&&(temp==""))temp="H";
	if((b==2)&&(e==0)&&(h==2)&&(temp==""))temp="E";
	if((b==0)&&(e==2)&&(h==2)&&(temp==""))temp="B";
	if((a==2)&&(e==2)&&(i==0)&&(temp==""))temp="I";
	if((a==2)&&(e==0)&&(i==2)&&(temp==""))temp="E";
	if((a==0)&&(e==2)&&(i==2)&&(temp==""))temp="A";
	if((c==2)&&(e==2)&&(g==0)&&(temp==""))temp="G";
	if((c==2)&&(e==0)&&(g==2)&&(temp==""))temp="E";
	if((c==0)&&(e==2)&&(g==2)&&(temp==""))temp="C";
}
function computer_against_move()
{
	if((a==1)&&(b==1)&&(c==0)&&(temp==""))temp="C";
	if((a==0)&&(b==1)&&(c==1)&&(temp==""))temp="A";
	if((a==1)&&(b==0)&&(c==1)&&(temp==""))temp="B";
	if((a==1)&&(d==1)&&(g==0)&&(temp==""))temp="G";
	if((a==1)&&(d==0)&&(g==1)&&(temp==""))temp="D";
	if((a==0)&&(d==1)&&(g==1)&&(temp==""))temp="A";
	if((g==1)&&(h==1)&&(i==0)&&(temp==""))temp="I";
	if((g==1)&&(h==0)&&(i==1)&&(temp==""))temp="H";
	if((g==0)&&(h==1)&&(i==1)&&(temp==""))temp="G";
	if((c==1)&&(f==1)&&(i==0)&&(temp==""))temp="I";
	if((c==1)&&(f==0)&&(i==1)&&(temp==""))temp="F";
	if((c==0)&&(f==1)&&(i==1)&&(temp==""))temp="C";
	if((d==1)&&(e==1)&&(f==0)&&(temp==""))temp="F";
	if((d==1)&&(e==0)&&(f==1)&&(temp==""))temp="E";
	if((d==0)&&(e==1)&&(f==1)&&(temp==""))temp="D";
	if((b==1)&&(e==1)&&(h==0)&&(temp==""))temp="H";
	if((b==1)&&(e==0)&&(h==1)&&(temp==""))temp="E";
	if((b==0)&&(e==1)&&(h==1)&&(temp==""))temp="B";
	if((a==1)&&(e==1)&&(i==0)&&(temp==""))temp="I";
	if((a==1)&&(e==0)&&(i==1)&&(temp==""))temp="E";
	if((a==0)&&(e==1)&&(i==1)&&(temp==""))temp="A";
	if((c==1)&&(e==1)&&(g==0)&&(temp==""))temp="G";
	if((c==1)&&(e==0)&&(g==1)&&(temp==""))temp="E";
	if((c==0)&&(e==1)&&(g==1)&&(temp==""))temp="C";
}
function computer_random_move()
{
	while(ok==0)
	{
		var computer_move=Math.floor(Math.random()*10)+1;
		if(computer_move==1) temp="A";
		if(computer_move==2) temp="B";
		if(computer_move==3) temp="C";
		if(computer_move==4) temp="D";
		if(computer_move==5) temp="E";
		if(computer_move==6) temp="F";
		if(computer_move==7) temp="G";
		if(computer_move==8) temp="H";
		if(computer_move==9) temp="I";
		check_Space();
	}
}
function computer_move()
{
	if(whose_move==2)
	{	temp="";
	ok=0;
	computer_winning_move();
	check_Space();
	if(ok==0)
	{
		computer_against_move();
		check_Space();
		if(ok==0)
		{
			computer_random_move();
		}
	}
	document.getElementById(temp).src='x.jpg';
	whose_move=1;
	process();
}
}

function Move(c)
{
  temp=c;
  ok=0;
  if(whose_move==1)
  {
  check_Space();
  if(ok==1)
  {
  document.getElementById(c).src="o.png";
  whose_move=2;
  process();
  computer_move();
  }
  else
  {
  alert("The square is already occupied. Please select another square.");
  }
  }
}