 //Sidenav
 const sidenav = document.querySelector('.sidenav');
 M.Sidenav.init(sidenav, {});

 //Slider
 const slider = document.querySelector('.slider');
 M.Slider.init(slider, {
   indicators: false,
   height: 480,
   transition: 500,
   interval: 6000
 });

 //Autocomplete
 const ac = document.querySelector('.autocomplete');
 M.Autocomplete.init(ac, {
   data: {
     "Dubai" : null,
     "Maldives" : null,
     "Seychelles" : null,
     "Nairobi" : null,
     "New York" : null,
     "London" : null,
     "South Africa" : null,
     "Canada" : null,
     "Europe" : null
   }
 });

 //Material Boxed
 const mb = document.querySelectorAll('.materialboxed');
 M.Materialbox.init(mb, {});

 //Scrollspy
 const ss = document.querySelectorAll('.scrollspy');
 M.ScrollSpy.init(ss, {});