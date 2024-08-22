let sayilar = [prompt(`Birinci Sayiyi Giriniz`),prompt(`İkinci Sayiyi Giriniz`), prompt(`Üçüncü Sayiyi Giriniz`, prompt(`Dördüncü Sayiyi Giriniz`))] 



let toplam =0 ,
enYüksek = sayilar[0],
enDüşük =  sayilar[0]


for( let i=0; i<sayilar.length; i++) {

    const sayı = sayilar[i]

    toplam +=sayı 

    if(sayı>enYüksek){

            enYüksek = sayı

    }

    if(sayı<enDüşük) {

        enDüşük = sayı
    }


}


alert(`Toplam : ${  toplam}`)

alert(` En yüksek sayı : ${enYüksek}`)

alert(`En düşük sayı : ${enDüşük}`)