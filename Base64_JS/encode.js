const base64Keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function encodeBase64(input) {

  let chr1, chr2, chr3, enc1, enc2, enc3, enc4, output = '';
  
  let i = 0;
  while (i < input.length) {
    chr1 = input.charCodeAt(i++);
    chr2 = input.charCodeAt(i++);
    chr3 = input.charCodeAt(i++);

    // Сдвиг на 2 бита вправо и получаем 6 бит
    enc1 = chr1 >> 2;
    // 2 последних бита chr1 и складываем их с четырьмя из chr2
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    // 4 последних бита chr2 и складываем их с двумя из chr3
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    // 6 последних бит из chr3
    enc4 = chr3 & 63;

    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }

    output = output +
      base64Keys.charAt(enc1) +
      base64Keys.charAt(enc2) +
      base64Keys.charAt(enc3) +
      base64Keys.charAt(enc4);
  }

  return output;
}