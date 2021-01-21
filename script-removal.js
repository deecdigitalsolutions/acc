  //Removes auto generated script by square space which causes bad Google errors
  (function() {
    const schemaScripts = document.querySelectorAll('head script[type="application/ld+json"]');
    const head = document.querySelector('head');
    
    function removeAutoScripts() {
     for(let i=0; i < schemaScripts.length; i++) {
       if(i < 2) {
        head.removeChild(schemaScripts[i]);  
       }
     }
    }

	removeAutoScripts();
  }());
