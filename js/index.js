const logo = document.querySelectorAll('#logo path.svg-char')
for(let i = 0;i < logo.length; i++)
  {
    console.log('Letter'+ i +' to '+ logo[i].getTotalLength())
    // console.log('Latter ${i} to ${logo[i].getTotalLength()}');
  }