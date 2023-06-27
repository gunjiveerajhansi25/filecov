
        var newImage,showImg;
        function loadFile(event) {
            showImg =document.getElementById("showImg");
            showImg.src=URL.createObjectURL(event.target.file[0]);
            showImg.onload=function() {
                URL.revokeObjectURL(showImg.src)      
        
            }
      };
            
        
        function pdfDown() {
            console.log(newImage);
            doc.save('ImgToPDF.pdf')
        }

