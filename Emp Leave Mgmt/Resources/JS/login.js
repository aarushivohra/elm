function myJSFx() {
  init();
  var activeTab, otherTab;

  function init() {
    activeTab = 0;  //signup=0, login=1
    otherTab=1;
    document.querySelector('.tab-'+activeTab).classList.remove('active');
    document.querySelector('.tab-'+otherTab).classList.remove('active');
    document.querySelector('.tab-'+activeTab).classList.add('active');
    document.querySelector('#active-'+otherTab).style.display='none';
  }

  document.querySelector('.tab-'+otherTab).addEventListener('click', function () {
    //toggle the active class
    document.querySelector('.tab-'+activeTab).classList.remove('active');
    document.querySelector('.tab-'+otherTab).classList.add('active');
    if(activeTab===0)
    {
      activeTab=1;
      otherTab=0;
    }

   

    // else
    // {
    //   activeTab=0;
    //   otherTab=1;
    // }
    document.querySelector('#active-'+activeTab).style.display='block';
    document.querySelector('#active-'+otherTab).style.display='none';
  });


document.querySelector('.tab-'+activeTab).addEventListener('click', function () {
  //toggle the active class
  document.querySelector('.tab-'+activeTab).classList.remove('active');
  document.querySelector('.tab-'+otherTab).classList.add('active');
  if(activeTab===1)
  {
    activeTab=0;
    otherTab=1;
  }
  document.querySelector('#active-'+otherTab).style.display='none';
  document.querySelector('#active-'+activeTab).style.display='block';
});
}