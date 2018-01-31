var e = "[[b;#44D544;]root]&#64;attackvector&#46;org";
var App = {
    echo: function(text) {
        this.echo(text);

        if(ga != undefined) ga('send', 'event', 'echo', 'text', text);
    },
    help: function() {
      showHelp(this);

        if(ga != undefined) ga('send', 'event', 'help');
    },

        ls: function() {
            this.echo('autoexec.cfg');
            this.echo('CLASSIFIED.tar.gz');
            this.echo('hgregal_Private.pgp');
            this.echo('huntergregal.pem');
            this.echo('HashCrackingReport.pdf');
            this.echo('HunterGregalResume.pdf');
            this.echo('passwords.txt');
            this.echo('Python_Encryptor.py');
            this.echo('theSecretToLife.txt');
        if(ga != undefined) ga('send', 'event', 'ls');
    },
    whoami: function() {
        this.echo("root"); 

        if(ga != undefined) ga('send', 'event', 'whoami');
    },
       blog: function() {
        if(ga != undefined) ga('send', 'event', 'blog');
        this.echo("Loading the blog... Wait a sec ...")
        setTimeout(function(){ document.location.href = 'http://blog.attackvector.org'; }, 1000);
    },
        publicPGPkey: function() {
        showPGP(this);
        if(ga != undefined) ga('send', 'event', 'publicPGPkey');
    },
        donate: function() {
        this.echo("\nIf you're feeling generous: [[b;#44D544;]1P58vx24ARDYvfK6QaXJ9soC34EKQrLxZs] \n ")
        if(ga != undefined) ga('send', 'event', 'tip');
    },
        su: function(user) {
        this.echo("Not today, "+user)
        if(ga != undefined) ga('send', 'event', 'su');
    },
    sudo: function(x) {
        this.error("Segmentation fault!")
        if(ga != undefined) ga('send', 'event', 'sudo');
    },
    cat: function(x) {
        this.error("cat "+x+"?.....If only...");
        if(ga != undefined) ga('send', 'event', 'cat');
    },
    www: function() {
        this.echo("This page built with <a href='http://terminal.jcubic.pl/' target='_blank'>jQuery Terminal Emulator</a> plugin, and hosted by <a href='http://pages.github.com' target='_blank'>GitHub Pages<a/>.", {raw:true});
        if(ga != undefined) ga('send', 'event', 'www');
    },
    id: function(){
        this.echo("uid=0(root) gid=0(root) groups=0(root)");
        if(ga != undefined) ga('send', 'event', 'id','id');
    },
    shutdown: function() {
        this.error('SYSTEM HALT!');
        setTimeout(function(){ document.location.href = 'http://attackvector.org'; }, 2500);
        if(ga != undefined) ga('send', 'event', 'shutdown');
    },
    env: function() {
        this.echo("[[b;#44D544;]NAME=ThomHastings\nTITLE=SeniorSecurityEngineer\nBLOG=http://blog.attackvector.org\nGITHUB=https://github.com/thomhastings\nTWITTER=@thomhastings\n_=/usr/bin/env]");
        if(ga != undefined) ga('send', 'event', 'env');
    },
    cv: function() {
        this.echo("Loading my resume");
        setTimeout(function(){ document.location.href = 'http://huntergregal.com/HunterGregalResume.pdf'; }, 1000);
        if(ga != undefined) ga('send', 'event', 'env');
    },
    manifesto: function(){
        this.echo("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n"+
                "The following was written shortly after my arrest...\n"+
                "\n"+
                "                       \/\The Conscience of a Hacker/\/\n"+
                "\n"+
                "                                      by\n"+
                "\n"+
                "                               +++The Mentor+++\n"+
                "\n"+
                "                          Written on January 8, 1986\n"+
                "=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n"+
                "\n"+
                "        Another one got caught today, it's all over the papers.  "Teenager\n"+
                "Arrested in Computer Crime Scandal", "Hacker Arrested after Bank Tampering"...\n"+
                "        Damn kids.  They're all alike.\n"+
                "\n"+
                "        But did you, in your three-piece psychology and 1950's technobrain,\n"+
                "ever take a look behind the eyes of the hacker?  Did you ever wonder what\n"+
                "made him tick, what forces shaped him, what may have molded him?\n"+
                "        I am a hacker, enter my world...\n"+
                "        Mine is a world that begins with school... I'm smarter than most of\n"+
                "the other kids, this crap they teach us bores me...\n"+
                "        Damn underachiever.  They're all alike.\n"+
                "\n"+
                "        I'm in junior high or high school.  I've listened to teachers explain\n"+
                "for the fifteenth time how to reduce a fraction.  I understand it.  "No, Ms.\n"+
                "Smith, I didn't show my work.  I did it in my head..."\n"+
                "        Damn kid.  Probably copied it.  They're all alike.\n"+
                "\n"+
                "        I made a discovery today.  I found a computer.  Wait a second, this is\n"+
                "cool.  It does what I want it to.  If it makes a mistake, it's because I\n"+
                "screwed it up.  Not because it doesn't like me...\n"+
                "                Or feels threatened by me...\n"+
                "                Or thinks I'm a smart ass...\n"+
                "                Or doesn't like teaching and shouldn't be here...\n"+
                "        Damn kid.  All he does is play games.  They're all alike.\n"+
                "\n"+
                "        And then it happened... a door opened to a world... rushing through\n"+
                "the phone line like heroin through an addict's veins, an electronic pulse is\n"+
                "sent out, a refuge from the day-to-day incompetencies is sought... a board is\n"+
                "found.\n"+
                "        "This is it... this is where I belong..."\n"+
                "        I know everyone here... even if I've never met them, never talked to\n"+
                "them, may never hear from them again... I know you all...\n"+
                "        Damn kid.  Tying up the phone line again.  They're all alike...\n"+
                "\n"+
                "        You bet your ass we're all alike... we've been spoon-fed baby food at\n"+
                "school when we hungered for steak... the bits of meat that you did let slip\n"+
                "through were pre-chewed and tasteless.  We've been dominated by sadists, or\n"+
                "ignored by the apathetic.  The few that had something to teach found us will-\n"+
                "ing pupils, but those few are like drops of water in the desert.\n"+
                "\n"+
                "        This is our world now... the world of the electron and the switch, the\n"+
                "beauty of the baud.  We make use of a service already existing without paying\n"+
                "for what could be dirt-cheap if it wasn't run by profiteering gluttons, and\n"+
                "you call us criminals.  We explore... and you call us criminals.  We seek\n"+
                "after knowledge... and you call us criminals.  We exist without skin color,\n"+
                "without nationality, without religious bias... and you call us criminals.\n"+
                "You build atomic bombs, you wage wars, you murder, cheat, and lie to us\n"+
                "and try to make us believe it's for our own good, yet we're the criminals.\n"+
                "\n"+
                "        Yes, I am a criminal.  My crime is that of curiosity.  My crime is\n"+
                "that of judging people by what they say and think, not what they look like.\n"+
                "My crime is that of outsmarting you, something that you will never forgive me\n"+
                "for.\n"+
                "\n"+
                "        I am a hacker, and this is my manifesto.  You may stop this individual,\n"+
                "but you can't stop us all... after all, we're all alike.\n"+
                "\n"+
                "                               +++The Mentor+++\n"+
                "_______________________________________________________________________________\n");
        if(ga != undefined) ga('send', 'event', 'manifesto','env');
    },
    oldsite: function() {
        this.echo("Loading my old site...");
        setTimeout(function(){ document.location.href = 'https://web.archive.org/web/20130225053353/http://www.attackvector.org:80/'; }, 1000);
        if(ga != undefined) ga('send', 'event', 'env');
    },
    github: function() {
        this.echo("Loading my github...");
        setTimeout(function(){ document.location.href = 'https://github.com/thomhastings'; }, 1000);
        if(ga != undefined) ga('send', 'event', 'env');
    },
    publicPGPkey: function() {
        this.echo("Loading PGP key...");
        setTimeout(function(){ document.location.href = 'http://huntergregal.com/publicPGPkey.txt'; }, 1000);
        if(ga != undefined) ga('send', 'event', 'env');
    }
}

window.mobileAndTabletcheck = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

jQuery(document).ready(function($) {
    
     
     
           $('body').terminal(App, {
         greetings: "[[b;#44D544;]"+
		"Starting udev:...................................( OK )\n"+
		"Mount devpts:....................................( OK )\n"+
		"Configure kernel options.........................( OK )\n"+
		"Setting clock: "+Date.now()+".....................( OK )\n"+
		"SYSTEM BOOT COMPLETE.............................( OK )\n"+
		" ____  __.__                    _______                              \n"+
		"|    |/ _|__| ____    ____      \\      \\____.__. ____   ____ ___  ___\n"+
		"|      < |  |/    \\  / ___\\     /   \\   \\   |  |/    \\_/ __ \\\\  \\/  /\n"+
		"|    |  \\|  |   \\  \\/ /_/  >   /     \\   \\___  |   \\  \\  ___/_>    < \n"+
		"|____\\__ \\__|___|  /\\___  / of \\_____/   / ____|___|  /\\___  /__/\\_ \\\n"+
		"        \\/       \\/______/           \\__/_/         \\/     \\/      \\/\n"+
		"░▒▒░░                                                                          \n"+
		"░░▒▒▒▒                                                                         \n"+
		"░░░▒▒▒▒░░░░                                                                    \n"+
		"  ░░░▒▒▒▒▒░▒░              ▒▒                  ▒█                              \n"+
		"  ░░░░▒▒▒▒▒▓░              ░▒█     █▓▓█▒██▓   ▒▓█                              \n"+
		"   ░░░░▒▓▓▓                ░░░█▒   ▓▒▒▓▒▓██  ░░▒█                              \n"+
		"  ░▒▒▒▓▒▒▒▓               ░░░░▓░ ░█▒██▒▓▓██  ▒░░▓█▓▓▓█                         \n"+
		"       █▒▓██▒          ░░░░░░▒█░▒█████████▓▒▒▒░░░█▓▓▓▓█▒                       \n"+
		"        ██▒▓░          ░░░░██    ▒███████▓▓▓▓███░░▓▓▓█                         \n"+
		"         ░▓▒█░         ░▒░▒▒▒░▒▒▓██▒██▓▓▓████▓█▓░▒▒▓██                         \n"+
		"           ▓▒██        ░▓░░▒▒░░░░▓█▓██▓█░░░░░░▒▒░▒▒▓█                          \n"+
		"           █▓▓▓█         ▒█▒▒▒▒▒▒▒█▓▓▓▓█▒▒▒▒▒▒▒▒▒▓▓██▓█▓▓▓▓█░                  \n"+
		"         ▒█▓█▒▒█           ███████▒▒▒▒▒▓█▓▒▒▒▒▓███▓▓▓█▓██▓▓█▒                  \n"+
		"       █▓▓██▓██▒█▒            █▓▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█▓▓██                    \n"+
		"    ░▒█▓██ █▓██▒▓▒░         ░▒▓▓▒▒▒▒▒▒▓▓▓▓▓▓███▓▓▓▓▓█▓██▓                      \n"+
		"    ▒█▓█▒  ▓▓██▓▒▓▒         ▒█▓▓███▓▓▓▓▓▓▓▓█▒▒██▓▓▓▓▓█                         \n"+
		"   ██▓▓█▒░█▒▒██▓▓▒▒█        ▒██▒░░▒▒▓█▓▓▓▓▓▓██▓▓▓▓▓▓▓█                ░░░▒▒░   \n"+
		"   ██▒▓█▒▒█▒▒██▓▓▓▓▒█      ██░░░░▒▒▒▒▓▓▓▓▓▓███▓▓▓▓▓▓▓█               ▒▓▓▓▓▓▓█  \n"+
		"   ██▒▒█▒▒█░▒██▓▓▒▒▓▒█░   ▒▓▓▒▒▒▒▒▒▒▒▒▓▓█████▓▓▓▓▓▓▓▓█████          ▓▒▒▒▒▒▓▓▓█░\n"+
		"    ▒█▒█▒░▓░░██▓▓▓██▒▓░   █▒▒█░▒▒▓▓▓▓▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓█       ░▓▒▒▒▒▒▒▓▓▓▓█\n"+
		"       █▒  █▒███▓██ █▒▓▓▓▓█▓▒░▒░▒███▒░▒▒▓▓▓▒▓▓▓▓▓██▓▓▓▓▓▓▓        ░▓▒▒▒▒▒▒▓▓▓▓█\n"+
		"            ▓██ ███  ▓▓▓▓▓██▓▒░░░▓▒░░░▒▒▓▒▒▒▓▓▓▓▓██▓▓█▓▓▓█        ░▓▒▒▒▒▒▓▓▓▓▓█\n"+
		"                      ▒▓▒████░▓▒▒░░░▒▒░▒▒▓▓██▓███▓▓▓▓█▓██         ▒█▓▓▓▓▓▓▓▓▓▓█\n"+
		"                      ░▒▓▒█▓▓█▒▓▓▒░▒▒▒▒▓█▓▓▓▓▓▓▓▒██▓▓▓█▒░         ░▓▓▓▓▓▓▓▓▓▓█▒\n"+
		"                       ▒█▒▓▓▓▓░██▓█▒▒▒▓▓█▓▓▒▓▓▒▒▒██▓▓▓▓██        ░▓▓▓▓▓▓▓▓▓██  \n"+
		"                         ▓▓▓▓░░░▒▓▓█▓▓█▓▒▒▒▓▓▓▒▓█▓▓▓▓▓▓▓▓██     ▓██▓▓▓▓▓▓▓██▒  \n"+
		"                         █▓██░░▒▒▒▒▒██▓▒▒▒▒▓▓▒▒▓█▓▓▓▓▓▓▓▓▓▓██████▓▓▓▓▓▓▓▓█▒    \n"+
		"                         █▓██▒░░░░░░▒▒▒▒▒▒░░░▒▒▓█▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓██       \n"+
		"                         ▓▓▓▓▓▒░░░░░░░░░░░░░░▒▒▓▓▓▓▓▓▓▓███▓▓▓▓▓▓▓▓████▓        \n"+
		"                          ▓▓▓▓█▓▒▒░░░░░░▒▒░░░░██▓▓▓▓▓▓▓██ ████████             \n"+
		"                      ▓▓ █▓██▓▓▓▓███▒▒▒▒▒▒▓█▒░▓█▓▓▓▓▓▓▓██                      \n"+
		"                     █▒▒█▓▓▓▓█▓▓▓▓▓▓███▒▒▒▒▒█▓▒▓█▓▓▓▓▓▓███                     \n"+
		"                      ░▒█▒▒███▒██▓██████░░▒▒ ░▒▒██▓▓▓▓▒███ █░                  \n"+
		"                    ▒███▓░▒▒▓█ ▒▒▒▓▒░             ▓██▒███▓█▒░                  \n"+
		"                     ████▓▓███  ▒█▒▓░                █▒▒▓█▓█▒                  \n"+
		"                      ▓▓▓█▓▒▓█   ░▓▒▒▒               █▓██▓▓█▒░                 \n"+
		"                       ░▓░▒██                          ██░▒▓▒▓█                \n"+
		"                    █▒▒▒▒█▒░                            ░█░▒▒▒▒▓▓▓             \n"+
		"                    ▓████                                 ▓░▒▒░▓▒▓██           \n"+
		"                                                          ▒█▒▒████░            \n"+
		"Quick Commands\n"+
		"\techo         env          help\n"+
		"\tid           ls           whoami]\n"+
		"[[b;#44D544;]root]&#64;attackvector&#46;org:~# env\n[[b;#44D544;]NAME=ThomHastings\nTITLE=SeniorSecurityEngineer\nBLOG=http://blog.attackvector.org\nGITHUB=https://github.com/thomhastings\nTWITTER=@thomhastings\n_=/usr/bin/env]",
                prompt: function(p){
            var path = '~'
            p(e + ":" + path + "# ");
        },
        onBlur: function() {
            // prevent loosing focus
            return false;
        },
        tabcompletion: true
        });


 
});

function showHelp(consoleObj)
{
        consoleObj.echo("Available commands:");
        consoleObj.echo("\t[[b;#44D544;]blog]              #Visit my blog");
        consoleObj.echo("\t[[b;#44D544;]clear]             #Clear the console"); 
        consoleObj.echo("\t[[b;#44D544;]cv]                #Checkout my resume"); 
        consoleObj.echo("\t[[b;#44D544;]donate]            #Support my efforts (BTC)");
        consoleObj.echo("\t[[b;#44D544;]echo]              #Echo...");
        consoleObj.echo("\t[[b;#44D544;]env]               #Display environment variables");
        consoleObj.echo("\t[[b;#44D544;]github]            #Visit my github");
        consoleObj.echo("\t[[b;#44D544;]help]              #This help message");
        consoleObj.echo("\t[[b;#44D544;]id]                #Id...");
        consoleObj.echo("\t[[b;#44D544;]ls]                #Ls...");
        consoleObj.echo("\t[[b;#44ff44;]manifesto          #The Hacker's Manifesto...");
        consoleObj.echo("\t[[b;#44D544;]oldsite]           #Visit my old website");
        consoleObj.echo("\t[[b;#44D544;]publicPGPkey]      #Display my public PGP key");
        consoleObj.echo("\t[[b;#44D544;]shutdown]          #Shutdown system");
        consoleObj.echo("\t[[b;#44D544;]whoami]            #Whomai...");
        consoleObj.echo("\t[[b;#44D544;]www]               #Display information about this site");
}
