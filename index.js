var playerType,writeXOrO, counter = 0, draw = 0, bot = 0, user = 0;

var clicked = [];

function setplayer(e)
{
    document.querySelector(".one").style.zIndex = "99";
    document.querySelector(".two").style.zIndex = "1000";
    playerType = e.innerHTML;
    playerType = playerType.slice(8,9);
    if(playerType === 'X')
    {
        document.querySelectorAll(".turn>span")[0].style.color = "white";
        writeXOrO = 1;
    }
    else
    {
        document.querySelector(".slider").style.left = "43%";
        document.querySelectorAll(".turn>span")[1].style.color = "white";
        writeXOrO = 0;
    }
}


function playing(e)
{
    if((e.innerHTML === ""))
    {
        if(counter%2 == 0 )
        {
            if(writeXOrO == 1)
            {
                e.innerHTML = "X";
            }
            else
            {
                e.innerHTML = "O";
            }
            counter++;
            changeplayer();
            checkWon();
            if(counter<9)
                generaterandom();
        }
    }
}

function generaterandom()
{
    var rand ;
    do
    {
        rand = Math.random()*9;
        rand = Math.floor(rand);
    }while(document.querySelectorAll(".play")[rand].innerHTML != "");
    setTimeout(() => {
        if(writeXOrO == 1)
        {
            document.querySelectorAll(".play")[rand].innerHTML = "O";
        }
        else
        {
            document.querySelectorAll(".play")[rand].innerHTML = "X";
        }
        changeplayer();
        checkWon();
    }, 1000);
    counter++;
}

function changeplayer()
{
    if( ( (writeXOrO == 1) && (counter%2 == 0) ) || ( (writeXOrO != 1) && (counter%2 != 0) ) )
    {
        document.querySelector(".slider").style.left = "0";
        document.querySelector(".slider").style.transition = "0.2s linear";
        document.querySelectorAll(".turn>span")[0].style.color = "white";
        document.querySelectorAll(".turn>span")[1].style.color = "#56baed";
    }
    else
    {
        document.querySelector(".slider").style.left = "43%";
        document.querySelector(".slider").style.transition = "0.2s linear";
        document.querySelectorAll(".turn>span")[1].style.color = "white";
        document.querySelectorAll(".turn>span")[0].style.color = "#56baed";
    }
}

function checkWon()
{
    if((document.querySelectorAll(".play")[0].innerHTML==document.querySelectorAll(".play")[1].innerHTML)&&(document.querySelectorAll(".play")[1].innerHTML==document.querySelectorAll(".play")[2].innerHTML))
    {
        if(document.querySelectorAll(".play")[0].innerHTML != "")
        {
            setTimeout(() => {
                document.querySelector(".three").style.zIndex = "10000000";
                document.querySelector(".two").style.zIndex = "100";
            }, 500);
            if(counter%2==0)
                bot++;
            else
                user++;
        }
        else
        {
            draw++;
        }
    }
    else if((document.querySelectorAll(".play")[3].innerHTML==document.querySelectorAll(".play")[4].innerHTML) && (document.querySelectorAll(".play")[4].innerHTML==document.querySelectorAll(".play")[5].innerHTML))
    {
        if(document.querySelectorAll(".play")[3].innerHTML != "")
        {
            setTimeout(() => {
                document.querySelector(".three").style.zIndex = "10000000";
                document.querySelector(".two").style.zIndex = "100";
            }, 500);
            if(counter%2==0)
                bot++;
            else
                user++;
        }
        else
        {
            draw++;
        }
    }
    else if((document.querySelectorAll(".play")[6].innerHTML==document.querySelectorAll(".play")[7].innerHTML)&&(document.querySelectorAll(".play")[7].innerHTML==document.querySelectorAll(".play")[8].innerHTML))
    {
        if(document.querySelectorAll(".play")[6].innerHTML != "")
        {
            setTimeout(() => {
                document.querySelector(".three").style.zIndex = "10000000";
                document.querySelector(".two").style.zIndex = "100";
            }, 500);
            if(counter%2==0)
                bot++;
            else
                user++;
        }
        else
        {
            draw++;
        }
    }
    else if((document.querySelectorAll(".play")[0].innerHTML==document.querySelectorAll(".play")[3].innerHTML)&&(document.querySelectorAll(".play")[3].innerHTML==document.querySelectorAll(".play")[6].innerHTML))
    {
        if(document.querySelectorAll(".play")[0].innerHTML != "")
        {
            setTimeout(() => {
                document.querySelector(".three").style.zIndex = "10000000";
                document.querySelector(".two").style.zIndex = "100";
            }, 500);
            if(counter%2==0)
                bot++;
            else
                user++;
        }
        else
        {
            draw++;
        }
    }
    else if((document.querySelectorAll(".play")[1].innerHTML==document.querySelectorAll(".play")[4].innerHTML)&&(document.querySelectorAll(".play")[4].innerHTML==document.querySelectorAll(".play")[7].innerHTML))
    {
        if(document.querySelectorAll(".play")[1].innerHTML != "")
        {
            setTimeout(() => {
                document.querySelector(".three").style.zIndex = "10000000";
                document.querySelector(".two").style.zIndex = "100";
            }, 500);
            if(counter%2==0)
                bot++;
            else
                user++;
        }
        else
        {
            draw++;
        }
    }
    else if((document.querySelectorAll(".play")[2].innerHTML==document.querySelectorAll(".play")[5].innerHTML)&&(document.querySelectorAll(".play")[5].innerHTML==document.querySelectorAll(".play")[8].innerHTML))
    {
        if(document.querySelectorAll(".play")[2].innerHTML != "")
        {
            setTimeout(() => {
                document.querySelector(".three").style.zIndex = "10000000";
                document.querySelector(".two").style.zIndex = "100";
            }, 500);
            if(counter%2==0)
                bot++;
            else
                user++;
        }
        else
        {
            draw++;
        }
    }
    else if((document.querySelectorAll(".play")[0].innerHTML==document.querySelectorAll(".play")[4].innerHTML)&&(document.querySelectorAll(".play")[4].innerHTML==document.querySelectorAll(".play")[8].innerHTML))
    {
        if(document.querySelectorAll(".play")[0].innerHTML != "")
        {
            setTimeout(() => {
                document.querySelector(".three").style.zIndex = "10000000";
                document.querySelector(".two").style.zIndex = "100";
            }, 500);
            if(counter%2==0)
                bot++;
            else
                user++;
        }
        else
        {
            draw++;
        }
    }
    else if((document.querySelectorAll(".play")[2].innerHTML==document.querySelectorAll(".play")[4].innerHTML)&&(document.querySelectorAll(".play")[4].innerHTML==document.querySelectorAll(".play")[6].innerHTML))
    {
        if(document.querySelectorAll(".play")[2].innerHTML != "")
        {
            setTimeout(() => {
                document.querySelector(".three").style.zIndex = "10000000";
                document.querySelector(".two").style.zIndex = "100";
            }, 500);
            if(counter%2==0)
                bot++;
            else
                user++;
        }
        else
        {
            draw++;
        }
    }
    else
    {
        draw++;
    }
    if(draw >= 9)
        showDraw();
    else if( ( (bot==1)&&(user!=1)) || ( (bot!=1)&&(user==1) ) )
        showWinner(user);
}

function showWinner(num)
{
    if(num == 0)
    {
        //bot won
        if(writeXOrO == 1)
        {
            document.querySelector(".result").innerHTML = "Player O won the game";
        }
        else
        {
            document.querySelector(".result").innerHTML = "Player X won the game";
        }
    }
    else if(num == 1)
    {
        //i won
        if(writeXOrO == 1)
        {
            document.querySelector(".result").innerHTML = "Player X won the game";
        }
        else
        {
            document.querySelector(".result").innerHTML = "Player O won the game";
        }
    }
}
function showDraw()
{
    //draw   not working
    setTimeout(() => {
        document.querySelector(".three").style.zIndex = "10000000";
        document.querySelector(".two").style.zIndex = "100";
        document.querySelector(".result").innerHTML = "Match has been drawn";
    }, 500);
}


