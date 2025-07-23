const langButton = document.getElementById("langBtn");
const skilButton = document.getElementById("skillBtn");
const expeButton = document.getElementById("expBtn");

const lang1 = document.getElementById("lang1");
const lang2 = document.getElementById("lang2");
const skil1 = document.getElementById("skill1");
const skil2 = document.getElementById("skill2");
const exp1 = document.getElementById("exp1");

function lang() {
  lang1.classList.remove('d-none');
  lang1.classList.add('d-flex');
  lang2.classList.remove('d-none');
  lang2.classList.add('d-flex');
  
  skil1.classList.remove('d-flex');
  skil1.classList.add('d-none');
  skil2.classList.remove('d-flex');
  skil2.classList.add('d-none');
  
  exp1.classList.remove('d-flex');
  exp1.classList.add('d-none');

  skilButton.classList.remove('bg-ITgren');
  skilButton.classList.add('bg-ITgray');
  expeButton.classList.remove('bg-ITgren');
  expeButton.classList.add('bg-ITgray');
  langButton.classList.remove('bg-ITgray');
  langButton.classList.add('bg-ITgren');
}

function skil() {
  lang1.classList.remove('d-flex');
  lang1.classList.add('d-none');
  lang2.classList.remove('d-flex');
  lang2.classList.add('d-none');
  
  skil1.classList.remove('d-none');
  skil1.classList.add('d-flex');
  skil2.classList.remove('d-none');
  skil2.classList.add('d-flex');
  
  exp1.classList.remove('d-flex');
  exp1.classList.add('d-none');

  langButton.classList.remove('bg-ITgren');
  langButton.classList.add('bg-ITgray');
  expeButton.classList.remove('bg-ITgren');
  expeButton.classList.add('bg-ITgray');
  skilButton.classList.remove('bg-ITgray');
  skilButton.classList.add('bg-ITgren');  
}

function exp() {
  lang1.classList.remove('d-flex');
  lang1.classList.add('d-none');
  lang2.classList.remove('d-flex');
  lang2.classList.add('d-none');
  
  skil1.classList.remove('d-flex');
  skil1.classList.add('d-none');
  skil2.classList.remove('d-flex');
  skil2.classList.add('d-none');
  
  exp1.classList.remove('d-none');
  exp1.classList.add('d-flex');

  skilButton.classList.remove('bg-ITgren');
  skilButton.classList.add('bg-ITgray');
  langButton.classList.remove('bg-ITgren');
  langButton.classList.add('bg-ITgray');
  expeButton.classList.remove('bg-ITgray');
  expeButton.classList.add('bg-ITgren');  
}

langButton.addEventListener("click",lang);
skilButton.addEventListener("click",skil);
expeButton.addEventListener("click",exp);