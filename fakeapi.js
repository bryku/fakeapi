function fakeapi(url){
  return new Promise((resp, reje)=>{
    setTimeout(()=>{
      let data = fakeapidata;
      let dirs = url.replace('./','').split('/');
      for(let di = 0; di < dirs.length; di++){
        if(data[dirs[di]]){ data = data[dirs[di]]; }
        else{ data = false; }
      }
      if(data){
        resp({
          data: data,
          json: function(){return this.data; },
          text: function(){return JSON.stringify(this.data); },
        }); 
      }else{
        reje({message: 'UNKNOWN REQUEST'});
      }
    },Math.round(Math.random() * 3000));
  });
}
let fakeapidata = {
  'books': [
    {title: 'Pride and Prejudice', author: 'Jane Austen', release_date: '1813-01-28'},
    {title: 'To Kill a Mockingbird', author: 'Harper Lee', release_date: '1960-07-11'},
    {title: 'The Hobbit', author: 'J.R.R. Tolkien', release_data: '1937-09-21'},
  ],
};
