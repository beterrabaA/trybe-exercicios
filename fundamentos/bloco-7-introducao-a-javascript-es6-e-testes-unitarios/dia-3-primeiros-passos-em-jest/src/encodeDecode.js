function encode(frase) {
    let a = frase.split('a').join('1');
    let e = a.split('e').join('2');
    let i = e.split('i').join('3');
    let o = i.split('o').join('4');
    let tudoJunto = o.split('u').join('5');
    return tudoJunto;
  }
  function decode(tudoJunto) {
    let a = tudoJunto.split('1').join('a');
    let e = a.split('2').join('e');
    let i = e.split('3').join('i');
    let o = i.split('4').join('o');
    let u = o.split('5').join('u');
    return u;
  }

  module.exports = {
    encode,
    decode
}