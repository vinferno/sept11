var game_unordered_list = document.getElementsByClassName('game_unordered_list')[0];
var game_list_item = game_unordered_list.children;
var add_submit = document.getElementById('add_submit_button');
var target_parent;
var new_minus;

function add_game(name_value){
   var new_game = name_value;
   if (new_game===''|| new_game===null){
   	return ;
   }
   var new_li = document.createElement('li');
   new_li.innerText = name_value; 
	game_unordered_list.appendChild(new_li);
	new_li.innerText = name_value; 
	new_li.classList.toggle("game_list_item");
};

function get_event_target(event_name) {
    event_name = event_name || window.event;
    return event_name.target || event_name.srcElement; 
};

function get_index(target){
	target_parent= target.parentElement;
	for (i=0;i<target_parent.children.length;i++){
		if (target_parent.children[i] === target){		
		};
	};
};

game_unordered_list.onclick = function(event) {
    var target = get_event_target(event);
    get_index(target);    
    make_minus(target); 
    function_minus(target);   
};

game_list_item[0].addEventListener('click',function(){
	game_list_item[1].classList.toggle("closed");
	game_list_item[1].classList.toggle("open");
	//add_game();
});

add_submit.addEventListener('click',function(){
	var name_value = document.getElementById("name_input_box").value;
	add_game(name_value);
	game_list_item[1].classList.toggle("closed");
	game_list_item[1].classList.toggle("open");
	document.getElementById("name_input_box").value='';
});

function make_minus(target){
	function_loop_mouse_enter();
	if (target.parentNode == game_unordered_list){
		if (target.children.length == 0){
			if (target != target_parent.children[0]){
			var new_minus = document.createElement('button');
		  	target.appendChild(new_minus);
			new_minus.innerText = "-"; 
			new_minus.classList.toggle("minus");
			add_minus_listener();
			};
		}else{if(target.children.length == 1){target.removeChild(target.children[0])};}
	};
};

   

    var function_minus = function(target) {  
    	if (target.innerText === "-"){ 
    	target.parentNode.parentNode.removeChild(target.parentNode);
       }
    };

    var add_minus_listener = function(){
		var class_minus = document.getElementsByClassName("minus");
	    for(var i=0;i<class_minus.length;i++){
	        class_minus[i].addEventListener('click', function_minus, false);
	    }
	}



document.getElementById("name_input_box").addEventListener('keydown', function keydown(){
    
        if(event.keyCode == 13) {
            document.getElementById('add_submit_button').click();
       
    };
});

var function_loop_mouse_enter = function(){
	for (var i= 0;i<game_list_item.length;i++){
		game_list_item[i].addEventListener('mouseenter', function(){
		   	for (var i = 2; game_list_item.length - 2; i++) {
			   	if (game_list_item[i].children.length>0){
			   		game_list_item[i].removeChild(game_list_item[i].children[0]);
			   	};
   			};
		});
	};
};

function_loop_mouse_enter();
