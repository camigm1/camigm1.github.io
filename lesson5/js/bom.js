const fav = document.querySelector('#fav');
const button = button.querySelector('button');

const output = document.querySelector('.list');

button.addEventListener('click', () =>{
    if( fav.value != ''){
        // create the elements of the list//
        let li = document.createElement('li');
        let deletebutton = document.createElement('button');
        //change some properties...textcontent//
        li.textContent = fav.value;
        deletebutton.textContent = '❌';
        //.....add the button to the list //
        li.append(deletebutton);
        output.append(li);
        deletebutton.addEventListener('click', function(){
            output.removeChild(li);
            fav.focus;
        })
        fav.value = '';
        fav.focus;
    }
});