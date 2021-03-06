window.snake.more_menu = function() {
  
  // micro
  let img = new Image;
  img.src = 'https://i.postimg.cc/FHxxLK4m/micro-1.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);

  // tiny
  img = new Image;
  img.src = 'https://i.postimg.cc/dtr6JBNh/tiny-1.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);

  // super big
  img = new Image;
  img.src = 'https://i.postimg.cc/mg4wkHK8/superbig-1.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);

  // ultra big
  img = new Image;
  img.src = 'https://i.postimg.cc/1RLMxTBx/ultrabig-1.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);

  // humongous
  img = new Image;
  img.src = 'https://i.postimg.cc/vmHtLdYn/humoungus-1.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);

  // too big
  img = new Image;
  img.src = 'https://i.postimg.cc/8CKBZnc0/toobigg-1.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);

  // too big
  img = new Image;
  img.src = 'https://i.postimg.cc/Fsdz2CRL/purgatory.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#size').appendChild(img);


  /*--SPEEDS--*/

  // snail
  img = new Image;
  img.src = 'https://i.postimg.cc/vHkC7G39/snai.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

  // lightning
  img = new Image;
  img.src = 'https://i.postimg.cc/9Q9KJsnk/bolt.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

  // desert bus
  img = new Image;
  img.src = 'https://i.postimg.cc/HL6f0Hd9/bus.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

  // bullet
  img = new Image;
  img.src = 'https://i.postimg.cc/xCqBt7dD/bullet.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

  // hyperbullet
  img = new Image;
  img.src = 'https://i.postimg.cc/KYG6g4SY/hyperbullet.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

  // ultrabullet
  img = new Image;
  img.src = 'https://i.postimg.cc/7Znv60Rc/no.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

  // yeetbullet
  img = new Image;
  img.src = 'https://i.postimg.cc/NMCVrwR2/aaaaaaaaa.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

  // eternity
  img = new Image;
  img.src = 'https://i.postimg.cc/mDHJv50v/eternal.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);

  // ultradeath
  img = new Image;
  img.src = 'https://i.postimg.cc/wjKWJBbb/ultradeath.png';
  img.width = 47;
  img.height = 47;
  img.class = 'DqMRee SsAred';
  document.querySelector('#speed').appendChild(img);


  /*--COUNTS--*/

  // 13
  img = new Image;
  img.src = 'https://i.postimg.cc/sXM1sTcq/manyapples-1.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#count').appendChild(img);

  // 25
  img = new Image;
  img.src = 'https://i.postimg.cc/YSnj551Q/appletree-1.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#count').appendChild(img);

  // 87
  img = new Image;
  img.src = 'https://i.postimg.cc/mZmx4Tqc/alotactually.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#count').appendChild(img);

  // apple bomb
  img = new Image;
  img.src = 'https://i.postimg.cc/RZR0fWZM/applebomb.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#count').appendChild(img);

  // apple nuke
  img = new Image;
  img.src = 'https://i.postimg.cc/fbvMtyDx/applenuke.png';
  img.width = 47;
  img.height = 47;
  document.querySelector('#count').appendChild(img);

  /* making do things */
  const scripts = document.getElementsByTagName('script');
  for (let script of scripts) {
    //Request i guess?
    const req = new XMLHttpRequest();

    //Opens
    req.open('GET', script.src);

    //When loads
    req.onload = function () {
      const code = this.responseText;
      if (code.indexOf('#A2') === -1)
        return;

      const functio = code.match(
        /[a-zA-Z0-9_$]{1,6}\.prototype\.resetState=function\(a\){a=void 0===a\?!0:a;[^]*?this,!1\)}/
      )[0];
      const Apple_Count_Thing = functio.match(
        /0!==this\.[a-zA-Z0-9_$]{1,6}/
      )[0].replace('0!==', '');
      const Place_The_Apple_Maybe = functio.match(
        /this\.[a-zA-Z0-9_$]{1,6}\.push\([a-zA-Z0-9_$]{1,6}\(this,/
      )[0];
      const inevilmodes = functio.match(
        /[a-zA-Z0-9_$]{1,6}\(this,2\)\|\|[a-zA-Z0-9_$]{1,6}\(this,8\)\|\|[a-zA-Z0-9_$]{1,6}\(this,9\)/
      )[0];

      eval(
        //Replace FUnction
        functio.replace(
          `if(c=${inevilmodes})`,
          `
          if(${Apple_Count_Thing} > 2) {
            if(!(${inevilmodes})) {
              if(${Apple_Count_Thing} === 3) {
                ${Place_The_Apple_Maybe} 1, 2));
                ${Place_The_Apple_Maybe} -1, 2));
                ${Place_The_Apple_Maybe} -3, 2));
                ${Place_The_Apple_Maybe} 0, 1));
                ${Place_The_Apple_Maybe} -2, 1));
                ${Place_The_Apple_Maybe} 1, 0));
                ${Place_The_Apple_Maybe} -1, 0));
                ${Place_The_Apple_Maybe} -3, 0));
                ${Place_The_Apple_Maybe} 0, -1));
                ${Place_The_Apple_Maybe} -2, -1));
                ${Place_The_Apple_Maybe} 1, -2));
                ${Place_The_Apple_Maybe} -1, -2));
                ${Place_The_Apple_Maybe} -3, -2));
              } else if(${Apple_Count_Thing} === 4) {
                ${Place_The_Apple_Maybe} 1, 2));
                ${Place_The_Apple_Maybe} 0, 2));
                ${Place_The_Apple_Maybe} -1, 2));
                ${Place_The_Apple_Maybe} -2, 2));
                ${Place_The_Apple_Maybe} -3, 2));
                ${Place_The_Apple_Maybe} 1, 1));
                ${Place_The_Apple_Maybe} 0, 1));
                ${Place_The_Apple_Maybe} -1, 1));
                ${Place_The_Apple_Maybe} -2, 1));
                ${Place_The_Apple_Maybe} -3, 1));
                ${Place_The_Apple_Maybe} 1, 0));
                ${Place_The_Apple_Maybe} 0, 0));
                ${Place_The_Apple_Maybe} -1, 0));
                ${Place_The_Apple_Maybe} -2, 0));
                ${Place_The_Apple_Maybe} -3, 0));
                ${Place_The_Apple_Maybe} 1, -1));
                ${Place_The_Apple_Maybe} 0, -1));
                ${Place_The_Apple_Maybe} -1, -1));
                ${Place_The_Apple_Maybe} -2, -1));
                ${Place_The_Apple_Maybe} -3, -1));
                ${Place_The_Apple_Maybe} 1, -2));
                ${Place_The_Apple_Maybe} 0, -2));
                ${Place_The_Apple_Maybe} -1, -2));
                ${Place_The_Apple_Maybe} -2, -2));
                ${Place_The_Apple_Maybe} -3, -2));
              } else if(${Apple_Count_Thing} === 5) {
                for (i=-7;i<3;i++) {
                  ${Place_The_Apple_Maybe} i, -4));
                }
                for (i=-7;i<3;i++) {
                  ${Place_The_Apple_Maybe} i, -3));
                }
                for (i=-7;i<3;i++) {
                  ${Place_The_Apple_Maybe} i, -2));
                }
                for (i=-7;i<3;i++) {
                  ${Place_The_Apple_Maybe} i, -1));
                }
                for (i=-3;i<3;i++) {
                  ${Place_The_Apple_Maybe} i, 0));
                }
                for (i=-7;i<3;i++) {
                  ${Place_The_Apple_Maybe} i, 1));
                }
                for (i=-7;i<3;i++) {
                  ${Place_The_Apple_Maybe} i, 2));
                }
                for (i=-7;i<3;i++) {
                  ${Place_The_Apple_Maybe} i, 3));
                }
                for (i=-7;i<3;i++) {
                  ${Place_The_Apple_Maybe} i, 4));
                }
              } else if(${Apple_Count_Thing} === 6) {
                for (i=0;i<200;i++) {
                  ${Place_The_Apple_Maybe} -1, 0));
                }
              } else if(${Apple_Count_Thing} === 7) {
                  for (i=0;i<10000;i++) {
                    ${Place_The_Apple_Maybe} -1, 0));
                  }
              }  else
                ${Place_The_Apple_Maybe} 100000, 1));
            } else {
              if(${Apple_Count_Thing} < 6)
                for(
                  let i = 0; i < (
                    ${Apple_Count_Thing} === 3
                      ? 13
                    : ${Apple_Count_Thing} === 4
                      ? 40
                    : ${Apple_Count_Thing} === 5
                      ? 100
                    : ${Apple_Count_Thing} === 6
                      ? 0
                    : ${Apple_Count_Thing} === 7
                      ? 0
                    : 0
                  ); i++
                ) {
                  ${Place_The_Apple_Maybe} i - ~~((
                    ${Apple_Count_Thing} === 3
                      ? 13
                    : ${Apple_Count_Thing} === 4
                      ? 40
                    : ${Apple_Count_Thing} === 5
                      ? 100
                    : ${Apple_Count_Thing} === 6
                      ? 0
                    : ${Apple_Count_Thing} === 7
                      ? 0
                    : 0
                  ) / 1.25), -4));
                  ${Place_The_Apple_Maybe} i- ~~((
                    ${Apple_Count_Thing} === 3
                      ? 13
                    : ${Apple_Count_Thing} === 4
                      ? 40
                    : ${Apple_Count_Thing} === 5
                      ? 100
                    : ${Apple_Count_Thing} === 6
                      ? 0
                    : ${Apple_Count_Thing} === 7
                      ? 0
                    : 0
                  ) / 1.25), 4));
                  
                }
              else {
                for(let i = 0; i < (
                  ${Apple_Count_Thing} === 6
                    ? 200
                  : 20000
                ); i++)
                  ${Place_The_Apple_Maybe} 0, 0));
              }
            }
          } else if(${inevilmodes})
          `
        )
      );

      eval(
        //Not sure
        code.match(
          /[a-zA-Z0-9_$]{1,6}=function\(a\){switch\(a\.[a-zA-Z0-9_$]{1,6}\){case 1:return\.66[^}]*?1}}/
        )[0].replace(
          '1.33;',
          `1.33;case 3:return 1.85;case 4:return 0.45;case 5:return 18.5;case 6:return 0.35;case 7:return 0.25;case 8:return 0.15;case 9:return 0.05;case 10:return 26640;case 11:return 0.00001;`
        )
      );

      eval(
        code.match(
          /[a-zA-Z0-9_$]{1,6}=function\(a\){switch\(a\.[a-zA-Z0-9_$]{1,6}\){case 2:return 512;[^]*?256}}/
        )[0].replace(
          '96;',
          `96;case 3:return ${e};case 4:return 48;case 5:return 1200;case 6:return 3500;case 7:return 10000;case 8:return 25000;case 9:return 100000;`
        )
      );
    };
    //Send the request
    req.send();
  }
};
