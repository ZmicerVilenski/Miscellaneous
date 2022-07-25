const base64Keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

function base64_decode(data) {

    let o1, o2, o3, h1, h2, h3, h4, bits, enc = '';
  
    let i = 0;
    while (i < data.length) {
      h1 = base64Keys.indexOf(data.charAt(i++));
      h2 = base64Keys.indexOf(data.charAt(i++));
      h3 = base64Keys.indexOf(data.charAt(i++));
      h4 = base64Keys.indexOf(data.charAt(i++));
  
      bits = h1<<18 | h2<<12 | h3<<6 | h4;
  
      o1 = bits>>16 & 0xff;
      o2 = bits>>8 & 0xff;
      o3 = bits & 0xff;
  
      if (h3 == 64)   enc += String.fromCharCode(o1);
      else if (h4 == 64) enc += String.fromCharCode(o1, o2);
      else         enc += String.fromCharCode(o1, o2, o3);
    } 
  
    return enc;
  }